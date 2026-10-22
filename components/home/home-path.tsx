import Link from 'next/link'
import { Section, SectionEyebrow } from '@/components/section'
import { careerSupportItems } from '@/data/site'

export function HomePath() {
  return (
    <Section id="placement-support" tone="white" labelledBy="placement-support-title">
      <div className="placement-support-layout grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5 lg:self-center">
          <SectionEyebrow>PLACEMENT SUPPORT</SectionEyebrow>
          <h2 id="placement-support-title" className="mt-3 text-balance text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            Career support, <span className="text-gradient">built into the program.</span>
          </h2>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Career preparation runs alongside the curriculum from day one, backed by hands-on project reviews, mock rounds, and direct hiring partner referrals.
          </p>
          <Link
            href="/servicenow-career-training"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
          >
            How placement works <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="placement-support-divider" aria-hidden="true">
          <span className="placement-support-rule" />
          <span className="placement-support-dot placement-support-dot-small" />
          <span className="placement-support-dot" />
          <span className="placement-support-diamond" />
          <span className="placement-support-dot" />
          <span className="placement-support-dot placement-support-dot-small" />
          <span className="placement-support-rule" />
        </div>
        <div className="lg:col-span-7">
          <ol className="border-y border-border">
            {careerSupportItems.map((step, index) => (
              <li key={step.title} className="flex items-start gap-6 border-b border-border py-6 last:border-b-0">
                <span className="placement-step-number flex size-12 shrink-0 items-center justify-center rounded-xl border font-sans text-base font-bold tabular-nums text-white">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0 flex-1 pt-1">
                  <h3 className="text-xl font-bold tracking-tight text-ink lg:whitespace-nowrap">{step.title}</h3>
                  <p className="placement-support-step-description fs-small mt-2 min-h-[calc(2*1.625em)] leading-relaxed text-foreground/80 min-[1280px]:tracking-[-0.02em]">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-muted-foreground">
            Referrals and employment outcomes are not guaranteed; hiring decisions are made by employers.
          </p>
        </div>
      </div>
    </Section>
  )
}
