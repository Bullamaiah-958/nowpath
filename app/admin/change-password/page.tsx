import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { AdminPasswordForm } from '@/components/admin-password-form'
import { adminCookieName, verifyAdminSession } from '@/lib/admin-auth'

export const metadata: Metadata = {
  title: 'Change admin password',
  robots: { index: false, follow: false },
}

export default async function AdminChangePasswordPage() {
  const cookieStore = await cookies()
  const session = await verifyAdminSession(cookieStore.get(adminCookieName)?.value ?? '')
  if (!session) redirect('/admin')

  return (
    <section className="mx-auto max-w-lg px-4 py-12 md:py-16">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
        <p className="eyebrow text-brand-2">ADMIN ACCOUNT</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink">
          {session.mustChangePassword ? 'Set your password' : 'Change password'}
        </h1>
        {session.mustChangePassword && (
          <p className="mt-3 text-sm text-muted-foreground">Choose a new password before viewing enquiries.</p>
        )}
        <div className="mt-7"><AdminPasswordForm initial={session.mustChangePassword} /></div>
      </div>
    </section>
  )
}
