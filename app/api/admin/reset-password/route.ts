import {
  clearAuthFailures,
  getAdminEmail,
  getSql,
  hashPassword,
  isAuthRateLimited,
  isSameOrigin,
  readJsonBody,
  recordAuthFailure,
  validatePassword,
  verifyRecoveryKey,
} from '@/lib/admin-auth'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ error: 'Invalid request origin.' }, { status: 403 })
  const body = await readJsonBody(request)
  if (!body || typeof body.email !== 'string' ||
      typeof body.recoveryKey !== 'string' || typeof body.newPassword !== 'string') {
    return Response.json({ error: 'Enter all reset details.' }, { status: 400 })
  }
  const error = validatePassword(body.newPassword)
  if (error) return Response.json({ error }, { status: 400 })
  if (await isAuthRateLimited(request, 'password-reset')) {
    return Response.json({ error: 'Too many attempts. Try again in 15 minutes.' }, { status: 429 })
  }

  const email = body.email.trim().toLowerCase()
  let validRecoveryKey = false
  try {
    validRecoveryKey = verifyRecoveryKey(body.recoveryKey)
  } catch (error) {
    console.error('Admin password recovery is not configured:', error instanceof Error ? error.message : 'Unknown error')
    return Response.json({ error: 'Password recovery is not configured.' }, { status: 503 })
  }
  if (email !== getAdminEmail() || !validRecoveryKey) {
    await recordAuthFailure(request, 'password-reset')
    return Response.json({ error: 'The reset details are invalid.' }, { status: 400 })
  }

  const adminRows = await getSql()`SELECT email FROM admin_users WHERE email = ${email} LIMIT 1`
  if (!adminRows[0]) {
    await recordAuthFailure(request, 'password-reset')
    return Response.json({ error: 'The reset details are invalid.' }, { status: 400 })
  }
  const { salt, hash } = await hashPassword(body.newPassword)
  await getSql()`
    UPDATE admin_users
    SET password_salt = ${salt},
        password_hash = ${hash},
        session_version = session_version + 1,
        must_change_password = FALSE,
        password_changed_at = NOW()
    WHERE email = ${email}
  `
  await clearAuthFailures(request, 'password-reset')
  return Response.json({ saved: true })
}
