import { Section, SectionHeading } from '@/components/section'
import { FaqList } from '@/components/faq-list'

export const homeFaqs = [
  {
    q: 'Which ServiceNow courses can I study at NowPath?',
    a: 'The course catalog includes ITSM, CSM, HRSD, GRC, ServiceNow Administration, Developer, Scripting and Now Assist training. Review each course page to compare the topics and practical work, then contact NowPath if you need help choosing a starting point.',
  },
  {
    q: 'How long is the course, and what is the weekly schedule?',
    a: 'The core ServiceNow course is planned for 2.5 to 3 months, with weekday classes Monday through Friday, daily practicals and assigned tasks. Exact class timings and the next batch date can vary, so confirm them with NowPath before enrolling.',
  },
  {
    q: 'Can I choose online, classroom or weekend training?',
    a: 'NowPath offers online training, classroom training in Ameerpet, Hyderabad, and hybrid/weekend options. Weekend batches are described as Saturday and Sunday sessions; contact NowPath to confirm the current mode, schedule and availability for your course.',
  },
  {
    q: 'Does the training include hands-on practice and a project?',
    a: 'The published program includes daily practicals and assigned tasks, with work on a ServiceNow Personal Developer Instance and a real-time project. Ask NowPath to confirm the specific exercises and project scope for your chosen course.',
  },
  {
    q: 'What interview preparation is included?',
    a: 'The weekly schedule includes weekend tests and mock interviews, plus three hours per week of spoken English and interview preparation. Ask NowPath what support is available for your selected course and batch.',
  },
  {
    q: 'Are there prerequisites for joining a ServiceNow course?',
    a: 'Prerequisites can differ by course and learner background. Check the prerequisites on the course page and contact NowPath with your experience or education details to confirm whether the course is a good fit.',
  },
  {
    q: 'How can I check the course fee and next batch date?',
    a: 'Fees, payment details and batch availability may vary by course and training mode. Contact NowPath for the current fee, upcoming batch date, class timings and any other details before enrolling.',
  },
  {
    q: 'Does the course include an official ServiceNow certification exam?',
    a: 'Official certification training is optional, and exam registration or fees may be separate. Contact NowPath to confirm which certification preparation is available for your course and what it includes.',
  },
]

export function HomeFaq() {
  return (
    <Section id="faq" labelledBy="faq-title">
      <SectionHeading
        id="faq-title"
        eyebrow="FAQ"
        title="ServiceNow training questions, answered."
        description={
          <span className="fs-lead text-lg">
            Get clear answers about course fees, training modes, schedules and the practical interview preparation included.
          </span>
        }
      />
      <div className="mt-12">
        <FaqList faqs={homeFaqs} />
      </div>
    </Section>
  )
}
