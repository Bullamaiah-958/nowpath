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
