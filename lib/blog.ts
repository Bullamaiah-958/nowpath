export type BlogSection = { heading: string; body: string[]; list?: string[]; code?: string }

export type BlogPost = {
  slug: string
  title: string
  description: string
  category: 'Fundamentals' | 'Modules' | 'Scripting' | 'Career'
  readTime: string
  date: string
  relatedCourse: string
  sections: BlogSection[]
}

export const posts: BlogPost[] = [
  {
    slug: 'what-is-servicenow',
    title: 'What Is ServiceNow? A Beginner’s Guide to the Now Platform',
    description: 'What is ServiceNow, what does it do and why do enterprises use it? A plain-English introduction for beginners starting a ServiceNow career.',
    category: 'Fundamentals',
    readTime: '6 min read',
    date: '2026-09-02',
    relatedCourse: 'servicenow-admin-training',
    sections: [
      { heading: 'ServiceNow in one sentence', body: ['ServiceNow is a cloud platform that helps organisations digitise and automate workflows — IT support, customer service, HR requests, security operations and more — on a single data model.'] },
      { heading: 'What ServiceNow is used for', body: ['Enterprises use ServiceNow to replace email, spreadsheets and disconnected tools with structured, trackable workflows.'], list: ['IT Service Management (ITSM)', 'Customer Service Management (CSM)', 'HR Service Delivery (HRSD)', 'Governance, Risk and Compliance (GRC)', 'IT Operations Management (ITOM)', 'Custom applications built on App Engine'] },
      { heading: 'Why ServiceNow skills are in demand', body: ['Most Fortune 500 companies run ServiceNow, and global capability centres in Hyderabad hire ServiceNow admins, developers and consultants every quarter. The platform releases twice a year, so trained professionals stay in demand.'] },
      { heading: 'How to get started', body: ['Begin with ServiceNow Admin Training to learn the platform, then specialise in a module such as ITSM or move into development with ServiceNow Scripting Training.'] },
    ],
  },
  {
    slug: 'what-is-servicenow-itsm',
    title: 'What Is ServiceNow ITSM? Incident, Problem and Change Explained',
    description: 'Understand ServiceNow ITSM — Incident, Problem, Change, Request and CMDB — and why it is the most popular starting module for ServiceNow careers.',
    category: 'Modules',
    readTime: '7 min read',
    date: '2026-08-26',
    relatedCourse: 'servicenow-itsm-training',
    sections: [
      { heading: 'ITSM in plain English', body: ['IT Service Management is how an organisation delivers and supports IT services for its employees. ServiceNow ITSM implements ITIL practices as configurable workflows.'] },
      { heading: 'Core ITSM processes', body: ['Each process has its own table, lifecycle and SLAs on the platform.'], list: ['Incident – restore service quickly', 'Problem – find and remove root causes', 'Change – deploy safely with approvals', 'Request – fulfil standard service requests', 'Knowledge – share solutions', 'CMDB – track configuration items'] },
      { heading: 'Who works on ITSM', body: ['ITSM consultants, admins and developers configure these processes. Because nearly every ServiceNow customer starts with ITSM, it offers the widest set of job openings.'] },
    ],
  },
  {
    slug: 'what-is-servicenow-csm',
    title: 'What Is ServiceNow CSM? Customer Service Management Explained',
    description: 'ServiceNow CSM connects customer service with operations. Learn the key concepts: accounts, cases, entitlements and the customer portal.',
    category: 'Modules',
    readTime: '5 min read',
    date: '2026-08-19',
    relatedCourse: 'servicenow-csm-training',
    sections: [
      { heading: 'What CSM does', body: ['ServiceNow Customer Service Management helps companies resolve customer issues by connecting front-line agents with the teams that own the fix — engineering, operations or field service.'] },
      { heading: 'Key CSM concepts', body: ['Understanding the data model is the first step in any CSM implementation.'], list: ['Accounts, contacts and consumers', 'Cases and case types', 'Entitlements and service contracts', 'Customer Service Portal and omnichannel'] },
      { heading: 'CSM careers', body: ['CSM consultants are valued for combining CRM thinking with ServiceNow skills. Many ITSM professionals add CSM to broaden their profile.'] },
    ],
  },
  {
    slug: 'what-is-servicenow-hrsd',
    title: 'What Is ServiceNow HRSD? HR Service Delivery for Beginners',
    description: 'ServiceNow HRSD explained: HR cases, lifecycle events, Employee Center and why HR Service Delivery skills are growing fast.',
    category: 'Modules',
    readTime: '5 min read',
    date: '2026-08-12',
    relatedCourse: 'servicenow-hrsd-training',
    sections: [
      { heading: 'HRSD at a glance', body: ['ServiceNow HR Service Delivery gives employees one place to ask HR questions, raise requests and complete journeys such as onboarding — while keeping sensitive HR data secure.'] },
      { heading: 'Core HRSD capabilities', body: ['HRSD is delivered as scoped applications with strict role-based access.'], list: ['HR case and knowledge management', 'Lifecycle events (onboarding, offboarding, leave)', 'Employee Center', 'HR document templates'] },
      { heading: 'Who should learn HRSD', body: ['HR professionals with process knowledge and ServiceNow admins looking for a specialisation both do well in HRSD roles.'] },
    ],
  },
  {
    slug: 'what-is-servicenow-grc',
    title: 'What Is ServiceNow GRC? Governance, Risk and Compliance Explained',
    description: 'Learn what ServiceNow GRC (Integrated Risk Management) does — policies, controls, risk, audit and vendor risk — and why it pays well.',
    category: 'Modules',
    readTime: '6 min read',
    date: '2026-08-05',
    relatedCourse: 'servicenow-grc-training',
    sections: [
      { heading: 'GRC on ServiceNow', body: ['ServiceNow GRC, now branded Integrated Risk Management (IRM), turns policies, risks and controls into continuous workflows instead of yearly spreadsheet exercises.'] },
      { heading: 'Main GRC applications', body: ['Each application shares the same entity and control framework.'], list: ['Policy and Compliance Management', 'Risk Management', 'Audit Management', 'Vendor Risk Management'] },
      { heading: 'Why GRC skills pay well', body: ['GRC projects combine regulatory knowledge with platform skills, and fewer professionals have both. That scarcity makes GRC one of the higher-paid ServiceNow specialisations.'] },
    ],
  },
  {
    slug: 'how-to-learn-servicenow',
    title: 'How to Learn ServiceNow: A Practical Step-by-Step Plan',
    description: 'How to learn ServiceNow from scratch — free developer instance, admin basics, scripting, a module specialisation and certifications.',
    category: 'Career',
    readTime: '7 min read',
    date: '2026-07-29',
    relatedCourse: 'servicenow-admin-training',
    sections: [
      { heading: 'Step 1: Get a personal developer instance', body: ['Sign up on the ServiceNow Developer site for a free Personal Developer Instance (PDI). Everything you learn should be practised there.'] },
      { heading: 'Step 2: Learn administration', body: ['Users, groups, roles, tables, forms, catalog and Flow Designer are the foundation. This is exactly what the CSA certification covers.'] },
      { heading: 'Step 3: Learn scripting', body: ['Client Scripts, Business Rules, Script Includes and GlideRecord unlock developer roles.'] },
      { heading: 'Step 4: Specialise and certify', body: ['Pick a module — ITSM, CSM, HRSD or GRC — build a project, and earn the matching CIS certification.'] },
    ],
  },
  {
    slug: 'servicenow-learning-path-for-beginners',
    title: 'ServiceNow Learning Path for Beginners (2026)',
    description: 'The recommended ServiceNow learning path for beginners and freshers: Admin → Scripting → Module → Certification → Real-time project.',
    category: 'Career',
    readTime: '5 min read',
    date: '2026-07-22',
    relatedCourse: 'servicenow-admin-training',
    sections: [
      { heading: 'The recommended order', body: ['Follow this sequence to avoid gaps that interviewers quickly spot.'], list: ['ServiceNow Admin Training (CSA)', 'ServiceNow Scripting from Basic to Advanced', 'One module: ITSM, CSM, HRSD or GRC', 'Certification: CAD or CIS', 'Real-time project and interview preparation'] },
      { heading: 'How long it takes', body: ['Most freshers complete this path in four to six months alongside college or a job, studying ten to twelve hours a week.'] },
    ],
  },
  {
    slug: 'servicenow-admin-vs-developer',
    title: 'ServiceNow Admin vs Developer: Which Career Should You Choose?',
    description: 'ServiceNow Admin vs Developer — responsibilities, skills, certifications and career growth compared to help you choose your path.',
    category: 'Career',
    readTime: '6 min read',
    date: '2026-07-15',
    relatedCourse: 'servicenow-developer-training',
    sections: [
      { heading: 'What an admin does', body: ['Admins configure the platform without heavy coding: users and access, forms and lists, catalog items, flows, notifications, reports and upgrades.'] },
      { heading: 'What a developer does', body: ['Developers write Client Scripts, Business Rules and Script Includes, build scoped applications and integrations, and own complex automation.'] },
      { heading: 'Which should you choose?', body: ['Administration covers platform setup and configuration, while development focuses more on scripting and building applications. Compare the topics in each course and choose the learning path that best fits your interests.'] },
    ],
  },
  {
    slug: 'servicenow-scripting-tutorial',
    title: 'ServiceNow Scripting Tutorial: GlideRecord Basics',
    description: 'A hands-on ServiceNow scripting tutorial covering GlideRecord queries, inserts and updates with copy-paste examples.',
    category: 'Scripting',
    readTime: '8 min read',
    date: '2026-07-08',
    relatedCourse: 'servicenow-scripting-training',
    sections: [
      { heading: 'What is GlideRecord?', body: ['GlideRecord is the server-side API used to query and modify records in any ServiceNow table. It is the single most important API in ServiceNow scripting.'] },
      { heading: 'Querying records', body: ['This query returns all active priority-1 incidents.'], code: "var gr = new GlideRecord('incident');\ngr.addQuery('active', true);\ngr.addQuery('priority', 1);\ngr.query();\nwhile (gr.next()) {\n  gs.info(gr.getValue('number') + ' - ' + gr.getValue('short_description'));\n}" },
      { heading: 'Inserting and updating', body: ['Use initialize() and insert() to create records, and update() after changing fields.'], code: "var inc = new GlideRecord('incident');\ninc.initialize();\ninc.setValue('short_description', 'Email not syncing');\ninc.setValue('urgency', 2);\nvar sysId = inc.insert();" },
      { heading: 'Best practices', body: ['Always use setLimit() when you need one record, prefer GlideAggregate for counts, and avoid queries inside loops.'] },
    ],
  },
  {
    slug: 'servicenow-business-rules-examples',
    title: 'ServiceNow Business Rules Examples (Before, After, Async, Display)',
    description: 'Practical ServiceNow Business Rules examples for before, after, async and display rules — with when to use each.',
    category: 'Scripting',
    readTime: '7 min read',
    date: '2026-07-01',
    relatedCourse: 'servicenow-scripting-training',
    sections: [
      { heading: 'Before Business Rule: set a field', body: ['Before rules run before the database write — ideal for validating or setting values on the current record.'], code: "(function executeRule(current, previous) {\n  if (current.priority == 1 && current.assignment_group.nil()) {\n    current.assignment_group.setDisplayValue('Major Incident Team');\n  }\n})(current, previous);" },
      { heading: 'After Business Rule: update related records', body: ['After rules run once the record is saved, making them suitable for updating other tables.'] },
      { heading: 'Async Business Rule: call an integration', body: ['Async rules run in the background, so slow work such as REST calls does not delay the user.'] },
      { heading: 'Display Business Rule: pass data to the client', body: ['Display rules populate g_scratchpad so Client Scripts can use server data without extra calls.'], code: "(function executeRule(current, previous) {\n  g_scratchpad.isVip = current.caller_id.vip == true;\n})(current, previous);" },
    ],
  },
  {
    slug: 'servicenow-client-scripts-examples',
    title: 'ServiceNow Client Scripts Examples: onLoad, onChange, onSubmit',
    description: 'ServiceNow Client Scripts examples using g_form for onLoad, onChange and onSubmit, plus when to use UI Policies instead.',
    category: 'Scripting',
    readTime: '6 min read',
    date: '2026-06-24',
    relatedCourse: 'servicenow-scripting-training',
    sections: [
      { heading: 'onLoad: show a message', body: ['Runs when the form loads.'], code: "function onLoad() {\n  if (g_scratchpad.isVip) {\n    g_form.addInfoMessage('VIP caller — handle with priority.');\n  }\n}" },
      { heading: 'onChange: react to a field', body: ['Runs when a specific field value changes.'], code: "function onChange(control, oldValue, newValue, isLoading) {\n  if (isLoading || newValue === '') return;\n  g_form.setMandatory('close_notes', newValue == '6');\n}" },
      { heading: 'onSubmit: validate before save', body: ['Return false to stop the submission.'] },
      { heading: 'Client Script or UI Policy?', body: ['Use UI Policies for simple mandatory, read-only and visibility rules. Use Client Scripts when you need logic, server calls via GlideAjax or messages.'] },
    ],
  },
  {
    slug: 'servicenow-itsm-interview-questions-and-answers',
    title: 'ServiceNow ITSM Interview Questions and Answers',
    description: 'Top ServiceNow ITSM interview questions and answers on Incident, Problem, Change, SLA and CMDB for freshers and experienced professionals.',
    category: 'Career',
    readTime: '9 min read',
    date: '2026-06-17',
    relatedCourse: 'servicenow-itsm-training',
    sections: [
      { heading: 'What is the difference between an incident and a problem?', body: ['An incident is an unplanned interruption to a service. A problem is the underlying cause of one or more incidents. Incident management restores service; problem management removes the cause.'] },
      { heading: 'What are the change types in ServiceNow?', body: ['Normal (requires CAB approval), Standard (pre-approved and low risk) and Emergency (urgent, with expedited approval).'] },
      { heading: 'How do SLAs work?', body: ['SLA definitions specify start, pause and stop conditions plus a duration and schedule. Task SLA records track progress and trigger breach notifications.'] },
      { heading: 'What is the CMDB?', body: ['The Configuration Management Database stores configuration items and their relationships so teams can understand impact during incidents and changes.'] },
    ],
  },
  {
    slug: 'servicenow-certification-guide',
    title: 'ServiceNow Certification Guide: CSA, CAD and CIS Explained',
    description: 'Complete ServiceNow certification guide — CSA, CAD and CIS exams, the order to take them and how to prepare.',
    category: 'Career',
    readTime: '7 min read',
    date: '2026-06-10',
    relatedCourse: 'servicenow-admin-training',
    sections: [
      { heading: 'The core certifications', body: ['Most careers start with these.'], list: ['CSA – Certified System Administrator', 'CAD – Certified Application Developer', 'CIS – Certified Implementation Specialist (ITSM, CSM, HR, Risk & Compliance, Discovery and more)'] },
      { heading: 'Recommended order', body: ['CSA first, then CAD for developers or a CIS for module consultants. Most CIS exams list CSA as a prerequisite.'] },
      { heading: 'How to prepare', body: ['Practise every topic on a developer instance, follow the official exam blueprint and take timed mock tests in the final two weeks.'] },
    ],
  },
  {
    slug: 'servicenow-real-time-scenarios',
    title: 'ServiceNow Real-Time Scenarios Asked in Interviews',
    description: 'Real-time ServiceNow scenarios with solutions — the scenario-based questions interviewers use to test practical experience.',
    category: 'Career',
    readTime: '8 min read',
    date: '2026-06-03',
    relatedCourse: 'servicenow-developer-training',
    sections: [
      { heading: 'Auto-assign incidents by location', body: ['Use assignment rules for simple cases. For complex logic, call a Script Include from a before Business Rule so the logic is reusable and testable.'] },
      { heading: 'Prevent closure without notes', body: ['Use a UI Policy to make close notes mandatory when state is Resolved, backed by a data policy so the rule also applies to imports and APIs.'] },
      { heading: 'Populate caller details on a catalog form', body: ['Use a Catalog Client Script with GlideAjax calling a client-callable Script Include that returns the user’s department and manager.'] },
    ],
  },
  {
    slug: 'servicenow-projects-for-beginners',
    title: 'ServiceNow Projects for Beginners: 6 Portfolio Ideas',
    description: 'Six ServiceNow projects for beginners you can build on a free developer instance to strengthen your resume.',
    category: 'Career',
    readTime: '5 min read',
    date: '2026-05-27',
    relatedCourse: 'servicenow-admin-training',
    sections: [
      { heading: 'Project ideas', body: ['Each can be built on a free Personal Developer Instance in one or two weekends.'], list: ['Laptop request catalog item with approvals', 'Visitor management scoped app', 'Incident auto-assignment with a Script Include', 'Knowledge base with feedback workflow', 'Simple REST integration with a public API', 'Onboarding flow in Flow Designer'] },
      { heading: 'How to present them', body: ['Document the problem, your design, screenshots and the scripts you wrote. Interviewers value a clear explanation more than the size of the project.'] },
    ],
  },
]

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug)
}
