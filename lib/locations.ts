export type Location = {
  slug: string
  area: string
  keyword: string
  metaTitle: string
  metaDescription: string
  intro: string
  commute: string[]
  nearby: string[]
}

export const locations: Location[] = [
  {
    slug: 'servicenow-training-in-kukatpally',
    area: 'Kukatpally',
    keyword: 'ServiceNow Training in Kukatpally',
    metaTitle: 'ServiceNow Training in Kukatpally, Hyderabad | ServiceNow Classes',
    metaDescription:
      'Looking for ServiceNow Training in Kukatpally? Join our classroom training in Kukatpally or live online batches. ITSM, Admin, Developer and Scripting courses.',
    intro:
      'Our ServiceNow classroom centre is in Kukatpally, Hyderabad. Learners from Kukatpally, KPHB and nearby areas can choose weekday or weekend training, or join a live online batch.',
    commute: ['Classroom training in Kukatpally, Hyderabad', 'Live online classes are also available', 'Contact us for directions and current batch availability'],
    nearby: ['KPHB Colony', 'Miyapur', 'Moosapet', 'Nizampet'],
  },
  {
    slug: 'servicenow-training-near-hitec-city',
    area: 'HITEC City',
    keyword: 'ServiceNow Training near HITEC City',
    metaTitle: 'ServiceNow Training near HITEC City, Hyderabad | Weekend & Evening Batches',
    metaDescription:
      'ServiceNow Training near HITEC City for working professionals. Evening and weekend ServiceNow Developer, Admin and ITSM training in Hyderabad, online or classroom.',
    intro:
      'Most of our working-professional students are employed around HITEC City. Ask us about current ServiceNow training options, including online learning and classroom sessions in Kukatpally.',
    commute: ['Classroom training is available in Kukatpally, Hyderabad', 'Live online options for learners working near HITEC City', 'Contact us for current directions and batch availability'],
    nearby: ['Madhapur', 'Kondapur', 'Gachibowli', 'Raidurg'],
  },
  {
    slug: 'servicenow-training-in-madhapur',
    area: 'Madhapur',
    keyword: 'ServiceNow Training in Madhapur',
    metaTitle: 'ServiceNow Training in Madhapur, Hyderabad | ServiceNow Courses',
    metaDescription:
      'ServiceNow Training in Madhapur and nearby IT corridors. Classroom training in Kukatpally plus live online ServiceNow courses: ITSM, CSM, HRSD, GRC, Admin and Scripting.',
    intro:
      'Madhapur professionals choose our ServiceNow courses for flexible timings and project-driven teaching. Attend in person at our Kukatpally centre or join live online — both modes share the same trainers and lab instances.',
    commute: ['Classroom training is available in Kukatpally, Hyderabad', 'Live online options for learners in Madhapur', 'Contact us for current directions and batch availability'],
    nearby: ['Jubilee Hills', 'Kondapur', 'Durgam Cheruvu', 'HITEC City'],
  },
]

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug)
}
