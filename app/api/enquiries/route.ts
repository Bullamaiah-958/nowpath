import { createSign } from 'node:crypto'
import { courses } from '@/lib/courses'
import { locations } from '@/lib/locations'
import { validateEnquiryName, validateEnquiryPhone } from '@/lib/enquiry-validation'

export const runtime = 'nodejs'

const sheetId = '1e4T-80F8M8lfPkEvFO7eIb_bfY_Mog-SOSyUnWsFqII'
const allowedPaths = new Set([
  '/contact',
  '/servicenow-online-training',
  '/servicenow-classroom-training-hyderabad',
  '/servicenow-weekend-training-hyderabad',
  '/servicenow-now-assist-training',
  ...locations.map((location) => `/locations/${location.slug}`),
])
const allowedCourses = new Set([...courses.map((course) => course.name), 'Not sure yet — need guidance'])

async function readBody(request: Request) {
  const reader = request.body?.getReader()
  if (!reader) throw new Error('Missing request body')
  const chunks: Uint8Array[] = []
  let size = 0
  for (;;) {
    const { done, value } = await reader.read()
    if (done) break
    size += value.byteLength
    if (size > 8192) {
      await reader.cancel()
      throw new Error('Request body too large')
    }
    chunks.push(value)
  }
  const bytes = new Uint8Array(size)
  let offset = 0
  for (const chunk of chunks) {
    bytes.set(chunk, offset)
    offset += chunk.byteLength
  }
  return JSON.parse(new TextDecoder().decode(bytes)) as unknown
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

async function appendToSheet(values: string[]) {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n')
  if (!email || !privateKey) throw new Error('Google Sheets credentials are not configured')

  const now = Math.floor(Date.now() / 1000)
  const encode = (value: object) => Buffer.from(JSON.stringify(value)).toString('base64url')
  const unsigned = `${encode({ alg: 'RS256', typ: 'JWT' })}.${encode({
    iss: email,
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    aud: 'https://oauth2.googleapis.com/token',
    iat: now,
    exp: now + 3600,
  })}`
  const signer = createSign('RSA-SHA256')
  signer.update(unsigned)
  const assertion = `${unsigned}.${signer.sign(privateKey, 'base64url')}`
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion }),
    signal: AbortSignal.timeout(10000),
    cache: 'no-store',
  })
  if (!tokenResponse.ok) throw new Error(`Google authentication failed (${tokenResponse.status})`)
  const token: unknown = await tokenResponse.json()
  if (!isRecord(token) || typeof token.access_token !== 'string') throw new Error('Google authentication returned no access token')

  const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent('Sheet1!A:G')}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token.access_token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ values: [values] }),
    signal: AbortSignal.timeout(10000),
    cache: 'no-store',
  })
  if (!response.ok) throw new Error(`Google Sheets append failed (${response.status})`)
}

export async function POST(request: Request) {
  const origin = request.headers.get('origin')
  let originHost = ''
  try {
    const url = new URL(origin ?? '')
    if (url.protocol === 'https:' || url.protocol === 'http:') originHost = url.host
  } catch {
    return Response.json({ error: 'Invalid request origin.' }, { status: 403 })
  }
  if (!originHost || originHost !== request.headers.get('host')) {
    return Response.json({ error: 'Invalid request origin.' }, { status: 403 })
  }
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
    return Response.json({ error: 'Invalid request format.' }, { status: 415 })
  }

  let body: unknown
  try {
    body = await readBody(request)
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 })
  }
  if (!isRecord(body) || typeof body.name !== 'string' || typeof body.phone !== 'string' ||
      typeof body.course !== 'string' || typeof body.mode !== 'string' || typeof body.message !== 'string' ||
      typeof body.subject !== 'string' || typeof body.path !== 'string' || body.website !== '') {
    return Response.json({ error: 'Invalid enquiry details.' }, { status: 400 })
  }

  const name = body.name.trim()
  const subject = body.subject.trim()
  const message = body.message.trim()
  if (validateEnquiryName(name) || validateEnquiryPhone(body.phone) ||
      !allowedCourses.has(body.course) || !['Online', 'Classroom'].includes(body.mode) ||
      message.length > 1000 || !subject || subject.length > 250 || !allowedPaths.has(body.path)) {
    return Response.json({ error: 'Please check the enquiry details and try again.' }, { status: 400 })
  }

  const date = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata', dateStyle: 'medium', timeStyle: 'short',
  }).format(new Date())
  const sheetMessage = [`Training mode: ${body.mode}`, ...(message ? [`Message: ${message}`] : [])].join('\n')
  try {
    await appendToSheet(['', name, subject, body.phone, body.course, sheetMessage, date])
  } catch (error) {
    console.error('Enquiry could not be saved to Google Sheets:', error instanceof Error ? error.message : 'Unknown error')
    return Response.json({ error: 'We could not confirm that your enquiry was saved. You can try again or continue on WhatsApp.' }, { status: 502 })
  }
  return Response.json({ saved: true })
}
