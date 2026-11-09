import { Database, GraduationCap, Headset, ShieldCheck, UserCog, Workflow, type LucideIcon } from 'lucide-react'

export type CourseLandingContent = {
  idPrefix: string
  areaLabel: string
  heroEyebrow: string
  heroTitle: string
  heroTitleAccent: string
  heroLead: string
  heroChecks: string[]
  heroBackgroundImage?: string
  solidHeroPanel?: boolean
  panel: {
    ariaLabel: string
    title: string
    footnote: string
    items: { title: string; description: string; record: string; status: string; tone: string }[]
  }
  stats: {
    modulesDetail: string
    projectsDetail: string
    certValue: string
    certLabel: string
    certDetail: string
    stackCertValue?: boolean
  }
  syllabus: { lead: string; headingPlain: string; headingAccent: string; intro: string }
  trainingModes?: { onlineDescription: string; classroomDescription: string }
  trainingModeImages?: {
    online: { src: string; alt: string }
    classroom: { src: string; alt: string }
  }
  hideTrainingModeIcons?: boolean
  audience: {
    headingPlain: string
    headingAccent: string
    intro: string
    cardPadding?: string
    cardFit?: boolean
    cards: { title: string; body: string; icon: LucideIcon }[]
  }
}

export const itsmLanding: CourseLandingContent = {
  idPrefix: 'itsm',
  areaLabel: 'ITSM',
  heroEyebrow: 'ServiceNow IT Service Management · Online & Hyderabad',
  heroTitle: 'ServiceNow ITSM Training',
  heroTitleAccent: 'in Hyderabad',
  heroLead:
    'Learn how Incident, Problem, Change and Request workflows connect across ServiceNow IT Service Management. Build your foundation with platform concepts, guided configuration exercises and a syllabus that also covers Knowledge, CMDB, service levels and reporting.',
  heroChecks: ['Platform foundations included', 'Certification topic review', 'Online and classroom options'],
  panel: {
    ariaLabel: 'ITSM workflow overview',
    title: 'The ITSM workflow map',
    footnote: 'Illustrative workflow view. Extend it with Service Catalog, Knowledge, CMDB, SLAs and reports.',
    items: [
      { title: 'Incident', description: 'Restore service and keep work moving.', record: 'INC', status: 'In progress', tone: 'bg-amber-400/15 text-amber-200' },
      { title: 'Problem', description: 'Investigate causes and document workarounds.', record: 'PRB', status: 'Root cause', tone: 'bg-violet-400/15 text-violet-200' },
      { title: 'Change', description: 'Plan changes with approvals and risk in view.', record: 'CHG', status: 'Awaiting approval', tone: 'bg-blue-400/15 text-blue-200' },
      { title: 'Request', description: 'Fulfil common needs through the service catalog.', record: 'REQ', status: 'Fulfilment', tone: 'bg-emerald-400/15 text-emerald-200' },
      { title: 'Service Catalog', description: 'Build catalog items with variables, approvals and tasks.', record: 'CAT', status: 'Published', tone: 'bg-cyan-400/15 text-cyan-200' },
    ],
  },
  stats: {
    modulesDetail: 'ITIL 4 foundations to reporting',
    projectsDetail: 'Flow Designer, Scoped application and Catalog',
    certValue: 'CIS',
    certLabel: 'ITSM topic review',
    certDetail: 'Certification training in the syllabus',
  },
  syllabus: {
    lead: '01 · Course syllabus',
    headingPlain: 'Follow the ITSM lifecycle,',
    headingAccent: 'from foundations to reporting.',
    intro: 'Move from platform navigation and ITIL practices into the workflows teams use to support and improve IT services.',
  },
  audience: {
    headingPlain: 'Start from your experience',
    headingAccent: 'and build from there.',
    intro: 'The foundations module introduces the platform before the ITSM workflows.',
    cardPadding: 'px-5 py-3 sm:px-6 sm:py-4',
    cardFit: true,
    cards: [
      { title: 'Freshers and graduates', body: 'Start with IT service management foundations and learn how ServiceNow supports common service workflows.', icon: GraduationCap },
      { title: 'IT support professionals', body: 'Connect service desk experience to incident, problem, change, and request workflows on the platform.', icon: Headset },
      { title: 'ITIL practitioners', body: 'Map ITIL 4 practices to how service management processes and workflows are configured and used in ServiceNow.', icon: Workflow },
      { title: 'ServiceNow administrators', body: 'Build ITSM knowledge by connecting platform administration experience with service management workflows.', icon: UserCog },
    ],
  },
}

