export const site = {
  name: 'NowPath Institute',
  shortName: 'NowPath',
  tagline: 'ServiceNow Training Institute in Hyderabad',
  // TODO: Replace with the production website URL before deployment.
  url: 'https://your-domain.example',
  description:
    'NowPath Institute is a ServiceNow Training Institute in Hyderabad offering ServiceNow online training, offline classroom training, ITSM, CSM, HRSD, GRC, Admin, Developer and Scripting courses with real-time projects and interview preparation.',
  phone: '+91 81218 16578',
  phoneHref: 'tel:+918121816578',
  whatsappNumber: '918121816578',
  email: 'hello@nowpathinstitute.com',
  address: {
    street: '3rd Floor, Aditya Enclave, Ameerpet',
    locality: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500016',
    country: 'IN',
  },
  hours: 'Mon–Sat, 7:00 AM – 9:00 PM IST',
} as const

export const mainNav = [
  { label: 'Courses', href: '/courses' },
  { label: 'Careers', href: '/servicenow-career-training' },
  { label: 'Interview Q&A', href: '/servicenow-interview-questions' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
] as const

export const trainingModes = [
  { label: 'Online Training', href: '/servicenow-online-training' },
  { label: 'Classroom Training', href: '/servicenow-classroom-training-hyderabad' },
  { label: 'Hybrid / Weekend Batches', href: '/servicenow-weekend-training-hyderabad' },
] as const

export function whatsappLink(message = 'Hi, I would like to know more about ServiceNow training.') {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function absoluteUrl(path = '/') {
  return `${site.url}${path === '/' ? '' : path}`
}
