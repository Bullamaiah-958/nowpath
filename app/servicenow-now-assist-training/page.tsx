import type { Metadata } from 'next'
import { LandingPage } from '@/components/landing-page'
import { AccentText } from '@/components/page-hero'

export const metadata: Metadata = {
  title: { absolute: 'ServiceNow Now Assist Training | Now Assist Course' },
  description:
    'Explore ServiceNow Now Assist training covering generative AI concepts and platform use cases. Contact NowPath to confirm the current curriculum and batch details.',
  keywords: [
    'ServiceNow Now Assist Training',
    'ServiceNow Now Assist Course',
    'Now Assist Training',
    'ServiceNow Generative AI Training',
  ],
  alternates: { canonical: '/servicenow-now-assist-training' },
}

export default function NowAssistTrainingPage() {
  return (
    <LandingPage
      crumb="ServiceNow Now Assist Training"
      href="/servicenow-now-assist-training"
      eyebrow="ServiceNow Platform & Development · Generative AI"
      title={
        <>
          ServiceNow Now Assist Training, <AccentText>explained in context.</AccentText>
        </>
      }
      intro={
        <p>
          Explore Now Assist and generative AI concepts in the ServiceNow platform. Training topics, examples and hands-on scope can vary with the ServiceNow release and available product access, so contact NowPath to confirm the current curriculum before enrolling.
        </p>
      }
      featuresTitle={
        <>
          Understand Now Assist, <span className="text-gradient">then explore its use cases.</span>
        </>
      }
      features={[
        { title: 'ServiceNow Now Assist overview', body: 'Build an understanding of Now Assist and its place in the ServiceNow platform.' },
        { title: 'Generative AI concepts', body: 'Explore the concepts behind generative AI features and how they relate to ServiceNow workflows.' },
        { title: 'Use-case exploration', body: 'Review relevant platform scenarios and discuss which capabilities apply to your learning goals.' },
        { title: 'Release-aware learning', body: 'Confirm course scope and examples against the ServiceNow release and product access available for your batch.' },
      ]}
      highlightsTitle="Explore ServiceNow Now Assist training"
      highlights={[
        'Now Assist and generative AI concepts',
        'ServiceNow platform context and terminology',
        'Use-case discussion and guided learning',
        'Training scope confirmed for your goals',
        'Examples aligned to current product access',
        'Contact the team to confirm batch availability',
      ]}
      faqs={[
        { q: 'What is covered in ServiceNow Now Assist Training?', a: 'The training introduces Now Assist and generative AI concepts in the ServiceNow platform. Contact NowPath to confirm the detailed curriculum, examples and hands-on scope for the current batch.' },
        { q: 'Does the course include hands-on access to Now Assist?', a: 'Hands-on scope depends on available product access and the ServiceNow release. Confirm access requirements and practical activities with NowPath before enrolling.' },
        { q: 'Who should consider a Now Assist course?', a: 'The course may suit learners who want to understand generative AI in the ServiceNow platform. Contact NowPath to discuss your background and learning goals.' },
        { q: 'How can I check the next batch and prerequisites?', a: 'Contact NowPath to confirm batch dates, current prerequisites, platform access requirements and course details.' },
      ]}
    />
  )
}
