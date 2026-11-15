import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'

export type PolicyPageSection = {
  heading: string
  paragraphs: string[]
}

function policySectionId(heading: string) {
  return `policy-${heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`
}

export function PolicyPage({
  title,
  description,
  path,
  sections,
  heroAside,
}: {
  title: string
  description: string
  path: string
  sections: PolicyPageSection[]
  heroAside?: React.ReactNode
}) {
  return (
    <>
      <PageHero
        eyebrow="Rise Gen Technologies · Policy"
        breadcrumbs={[{ name: title, href: path }]}
        title={title}
        description={<p>{description}</p>}
        aside={heroAside}
      />
      <Section tone="muted">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[minmax(220px,0.8fr)_minmax(0,2fr)] lg:items-start lg:gap-10">
          <nav
            aria-label="On this page"
            className="rounded-2xl border border-border bg-card p-5 shadow-sm lg:sticky lg:top-28"
          >
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-muted-foreground">
              On this page
            </p>
            <ol className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
              {sections.map((section, index) => {
                const id = policySectionId(section.heading)
                return (
                  <li key={id} className="shrink-0 lg:shrink">
                    <a
                      href={`#${id}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-2"
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xs font-bold text-brand">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{section.heading}</span>
                    </a>
                  </li>
                )
              })}
            </ol>
          </nav>

          <article className="min-w-0 space-y-5">
            <div className="rounded-2xl border border-brand/20 bg-gradient-to-br from-brand/10 via-card to-brand-violet/5 p-5 shadow-sm sm:p-6">
              <p className="text-sm font-semibold text-foreground">Policy overview</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Draft policy summary for review. Please contact Rise Gen Technologies to confirm the terms that apply to your course or enquiry.
              </p>
            </div>

            {sections.map((section, index) => {
              const id = policySectionId(section.heading)
              return (
                <section
                  key={id}
                  id={id}
                  aria-labelledby={`${id}-heading`}
                  className="scroll-mt-28 rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-7"
                >
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-sm font-bold text-white"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h2 id={`${id}-heading`} className="text-xl font-semibold tracking-tight sm:text-2xl">
                        {section.heading}
                      </h2>
                      <div className="mt-4 space-y-4 text-base leading-7 text-muted-foreground">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              )
            })}
          </article>
        </div>
      </Section>
    </>
  )
}
