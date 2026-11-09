import type { Metadata } from 'next'
import { PolicyPage } from '@/components/policy-page'

export const metadata: Metadata = {
  title: 'Website Terms of Service',
  description:
    'Review the Rise Gen Technologies website terms for ServiceNow training information, enquiries, external links and course details.',
  alternates: { canonical: '/terms-of-service' },
}

export default function TermsOfServicePage() {
  return (
    <PolicyPage
      title="Terms of Service"
      path="/terms-of-service"
      description="Terms for using the Rise Gen Technologies website and reviewing information about our ServiceNow training."
      heroAside={
        <aside
          aria-label="Terms of service overview"
          className="rounded-3xl border border-white/15 bg-white/[0.07] p-6 shadow-2xl shadow-black/10 backdrop-blur-sm sm:p-7"
        >
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-200">
            At a glance
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            Clear details before you proceed.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            A quick guide to using the website and checking course information before enrollment.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {['Course information', 'Enquiries and enrollment', 'Website use and external links'].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/85"
              >
                <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-blue-300" />
                {item}
              </li>
            ))}
          </ul>
        </aside>
      }
      sections={[
        {
          heading: 'Website information',
          paragraphs: [
            'This website provides general information about Rise Gen Technologies, ServiceNow courses, training modes and ways to contact us. Course availability, schedules and details may change.',
            'Training information on this website is not a promise of employment, placement, certification or a particular career outcome. Learning outcomes vary by learner and hiring decisions are made by employers.',
          ],
        },
        {
          heading: 'Enquiries and enrollment',
          paragraphs: [
            'Submitting an enquiry does not by itself enroll you in a course or reserve a place in a batch. Confirm the course, schedule, fees, payment instructions and applicable policies directly with Rise Gen Technologies before enrolling or paying.',
          ],
        },
        {
          heading: 'Use of the website',
          paragraphs: [
            'Please use the website lawfully and do not interfere with its operation or attempt to access systems or information without authorization.',
          ],
        },
        {
          heading: 'External links and updates',
          paragraphs: [
            'The website may link to third-party services. Rise Gen Technologies does not control their content or terms. We may update website information or these terms; the current version will be published on this page.',
          ],
        },
        {
          heading: 'Contact',
          paragraphs: [
            'For questions about these website terms, email info@risegentech.com or call +91 90323 63182.',
          ],
        },
      ]}
    />
  )
}
