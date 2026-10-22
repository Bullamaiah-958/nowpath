import { Section, SectionHeading } from '@/components/section'
import { FaqList } from '@/components/faq-list'

export const homeFaqs = [
  {
    q: 'What should I compare when choosing ServiceNow training in Hyderabad?',
    a: 'Compare the course syllabus, class schedule, practical exercises, delivery mode and the preparation included. NowPath’s published schedule includes weekday classes, daily practicals, weekend tests and mock interviews, plus spoken English and interview preparation.',
  },
  {
    q: 'What is the ServiceNow course fee in Hyderabad?',
    a: 'Fees may vary by course and training mode. Contact NowPath for current course fees, payment options and batch availability before enrolling.',
  },
  {
    q: 'Is ServiceNow Online Training as effective as classroom training?',
    a: 'NowPath lists online and classroom training options. Contact the team to confirm the current schedule, course format and availability for the mode you prefer.',
  },
  {
    q: 'Can a fresher or non-IT graduate learn ServiceNow?',
    a: 'Prerequisites vary by course. Review the relevant course page and contact NowPath with your background to confirm which course is a suitable starting point.',
  },
  {
    q: 'What interview and certification preparation is included?',
    a: 'The program includes weekend tests and mock interviews, along with three hours per week of spoken English and interview preparation. Official certification training is optional; contact NowPath to confirm which certification preparation is available for your course.',
  },
]

export function HomeFaq() {
  return (
    <Section id="faq" labelledBy="faq-title">
      <SectionHeading id="faq-title" eyebrow="FAQ" title="ServiceNow training questions, answered." />
      <div className="mt-12">
        <FaqList faqs={homeFaqs} />
      </div>
    </Section>
  )
}
