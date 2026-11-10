import { neon } from '@neondatabase/serverless'
import { courses } from '@/lib/courses'
import { locations } from '@/lib/locations'
import { validateEnquiryName, validateEnquiryPhone } from '@/lib/enquiry-validation'

export const runtime = 'nodejs'

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

async function saveEnquiry(enquiry: {
  name: string
  subject: string
  phone: string
  course: string
  mode: string
  message: string
  path: string
}) {
  const databaseUrl = process.env.DATABASE_URL
  if (!databaseUrl) throw new Error('DATABASE_URL is not configured')

  const sql = neon(databaseUrl)
  await sql`
    INSERT INTO enquiries (name, subject, phone, course, mode, message, path)
    VALUES (
      ${enquiry.name},
      ${enquiry.subject},
      ${enquiry.phone},
      ${enquiry.course},
      ${enquiry.mode},
      ${enquiry.message},
      ${enquiry.path}
    )
  `
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

  try {
    await saveEnquiry({
      name,
      subject,
      phone: body.phone,
      course: body.course,
      mode: body.mode,
      message,
      path: body.path,
    })
  } catch (error) {
    console.error('Enquiry could not be saved to Neon Postgres:', error instanceof Error ? error.message : 'Unknown error')
    return Response.json({ error: 'We could not confirm that your enquiry was saved. You can try again or continue on WhatsApp.' }, { status: 502 })
  }
  return Response.json({ saved: true })
}