export const adminLanding: CourseLandingContent = {
  idPrefix: 'admin',
  areaLabel: 'Admin',
  heroEyebrow: 'ServiceNow platform administration · Online & Hyderabad',
  heroTitle: 'ServiceNow Admin Training',
  heroTitleAccent: 'in Hyderabad',
  heroLead:
    'Build a foundation in ServiceNow system administration, from users, groups and roles to tables, forms, access controls, imports and update sets. The course outline also covers SLAs, notifications, reports, Service Catalog and workflow automation.',
  heroChecks: ['Platform foundations included', 'Administration exercises in the syllabus', 'Online and classroom options'],
  panel: {
    ariaLabel: 'ServiceNow administration workflow overview',
    title: 'The admin configuration path',
    footnote: 'Illustrative administration workflow. Review the syllabus for module topics and hands-on exercises.',
    items: [
      { title: 'Users and roles', description: 'Organize users, groups and role access.', record: 'USR', status: 'Configure', tone: 'bg-blue-400/15 text-blue-200' },
      { title: 'Tables and forms', description: 'Shape records, form views and dictionary entries.', record: 'TBL', status: 'Structure', tone: 'bg-violet-400/15 text-violet-200' },
      { title: 'Access control', description: 'Review table and field permissions with ACLs.', record: 'ACL', status: 'Protect', tone: 'bg-amber-400/15 text-amber-200' },
      { title: 'Imports and updates', description: 'Transform imported data and manage update sets.', record: 'IMP', status: 'Maintain', tone: 'bg-emerald-400/15 text-emerald-200' },
      { title: 'Catalog and flows', description: 'Connect catalog requests with workflow automation.', record: 'CAT', status: 'Automate', tone: 'bg-cyan-400/15 text-cyan-200' },
    ],
  },
  stats: {
    modulesDetail: 'Foundations through catalog automation',
    projectsDetail: 'Configuration labs and catalog capstone',
    certValue: 'CSA',
    certLabel: 'Certification scope',
    certDetail: 'Ask us about exam preparation.',
  },
  syllabus: {
    lead: '01 · Course syllabus',
    headingPlain: 'Build your admin foundation,',
    headingAccent: 'from navigation to automation.',
    intro: 'Explore the course outline for platform setup, users and access, data management, service operations and catalog workflows.',
  },
  trainingModes: {
    onlineDescription:
      'Join live ServiceNow Admin online sessions from anywhere. Review course topics across users, roles, tables, access controls, and update sets. Ask about the current timetable and availability.',
    classroomDescription:
      'Explore ServiceNow Admin classroom training in Hyderabad. Review course topics across users, roles, tables, access controls, and update sets. Ask about the current schedule and availability.',
  },
  trainingModeImages: {
    online: {
      src: 'https://www.servicenow.com/content/dam/servicenow-assets/public/en-us/images/ds-users/tc-benefit-validation-of-skills.sm.png',
      alt: 'ServiceNow training image illustrating validation of skills',
    },
    classroom: {
      src: '/images/classroom.png',
      alt: 'Learners attending a ServiceNow classroom session',
    },
  },
  hideTrainingModeIcons: true,
  audience: {
    headingPlain: 'Start with the platform',
    headingAccent: 'and build admin skills step by step.',
    intro: 'The supplied outline begins with ServiceNow foundations before moving into configuration, access and automation topics.',
    cardPadding: 'px-5 py-3 sm:px-6 sm:py-4',
    cardFit: true,
    cards: [
      { title: 'New ServiceNow learners', body: 'Start with platform concepts and navigation, then explore core admin tasks and how users, roles, and data fit together.', icon: GraduationCap },
      { title: 'IT support professionals', body: 'Build familiarity with users, service operations, reports, and workflow configuration for everyday service delivery.', icon: Headset },
      { title: 'Platform users', body: 'Understand how tables, forms, roles, and access controls shape ServiceNow records and how teams manage platform data.', icon: Database },
      { title: 'Aspiring administrators', body: 'Review core configuration, data imports, update sets, and catalog automation used to support consistent admin operations.', icon: ShieldCheck },
    ],
  },
}

