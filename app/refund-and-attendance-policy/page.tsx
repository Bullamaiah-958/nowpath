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
      heroAside={
        <aside
          aria-label="Refund and attendance policy overview"
          className="rounded-3xl border border-white/15 bg-white/[0.07] p-6 shadow-2xl shadow-black/10 backdrop-blur-sm sm:p-7"
        >
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-blue-200">
            Before you enroll
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
            Know what to confirm.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/65">
            Review attendance expectations and confirm course-specific payment and schedule details with the training team.
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {['Attendance and participation', 'Fees and refund terms', 'Batch changes and missed classes'].map((item) => (
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
