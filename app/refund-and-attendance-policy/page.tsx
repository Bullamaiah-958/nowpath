import type { Metadata } from 'next'
import { PolicyPage } from '@/components/policy-page'

export const metadata: Metadata = {
  title: 'Training Refund and Attendance Policy',
  description:
    'Review Rise Gen Technologies starter guidance on ServiceNow course attendance, fees, cancellations and refund terms before enrollment.',
  alternates: { canonical: '/refund-and-attendance-policy' },
}

export default function RefundAndAttendancePolicyPage() {
  return (
    <PolicyPage
      title="Refund & Attendance Policy"
      path="/refund-and-attendance-policy"
      description="Review attendance expectations and confirm the applicable fee, cancellation and refund terms for your course before enrollment."
      sections={[
        {
          heading: 'Attendance and participation',
          paragraphs: [
            'Regular attendance and participation in class, hands-on practice, assigned tasks and assessments are expected. The current course information asks students to attend at least 90% of classes and complete daily tasks.',
            'Contact Rise Gen Technologies before joining if you expect to miss classes or need to discuss attendance requirements for a specific batch.',
          ],
        },
        {
          heading: 'Course fees and refund terms',
          paragraphs: [
            'Course fees, payment arrangements, cancellation rules and any refund eligibility may depend on the course and batch. Ask Rise Gen Technologies for the applicable terms in writing before making a payment.',
            'This website does not state a fixed refund period, amount or guarantee. Do not rely on an assumed refund; confirm the terms for your enrollment directly with us.',
          ],
        },
        {
          heading: 'Batch changes and missed classes',
          paragraphs: [
            'Ask the training team how a schedule change, absence or request to move to another batch would be handled for your course. Any agreed arrangement should be confirmed directly before enrollment.',
          ],
        },
        {
          heading: 'Confirming policy details',
          paragraphs: [
            'For current attendance, fee or refund details, contact Rise Gen Technologies at info@risegentech.com or +91 90323 63182 before enrolling.',
          ],
        },
      ]}
    />
  )
}