export const developerLanding: CourseLandingContent = {
  idPrefix: 'developer',
  areaLabel: 'Developer',
  heroEyebrow: 'ServiceNow application development · Online & Hyderabad',
  heroTitle: 'ServiceNow Developer Training',
  heroTitleAccent: 'in Hyderabad',
  heroLead:
    'Explore application development on ServiceNow, from JavaScript and client-side scripting to GlideRecord, Business Rules, Script Includes and integrations. The course outline also covers Service Catalog workflows, IntegrationHub, UI Builder and Now Assist topics.',
  heroChecks: ['JavaScript and platform APIs', 'Scripting and workflow exercises', 'Online and classroom options'],
  heroBackgroundImage: '/images/developer-hero-banner.jpg',
  solidHeroPanel: true,
  panel: {
    ariaLabel: 'ServiceNow developer workflow overview',
    title: 'The application development path',
    footnote: 'Illustrative development workflow. Review the syllabus for module topics and listed exercises.',
    items: [
      { title: 'JavaScript', description: 'Build a foundation in functions, arrays, objects and classes.', record: 'JS', status: 'Foundations', tone: 'bg-amber-400/15 text-amber-200' },
      { title: 'Client scripts', description: 'Use form events and client-side platform APIs.', record: 'CLI', status: 'Client side', tone: 'bg-violet-400/15 text-violet-200' },
      { title: 'Server scripts', description: 'Work with GlideRecord and server-side APIs.', record: 'SRV', status: 'Server side', tone: 'bg-blue-400/15 text-blue-200' },
      { title: 'Business Rules', description: 'Organize reusable rules and Script Includes.', record: 'BR', status: 'Automation', tone: 'bg-emerald-400/15 text-emerald-200' },
      { title: 'Integrations and UI', description: 'Explore REST, IntegrationHub and UI Builder.', record: 'API', status: 'Extend', tone: 'bg-cyan-400/15 text-cyan-200' },
    ],
  },
  stats: {
    modulesDetail: 'JavaScript through Now Assist topics',
    projectsDetail: 'Scripting, catalog and integration exercises',
    certValue: 'JS',
    certLabel: 'Development focus',
    certDetail: 'Scripts, apps and integrations',
  },
  syllabus: {
    lead: '01 · Course syllabus',
    headingPlain: 'Develop across the platform,',
    headingAccent: 'from JavaScript to integrations.',
    intro: 'Review the course outline for client and server scripting, platform automation, catalog workflows, integrations and UI Builder.',
  },
  trainingModes: {
    onlineDescription:
      'Explore ServiceNow Developer online training from anywhere. Review JavaScript, scripting, APIs, integrations, and UI Builder topics. Ask about the current timetable and availability.',
    classroomDescription:
      'Explore ServiceNow Developer classroom training in Hyderabad. Review JavaScript, scripting, APIs, integrations, and UI Builder topics. Ask about the current schedule and availability.',
  },
  trainingModeImages: {
    online: {
      src: '/images/journey-practice.jpg',
      alt: 'Learner practicing application development on a laptop',
    },
    classroom: {
      src: '/images/classroom.png',
      alt: 'Learners attending a ServiceNow application development classroom session',
    },
  },
  audience: {
    headingPlain: 'Start with your code',
    headingAccent: 'and build platform skills.',
    intro: 'The syllabus starts with JavaScript foundations before moving into ServiceNow client-side, server-side and integration topics.',
    cardPadding: 'px-5 py-3 sm:px-6 sm:py-4',
    cardFit: true,
    cards: [
      { title: 'JavaScript learners', body: 'Build from JavaScript basics into platform APIs, scripting patterns, and ServiceNow development concepts.', icon: GraduationCap },
      { title: 'ServiceNow users', body: 'Explore how client scripts, Business Rules, and Script Includes extend platform behavior.', icon: UserCog },
      { title: 'Platform administrators', body: 'Connect configuration experience to UI policies, workflow automation, and application development.', icon: ShieldCheck },
      { title: 'Developers and integrators', body: 'Review server-side APIs, REST patterns, IntegrationHub, and UI Builder topics in one curriculum.', icon: Workflow },
    ],
  },
}

