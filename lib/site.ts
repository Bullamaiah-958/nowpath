export const site = {
  name: 'Rise Gen Technologies',
  shortName: 'Rise Gen',
  tagline: 'ServiceNow Training Institute in Hyderabad',
  url: 'https://risegentech.com',
  description:
    'ServiceNow Training in Hyderabad at Rise Gen Technologies: online and classroom courses with hands-on projects, weekday classes, weekend tests and interview prep.',
  phone: '+91 97054 69697',
  phoneHref: 'tel:+919705469697',
  whatsappNumber: '919705469697',
  email: 'info@risegentech.com',
  address: {
    street: 'D No: 3-6-3/21, Flat No: 201, 2nd Floor, Vivekananda Nagar, Kukatpally',
    locality: 'Hyderabad',
    region: 'Telangana',
    postalCode: '500072',
    country: 'IN',
  },
  hours: 'Mon–Sat, 7:00 AM – 9:00 PM IST',
} as const

export const mainNav = [
  { label: 'Courses', href: '/courses' },
  { label: 'Careers', href: '/servicenow-career-training' },
  { label: 'Interview Q&A', href: '/servicenow-interview-questions' },
  { label: 'Resources', href: '/blog' },
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
