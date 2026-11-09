import { siteSchedule } from '@/data/site'

export type CourseFaq = { q: string; a: string }
export type CourseModule = { title: string; topics: string[]; handsOn?: string[] }
export type CourseProject = { title: string; description: string }
export type CourseSnapshot = { title: string; topics: string }

export type CoursePageData = {
  slug: string
  shortName: string
  fullName: string
  cardSubtitle: string
  cardDescription: string
  cardCertification: string
  certification?: string
  primaryKeyword: string
  keywordVariants: string[]
  topics: string[]
  snapshot: CourseSnapshot[]
  metaTitle: string
  metaDescription: string
  intro: [string, string]
  whoShouldJoin: string[]
  prerequisites: string[]
  syllabus: CourseModule[]
  toolsSkills: string[]
  projects: CourseProject[]
  duration?: string
  modes: ('Online' | 'Classroom')[]
  batchInfo: string
  faqs: CourseFaq[]
  relatedSlugs: string[]
}

const todoFaqs = (shortName: string, fullName: string): CourseFaq[] => [
  {
    q: `What does the ${fullName} course cover?`,
    a: `TODO: confirm the approved ${fullName} curriculum before publishing specific topics or outcomes. This answer is intentionally a placeholder, not a claim about course content. Replace it with an accurate summary of the ${shortName} syllabus, practical activities and any certification preparation that is actually included.`,
  },
  {
    q: `Who should join this course?`,
    a: `TODO: confirm the intended learner profile for the ${shortName} course with the training team. This page does not assume a particular job role, experience level or career outcome. Replace this placeholder with verified guidance about who may benefit from ${fullName} training and any recommended prior knowledge.`,
  },
  {
    q: `Are there prerequisites?`,
    a: `TODO: confirm prerequisite requirements before publishing this answer. Do not assume that prior ServiceNow, IT, programming or certification experience is necessary. Replace this text with the actual entry requirements for ${fullName} training, or clearly state that there are no prerequisites only after that has been verified.`,
  },
  {
    q: `Which training modes are available?`,
    a: `TODO: verify delivery availability and batch details for this course before publishing. The training modes on this page are listed for the requested page structure and must be confirmed by Rise Gen Technologies. Add accurate details for online learning and classroom delivery in Hyderabad once scheduling and delivery have been approved.`,
  },
  {
    q: `Is certification preparation included?`,
    a: `TODO: confirm whether certification preparation or exam support is included for this course. Replace this placeholder with verified details about any relevant ${shortName} certification preparation, included study resources and the limits of any support offered.`,
  },
]

const todoCourse = (
  shortName: string,
  fullName: string,
  slug: string,
  relatedSlugs: string[],
): CoursePageData => ({
  slug,
  shortName,
  fullName,
  primaryKeyword: `ServiceNow ${shortName} Training`,
  keywordVariants: [
    `ServiceNow ${shortName} Online Training`,
    `ServiceNow ${shortName} Classroom Training`,
    `ServiceNow ${shortName} Training in Hyderabad`,
    `ServiceNow ${shortName} Course`,
    `ServiceNow ${shortName} Certification Training`,
  ],
  topics: [
    `${shortName} fundamentals`,
    'ServiceNow platform overview',
    'Course syllabus topics',
  ],
  snapshot: Array.from({ length: 5 }, (_, index) => ({
    title: `${shortName} course topic group ${index + 1}`,
    topics: `Review the ${fullName} course syllabus with Rise Gen Technologies.`,
  })),
  metaTitle: `ServiceNow ${shortName} Training in Hyderabad | Rise Gen Technologies`,
  metaDescription: `TODO: Write a verified description for ServiceNow ${shortName} Training in Hyderabad, including approved course topics, delivery modes and learner support.`,
  intro: [
    courseCardContent[shortName].description,
    `Review the ${fullName} syllabus and confirm current training details with Rise Gen Technologies.`,
  ],
  cardSubtitle: courseCardContent[shortName].subtitle,
  cardDescription: courseCardContent[shortName].description,
  cardCertification: courseCardContent[shortName].certification,
  whoShouldJoin: ['TODO: confirm the intended learner profiles for this course.'],
  prerequisites: ['TODO: confirm the official course entry requirements.'],
  syllabus: [
    {
      title: `TODO: confirm ${shortName} module title`,
      topics: [`TODO: add verified topics for ${fullName}.`],
    },
  ],
  toolsSkills: [`TODO: add verified tools and skills for ${shortName}.`],
  projects: [
    {
      title: `TODO: confirm a real-time ${shortName} project`,
      description: `TODO: describe the verified project scope for ${fullName}.`,
    },
  ],
  modes: ['Online', 'Classroom'],
  batchInfo: siteSchedule.nextBatchLabel,
  faqs: todoFaqs(shortName, fullName),
  relatedSlugs,
})

const courseCardContent: Record<string, { subtitle: string; description: string; certification: string }> = {
  ITSM: {
    subtitle: 'IT Service Management',
    description: 'Learn how Incident, Problem, Change and Request workflows fit together across IT service management. The syllabus also covers Knowledge, CMDB, service levels and reporting.',
    certification: 'Aligned to CIS-ITSM',
  },
  CMDB: {
    subtitle: 'Configuration Management Database',
    description: 'Learn how the CMDB organizes configuration items and their relationships. The syllabus also covers data quality, identification, reconciliation and service context.',
    certification: 'Certification alignment varies',
  },
  CSM: {
    subtitle: 'Customer Service Management',
    description: 'Learn how customer cases, accounts, contacts and entitlements work together in customer service management. The syllabus also covers the portal, knowledge and SLAs.',
    certification: 'Certification scope to confirm',
  },
  HRSD: {
    subtitle: 'HR Service Delivery',
    description: 'Learn how HR cases, employee records and HR services are handled in HR service delivery. The syllabus also covers HR knowledge, Employee Center and onboarding journeys.',
    certification: 'Certification scope to confirm',
  },
  GRC: {
    subtitle: 'Governance, Risk, and Compliance',
    description: 'Learn how policies, controls, risks and audits are managed across governance, risk and compliance workflows. The syllabus also covers risk assessments, issues and compliance reporting.',
    certification: 'Certification scope to confirm',
  },
  'Now Assist': {
    subtitle: 'Generative AI on ServiceNow',
    description: 'Explore Now Assist and generative AI concepts, including the Generative AI Controller, Now LLM, AI governance, skills, prompts and vector search.',
    certification: 'Certification scope to confirm',
  },
  Admin: {
    subtitle: 'System Administration',
    description: 'Learn to configure and manage an instance, from users, groups, tables and forms to ACLs. The syllabus also covers import sets, notifications, SLAs, reports and dashboards.',
    certification: 'CSA preparation details to confirm',
  },
  Developer: {
    subtitle: 'Application Development',
    description: 'Explore app development through JavaScript, client and server scripting, and platform APIs. The course outline also covers Service Catalog, Flow Designer, REST integrations, IntegrationHub and UI Builder.',
    certification: 'Certification scope to confirm',
  },
  Scripting: {
    subtitle: 'Platform Scripting',
    description: 'Learn platform scripting from basics to advanced, starting with JavaScript and client scripts. The syllabus also covers GlideRecord, business rules, script includes and scheduled jobs.',
    certification: 'Certification scope to confirm',
  },
  ITOM: {
    subtitle: 'IT Operations Management',
    description: 'Explore IT operations management across Discovery, Service Mapping, Event Management, cloud discovery and automation. The proposed outline covers CMDB, MID Servers, patterns, integrations and hands-on labs.',
    certification: 'Certification and exam support to confirm',
  },
}

