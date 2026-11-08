import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Code2, MessageSquare, Settings, Workflow } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Section, SectionHeading } from '@/components/section'
import { SectionNav } from '@/components/section-nav'
import { FaqList } from '@/components/faq-list'
import { CtaBand } from '@/components/cta-band'
import { LinkButton } from '@/components/link-button'
import { TrainingHeroStrip } from '@/components/training-hero-strip'
import { additionalInterviewGroups } from '@/data/interview-additional'
import { JsonLd } from '@/components/json-ld'
import { faqSchema } from '@/lib/schema'
import { createPageMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'ServiceNow Interview Questions and Answers',
    description:
      'Practise scenario-based ServiceNow interview questions and answers across Admin, ITSM, Developer, CMDB, CSM, HRSD, GRC and Now Assist.',
    canonicalPath: '/servicenow-interview-questions',
  }),
  keywords: ['ServiceNow Interview Questions', 'ServiceNow Interview Questions and Answers', 'ServiceNow ITSM Interview Questions', 'ServiceNow Developer Interview Questions', 'ServiceNow Admin Interview Questions'],
}

const groups = [
  {
    id: 'admin',
    title: 'ServiceNow Admin interview questions',
    description: 'Practise administration scenarios covering access controls, imports, update sets and forms. Build confidence troubleshooting issues and managing platform changes.',
    faqs: [
      { q: 'A user can open an incident but cannot see a field. How would you troubleshoot access?', a: 'Impersonate the user and use security debugging to inspect the applicable field ACLs as well as record access. Check roles, conditions and scripts, then distinguish an ACL denial from a field hidden by the form layout or a UI policy.' },
      { q: 'How would you restrict access to sensitive incident fields without blocking the entire record?', a: 'Keep appropriate record-level access and configure field-level ACLs for the sensitive fields and operations. Test with representative users, including inherited roles and integrations, because field access also depends on record access.' },
      { q: 'A field must be mandatory for imports as well as form submissions. How would you enforce it?', a: 'Use a data policy for the server-side requirement and confirm that it applies to the relevant import path. Test both a form submission and a transform with missing data; a UI policy alone does not enforce the rule for imports.' },
      { q: 'Two UI policies set opposite states for the same field. How would you investigate?', a: 'Check their conditions, order, reverse-if-false settings and any scripts or client scripts affecting the field. Reproduce the issue with the same view and user, then simplify overlapping rules and retest both condition changes.' },
      { q: 'How can a field be mandatory on Incident but optional on another Task extension?', a: 'Evaluate a dictionary override on the Incident table for the inherited field, rather than changing the parent dictionary entry. Verify the supported override settings and test the behavior on both tables and relevant entry paths.' },
      { q: 'An update set preview reports a missing dependency. What should you do before committing?', a: 'Identify the missing configuration and its source update set or application dependency. Move required changes in the correct order, preview again, and resolve or explicitly assess conflicts rather than accepting them without understanding the impact.' },
      { q: 'Why might configuration be absent from an update set even though it works in development?', a: 'Check whether the change was made in the intended update set and whether its record type is captured. Also check application scope and dependencies; ordinary data and some configuration may require a separate supported migration method.' },
      { q: 'How would you release two update sets that modify the same configuration?', a: 'Review their dependencies and change sequence, test the combined result in a sub-production instance, and deploy in the agreed order. Investigate preview conflicts and verify the resulting configuration instead of assuming both sets merge safely.' },
      { q: 'A recurring user import creates duplicates. How would you diagnose it?', a: 'Inspect the coalesce fields, source values and transform logs. Check for empty or inconsistent identifiers and existing duplicates, then choose a stable matching key, clean existing data and retest updates and new inserts.' },
      { q: 'What happens when multiple fields are selected for coalesce?', a: 'The target record must match all configured coalesce field values for a match. Validate case and empty-value settings and test both matching and non-matching rows, because a non-match can create a new record.' },
      { q: 'An import must reject rows with invalid department values. Where would you check and enforce this?', a: 'Inspect staging data, reference mapping and transform results first. Validate the incoming value in the transform process and reject or ignore invalid rows according to the agreed process, while recording enough detail for correction and reprocessing.' },
      { q: 'A reference field shows the wrong name even though the stored record is correct. What would you check?', a: 'Inspect the referenced record and the display field configured on its table. Confirm the stored reference points to the intended sys_id, and check whether duplicate display values are confusing users.' },
      { q: 'A user retains a role after removal from one group. How would you investigate?', a: 'Review direct role assignments, other group memberships and roles inherited through role containment. Remove only the unintended source, then verify the effective roles after the change.' },
      { q: 'How would you prevent an assignment group from being selected when it is inactive?', a: 'Configure and test an appropriate reference qualifier on the assignment group field. If the restriction must also apply to API or import updates, add suitable server-side validation rather than relying only on the form selector.' },
      { q: 'A notification is not received after a record update. What would you check?', a: 'Verify the trigger, conditions and any event parameters, then inspect generated email records and logs. Check recipients, notification preferences, email configuration and suppression rules before concluding that the notification did not execute.' },
      { q: 'How would you prepare a sub-production instance for a production clone?', a: 'Confirm the source and target, schedule, data sensitivity, exclusions and data preservers with stakeholders. Plan for credentials and integrations to remain safe after the clone, and verify critical settings and connectivity before users resume testing.' },
      { q: 'A report count differs from a list count for the same table. How would you troubleshoot?', a: 'Compare filters, time zone and date ranges, grouping, data source and the user context. Check whether access controls or domain separation affect the records each user can see, then reproduce both counts with the same criteria.' },
      { q: 'How would you give a team access to a report without exposing restricted records?', a: 'Share the report with the appropriate audience and ensure the underlying table and field ACLs protect the data. Test as a team member and confirm that report sharing does not replace record-level authorization.' },
      { q: 'A user sees a different form from colleagues. How would you find the cause?', a: 'Compare the active view, view rules, roles and personalizations for the affected user. Check the configured form layout and UI policies in that context, then retest with impersonation before changing a shared layout.' },
      { q: 'When would you extend an existing table instead of creating a standalone table?', a: 'Extend a table when the new records genuinely share its data model and behavior, and inherited fields and processes are appropriate. Use a standalone table when that inheritance would introduce unnecessary behavior or security complexity.' },
      { q: 'A choice label was changed but an integration now fails. What would you investigate?', a: 'Compare the stored choice value with the displayed label and check what the integration sends or expects. Preserve stable stored values where possible, and coordinate any contract changes with the consuming system.' },
      { q: 'How would you handle conflicting administrative changes made in two instances?', a: 'Compare the configurations and deployment history, decide which change is authoritative with the owners, and reconcile in the development source. Move and test the agreed result through the normal release process rather than overwriting production blindly.' },
      { q: 'A user can select records in a reference field that they should not access. Is a reference qualifier enough?', a: 'No. A qualifier controls the choices presented in a reference lookup, while ACLs enforce authorization. Configure appropriate ACLs and validate server-side operations as needed, then test direct access and integrations.' },
      { q: 'How would you test a role change before deploying it?', a: 'Create a test matrix for representative users and operations, including inherited roles and expected denials. Test forms, lists, reports and integration access in a sub-production instance, and document the rollback plan.' },
      { q: 'A scheduled data load succeeds but the target table is unchanged. What would you inspect?', a: 'Check that rows reached the staging table, the intended transform ran, and field maps and conditions are correct. Review transform errors, ignored rows and coalesce matches, then test a representative row through to the target.' },
    ],
  },
  {
    id: 'itsm',
    title: 'ServiceNow ITSM interview questions',
    description: 'Explore practical scenarios across incident, problem, change, service requests and SLAs. Strengthen your approach to prioritisation, troubleshooting and service delivery decisions.',
    faqs: [
      { q: 'Several users report the same outage. How would you coordinate incidents and a problem record?', a: 'Restore service through the incident process, link related incidents as appropriate, and communicate a consistent status. Open or associate a problem for investigation of the underlying cause; track the permanent fix separately from immediate restoration.' },
      { q: 'How would you decide whether to declare a major incident?', a: 'Assess impact, urgency, affected services and the criteria in the major incident process. Escalate for the required approval or declaration, coordinate technical teams and stakeholder communications, and document decisions and recovery.' },
      { q: 'An incident is restored with a workaround but the root cause is unknown. Can it be resolved?', a: 'If service is restored and the resolution meets the agreed incident criteria, the incident may be resolved while a problem remains open for root-cause investigation. Record the workaround and links so recurring incidents can be handled consistently.' },
      { q: 'How would you distinguish a service request from an incident when a user asks for access?', a: 'If the user needs new or additional access, route it through the access request process. If previously authorized access has unexpectedly stopped working, investigate it as an incident; confirm the facts before choosing the path.' },
      { q: 'An SLA did not attach to an incident. How would you troubleshoot?', a: 'Compare the incident values and their change history with the SLA start conditions, target table and active definition. Check the configured schedule and any other applicable conditions, then reproduce the transition in a test instance.' },
      { q: 'An SLA continues running while an incident is waiting for a customer. What would you check?', a: 'Inspect the pause condition and the actual incident state and fields, including when the state changed. Confirm the organization intends that waiting state to pause the target and test the behavior against the SLA definition and schedule.' },
      { q: 'Why can two incidents created at the same time have different SLA breach times?', a: 'They may have different SLA definitions, priorities, schedules, time zones or pause periods. Compare their task SLA records and definitions, including start times and schedule configuration, before treating the difference as an error.' },
      { q: 'How would you test an SLA that uses business hours and holidays?', a: 'Create scenarios spanning an ordinary workday, outside-hours time, a weekend and a configured holiday. Check the schedule and time zone, then verify start, pause, resume, stop and expected breach times against the agreed target.' },
      { q: 'An incident priority changes after creation. What SLA behavior should you verify?', a: 'Inspect the start, stop, pause and reset conditions for both priority-based definitions. Test the transition and check task SLA records to see whether the old target stops or cancels and whether a new one attaches, according to configuration.' },
      { q: 'How would you choose between a standard, normal and emergency change?', a: 'Use an approved standard model for repeatable low-risk work that meets its criteria; use normal change for work requiring the usual assessment and authorization. Reserve emergency change for urgent cases that meet organizational criteria and require expedited handling.' },
      { q: 'An emergency fix is needed during an outage. What controls should still apply?', a: 'Follow the emergency change process, document the risk and implementation and backout plans, and obtain the required expedited authorization. Communicate the work, record the outcome and complete the required post-implementation review.' },
      { q: 'Two changes affect the same service in overlapping windows. How would you handle the conflict?', a: 'Review the affected configuration items, service dependencies and change schedules to assess actual risk. Coordinate with owners to reschedule or mitigate the conflict, record the decision and follow the configured approval process.' },
      { q: 'A change has all approvals but its implementation plan is incomplete. Should it proceed?', a: 'Not until the required readiness criteria are met. Verify the implementation, test, communication and backout plans, raise the gap with the change owner and follow the organization’s governance process before proceeding.' },
      { q: 'How would you investigate a change approval that was not generated?', a: 'Check the change model, conditions, state transition and approval configuration or flow execution. Verify the intended approver and any group membership, inspect execution details, and test the same scenario in a lower environment.' },
      { q: 'A requested item is approved but no fulfillment task appears. What would you check?', a: 'Trace the item’s configured fulfillment flow or workflow and inspect its execution, conditions and errors. Confirm that the approval outcome, variables and task-creation step meet the expected path before restarting or correcting anything.' },
      { q: 'How would you model a request that needs both software installation and manager approval?', a: 'Use a catalog item to collect the required details, then configure a fulfillment process that requests the appropriate approval and creates installation work after approval. Include rejection handling, notifications and closure criteria, and test each path.' },
      { q: 'A catalog request has several requested items. How would you track fulfillment?', a: 'Track each RITM and its associated tasks independently, including approvals and failures. Review the parent request according to the configured lifecycle, and avoid closing the overall request before required items are handled.' },
      { q: 'How would you handle a rejected catalog approval?', a: 'Follow the configured rejection path: notify the requester, document the decision and update the item and related work appropriately. Test whether outstanding tasks or approvals need cancellation and whether resubmission is supported.' },
      { q: 'How can catalog variables affect fulfillment without exposing sensitive data?', a: 'Collect only necessary information and use variables to drive approved routing or task details. Restrict access to sensitive information through appropriate platform controls, and test visibility in forms, tasks, notifications and integrations.' },
      { q: 'How would you use a known error during an incident?', a: 'Check that the symptoms and affected service match, apply an approved workaround where appropriate, and record the outcome on the incident. Link or reference the known error and problem so teams can track recurrence and the permanent fix.' },
      { q: 'What evidence would you gather before proposing a permanent fix for a recurring problem?', a: 'Review related incident trends, timelines, logs, affected configuration items and the effectiveness of workarounds. Validate the suspected cause with technical owners, then assess the fix, risk and change requirements before implementation.' },
      { q: 'A configuration item appears on an incident but the impact analysis looks wrong. What would you investigate?', a: 'Verify the selected CI, its ownership, relationships and the accuracy and freshness of the CMDB data. Confirm the analysis uses the relevant service model and dependencies, and involve CI owners before relying on the result.' },
      { q: 'How would you use an OLA to support a customer-facing SLA?', a: 'Set internal targets for contributing teams that leave sufficient time to meet the customer commitment. Align schedules, handoffs and escalation rules, then monitor both targets because meeting an OLA alone does not guarantee the SLA is met.' },
      { q: 'An incident is repeatedly reopened after resolution. What would you review?', a: 'Examine resolution notes, reopen reasons, communication and whether the fix actually addressed the reported symptoms. Look for a recurring underlying cause, improve the resolution criteria and consider problem investigation where appropriate.' },
      { q: 'How would you measure whether a knowledge article is helping incident resolution?', a: 'Combine usage and feedback with relevant outcomes such as resolution time or repeat contacts, while accounting for other factors. Review article accuracy, access and searchability with service owners and update or retire it when needed.' },
    ],
  },
  {
    id: 'developer',
    title: 'ServiceNow Developer & scripting interview questions',
    description: 'Prepare for scenarios involving Business Rules, GlideRecord, client scripts and integrations. Practise explaining secure, efficient solutions to platform challenges.',
    faqs: [
      { q: 'When would you use a before Business Rule instead of an after rule?', a: 'Use a before rule to validate or change the current record as part of its save. Use an after rule when work requires the saved record, such as updating related records; consider asynchronous processing if immediate completion is unnecessary.' },
      { q: 'A Business Rule repeatedly triggers itself. What is the likely cause and fix?', a: 'Look for current.update() or another update path that retriggers the rule. In a before rule, assign values to current without calling update(); for related updates, narrow conditions and design the operation to avoid cycles.' },
      { q: 'When is an async Business Rule unsuitable for processing a record change?', a: 'Avoid it when validation must block the save or when processing must happen immediately and in a guaranteed order. Background work can be delayed or run out of order during rapid updates, so design for the current state and test concurrency.' },
      { q: 'How would you make a server-side validation apply to forms and integrations?', a: 'Enforce it on the server, for example with an appropriate data policy or before Business Rule, and return a clear error for invalid input. Add client-side feedback for usability, but test API and import paths separately.' },
      { q: 'How would you pass server-calculated data to an onLoad client script?', a: 'For data needed when the form initially loads, a display Business Rule can populate g_scratchpad for the client script. Keep the payload small and do not expose sensitive information; use GlideAjax when data must be fetched later.' },
      { q: 'A GlideAjax callback returns after the user has changed the field again. How would you prevent a stale result?', a: 'Capture the value used in the request and compare it with the current field value in the callback before applying the response. Ignore outdated responses and handle server errors or empty results explicitly.' },
      { q: 'How would you secure a client-callable Script Include?', a: 'Expose only the necessary methods, validate every parameter and check that the caller is authorized to perform the operation and access the returned data. Avoid returning sensitive fields, and test with users who have different roles.' },
      { q: 'Why is a synchronous server call from a client script risky?', a: 'It can block the browser while waiting for the server and make the form unresponsive. Prefer asynchronous GlideAjax and place dependent logic in the callback, with clear handling for errors and incomplete responses.' },
      { q: 'How would you prevent an onChange script from running unnecessarily when a form loads?', a: 'Check the onChange parameters, including isLoading and relevant old and new values, before performing work. Do not ignore a load-time execution if the requirement explicitly needs it; test both initial load and user changes.' },
      { q: 'A client script hides a field, but an integration can still update it. Why?', a: 'Client-side visibility only affects the interface and is not an authorization boundary. Protect the field with appropriate ACLs and enforce any data constraints on the server, then test direct API access.' },
      { q: 'How would you efficiently count active incidents by assignment group?', a: 'Use a selective GlideAggregate query with a count and grouping by assignment group rather than loading every incident into a loop. Check the filter and execution context, and validate the results against a sample report.' },
      { q: 'A GlideRecord query is slow on a large table. How would you investigate?', a: 'Review query conditions, indexes, query frequency and the volume of returned records using available diagnostics. Make filters selective, retrieve only needed results and consider indexing with platform guidance; measure before and after the change.' },
      { q: 'What can go wrong when an encoded query contains an invalid field name?', a: 'The query may not filter as intended and can return an unexpectedly broad result set. Validate field names and conditions, test in a safe environment and inspect results before using the query in a bulk update or delete.' },
      { q: 'When should you use getValue rather than getDisplayValue for a reference field?', a: 'Use the stored value, typically a sys_id for a reference, when comparing or passing the record identifier. Use the display value for human-readable output; it may not be unique and can vary with display configuration.' },
      { q: 'A script updates thousands of records. How would you reduce risk before running it?', a: 'Test the query and a small sample in sub-production, estimate volume and review Business Rules, flows, notifications and audit effects. Plan batching, monitoring and recovery, and obtain approval before executing the controlled update.' },
      { q: 'What risks come with disabling workflow or automatic system fields during a bulk update?', a: 'Disabling processing or system field updates can bypass expected automation, audit information or downstream behavior. Use these options only when their effects are understood, approved and tested, with a plan to reconcile any skipped work.' },
      { q: 'How would you avoid duplicate processing when an integration retries the same request?', a: 'Use a stable external transaction identifier and an idempotent processing strategy, backed by an appropriate uniqueness control. Check for an existing result and handle concurrent retries and partial failures before returning a response.' },
      { q: 'An outbound REST call times out after the remote system may have processed it. What should happen next?', a: 'Treat the outcome as uncertain rather than assuming failure. Log a correlation identifier, check the remote result where possible and retry only with an idempotency strategy or reconciliation process that prevents duplicate actions.' },
      { q: 'How would you troubleshoot an outbound REST integration that works in development but fails in test?', a: 'Compare endpoint, authentication, certificates, network or MID Server configuration and environment-specific properties. Inspect sanitized request and response logs, test connectivity and permissions, and avoid exposing credentials in diagnostics.' },
      { q: 'How would you design a reusable Script Include for multiple Business Rules?', a: 'Keep business logic in a focused server-side API with explicit inputs and return values, validate inputs and make callers handle failures. Test it independently and verify application-scope and access requirements for each caller.' },
      { q: 'A scoped application cannot call a resource in another scope. What would you check?', a: 'Inspect the target resource’s application access settings, caller scope and any cross-scope privileges or restrictions. Grant only the required access through supported configuration and test the interaction after deployment.' },
      { q: 'How would you trigger a notification without sending email directly inside a Business Rule?', a: 'Queue an event with the relevant record and appropriate parameters, and configure a notification to respond to it. Verify event processing, recipients and email logs, and avoid putting sensitive data unnecessarily in event parameters.' },
      { q: 'A scheduled job occasionally processes the same record twice. How would you address it?', a: 'Investigate overlapping runs, retries and how records are selected and marked as processed. Design idempotent operations and use a suitable concurrency control or claim mechanism, then test overlap and failure recovery.' },
      { q: 'How would you investigate a Business Rule that does not run for an expected update?', a: 'Check the table, active state, timing, operation, conditions and execution order. Confirm that the update path runs Business Rules and inspect script logs or debugging in a test instance, including any earlier rule that changes the outcome.' },
      { q: 'How would you test a scripted REST endpoint before releasing it?', a: 'Cover successful requests, invalid payloads, authentication and authorization failures, missing records and duplicate requests. Check response codes and data exposure, inspect logs for safe diagnostics, and test integration behavior in a lower environment.' },
    ],
  },
  ...additionalInterviewGroups,
]

