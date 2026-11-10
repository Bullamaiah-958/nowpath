import type { Metadata } from 'next'
import { AdminResetPasswordForm } from '@/components/admin-reset-password-form'

export const metadata: Metadata = {
  title: 'Reset admin password',
  robots: { index: false, follow: false },
}

export default function AdminResetPasswordPage() {
  return (
    <section className="mx-auto max-w-lg px-4 py-12 md:py-16">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8">
        <p className="eyebrow text-brand-2">ADMIN ACCOUNT</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-ink">Reset password</h1>
        <p className="mt-3 text-sm text-muted-foreground">Use the recovery key configured for this deployment.</p>
        <div className="mt-7"><AdminResetPasswordForm /></div>
      </div>
    </section>
  )
}