export const scriptingLanding: CourseLandingContent = {
  idPrefix: 'scripting',
  areaLabel: 'Scripting',
  heroEyebrow: 'ServiceNow platform scripting · Online & Hyderabad',
  heroTitle: 'ServiceNow Scripting Training',
  heroTitleAccent: 'in Hyderabad',
  heroLead:
    'Build scripting skills from JavaScript foundations to ServiceNow Client Scripts, GlideRecord, Business Rules, Script Includes and GlideAjax. The course outline also covers Email Scripts, scheduled jobs and UI Actions.',
  heroChecks: ['JavaScript to platform APIs', 'Client- and server-side scripting', 'Online and classroom options'],
  panel: {
    ariaLabel: 'ServiceNow scripting learning path',
    title: 'From JavaScript to platform scripts',
    footnote: 'Illustrative scripting path. Review the syllabus for module topics and listed exercises.',
    items: [
      { title: 'JavaScript', description: 'Start with functions, classes, conditions and arrays.', record: 'JS', status: 'Foundations', tone: 'bg-amber-400/15 text-amber-200' },
      { title: 'Client Scripts', description: 'Use form events and client-side APIs.', record: 'CLI', status: 'Client side', tone: 'bg-violet-400/15 text-violet-200' },
      { title: 'GlideRecord', description: 'Explore record queries and server-side APIs.', record: 'GR', status: 'Server side', tone: 'bg-blue-400/15 text-blue-200' },
      { title: 'Business Rules', description: 'Understand timing, triggers and reusable logic.', record: 'BR', status: 'Automation', tone: 'bg-emerald-400/15 text-emerald-200' },
      { title: 'Script Includes', description: 'Review reusable scripts and GlideAjax calls.', record: 'SI', status: 'Reusable', tone: 'bg-cyan-400/15 text-cyan-200' },
    ],
  },
  stats: {
    modulesDetail: 'JavaScript foundations through scheduled jobs',
    projectsDetail: 'Client, server and automation exercises',
    certValue: 'API',
    certLabel: 'Scripting focus',
    certDetail: 'Platform APIs and reusable logic',
  },
  syllabus: {
    lead: '01 · Course syllabus',
    headingPlain: 'Build your scripting foundation,',
    headingAccent: 'from JavaScript to GlideAjax.',
    intro: 'Follow the scripting topics from JavaScript basics into client-side and server-side APIs, Business Rules and reusable scripts.',
  },
  trainingModes: {
    onlineDescription:
      'Explore ServiceNow Scripting Online Training from anywhere. Review JavaScript, Client Scripts, GlideRecord and server-side scripting topics. Ask about the current timetable and availability.',
    classroomDescription:
      'Explore ServiceNow Scripting Training in Hyderabad. Review JavaScript, Client Scripts, GlideRecord and server-side scripting topics. Ask about the current schedule and availability.',
  },
  audience: {
    headingPlain: 'Start with the fundamentals',
    headingAccent: 'and build scripting skills.',
    intro: 'The course outline begins with JavaScript foundations before introducing ServiceNow client-side and server-side scripting.',
    cardPadding: 'px-5 py-3 sm:px-6 sm:py-4',
    cardFit: true,
    cards: [
      { title: 'JavaScript learners', body: 'Start with core JavaScript topics before moving into ServiceNow APIs and script types.', icon: GraduationCap },
      { title: 'ServiceNow users', body: 'Understand how Client Scripts and form APIs can support platform workflows.', icon: UserCog },
      { title: 'Platform administrators', body: 'Explore scripting concepts, Business Rules and server-side APIs alongside platform configuration.', icon: ShieldCheck },
      { title: 'Developers', body: 'Review GlideRecord, Script Includes, GlideAjax and other scripting topics in the syllabus.', icon: Workflow },
    ],
  },
}

export const itomLanding: CourseLandingContent = {
  idPrefix: 'itom',
  areaLabel: 'ITOM',
  heroEyebrow: 'ServiceNow IT Operations Management · Online & Hyderabad',
  heroTitle: 'ServiceNow ITOM Training',
  heroTitleAccent: 'in Hyderabad',
  heroLead:
    'Explore ITOM architecture, Discovery, Service Mapping, Event Management, cloud discovery and automation. The proposed outline includes CMDB, CSDM, MID Servers, monitoring integrations and hands-on lab topics.',
  heroChecks: ['Discovery and Service Mapping', 'Event Management and cloud topics', 'Online and classroom options'],
  panel: {
    ariaLabel: 'ServiceNow ITOM learning path',
    title: 'From infrastructure to service health',
    footnote: 'Illustrative ITOM learning path. Confirm syllabus, environment and batch activities with the training team.',
    items: [
      { title: 'CMDB and MID Server', description: 'Explore service data, infrastructure access and connectivity.', record: 'MID', status: 'Connect', tone: 'bg-amber-400/15 text-amber-200' },
      { title: 'Discovery', description: 'Review scans, credentials, schedules and patterns.', record: 'DISC', status: 'Discover', tone: 'bg-violet-400/15 text-violet-200' },
      { title: 'Service Mapping', description: 'Map application entry points and service topology.', record: 'MAP', status: 'Map', tone: 'bg-blue-400/15 text-blue-200' },
      { title: 'Event Management', description: 'Normalize events and correlate service alerts.', record: 'EVT', status: 'Monitor', tone: 'bg-emerald-400/15 text-emerald-200' },
      { title: 'Cloud and automation', description: 'Review cloud discovery and remediation concepts.', record: 'AUTO', status: 'Automate', tone: 'bg-cyan-400/15 text-cyan-200' },
    ],
  },
  stats: {
    modulesDetail: 'Foundations through project and exam topics',
    projectsDetail: 'Discovery, mapping and event exercises',
    certValue: 'CIS',
    certLabel: 'Exam topics listed',
    certDetail: 'Formal preparation to confirm',
  },
  syllabus: {
    lead: '01 · Course syllabus',
    headingPlain: 'Connect infrastructure to services,',
    headingAccent: 'events and automation.',
    intro: 'Explore the proposed outline across ITOM architecture, Discovery, Service Mapping, Event Management, cloud governance and hands-on projects.',
  },
  trainingModes: {
    onlineDescription:
      'Explore ServiceNow ITOM online training in Hyderabad. Ask the team to confirm the current timetable, trainer details, lab environment and online access for your batch.',
    classroomDescription:
      'Explore ServiceNow ITOM classroom training in Hyderabad. Confirm the current venue, schedule and whether sessions are available in Ameerpet, HITEC City or Gachibowli.',
  },
  audience: {
    headingPlain: 'Start with service data',
    headingAccent: 'and build ITOM visibility.',
    intro: 'The proposed course outline begins with ITOM architecture, CMDB, CSDM and MID Servers before moving to Discovery, Service Mapping and ITOM Health.',
    cardPadding: 'px-5 py-3 sm:px-6 sm:py-4',
    cardFit: true,
    cards: [
      { title: 'IT operations professionals', body: 'Explore Discovery, monitoring events and service health in the context of IT operations.', icon: Headset },
      { title: 'ServiceNow administrators', body: 'Build familiarity with CMDB, CSDM, MID Servers, credentials and Discovery configuration.', icon: UserCog },
      { title: 'Infrastructure learners', body: 'Review infrastructure discovery, cloud resources, application topology and service relationships.', icon: Database },
      { title: 'Technical platform learners', body: 'Explore event integrations, alert correlation, automation and IntegrationHub topics.', icon: Workflow },
    ],
  },
}

