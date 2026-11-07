import type { Metadata } from 'next'
import { LandingPage } from '@/components/landing-page'
import { AccentText } from '@/components/page-hero'
import { createPageMetadata } from '@/lib/seo'

const onlineTrainingDescription =
  'Live ServiceNow online training with hands-on projects, class notes and interview prep. Join weekday batches from anywhere in India or abroad.'

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
      eyebrow="ServiceNow Online Training · Live · Instructor-led"
      title={
        <>
          ServiceNow Online Training, <AccentText>live — not recorded.</AccentText>
        </>
      }
      intro={
        <p>
          Join live ServiceNow Online Training from anywhere in India, the US, UK or Middle East. Same trainers, curriculum and real-time projects as our Hyderabad classroom — with class notes, a personal instance and one-on-one doubt sessions.
        </p>
      }
      heroContentClassName="md:pt-10"
      stats={[
        { value: 'Live', label: 'Interactive Zoom / Teams classes' },
        { value: 'Notes', label: 'Class notes provided' },
        { value: '3', label: 'IST, early-morning & US time slots' },
        { value: '1:1', label: 'Weekly doubt-clearing sessions' },
      ]}
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
        { q: 'How can I confirm online batch availability?', a: 'Contact Rise Gen Technologies to confirm the next available online batch, its timing, the course format and any equipment or access requirements before enrolling.' },
        { q: 'What equipment is needed for online classes?', a: 'Ask Rise Gen Technologies to confirm the current equipment, internet and platform-access requirements for your chosen course and online batch.' },
        { q: 'Is official certification training included?', a: 'Official certification training is optional. Contact Rise Gen Technologies to confirm which course preparation is currently available and whether exam registration or fees are separate.' },
        { q: 'Are online classes recorded?', a: 'No, class recordings are not provided. Class notes are provided to help you review topics and support your practice.' },
        { q: 'Will I get hands-on practice during online training?', a: 'Yes. You will practice on your own ServiceNow Personal Developer Instance (PDI) and get step-by-step guidance from your trainer during practical exercises.' },
      ]}
    />
  )
}
