import { siteSchedule } from '@/data/site'

export type CourseFaq = { q: string; a: string }
export type CourseModule = { title: string; topics: string[] }
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
    a: `TODO: verify delivery availability and batch details for this course before publishing. The training modes on this page are listed for the requested page structure and must be confirmed by NowPath. Add accurate details for online learning and classroom delivery in Hyderabad once scheduling and delivery have been approved.`,
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
    topics: `Review the ${fullName} course syllabus with NowPath.`,
  })),
  metaTitle: `ServiceNow ${shortName} Training in Hyderabad | NowPath`,
  metaDescription: `TODO: Write a verified description for ServiceNow ${shortName} Training in Hyderabad, including approved course topics, delivery modes and learner support.`,
  intro: [
    courseCardContent[shortName].description,
    `Review the ${fullName} syllabus and confirm current training details with NowPath.`,
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
    description: 'Learn how Incident, Problem, Change and Request workflows fit together in ServiceNow IT Service Management. The syllabus also covers Knowledge, CMDB, service levels and reporting.',
    certification: 'Aligned to CIS-ITSM',
  },
  CMDB: {
    subtitle: 'Configuration Management Database',
    description: 'Learn how the ServiceNow CMDB organizes configuration items and their relationships. The syllabus also covers data quality, identification, reconciliation and service context.',
    certification: 'Certification alignment varies',
  },
  CSM: {
    subtitle: 'Customer Service Management',
    description: 'Learn how customer cases, accounts, contacts and entitlements work together in ServiceNow Customer Service Management. The syllabus also covers the portal, knowledge and SLAs.',
    certification: 'Aligned to CIS-CSM',
  },
  HRSD: {
    subtitle: 'HR Service Delivery',
    description: 'Learn how HR cases, employee records and HR services are handled in ServiceNow HR Service Delivery. The syllabus also covers HR knowledge, Employee Center and onboarding journeys.',
    certification: 'Aligned to CIS-HR',
  },
  GRC: {
    subtitle: 'Governance, Risk, and Compliance',
    description: 'Learn how policies, controls, risks and audits are managed in ServiceNow Governance, Risk and Compliance. The syllabus also covers risk assessments, issues and compliance reporting.',
    certification: 'Aligned to CIS-RC',
  },
  Admin: {
    subtitle: 'System Administration',
    description: 'Learn to configure and manage a ServiceNow instance, from users, groups, tables and forms to ACLs. The syllabus also covers import sets, notifications, SLAs, reports and dashboards.',
    certification: 'Aligned to CSA',
  },
  Developer: {
    subtitle: 'Application Development',
    description: 'Learn to build and extend applications on the ServiceNow platform with scoped apps and scripting. The syllabus also covers Flow Designer, REST integration and App Engine Studio.',
    certification: 'Aligned to CAD',
  },
  Scripting: {
    subtitle: 'Platform Scripting',
    description: 'Learn ServiceNow scripting from basics to advanced, starting with JavaScript and client scripts. The syllabus also covers GlideRecord, business rules, script includes and scheduled jobs.',
    certification: 'Supports CAD',
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
    metaTitle: 'ServiceNow ITSM Training in Hyderabad | NowPath',
    metaDescription:
      'ServiceNow ITSM in Hyderabad or online: Incident, Problem, Change, CMDB and SLAs, real-time projects, certification prep and interview support.',
    intro: [
      'Learn how Incident, Problem, Change and Request workflows fit together in ServiceNow IT Service Management. The syllabus also covers Knowledge, CMDB, service levels and reporting.',
      'Work through practical configuration and project exercises, then review certification topics and interview scenarios. Confirm current batch dates and delivery availability with NowPath.',
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
        a: 'The syllabus covers Incident, Problem, Change and Request workflows, along with Service Catalog, Knowledge, CMDB, SLAs and reporting. Learners review how these platform areas relate to IT service management, complete practical configuration exercises and review certification topics. Confirm the current cohort syllabus with NowPath before enrolling, as module details may be updated.',
      },
      {
        q: 'Is this course suitable for beginners?',
        a: 'The foundations module introduces the platform, ITIL practices and core navigation before moving into ITSM workflows. Prior ServiceNow experience is not listed as a prerequisite for this course. A basic familiarity with IT support processes can be helpful, but learners should confirm the current entry guidance with NowPath if they have a specific background or learning need.',
      },
      {
        q: 'Can I take ServiceNow ITSM Online Training or classroom sessions?',
        a: 'The course is structured for online and classroom learning. Online Training and classroom delivery in Hyderabad are offered through separate information pages; current batch dates and availability can change. Contact NowPath to confirm the delivery mode, timetable, class format and any requirements for participating before choosing a batch.',
      },
      {
        q: 'How long is the course?',
        a: 'The existing course catalog lists a 45-day duration, but the timetable and total class schedule should be confirmed for the batch you plan to join. Ask NowPath whether the duration refers to calendar days, teaching days or the full batch period, and check the expected session frequency before enrolling.',
      },
      {
        q: 'What certification preparation is available for ServiceNow ITSM?',
        a: 'The current syllabus includes review of CIS-ITSM certification topics and interview scenarios. Check the latest exam requirements with the certification provider and contact NowPath to confirm which preparation materials, practice tests or other exam-related support are included in your batch.',
      },
      {
        q: 'What projects are included in the ServiceNow ITSM Course?',
        a: 'The project section lists workflow, service request and CMDB exercises as candidate topics based on the earlier course catalog. Their final scope and inclusion in a specific batch still need confirmation from NowPath. Ask for the current project brief, expected learner deliverables and whether the work is completed individually or as part of a guided class exercise.',
      },
    ],
    relatedSlugs: [
      'servicenow-cmdb-training',
      'servicenow-csm-training',
      'servicenow-admin-training',
      'servicenow-developer-training',
    ],
  },
  { ...todoCourse('CMDB', 'Configuration Management Database', 'servicenow-cmdb-training', [
    'servicenow-itsm-training',
    'servicenow-admin-training',
    'servicenow-developer-training',
  ]) },
  { ...todoCourse('CSM', 'Customer Service Management', 'servicenow-csm-training', [
    'servicenow-itsm-training',
    'servicenow-hrsd-training',
    'servicenow-admin-training',
  ]), certification: 'CIS – Customer Service Management' },
  { ...todoCourse('HRSD', 'HR Service Delivery', 'servicenow-hrsd-training', [
    'servicenow-csm-training',
    'servicenow-grc-training',
    'servicenow-admin-training',
  ]), certification: 'CIS – Human Resources' },
  { ...todoCourse('GRC', 'Governance, Risk, and Compliance', 'servicenow-grc-training', [
    'servicenow-hrsd-training',
    'servicenow-itsm-training',
    'servicenow-admin-training',
  ]), certification: 'CIS – Risk and Compliance' },
  { ...todoCourse('Admin', 'ServiceNow System Administration', 'servicenow-admin-training', [
    'servicenow-itsm-training',
    'servicenow-developer-training',
    'servicenow-scripting-training',
  ]), certification: 'CSA – Certified System Administrator' },
  { ...todoCourse('Developer', 'ServiceNow Application Development', 'servicenow-developer-training', [
    'servicenow-admin-training',
    'servicenow-scripting-training',
    'servicenow-itsm-training',
  ]), certification: 'CAD – Certified Application Developer' },
  { ...todoCourse('Scripting', 'ServiceNow Platform Scripting', 'servicenow-scripting-training', [
    'servicenow-developer-training',
    'servicenow-admin-training',
    'servicenow-itsm-training',
  ]), certification: 'Supports CAD – Certified Application Developer' },
]

export function getCoursePageData(slug: string) {
  return courses.find((course) => course.slug === slug)
}
