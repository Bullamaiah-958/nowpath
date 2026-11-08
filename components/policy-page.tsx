import { PageHero } from '@/components/page-hero'
import { Section } from '@/components/section'

export type PolicyPageSection = {
  heading: string
  paragraphs: string[]
}

export function PolicyPage({
  title,
  description,
  path,
  sections,
}: {
  title: string
  description: string
  path: string
  sections: PolicyPageSection[]
}) {
  return (
    <>
      <PageHero
        eyebrow="Rise Gen Technologies · Policy"
        breadcrumbs={[{ name: title, href: path }]}
        title={title}
        description={<p>{description}</p>}
      />
      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="rounded-xl border border-brand/20 bg-brand/5 p-4 text-sm leading-relaxed text-muted-foreground">
            Draft policy summary for review. Please contact Rise Gen Technologies to confirm the terms that apply to your course or enquiry.
          </p>
          <div className="mt-8 space-y-8">
            {sections.map((section) => (
              <section key={section.heading} aria-labelledby={`policy-${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                <h2
                  id={`policy-${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                  className="text-xl font-semibold tracking-tight md:text-2xl"
                >
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-3 text-base leading-7 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
