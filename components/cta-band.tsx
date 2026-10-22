import { whatsappLink } from '@/lib/site'
import { MessageCircle } from 'lucide-react'
import { SectionEyebrow } from './section'
import { LinkButton } from './link-button'
import { cn } from '@/lib/utils'

export function CtaBand({
  title = 'Start your ServiceNow career this month.',
  description = 'Book a free demo class with a working ServiceNow Architect. New online and classroom batches in Hyderabad start every two weeks.',
  descriptionClassName,
}: {
  title?: string
  description?: string
  descriptionClassName?: string
}) {
  return (
    <section className="bg-background py-12 md:py-20" aria-labelledby="cta-title">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="bg-hero relative overflow-hidden rounded-3xl border border-slate-800 p-8 text-ink-foreground sm:p-12 lg:p-16">
          <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <SectionEyebrow tone="dark" className="mb-5">
                START YOUR JOURNEY TODAY
              </SectionEyebrow>
              <h2 id="cta-title" className="text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {title}
              </h2>
              <p className={cn('mt-5 max-w-2xl leading-relaxed text-slate-300', descriptionClassName)}>{description}</p>
            </div>
            <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
              <LinkButton
                href="/contact"
                size="lg"
                className="bg-emerald-500 font-bold text-slate-950 hover:bg-emerald-400"
              >
                Book free demo
              </LinkButton>
              <LinkButton
                href={whatsappLink()}
                size="lg"
                className="border border-slate-700 bg-slate-800 text-white hover:bg-slate-700"
                external
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                Chat on WhatsApp
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
