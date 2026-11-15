import type { Metadata } from 'next'
import { CourseLandingPage } from '@/components/course-landing-page'
import { JsonLd } from '@/components/json-ld'
import { developerLanding } from '@/data/course-landing'
import { getCoursePageData, type CoursePageData } from '@/data/courses'
import { coursePageSchema } from '@/lib/schema'
import { absoluteUrl, site } from '@/lib/site'

const slug = 'servicenow-developer-training'

function requireCourseData(): CoursePageData {
  const course = getCoursePageData(slug)
  if (!course) throw new Error(`Missing course page data for ${slug}`)
  return course
}

const course = requireCourseData()

export const metadata: Metadata = {
  title: { absolute: course.metaTitle },
  description: course.metaDescription,
  keywords: [course.primaryKeyword, ...course.keywordVariants],
  alternates: { canonical: `/${slug}` },
  openGraph: {
    type: 'website',
    title: course.metaTitle,
    description: course.metaDescription,
    url: absoluteUrl(`/${slug}`),
    siteName: site.name,
    locale: 'en_IN',
    images: [
      {
        url: '/images/classroom.png',
        width: 1536,
        height: 1024,
        alt: 'ServiceNow application development classroom training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: course.metaTitle,
    description: course.metaDescription,
    images: ['/images/classroom.png'],
  },
  robots: { index: true, follow: true },
}

export default function ServiceNowDeveloperTrainingPage() {
  return (
    <>
      <JsonLd data={coursePageSchema(course)} />
      <CourseLandingPage course={course} content={developerLanding} />
    </>
  )
}
