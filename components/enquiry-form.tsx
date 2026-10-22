'use client'

import { useState } from 'react'
import { courses } from '@/lib/courses'
import { whatsappLink } from '@/lib/site'

export function EnquiryForm({ defaultCourse }: { defaultCourse?: string }) {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const message = [
      'Hi, I would like a free ServiceNow demo class.',
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Course: ${data.get('course')}`,
      `Mode: ${data.get('mode')}`,
    ].join('\n')
    window.open(whatsappLink(message), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const field = 'h-12 w-full rounded-lg border border-input bg-background px-4 text-base outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/15'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 text-foreground shadow-xl md:p-8">
      <div>
        <p className="eyebrow text-brand-2">Free demo class</p>
        <p className="mt-2 text-2xl font-bold tracking-tight">Reserve your seat</p>
      </div>
      <label className="flex flex-col gap-1.5 text-sm font-semibold">
        Full name
        <input name="name" required autoComplete="name" className={field} placeholder="Your name" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold">
        Phone / WhatsApp
        <input name="phone" required type="tel" inputMode="tel" autoComplete="tel" pattern="[0-9+\s-]{10,15}" className={field} placeholder="+91" />
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold">
        Course
        <select name="course" defaultValue={defaultCourse ?? courses[0].name} className={field}>
          {courses.map((c) => (
            <option key={c.slug}>{c.name}</option>
          ))}
          <option>Not sure yet — need guidance</option>
        </select>
      </label>
      <fieldset className="flex flex-col gap-1.5 text-sm font-semibold">
        <legend className="mb-1.5">Training mode</legend>
        <div className="grid grid-cols-2 gap-2">
          {['Online', 'Classroom'].map((m, i) => (
            <label key={m} className="flex h-11 cursor-pointer items-center justify-center rounded-lg border border-input font-medium has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:text-primary">
              <input type="radio" name="mode" value={m} defaultChecked={i === 0} className="sr-only" />
              {m}
            </label>
          ))}
        </div>
      </fieldset>
      <button type="submit" className="bg-gradient-brand mt-2 h-12 rounded-lg font-semibold text-white shadow-lg shadow-brand/25 transition-opacity hover:opacity-90">
        Book free demo on WhatsApp
      </button>
      <p className="text-xs text-muted-foreground" aria-live="polite">
        {sent ? 'Thanks! WhatsApp opened in a new tab — send the message and our counsellor will reply within 30 minutes.' : 'Our counsellor replies within 30 minutes, Mon–Sat.'}
      </p>
    </form>
  )
}
