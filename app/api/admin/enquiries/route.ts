import { getSql, readSessionCookie, verifyAdminSession } from '@/lib/admin-auth'

export const runtime = 'nodejs'

export async function GET(request: Request) {
  const session = await verifyAdminSession(readSessionCookie(request.headers.get('cookie')))
  if (!session) return Response.json({ error: 'Please log in to view enquiries.' }, { status: 401 })
  if (session.mustChangePassword) {
    return Response.json({ error: 'Change your temporary password to continue.' }, { status: 403 })
  }

  const enquiries = await getSql()`
    SELECT id::text AS id, name, subject, phone, course, mode, message, path, created_at::text AS created_at
    FROM enquiries
    ORDER BY created_at DESC
    LIMIT 500
  `
  return Response.json({ enquiries }, { headers: { 'Cache-Control': 'private, no-store' } })
}
