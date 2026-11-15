import {
  getSql,
  createAdminSession,
  hashPassword,
  isSameOrigin,
  readJsonBody,
  readSessionCookie,
  sessionCookie,
  validatePassword,
  verifyAdminSession,
  verifyPassword,
} from '@/lib/admin-auth'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ error: 'Invalid request origin.' }, { status: 403 })
  const body = await readJsonBody(request)
  if (!body || typeof body.newPassword !== 'string' ||
      (body.currentPassword !== undefined && typeof body.currentPassword !== 'string')) {
    return Response.json({ error: 'Enter your current and new password.' }, { status: 400 })
  }
  const error = validatePassword(body.newPassword)
  if (error) return Response.json({ error }, { status: 400 })

  const session = await verifyAdminSession(readSessionCookie(request.headers.get('cookie')))
  if (!session) return Response.json({ error: 'Please log in again.' }, { status: 401 })

  const rows = await getSql()`
    SELECT password_salt, password_hash, session_version
    FROM admin_users
    WHERE email = ${session.email}
    LIMIT 1
  `
  const admin = rows[0]
  if (!admin) return Response.json({ error: 'Admin account not found.' }, { status: 404 })
  if (!session.mustChangePassword) {
    if (typeof body.currentPassword !== 'string' ||
        !await verifyPassword(body.currentPassword, String(admin.password_salt), String(admin.password_hash))) {
      return Response.json({ error: 'Current password is incorrect.' }, { status: 400 })
    }
  }

  const { salt, hash } = await hashPassword(body.newPassword)
  await getSql()`
    UPDATE admin_users
    SET password_salt = ${salt},
        password_hash = ${hash},
        session_version = session_version + 1,
        must_change_password = FALSE,
        password_changed_at = NOW()
    WHERE email = ${session.email}
  `
  const updatedAdminRows = await getSql()`
    SELECT session_version FROM admin_users WHERE email = ${session.email} LIMIT 1
  `
  const response = Response.json({ saved: true })
  response.headers.append('Set-Cookie', sessionCookie(createAdminSession(session.email, Number(updatedAdminRows[0].session_version))))
  return response
}
