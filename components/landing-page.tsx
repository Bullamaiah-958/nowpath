import { Check } from 'lucide-react'
import { courses } from '@/lib/courses'
import type { Faq } from '@/lib/courses'
import { cn } from '@/lib/utils'
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
  heroAside,
  heroContentClassName,
  heroBackgroundDecoration,
  heroBackgroundMap,
  stats,
  heroStatsStyle,
  heroSecondaryActionVariant = 'light',
  featuresTitle,
  features,
  featuresStyle = 'grid',
  highlights,
  highlightsTitle,
  highlightsDescription,
  highlightsFormLeft = false,
  faqs,
  faqEyebrow = '04 · FAQ',
  ctaTone = 'default',
  extra,
  showCoursesSection = true,
}: {
  crumb: string
  href: string
  eyebrow: string
  title: React.ReactNode
  intro: React.ReactNode
  heroAside?: React.ReactNode
  heroContentClassName?: string
  heroBackgroundDecoration?: string
  heroBackgroundMap?: string
  stats?: HeroStat[]
  heroStatsStyle?: 'default' | 'cards'
  heroSecondaryActionVariant?: 'light' | 'ghostLight'
  featuresTitle: React.ReactNode
  features: Feature[]
  featuresStyle?: 'grid' | 'highlighted'
  highlightsTitle: string
  highlightsDescription?: string
  highlightsFormLeft?: boolean
  highlights: string[]
  faqs: Faq[]
  faqEyebrow?: string
  ctaTone?: 'default' | 'muted'
  extra?: React.ReactNode
  showCoursesSection?: boolean
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={intro}
        breadcrumbs={[{ name: crumb, href }]}
        aside={heroAside}
        contentClassName={heroContentClassName}
        backgroundDecoration={heroBackgroundDecoration}
        backgroundMap={heroBackgroundMap}
        stats={stats}
        statsStyle={heroStatsStyle}
        actions={
          <>
            <LinkButton href="#enquire" size="lg">
              Book Free Demo →
            </LinkButton>
            <LinkButton href="/courses" variant={heroSecondaryActionVariant} size="lg">
              Explore courses
            </LinkButton>
          </>
        }
      />
      <Section labelledBy="features-title">
        {featuresStyle === 'highlighted' ? (
          <>
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading id="features-title" eyebrow="01 · What you get" title={featuresTitle} className="lg:grid-cols-1" />
              <p className="mt-4 leading-relaxed text-foreground/80">
                Build practical ServiceNow skills with in-person guidance, classroom practice and support as you prepare for your next step.
              </p>
            </div>
            <div className="mx-auto mt-10 rounded-2xl border border-brand/40 bg-card p-5 shadow-lg shadow-brand/10 sm:p-8">
              <div className="border-b border-border pb-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Rise Gen Technologies</p>
                <h3 className="mt-2 text-xl font-bold tracking-tight text-ink sm:text-2xl">Your classroom learning experience</h3>
              </div>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-3 rounded-xl border border-border bg-secondary/60 p-4 sm:p-5">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white">
                      <Check className="size-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-base font-bold leading-snug text-ink sm:text-lg">{feature.title}</h4>
                      <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">{feature.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <SectionHeading id="features-title" eyebrow="01 · What you get" title={featuresTitle} />
            <div className="mt-12 grid overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 [&>*]:bg-card" style={{ gap: '1px' }}>
              {features.map((f) => (
                <article key={f.title} className="p-7 md:p-8">
                  <h3 className="text-2xl font-bold tracking-tight text-ink">{f.title}</h3>
                  <p className="mt-3 line-clamp-3 leading-relaxed text-foreground/80">{f.body}</p>
                </article>
              ))}
            </div>
          </>
        )}
      </Section>
      <Section tone="muted" labelledBy="highlights-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading id="highlights-title" eyebrow="02 · Highlights" title={highlightsTitle} className="lg:grid-cols-1" />
            {highlightsDescription && <p className="mt-4 max-w-2xl leading-relaxed text-foreground/80">{highlightsDescription}</p>}
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {highlights.map((h) => (
                <li key={h} className="flex gap-3 rounded-xl border border-border bg-card p-4 text-sm font-medium leading-relaxed">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <div id="enquire" className={cn('scroll-mt-32 lg:col-span-5', highlightsFormLeft && 'lg:order-first')}>
            <EnquiryForm />
          </div>
        </div>
      </Section>
      {extra}
      {showCoursesSection && (
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
      )}
      <Section labelledBy="lp-faq">
        <SectionHeading id="lp-faq" eyebrow={faqEyebrow} title="Frequently asked questions" />
        <div className="mt-10">
          <FaqList faqs={faqs} />
        </div>
      </Section>
      <CtaBand tone={ctaTone} />
    </>
  )
}
