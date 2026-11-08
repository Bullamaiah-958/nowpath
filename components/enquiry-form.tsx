'use client'

import { useId, useRef, useState } from 'react'
import { courses } from '@/lib/courses'
import { validateEnquiryName, validateEnquiryPhone } from '@/lib/enquiry-validation'
import { whatsappLink } from '@/lib/site'

export function EnquiryForm({ defaultCourse, variant = 'default' }: { defaultCourse?: string; variant?: 'default' | 'contact' }) {
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'failed'>('idle')
  const [saveError, setSaveError] = useState('')
  const [whatsappUrl, setWhatsappUrl] = useState('')
  const [errors, setErrors] = useState({ name: '', phone: '' })
  const formRef = useRef<HTMLFormElement>(null)
  const id = useId()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'saving' || status === 'saved') return
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '')
    const nextErrors = { name: validateEnquiryName(name), phone: validateEnquiryPhone(phone) }
    setErrors(nextErrors)
    if (nextErrors.name || nextErrors.phone) {
      setStatus('idle')
      const field = form.elements.namedItem(nextErrors.name ? 'name' : 'phone')
      if (field instanceof HTMLInputElement) field.focus()
      return
    }
    const enquiryMessage = String(data.get('message') ?? '').trim()
    const message = [
      'Hi, I would like a free ServiceNow demo class.',
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Course: ${data.get('course')}`,
      `Mode: ${data.get('mode')}`,
      ...(enquiryMessage ? [`Message: ${enquiryMessage}`] : []),
    ].join('\n')
    setWhatsappUrl(whatsappLink(message))
    setStatus('saving')
    setSaveError('')
    const subject = document.querySelector('h1')?.textContent?.replace(/\s+/g, ' ').trim()
    if (!subject) {
      setSaveError('We could not identify this page. You can continue on WhatsApp instead.')
      setStatus('failed')
      return
    }

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name, phone, course: data.get('course'), mode: data.get('mode'),
          message: enquiryMessage, subject, path: window.location.pathname.replace(/\/$/, '') || '/',
          website: data.get('website'),
        }),
      })
      if (!response.ok) {
        setSaveError('We could not confirm that your enquiry was saved. You can try again or continue on WhatsApp.')
        setStatus('failed')
        return
      }
      const result: unknown = await response.json()
      if (typeof result !== 'object' || result === null || !('saved' in result) || result.saved !== true) {
        throw new Error('Unexpected enquiry response')
      }
      setStatus('saved')
    } catch (error) {
      console.error('Enquiry submission failed:', error)
      setSaveError('We could not confirm that your enquiry was saved. You can try again or continue on WhatsApp.')
      setStatus('failed')
    }
  }

  const fieldBase = 'w-full rounded-lg border border-input bg-background px-4 text-base outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/15 aria-invalid:border-red-600 aria-invalid:bg-red-50 focus:aria-invalid:border-red-600 focus:aria-invalid:ring-red-600/20'
  const field = `h-12 ${fieldBase}`

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} onChange={() => {
      if (status === 'failed') {
        setStatus('idle')
        setWhatsappUrl('')
        setSaveError('')
      }
    }} className={`flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 text-foreground shadow-xl md:p-8 ${variant === 'contact' ? 'shadow-brand/10 lg:h-full lg:justify-between' : ''}`}>
      <div>
        <p className="eyebrow text-brand-2">Free demo class</p>
        <p className="mt-2 text-2xl font-bold tracking-tight">{variant === 'contact' ? <>Request your <span className="text-gradient">free demo.</span></> : 'Reserve your seat'}</p>
        {variant === 'contact' && <p className="mt-3 text-base leading-relaxed text-muted-foreground">Share your details to request a demo, then continue on WhatsApp.</p>}
      </div>
      <fieldset disabled={status === 'saving' || status === 'saved'} className="contents">
      <label className="flex flex-col gap-1.5 text-sm font-semibold">
        Full name
        <input
          name="name"
          required
          maxLength={100}
          autoComplete="name"
          className={field}
          placeholder="Your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? `${id}-name-error` : undefined}
          onBlur={(e) => {
            const value = e.currentTarget.value
            setErrors((previous) => ({ ...previous, name: validateEnquiryName(value) }))
          }}
          onChange={(e) => {
            const value = e.currentTarget.value
            if (errors.name) setErrors((previous) => ({ ...previous, name: validateEnquiryName(value) }))
          }}
        />
        {errors.name && <span id={`${id}-name-error`} className="text-sm font-normal text-red-700">{errors.name}</span>}
      </label>
      <label className="flex flex-col gap-1.5 text-sm font-semibold">
        Phone / WhatsApp
        <input
          name="phone"
          required
          type="tel"
          inputMode="numeric"
          autoComplete="tel-national"
          pattern="[6-9][0-9]{9}"
          className={field}
          placeholder="10-digit mobile number"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
          onBlur={(e) => {
            const value = e.currentTarget.value
            setErrors((previous) => ({ ...previous, phone: validateEnquiryPhone(value) }))
          }}
          onChange={(e) => {
            const value = e.currentTarget.value
            if (errors.phone) setErrors((previous) => ({ ...previous, phone: validateEnquiryPhone(value) }))
          }}
        />
        {errors.phone && <span id={`${id}-phone-error`} className="text-sm font-normal text-red-700">{errors.phone}</span>}
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
      {variant === 'contact' && (
        <label className="flex flex-col gap-1.5 text-sm font-semibold">
          Message <span className="font-normal text-muted-foreground">(optional)</span>
          <textarea
            name="message"
            rows={3}
            maxLength={1000}
            className={`${fieldBase} resize-y py-3`}
            placeholder="Tell us how we can help"
          />
        </label>
      )}
      <div className="hidden" aria-hidden="true">
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      </fieldset>
      <p className="text-xs text-muted-foreground">Your enquiry will be saved to help us respond. See our <a href="/privacy-policy" className="underline">privacy policy</a>.</p>
      {status !== 'saved' && (
        <button type="submit" disabled={status === 'saving'} className="bg-gradient-brand mt-2 h-12 rounded-lg font-semibold text-white shadow-lg shadow-brand/25 transition-opacity hover:opacity-90 disabled:opacity-60">
          {status === 'saving' ? 'Saving your enquiry...' : status === 'failed' ? 'Try saving again' : 'Request Free Demo'}
        </button>
      )}
      {status === 'failed' && <p className="text-sm text-red-700" role="alert">{saveError}</p>}
      {(status === 'saved' || status === 'failed') && (
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center rounded-lg border border-primary px-4 text-center font-semibold text-primary hover:bg-primary/5">
          {status === 'saved' ? 'Continue to WhatsApp' : 'Continue on WhatsApp instead'}
        </a>
      )}
      {status === 'saved' && (
        <button type="button" className="text-sm font-semibold text-primary underline" onClick={() => {
          formRef.current?.reset()
          setErrors({ name: '', phone: '' })
          setWhatsappUrl('')
          setStatus('idle')
        }}>
          Send another enquiry
        </button>
      )}
      <p className="text-xs text-muted-foreground" aria-live="polite">
        {status === 'saved' ? 'Your enquiry was saved. You can also send the prepared message on WhatsApp.' : 'Our counsellor replies within 30 minutes, Mon–Sat.'}
      </p>
    </form>
  )
}