export const courses: CoursePageData[] = [
  {
    slug: 'servicenow-itsm-training',
    shortName: 'ITSM',
    fullName: 'IT Service Management',
    cardSubtitle: courseCardContent.ITSM.subtitle,
    cardDescription: courseCardContent.ITSM.description,
    cardCertification: courseCardContent.ITSM.certification,
    certification: 'CIS – IT Service Management',
    primaryKeyword: 'ServiceNow ITSM Training',
    keywordVariants: [
      'ServiceNow ITSM Online Training',
      'ServiceNow ITSM Offline Training',
      'ServiceNow ITSM Classroom Training',
      'ServiceNow ITSM Training in Hyderabad',
      'ServiceNow ITSM Course',
      'ServiceNow ITSM Certification Training',
    ],
    topics: ['Incident Management', 'Problem Management', 'Change Management', 'Service Catalog'],
    snapshot: [
      { title: 'Platform foundations', topics: 'ITIL 4, navigation, users, roles and ACL basics' },
      { title: 'Incident Management', topics: 'Lifecycle, assignment rules, SLAs and escalations' },
      { title: 'Problem and Change', topics: 'Known errors, CAB approvals, risk and conflict detection' },
      { title: 'Request and Service Catalog', topics: 'Catalog items, variables, approvals and fulfilment tasks' },
      { title: 'CMDB and reporting', topics: 'CI relationships, identification, reports and dashboards' },
    ],
    metaTitle: 'ServiceNow ITSM Training in Hyderabad | Rise Gen Technologies',
    metaDescription:
      'ServiceNow ITSM training in Hyderabad or online covering Incident, Problem, Change, Request, CMDB, SLAs, practical exercises and CIS-ITSM topic review.',
    intro: [
      'Learn how Incident, Problem, Change and Request workflows fit together in ServiceNow IT Service Management. The syllabus also covers Knowledge, CMDB, service levels and reporting.',
      'Work through practical configuration and project exercises, then review certification topics and interview scenarios. Confirm current batch dates and delivery availability with Rise Gen Technologies.',
    ],
    whoShouldJoin: [
      'Freshers and graduates interested in IT service management',
      'IT support and service desk professionals',
      'ITIL practitioners',
      'ServiceNow administrators building ITSM knowledge',
    ],
    prerequisites: [
      'No prior ServiceNow platform experience is required for the beginner-level foundations.',
      'A basic understanding of IT support workflows is useful but not mandatory.',
    ],
    syllabus: [
      {
        title: 'ITIL 4 and ServiceNow foundations',
        topics: ['ITIL 4 practices mapped to ServiceNow', 'Instance navigation and user interface', 'Users, groups, roles and ACL basics', 'Tables, forms, lists and dictionary'],
      },
      {
        title: 'Incident Management',
        topics: ['Incident lifecycle and states', 'Assignment rules and data lookup', 'Major incident management', 'Incident SLAs and escalations'],
      },
      {
        title: 'Problem and Change Management',
        topics: ['Problem, known error and workaround', 'Normal, standard and emergency changes', 'CAB workbench and change approvals', 'Change risk and conflict detection'],
      },
      {
        title: 'Request and Service Catalog',
        topics: ['Catalog items, variables and variable sets', 'Record producers and order guides', 'Request, RITM and catalog tasks', 'Catalog UI policies and client scripts'],
      },
      {
        title: 'Knowledge, CMDB and SLA',
        topics: ['Knowledge bases and article workflows', 'CMDB classes, CIs and relationships', 'Identification and reconciliation', 'SLA definitions, schedules and breaches'],
      },
      {
        title: 'Reporting and certification preparation',
        topics: ['Reports and dashboards', 'Service Portal overview', 'CIS-ITSM certification topic review', 'ITSM interview questions and answers'],
      },
    ],
    toolsSkills: [
      'Incident, Problem, Change and Request configuration',
      'Service Catalog, Knowledge and CMDB fundamentals',
      'Assignment rules, SLAs and notifications',
      'Reports, dashboards and workflow troubleshooting',
    ],
    projects: [
      {
        title: 'Service desk go-live',
        description: 'Configure Incident, Problem and Change workflows with SLAs and escalations for a fictional enterprise service desk.',
      },
      {
        title: 'Employee laptop request',
        description: 'Build a Service Catalog item with approvals, fulfilment tasks and notifications.',
      },
      {
        title: 'CMDB health check',
        description: 'Model a multi-tier application in the CMDB and report on its configuration item relationships.',
      },
    ],
    modes: ['Online', 'Classroom'],
    batchInfo: siteSchedule.nextBatchLabel,
    faqs: [
      {
        q: 'What topics are covered in ServiceNow ITSM Training?',
        a: 'The syllabus covers Incident, Problem, Change and Request workflows, along with Service Catalog, Knowledge, CMDB, SLAs and reporting. Learners review how these platform areas relate to IT service management, complete practical configuration exercises and review certification topics. Confirm the current cohort syllabus with Rise Gen Technologies before enrolling, as module details may be updated.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'The foundations module introduces the platform, ITIL practices and core navigation before moving into ITSM workflows. Prior ServiceNow experience is not listed as a prerequisite for this course. A basic familiarity with IT support processes can be helpful, but learners should confirm the current entry guidance with Rise Gen Technologies if they have a specific background or learning need.',
      },
      {
        q: 'Can I take ServiceNow ITSM Online Training or Offline Training?',
        a: 'The course is structured for online and classroom learning. ServiceNow ITSM Offline Training is delivered as classroom training in Hyderabad. Current batch dates and availability can change, so contact Rise Gen Technologies to confirm the delivery mode, timetable, class format and any requirements before choosing a batch.',
      },
      {
        q: 'How long is the course?',
        a: 'The existing course catalog lists a 45-day duration, but the timetable and total class schedule should be confirmed for the batch you plan to join. Ask Rise Gen Technologies whether the duration refers to calendar days, teaching days or the full batch period, and check the expected session frequency before enrolling.',
      },
      {
        q: 'What does ServiceNow ITSM Certification Training include?',
        a: 'The syllabus includes a review of CIS-ITSM certification topics and interview scenarios. This describes course topic review, not a promise of official exam training or a certification outcome. Check current exam requirements with the certification provider and contact Rise Gen Technologies to confirm what preparation materials or other support are included in your batch.',
      },
      {
        q: 'What projects are included in the ServiceNow ITSM Course?',
        a: 'The project section lists workflow, service request and CMDB exercises as candidate topics based on the earlier course catalog. Their final scope and inclusion in a specific batch still need confirmation from Rise Gen Technologies. Ask for the current project brief, expected learner deliverables and whether the work is completed individually or as part of a guided class exercise.',
      },
    ],
    relatedSlugs: [
      'servicenow-cmdb-training',
      'servicenow-csm-training',
      'servicenow-admin-training',
      'servicenow-developer-training',
    ],
  },
  {
    slug: 'servicenow-cmdb-training',
    shortName: 'CMDB',
    fullName: 'Configuration Management Database',
    cardSubtitle: courseCardContent.CMDB.subtitle,
    cardDescription: courseCardContent.CMDB.description,
    cardCertification: courseCardContent.CMDB.certification,
    certification: 'Certification scope to confirm',
    primaryKeyword: 'ServiceNow CMDB',
    keywordVariants: [
      'ServiceNow Configuration Management Database',
      'CSDM ServiceNow',
      'ServiceNow CMDB implementation',
      'ServiceNow Discovery and CMDB',
      'ServiceNow CI Class Manager',
      'ServiceNow CMDB best practices',
    ],
    topics: [
      'CMDB fundamentals, Configuration Items and class hierarchies',
      'CSDM architecture, domains and service modeling',
      'IRE identification and reconciliation rules',
      'CMDB Health, governance, lifecycle policies and de-duplication',
      'CMDB Workspace, Query Builder and dependency views',
    ],
    snapshot: [
      { title: 'CMDB foundations', topics: 'CIs, class hierarchies, relationships and descriptors' },
      { title: 'CSDM and service modeling', topics: 'CSDM domains, service models and infrastructure dependencies' },
      { title: 'IRE and data ingestion', topics: 'Identification, reconciliation, Service Graph Connectors and Import Sets' },
      { title: 'CMDB Health', topics: 'Completeness, correctness, compliance, lifecycle and duplicate remediation' },
      { title: 'Workspace and analysis', topics: 'CMDB Workspace, Query Builder, dependency and impact analysis' },
    ],
    metaTitle: 'ServiceNow CMDB Training in Hyderabad | Rise Gen Technologies',
    metaDescription:
      'Explore ServiceNow CMDB training: Configuration Items, CSDM, IRE, CMDB Health, CI Class Manager, Query Builder and hands-on data governance labs.',
    intro: [
      'Learn the ServiceNow Configuration Management Database concepts used to structure Configuration Items, relationships and service data across the platform.',
      'The course outline covers CSDM, IRE, data ingestion, CMDB Health, lifecycle governance, CI Class Manager, Query Builder and dependency analysis. It also lists labs for CI class design, reconciliation rules, lifecycle policies and asset queries.',
    ],
    whoShouldJoin: [
      'ServiceNow administrators and platform users working with configuration data',
      'IT operations and IT service management professionals learning CI relationships',
      'Learners exploring service models, CSDM and CMDB data quality',
      'Technical professionals reviewing IRE, integrations and CMDB governance concepts',
    ],
    prerequisites: [
      'The outline starts with CMDB and Configuration Item fundamentals before moving into CSDM, IRE and governance.',
      'Confirm any formal entry requirements with Rise Gen Technologies before enrolling.',
    ],
    syllabus: [
      {
        title: 'Introduction to CMDB and data fundamentals',
        topics: [
          'What a CMDB is and its role in ITSM, ITOM and ITAM',
          'Physical, logical and conceptual Configuration Items',
          'cmdb, cmdb_ci and child class hierarchies for hardware, software, network and cloud',
          'Parent-child CI dependency relationships and relational descriptors',
        ],
        handsOn: [
          'Design a custom CI class with attributes and relationship rules',
        ],
      },
      {
        title: 'Common Service Data Model (CSDM)',
        topics: [
          'CSDM architecture and prescriptive alignment across platform applications',
          'Foundation data: companies, locations, users and groups',
          'Design domain: Business Applications and Application Services',
          'Manage Technical Services: Technical Service Offerings and Dynamic CI Groups',
          'Sell/Consume domain: Business Services and Business Service Offerings',
          'Modeling real-world infrastructure dependencies using CSDM standards',
        ],
      },
      {
        title: 'Data ingestion, IRE and integration governance',
        topics: [
          'Identification and Reconciliation Engine (IRE) for standardized inserts and updates',
          'Identification rules, search payloads, match criteria and payload processing',
          'Reconciliation rules for Discovery, SCCM and ServiceNow Agent Client Collector sources',
          'Preventing unwanted data overwrites across sources',
          'Service Graph Connectors, Import Sets and IntegrationHub ingestion channels',
        ],
        handsOn: [
          'Configure IRE identification and reconciliation rules for third-party Import Sets',
        ],
      },
      {
        title: 'CMDB Health and data governance',
        topics: [
          'CMDB Health Dashboard metrics: completeness, correctness and compliance',
          'Recommended and mandatory attributes for completeness',
          'Duplicate, orphan and stale CIs for correctness',
          'Certification tasks and audit filters for compliance',
          'CMDB Data Manager lifecycle policies to retire, delete or archive CIs',
          'De-duplication experience for merging or remediating duplicate records',
        ],
        handsOn: [
          'Create CMDB Data Manager policies for automated CI lifecycle maintenance',
          'Review duplicate CI remediation and CMDB Health metrics',
        ],
      },
      {
        title: 'CMDB navigation, querying and impact analysis',
        topics: [
          'CMDB Workspace navigation, centralized management and operational insights',
          'CMDB Query Builder relationship queries without custom scripting',
          'Dependency Views for infrastructure relationships',
          'Using service dependencies for Incident root cause analysis',
          'Change impact analysis using related CIs and services',
        ],
        handsOn: [
          'Create CMDB Query Builder reports to identify unmapped critical assets',
          'Explore dependency views for service and change impact analysis',
        ],
      },
      {
        title: 'Practical CMDB lab work',
        topics: [
          'Custom CI classes, attributes and relationship rules',
          'IRE rules for third-party data imports',
          'Automated CI lifecycle maintenance with Data Manager policies',
          'Query Builder reports for unmapped critical assets',
        ],
        handsOn: [
          'Build and review the listed CI class, IRE, lifecycle and Query Builder lab exercises',
        ],
      },
    ],
    toolsSkills: [
      'Configuration Items, CMDB class structures and relationships',
      'CSDM domains and service modeling concepts',
      'IRE identification, reconciliation and ingestion governance',
      'CMDB Health, CI lifecycle management and de-duplication',
      'CI Class Manager, CMDB Workspace, Query Builder and Dependency Views',
    ],
    projects: [
      {
        title: 'Custom CI class and relationship design',
        description: 'Design a CI class with defined attributes and relationship rules, following the practical lab outline.',
      },
      {
        title: 'IRE and data source governance',
        description: 'Configure identification and reconciliation rules for a third-party Import Set and review how source precedence affects updates.',
      },
      {
        title: 'CMDB health and asset query review',
        description: 'Create a lifecycle policy and use Query Builder to identify unmapped critical assets as described in the supplied labs.',
      },
    ],
    modes: ['Online', 'Classroom'],
    batchInfo: siteSchedule.nextBatchLabel,
    faqs: [
      {
        q: 'What does ServiceNow CMDB Training cover?',
        a: 'The course covers Configuration Items and class structures, relationships, CSDM, IRE, data ingestion, CMDB Health, CI lifecycle policies, de-duplication, CMDB Workspace, Query Builder and dependency analysis.',
      },
      {
        q: 'What is the ServiceNow Configuration Management Database (CMDB)?',
        a: 'The Configuration Management Database stores Configuration Items and their relationships. The course outline explores CI classes, relationships and the ways CMDB data supports ITSM, ITOM and ITAM.',
      },
      {
        q: 'What does CSDM ServiceNow training cover?',
        a: 'CSDM in ServiceNow refers to the Common Service Data Model. The course outline covers its Foundation, Design, Manage Technical Services and Sell/Consume domains and how service data is organized across them.',
      },
      {
        q: 'Does the course cover ServiceNow CMDB implementation?',
        a: 'The outline covers CMDB structure, CSDM, ingestion governance, IRE rules, data quality and practical configuration labs. It describes course learning topics, not a consulting or implementation service engagement.',
      },
      {
        q: 'Is ServiceNow Discovery and CMDB included?',
        a: 'The outline covers CMDB data sources such as Discovery, SCCM and Agent Client Collector within reconciliation governance, along with CI relationships and service dependency views. Detailed Discovery training is covered separately in the ITOM course.',
      },
      {
        q: 'What is ServiceNow CI Class Manager used for in the syllabus?',
        a: 'CI Class Manager appears with CMDB navigation and data management topics, alongside custom CI class design, class hierarchies, attributes and relationship rules.',
      },
      {
        q: 'Which ServiceNow CMDB best practices are discussed?',
        a: 'The outline covers CSDM-aligned service modeling, IRE identification and reconciliation, mandatory attributes, duplicate/orphan/stale CI health, lifecycle policies and data source governance.',
      },
      {
        q: 'What hands-on labs are listed for this CMDB course?',
        a: 'The supplied outline lists custom CI class design, IRE rules for third-party imports, CMDB Data Manager lifecycle policies and Query Builder reports for unmapped critical assets.',
      },
    ],
    relatedSlugs: [
      'servicenow-itom-training',
      'servicenow-itsm-training',
      'servicenow-admin-training',
    ],
  },
  {
    slug: 'servicenow-csm-training',
    shortName: 'CSM',
    fullName: 'Customer Service Management',
    cardSubtitle: courseCardContent.CSM.subtitle,
    cardDescription: courseCardContent.CSM.description,
    cardCertification: courseCardContent.CSM.certification,
    certification: 'Certification and exam support to confirm',
    primaryKeyword: 'ServiceNow CSM Training',
    keywordVariants: [
      'ServiceNow CSM Online Training',
      'ServiceNow CSM Offline Training',
      'ServiceNow CSM Classroom Training',
      'ServiceNow CSM Training in Hyderabad',
      'ServiceNow CSM Course',
      'ServiceNow CSM Certification Training',
    ],
    topics: [
      'B2B and B2C customer data models and product taxonomy',
      'Case lifecycle, Major Case Management and service levels',
      'Customer portals, Agent Workspace, playbooks and omnichannel routing',
      'Knowledge Management, Field Service and ITSM integrations',
      'Analytics, integrations and implementation methodology',
    ],
    snapshot: [
      { title: 'CSM foundations', topics: 'B2B/B2C data models, products, entitlements and CSDM alignment' },
      { title: 'Case management', topics: 'Case types, lifecycle, assignment, major cases and SLAs' },
      { title: 'Omnichannel experience', topics: 'Customer portals, Agent Workspace, playbooks, AWA and Virtual Agent' },
      { title: 'Knowledge and integrations', topics: 'Knowledge access, Field Service, ITSM, REST and CRM integrations' },
      { title: 'Analytics and methodology', topics: 'CSAT, Performance Analytics, Now Create and implementation strategy' },
    ],
    metaTitle: 'ServiceNow CSM Training in Hyderabad | Rise Gen Technologies',
    metaDescription:
      'Explore ServiceNow CSM Training in Hyderabad: B2B/B2C data models, case workflows, portals, AWA routing, knowledge, integrations and analytics.',
    intro: [
      'Learn how ServiceNow Customer Service Management connects customer and consumer records with cases, service channels, knowledge and service operations.',
      'The supplied outline covers B2B and B2C models, case management, portals, Agent Workspace, Advanced Work Assignment, Virtual Agent, knowledge, ITSM/FSM integrations, analytics and implementation methodology. Confirm current delivery and certification support with Rise Gen Technologies.',
    ],
    whoShouldJoin: [
      'Customer service professionals learning ServiceNow case workflows',
      'ServiceNow administrators exploring CSM data models and workspaces',
      'Support operations learners interested in omnichannel routing and self-service',
      'Technical professionals reviewing CSM integrations and implementation concepts',
    ],
    prerequisites: [
      'The supplied outline begins with CSM architecture and data model foundations.',
      'Confirm any formal entry requirements with Rise Gen Technologies before enrolling.',
    ],
    syllabus: [
      {
        title: 'CSM architecture and data model foundations',
        topics: [
          'B2B accounts, contacts, account relationships, contact relationships and partner accounts',
          'B2C consumers, consumer addresses and profile configurations',
          'Product models, asset management alignment, products and installed base items',
          'Entitlements, warranties and contracts',
          'Aligning Customer Service Management structures with CSDM',
        ],
      },
      {
        title: 'Case management and workflows',
        topics: [
          'Case types, Case Tasks and state flows',
          'Auto-assignment rules and case escalation configurations',
          'Major Case creation and identification',
          'Child Case synchronization and communication management',
          'SLAs, OLAs and Underpinning Contracts for response and resolution targets',
        ],
      },
      {
        title: 'Omnichannel communication and self-service',
        topics: [
          'Customer Service Portal (/csp) and Consumer Service Portal (/asp)',
          'Portal Record Producers and catalog navigation for external users',
          'Agent Workspace configuration, contextual search and ribbon elements',
          'Playbooks for guided agent workflows',
          'Advanced Work Assignment service channels, presence, queues and routing rules',
          'Workload and capacity routing',
          'Virtual Agent, web chat and live-agent transfer',
          'Authenticated and unauthenticated chat routing and topic flows',
        ],
      },
      {
        title: 'Knowledge Management and Field Service integration',
        topics: [
          'Authenticated and unauthenticated knowledge access using User Criteria and Roles',
          'Knowledge Base publishing workflows and contextual article suggestions',
          'Field Service Management work orders initiated from customer cases',
          'Linking customer cases with IT Incidents, Problems and Changes',
        ],
      },
      {
        title: 'Analytics, governance and implementation methodology',
        topics: [
          'Customer Service Operations Workspace analytics',
          'Performance Analytics KPIs and CSAT surveys',
          'Case ingestion through REST API, email and third-party CRM platforms',
          'Salesforce integration patterns',
          'Now Create implementation methodology',
          'Sprint planning, workshop execution and security scope setup',
        ],
      },
    ],
    toolsSkills: [
      'B2B/B2C customer data models, product taxonomy and entitlements',
      'Case lifecycle, Major Case Management, assignment and service levels',
      'Customer portals, Agent Workspace, Playbooks and AWA routing',
      'Knowledge access, Virtual Agent, web chat and service integrations',
      'CSAT, Performance Analytics, CRM integration and implementation concepts',
    ],
    projects: [
      {
        title: 'Customer case lifecycle design',
        description: 'Map case types, state flows, assignment, escalation, Major Cases and child-case communication based on the supplied outline.',
      },
      {
        title: 'Omnichannel customer support flow',
        description: 'Explore a customer portal and agent workflow using the outlined channels, AWA routing, playbooks and Virtual Agent concepts.',
      },
      {
        title: 'CSM integration and analytics plan',
        description: 'Review a case-ingestion approach and connect it to the listed CRM, ITSM/FSM, CSAT and operational analytics topics.',
      },
    ],
    modes: ['Online', 'Classroom'],
    batchInfo: siteSchedule.nextBatchLabel,
    faqs: [
      {
        q: 'What does the ServiceNow CSM Course cover?',
        a: 'The supplied outline covers B2B and B2C data models, case management, Major Cases, SLAs, portals, Agent Workspace, Playbooks, AWA, Virtual Agent, Knowledge, integrations, analytics and implementation methodology.',
      },
      {
        q: 'Does the ServiceNow CSM Training cover both B2B and B2C models?',
        a: 'Yes. The foundations module lists B2B accounts, contacts and relationships, plus B2C consumers, consumer addresses and profile configurations.',
      },
      {
        q: 'Which case management topics are included?',
        a: 'The case module covers types, tasks, state flows, auto-assignment, escalation, Major Case Management, child-case synchronization and SLAs, OLAs and Underpinning Contracts.',
      },
      {
        q: 'Does the course cover portals and omnichannel routing?',
        a: 'Yes. The outline includes Customer and Consumer Service Portals, Agent Workspace, Playbooks, Advanced Work Assignment queues and routing, Virtual Agent, web chat and live-agent transfer.',
      },
      {
        q: 'Are Knowledge Management and Field Service integrations included?',
        a: 'The syllabus lists knowledge access and publishing workflows, contextual article suggestions, Field Service work orders from customer cases and links to ITSM incidents, problems and changes.',
      },
      {
        q: 'Which analytics and integration topics are covered?',
        a: 'The outline includes Customer Service Operations Workspace analytics, Performance Analytics KPIs, CSAT surveys, REST and email case ingestion, third-party CRM platforms and Salesforce integration patterns.',
      },
      {
        q: 'Does ServiceNow CSM Certification Training or exam preparation come with the course?',
        a: 'The supplied outline includes implementation methodology but does not confirm formal CIS-CSM exam preparation. Contact Rise Gen Technologies to verify any certification guidance or exam support for a specific batch.',
      },
      {
        q: 'Is ServiceNow CSM Offline Training available?',
        a: 'The page lists online and classroom learning modes. Contact Rise Gen Technologies to confirm the current timetable, delivery format and Hyderabad classroom availability.',
      },
    ],
    relatedSlugs: [
      'servicenow-itsm-training',
      'servicenow-hrsd-training',
      'servicenow-admin-training',
    ],
  },
  {
    slug: 'servicenow-hrsd-training',
    shortName: 'HRSD',
    fullName: 'Human Resources Service Delivery',
    cardSubtitle: courseCardContent.HRSD.subtitle,
    cardDescription: courseCardContent.HRSD.description,
    cardCertification: courseCardContent.HRSD.certification,
    certification: 'Certification and exam support to confirm',
    primaryKeyword: 'ServiceNow HRSD Training',
    keywordVariants: [
      'ServiceNow HRSD Online Training',
      'ServiceNow HRSD Offline Training',
      'ServiceNow HRSD Classroom Training',
      'ServiceNow HRSD Training in Hyderabad',
      'ServiceNow HRSD Course',
      'ServiceNow HRSD Certification Training',
    ],
    topics: [
      'HRSD architecture, plugins, application scopes and data model',
      'HR roles, ACLs, data segregation and audience criteria',
      'HR services, case workflows, routing, SLAs and agent experience',
      'Employee Center, HR knowledge and Virtual Agent',
      'Lifecycle events, Activity Sets and cross-department orchestration',
      'Employee documents, Employee Relations and HCM integrations',
    ],
    snapshot: [
      { title: 'Architecture and data model', topics: 'HRSD application scopes, plugins, core tables, COEs and HR Profiles' },
      { title: 'Security and access', topics: 'HR roles, ACLs, confidentiality, data segregation and audience criteria' },
      { title: 'Cases and services', topics: 'HR Services, case templates, routing, SLAs and HR Agent Workspace' },
      { title: 'Employee self-service', topics: 'Employee Center, catalog requests, HR Knowledge and Virtual Agent' },
      { title: 'Lifecycle journeys', topics: 'Onboarding, transfers, Activity Sets and cross-department tasks' },
      { title: 'Enterprise modules', topics: 'Employee documents, Employee Relations and HCM integrations' },
    ],
    metaTitle: 'ServiceNow HRSD Training in Hyderabad | Rise Gen',
    metaDescription:
      'Explore ServiceNow HRSD Training in Hyderabad: HR cases, Employee Center, lifecycle events, HR security, knowledge, employee relations and integrations.',
    intro: [
      'Explore how ServiceNow HR Service Delivery supports employee requests, confidential HR cases, self-service and lifecycle journeys.',
      'The supplied six-module outline covers HRSD architecture, security, case management, Employee Center, lifecycle events, Employee Document Management, Employee Relations and HCM integrations. Confirm current delivery and certification support with Rise Gen Technologies.',
    ],
    whoShouldJoin: [
      'HR operations professionals exploring employee service workflows',
      'ServiceNow administrators learning HRSD data, access and case configuration',
      'HR service agents interested in case routing and Agent Workspace',
      'Technical professionals reviewing lifecycle events and HCM integrations',
    ],
    prerequisites: [
      'The supplied outline starts with HRSD architecture and data model foundations.',
      'Confirm any formal entry requirements with Rise Gen Technologies before enrolling.',
    ],
    syllabus: [
      {
        title: 'Architecture, plugins and data model',
        topics: [
          'HRSD application scoping, including sn_hr_core, sn_hr_le and sn_hr_er',
          'Core HR plugins and their dependencies',
          'Key tables such as sn_hr_core_case, sn_hr_core_profile and sys_user, and how they relate',
          'Centers of Excellence (COEs) for classifying HR data',
          'HR Profile management, including synchronization with the user record',
          'Sensitive employee lifecycle attributes',
        ],
      },
      {
        title: 'Security, roles and access control',
        topics: [
          'HR-specific roles: hr_admin, hr_manager, hr_agent and hr_basic',
          'Access Control Lists (ACLs) and record-level security',
          'Confidentiality for sensitive HR information, including disciplinary, POSH and salary data',
          'HR data segregation from standard IT administration access',
          'User Criteria for catalog items and knowledge bases',
          'HR Criteria for targeting services and communications by employee profile attributes',
        ],
      },
      {
        title: 'HR case management and services',
        topics: [
          'HR Services, Case Templates, Record Producers and COE mapping',
          'HR case creation workflows',
          'Assignment rules, skill-based routing and the auto-assignment engine',
          'HR SLAs, OLAs and escalations',
          'HR Agent Workspace dashboards, ribbon elements, timelines and productivity tools',
          'Case tasks, child tasks and parent-child case synchronization',
        ],
      },
      {
        title: 'Employee portal and knowledge management',
        topics: [
          'Employee Center (EC and EC Pro), branding, taxonomy, topics and portal configuration',
          'Catalog requests for employee self-service',
          'HR Knowledge Bases and access governance',
          'HR article templates, feedback loops and knowledge deflection',
          'HR Virtual Agent topic flows for leave balance, salary slip queries and address updates',
        ],
      },
      {
        title: 'Lifecycle events and journey management',
        topics: [
          'Employee lifecycle events such as onboarding, transfers, relocation and offboarding',
          'Activity Sets with sequential and parallel execution',
          'Activity triggers, field mappings and audience conditions',
          'Cross-department tasks for IT equipment, Facilities desk allocation and Finance payroll setup',
        ],
      },
      {
        title: 'Enterprise modules and integrations',
        topics: [
          'Employee Document Management document types, retention rules, storage security and digital signatures',
          'Employee Relations cases, interview logs and investigation tracking',
          'HCM integrations with Workday, SuccessFactors, SAP and local HRMS systems',
          'IntegrationHub and REST API integration approaches',
        ],
      },
    ],
    toolsSkills: [
      'HRSD application scope, plugins, core tables, Centers of Excellence and HR Profiles',
      'HR roles, ACLs, data confidentiality and audience criteria',
      'HR Services, case routing, SLAs and HR Agent Workspace',
      'Employee Center, HR Knowledge and Virtual Agent topic flows',
      'Lifecycle events, Activity Sets and cross-department orchestration',
      'Employee document management, Employee Relations and HCM integrations',
    ],
    projects: [
      {
        title: 'Confidential HR case design scenario',
        description: 'Map HR Services, COE classification, case routing and access boundaries using the security and case topics in the supplied outline.',
      },
      {
        title: 'Employee self-service journey scenario',
        description: 'Outline an Employee Center request supported by HR Knowledge and a Virtual Agent topic from the listed syllabus examples.',
      },
      {
        title: 'Employee lifecycle orchestration scenario',
        description: 'Plan an onboarding or transfer journey with Activity Sets and the cross-department tasks described in the supplied outline.',
      },
    ],
    modes: ['Online', 'Classroom'],
    batchInfo: siteSchedule.nextBatchLabel,
    faqs: [
      {
        q: 'What does the ServiceNow HRSD Course cover?',
        a: 'The supplied outline covers HRSD architecture and data, security and access control, HR case management, Employee Center, knowledge, Virtual Agent, lifecycle events, Employee Relations, Employee Document Management and HCM integrations.',
      },
      {
        q: 'How does the course address confidential HR data?',
        a: 'The security module covers HR roles, ACLs, record-level access, data segregation and audience criteria for restricting HR services and communications.',
      },
      {
        q: 'Does the syllabus include Employee Center and HR Knowledge?',
        a: 'Yes. It lists Employee Center configuration, employee catalog requests, HR Knowledge access governance, article templates, feedback and knowledge deflection.',
      },
      {
        q: 'Which HR case management topics are included?',
        a: 'The outline includes HR Services, Case Templates, Record Producers, COE mapping, assignment and skill-based routing, SLAs, escalations, HR Agent Workspace and parent-child case tasks.',
      },
      {
        q: 'Are lifecycle events and HCM integrations covered?',
        a: 'Yes. Topics include onboarding, transfers, relocation, offboarding, Activity Sets, cross-department tasks, and integrations with Workday, SuccessFactors, SAP or local HRMS systems using IntegrationHub or REST APIs.',
      },
      {
        q: 'Does ServiceNow HRSD Certification Training or exam preparation come with the course?',
        a: 'The supplied syllabus does not confirm formal certification or exam preparation. Contact Rise Gen Technologies to verify any certification guidance or exam support for a specific batch.',
      },
      {
        q: 'Can I choose ServiceNow HRSD Online Training or ServiceNow HRSD Classroom Training?',
        a: 'The page lists online and classroom learning modes. Contact Rise Gen Technologies to confirm the current timetable, delivery format and batch availability.',
      },
      {
        q: 'Is ServiceNow HRSD Offline Training available in Hyderabad?',
        a: 'Contact Rise Gen Technologies to confirm whether offline classroom training is currently scheduled in Hyderabad and to check venue and batch details.',
      },
    ],
    relatedSlugs: [
      'servicenow-csm-training',
      'servicenow-grc-training',
      'servicenow-admin-training',
    ],
  },
  {
    slug: 'servicenow-now-assist-training',
    shortName: 'Now Assist',
    fullName: 'ServiceNow Now Assist',
    cardSubtitle: courseCardContent['Now Assist'].subtitle,
    cardDescription: courseCardContent['Now Assist'].description,
    cardCertification: courseCardContent['Now Assist'].certification,
    certification: 'Certification and exam support to confirm',
    primaryKeyword: 'ServiceNow Now Assist Training',
    keywordVariants: [
      'ServiceNow Generative AI Training',
      'Generative AI Controller',
      'Now LLM & Domain-Specific Large Language Models',
      'Now Assist Admin Center & AI Control Tower',
      'Now Assist Guardian',
      'Now Assist Skill Kit (NASK)',
      'Prompt Engineering & Prompt Templates',
      'RaptorDB & Vector Search',
      'ServiceNow Now Assist Course',
    ],
    topics: [
      'GenAI architecture across ITSM, CSM, HRSD, ITOM and App Engine',
      'Now LLM, external LLM integrations, licensing and AI governance',
      'Now Assist Admin Center, out-of-the-box skills and Virtual Agent',
      'Domain-specific implementations across ServiceNow products',
      'Now Assist Skill Kit, custom skills and prompt engineering',
      'AI agents, agentic workflows and human-in-the-loop governance',
      'AI Control Tower, Performance Analytics, quality and AI Search',
    ],
    snapshot: [
      { title: 'GenAI fundamentals and security', topics: 'Platform architecture, Now LLM, external models, licensing, privacy and Guardian' },
      { title: 'Admin Center and core skills', topics: 'Activation, OOTB skills, Virtual Agent and feature placements' },
      { title: 'Product implementations', topics: 'Use cases for ITSM, ITOM, CSM, HRSD and App Engine' },
      { title: 'Custom skills and prompts', topics: 'NASK, prompt templates, context and grounding' },
      { title: 'AI agents and workflows', topics: 'Agent architecture, orchestration, tools and human approvals' },
      { title: 'Analytics and optimization', topics: 'Adoption, quality evaluation, AI Control Tower, Performance Analytics and AI Search' },
    ],
    metaTitle: 'ServiceNow Now Assist Training | Rise Gen',
    metaDescription:
      'ServiceNow Generative AI Training with Now Assist: Now LLM, Guardian, custom skills, AI agents, governance and performance tracking.',
    intro: [
      'Explore how generative AI capabilities connect with ServiceNow workflows, Now Assist skills, platform data and governance.',
      'Your six-module outline spans Now LLM and external model integrations, licensing, Guardian, Admin Center, product use cases, Skill Kit, prompt engineering, AI agents and performance tracking. Specific features, integrations and licensing depend on the ServiceNow release and entitlements; confirm the current batch scope with Rise Gen Technologies.',
    ],
    whoShouldJoin: [
      'ServiceNow professionals exploring generative AI capabilities on the platform',
      'Administrators reviewing Now Assist configuration and governance concepts',
      'Developers interested in custom skills and prompt templates',
      'Technical learners exploring language models, AI search and vector search topics',
    ],
    prerequisites: [
      'The supplied outline begins with Now Assist and generative AI fundamentals.',
      'Confirm any formal entry requirements and product access needs with Rise Gen Technologies.',
    ],
    syllabus: [
      {
        title: 'Introduction to Generative AI on ServiceNow',
        topics: [
          'GenAI architecture across ITSM, CSM, HRSD, ITOM and App Engine',
          'Now LLM compared with external LLMs, including Azure OpenAI and Google Cloud Vertex AI through Generative AI Controller',
          'Now Assist licensing, consumption models and skill action metrics',
          'Data privacy, retention and PII masking',
          'Now Assist Guardian: offensiveness protection, prompt injection protection and sensitive topic filters',
        ],
      },
      {
        title: 'Now Assist Admin Center and core capabilities',
        topics: [
          'Admin Center activation, guided setup and prerequisites',
          'Activating out-of-the-box skills such as incident summarization, resolution note generation and chat summarization',
          'Trigger conditions and UI action placement across Workspace, Classic UI and portals',
          'Now Assist for Virtual Agent: generative conversational flows from NLU/intent-based topics',
        ],
      },
      {
        title: 'Domain-specific implementations',
        topics: [
          'ITSM and ITOM: resolution notes, incident context, duplicate CI remediation and Service Graph Connector diagnosis',
          'CSM and HRSD: draft knowledge articles, personalize agent responses and summarize employee queries',
          'App Engine: generate applications, data models and fields from natural language',
          'Text-to-Flow and Text-to-Playbook in Workflow Studio',
        ],
      },
      {
        title: 'Custom skills and prompt engineering with Now Assist Skill Kit',
        topics: [
          'Build, test and deploy custom GenAI skills with Now Assist Skill Kit (NASK)',
          'Create dynamic prompt templates using context variables, table fields and inputs',
          'Ground prompts with platform data to reduce hallucinations',
          'Extend out-of-the-box skills for enterprise requirements',
        ],
      },
      {
        title: 'ServiceNow AI Agents and agentic workflows',
        topics: [
          'AI agent architecture, tools and execution models',
          'Configure orchestrator agents, tool definitions, dynamic routing and multi-turn actions',
          'Human-in-the-loop approval gates and fallback mechanisms',
        ],
      },
      {
        title: 'Analytics, optimization and maintenance',
        topics: [
          'Monitor usage, acceptance rates and time-saved metrics with AI Control Tower and Performance Analytics',
          'Evaluate model output quality and tune prompts and knowledge inputs',
          'Refine AI Search results; review RaptorDB and vector search concepts from the supplied topic list',
        ],
      },
    ],
    toolsSkills: [
      'GenAI architecture, Now LLM and external LLM integration concepts',
      'Now Assist licensing, Guardian protections and privacy considerations',
      'Admin Center setup, OOTB skills and Virtual Agent flows',
      'Now Assist use cases across ITSM, ITOM, CSM, HRSD and App Engine',
      'NASK, custom skills, prompt templates and data grounding',
      'AI agents, orchestration, approvals and fallback patterns',
      'Adoption metrics, quality evaluation, AI Control Tower and AI Search tuning',
    ],
    projects: [
      {
        title: 'Now Assist use-case and governance scenario',
        description: 'Map a proposed workflow to the platform use cases, model options and privacy safeguards in the supplied outline; verify release and entitlement fit.',
      },
      {
        title: 'Custom skill and prompt design scenario',
        description: 'Outline a NASK skill and grounded prompt template for a sample workflow; confirm the supported implementation scope before practice.',
      },
      {
        title: 'Agentic workflow and evaluation scenario',
        description: 'Review agent tools, approval points, fallbacks and adoption or quality measures for a proposed agentic workflow.',
      },
    ],
    modes: ['Online', 'Classroom'],
    batchInfo: siteSchedule.nextBatchLabel,
    faqs: [
      {
        q: 'What does the ServiceNow Now Assist Course cover?',
        a: 'The six supplied modules cover GenAI architecture, Now LLM and external model options, Admin Center, out-of-the-box skills, product-specific use cases, custom skills, agentic workflows, governance and performance tracking.',
      },
      {
        q: 'Does ServiceNow Generative AI Training cover Now LLM and domain-specific large language models?',
        a: 'Yes. It compares Now LLM with external LLM integrations, including Azure OpenAI and Google Cloud Vertex AI through Generative AI Controller. Verify current integrations and entitlements for the target release.',
      },
      {
        q: 'What do Now Assist Admin Center, AI Control Tower and Now Assist Guardian cover?',
        a: 'The supplied outline includes data privacy, retention, PII masking, offensiveness protection, prompt injection protection and sensitive topic filters. Confirm feature availability for the relevant release and entitlement.',
      },
      {
        q: 'Does the course include Now Assist Skill Kit (NASK), prompt engineering and prompt templates?',
        a: 'Yes. The outline includes building, testing and deploying custom skills with NASK, dynamic prompt templates, platform data grounding and extending out-of-the-box skills.',
      },
      {
        q: 'Are RaptorDB and vector search included with AI Search?',
        a: 'The supplied topic list includes RaptorDB and vector search. The syllabus also covers evaluating and tuning knowledge inputs for AI Search results.',
      },
      {
        q: 'Which ServiceNow product use cases are discussed?',
        a: 'The supplied outline includes Now Assist examples for ITSM, ITOM, CSM, HRSD, App Engine, Virtual Agent, Workflow Studio, and Text-to-Flow or Text-to-Playbook concepts.',
      },
      {
        q: 'Does the syllabus include AI agents and agentic workflows?',
        a: 'Yes. It lists agent architecture, tools, orchestrator agents, dynamic routing, multi-turn actions, human approval gates and fallback mechanisms.',
      },
      {
        q: 'Will all Now Assist features be available for hands-on practice?',
        a: 'Hands-on access depends on the ServiceNow release, product entitlements and instance configuration. Confirm the exact features and practical scope for the current batch before enrolling.',
      },
      {
        q: 'Does ServiceNow Now Assist Certification Training or exam preparation come with the course?',
        a: 'The supplied outline does not confirm formal certification or exam preparation. Contact Rise Gen Technologies to verify any certification guidance or exam support for a specific batch.',
      },
      {
        q: 'Which training modes and batch dates are available?',
        a: 'The page lists online and classroom learning modes. Contact Rise Gen Technologies to confirm the current timetable, delivery format, batch availability and Hyderabad classroom details.',
      },
    ],
    relatedSlugs: [
      'servicenow-developer-training',
      'servicenow-admin-training',
      'servicenow-scripting-training',
    ],
  },
  {
    slug: 'servicenow-grc-training',
    shortName: 'GRC',
    fullName: 'Governance, Risk, and Compliance',
    cardSubtitle: courseCardContent.GRC.subtitle,
    cardDescription: courseCardContent.GRC.description,
    cardCertification: courseCardContent.GRC.certification,
    certification: 'Certification and exam support to confirm',
    primaryKeyword: 'ServiceNow GRC Training',
    keywordVariants: [
      'ServiceNow GRC Online Training',
      'ServiceNow GRC Offline Training',
      'ServiceNow GRC Classroom Training',
      'ServiceNow GRC Training in Hyderabad',
      'ServiceNow GRC Course',
      'ServiceNow GRC Certification Training',
    ],
    topics: [
      'IRM/GRC architecture, UCF, roles and access controls',
      'Entity framework, entity scoping, ownership and hierarchies',
      'Policy lifecycle, acknowledgements, controls and exceptions',
      'Risk frameworks, scoring, Advanced Risk Assessment and response',
      'Continuous monitoring, indicators, control testing and issues',
      'Audit Management, Vendor Risk Management, analytics and reporting',
    ],
    snapshot: [
      { title: 'IRM/GRC foundations', topics: 'Application scope, UCF authority documents, roles and entity-based access' },
      { title: 'Entity framework', topics: 'Entity types, filters, class maps, hierarchies and ownership' },
      { title: 'Policy and compliance', topics: 'Policy lifecycle, acknowledgements, control objectives and exceptions' },
      { title: 'Risk and assessment', topics: 'Risk libraries, scoring, RAM, heatmaps and risk response' },
      { title: 'Monitoring and issues', topics: 'Indicators, automated control testing, issue generation and remediation' },
      { title: 'Audit, vendor risk and metrics', topics: 'Audit engagements, VRM assessments, workspaces, KRIs and KPIs' },
    ],
    metaTitle: 'ServiceNow GRC Training in Hyderabad | Rise Gen',
    metaDescription:
      'Explore ServiceNow GRC Training in Hyderabad: policies, controls, entity scoping, risk assessments, continuous monitoring, audits, vendor risk and analytics.',
    intro: [
      'Explore how ServiceNow Integrated Risk Management (IRM/GRC) connects compliance obligations, entities, policies, controls, risks, audits and vendor assessments.',
      'The supplied seven-module outline covers UCF, entity scoping, policy and compliance workflows, risk assessment, continuous monitoring, Audit Management, Vendor Risk Management and GRC analytics. Confirm current delivery and certification support with Rise Gen Technologies.',
    ],
    whoShouldJoin: [
      'Governance, risk and compliance professionals exploring platform workflows',
      'ServiceNow administrators learning IRM/GRC configuration and access models',
      'Risk and compliance analysts interested in controls, assessments and remediation',
      'Audit and vendor risk learners reviewing assessment and reporting processes',
    ],
    prerequisites: [
      'The supplied outline starts with IRM/GRC architecture and fundamentals.',
      'Confirm any formal entry requirements with Rise Gen Technologies before enrolling.',
    ],
    syllabus: [
      {
        title: 'Architecture, fundamentals and setup',
        topics: [
          'ServiceNow IRM/GRC application scope, table hierarchy and user roles',
          'Unified Compliance Framework (UCF): importing authority documents, citations and frameworks such as ISO 27001, NIST, SOX and HIPAA',
          'Security and access control for confidential records',
          'Business User Lite roles and Entity-Based Access (EBA) controls',
        ],
      },
      {
        title: 'The entity framework and scoping',
        topics: [
          'Defining entities, entity types and entity filters',
          'Scoping physical assets, business applications, vendors and process workflows',
          'Entity class maps and hierarchies, such as Enterprise to Business Unit to Application',
          'Synchronizing entity ownership across controls and registered risks',
        ],
      },
      {
        title: 'Policy and Compliance Management',
        topics: [
          'Policy creation, drafting, review, approval and Knowledge Base publishing',
          'Policy acknowledgement campaigns for targeted user audiences',
          'Citations, Control Objectives and automatically generating scoped controls from entity maps',
          'Policy exception request, approval, extension and auto-expiration workflows',
        ],
      },
      {
        title: 'Risk Management and Advanced Risk Assessment',
        topics: [
          'Central risk libraries and generating entity-specific risks',
          'Risk criteria, appetite and qualitative or quantitative scoring',
          'Inherent, residual and target risk',
          'Risk Assessment Methodologies (RAM) configuration and assessment engine setup',
          'Risk heatmaps, matrix grids and response strategies: mitigate, accept, transfer or avoid',
        ],
      },
      {
        title: 'Continuous monitoring, indicators and issues',
        topics: [
          'Manual, basic and continuous indicator setup',
          'Automated control testing using platform data, IntegrationHub, VRM and Performance Analytics',
          'Automated issue generation for failed controls or exceeded risk thresholds',
          'Issue triage, assignment rules and remediation task management',
        ],
      },
      {
        title: 'Audit Management and Vendor Risk Management',
        topics: [
          'Planning audit engagements, defining scope and allocating resources',
          'Creating audit test plans, executing test templates and producing audit reports',
          'Vendor portfolio setup, assessment templates and vendor portal workflows',
          'Vendor security questionnaires and third-party operational risk scoring',
        ],
      },
      {
        title: 'Analytics and reporting',
        topics: [
          'Compliance Workspace, Operational Risk Workspace and Audit Management interfaces',
          'Performance Analytics and GRC metrics',
          'Tracking key risk indicators (KRIs) and key performance indicators (KPIs) over time',
        ],
      },
    ],
    toolsSkills: [
      'IRM/GRC application scope, UCF authority documents and entity-based access',
      'Entity maps, scoping, hierarchies and ownership synchronization',
      'Policy lifecycle, acknowledgements, controls and exceptions',
      'Risk libraries, scoring, RAM, heatmaps and risk responses',
      'Indicators, automated control testing, issues and remediation',
      'Audit Management, Vendor Risk Management, workspaces, KRIs and KPIs',
    ],
    projects: [
      {
        title: 'Entity and control scoping scenario',
        description: 'Map a sample business hierarchy and trace entity ownership into related controls and risks using the supplied outline.',
      },
      {
        title: 'Policy and risk assessment scenario',
        description: 'Outline a policy acknowledgement, control objective, exception workflow and risk assessment path from the listed syllabus topics.',
      },
      {
        title: 'Audit and vendor assessment scenario',
        description: 'Plan an audit engagement and vendor assessment, then identify the evidence, issue and reporting steps to review.',
      },
    ],
    modes: ['Online', 'Classroom'],
    batchInfo: siteSchedule.nextBatchLabel,
    faqs: [
      {
        q: 'What does the ServiceNow GRC Course cover?',
        a: 'The supplied seven-module outline covers IRM/GRC setup, UCF, entity scoping, Policy and Compliance Management, risk assessment, continuous monitoring, issues, audits, vendor risk and analytics.',
      },
      {
        q: 'Does the ServiceNow GRC Training include policy and compliance workflows?',
        a: 'Yes. The outline includes policy drafting, review and approval, acknowledgements, citations, Control Objectives, scoped controls and policy exception workflows.',
      },
      {
        q: 'Which risk assessment topics are included?',
        a: 'Topics include risk libraries, risk criteria and appetite, inherent/residual/target scoring, RAM configuration, assessment engines, heatmaps, matrix grids and risk response strategies.',
      },
      {
        q: 'Are continuous monitoring and issue remediation covered?',
        a: 'Yes. The syllabus lists indicators, automated control testing, issue generation for failed controls or risk thresholds, triage, assignment and remediation tasks.',
      },
      {
        q: 'Does the course cover Audit Management and Vendor Risk Management?',
        a: 'The outline includes audit engagement planning, test plans, test templates and reports, plus vendor portfolios, assessment templates, vendor portal workflows and third-party risk scoring.',
      },
      {
        q: 'Does ServiceNow GRC Certification Training include exam preparation?',
        a: 'The supplied syllabus does not confirm formal certification or exam preparation. Contact Rise Gen Technologies to verify any certification guidance or exam support for a specific batch.',
      },
      {
        q: 'Can I choose ServiceNow GRC Online Training or ServiceNow GRC Classroom Training?',
        a: 'The page lists online and classroom learning modes. Contact Rise Gen Technologies to confirm the current timetable, delivery format and batch availability.',
      },
      {
        q: 'Is ServiceNow GRC Offline Training available in Hyderabad?',
        a: 'Contact Rise Gen Technologies to confirm whether offline classroom training is currently scheduled in Hyderabad and to check venue and batch details.',
      },
    ],
    relatedSlugs: [
      'servicenow-hrsd-training',
      'servicenow-itsm-training',
      'servicenow-admin-training',
    ],
  },
  {
    slug: 'servicenow-admin-training',
    shortName: 'Admin',
    fullName: 'ServiceNow System Administration',
    cardSubtitle: courseCardContent.Admin.subtitle,
    cardDescription: courseCardContent.Admin.description,
    cardCertification: courseCardContent.Admin.certification,
    certification: 'CSA exam preparation details to confirm',
    primaryKeyword: 'ServiceNow Admin Training',
    keywordVariants: [
      'ServiceNow Admin Online Training',
      'ServiceNow Admin Offline Training',
      'ServiceNow Admin Classroom Training',
      'ServiceNow Admin Training in Hyderabad',
      'ServiceNow Admin Course',
      'ServiceNow Admin Certification Training',
    ],
    topics: ['Users, groups and roles', 'Tables, forms and dictionary', 'Access control', 'Imports and update sets'],
    snapshot: [
      { title: 'Platform foundations', topics: 'Instance, navigation, ITIL and ServiceNow architecture' },
      { title: 'Users and data model', topics: 'Users, groups, roles, tables, forms and dictionary' },
      { title: 'Access and data movement', topics: 'ACLs, import sets, transform maps and update sets' },
      { title: 'Service operations', topics: 'SLAs, notifications, reports and assignment rules' },
      { title: 'Catalog and automation', topics: 'Catalog items, workflows and Flow Designer' },
    ],
    metaTitle: 'ServiceNow Admin Training in Hyderabad | Rise Gen Technologies',
    metaDescription:
      'Explore ServiceNow Admin Training in Hyderabad or online, with platform navigation, users and roles, tables, ACLs, imports, update sets, reporting and catalog workflows.',
    intro: [
      'Learn the ServiceNow platform foundations and administration tasks covered in the course outline, from users, groups and roles to tables, forms, access controls and data imports.',
      'The curriculum also includes update sets, notifications, reports, service catalog and workflow topics, with hands-on exercises listed in the syllabus. Confirm current batch dates, delivery options and certification preparation details with Rise Gen Technologies.',
    ],
    whoShouldJoin: [
      'Learners starting with ServiceNow platform administration',
      'IT support and service desk professionals expanding their platform knowledge',
      'ServiceNow users who want to understand configuration and access controls',
      'Administrators reviewing core platform concepts and workflows',
    ],
    prerequisites: [
      'The supplied course outline begins with ServiceNow and platform foundations.',
      'Confirm any formal entry requirements with Rise Gen Technologies before enrolling.',
    ],
    syllabus: [
      {
        title: 'ServiceNow overview and platform foundations',
        topics: [
          'ServiceNow introduction, products, versions and instances',
          'Cloud computing concepts, platform features and architecture',
          'ITIL foundation, lifecycle and helpful portals',
          'Overview of ServiceNow modules and AI-enabled features',
        ],
        handsOn: ['Get a developer instance from the ServiceNow developer site'],
      },
      {
        title: 'Next Experience UI and instance personalization',
        topics: [
          'Next Experience interface, user profile and preferences',
          'Theme configuration and impersonating users',
          'Elevating roles and switching between UI versions',
          'Configuring landing pages',
        ],
        handsOn: ['Explore the Next Experience banner and frame'],
      },
      {
        title: 'User, group and role administration',
        topics: [
          'Create users, groups, departments, companies and locations',
          'Assign roles to users and groups',
          'Role delegation and user profile customization',
          'Review group membership and user relationships',
        ],
        handsOn: ['Create and configure users, groups and roles'],
      },
      {
        title: 'Tables, forms and dictionary',
        topics: [
          'Core and custom tables and table creation',
          'Form layout, Form Designer, views and sections',
          'Dictionary entries and overrides',
          'Reference qualifiers, related lists, auto-numbering and dot-walking',
        ],
        handsOn: ['Configure a form view with form layout and Form Designer'],
      },
      {
        title: 'Applications and access control',
        topics: [
          'Applications, modules and scoped applications',
          'Access Control Lists and permission requirements',
          'Read, write and create controls at table and field level',
          'ACL scripts, CRUD operations and ACL execution flow',
          'Privileged system administrator concepts',
        ],
        handsOn: ['Create an access control rule to grant data permissions'],
      },
      {
        title: 'Import sets and update sets',
        topics: [
          'Import set tables, data sources and XML imports',
          'Transform maps and coalesce fields',
          'Scheduled data imports and import cleanup',
          'Create, retrieve, preview, commit, migrate and merge update sets',
        ],
        handsOn: ['Create an import set table and transform map, process imported data and review update-set changes'],
      },
      {
        title: 'Service level management',
        topics: [
          'Service Level Management concepts',
          'SLA definitions and schedules',
          'Reviewing SLA timing and fulfillment',
        ],
        handsOn: ['Create an SLA definition and configure its schedule'],
      },
      {
        title: 'Notifications, reports and assignment rules',
        topics: [
          'System and email notifications',
          'Notifications triggered by events and record conditions',
          'Email scripts and notification previews',
          'Report types, report creation, sharing and scheduling',
          'Dashboards and assignment-rule automation',
        ],
        handsOn: ['Configure notifications, reports, dashboards and assignment automation'],
      },
      {
        title: 'Service catalog and workflow automation',
        topics: [
          'Catalog items, variables and variable sets',
          'Record producers, order guides, requests and catalog tasks',
          'Catalog UI policies and client scripts',
          'Workflow Editor and attaching workflows to catalog items',
          'Flow Designer overview and workflow comparison',
        ],
        handsOn: [
          'Create a catalog item with variables and test it',
          'Create a record producer and build catalog workflows or flows',
          'Catalog capstone: create and automate business catalog items',
        ],
      },
      {
        title: 'Policies and platform automation',
        topics: [
          'UI policies and data policies',
          'Client-side scripting concepts and form APIs',
          'Business rules and script includes overview',
          'Email scripts, scheduled jobs and UI actions',
          'Reference qualifiers',
        ],
        handsOn: [
          'Write and test UI and data policies',
          'Practice client scripts with form and user APIs',
          'Review background scripts, business rules and scheduled jobs',
        ],
      },
    ],
    toolsSkills: [
      'ServiceNow navigation, user, group and role administration',
      'Tables, forms, dictionary entries and access controls',
      'Import sets, transform maps and update-set management',
      'SLAs, notifications, reports, dashboards and assignment rules',
      'Service Catalog, Workflow Editor and Flow Designer fundamentals',
    ],
    projects: [
      {
        title: 'ServiceNow administration configuration lab',
        description: 'Practice user and role setup, form configuration and access-control rules using the exercises listed in the supplied course outline.',
      },
      {
        title: 'Import and update-set exercise',
        description: 'Work through an import set, transform map and update-set review using the hands-on tasks in the supplied course outline.',
      },
      {
        title: 'Service catalog capstone',
        description: 'Create catalog items and connect them to workflow or Flow Designer automation as described in the supplied course outline.',
      },
    ],
    modes: ['Online', 'Classroom'],
    batchInfo: siteSchedule.nextBatchLabel,
    faqs: [
      {
        q: 'What topics are covered in the ServiceNow Admin course?',
        a: 'The syllabus starts with ServiceNow platform foundations and navigation, then covers user and role administration, tables and forms, ACLs, import sets and update sets. It also includes SLAs, notifications, reports, dashboards, assignment rules, Service Catalog and workflow automation.',
      },
      {
        q: 'Does the ServiceNow Admin training cover users, roles and ACLs?',
        a: 'Yes. The outline includes creating users and groups, assigning and delegating roles, and configuring access controls. ACL topics include table- and field-level permissions, ACL scripts and the ACL execution flow.',
      },
      {
        q: 'Does the course cover both import sets and update sets?',
        a: 'Yes. Import topics include data sources, import set tables, transform maps, coalesce fields and scheduled imports. Update-set topics include creating local sets, retrieving changes, previewing, committing, migrating and merging update sets.',
      },
      {
        q: 'Are reports, dashboards, notifications and SLAs part of the syllabus?',
        a: 'Yes. The outline covers SLA definitions and schedules, system and email notifications, event-triggered notifications, reports, dashboards, sharing and scheduling reports, and assignment rules.',
      },
      {
        q: 'What hands-on exercises are listed in the ServiceNow Admin syllabus?',
        a: 'Listed exercises include setting up a developer instance, creating users, groups and roles, configuring forms and ACLs, importing data with transform maps, creating an SLA, configuring notifications and reports, and building catalog items with workflow or flow automation.',
      },
    ],
    relatedSlugs: [
      'servicenow-itsm-training',
      'servicenow-developer-training',
      'servicenow-scripting-training',
    ],
  },
  {
    slug: 'servicenow-developer-training',
    shortName: 'Developer',
    fullName: 'ServiceNow Application Development',
    cardSubtitle: courseCardContent.Developer.subtitle,
    cardDescription: courseCardContent.Developer.description,
    cardCertification: courseCardContent.Developer.certification,
    certification: 'Certification scope to confirm',
    primaryKeyword: 'ServiceNow Developer Training',
    keywordVariants: [
      'ServiceNow Developer Online Training',
      'ServiceNow Developer Offline Training',
      'ServiceNow Developer Classroom Training',
      'ServiceNow Developer Training in Hyderabad',
      'ServiceNow Developer Course',
      'ServiceNow Developer Certification Training',
      'ServiceNow Admin Training',
      'ServiceNow Administrator Training',
      'ServiceNow System Administrator Course',
      'ServiceNow Application Development Training',
      'ServiceNow Flow Designer Training',
      'ServiceNow Service Catalog Training',
      'ServiceNow Integration Training',
      'ServiceNow REST API Training',
      'ServiceNow ITOM Training',
    ],
    topics: ['JavaScript and platform scripting', 'Business Rules and Script Includes', 'REST and IntegrationHub', 'UI Builder and application workflows'],
    snapshot: [
      { title: 'JavaScript foundations', topics: 'Functions, conditions, loops, arrays, objects and regular expressions' },
      { title: 'Client-side scripting', topics: 'Client Scripts, UI Policies, Data Policies and g_form APIs' },
      { title: 'Server-side development', topics: 'GlideRecord, GlideSystem, background and fix scripts' },
      { title: 'Reusable automation', topics: 'Business Rules, Script Includes, scheduled jobs and UI Actions' },
      { title: 'Apps and integrations', topics: 'Service Catalog, Flow Designer, REST, IntegrationHub and UI Builder' },
    ],
    metaTitle: 'ServiceNow Developer Training in Hyderabad | Rise Gen Technologies',
    metaDescription:
      'Explore ServiceNow Developer Training in Hyderabad or online, covering JavaScript, client and server scripting, Business Rules, Script Includes, REST, IntegrationHub and UI Builder.',
    intro: [
      'This ServiceNow Application Development Training covers JavaScript foundations, client-side scripting, server-side APIs, Business Rules and Script Includes.',
      'The supplied course outline also includes Service Catalog workflows, Flow Designer, REST API integrations, IntegrationHub, UI Builder and Now Assist topics, with hands-on exercises listed in the syllabus. Confirm current batch details and the exact course scope with Rise Gen Technologies.',
    ],
    whoShouldJoin: [
      'Learners building a foundation in ServiceNow application development',
      'ServiceNow users who want to understand platform scripting',
      'Administrators exploring automation and custom application topics',
      'Developers reviewing ServiceNow client, server and integration concepts',
    ],
    prerequisites: [
      'The course outline includes JavaScript foundations before ServiceNow scripting topics.',
      'Confirm any formal entry requirements with Rise Gen Technologies before enrolling.',
    ],
    syllabus: [
      {
        title: 'JavaScript foundations',
        topics: [
          'Strings, methods, functions and classes',
          'Conditions, loops and jump statements',
          'Arrays, regular expressions, objects and operators',
        ],
      },
      {
        title: 'ServiceNow scripting and policies',
        topics: [
          'When and how to script in ServiceNow',
          'Using the syntax editor',
          'Client-side and server-side scripting concepts',
          'UI Policies and Data Policies',
        ],
        handsOn: ['Write and test UI Policies and Data Policies'],
      },
      {
        title: 'Client-side scripting',
        topics: [
          'Client Script overview and script types',
          'onLoad, onSubmit, onChange and onCellEdit',
          'Client-side g_form and g_user APIs',
        ],
        handsOn: ['Write and test Client Scripts using g_form and g_user APIs'],
      },
      {
        title: 'Server-side scripting and platform APIs',
        topics: [
          'GlideRecord queries and encoded queries',
          'GlideAggregate and GlideDateTime APIs',
          'GlideSystem user, system and date/time methods',
          'Review query results and update records on another table',
        ],
        handsOn: ['Write and test background scripts and fix scripts with server-side APIs'],
      },
      {
        title: 'Business Rules and Script Includes',
        topics: [
          'Business Rule timing: before, after, async, display and before query',
          'Business Rule triggers and server-side global variables',
          'Script Include types and classless Script Includes',
          'Calling a Script Include from client-side code with GlideAjax',
        ],
        handsOn: ['Test Business Rules using current, previous and display objects'],
      },
      {
        title: 'Email scripts, scheduled jobs and UI Actions',
        topics: [
          'Email Scripts and using them in notifications',
          'Scheduled jobs and generating or distributing reports',
          'Creating records and running scripts on a schedule',
          'Client-side and server-side UI Actions',
          'Simple, dynamic and advanced reference qualifiers',
        ],
        handsOn: ['Write and test Email Scripts and scheduled jobs'],
      },
      {
        title: 'Service Catalog and workflow automation',
        topics: [
          'Catalog items, variables and record producers',
          'Creating flows and workflows for catalog items',
          'Comparing Workflow Editor and Flow Designer',
          'Building catalog pages and backend automation',
          'Testing and moving work between personal developer instances',
        ],
        handsOn: [
          'Create catalog items, flows and workflows',
          'Practice a Service Catalog capstone with multiple business catalog items',
        ],
      },
      {
        title: 'REST integrations and IntegrationHub',
        topics: [
          'Integration methods and REST fundamentals',
          'Authentication methods and inbound, outbound and bidirectional patterns',
          'IntegrationHub concepts, connections and endpoints',
          'Building integrations with Integration Flow Designer',
        ],
      },
      {
        title: 'UI Builder',
        topics: [
          'UI Builder overview and configuration',
          'Creating pages and variants',
          'Data visualization and data resources',
          'Working with UI Builder templates',
        ],
      },
      {
        title: 'Now Assist and generative AI topics',
        topics: [
          'Generative AI in ServiceNow and Now Assist essentials',
          'Now Assist products, skills and Skill Kit',
          'Generative AI Controller',
          'AI Search, Virtual Agent, security and governance',
        ],
      },
    ],
    toolsSkills: [
      'JavaScript fundamentals and ServiceNow client-side APIs',
      'GlideRecord, GlideSystem and server-side scripting concepts',
      'UI Policies, Data Policies, Business Rules and Script Includes',
      'Email Scripts, scheduled jobs, UI Actions and reference qualifiers',
      'Service Catalog, Flow Designer, REST, IntegrationHub and UI Builder',
    ],
    projects: [
      {
        title: 'ServiceNow scripting practice',
        description: 'Work through the syllabus exercises for UI and Data Policies, Client Scripts, server-side APIs, Business Rules and scheduled jobs.',
      },
      {
        title: 'Service Catalog workflow capstone',
        description: 'Build catalog items and connect them to flows or workflows using the Service Catalog exercises listed in the course outline.',
      },
      {
        title: 'REST and IntegrationHub practice',
        description: 'Review REST integration patterns, authentication, connections, endpoints and IntegrationHub flows from the supplied syllabus.',
      },
    ],
    modes: ['Online', 'Classroom'],
    batchInfo: siteSchedule.nextBatchLabel,
    faqs: [
      {
        q: 'What topics are covered in the ServiceNow Developer course?',
        a: 'The ServiceNow Developer Course outline covers JavaScript foundations, UI and Data Policies, Client Scripts, server-side APIs, Business Rules, Script Includes, Email Scripts, scheduled jobs, Service Catalog workflows, REST integrations, IntegrationHub, UI Builder and Now Assist topics.',
      },
      {
        q: 'Does the ServiceNow Developer syllabus include both client-side and server-side scripting?',
        a: 'Yes. Client-side topics include onLoad, onSubmit, onChange and onCellEdit scripts and the g_form and g_user APIs. Server-side topics include GlideRecord, GlideAggregate, GlideDateTime, GlideSystem, background scripts and fix scripts.',
      },
      {
        q: 'Which integration topics are included?',
        a: 'The syllabus lists REST integration, authentication methods, inbound, outbound and bidirectional integration patterns, plus IntegrationHub connections, endpoints and Integration Flow Designer.',
      },
      {
        q: 'Does the course cover UI Builder and Flow Designer?',
        a: 'Yes. The outline includes UI Builder pages, variants, data resources, visualization and templates. It also covers catalog-related flows and workflows and compares Flow Designer with Workflow Editor.',
      },
      {
        q: 'What hands-on exercises are listed in the ServiceNow Developer syllabus?',
        a: 'Listed exercises include writing and testing UI and Data Policies, Client Scripts, background and fix scripts, Business Rules, Email Scripts and scheduled jobs, along with Service Catalog items, flows and workflows.',
      },
      {
        q: 'Does the syllabus include ServiceNow Flow Designer Training and ServiceNow Service Catalog Training topics?',
        a: 'Yes. The outline includes creating catalog items, flows and workflows, comparing Flow Designer with Workflow Editor, and practicing a Service Catalog capstone. Confirm the exact hands-on scope for your batch.',
      },
      {
        q: 'Does this course cover ServiceNow REST API Training and ServiceNow Integration Training?',
        a: 'The developer syllabus includes REST fundamentals, authentication, inbound, outbound and bidirectional integration patterns, plus IntegrationHub connections, endpoints and Integration Flow Designer.',
      },
      {
        q: 'Is this ServiceNow Admin Training, ServiceNow Administrator Training or a ServiceNow System Administrator Course?',
        a: 'No. This page describes the ServiceNow Developer Course and application development syllabus. Administrator training is a different learning goal. Confirm the separate Admin course scope with the training team.',
      },
      {
        q: 'Does ServiceNow ITOM Training form part of this Developer syllabus?',
        a: 'No. The listed Developer syllabus covers application development and integrations; it does not specify ServiceNow ITOM Training. Confirm ITOM course availability and scope with the training team.',
      },
    ],
    relatedSlugs: [
      'servicenow-admin-training',
      'servicenow-scripting-training',
      'servicenow-itsm-training',
    ],
  },
  {
    slug: 'servicenow-scripting-training',
    shortName: 'Scripting',
    fullName: 'ServiceNow Platform Scripting',
    cardSubtitle: courseCardContent.Scripting.subtitle,
    cardDescription: courseCardContent.Scripting.description,
    cardCertification: courseCardContent.Scripting.certification,
    certification: 'Certification scope to confirm',
    primaryKeyword: 'ServiceNow Scripting Training',
    keywordVariants: [
      'ServiceNow Scripting from Basic to Advanced',
      'ServiceNow Scripting Online Training',
      'ServiceNow Scripting Training in Hyderabad',
      'ServiceNow JavaScript Training',
      'ServiceNow Client Script Training',
      'ServiceNow Business Rules Training',
      'ServiceNow Script Includes Training',
      'ServiceNow GlideRecord Training',
      'Advanced ServiceNow Scripting',
      'ServiceNow GlideAjax Training',
      'ServiceNow Developer Training',
    ],
    topics: [
      'JavaScript foundations and ServiceNow scripting concepts',
      'Client Scripts, g_form and g_user',
      'GlideRecord, GlideAggregate and GlideSystem',
      'Business Rules, Script Includes and GlideAjax',
    ],
    snapshot: [
      { title: 'JavaScript basics', topics: 'String methods, classes, functions, conditions, loops, arrays and objects' },
      { title: 'Client scripts', topics: 'onLoad, onSubmit, onChange, onCellEdit, g_form and g_user' },
      { title: 'Server-side APIs', topics: 'GlideRecord, GlideAggregate, GlideDateTime and GlideSystem' },
      { title: 'Reusable scripting', topics: 'Business Rules, Script Includes, current, previous and display objects' },
      { title: 'Platform automation', topics: 'GlideAjax, Email Scripts, scheduled jobs, UI Actions and reference qualifiers' },
    ],
    metaTitle: 'ServiceNow Scripting Training in Hyderabad | Rise Gen Technologies',
    metaDescription:
      'ServiceNow Scripting Training in Hyderabad and online: JavaScript, Client Scripts, Business Rules, Script Includes, GlideRecord, GlideAjax and scheduled jobs.',
    intro: [
      'Learn ServiceNow Scripting from Basic to Advanced with a course outline that begins with JavaScript and progresses into client-side and server-side platform scripting.',
      'Topics include Client Scripts, GlideRecord and related APIs, Business Rules, Script Includes, GlideAjax, Email Scripts, scheduled jobs and UI Actions. Review the syllabus for the listed exercises and confirm current batch details with Rise Gen Technologies.',
    ],
    whoShouldJoin: [
      'Learners starting with JavaScript and ServiceNow platform scripting',
      'ServiceNow users who want to understand Client Scripts and form APIs',
      'Administrators exploring Business Rules and server-side APIs',
      'Developers reviewing reusable scripting and GlideAjax concepts',
    ],
    prerequisites: [
      'The syllabus starts with JavaScript foundations and then introduces ServiceNow scripting.',
      'Confirm any formal entry requirements with Rise Gen Technologies before enrolling.',
    ],
    syllabus: [
      {
        title: 'JavaScript foundations',
        topics: [
          'String methods, classes and functions',
          'Conditions, loops and jump statements',
          'Arrays, regular expressions, objects and operators',
        ],
      },
      {
        title: 'ServiceNow scripting concepts and policies',
        topics: [
          'Introduction to ServiceNow scripting',
          'When to script and how to use the syntax editor',
          'Client-side versus server-side scripting',
          'UI Policies and Data Policies',
        ],
      },
      {
        title: 'Client-side scripting',
        topics: [
          'Client Script overview',
          'onLoad, onSubmit, onChange and onCellEdit scripts',
          'Client-side g_form and g_user APIs',
        ],
        handsOn: [
          'Write and test Client Scripts',
          'Write and test scripts using g_form and g_user APIs',
        ],
      },
      {
        title: 'Server-side scripting and GlideRecord',
        topics: [
          'Introduction to the GlideRecord API and query steps',
          'GlideAggregate and GlideDateTime APIs',
          'GlideSystem user, system, date and time methods',
        ],
        handsOn: [
          'Write and test background scripts and fix scripts with server-side APIs',
        ],
      },
      {
        title: 'Business Rules, Script Includes and GlideAjax',
        topics: [
          'Business Rule execution: before query, display, before, after and async',
          'Business Rule triggers and server-side global variables',
          'Script Include types and classless Script Includes',
          'Calling a Script Include from client-side code using GlideAjax',
        ],
        handsOn: [
          'Write and test Business Rules using current, previous and display objects',
        ],
      },
      {
        title: 'Email Scripts, scheduled jobs and UI Actions',
        topics: [
          'Email Scripts and using them in notifications',
          'Scheduled jobs and running scripts on a schedule',
          'Client-side and server-side UI Actions',
          'Simple, dynamic and advanced reference qualifiers',
        ],
        handsOn: ['Write and test Email Scripts and scheduled jobs'],
      },
    ],
    toolsSkills: [
      'JavaScript foundations for ServiceNow scripting',
      'Client Scripts, g_form, g_user, UI Policies and Data Policies',
      'GlideRecord, GlideAggregate, GlideDateTime and GlideSystem APIs',
      'Business Rules, Script Includes and GlideAjax',
      'Email Scripts, scheduled jobs, UI Actions and reference qualifiers',
    ],
    projects: [
      {
        title: 'Client scripting practice',
        description: 'Complete the listed Client Script exercises using form events and the g_form and g_user APIs.',
      },
      {
        title: 'Server-side scripting practice',
        description: 'Practice background and fix scripts with GlideRecord and other server-side APIs from the course outline.',
      },
      {
        title: 'Business Rules and automation practice',
        description: 'Work through the listed Business Rule, Email Script and scheduled job exercises, including current, previous and display objects.',
      },
    ],
    modes: ['Online', 'Classroom'],
    batchInfo: siteSchedule.nextBatchLabel,
    faqs: [
      {
        q: 'What does the ServiceNow Scripting Training syllabus cover?',
        a: 'The outline starts with JavaScript foundations and covers ServiceNow scripting concepts, UI and Data Policies, Client Scripts, server-side APIs, Business Rules, Script Includes, GlideAjax, Email Scripts, scheduled jobs, UI Actions and reference qualifiers.',
      },
      {
        q: 'Is this ServiceNow Scripting from Basic to Advanced?',
        a: 'The syllabus begins with JavaScript basics and progresses to client-side and server-side scripting, Business Rules, Script Includes and GlideAjax. Review the module list to see the specific scope; ask the training team about depth and practice time.',
      },
      {
        q: 'Does the course include ServiceNow JavaScript Training and ServiceNow Client Script Training?',
        a: 'Yes. JavaScript foundations come first, followed by Client Script events including onLoad, onSubmit, onChange and onCellEdit, plus the g_form and g_user APIs.',
      },
      {
        q: 'Does the syllabus include ServiceNow Business Rules Training and ServiceNow Script Includes Training?',
        a: 'Yes. The outline includes Business Rule timing and triggers, Script Include types and classless Script Includes, and calling a Script Include from client-side code with GlideAjax.',
      },
      {
        q: 'What is covered in ServiceNow GlideRecord Training?',
        a: 'The server-side module introduces the GlideRecord API and query steps, then covers GlideAggregate, GlideDateTime and GlideSystem methods. The listed hands-on work includes background and fix scripts.',
      },
      {
        q: 'What does Advanced ServiceNow Scripting mean in this course?',
        a: 'The later syllabus modules cover Business Rules, Script Includes, GlideAjax, Email Scripts, scheduled jobs, UI Actions and reference qualifiers. Confirm the level of depth and exercises with the training team.',
      },
      {
        q: 'Does the course include ServiceNow GlideAjax Training?',
        a: 'The syllabus includes calling a Script Include from client-side code using GlideAjax. It also covers Script Include types and the related Business Rule topics.',
      },
      {
        q: 'Does the scripting course replace full ServiceNow Developer Training?',
        a: 'No. This course focuses on scripting topics. The broader ServiceNow Developer Training page covers additional application development areas such as Service Catalog workflows, integrations and UI Builder.',
      },
      {
        q: 'Is ServiceNow Scripting Online Training available in Hyderabad?',
        a: 'The page lists online and classroom learning modes for Hyderabad. Contact Rise Gen Technologies to confirm the current delivery format, timetable and batch availability.',
      },
      {
        q: 'Does this course guarantee a developer certification?',
        a: 'No certification or exam outcome is promised on this page. Contact Rise Gen Technologies to confirm whether any certification guidance is available for a particular batch.',
      },
    ],
    relatedSlugs: [
      'servicenow-developer-training',
      'servicenow-admin-training',
      'servicenow-itsm-training',
    ],
  },
  {
    slug: 'servicenow-itom-training',
    shortName: 'ITOM',
    fullName: 'IT Operations Management',
    cardSubtitle: courseCardContent.ITOM.subtitle,
    cardDescription: courseCardContent.ITOM.description,
    cardCertification: courseCardContent.ITOM.certification,
    certification: 'Exam coverage listed; certification support to confirm',
    primaryKeyword: 'ServiceNow ITOM Training',
    keywordVariants: [
      'ServiceNow ITOM real-time training Ameerpet',
      'ServiceNow ITOM coaching HITEC City',
      'ServiceNow ITOM coaching Gachibowli',
      'ServiceNow ITOM online training Hyderabad with lab access',
      'Best ServiceNow ITOM trainer Hyderabad demo class',
      'ServiceNow ITOM placement assistance Hyderabad',
    ],
    topics: [
      'ITOM architecture, CMDB, CSDM and MID Server management',
      'Discovery, credentials, patterns and CMDB troubleshooting',
      'Service Mapping and application topology',
      'Event Management, alert correlation, AIOps and remediation',
      'Cloud discovery, governance and orchestration',
    ],
    snapshot: [
      { title: 'ITOM foundations', topics: 'ITOM suite, CMDB, CSDM, IRE and MID Server architecture' },
      { title: 'Discovery', topics: 'Horizontal Discovery, credentials, schedules, patterns and ACC' },
      { title: 'Service Mapping', topics: 'Entry points, top-down mapping, topology and pattern maintenance' },
      { title: 'Event Management', topics: 'Connectors, event normalization, alert binding and correlation' },
      { title: 'Cloud and automation', topics: 'AWS, Azure, GCP, runbooks, IntegrationHub and remediation' },
    ],
    metaTitle: 'ServiceNow ITOM Training in Hyderabad | Rise Gen Technologies',
    metaDescription:
      'Explore ServiceNow ITOM Training in Hyderabad: Discovery, Service Mapping, Event Management, CMDB, MID Servers, cloud governance and automation topics.',
    intro: [
      'Explore ServiceNow IT Operations Management across ITOM foundations, Discovery, Service Mapping, Event Management, cloud governance and automation.',
      'The proposed course outline includes CMDB and CSDM, MID Server management, Discovery patterns, event integrations, alert correlation, cloud discovery and hands-on lab activities. Confirm current course delivery, lab access, locations and learner support with Rise Gen Technologies.',
    ],
    whoShouldJoin: [
      'ServiceNow professionals exploring ITOM product capabilities',
      'IT operations and infrastructure team members learning Discovery concepts',
      'Administrators working with CMDB data and service context',
      'Technical learners interested in monitoring integrations and service mapping',
    ],
    prerequisites: [
      'The outline introduces ITOM and CMDB foundations before Discovery, Service Mapping and Event Management.',
      'Prior platform or infrastructure experience may be useful; confirm formal prerequisites with Rise Gen Technologies.',
    ],
    syllabus: [
      {
        title: 'ITOM foundations and architecture',
        topics: [
          'ITOM product suite overview, ITIL/ITSM alignment and business benefits',
          'Configuration Items, relationships and class hierarchies',
          'Common Service Data Model architecture',
          'Identification and Reconciliation Engine rules',
          'MID Server architecture, requirements and Windows/Linux installation',
          'MID Server security, credentials, encryption and clustering',
          'IP range configuration and connection parameters',
        ],
        handsOn: [
          'Configure MID Servers on local or cloud virtual machines',
          'Review IP ranges and MID Server connection settings',
        ],
      },
      {
        title: 'ServiceNow Discovery and ITOM Visibility',
        topics: [
          'Horizontal Discovery workflow: port scan, classification, identification and exploration',
          'SNMP, WMI, SSH and VMware credential setup',
          'Discovery schedules, IP ranges and behaviors',
          'Pre-built patterns, Pattern Designer and custom patterns',
          'Probes, Sensors, and WMI/SNMP queries',
          'Agent Client Collector deployment and configuration',
          'CI Class Manager, dependency views and CMDB reconciliation',
          'Troubleshooting duplicate records, identification errors and missing CIs',
        ],
        handsOn: [
          'Configure Discovery credentials and schedules in a practice instance',
          'Review Discovery results and investigate CI identification issues',
        ],
      },
      {
        title: 'Service Mapping and top-down discovery',
        topics: [
          'Service Mapping setup and prerequisites',
          'Defining entry points using URLs, ports and hostnames',
          'Configuring application entry points and mapping',
          'Running top-down mapping jobs and analyzing topology maps',
          'Modifying patterns for multi-tier applications',
          'CI relationships and business service views',
          'Maintaining entry points and troubleshooting mapping errors',
        ],
        handsOn: [
          'Configure an application entry point and review its mapped topology',
          'Investigate mapping errors and CI relationship results',
        ],
      },
      {
        title: 'Event Management and ITOM Health',
        topics: [
          'Event sources and monitoring integrations such as SolarWinds, Dynatrace, Datadog and Nagios',
          'Pull connectors using REST/SOAP APIs, push targets and MID Server event collectors',
          'Event rules, thresholds, normalization and field mapping',
          'Binding alerts to CMDB Configuration Items',
          'Alert correlation, aggregation and flapping prevention',
          'Alert Management Rules for generating Incidents or Tasks',
          'Flow Designer and IntegrationHub subflow triggers for automated recovery',
          'Operational Intelligence, metric exploration and anomaly detection',
        ],
        handsOn: [
          'Simulate event ingestion and review alert processing',
          'Configure an exercise for automated Incident generation',
        ],
      },
      {
        title: 'Cloud discovery, governance and automation',
        topics: [
          'Connecting AWS, Microsoft Azure and GCP service accounts',
          'Cloud resource discovery for virtual machines, storage, databases and networks',
          'Cloud governance and provisioning concepts',
          'Runbook Automation concepts',
          'Automating user provisioning, password resets and service restarts',
          'IntegrationHub spokes for ITOM automation',
        ],
        handsOn: [
          'Review cloud account connection and discovery workflows',
          'Explore an ITOM automation exercise using runbook or IntegrationHub concepts',
        ],
      },
      {
        title: 'Exam topics and hands-on projects',
        topics: [
          'Outline lists exam coverage for CIS-Discovery, CIS-Service Mapping and CIS-Event Management',
          'End-to-end ITOM setup on a Personal Developer Instance',
          'MID Server configuration on local or cloud virtual machines',
          'Event ingestion simulation and automated Incident generation',
        ],
        handsOn: [
          'Complete an end-to-end ITOM lab flow on a practice instance, subject to environment availability',
          'Review exam topic coverage; confirm any formal certification preparation or exam support with the training team',
        ],
      },
    ],
    toolsSkills: [
      'CMDB, CSDM, CI relationships and IRE concepts',
      'MID Server setup, credentials and Discovery configuration',
      'Discovery patterns, Service Mapping and topology troubleshooting',
      'Event integrations, alert normalization, correlation and ITOM Health',
      'Cloud discovery, Flow Designer, IntegrationHub and runbook concepts',
    ],
    projects: [
      {
        title: 'Discovery and CMDB practice',
        description: 'Explore Discovery configuration and results, then review CI identification, reconciliation and common data issues.',
      },
      {
        title: 'Service Mapping exercise',
        description: 'Use an application entry point to review top-down mapping, topology and related CI relationships.',
      },
      {
        title: 'Event-to-Incident exercise',
        description: 'Simulate event ingestion, review alert processing and explore an automated Incident-generation workflow.',
      },
    ],
    modes: ['Online', 'Classroom'],
    batchInfo: siteSchedule.nextBatchLabel,
    faqs: [
      {
        q: 'What does the ServiceNow ITOM Training syllabus cover?',
        a: 'The proposed outline covers ITOM architecture, CMDB and CSDM, MID Servers, Discovery, Service Mapping, Event Management, cloud discovery, governance, automation and hands-on projects.',
      },
      {
        q: 'How can I check availability for ServiceNow ITOM real-time training in Ameerpet?',
        a: 'Ameerpet is one of the location phrases learners ask about. Contact Rise Gen Technologies to confirm the current classroom venue, schedule and whether the available sessions include practical labs.',
      },
      {
        q: 'Is ServiceNow ITOM coaching in HITEC City or Gachibowli available?',
        a: 'The current classroom venue is not confirmed on this page. Contact the training team to ask whether sessions are available in HITEC City or Gachibowli, or at another Hyderabad location.',
      },
      {
        q: 'Does ServiceNow ITOM online training in Hyderabad include lab access?',
        a: 'The proposed outline includes hands-on exercises using a Personal Developer Instance and MID Server environments. Ask the training team to confirm the lab environment, access method and availability for your batch.',
      },
      {
        q: 'Can I attend a demo class with a ServiceNow ITOM trainer in Hyderabad?',
        a: 'Contact Rise Gen Technologies to confirm whether a demo class is currently available, along with trainer details and the schedule. This page does not claim a specific trainer ranking.',
      },
      {
        q: 'Is ServiceNow ITOM placement assistance in Hyderabad available?',
        a: 'Placement assistance details are not confirmed on this page. Ask the training team what learner or career support is currently offered; no placement or job outcome is guaranteed.',
      },
      {
        q: 'Which certification exams are mentioned in the ITOM outline?',
        a: 'The outline lists topic coverage for CIS-Discovery, CIS-Service Mapping and CIS-Event Management. Confirm whether formal exam preparation is included; course attendance does not guarantee certification.',
      },
      {
        q: 'What hands-on projects are listed for this ITOM course?',
        a: 'The proposed projects include Discovery and CMDB practice, Service Mapping topology exercises, MID Server configuration, event ingestion simulation and an automated Incident-generation workflow. Confirm lab access and the exact batch activities before enrolling.',
      },
    ],
    relatedSlugs: [
      'servicenow-admin-training',
      'servicenow-developer-training',
      'servicenow-itsm-training',
    ],
  },
]