export const cmdbLanding: CourseLandingContent = {
  idPrefix: 'cmdb',
  areaLabel: 'CMDB',
  heroEyebrow: 'ServiceNow configuration data · Online & Hyderabad',
  heroTitle: 'ServiceNow CMDB Training',
  heroTitleAccent: 'in Hyderabad',
  heroLead:
    'Learn Configuration Items, class hierarchies, relationships and CSDM. The course outline also covers IRE, CMDB Health, CI lifecycle governance, CI Class Manager, Query Builder and practical data exercises.',
  heroChecks: ['CIs, relationships and CSDM', 'IRE and CMDB Health', 'Online and classroom options'],
  panel: {
    ariaLabel: 'ServiceNow CMDB learning path',
    title: 'From configuration data to service context',
    footnote: 'Illustrative CMDB learning path based on the supplied course outline.',
    items: [
      { title: 'Configuration Items', description: 'Explore CI classes, attributes and relationships.', record: 'CI', status: 'Structure', tone: 'bg-amber-400/15 text-amber-200' },
      { title: 'CSDM', description: 'Organize service data across its model domains.', record: 'CSDM', status: 'Model', tone: 'bg-violet-400/15 text-violet-200' },
      { title: 'IRE', description: 'Review identification and reconciliation rules.', record: 'IRE', status: 'Govern', tone: 'bg-blue-400/15 text-blue-200' },
      { title: 'CMDB Health', description: 'Assess completeness, correctness and compliance.', record: 'HEALTH', status: 'Improve', tone: 'bg-emerald-400/15 text-emerald-200' },
      { title: 'Query and impact', description: 'Explore dependencies and service relationships.', record: 'QUERY', status: 'Analyze', tone: 'bg-cyan-400/15 text-cyan-200' },
    ],
  },
  stats: {
    modulesDetail: 'Fundamentals through practical labs',
    projectsDetail: 'CI class, IRE and Query Builder exercises',
    certValue: 'CSDM',
    certLabel: 'Data model focus',
    certDetail: 'No certification outcome implied',
  },
  syllabus: {
    lead: '01 · Course syllabus',
    headingPlain: 'Model configuration data,',
    headingAccent: 'relationships and service health.',
    intro: 'Follow CMDB fundamentals into CSDM, IRE governance, health metrics, lifecycle policies, Query Builder and dependency analysis.',
  },
  trainingModes: {
    onlineDescription:
      'Explore ServiceNow CMDB online training. Ask the team to confirm the current timetable, delivery format and any practice environment access for your batch.',
    classroomDescription:
      'Explore ServiceNow CMDB classroom training in Hyderabad. Contact Rise Gen Technologies to confirm the current venue, schedule and availability.',
  },
  audience: {
    headingPlain: 'Start with configuration data',
    headingAccent: 'and build service context.',
    intro: 'The outline begins with CI classes and relationships before moving into CSDM, data ingestion governance and CMDB health.',
    cardPadding: 'px-5 py-3 sm:px-6 sm:py-4',
    cardFit: true,
    cards: [
      { title: 'ServiceNow administrators', body: 'Explore CI structures, attributes, relationships and CMDB navigation topics.', icon: UserCog },
      { title: 'IT operations professionals', body: 'Understand how configuration data and dependencies support operational analysis.', icon: Headset },
      { title: 'Data governance learners', body: 'Review IRE rules, data source reconciliation, health metrics and lifecycle policies.', icon: ShieldCheck },
      { title: 'Service modelers', body: 'Explore CSDM domains, service offerings and infrastructure relationships.', icon: Workflow },
    ],
  },
}

