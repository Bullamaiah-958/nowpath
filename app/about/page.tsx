import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero, AccentText } from '@/components/page-hero'
import { Section, SectionHeading } from '@/components/section'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'About — ServiceNow Training Institute in Hyderabad',
  description: 'Learn about Rise Gen Technologies ServiceNow training in Hyderabad, including weekday classes, daily practicals, weekend tests and interview preparation.',
  alternates: { canonical: '/about' },
}

const values = [
  { title: 'A focused learning path', body: 'Build a foundation in ServiceNow and JavaScript, then put those skills to work in a real-time project.' },
  { title: 'Practice alongside lessons', body: 'Daily practicals and assigned tasks give you opportunities to apply each topic as you learn.' },
  { title: 'Prepare to explain your skills', body: 'Weekend tests, mock interviews and weekly spoken English practice help you prepare for the next step.' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Rise Gen Technologies · ServiceNow training in Hyderabad"
        breadcrumbs={[{ name: 'About', href: '/about' }]}
        backgroundImage="/images/about-banner.png"
        title={
          <>
            A ServiceNow training institute in Hyderabad, <AccentText>built around practical learning.</AccentText>
          </>
        }
        description={<p>Based in Ameerpet, Hyderabad, Rise Gen Technologies focuses on helping learners understand ServiceNow through guided classes, hands-on practice and project work. Choose from classroom, online and hybrid learning options.</p>}
      />
      <Section labelledBy="institute-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              id="institute-title"
              eyebrow="About the institute"
              title="Focused on one platform. Built around learning by doing."
              className="lg:grid-cols-1"
            />
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Our training brings ServiceNow concepts and JavaScript together, taking learners from the fundamentals toward a real-time project. Lessons are supported by practical exercises, assigned tasks and guidance as learners work through each stage.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/classroom.png" alt="Rise Gen Technologies ServiceNow trainer teaching a classroom batch in Hyderabad" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </Section>
      <Section labelledBy="values-title">
        <SectionHeading id="values-title" eyebrow="The learning experience" title="Learn it. Try it. Explain it." className="lg:grid-cols-1" />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {values.map((v) => (
            <li key={v.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-xl font-bold tracking-tight">{v.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{v.body}</p>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand />
    </>
  )
}
