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

export const metadata: Metadata = {
  title: { absolute: 'ServiceNow Training in Hyderabad | Online & Classroom' },
  description:
    'ServiceNow Training in Hyderabad with online and classroom courses in ITSM, CSM, HRSD and GRC. Weekday classes, daily practicals, weekend tests and interview preparation.',
  keywords: [
    'ServiceNow Training in Hyderabad',
    'ServiceNow Online Training',
    'ServiceNow Classroom Training',
    'ServiceNow course with interview preparation',
    'ITSM',
    'CSM',
    'HRSD',
    'GRC',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'ServiceNow Training in Hyderabad | Online & Classroom',
    description:
      'ServiceNow Training in Hyderabad with online and classroom courses in ITSM, CSM, HRSD and GRC. Weekday classes, daily practicals, weekend tests and interview preparation.',
    url: '/',
    siteName: 'NowPath Institute',
    locale: 'en_IN',
    images: [{
      url: '/images/classroom.png',
      width: 1536,
      height: 1024,
      alt: 'NowPath ServiceNow Training Institute classroom training',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ServiceNow Training in Hyderabad | Online & Classroom',
    description:
      'ServiceNow Training in Hyderabad with online and classroom courses in ITSM, CSM, HRSD and GRC. Weekday classes, daily practicals, weekend tests and interview preparation.',
    images: ['/images/classroom.png'],
  },
  robots: { index: true, follow: true },
}

const sections = [
  { id: 'courses', label: 'Courses' },
  { id: 'why', label: 'Why NowPath' },
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