export const csmLanding: CourseLandingContent = {
  idPrefix: 'csm',
  areaLabel: 'CSM',
  heroEyebrow: 'ServiceNow Customer Service Management · Online & Hyderabad',
  heroTitle: 'ServiceNow CSM Training',
  heroTitleAccent: 'in Hyderabad',
  heroLead:
    'Explore customer and consumer data models, case workflows, portals, Agent Workspace, omnichannel routing and knowledge. The course outline also covers CSM integrations, analytics and implementation methodology.',
  heroChecks: ['B2B and B2C foundations', 'Cases and omnichannel experience', 'Online and classroom options'],
  panel: {
    ariaLabel: 'ServiceNow CSM learning path',
    title: 'From customer data to case resolution',
    footnote: 'Illustrative CSM learning path based on the supplied course outline.',
    items: [
      { title: 'Customer models', description: 'Explore accounts, contacts, consumers and products.', record: 'DATA', status: 'Connect', tone: 'bg-amber-400/15 text-amber-200' },
      { title: 'Case workflows', description: 'Review case lifecycle, assignment and Major Cases.', record: 'CASE', status: 'Resolve', tone: 'bg-violet-400/15 text-violet-200' },
      { title: 'Agent experience', description: 'Explore workspaces, Playbooks and AWA routing.', record: 'AGENT', status: 'Support', tone: 'bg-blue-400/15 text-blue-200' },
      { title: 'Self-service', description: 'Review portals, Knowledge and Virtual Agent topics.', record: 'SELF', status: 'Assist', tone: 'bg-emerald-400/15 text-emerald-200' },
      { title: 'Insights and integrations', description: 'Connect analytics, CSAT and service operations.', record: 'INSIGHT', status: 'Improve', tone: 'bg-cyan-400/15 text-cyan-200' },
    ],
  },
  stats: {
    modulesDetail: 'Foundations through implementation methodology',
    projectsDetail: 'Case lifecycle, omnichannel and integration exercises',
    certValue: 'CSM',
    certLabel: 'Course focus',
    certDetail: 'Certification support to confirm',
  },
  syllabus: {
    lead: '01 · Course syllabus',
    headingPlain: 'Connect customer data,',
    headingAccent: 'cases and service channels.',
    intro: 'Explore the course outline across CSM architecture, case management, portals, omnichannel routing, knowledge, integrations and analytics.',
  },
  trainingModes: {
    onlineDescription:
      'Explore ServiceNow CSM online training. Contact Rise Gen Technologies to confirm the current timetable, delivery format and batch availability.',
    classroomDescription:
      'Explore ServiceNow CSM classroom training in Hyderabad. Contact Rise Gen Technologies to confirm the current venue, schedule and availability.',
  },
  audience: {
    headingPlain: 'Start with customer needs',
    headingAccent: 'and build service workflows.',
    intro: 'The supplied outline begins with customer data models before moving into case lifecycles, omnichannel experiences and integrations.',
    cardPadding: 'px-5 py-3 sm:px-6 sm:py-4',
    cardFit: true,
    cards: [
      { title: 'Customer service professionals', body: 'Explore how customer cases, service levels and communications are represented in CSM.', icon: Headset },
      { title: 'ServiceNow administrators', body: 'Review CSM account, contact, consumer and workspace concepts from the course outline.', icon: UserCog },
      { title: 'Support operations learners', body: 'Explore case assignment, escalation, omnichannel routing, portals and self-service topics.', icon: Workflow },
      { title: 'Technical platform learners', body: 'Review integrations, knowledge access, analytics and CSM implementation methodology.', icon: ShieldCheck },
    ],
  },
}

