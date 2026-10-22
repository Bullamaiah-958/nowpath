import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MapPin, TrainFront } from 'lucide-react'
import { locations, getLocation } from '@/lib/locations'
import { courses } from '@/lib/courses'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PageHero, AccentText } from '@/components/page-hero'
import { Section, SectionHeading } from '@/components/section'
import { CourseCard } from '@/components/course-card'
import { EnquiryForm } from '@/components/enquiry-form'
import { FaqList } from '@/components/faq-list'
import { CtaBand } from '@/components/cta-band'
import { LinkButton } from '@/components/link-button'

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) return {}
  return {
    title: { absolute: loc.metaTitle },
    description: loc.metaDescription,
    keywords: [loc.keyword, `ServiceNow Course in ${loc.area}`, `ServiceNow Classroom Training in ${loc.area}`, 'ServiceNow Training in Hyderabad'],
    alternates: { canonical: `/locations/${loc.slug}` },
  }
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const loc = getLocation(slug)
  if (!loc) notFound()

  const faqs = [
    { q: `Where is the ServiceNow training centre for ${loc.area} learners?`, a: `Our classroom centre is in Ameerpet, Hyderabad. ${loc.commute[0]}` },
    { q: `Is ServiceNow online training available for ${loc.area}?`, a: `Yes. If commuting is difficult, you can join the same batch through live ServiceNow Online Training and attend the classroom whenever you want.` },
    { q: `Which ServiceNow courses can I ask about from ${loc.area}?`, a: `The course catalog lists ${courses.map((course) => course.code).join(', ')}. Contact NowPath to confirm current course availability, training modes and batch details for your preferred subject and schedule.` },
  ]

  return (
    <>
      <Breadcrumbs items={[{ name: 'Locations', href: '/servicenow-classroom-training-hyderabad' }, { name: loc.keyword, href: `/locations/${loc.slug}` }]} />
      <PageHero
        eyebrow={`ServiceNow Training · ${loc.area}, Hyderabad`}
        title={
          <>
            {loc.keyword.replace(` ${loc.area}`, '')} <AccentText>{loc.area}.</AccentText>
          </>
        }
        description={<p>{loc.intro}</p>}
        actions={
          <>
            <LinkButton href="#enquire" size="lg">
              Book free demo →
            </LinkButton>
            <LinkButton href="/courses" variant="light" size="lg">
              View all courses
            </LinkButton>
          </>
        }
      />
      <Section labelledBy="commute-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading id="commute-title" eyebrow="01 · Getting here" title={`Reaching our centre from ${loc.area}`} className="lg:grid-cols-1" />
            <ul className="mt-8 flex flex-col gap-3">
              {loc.commute.map((c) => (
                <li key={c} className="flex gap-3 rounded-xl border border-border bg-card p-5 leading-relaxed">
                  <TrainFront className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 text-xl font-bold tracking-tight">Learners also join from</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {loc.nearby.map((n) => (
                <li key={n} className="flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                  <MapPin className="size-3.5 text-brand-2" aria-hidden="true" />
                  {n}
                </li>
              ))}
            </ul>
          </div>
          <div id="enquire" className="scroll-mt-32 lg:col-span-5">
            <EnquiryForm />
          </div>
        </div>
      </Section>
      <Section tone="muted" labelledBy="loc-courses">
        <SectionHeading id="loc-courses" eyebrow="02 · Courses" title={`ServiceNow courses available near ${loc.area}`} />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.slice(0, 6).map((c) => (
            <li key={c.slug}>
              <CourseCard course={c} />
            </li>
          ))}
        </ul>
      </Section>
      <Section labelledBy="loc-faq">
        <SectionHeading id="loc-faq" eyebrow="03 · FAQ" title={`${loc.keyword} — FAQs`} />
        <div className="mt-10">
          <FaqList faqs={faqs} />
        </div>
      </Section>
      <CtaBand />
    </>
  )
}
