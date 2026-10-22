import Link from 'next/link'
import { AccentText, PageHero } from '@/components/page-hero'
import { CareerLoop } from '@/components/career-loop'
import { LinkButton } from '@/components/link-button'
import { heroStats } from '@/data/site'

const courseLinks = [
  { label: 'ITSM', slug: 'servicenow-itsm-training' },
  { label: 'CSM', slug: 'servicenow-csm-training' },
  { label: 'HRSD', slug: 'servicenow-hrsd-training' },
  { label: 'GRC', slug: 'servicenow-grc-training' },
  { label: 'Admin', slug: 'servicenow-admin-training' },
  { label: 'Developer', slug: 'servicenow-developer-training' },
]

export function HomeHero() {
  return (
    <PageHero
      eyebrow="ServiceNow Training Institute in Hyderabad · Online & Classroom"
      title={
        <>
          ServiceNow Training in Hyderabad
          <span className="block">
            <AccentText className="text-3xl md:text-5xl lg:text-6xl">Online &amp; Classroom course built for job-ready skills.</AccentText>
          </span>
        </>
      }
      description={
        <p>
          NowPath is a ServiceNow Training Institute in Hyderabad for freshers and working professionals. Learn ServiceNow{' '}
          <Link className="hover:underline" href="/courses/servicenow-itsm-training">ITSM</Link>,{' '}
          <Link className="hover:underline" href="/courses/servicenow-csm-training">CSM</Link>,{' '}
          <Link className="hover:underline" href="/courses/servicenow-hrsd-training">HRSD</Link>,{' '}
          <Link className="hover:underline" href="/courses/servicenow-grc-training">GRC</Link>,{' '}
          <Link className="hover:underline" href="/courses/servicenow-admin-training">Admin</Link>,{' '}
          <Link className="hover:underline" href="/courses/servicenow-developer-training">Developer</Link> and Scripting from working consultants. Choose{' '}
          <Link href="/online-training" className="hover:underline"><strong className="font-semibold text-white">ServiceNow Online Training</strong></Link>{' '}
          or{' '}
          <Link href="/classroom" className="hover:underline"><strong className="font-semibold text-white">ServiceNow Classroom Training in Hyderabad</strong></Link>, with real-time projects, certification preparation and interview support.
        </p>
      }
      actions={
        <>
          <LinkButton href="/courses" size="lg">
            Explore ServiceNow Courses →
          </LinkButton>
          <LinkButton href="/book-demo" variant="light" size="lg">
            Book free demo
          </LinkButton>
        </>
      }
      aside={<CareerLoop />}
      stats={[...heroStats]}
      statsLabelClassName="fs-small"
    />
  )
}
