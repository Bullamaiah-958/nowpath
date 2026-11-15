import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { AdminEnquiries } from '@/components/admin-enquiries'
import { adminCookieName, verifyAdminSession } from '@/lib/admin-auth'

export const metadata: Metadata = {
  title: 'Admin enquiries',
  robots: { index: false, follow: false },
}

export default async function AdminEnquiriesPage() {
  const cookieStore = await cookies()
  const session = await verifyAdminSession(cookieStore.get(adminCookieName)?.value ?? '')
  if (!session) redirect('/admin')
  if (session.mustChangePassword) redirect('/admin/change-password')
  return <AdminEnquiries email={session.email} />
}
