import type { Metadata } from 'next'
import { LandingPage } from '@/components/landing-page'
import { AccentText } from '@/components/page-hero'

export const metadata: Metadata = {
  title: { absolute: 'ServiceNow Online Training | Live Instructor-Led Course with Projects' },
  description:
    'ServiceNow Online Training with weekday classes, daily practicals, weekend tests and mock interviews, plus spoken English and interview preparation.',
  keywords: ['ServiceNow Online Training', 'ServiceNow Online Training in Hyderabad', 'ServiceNow Online Course', 'ServiceNow Live Training', 'ServiceNow Instructor Led Training'],
  alternates: { canonical: '/servicenow-online-training' },
}

export default function OnlineTrainingPage() {
  return (
    <LandingPage
      crumb="ServiceNow Online Training"
      href="/servicenow-online-training"
      eyebrow="ServiceNow Online Training · Live · Instructor-led"
      title={
        <>
          ServiceNow Online Training, <AccentText>live — not recorded.</AccentText>
        </>
      }
      intro={
        <p>
          Join live ServiceNow Online Training from anywhere in India, the US, UK or Middle East. Same trainers, curriculum and real-time projects as our Hyderabad classroom — with recordings, a personal instance and one-on-one doubt sessions.
        </p>
      }
      stats={[
        { value: 'Live', label: 'Interactive Zoom / Teams classes' },
        { value: '∞', label: 'Lifetime access to recordings' },
        { value: '3', label: 'IST, early-morning & US time slots' },
        { value: '1:1', label: 'Weekly doubt-clearing sessions' },
      ]}
      featuresTitle={
        <>
          Online, but <span className="text-gradient">never on your own.</span>
        </>
      }
      features={[
        { title: 'Live instructor-led classes', body: 'Every ServiceNow online class is taught live. Ask questions, share your screen and get your configuration reviewed in real time.' },
        { title: 'Personal lab instance', body: 'Configure everything on your own ServiceNow Personal Developer Instance, guided step by step by your trainer.' },
        { title: 'Recordings and notes', body: 'Missed a class? Watch the recording the same day, with downloadable notes, scripts and update sets.' },
        { title: 'Global-friendly timings', body: 'Morning and evening IST batches plus US-friendly slots, ideal for working professionals and learners abroad.' },
      ]}
      highlightsTitle="Why learners choose our ServiceNow Online Course"
      highlights={[
        'Real-time project training',
        'ServiceNow certification training (CSA, CAD, CIS)',
        'ServiceNow interview preparation',
        'Weekday classes with daily practicals',
        'Weekend tests and mock interviews',
        'Three hours per week of spoken English and interview preparation',
      ]}
      faqs={[
        { q: 'What does the ServiceNow Online Training schedule include?', a: 'The schedule includes classes Monday to Friday with daily practicals, weekend tests and mock interviews, plus three hours per week of spoken English and interview preparation.' },
        { q: 'How can I confirm online batch availability?', a: 'Contact NowPath to confirm the next available online batch, its timing, the course format and any equipment or access requirements before enrolling.' },
        { q: 'What equipment is needed for online classes?', a: 'Ask NowPath to confirm the current equipment, internet and platform-access requirements for your chosen course and online batch.' },
        { q: 'Is official certification training included?', a: 'Official certification training is optional. Contact NowPath to confirm which course preparation is currently available and whether exam registration or fees are separate.' },
      ]}
    />
  )
}
