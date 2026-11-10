'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type Enquiry = {
  id: string
  name: string
  subject: string
  phone: string
  course: string
  mode: string
  message: string
  path: string
  created_at: string
}

export function AdminEnquiries({ email }: { email: string }) {
  const router = useRouter()
  const [enquiries, setEnquiries] = useState<Enquiry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true
    fetch('/api/admin/enquiries', { cache: 'no-store' })
      .then(async (response) => {
        const result: unknown = await response.json()
        if (response.status === 401) {
          router.replace('/admin')
          return
        }
        if (!response.ok) {
          const message = typeof result === 'object' && result !== null && 'error' in result && typeof result.error === 'string'
            ? result.error : 'Could not load enquiries.'
          throw new Error(message)
        }
        if (typeof result !== 'object' || result === null || !('enquiries' in result) || !Array.isArray(result.enquiries)) {
          throw new Error('Unexpected enquiries response.')
        }
        if (active) setEnquiries(result.enquiries as Enquiry[])
      })
      .catch((cause: unknown) => {
        if (active) setError(cause instanceof Error ? cause.message : 'Could not load enquiries.')
      })
      .finally(() => {
        if (active) setLoading(false)
      })
    return () => { active = false }
  }, [router])

  async function logout() {
    try {
      const response = await fetch('/api/admin/logout', { method: 'POST' })
      if (!response.ok) throw new Error('Logout failed')
      router.replace('/admin')
      router.refresh()
    } catch (cause) {
      console.error('Admin logout failed:', cause)
      setError('Could not log out. Please try again.')
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="eyebrow text-brand-2">ADMIN</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink md:text-4xl">Enquiries</h1>
          <p className="mt-2 text-sm text-muted-foreground">Signed in as {email}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/change-password" className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold hover:bg-secondary">Change password</Link>
          <button onClick={logout} className="rounded-lg border border-border px-4 py-2.5 text-sm font-semibold hover:bg-secondary">Log out</button>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-bold text-ink">Recent submissions</h2>
          <span className="text-sm text-muted-foreground">Showing up to 500 latest enquiries</span>
        </div>
        {loading && <p className="mt-6 text-muted-foreground">Loading enquiries…</p>}
        {error && <p role="alert" className="mt-6 text-sm text-red-700">{error}</p>}
        {!loading && !error && enquiries.length === 0 && <p className="mt-6 text-muted-foreground">No enquiries have been submitted yet.</p>}
        {!loading && enquiries.length > 0 && (
          <div className="mt-5 grid gap-4">
            {enquiries.map((item) => (
              <article key={item.id} className="rounded-xl border border-border bg-background p-4 sm:p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-ink">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.subject}</p>
                  </div>
                  <time className="text-sm text-muted-foreground" dateTime={item.created_at}>
                    {new Date(item.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Kolkata' })}
                  </time>
                </div>
                <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2 lg:grid-cols-4">
                  <div><dt className="font-semibold text-muted-foreground">Phone</dt><dd><a className="text-primary hover:underline" href={`tel:${item.phone}`}>{item.phone}</a></dd></div>
                  <div><dt className="font-semibold text-muted-foreground">Course</dt><dd>{item.course}</dd></div>
                  <div><dt className="font-semibold text-muted-foreground">Mode</dt><dd>{item.mode}</dd></div>
                  <div><dt className="font-semibold text-muted-foreground">Page</dt><dd>{item.path}</dd></div>
                </dl>
                {item.message && <p className="mt-4 whitespace-pre-wrap border-t border-border pt-3 text-sm">{item.message}</p>}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
