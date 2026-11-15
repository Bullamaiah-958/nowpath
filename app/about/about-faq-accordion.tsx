'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import type { Faq } from '@/lib/courses'

export function AboutFaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index
        const questionId = `about-faq-question-${index}`
        const answerId = `about-faq-answer-${index}`

        return (
          <div key={faq.q} className="px-6 py-4">
            <button
              type="button"
              id={questionId}
              aria-expanded={isOpen}
              aria-controls={answerId}
              className="flex w-full min-w-0 cursor-pointer items-start justify-between gap-6 text-left text-lg font-semibold leading-snug"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <h3 className="min-w-0">{faq.q}</h3>
              <Plus
                className={`mt-1 size-5 shrink-0 text-primary transition-transform ${isOpen ? 'rotate-45' : ''}`}
                aria-hidden="true"
              />
            </button>
            <div
              id={answerId}
              aria-labelledby={questionId}
              className={isOpen ? 'mt-3' : 'hidden'}
            >
              <p className="leading-relaxed text-muted-foreground">{faq.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
