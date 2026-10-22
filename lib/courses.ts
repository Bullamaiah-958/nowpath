import { courses as coursePages, getCoursePageData } from '@/data/courses'

export type CourseModule = { title: string; topics: string[] }
export type Faq = { q: string; a: string }

export type Course = {
  slug: string
  code: string
  name: string
  fullName: string
  cardSubtitle: string
  category: 'Modules' | 'Dev' | 'System'
  tagline: string
  cardCertification: string
  summary: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  duration?: string
  level: string
  certification: string
  audience: string[]
  outcomes: string[]
  modules: CourseModule[]
  projects: { title: string; description: string }[]
  faqs: Faq[]
}

export const courses: Course[] = coursePages.map((course) => ({
  slug: course.slug,
  code: course.shortName.toUpperCase(),
  name: `ServiceNow ${course.shortName} Training`,
  fullName: course.fullName,
  cardSubtitle: course.cardSubtitle,
  category:
    course.shortName === 'Admin'
      ? 'System'
      : course.shortName === 'Developer' || course.shortName === 'Scripting'
        ? 'Dev'
        : 'Modules',
  tagline: course.cardDescription,
  cardCertification: course.cardCertification,
  summary: course.intro.join(' '),
  metaTitle: course.metaTitle,
  metaDescription: course.metaDescription,
  keywords: [course.primaryKeyword, ...course.keywordVariants],
  duration: course.duration,
  level: course.shortName === 'ITSM' ? 'Beginner to Intermediate' : 'TODO: confirm course level',
  certification: course.certification ?? '',
  audience: course.whoShouldJoin,
  outcomes: course.toolsSkills,
  modules: course.syllabus,
  projects: course.projects,
  faqs: course.faqs,
}))

export function getCourse(slug: string) {
  const course = getCoursePageData(slug)
  return course ? courses.find((item) => item.slug === course.slug) : undefined
}

export function courseFaqs(course: Course): Faq[] {
  return course.faqs
}