export function getCoursePageData(slug: string) {
  return courses.find((course) => course.slug === slug)
}

export function coursePagePath(slug: string) {
  return slug === 'servicenow-itsm-training' || slug === 'servicenow-admin-training' || slug === 'servicenow-developer-training' || slug === 'servicenow-scripting-training' || slug === 'servicenow-itom-training' || slug === 'servicenow-cmdb-training' || slug === 'servicenow-csm-training' || slug === 'servicenow-hrsd-training' || slug === 'servicenow-grc-training' || slug === 'servicenow-now-assist-training' ? `/${slug}` : `/courses/${slug}`
}

const syllabusSlugs: Record<string, string> = {
  'servicenow-itsm-training': 'servicenow-itsm-training-in-hyderabad',
  'servicenow-admin-training': 'servicenow-admin-training-in-hyderabad',
  'servicenow-developer-training': 'servicenow-developer-training-in-hyderabad',
  'servicenow-scripting-training': 'servicenow-scripting-training-in-hyderabad',
  'servicenow-itom-training': 'servicenow-itom-training-in-hyderabad',
  'servicenow-cmdb-training': 'servicenow-cmdb-training-in-hyderabad',
  'servicenow-csm-training': 'servicenow-csm-training-in-hyderabad',
  'servicenow-hrsd-training': 'servicenow-hrsd-training-in-hyderabad',
  'servicenow-grc-training': 'servicenow-grc-training-in-hyderabad',
  'servicenow-now-assist-training': 'servicenow-now-assist-training-in-hyderabad',
}

export function syllabusPath(slug: string) {
  return `/syllabus/${syllabusSlugs[slug] ?? slug}`
}

export function getCourseBySyllabusSlug(syllabusSlug: string) {
  return courses.find((course) => (syllabusSlugs[course.slug] ?? course.slug) === syllabusSlug)
}
