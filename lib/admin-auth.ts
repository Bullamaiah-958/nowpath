import { createHash, createHmac, randomBytes, scrypt, timingSafeEqual } from 'node:crypto'
import { promisify } from 'node:util'
import { neon } from '@neondatabase/serverless'

const scryptAsync = promisify(scrypt)
export const adminCookieName = 'nowpath_admin'
export const adminSessionMaxAge = 8 * 60 * 60
const passwordKeyLength = 64
const passwordMinLength = 12
const loginFailureLimit = 5

type AdminSession = {
  email: string
  expiresAt: number
  version: number
}

export function getSql() {
  const databaseUrl = process.env.DATABASE_URL ?? process.env.POSTGRES_URL
  if (!databaseUrl) throw new Error('DATABASE_URL or POSTGRES_URL is not configured')
  return neon(databaseUrl)
}

export function getAdminEmail() {
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('ADMIN_EMAIL is not configured with a valid email address')
  }
  return email
}

function getSessionSecret() {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret || secret.length < 32) throw new Error('ADMIN_SESSION_SECRET must be at least 32 characters')
  return secret
}

export function validatePassword(password: string) {
  if (password.length < passwordMinLength || password.length > 128) {
    return 'Password must be between 12 and 128 characters.'
  }
  return ''
}

export async function hashPassword(password: string) {
  const salt = randomBytes(16)
  const hash = await scryptAsync(password, salt, passwordKeyLength) as Buffer
  return { salt: salt.toString('hex'), hash: hash.toString('hex') }
}

export async function verifyPassword(password: string, salt: string, expectedHash: string) {
  const expected = Buffer.from(expectedHash, 'hex')
  const actual = await scryptAsync(password, Buffer.from(salt, 'hex'), passwordKeyLength) as Buffer
  return expected.length === actual.length && timingSafeEqual(expected, actual)
}

export function createAdminSession(email: string, version: number) {
  const payload = Buffer.from(JSON.stringify({
    email,
    expiresAt: Math.floor(Date.now() / 1000) + adminSessionMaxAge,
    version,
  } satisfies AdminSession)).toString('base64url')
  const signature = createHmac('sha256', getSessionSecret()).update(payload).digest('base64url')
  return `${payload}.${signature}`
}

function parseAdminSession(token: string): AdminSession | null {
  const [payload, signature, extra] = token.split('.')
  if (!payload || !signature || extra) return null
  let actualSignature: Buffer
  try {
    actualSignature = Buffer.from(signature, 'base64url')
  } catch {
    return null
  }
  const expectedSignature = createHmac('sha256', getSessionSecret()).update(payload).digest()
  if (actualSignature.length !== expectedSignature.length || !timingSafeEqual(actualSignature, expectedSignature)) return null

  try {
    const data: unknown = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'))
    if (
      typeof data === 'object' && data !== null &&
      'email' in data && typeof data.email === 'string' &&
      'expiresAt' in data && typeof data.expiresAt === 'number' &&
      'version' in data && typeof data.version === 'number'
    ) {
      return { email: data.email, expiresAt: data.expiresAt, version: data.version }
    }
  } catch {
    return null
  }
  return null
}

export function readSessionCookie(cookieHeader: string | null) {
  const cookie = cookieHeader?.split(';').map((part) => part.trim()).find((part) => part.startsWith(`${adminCookieName}=`))
  if (!cookie) return ''
  try {
    return decodeURIComponent(cookie.slice(adminCookieName.length + 1))
  } catch {
    return ''
  }
}

export async function verifyAdminSession(token: string) {
  const session = parseAdminSession(token)
  if (!session || session.expiresAt <= Math.floor(Date.now() / 1000)) return null
  if (session.email !== getAdminEmail()) return null

  const rows = await getSql()`
    SELECT email, session_version, must_change_password
    FROM admin_users
    WHERE email = ${session.email}
    LIMIT 1
  `
  const admin = rows[0]
  if (!admin || admin.session_version !== session.version) return null
  return {
    email: String(admin.email),
    mustChangePassword: Boolean(admin.must_change_password),
  }
}

export function isSameOrigin(request: Request) {
  const origin = request.headers.get('origin')
  if (!origin) return false
  try {
    return new URL(origin).host === request.headers.get('host')
  } catch {
    return false
  }
}

export async function readJsonBody(request: Request): Promise<Record<string, unknown> | null> {
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) return null
  const reader = request.body?.getReader()
  if (!reader) return null
  const chunks: Uint8Array[] = []
  let size = 0
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    size += value.byteLength
    if (size > 8192) {
      await reader.cancel()
      return null
    }
    chunks.push(value)
  }
  const bytes = new Uint8Array(size)
  let offset = 0
  for (const chunk of chunks) {
    bytes.set(chunk, offset)
    offset += chunk.byteLength
  }
  try {
    const value: unknown = JSON.parse(new TextDecoder().decode(bytes))
    return typeof value === 'object' && value !== null && !Array.isArray(value)
      ? value as Record<string, unknown>
      : null
  } catch {
    return null
  }
}

function authAttemptKey(request: Request, action: string) {
  const ip = request.headers.get('x-real-ip') ?? request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown'
  return createHash('sha256').update(`${action}:${ip}`).digest('hex')
}

export async function isAuthRateLimited(request: Request, action: string) {
  const key = authAttemptKey(request, action)
  const rows = await getSql()`
    SELECT locked_until > NOW() AS blocked
    FROM admin_auth_attempts
    WHERE attempt_key = ${key}
    LIMIT 1
  `
  return rows[0]?.blocked === true
}

export async function recordAuthFailure(request: Request, action: string) {
  const key = authAttemptKey(request, action)
  await getSql()`
    INSERT INTO admin_auth_attempts (attempt_key, failures)
    VALUES (${key}, 1)
    ON CONFLICT (attempt_key) DO UPDATE SET
      failures = CASE
        WHEN admin_auth_attempts.locked_until IS NOT NULL
          AND admin_auth_attempts.locked_until <= NOW() THEN 1
        ELSE admin_auth_attempts.failures + 1
      END,
      locked_until = CASE
        WHEN (
          CASE
            WHEN admin_auth_attempts.locked_until IS NOT NULL
              AND admin_auth_attempts.locked_until <= NOW() THEN 1
            ELSE admin_auth_attempts.failures + 1
          END
        ) >= ${loginFailureLimit} THEN NOW() + INTERVAL '15 minutes'
        ELSE NULL
      END
  `
}

export async function clearAuthFailures(request: Request, action: string) {
  const key = authAttemptKey(request, action)
  await getSql()`DELETE FROM admin_auth_attempts WHERE attempt_key = ${key}`
}

export function verifyRecoveryKey(input: string) {
  const expected = process.env.ADMIN_RECOVERY_KEY
  if (!expected || expected.length < 32) throw new Error('ADMIN_RECOVERY_KEY must be configured with at least 32 characters')
  const inputHash = createHash('sha256').update(input).digest()
  const expectedHash = createHash('sha256').update(expected).digest()
  return timingSafeEqual(inputHash, expectedHash)
}

export function sessionCookie(token: string) {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  return `${adminCookieName}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${adminSessionMaxAge}${secure}`
}

export function clearSessionCookie() {
  const secure = process.env.NODE_ENV === 'production' ? '; Secure' : ''
  return `${adminCookieName}=; Path=/; HttpOnly; SameSite=Strict; Max-Age=0${secure}`
}

export { passwordMinLength }
