import type { Metadata } from 'next'
import { LandingPage } from '@/components/landing-page'
import { AccentText } from '@/components/page-hero'

export const metadata: Metadata = {
  title: { absolute: 'ServiceNow Weekend Training in Hyderabad | Hybrid Batches' },
  description:
    'Join ServiceNow weekend training in Hyderabad with Saturday and Sunday batches, hands-on projects, and the flexibility to switch between classroom and online learning.',
  keywords: [
    'ServiceNow Weekend Training in Hyderabad',
    'ServiceNow Weekend Batches',
    'ServiceNow Hybrid Training',
    'ServiceNow Training for Working Professionals',
  ],
  alternates: { canonical: '/servicenow-weekend-training-hyderabad' },
}

export default function WeekendTrainingPage() {
  return (
    <LandingPage
      crumb="ServiceNow Hybrid / Weekend Training"
      href="/servicenow-weekend-training-hyderabad"
      eyebrow="ServiceNow Hybrid Training · Weekend Batches"
      title={
        <>
          ServiceNow Weekend Training, <AccentText>built around your week.</AccentText>
        </>
      }
      intro={
        <p>
          Learn ServiceNow in Saturday and Sunday intensive batches designed for working professionals. Attend classroom sessions in Hyderabad or switch between online and classroom learning, with the same hands-on curriculum and project work.
        </p>
      }
      stats={[
        { value: 'Sat–Sun', label: 'Weekend intensive batches' },
        { value: '8–10 hrs', label: 'Weekly learning schedule' },
        { value: 'Hybrid', label: 'Online and classroom options' },
        { value: 'Flexible', label: 'Switch learning mode as needed' },
      ]}
      featuresTitle={
        <>
          Keep learning, <span className="text-gradient">even with a busy workweek.</span>
        </>
      }
      features={[
        { title: 'Weekend-focused schedule', body: 'Use Saturday and Sunday sessions to build your ServiceNow skills without attending weekday classes.' },
        { title: 'Classroom or online', body: 'Attend weekend classroom training in Hyderabad or join online, with flexibility to switch between modes.' },
        { title: 'Hands-on practice', body: 'Follow the same practical curriculum and work on ServiceNow projects with trainer guidance.' },
        { title: 'Designed for professionals', body: 'Plan your learning around work commitments with an intensive weekend batch format.' },
      ]}
      highlightsTitle="What the ServiceNow weekend batch includes"
      highlights={[
        'Saturday and Sunday intensive batches',
        'Eight to ten hours of weekly sessions',
        'Online and Hyderabad classroom options',
        'Flexible switching between learning modes',
        'Hands-on ServiceNow curriculum and projects',
        'Interview preparation and mock interviews',
      ]}
      faqs={[
        { q: 'When are the weekend ServiceNow batches held?', a: 'Weekend batches are planned for Saturday and Sunday. Contact NowPath to confirm the current batch schedule and availability.' },
        { q: 'Can I join online or in the classroom?', a: 'Weekend learners can choose online training or classroom sessions in Hyderabad. Contact NowPath to confirm the mode available for your chosen batch.' },
        { q: 'Can I switch between online and classroom training?', a: 'The hybrid batch is designed to allow switching between online and classroom modes. Confirm the current arrangements with NowPath before enrolling.' },
        { q: 'How many hours per week should I plan for?', a: 'Weekend batches are described as intensive sessions of around eight to ten hours per week. Confirm the exact hours and timings for the next batch with NowPath.' },
      ]}
    />
  )
}
