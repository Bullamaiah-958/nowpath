import { clearSessionCookie, isSameOrigin } from '@/lib/admin-auth'

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return Response.json({ error: 'Invalid request origin.' }, { status: 403 })
  const response = Response.json({ saved: true })
  response.headers.append('Set-Cookie', clearSessionCookie())
  return response
}
