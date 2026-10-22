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
    slug: 'servicenow-training-in-ameerpet',
    area: 'Ameerpet',
    keyword: 'ServiceNow Training in Ameerpet',
    metaTitle: 'ServiceNow Training in Ameerpet, Hyderabad | Classroom & Weekend Batches',
    metaDescription:
      'ServiceNow Training in Ameerpet, Hyderabad. Explore ITSM, Admin, Developer, Scripting, CSM, HRSD and GRC course information and classroom options.',
    intro:
      'Our main ServiceNow Training Center in Hyderabad is in Ameerpet — the city’s best-known IT training hub. Students attend weekday and weekend ServiceNow classes in Hyderabad here, with dedicated lab systems and in-person mentoring.',
    commute: ['2 minutes from Ameerpet Metro (Red & Blue line interchange)', 'Frequent TSRTC buses from Kukatpally, Secunderabad and Mehdipatnam', 'Paid parking available nearby'],
    nearby: ['SR Nagar', 'Punjagutta', 'Begumpet', 'Yousufguda'],
  },
  {
    slug: 'servicenow-training-in-kukatpally',
    area: 'Kukatpally',
    keyword: 'ServiceNow Training in Kukatpally',
    metaTitle: 'ServiceNow Training in Kukatpally, Hyderabad | ServiceNow Classes',
    metaDescription:
      'Looking for ServiceNow Training in Kukatpally? Join our Ameerpet classroom (15 min by metro) or live online batches. ITSM, Admin, Developer and Scripting courses.',
    intro:
      'Students from Kukatpally, KPHB and Miyapur reach our Ameerpet ServiceNow Institute in Hyderabad in about 15 minutes on the Red Line metro — or join the identical live online batch from home.',
    commute: ['Kukatpally / KPHB Metro to Ameerpet: ~15 minutes', 'Evening and weekend batches suited to working professionals', 'Switch between classroom and online any week'],
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
      'Most of our working-professional students are employed around HITEC City. Our evening and weekend ServiceNow Training batches are planned around IT shift timings, with the HITEC City–Ameerpet Blue Line making the commute easy.',
    commute: ['HITEC City Metro to Ameerpet: ~18 minutes', 'Late-evening batches from 7:30 PM IST', 'Weekend intensive batches for ServiceNow Developer Training'],
    nearby: ['Madhapur', 'Kondapur', 'Gachibowli', 'Raidurg'],
  },
  {
    slug: 'servicenow-training-in-madhapur',
    area: 'Madhapur',
    keyword: 'ServiceNow Training in Madhapur',
    metaTitle: 'ServiceNow Training in Madhapur, Hyderabad | ServiceNow Courses',
    metaDescription:
      'ServiceNow Training in Madhapur and nearby IT corridors. Classroom training at Ameerpet plus live online ServiceNow courses: ITSM, CSM, HRSD, GRC, Admin and Scripting.',
    intro:
      'Madhapur professionals choose our ServiceNow courses for flexible timings and project-driven teaching. Attend in person at Ameerpet or join live online — both modes share the same trainers and lab instances.',
    commute: ['Madhapur Metro to Ameerpet: ~15 minutes', 'Hybrid option: online on weekdays, classroom on weekends', 'Corporate batches available for Madhapur teams'],
    nearby: ['Jubilee Hills', 'Kondapur', 'Durgam Cheruvu', 'HITEC City'],
  },
]

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug)
}
