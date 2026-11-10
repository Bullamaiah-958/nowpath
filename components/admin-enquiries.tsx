'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

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
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(0)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [deletingId, setDeletingId] = useState('')
  const [error, setError] = useState('')

  const loadPage = useCallback(async (requestedPage: number) => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch(`/api/admin/enquiries?page=${requestedPage}`, { cache: 'no-store' })
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
      if (
        typeof result !== 'object' || result === null ||
        !('enquiries' in result) || !Array.isArray(result.enquiries) ||
        !('page' in result) || typeof result.page !== 'number' ||
        !('pageCount' in result) || typeof result.pageCount !== 'number' ||
        !('total' in result) || typeof result.total !== 'number'
      ) {
        throw new Error('Unexpected enquiries response.')
      }
      setEnquiries(result.enquiries as Enquiry[])
      setPage(result.page)
      setPageCount(result.pageCount)
      setTotal(result.total)
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Could not load enquiries.')
    } finally {
      setLoading(false)
    }
  }, [router])

  useEffect(() => {
    void loadPage(1)
  }, [loadPage])

  async function deleteEnquiry(item: Enquiry) {
    if (!window.confirm(`Delete the enquiry from ${item.name}? This cannot be undone.`)) return
    setDeletingId(item.id)
    setError('')
    try {
      const response = await fetch(`/api/admin/enquiries/${encodeURIComponent(item.id)}`, { method: 'DELETE' })
      const result: unknown = await response.json()
      if (response.status === 401) {
        router.replace('/admin')
        return
      }
      if (!response.ok) {
        const message = typeof result === 'object' && result !== null && 'error' in result && typeof result.error === 'string'
          ? result.error : 'Could not delete the enquiry.'
        throw new Error(message)
      }
      await loadPage(page)
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Could not delete the enquiry.')
    } finally {
      setDeletingId('')
    }
  }

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
          <span className="text-sm text-muted-foreground">{total} {total === 1 ? 'enquiry' : 'enquiries'}</span>
        </div>
        {loading && <p className="mt-6 text-muted-foreground">Loading enquiries…</p>}
        {error && <p role="alert" className="mt-6 text-sm text-red-700">{error}</p>}
        {!loading && !error && enquiries.length === 0 && <p className="mt-6 text-muted-foreground">No enquiries have been submitted yet.</p>}
        {!loading && enquiries.length > 0 && (
          <div className="mt-5 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[1050px] border-collapse text-left text-sm">
              <thead className="bg-secondary/70 text-xs uppercase tracking-wide text-muted-foreground">
                <tr>
                  <th scope="col" className="px-4 py-3 font-semibold">Submitted</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Name / subject</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Phone</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Course</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Mode</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Page</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Message</th>
                  <th scope="col" className="px-4 py-3 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {enquiries.map((item) => (
                  <tr key={item.id} className="odd:bg-background even:bg-secondary/30 hover:bg-secondary/60">
                    <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                      <time dateTime={item.created_at}>
                        {new Date(item.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Asia/Kolkata' })}
                      </time>
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-ink">{item.name}</p>
                      <p className="mt-1 text-muted-foreground">{item.subject}</p>
                    </td>
                    <td className="whitespace-nowrap px-4 py-3">
                      <a className="text-primary hover:underline" href={`tel:${item.phone}`}>{item.phone}</a>
                    </td>
                    <td className="px-4 py-3">{item.course}</td>
                    <td className="px-4 py-3">{item.mode}</td>
                    <td className="max-w-40 break-words px-4 py-3 text-muted-foreground">{item.path}</td>
                    <td className="max-w-56 whitespace-pre-wrap break-words px-4 py-3 text-muted-foreground">{item.message || '—'}</td>
                    <td className="px-4 py-3">
                      <button
                        type="button"
                        disabled={deletingId === item.id}
                        onClick={() => void deleteEnquiry(item)}
                        className="rounded-lg border border-red-200 px-3 py-2 text-sm font-semibold text-red-700 hover:bg-red-50 disabled:opacity-60"
                      >
                        {deletingId === item.id ? 'Deleting…' : 'Delete'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {!loading && !error && pageCount > 0 && (
          <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => void loadPage(page - 1)}
              className="rounded-lg border border-border px-4 py-2 text-sm font-semibold hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-sm text-muted-foreground">Page {page} of {pageCount}</span>
            <button
              type="button"
              disabled={page >= pageCount}
              onClick={() => void loadPage(page + 1)}
              className="rounded-lg border border-border px-4 py-2 text-sm font-semibold hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
