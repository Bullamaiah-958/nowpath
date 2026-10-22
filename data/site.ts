const configuredNextBatchLabel = process.env.NEXT_PUBLIC_NEXT_BATCH_LABEL?.trim()

export const siteSchedule = {
  nextBatchLabel: configuredNextBatchLabel || 'New batches starting soon',
} as const

export const heroStats = [
  { value: '2.5–3 months', label: 'Core ServiceNow course, from fundamentals to a real-time project' },
  { value: '5 days a week', label: 'Classes Monday to Friday with daily practicals and assigned tasks' },
  { value: 'Every weekend', label: 'Written tests and mock interviews to check your progress weekly' },
  { value: '3 hrs/week', label: 'Spoken English and interview preparation to build your confidence' },
] as const

export const whyNowPathCards = [
  {
    label: 'WEEKLY PROGRESS',
    title: 'Every student tracked',
    body: 'Weekly tests decide when you move to the next topic, so nobody is left behind.',
  },
  {
    label: 'HANDS-ON PRACTICE',
    title: 'Practice on your own instance',
    body: 'Work on your own ServiceNow developer instance and submit tasks every day.',
  },
  {
    label: 'CLASSROOM TRAINING',
    title: 'Hyderabad classroom training',
    body: 'Attend classroom batches in Hyderabad for 2.5 to 3 months with daily practicals.',
  },
  {
    label: 'CLEAR INSTRUCTION',
    title: 'Taught in simple language',
    body: 'Concepts are explained step by step in Telugu and English, so freshers can follow easily.',
  },
  {
    label: 'FOCUSED LEARNING',
    title: 'Accountability',
    body: 'Minimum 90% attendance and weekly tests keep every batch focused and on schedule.',
  },
  {
    label: 'CLASS TIMINGS',
    title: 'Fixed weekday timings',
    body: 'Class and practical sessions run Monday to Friday, 10:00 AM to 7:00 PM.',
  },
] as const

// TODO: Confirm Telugu and English instruction before publishing.
// TODO: Confirm attendance and weekly tests are used to keep each batch focused before publishing.
export const careerSupportItems = [
  {
    title: 'Capstone Project & Code Review',
    body: 'Build an end-to-end ServiceNow module on your own instance, then get your configuration, flows and custom scripts reviewed by your trainer with clear feedback.',
  },
  {
    title: 'Resume Building & Keyword Alignment',
    body: 'Get a resume tailored for ServiceNow admin and developer roles, highlighting your instance projects, achievements and the right ATS keywords for recruiters.',
  },
  {
    title: 'Weekend Mock Interviews',
    body: 'Practice technical and HR interview rounds every weekend, with feedback covering scripting, ACLs, Flow Designer, integrations and how you explain your projects.',
  },
  {
    title: 'Spoken English & Communication',
    body: 'Join 3 hours of spoken English practice every week, so you can introduce yourself, explain your projects and answer interview questions clearly and confidently.',
  },
] as const

// TODO: Add trainer experience only after confirming exact years and field (for example, software development).
// TODO: Add placement or student statistics only after real results exist, including the year and student count.
export const roadmapSteps = [
  {
    number: '01',
    title: 'Learn',
    description: 'ServiceNow + JavaScript, 2 hrs daily',
    href: '/courses',
  },
  {
    number: '02',
    title: 'Build',
    description: 'Daily practicals and assigned tasks',
    href: '/courses/servicenow-developer-training',
  },
  {
    number: '03',
    title: 'Certify',
    description: 'Optional official certification training',
    href: '/courses/servicenow-admin-training',
  },
  {
    number: '04',
    title: 'Interview',
    description: 'Mock interviews every weekend',
    href: '/servicenow-interview-questions',
  },
  {
    number: '05',
    title: 'Get hired',
    description: 'Resume support and interview prep',
    href: '/servicenow-career-training',
  },
] as const
