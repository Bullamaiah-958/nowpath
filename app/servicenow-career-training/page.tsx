import type { Metadata } from 'next'
import { LandingPage } from '@/components/landing-page'
import { AccentText } from '@/components/page-hero'
import { heroStats } from '@/data/site'

export const metadata: Metadata = {
  title: { absolute: 'ServiceNow Career Training & Interview Preparation | NowPath' },
  description:
    'ServiceNow career training in Hyderabad with weekday classes, daily practicals, weekend tests and mock interviews, plus spoken English and interview preparation.',
  keywords: [
    'ServiceNow Career Training',
    'ServiceNow Interview Preparation',
  ],
  alternates: { canonical: '/servicenow-career-training' },
}

export default function CareerPage() {
  return (
    <LandingPage
      crumb="ServiceNow Career Training"
      href="/servicenow-career-training"
      eyebrow="ServiceNow Career Training · Interview preparation"
      title={
        <>
          ServiceNow career preparation, <AccentText>built around practical learning.</AccentText>
        </>
      }
      intro={
        <p>
          Build ServiceNow knowledge through weekday classes and daily practicals. The program also includes weekend tests and mock interviews, with spoken English and interview preparation scheduled for three hours each week.
        </p>
      }
      stats={[...heroStats]}
      featuresTitle={
        <>
          A practical structure for <span className="text-gradient">career preparation.</span>
        </>
      }
      features={[
        { title: 'Weekday classes', body: 'Classes run Monday to Friday, with daily practical exercises.' },
        { title: 'Assigned practice', body: 'Work through daily practicals and assigned tasks alongside ServiceNow and JavaScript learning.' },
        { title: 'Optional certification training', body: 'Official certification training is optional. Contact NowPath to confirm current course and exam-preparation details.' },
        { title: 'Interview preparation', body: 'Weekend tests and mock interviews are included, alongside three hours per week of spoken English and interview preparation.' },
      ]}
      highlightsTitle="ServiceNow topics to explore"
      highlights={[
        'ServiceNow Administration',
        'ServiceNow IT Service Management',
        'ServiceNow Scripting',
        'JavaScript fundamentals',
        'Daily practicals and assigned tasks',
        'Weekend tests and mock interviews',
      ]}
      faqs={[
        { q: 'What does the career preparation schedule include?', a: 'The schedule includes classes Monday to Friday with daily practicals, weekend tests and mock interviews, plus three hours per week of spoken English and interview preparation.' },
        { q: 'Is official certification training included?', a: 'Official certification training is optional. Contact NowPath to confirm which course preparation is currently available and whether any exam registration or fee is separate.' },
        { q: 'What career outcome can I expect?', a: 'The program provides technical learning and interview preparation. Hiring decisions depend on employers and individual circumstances; contact NowPath for confirmed details about the training provided.' },
        { q: 'Which topics can I study?', a: 'The course catalog includes ServiceNow Administration, ITSM and Scripting among other subjects. Review the course pages to compare topics, then contact NowPath if you need help choosing a starting point.' },
      ]}
    />
  )
}
