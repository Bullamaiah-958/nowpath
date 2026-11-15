'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export function AdminLoginForm() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setBusy(true)
    setError('')
    const data = new FormData(event.currentTarget)
    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: data.get('email'), password: data.get('password') }),
      })
      const result: unknown = await response.json()
      if (!response.ok) {
        setError(typeof result === 'object' && result !== null && 'error' in result && typeof result.error === 'string'
          ? result.error : 'Login failed. Please try again.')
        return
      }
      if (typeof result !== 'object' || result === null || !('mustChangePassword' in result)) {
        throw new Error('Unexpected login response')
      }
      router.replace(result.mustChangePassword === true ? '/admin/change-password' : '/admin/enquiries')
      router.refresh()
    } catch (error) {
      console.error('Admin login failed:', error)
      setError('Could not sign in. Please try again.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <form onSubmit={submit} className="flex flex-col gap-5">
      <label className="flex flex-col gap-2 text-sm font-semibold">
        Admin email
        <input name="email" type="email" required autoComplete="username" className="h-12 rounded-lg border border-input bg-background px-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/15" />
      </label>
      <label className="flex flex-col gap-2 text-sm font-semibold">
        Password
        <input name="password" type="password" required maxLength={128} autoComplete="current-password" className="h-12 rounded-lg border border-input bg-background px-4 outline-none focus:border-primary focus:ring-4 focus:ring-primary/15" />
      </label>
      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
      <button disabled={busy} className="bg-gradient-brand h-12 rounded-lg font-semibold text-white disabled:opacity-60">
        {busy ? 'Signing in…' : 'Sign in'}
      </button>
      <Link href="/admin/reset-password" className="text-center text-sm font-semibold text-primary hover:underline">
        Forgot password?
      </Link>
    </form>
  )
}
