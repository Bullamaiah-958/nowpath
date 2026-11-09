import type { Metadata } from 'next'
import { HomeHero } from '@/components/home/home-hero'
import { HomeCourses } from '@/components/home/home-courses'
import { HomeWhy } from '@/components/home/home-why'
import { HomePath } from '@/components/home/home-path'
import { HomeModes } from '@/components/home/home-modes'
import { HomeLocations } from '@/components/home/home-locations'
import { HomeBlog } from '@/components/home/home-blog'
import { HomeFaq } from '@/components/home/home-faq'
import { SectionNav } from '@/components/section-nav'
import { CtaBand } from '@/components/cta-band'
import { createPageMetadata } from '@/lib/seo'

const homeDescription =
  'ServiceNow training in Hyderabad with online and classroom courses, hands-on projects, weekend assessments and interview preparation at Rise Gen Technologies.'

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'ServiceNow Training in Hyderabad',
    description: homeDescription,
    canonicalPath: '/',
    image: {
      url: '/images/classroom.png',
      width: 1536,
      height: 1024,
      alt: 'Rise Gen Technologies ServiceNow Training Institute classroom training',
    },
  }),
  keywords: [
    'ServiceNow Training',
    'ServiceNow Training Institute',
    'ServiceNow Courses',
    'ServiceNow Online Training',
    'ServiceNow Offline Training',
    'ServiceNow Classroom Training',
    'ServiceNow Training in Hyderabad',
    'ServiceNow Training Institute in Hyderabad',
    'ServiceNow Online Training in Hyderabad',
    'ServiceNow Classroom Training in Hyderabad',
    'ServiceNow course with interview preparation',
    'ITSM',
    'CSM',
    'HRSD',
    'GRC',
  ],
}

const sections = [
  { id: 'courses', label: 'Courses' },
  { id: 'why', label: 'Why Rise Gen Tech' },
  { id: 'placement-support', label: 'Placement Support' },
  { id: 'modes', label: 'Online & classroom' },
  { id: 'locations', label: 'Industry Trust' },
  { id: 'resources', label: 'Resources' },
  { id: 'faq', label: 'FAQ' },
]

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <SectionNav items={sections} />
      <HomeCourses />
      <HomeWhy />
      <HomePath />
      <HomeModes />
      <HomeLocations />
      <HomeBlog />
      <HomeFaq />
      <CtaBand descriptionClassName="fs-lead" />
    </>
  )
}
