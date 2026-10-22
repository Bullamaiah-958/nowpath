import type { Metadata } from 'next'
import Image from 'next/image'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PageHero, AccentText } from '@/components/page-hero'
import { Section, SectionHeading } from '@/components/section'
import { CtaBand } from '@/components/cta-band'
import { heroStats } from '@/data/site'

export const metadata: Metadata = {
  title: 'About NowPath — ServiceNow Training Institute in Hyderabad',
  description: 'Learn about NowPath ServiceNow training in Hyderabad, including weekday classes, daily practicals, weekend tests and interview preparation.',
  alternates: { canonical: '/about' },
}

const values = [
  { title: 'Structured classes', body: 'Classes are scheduled Monday to Friday, with ServiceNow and JavaScript learning.' },
  { title: 'Daily practice', body: 'Daily practicals and assigned tasks let you apply topics as you study them.' },
  { title: 'Interview preparation', body: 'The weekly schedule includes weekend tests and mock interviews, plus spoken English and interview preparation.' },
]

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'About', href: '/about' }]} />
      <PageHero
        eyebrow="About NowPath · ServiceNow training in Hyderabad"
        title={
          <>
            A structured way to learn, <AccentText>practise and prepare.</AccentText>
          </>
        }
        description={<p>NowPath is a ServiceNow Training Institute in Hyderabad. The course schedule combines weekday classes, daily practicals, weekend tests and mock interviews, and weekly spoken English and interview preparation.</p>}
        stats={[...heroStats]}
      />
      <Section labelledBy="values-title">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading id="values-title" eyebrow="What we believe" title="Three rules we never break." className="lg:grid-cols-1" />
            <ul className="mt-10 flex flex-col divide-y divide-border rounded-2xl border border-border bg-card">
              {values.map((v) => (
                <li key={v.title} className="p-6">
                  <h3 className="text-xl font-bold tracking-tight">{v.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{v.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src="/images/classroom.png" alt="NowPath ServiceNow trainer teaching a classroom batch in Hyderabad" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </Section>
      <CtaBand />
    </>
  )
}
