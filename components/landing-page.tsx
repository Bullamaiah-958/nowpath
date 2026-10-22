import { Check } from 'lucide-react'
import { courses } from '@/lib/courses'
import type { Faq } from '@/lib/courses'
import { Breadcrumbs } from './breadcrumbs'
import { PageHero, type HeroStat } from './page-hero'
import { Section, SectionHeading } from './section'
import { CourseCard } from './course-card'
import { EnquiryForm } from './enquiry-form'
import { FaqList } from './faq-list'
import { CtaBand } from './cta-band'
import { LinkButton } from './link-button'

export type Feature = { title: string; body: string }

export function LandingPage({
  crumb,
  href,
  eyebrow,
  title,
  intro,
  stats,
  featuresTitle,
  features,
  highlights,
  highlightsTitle,
  faqs,
  extra,
}: {
  crumb: string
  href: string
  eyebrow: string
  title: React.ReactNode
  intro: React.ReactNode
  stats?: HeroStat[]
  featuresTitle: React.ReactNode
  features: Feature[]
  highlightsTitle: string
  highlights: string[]
  faqs: Faq[]
  extra?: React.ReactNode
}) {
  return (
    <>
      <Breadcrumbs items={[{ name: crumb, href }]} />
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={intro}
        stats={stats}
        actions={
          <>
            <LinkButton href="#enquire" size="lg">
              Book free demo →
            </LinkButton>
            <LinkButton href="/courses" variant="light" size="lg">
              Explore courses
            </LinkButton>
          </>
        }
      />
      <Section labelledBy="features-title">
        <SectionHeading id="features-title" eyebrow="01 · What you get" title={featuresTitle} />
        <div className="mt-12 grid overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 [&>*]:bg-card" style={{ gap: '1px' }}>
          {features.map((f) => (
            <article key={f.title} className="p-7 md:p-8">
              <h3 className="text-2xl font-bold tracking-tight text-ink">{f.title}</h3>
              <p className="mt-3 leading-relaxed text-foreground/80">{f.body}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="muted" labelledBy="highlights-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading id="highlights-title" eyebrow="02 · Highlights" title={highlightsTitle} className="lg:grid-cols-1" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium leading-relaxed">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div id="enquire" className="scroll-mt-32 lg:col-span-5">
            <EnquiryForm />
          </div>
        </div>
      </Section>
      {extra}
      <Section labelledBy="lp-courses">
        <SectionHeading id="lp-courses" eyebrow="03 · Courses" title="Choose your ServiceNow course" />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <li key={c.slug}>
              <CourseCard course={c} />
            </li>
          ))}
        </ul>
      </Section>
      <Section tone="muted" labelledBy="lp-faq">
        <SectionHeading id="lp-faq" eyebrow="04 · FAQ" title="Frequently asked questions" />
        <div className="mt-10">
          <FaqList faqs={faqs} />
        </div>
      </Section>
      <CtaBand />
    </>
  )
}
