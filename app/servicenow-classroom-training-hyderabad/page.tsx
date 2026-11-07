import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { locations } from '@/lib/locations'
import { LandingPage } from '@/components/landing-page'
import { AccentText } from '@/components/page-hero'
import { Section, SectionHeading } from '@/components/section'

export const metadata: Metadata = {
  title: 'ServiceNow Classroom Training in Hyderabad | Offline Course in Kukatpally',
  description:
    'ServiceNow Classroom Training in Hyderabad with weekday classes, daily practicals, weekend tests and mock interviews. Contact Rise Gen Technologies for current course details.',
  keywords: [
    'ServiceNow Classroom Training in Hyderabad',
    'ServiceNow Offline Training',
    'ServiceNow Offline Training in Hyderabad',
    'ServiceNow Training in Hyderabad',
    'ServiceNow Training in Kukatpally',
    'ServiceNow Training Institute in Hyderabad',
  ],
  alternates: { canonical: '/servicenow-classroom-training-hyderabad' },
}

export default function ClassroomPage() {
  return (
    <LandingPage
      crumb="ServiceNow Classroom Training in Hyderabad"
      href="/servicenow-classroom-training-hyderabad"
      eyebrow="ServiceNow Offline Training · Kukatpally, Hyderabad"
      title={
        <>
          ServiceNow Classroom Training <AccentText>in Hyderabad.</AccentText>
        </>
      }
      intro={
        <p>
          Learn ServiceNow face to face at our Kukatpally centre. Small batches, lab systems, whiteboard design sessions and a trainer who knows your name. Weekday and weekend ServiceNow offline training available.
        </p>
      }
      stats={[
        { value: '15–20', label: 'Learners per classroom batch' },
        { value: 'Kukatpally', label: 'Classroom location' },
        { value: 'Sat–Sun', label: 'Weekend offline batches' },
        { value: '7 AM–9 PM', label: 'Lab open for practice' },
      ]}
      featuresTitle={
        <>
          The classroom advantage, <span className="text-gradient">done properly.</span>
        </>
      }
      features={[
        { title: 'Face-to-face mentoring', body: 'Sit next to your trainer while you debug a business rule or design a catalog item. Doubts are cleared on the spot.' },
        { title: 'Dedicated lab systems', body: 'Use our lab machines and Wi-Fi with your own ServiceNow instance — no setup, no distractions.' },
        { title: 'Weekend offline batches', body: 'Working professionals can attend Saturday and Sunday ServiceNow offline training without taking leave.' },
        { title: 'Peer study groups', body: 'Learn with classmates from Hyderabad’s IT corridors, practise mock interviews together and build a referral network.' },
      ]}
      highlightsTitle="What our Hyderabad classroom includes"
      highlights={[
        'Real-time project training',
        'ServiceNow certification training',
        'Interview preparation and mock interviews',
        'Classes Monday to Friday',
        'Daily practicals and assigned tasks',
        'Three hours per week of spoken English and interview preparation',
      ]}
      extra={
        <Section id="weekend" tone="dark" labelledBy="areas-title">
          <SectionHeading
            id="areas-title"
            tone="dark"
            eyebrow="Areas we serve"
            title="ServiceNow training near you in Hyderabad"
            description="Our classroom centre is in Kukatpally, Hyderabad. Contact us for directions and current batch timings."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 font-semibold transition-colors hover:bg-white/10">
                  <MapPin className="size-5 text-blue-300" aria-hidden="true" />
                  {l.keyword}
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      }
      faqs={[
        { q: 'Where is your ServiceNow classroom training centre in Hyderabad?', a: 'Our classroom training centre is in Kukatpally, Hyderabad. Contact Rise Gen Technologies for directions and current classroom availability.' },
        { q: 'What is the classroom training schedule?', a: 'The listed program schedule is Monday to Friday classes, with daily practicals and weekend tests and mock interviews. Contact Rise Gen Technologies to confirm current classroom availability and batch timings.' },
        { q: 'What if I miss a classroom session?', a: 'Contact Rise Gen Technologies to confirm available catch-up options for the specific classroom batch before enrolling.' },
        { q: 'How do classroom and online fees compare?', a: 'Contact Rise Gen Technologies for current fees for each course and mode, along with any payment details that apply to your batch.' },
      ]}
    />
  )
}
