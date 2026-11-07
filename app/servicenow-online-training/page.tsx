import type { Metadata } from 'next'
import { ArrowRight, Check, Laptop } from 'lucide-react'
import Link from 'next/link'
import { LandingPage } from '@/components/landing-page'
import type { Faq } from '@/lib/courses'
import { createPageMetadata } from '@/lib/seo'

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
        <p>
          Join live ServiceNow Online Training from anywhere in India, the US, UK or Middle East. Same trainers, curriculum and real-time projects as our Hyderabad classroom — with class notes, a personal instance and one-on-one doubt sessions.
        </p>
      }
      heroContentClassName="md:pt-10"
      heroAside={
        <div role="region" aria-labelledby="online-classroom-title" className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-blue-400/15 via-white/[0.07] to-violet-400/15 p-5 shadow-2xl shadow-brand/20 backdrop-blur-sm sm:p-7">
          <div className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-blue-400/15 blur-3xl" aria-hidden="true" />
          <div className="relative">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-200">
                <span className="size-2 rounded-full bg-emerald-300" aria-hidden="true" />
                LIVE ONLINE CLASS
              </span>
              <span className="text-xs font-medium text-white/55">Learn from anywhere</span>
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-ink/60 p-5">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-lg shadow-brand/25">
                  <Laptop className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="eyebrow text-blue-200/75">Your online classroom</p>
                  <h2 id="online-classroom-title" className="mt-2 text-xl font-semibold leading-tight text-white sm:text-2xl">
                    Learn live, Build skills in real time
                  </h2>
                </div>
              </div>

              <ul className="mt-6 space-y-4 text-sm text-white/75">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-blue-300" aria-hidden="true" />
                  <span>
                    <strong className="block text-sm font-semibold text-white">Learn From Anywhere</strong>
                    Join live classes from any city, with no need to move to Hyderabad.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-blue-300" aria-hidden="true" />
                  <span>
                    <strong className="block text-sm font-semibold text-white">Live Interactive Classes</strong>
                    Ask questions as you learn and get clear answers in simple Telugu or English.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 size-4 shrink-0 text-blue-300" aria-hidden="true" />
                  <span>
                    <strong className="block text-sm font-semibold text-white">Community Access (Users)</strong>
                    Share doubts, resources and tips with your batch mates and your trainer in our student group.
                  </span>
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="mt-4 flex min-h-11 items-center justify-between gap-3 rounded-xl border border-blue-200/15 bg-ink/35 px-4 py-3 text-sm transition-colors hover:border-blue-200/35 hover:bg-ink/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            >
              <span className="min-w-0">
                <span className="block text-xs font-medium text-white/55">Want to join?</span>
                <span className="mt-0.5 block font-semibold text-white">Ask about the next batch</span>
              </span>
              <ArrowRight className="size-4 shrink-0 text-blue-300" aria-hidden="true" />
            </Link>
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
