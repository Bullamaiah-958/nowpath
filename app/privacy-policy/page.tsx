import type { Metadata } from 'next'
import { PolicyPage } from '@/components/policy-page'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy for Website Visitors',
  description:
    'Read the Rise Gen Technologies privacy policy to understand how enquiries, contact details and website analytics are handled.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage
      title="Privacy Policy"
      path="/privacy-policy"
      description="How Rise Gen Technologies handles information when you browse the website or contact us about ServiceNow training."
      sections={[
        {
          heading: 'Information you choose to share',
          paragraphs: [
            'You can contact Rise Gen Technologies by phone, email or WhatsApp. When you submit the free demo enquiry form, your contact details, course and training preferences, any message and the page you enquired from are sent to our server and stored in a Google Sheet so we can respond. You can also choose to send the prepared enquiry through WhatsApp.',
            'If you contact us directly, we use the information you provide to respond to your question, discuss a course or follow up on your request.',
          ],
        },
        {
          heading: 'Website analytics',
          paragraphs: [
            'The production website loads Vercel Analytics to help understand site usage and performance. Analytics and hosting providers may process technical information under their own privacy terms.',
          ],
        },
        {
          heading: 'Third-party services',
          paragraphs: [
            'We use Google Sheets to store and manage form enquiries. Links to WhatsApp and other external services take you to providers with their own privacy policies and practices. Review those policies before sharing information through an external service.',
          ],
        },
        {
          heading: 'Questions about privacy',
          paragraphs: [
            `For questions about information you have shared with us, contact Rise Gen Technologies at ${site.email} or ${site.phone}.`,
          ],
        },
      ]}
    />
  )
}
