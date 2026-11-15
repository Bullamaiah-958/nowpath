import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { AdminLoginForm } from '@/components/admin-login-form'
import { adminCookieName, verifyAdminSession } from '@/lib/admin-auth'

export const metadata: Metadata = {
  title: 'Admin sign in',
  robots: { index: false, follow: false },
}

export default async function AdminPage() {
  const cookieStore = await cookies()
  const session = await verifyAdminSession(cookieStore.get(adminCookieName)?.value ?? '')
  if (session) redirect(session.mustChangePassword ? '/admin/change-password' : '/admin/enquiries')

  return (
    <section className="mx-auto max-w-lg px-4 py-12 md:py-16">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
        <p className="eyebrow text-brand-2">ADMIN PORTAL</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink">Sign in</h1>
        <p className="mt-3 text-sm text-muted-foreground">Sign in to view and manage form enquiries.</p>
        <div className="mt-7"><AdminLoginForm /></div>
      </div>
    </section>
  )
}
