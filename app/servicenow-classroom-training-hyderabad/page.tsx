import type { Metadata } from 'next'
import { ArrowRight, Building2, CalendarDays, ExternalLink, Laptop, MapPin, Phone, UserRoundCheck } from 'lucide-react'
import { site } from '@/lib/site'
import { LandingPage } from '@/components/landing-page'
import { TrainingHeroStrip } from '@/components/training-hero-strip'

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
      showCoursesSection={false}
      faqEyebrow="03 · FAQ"
      ctaTone="muted"
      eyebrow="In-person classroom training · Kukatpally, Hyderabad"
      title={
        <>
          ServiceNow Classroom Training <span className="font-light text-blue-300">in Hyderabad.</span>
        </>
      }
      intro={
        <div>
          <p>
            Our ServiceNow Offline Training at the Kukatpally centre includes interactive classroom sessions, hands-on lab practice, trainer guidance and interview preparation. Contact us to confirm current batch timings and availability.
          </p>
          <dl className="mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { value: '10–12', label: 'Learners per classroom batch' },
              { value: 'Hands-on', label: 'ServiceNow lab practice' },
              { value: 'Flexible', label: 'Weekday and weekend options' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
                <dt className="text-xl font-bold tracking-tight text-blue-300">{item.value}</dt>
                <dd className="mt-1 text-xs leading-relaxed text-white/60">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      }
      heroContentClassName="pt-5 pb-6 md:pt-7 md:pb-8"
      heroBackgroundDecoration="/images/dotted-globe.svg"
      heroBackgroundMap="/images/dotted-world-map.svg"
      heroAside={
        <div role="region" aria-labelledby="classroom-title" className="relative mx-auto w-full max-w-md">
          <div className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-blue-400/15 blur-3xl" aria-hidden="true" />
          <TrainingHeroStrip mode="In-person classroom batch" detail="Kukatpally, Hyderabad" icon={MapPin} />
          <div className="@container relative rounded-xl border border-white/15 bg-ink/75 p-5 shadow-2xl shadow-brand/20 backdrop-blur-sm sm:p-6">
            <div>
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-blue-200/75">In-person learning advantage</p>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-cyan-200">
                  <span className="size-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
                  Live labs
                </span>
              </div>
              <h2 id="classroom-title" className="mt-2 whitespace-nowrap font-semibold leading-tight text-white [font-size:clamp(0.875rem,5.4cqw,1.5rem)]">
                Classroom Training Overview
              </h2>
            </div>

            <ul className="mt-6 text-sm text-white/75">
              {[
                {
                  title: 'Face-to-face mentoring',
                  body: 'Get direct trainer guidance and clear doubts as you work through ServiceNow exercises.',
                  icon: UserRoundCheck,
                  iconClass: 'bg-blue-400/15 text-blue-200',
                },
                {
                  title: 'Hands-on lab practice',
                  body: 'Practise platform configurations and exercises in a focused classroom setting.',
                  icon: Laptop,
                  iconClass: 'bg-cyan-400/15 text-cyan-200',
                },
                {
                  title: 'Flexible batch schedules',
                  body: 'Ask about weekday and weekend classroom options that fit your schedule.',
                  icon: CalendarDays,
                  iconClass: 'bg-violet-400/15 text-violet-200',
                },
              ].map(({ title, body, icon: Icon, iconClass }) => (
                <li key={title} className="flex items-start gap-3 border-b border-dotted border-white/40 py-4 first:pt-0">
                  <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${iconClass}`}>
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="pt-0.5">
                    <strong className="block text-sm font-semibold text-white">{title}</strong>
                    <span className="mt-1 block leading-relaxed text-white/60">{body}</span>
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Kukatpally%2C%20Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex min-h-10 items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white/75 transition-colors hover:border-blue-200/30 hover:bg-white/[0.08]"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-blue-300" aria-hidden="true" />
                Kukatpally centre location
              </span>
              <span className="inline-flex items-center gap-1 text-blue-200">
                View map <ExternalLink className="size-3" aria-hidden="true" />
              </span>
            </a>
          </div>

          <div className="relative mt-3 flex flex-nowrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-ink/80 p-4 shadow-lg sm:gap-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <Building2 className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold uppercase tracking-wide text-cyan-200">Ready to visit campus?</span>
                <span className="mt-1 block text-sm font-semibold leading-snug text-white/80">
                  Contact us to plan your classroom visit.
                </span>
              </span>
            </div>
            <a
              href={site.phoneHref}
              className="inline-flex min-h-9 shrink-0 items-center justify-center gap-1.5 rounded-full bg-gradient-brand px-3.5 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            >
              Call centre <Phone className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      }
      heroSecondaryActionVariant="ghostLight"
      featuresTitle={<>Benefits of <span className="text-gradient">ServiceNow Classroom Training</span></>}
      featuresStyle="highlighted"
      features={[
        { title: 'Face-to-face mentoring', body: 'Learn directly from your trainer as you work through ServiceNow topics. Ask questions in class, clear doubts and get guidance on exercises as you build your skills.' },
        { title: 'Dedicated lab practice', body: 'Use the classroom lab to practise ServiceNow configurations and complete practical exercises. Apply what you learn with trainer guidance and build confidence on the platform.' },
        { title: 'Weekday and weekend options', body: 'Plan your learning around work or other commitments with weekday and weekend classroom options. Contact us to confirm the next batch schedule and available timings.' },
        { title: 'Peer study groups', body: 'Learn alongside classmates, discuss ServiceNow concepts and share ideas during practice. Prepare for interviews together and build connections with other learners.' },
        { title: 'Exam & Certification Readiness', body: 'Get targeted guidance to clear official ServiceNow certifications (like CSA & CAD). Practice with real exam-style scenarios, dump analysis, and tips to pass on your first attempt.' },
        { title: 'Resume & Mock Interviews', body: 'Stand out to recruiters with resume-building assistance, LinkedIn optimization, and technical mock interviews designed by industry experts to help you crack ServiceNow developer roles.' },
      ]}
      highlightsTitle="What our Hyderabad classroom includes"
      highlightsDescription="Build practical ServiceNow skills in our Kukatpally classroom with trainer-led sessions, hands-on lab work and support for interview preparation. Contact us to confirm current classroom timings and batch availability."
      highlightsFormLeft
      highlights={[
        'Real-time project training',
        'ServiceNow certification training',
        'Interview preparation and mock interviews',
        'Weekday classes and daily practicals',
        'Weekend tests and assigned tasks',
        'Spoken English and interview preparation',
      ]}
      faqs={[
        { q: 'Where is your ServiceNow classroom training centre in Hyderabad?', a: 'Our classroom training centre is in Kukatpally, Hyderabad. Contact Rise Gen Technologies for directions and current classroom availability.' },
        { q: 'What is the classroom training schedule?', a: 'Weekday classes include daily practicals, with weekend tests and mock interviews. Contact Rise Gen Technologies to confirm current classroom timings and batch availability.' },
        { q: 'What if I miss a classroom session?', a: 'Contact Rise Gen Technologies to confirm available catch-up options for the specific classroom batch before enrolling.' },
        { q: 'How do classroom and online fees compare?', a: 'Contact Rise Gen Technologies for current fees for each course and mode, along with any payment details that apply to your batch.' },
      ]}
    />
  )
}
