import { Plus } from 'lucide-react'
import type { Faq } from '@/lib/courses'
import { faqSchema } from '@/lib/schema'
import { JsonLd } from './json-ld'

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
      <JsonLd data={faqSchema(faqs)} />
      {faqs.map((f) => (
        <details key={f.q} className="group px-6 py-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold leading-snug">
            <h3>{f.q}</h3>
            <Plus className="mt-1 size-5 shrink-0 text-primary transition-transform group-open:rotate-45" aria-hidden="true" />
          </summary>
          <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