export const hrsdLanding: CourseLandingContent = {
  idPrefix: 'hrsd',
  areaLabel: 'HRSD',
  heroEyebrow: 'ServiceNow Human Resources Service Delivery · Online & Hyderabad',
  heroTitle: 'ServiceNow HRSD Training',
  heroTitleAccent: 'in Hyderabad',
  heroLead:
    'Explore HRSD architecture, confidential HR case workflows, Employee Center and lifecycle journeys. The supplied outline also covers HR knowledge, Employee Relations, employee documents and HCM integrations.',
  heroChecks: ['HR data security and access', 'Cases, self-service and lifecycle events', 'Online and classroom options'],
  panel: {
    ariaLabel: 'ServiceNow HRSD learning path',
    title: 'From employee request to HR journey',
    footnote: 'Illustrative HRSD learning path based on the supplied six-module course outline.',
    items: [
      { title: 'HR data model', description: 'Explore HR profiles, core tables and COE structure.', record: 'DATA', status: 'Model', tone: 'bg-amber-400/15 text-amber-200' },
      { title: 'Access and privacy', description: 'Review roles, ACLs and HR data segregation.', record: 'ACL', status: 'Protect', tone: 'bg-violet-400/15 text-violet-200' },
      { title: 'HR cases', description: 'Connect HR Services, routing and agent workflows.', record: 'CASE', status: 'Resolve', tone: 'bg-blue-400/15 text-blue-200' },
      { title: 'Employee Center', description: 'Explore self-service, HR Knowledge and Virtual Agent.', record: 'SELF', status: 'Assist', tone: 'bg-emerald-400/15 text-emerald-200' },
      { title: 'Lifecycle events', description: 'Coordinate employee journeys and enterprise tasks.', record: 'JOURNEY', status: 'Orchestrate', tone: 'bg-cyan-400/15 text-cyan-200' },
    ],
  },
  stats: {
    modulesDetail: 'Architecture through enterprise integrations',
    projectsDetail: 'Case, self-service and lifecycle scenarios',
    certValue: 'HRSD',
    certLabel: 'Course focus',
    certDetail: 'Certification support to confirm',
  },
  syllabus: {
    lead: '01 · Course syllabus',
    headingPlain: 'Connect HR services,',
    headingAccent: 'employee needs and lifecycle journeys.',
    intro: 'Explore the outline across HRSD architecture, confidentiality, case workflows, Employee Center, lifecycle events and enterprise integrations.',
  },
  trainingModes: {
    onlineDescription:
      'Explore ServiceNow HRSD online training. Contact Rise Gen Technologies to confirm the current timetable, delivery format and batch availability.',
    classroomDescription:
      'Explore ServiceNow HRSD classroom training in Hyderabad. Contact Rise Gen Technologies to confirm the current venue, schedule and availability.',
  },
  audience: {
    headingPlain: 'Start with employee services',
    headingAccent: 'and build connected workflows.',
    intro: 'The supplied outline begins with HRSD foundations before moving into confidential cases, self-service and lifecycle orchestration.',
    cardPadding: 'px-5 py-3 sm:px-6 sm:py-4',
    cardFit: true,
    cards: [
      { title: 'HR operations professionals', body: 'Explore employee services, HR cases, lifecycle events and HR knowledge topics in the syllabus.', icon: Headset },
      { title: 'ServiceNow administrators', body: 'Review HRSD data structures, access controls, service configuration and agent workspace concepts.', icon: UserCog },
      { title: 'HR service agents', body: 'Explore case routing, HR Agent Workspace, employee self-service and knowledge workflows.', icon: Workflow },
      { title: 'Technical platform learners', body: 'Review lifecycle orchestration, employee data governance and HCM integration approaches.', icon: Database },
    ],
  },
}

export const grcLanding: CourseLandingContent = {
  idPrefix: 'grc',
  areaLabel: 'GRC',
  heroEyebrow: 'ServiceNow Integrated Risk Management · Online & Hyderabad',
  heroTitle: 'ServiceNow GRC Training',
  heroTitleAccent: 'in Hyderabad',
  heroLead:
    'Explore IRM/GRC through policies, controls, entity scoping and risk assessments. The supplied outline also covers continuous monitoring, audit, vendor risk and analytics.',
  heroChecks: ['Policy, control and risk workflows', 'Audit and vendor risk topics', 'Online and classroom options'],
  panel: {
    ariaLabel: 'ServiceNow GRC learning path',
    title: 'From compliance scope to risk insight',
    footnote: 'Illustrative IRM/GRC learning path based on the supplied seven-module outline.',
    items: [
      { title: 'Frameworks', description: 'Explore UCF, authority documents and access models.', record: 'UCF', status: 'Establish', tone: 'bg-amber-400/15 text-amber-200' },
      { title: 'Entities', description: 'Connect organizational scope, ownership and controls.', record: 'ENTITY', status: 'Scope', tone: 'bg-violet-400/15 text-violet-200' },
      { title: 'Policies and risks', description: 'Review policy lifecycle, controls and assessments.', record: 'POLICY', status: 'Assess', tone: 'bg-blue-400/15 text-blue-200' },
      { title: 'Monitoring and audit', description: 'Trace indicators, issues, audits and remediation.', record: 'AUDIT', status: 'Monitor', tone: 'bg-emerald-400/15 text-emerald-200' },
      { title: 'Insights', description: 'Explore GRC workspaces, KRIs and KPIs.', record: 'METRIC', status: 'Report', tone: 'bg-cyan-400/15 text-cyan-200' },
    ],
  },
  stats: {
    modulesDetail: 'IRM foundations through analytics',
    projectsDetail: 'Entity, risk and audit scenarios',
    certValue: 'GRC',
    certLabel: 'Course focus',
    certDetail: 'Certification support to confirm',
  },
  syllabus: {
    lead: '01 · Course syllabus',
    headingPlain: 'Connect policies, controls',
    headingAccent: 'and enterprise risk.',
    intro: 'Explore the supplied outline across IRM/GRC setup, entity scoping, compliance workflows, risk, audit, vendor risk and reporting.',
  },
  trainingModes: {
    onlineDescription:
      'Explore ServiceNow GRC online training. Contact Rise Gen Technologies to confirm the current timetable, delivery format and batch availability.',
    classroomDescription:
      'Explore ServiceNow GRC classroom training in Hyderabad. Contact Rise Gen Technologies to confirm the current venue, schedule and availability.',
  },
  audience: {
    headingPlain: 'Start with governance needs',
    headingAccent: 'and build connected risk workflows.',
    intro: 'The supplied outline begins with IRM/GRC foundations before moving into entity scoping, policy, risk assessment and monitoring.',
    cardPadding: 'px-5 py-3 sm:px-6 sm:py-4',
    cardFit: true,
    cards: [
      { title: 'GRC professionals', body: 'Explore how policies, controls, risks, issues and audit activities are represented in platform workflows.', icon: ShieldCheck },
      { title: 'ServiceNow administrators', body: 'Review IRM/GRC scope, access models, entity configuration and workspace concepts from the outline.', icon: UserCog },
      { title: 'Risk and compliance analysts', body: 'Explore risk scoring, control monitoring, assessments and remediation topics in the syllabus.', icon: Workflow },
      { title: 'Audit and vendor risk learners', body: 'Review audit engagements, vendor assessments, third-party risk and reporting concepts.', icon: Database },
    ],
  },
}

