import { Check } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { courses } from '@/lib/courses'
import type { Faq } from '@/lib/courses'
import { cn } from '@/lib/utils'
import { PageHero, type HeroStat } from './page-hero'
import { Section, SectionHeading } from './section'
import { CourseCard } from './course-card'
import { EnquiryForm } from './enquiry-form'
import { FaqList } from './faq-list'
import { FaqLayout } from './faq-layout'
import { CtaBand } from './cta-band'
import { LinkButton } from './link-button'

export type Feature = { title: string; body: string; icon?: LucideIcon }

type HighlightsProps =
  | { showHighlightsSection?: true; highlightsTitle: string; highlights: string[] }
  | { showHighlightsSection: false; highlightsTitle?: never; highlights?: never }

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
  beforeFeatures,
  featuresEyebrow = '01 · What you get',
  featuresTitle,
  featuresDescription,
  features,
  featuresStyle = 'grid',
  featureDescriptionClassName,
  showHighlightsSection = true,
  highlights,
  highlightsTitle,
  highlightsEyebrow = '02 · Highlights',
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
  beforeFeatures?: React.ReactNode
  featuresEyebrow?: string
  featuresTitle: React.ReactNode
  featuresDescription?: React.ReactNode
  features: Feature[]
  featuresStyle?: 'grid' | 'highlighted' | 'numbered'
  featureDescriptionClassName?: string
  highlightsEyebrow?: string
  highlightsDescription?: string
  highlightsFormLeft?: boolean
  faqs: Faq[]
  faqEyebrow?: string
  ctaTone?: 'default' | 'muted'
  extra?: React.ReactNode
  showCoursesSection?: boolean
} & HighlightsProps) {
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
            <LinkButton href={showHighlightsSection ? '#enquire' : '/contact'} size="lg">
              Book Free Demo →
            </LinkButton>
            <LinkButton href="/courses" variant={heroSecondaryActionVariant} size="lg">
              Explore courses
            </LinkButton>
          </>
        }
      />
      {beforeFeatures}
      <Section labelledBy="features-title" tone={featuresStyle === 'numbered' ? 'muted' : 'default'}>
        {featuresStyle === 'highlighted' ? (
          <>
            <div className="mx-auto max-w-3xl text-center">
              <SectionHeading id="features-title" eyebrow={featuresEyebrow} title={featuresTitle} className="lg:grid-cols-1" />
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
        ) : featuresStyle === 'numbered' ? (
          <>
            <SectionHeading id="features-title" eyebrow={featuresEyebrow} title={featuresTitle} description={featuresDescription} />
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ title, body, icon: Icon }, index) => (
                <article key={title} className="group relative min-w-0">
                  <svg aria-hidden="true" viewBox="0 0 80 80" className="pointer-events-none absolute right-0 top-0 z-10 size-20 text-secondary" fill="currentColor">
                    <path d="M0 0H80V80C80 63 72 56 56 56H51C35 56 24 46 24 30V24C24 8 16 0 0 0Z" />
                  </svg>
                  <span aria-hidden="true" className="absolute right-0 top-0 z-10 flex size-10 items-center justify-center rounded-full bg-card text-sm font-bold text-primary transition-colors group-hover:bg-brand-2 group-hover:text-white motion-reduce:transition-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="relative h-full overflow-hidden rounded-3xl border-b border-l border-t border-primary/20 bg-card p-7">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary to-brand-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 motion-reduce:transition-none" />
                    <div className="relative">
                      <div className="flex items-start gap-4 pr-10">
                        {Icon && (
                          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-white/20 group-hover:text-white motion-reduce:transition-none">
                            <Icon className="size-5" aria-hidden="true" />
                          </span>
                        )}
                        <h3 className="text-xl font-bold leading-snug text-ink transition-colors group-hover:text-white motion-reduce:transition-none">{title}</h3>
                      </div>
                      <p className="mt-5 leading-relaxed text-foreground/80 transition-colors group-hover:text-white motion-reduce:transition-none">{body}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        ) : (
          <>
            <SectionHeading id="features-title" eyebrow={featuresEyebrow} title={featuresTitle} description={featuresDescription} />
            <div className="mt-12 grid overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 [&>*]:bg-card" style={{ gap: '1px' }}>
              {features.map((f) => (
                <article key={f.title} className="p-7 md:p-8">
                  <h3 className="text-2xl font-bold tracking-tight text-ink">{f.title}</h3>
                  <p className={cn('mt-3 line-clamp-3 leading-relaxed text-foreground/80', featureDescriptionClassName)}>{f.body}</p>
                </article>
              ))}
            </div>
          </>
        )}
      </Section>
      {showHighlightsSection && highlightsTitle !== undefined && highlights !== undefined && <Section tone={featuresStyle === 'numbered' ? 'default' : 'muted'} labelledBy="highlights-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading id="highlights-title" eyebrow={highlightsEyebrow} title={highlightsTitle} className="lg:grid-cols-1" />
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
      </Section>}
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
        <FaqLayout>
          <SectionHeading id="lp-faq" eyebrow={faqEyebrow} title="Frequently asked questions" />
          <div className="mt-10">
            <FaqList faqs={faqs} />
          </div>
        </FaqLayout>
      </Section>
      <CtaBand tone={ctaTone} />
    </>
  )
}
