'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function AdminPasswordForm({ initial = false }: { initial?: boolean }) {
  const router = useRouter()
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true)
    setError('')
    const form = event.currentTarget
    const data = new FormData(form)
    const newPassword = String(data.get('newPassword') ?? '')
    if (newPassword !== data.get('confirmPassword')) {
      setError('The new passwords do not match.')
      setBusy(false)
      return
    }
    try {
      const response = await fetch('/api/admin/password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...(initial ? {} : { currentPassword: data.get('currentPassword') }),
          newPassword,
        }),
      })
      const result: unknown = await response.json()
      if (!response.ok) {
        setError(typeof result === 'object' && result !== null && 'error' in result && typeof result.error === 'string'
          ? result.error : 'Password update failed.')
        return
      }
      router.replace('/admin/enquiries')
      router.refresh()
    } catch (error) {
      console.error('Admin password update failed:', error)
      setError('Could not update the password. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      {!initial && (
        <label className="flex flex-col gap-2 text-sm font-semibold">
          Current password
          <input name="currentPassword" type="password" required autoComplete="current-password" className="h-12 rounded-lg border border-input bg-background px-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/15" />
        </label>
      )}
      <label className="flex flex-col gap-2 text-sm font-semibold">
        {initial ? 'New password' : 'New password'}
        <input name="newPassword" type="password" required minLength={8} maxLength={128} autoComplete="new-password" className="h-12 rounded-lg border border-input bg-background px-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/15" />
        <span className="font-normal text-muted-foreground">Use 8–128 characters.</span>
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold">
        Confirm new password
        <input name="confirmPassword" type="password" required minLength={8} maxLength={128} autoComplete="new-password" className="h-12 rounded-lg border border-input bg-background px-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/15" />
      </label>
      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
      <button disabled={busy} className="bg-gradient-brand h-12 rounded-lg font-semibold text-white disabled:opacity-60">
        {busy ? 'Saving…' : initial ? 'Set new password' : 'Change password'}
      </button>
      {!initial && <Link href="/admin/enquiries" className="text-center text-sm font-semibold text-primary hover:underline">Back to enquiries</Link>}
    </form>
  )
}