const navigationLabels: Record<string, string> = {
  admin: 'Admin',
  itsm: 'ITSM',
  developer: 'Developer',
  cmdb: 'CMDB',
  csm: 'CSM',
  hrsd: 'HRSD',
  grc: 'GRC',
  'now-assist': 'Now Assist',
}

export default function InterviewQuestionsPage() {
  return (
    <>
      <JsonLd data={faqSchema(groups.flatMap((group) => group.faqs))} />
      <PageHero
        eyebrow="ServiceNow interview questions · Preparation"
        breadcrumbs={[{ name: 'ServiceNow Interview Questions', href: '/servicenow-interview-questions' }]}
        title={
          <>
            ServiceNow interview <span className="font-light text-blue-300">questions and answers.</span>
          </>
        }
        description={
          <p>
            Practise {groups.reduce((total, group) => total + group.faqs.length, 0)} scenario-based ServiceNow interview questions across administration, IT service management, development and other key modules. Build confidence in troubleshooting and explaining practical decisions.
          </p>
        }
        contentClassName="pt-5 pb-6 md:pt-7 md:pb-8"
        backgroundDecoration="/images/dotted-globe.svg"
        backgroundMap="/images/dotted-world-map.svg"
        actions={
          <>
            <LinkButton href="#admin" size="lg">Explore questions <ArrowRight className="size-4" aria-hidden="true" /></LinkButton>
            <LinkButton href="/servicenow-career-training" size="lg" variant="ghostLight">Career training</LinkButton>
          </>
        }
        aside={
          <div role="region" aria-labelledby="interview-overview-title" className="relative mx-auto w-full max-w-md">
            <div className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-blue-400/15 blur-3xl" aria-hidden="true" />
            <TrainingHeroStrip mode="Interview preparation" detail="Questions & answers" icon={MessageSquare} />
            <div className="relative rounded-xl border border-white/15 bg-ink/75 p-5 shadow-2xl shadow-brand/20 backdrop-blur-sm sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-wide text-blue-200/75">Choose a topic</p>
              <h2 id="interview-overview-title" className="mt-2 text-xl font-semibold leading-tight text-white sm:text-2xl">Interview Preparation Overview</h2>
              <ul className="mt-6 text-sm text-white/75">
                {[
                  { title: 'Administration', body: 'Review platform configuration, policies and access controls.', href: '#admin', icon: Settings, iconClass: 'bg-blue-400/15 text-blue-200' },
                  { title: 'IT Service Management', body: 'Explore incident, problem, change and SLA concepts.', href: '#itsm', icon: Workflow, iconClass: 'bg-cyan-400/15 text-cyan-200' },
                  { title: 'Development & scripting', body: 'Revise business rules, scripting and platform APIs.', href: '#developer', icon: Code2, iconClass: 'bg-violet-400/15 text-violet-200' },
                ].map(({ title, body, href, icon: Icon, iconClass }) => (
                  <li key={title} className="border-b border-dotted border-white/40">
                    <Link href={href} className="flex items-start gap-3 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300">
                      <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${iconClass}`}><Icon className="size-4" aria-hidden="true" /></span>
                      <span className="min-w-0 flex-1"><strong className="block font-semibold text-white">{title}</strong><span className="mt-1 block leading-relaxed text-white/60">{body}</span></span>
                      <ArrowRight className="mt-1 size-4 shrink-0 text-blue-200" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-white/60">Also explore CMDB, CSM, HRSD, GRC and Now Assist using the section navigation below.</p>
              <Link href="/blog/servicenow-itsm-interview-questions-and-answers" className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-blue-200 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300">
                <BookOpen className="size-4" aria-hidden="true" /> Read the ITSM interview guide <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        }
      />
      <SectionNav items={groups.map((g) => ({ id: g.id, label: navigationLabels[g.id] }))} />
      {groups.map((g, i) => (
        <Section key={g.id} id={g.id} tone={i % 2 === 0 ? 'default' : 'muted'} className="scroll-mt-5" labelledBy={`${g.id}-title`}>
          <SectionHeading
            id={`${g.id}-title`}
            title={<>ServiceNow <span className="text-gradient">{g.title.replace('ServiceNow ', '')}</span></>}
            description={g.description}
            className="[&_h2]:text-2xl md:[&_h2]:text-4xl"
          />
          <div className="mt-10 [&_summary]:text-base">
            <FaqList faqs={g.faqs} twoColumns includeSchema={false} />
          </div>
        </Section>
      ))}
      <CtaBand title="Prepare for your ServiceNow interview." description="Explore career training with practical exercises, project work and mock interviews." />
    </>
  )
}
