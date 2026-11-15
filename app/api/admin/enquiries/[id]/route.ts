import { getSql, isSameOrigin, readSessionCookie, verifyAdminSession } from '@/lib/admin-auth'

export const runtime = 'nodejs'

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  if (!isSameOrigin(request)) return Response.json({ error: 'Invalid request origin.' }, { status: 403 })

  const session = await verifyAdminSession(readSessionCookie(request.headers.get('cookie')))
  if (!session) return Response.json({ error: 'Please log in to delete enquiries.' }, { status: 401 })
  if (session.mustChangePassword) {
    return Response.json({ error: 'Change your temporary password to continue.' }, { status: 403 })
  }

  const { id } = await params
  if (!/^[1-9]\d{0,18}$/.test(id) || (id.length === 19 && id > '9223372036854775807')) {
    return Response.json({ error: 'Invalid enquiry ID.' }, { status: 400 })
  }

  const deleted = await getSql()`
    DELETE FROM enquiries
    WHERE id = ${id}
    RETURNING id
  `
  if (deleted.length === 0) return Response.json({ error: 'Enquiry not found.' }, { status: 404 })
  return Response.json({ deleted: true }, { headers: { 'Cache-Control': 'private, no-store' } })
}
