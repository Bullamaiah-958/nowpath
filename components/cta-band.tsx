import Image from 'next/image'
import { site, whatsappLink } from '@/lib/site'
import { ArrowRight, MessageCircle, Phone } from 'lucide-react'
import { SectionEyebrow } from './section'
import { LinkButton } from './link-button'
import { cn } from '@/lib/utils'

export function CtaBand({
  title = 'Start your ServiceNow career this month.',
  description = 'Book a free demo class with a working ServiceNow Architect. New online and classroom batches in Hyderabad start every two weeks.',
  descriptionClassName,
  tone = 'default',
  variant = 'default',
}: {
  title?: string
  description?: string
  descriptionClassName?: string
  tone?: 'default' | 'muted'
  variant?: 'default' | 'centered'
}) {
  if (variant === 'centered') {
    return (
      <section
        className={cn(
          'py-12 md:py-20',
          tone === 'muted' ? 'bg-secondary muted-section-background muted-pattern-background' : 'bg-background',
        )}
        aria-labelledby="cta-title"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-[#5a329b] via-[#174d95] to-[#092d54] px-8 py-6 text-center text-ink-foreground sm:px-12 sm:py-8 lg:px-16 lg:py-10">
            <Image
              src="/images/blog-gartner-banner.webp"
              alt=""
              fill
              sizes="(min-width: 1280px) 1200px, 100vw"
              aria-hidden="true"
              className="pointer-events-none object-cover object-right"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#4c287f]/95 via-[#123c78]/90 to-[#092d54]/45" aria-hidden="true" />
            <div className="relative">
            <SectionEyebrow tone="dark" className="mb-5">
              START YOUR JOURNEY TODAY
            </SectionEyebrow>
            <h2 id="cta-title" className="mx-auto max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className={cn('mx-auto mt-5 max-w-xl leading-relaxed text-slate-300', descriptionClassName)}>{description}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <LinkButton href={site.phoneHref} size="lg" className="border border-slate-700 bg-slate-800 text-white hover:bg-slate-700">
                <Phone className="size-5" aria-hidden="true" />
                {site.phone}
              </LinkButton>
              <LinkButton href="/contact" size="lg" className="bg-gradient-brand font-bold text-white">
                Join Now <ArrowRight className="size-4" aria-hidden="true" />
              </LinkButton>
            </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      className={cn(
        'py-12 md:py-20',
        tone === 'muted' ? 'bg-secondary muted-section-background muted-pattern-background' : 'bg-background',
      )}
      aria-labelledby="cta-title"
    >
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
                className="bg-gradient-brand font-bold text-white"
              >
                Book Free Demo
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
