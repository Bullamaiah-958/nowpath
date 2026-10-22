import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PageHero, AccentText } from '@/components/page-hero'
import { Section, SectionHeading } from '@/components/section'
import { FaqList } from '@/components/faq-list'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: { absolute: 'ServiceNow Interview Questions and Answers (2026) | Admin, ITSM, Developer' },
  description:
    'Top ServiceNow interview questions and answers for freshers and experienced: admin, ITSM, scripting, business rules, client scripts, ACLs, integrations and real-time scenarios.',
  keywords: ['ServiceNow Interview Questions', 'ServiceNow Interview Questions and Answers', 'ServiceNow ITSM Interview Questions', 'ServiceNow Developer Interview Questions', 'ServiceNow Admin Interview Questions'],
  alternates: { canonical: '/servicenow-interview-questions' },
}

const groups = [
  {
    id: 'admin',
    title: 'ServiceNow Admin interview questions',
    faqs: [
      { q: 'What is an Update Set in ServiceNow?', a: 'An Update Set is a group of configuration changes captured in one instance so they can be moved to another, for example from development to test. Data records are not captured by default.' },
      { q: 'What is the difference between a UI Policy and a Data Policy?', a: 'UI Policies run on the client and control field visibility, mandatory state and read-only state on forms. Data Policies enforce mandatory and read-only rules on the server, so they also apply to imports and web services.' },
      { q: 'What is an ACL in ServiceNow?', a: 'An Access Control List rule defines who can create, read, write or delete records and fields, based on roles, conditions and scripts. Rules are evaluated from the most specific to the most generic.' },
    ],
  },
  {
    id: 'itsm',
    title: 'ServiceNow ITSM interview questions',
    faqs: [
      { q: 'What is the difference between an Incident and a Problem?', a: 'An incident is an unplanned interruption to a service that needs to be restored quickly. A problem is the underlying cause of one or more incidents, investigated to prevent recurrence.' },
      { q: 'What are the types of Change in ServiceNow?', a: 'Normal changes go through full assessment and CAB approval, Standard changes are pre-approved and low risk, and Emergency changes are expedited to resolve a critical issue.' },
      { q: 'How do SLAs work in ServiceNow?', a: 'An SLA definition sets start, pause and stop conditions and a duration with a schedule. Task SLA records track elapsed time and trigger workflow or flow notifications at breach thresholds.' },
    ],
  },
  {
    id: 'developer',
    title: 'ServiceNow Developer & scripting interview questions',
    faqs: [
      { q: 'What are the types of Business Rules?', a: 'Before, After, Async and Display. Before rules modify the record before saving, After rules act on related records, Async rules run in the background, and Display rules pass data to the client via g_scratchpad.' },
      { q: 'What is the difference between GlideRecord and GlideAjax?', a: 'GlideRecord is a server-side API for querying and updating tables. GlideAjax lets a client script call a client-callable Script Include on the server asynchronously.' },
      { q: 'What is a Script Include?', a: 'A Script Include is a reusable server-side JavaScript class or function that can be called from business rules, other script includes, flows and — when client-callable — from GlideAjax.' },
    ],
  },
]

export default function InterviewQuestionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'ServiceNow Interview Questions', href: '/servicenow-interview-questions' }]} />
      <PageHero
        eyebrow="Interview preparation · Updated October 2026"
        title={
          <>
            ServiceNow interview questions <AccentText>that actually get asked.</AccentText>
          </>
        }
        description={
          <p>
            Collected from 600+ interviews our learners attended this year. For a full list, read{' '}
            <Link href="/blog/servicenow-itsm-interview-questions-and-answers" className="font-semibold text-white underline underline-offset-4">
              ServiceNow ITSM interview questions and answers
            </Link>
            .
          </p>
        }
      />
      <nav aria-label="Question categories" className="border-b border-border bg-background">
        <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 font-mono text-xs md:px-6">
          {groups.map((g) => (
            <li key={g.id}>
              <a href={`#${g.id}`} className="block rounded-full px-3 py-1.5 hover:bg-ink hover:text-ink-foreground">
                {g.title.replace(' interview questions', '')}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {groups.map((g, i) => (
        <Section key={g.id} id={g.id} tone={i % 2 === 0 ? 'default' : 'muted'} labelledBy={`${g.id}-title`}>
          <SectionHeading id={`${g.id}-title`} eyebrow={`0${i + 1}`} title={g.title} />
          <div className="mt-10">
            <FaqList faqs={g.faqs} />
          </div>
        </Section>
      ))}
      <CtaBand title="Practise with a real ServiceNow interviewer." description="Our career track includes ten mock interviews with working ServiceNow consultants, plus written feedback after each one." />
    </>
  )
}
