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
            <AccentText className="text-2xl md:text-4xl lg:text-[2.75rem]">
              Online &amp; Classroom training<br className="hidden sm:block" /> built for job-ready skills.
            </AccentText>
          </span>
        </>
      }
      description={
        <p>
          Rise Gen Technologies is a ServiceNow Training Institute in Hyderabad for freshers and working professionals. Learn ServiceNow{' '}
          <Link className="hover:underline" href="/servicenow-itsm-training">ITSM</Link>,{' '}
          <Link className="hover:underline" href="/courses/servicenow-csm-training">CSM</Link>,{' '}
          <Link className="hover:underline" href="/courses/servicenow-hrsd-training">HRSD</Link>,{' '}
          <Link className="hover:underline" href="/courses/servicenow-grc-training">GRC</Link>,{' '}
          <Link className="hover:underline" href="/courses/servicenow-admin-training">Admin</Link>,{' '}
          <Link className="hover:underline" href="/courses/servicenow-developer-training">Developer</Link> and Scripting from a working consultant. Choose{' '}
          <Link href="/servicenow-online-training" className="hover:underline"><strong className="font-semibold text-white">ServiceNow Online Training in Hyderabad</strong></Link>{' '}
          or{' '}
          <Link href="/servicenow-classroom-training-hyderabad" className="hover:underline"><strong className="font-semibold text-white">ServiceNow Classroom Training in Hyderabad</strong></Link>, with real-time projects, certification preparation and interview support.
        </p>
      }
      actions={
        <>
          <LinkButton href="/courses" size="lg">
            Explore courses →
          </LinkButton>
          <LinkButton href="/contact" variant="light" size="lg">
            Book Free Demo
          </LinkButton>
        </>
      }
      aside={<CareerLoop />}
      stats={[...heroStats]}
      statsLabelClassName="fs-small"
    />
  )
}
