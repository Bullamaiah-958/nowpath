import { Plus } from 'lucide-react'
import type { Faq } from '@/lib/courses'
import { faqSchema } from '@/lib/schema'
import { JsonLd } from './json-ld'

export function FaqList({ faqs, twoColumns = false, includeSchema = true }: { faqs: Faq[]; twoColumns?: boolean; includeSchema?: boolean }) {
  const renderList = (items: Faq[]) => (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
      {items.map((f) => (
        <details key={f.q} className="group px-6 py-4 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-semibold leading-snug">
            <h3>{f.q}</h3>
            <Plus className="mt-1 size-5 shrink-0 text-primary transition-transform group-open:rotate-45" aria-hidden="true" />
          </summary>
          <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
        </details>
      ))}
    </div>
  )

  const midpoint = Math.ceil(faqs.length / 2)

  return (
    <>
      {includeSchema && <JsonLd data={faqSchema(faqs)} />}
      {twoColumns ? (
        <div className="grid items-start gap-4 md:grid-cols-2 md:gap-6">
          {renderList(faqs.slice(0, midpoint))}
          {renderList(faqs.slice(midpoint))}
        </div>
      ) : renderList(faqs)}
    </>
  )
}