export const nowAssistLanding: CourseLandingContent = {
  idPrefix: 'now-assist',
  areaLabel: 'Now Assist',
  heroEyebrow: 'ServiceNow Generative AI · Now Assist',
  heroTitle: 'ServiceNow Now Assist Training',
  heroTitleAccent: 'and Generative AI',
  heroLead:
    'Explore Now Assist architecture, platform use cases, custom skills, AI agents and governance. The supplied outline spans ITSM, ITOM, CSM, HRSD and App Engine.',
  heroChecks: ['Now Assist skills and agentic workflows', 'AI security, governance and evaluation', 'Release-aware course scope'],
  panel: {
    ariaLabel: 'ServiceNow Now Assist learning path',
    title: 'From platform AI to governed agentic workflows',
    footnote: 'Learning path based on the supplied six-module Now Assist outline; feature availability may vary by release and entitlement.',
    items: [
      { title: 'GenAI foundations', description: 'Explore Now LLM, external models and platform architecture.', record: 'LLM', status: 'Understand', tone: 'bg-amber-400/15 text-amber-200' },
      { title: 'Admin Center', description: 'Review core skills, activation and Virtual Agent flows.', record: 'ADMIN', status: 'Configure', tone: 'bg-violet-400/15 text-violet-200' },
      { title: 'Product use cases', description: 'Connect Now Assist examples across ServiceNow products.', record: 'USE CASE', status: 'Apply', tone: 'bg-blue-400/15 text-blue-200' },
      { title: 'Skills and agents', description: 'Explore custom skills, prompt engineering and agentic workflows.', record: 'AGENT', status: 'Orchestrate', tone: 'bg-emerald-400/15 text-emerald-200' },
      { title: 'Governance and metrics', description: 'Review safeguards, adoption measures and quality tuning.', record: 'GOV', status: 'Evaluate', tone: 'bg-cyan-400/15 text-cyan-200' },
    ],
  },
  stats: {
    modulesDetail: 'GenAI foundations through optimization',
    projectsDetail: 'Use-case, skill and agent workflow scenarios',
    certValue: 'AI',
    certLabel: 'Course focus',
    certDetail: 'Certification support to confirm',
  },
  syllabus: {
    lead: '01 · Course syllabus',
    headingPlain: 'Explore Now Assist,',
    headingAccent: 'from skills to AI agents.',
    intro: 'Review the supplied six-module outline across model options, admin setup, product use cases, prompt engineering, agentic workflows and performance tracking.',
  },
  trainingModes: {
    onlineDescription:
      'Explore ServiceNow Now Assist online training. Contact Rise Gen Technologies to confirm the current timetable, delivery format and batch availability.',
    classroomDescription:
      'Explore ServiceNow Now Assist classroom training in Hyderabad. Contact Rise Gen Technologies to confirm the current venue, schedule and availability.',
  },
  audience: {
    headingPlain: 'Start with platform workflows',
    headingAccent: 'and explore responsible GenAI.',
    intro: 'The supplied outline begins with ServiceNow GenAI fundamentals before moving into skills, product-specific use cases and governed AI agents.',
    cardPadding: 'px-5 py-3 sm:px-6 sm:py-4',
    cardFit: true,
    cards: [
      { title: 'ServiceNow administrators', body: 'Review Now Assist activation, core skills, governance settings and usage metrics from the syllabus.', icon: UserCog },
      { title: 'ServiceNow developers', body: 'Explore custom skills, prompt templates, platform data grounding and agent tool concepts.', icon: Workflow },
      { title: 'Platform product teams', body: 'Review generative AI use cases outlined for ITSM, ITOM, CSM, HRSD and App Engine.', icon: Database },
      { title: 'AI governance learners', body: 'Explore privacy, Guardian protections, human approvals, fallback patterns and quality evaluation.', icon: ShieldCheck },
    ],
  },
}
