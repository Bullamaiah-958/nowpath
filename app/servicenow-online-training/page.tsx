import type { Metadata } from 'next'
import { ArrowRight, CalendarDays, Globe2, Laptop, Phone, UserRoundCheck } from 'lucide-react'
import Link from 'next/link'
import { LandingPage } from '@/components/landing-page'
import { TrainingHeroStrip } from '@/components/training-hero-strip'
import type { Faq } from '@/lib/courses'
import { createPageMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

const onlineTrainingDescription =
  'Live ServiceNow online training with hands-on projects, class notes and interview prep. Join weekday batches from anywhere in India or abroad.'

const onlineTrainingFaqs: Faq[] = [
  { q: 'What does the ServiceNow Online Training schedule include?', a: 'The schedule includes classes Monday to Friday with daily practicals, weekend tests and mock interviews, plus three hours per week of spoken English and interview preparation.' },
  { q: 'How can I confirm online batch availability?', a: 'Contact Rise Gen Technologies to confirm the next available online batch, its timing, the course format and any equipment or access requirements before enrolling.' },
  { q: 'What equipment is needed for online classes?', a: 'Ask Rise Gen Technologies to confirm the current equipment, internet and platform-access requirements for your chosen course and online batch.' },
  { q: 'Is official certification training included?', a: 'Official certification training is optional. Contact Rise Gen Technologies to confirm which course preparation is currently available and whether exam registration or fees are separate.' },
  { q: 'Are online classes recorded?', a: 'No, class recordings are not provided. Class notes are provided to help you review topics and support your practice.' },
  { q: 'Will I get hands-on practice during online training?', a: 'Yes. You will practice on your own ServiceNow Personal Developer Instance (PDI) and get step-by-step guidance from your trainer during practical exercises.' },
]

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'ServiceNow Online Training',
    description: onlineTrainingDescription,
    canonicalPath: '/servicenow-online-training',
    image: {
      url: '/images/online-learning.png',
      width: 1264,
      height: 848,
      alt: 'Learner attending a live online training session',
    },
  }),
  keywords: [
    'ServiceNow Online Training',
    'Live ServiceNow Training',
    'ServiceNow Online Course',
    'ServiceNow Online Training in India',
    'ServiceNow Online Training in Hyderabad',
    'ServiceNow Instructor-Led Training',
  ],
}

export default function OnlineTrainingPage() {
  return (
    <LandingPage
      crumb="ServiceNow Online Training"
      href="/servicenow-online-training"
      showCoursesSection={false}
      eyebrow="ServiceNow Online Training · Live · Instructor-led"
      title={
        <>
          ServiceNow Online Training, <span className="font-light text-blue-300">live — not recorded.</span>
        </>
      }
      intro={
        <div>
          <p>
            Join live ServiceNow Online Training from anywhere in India, the US, UK or Middle East. Learn with instructor guidance, class notes, a personal instance and one-on-one doubt sessions.
          </p>
          <dl className="mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { value: 'Live', label: 'Instructor-led sessions' },
              { value: 'Global', label: 'Join from anywhere' },
              { value: 'Hands-on', label: 'Personal lab instance' },
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
        <div role="region" aria-labelledby="online-classroom-title" className="relative mx-auto w-full max-w-md">
          <div className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-blue-400/15 blur-3xl" aria-hidden="true" />
          <TrainingHeroStrip mode="Live online classes" detail="Learn from anywhere" icon={Globe2} />
          <div className="@container relative rounded-xl border border-white/15 bg-ink/75 p-5 shadow-2xl shadow-brand/20 backdrop-blur-sm sm:p-6">
            <div>
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-blue-200/75">Live online learning advantage</p>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-cyan-200">
                  <span className="size-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
                  Live classes
                </span>
              </div>
              <h2 id="online-classroom-title" className="mt-2 whitespace-nowrap font-semibold leading-tight text-white [font-size:clamp(0.875rem,5.4cqw,1.5rem)]">
                Online Training Overview
              </h2>
            </div>

            <ul className="mt-6 text-sm text-white/75">
              {[
                {
                  title: 'Join from anywhere',
                  body: 'Attend live ServiceNow sessions from your location, without travelling to Hyderabad.',
                  icon: Laptop,
                  iconClass: 'bg-blue-400/15 text-blue-200',
                },
                {
                  title: 'Interactive trainer support',
                  body: 'Ask questions during class and get guidance as you work through practical exercises.',
                  icon: UserRoundCheck,
                  iconClass: 'bg-cyan-400/15 text-cyan-200',
                },
                {
                  title: 'Flexible online batches',
                  body: 'Contact us to check current batch timings and online learning requirements.',
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

            <Link
              href="/contact"
              className="mt-5 flex min-h-10 items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white/75 transition-colors hover:border-blue-200/30 hover:bg-white/[0.08]"
            >
              <span className="inline-flex items-center gap-2">
                <Laptop className="size-4 text-blue-300" aria-hidden="true" />
                Online training enquiries
              </span>
              <span className="inline-flex items-center gap-1 text-blue-200">
                Contact us <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
            </Link>
          </div>

          <div className="relative mt-3 flex flex-nowrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-ink/80 p-4 shadow-lg sm:gap-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <Laptop className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold uppercase tracking-wide text-cyan-200">Ready to join an online batch?</span>
                <span className="mt-1 block text-sm font-semibold leading-snug text-white/80">
                  Ask us about upcoming class timings.
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
      featuresTitle={
        <>
          Online, but <span className="text-gradient">never on your own.</span>
        </>
      }
      features={[
        { title: 'Live instructor-led classes', body: 'Every ServiceNow online class is taught live by an instructor. Ask questions as you work, share your screen when you need help, and get your configuration reviewed in real time so you can correct issues and build confidence.' },
        { title: 'Personal lab instance', body: 'Practice on your own ServiceNow Personal Developer Instance (PDI) from the start of the course. Configure platform features, try the exercises yourself, and get step-by-step guidance from your trainer as you build practical skills.' },
        { title: 'Class notes', body: 'We provide class notes to help you revise each topic after the session. Use them to revisit key concepts, follow along with practical exercises, and keep useful reference material handy as you continue building your ServiceNow skills.' },
        { title: 'Global-friendly timings', body: 'Choose from morning and evening IST batches, with US-friendly timing options for learners abroad. Live online sessions make it possible to join from your location, and you can contact us to check the schedule that suits you.' },
      ]}
      highlightsTitle="Why learners choose our ServiceNow Online Course"
      highlightsDescription="Build practical ServiceNow skills through hands-on projects, certification preparation and interview practice, with support throughout your learning journey. Work through real platform scenarios, strengthen your understanding with regular practice, and prepare to explain your skills with confidence when applying for ServiceNow roles."
      highlightsFormLeft
      highlights={[
        'Real-time project training',
        'ServiceNow certification training (CSA, CAD, CIS)',
        'ServiceNow interview preparation',
        'Weekday classes with daily practicals',
        'Weekend tests and mock interviews',
        'Three hours per week of spoken English and interview preparation',
      ]}
      faqs={onlineTrainingFaqs}
    />
  )
}
