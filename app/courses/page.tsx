import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CtaBand } from '@/components/cta-band'
import { PageHero } from '@/components/page-hero'
import { Section, SectionHeading } from '@/components/section'
import { courses } from '@/data/courses'

export const metadata: Metadata = {
  title: { absolute: 'ServiceNow Courses in Hyderabad | NowPath' },
  description:
    'Browse NowPath ServiceNow courses in Hyderabad. Review each course page for its syllabus, training modes, prerequisites, project details and FAQs.',
  alternates: { canonical: '/courses' },
  robots: { index: true, follow: true },
}

export default function CoursesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Courses', href: '/courses' }]} />
      <PageHero
        eyebrow="ServiceNow Courses · Online & Classroom"
        title="Explore ServiceNow courses"
        description={
          <p>
            Browse the course pages for available syllabus information, learning requirements, projects and
            delivery details. Some course information is marked TODO and must be confirmed before publication.
          </p>
        }
      />
      <Section labelledBy="course-index-title">
        <SectionHeading
          id="course-index-title"
          eyebrow="Course catalog"
          title="Choose a ServiceNow course"
        />
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <li key={course.slug}>
              <article className="relative flex min-h-52 h-full flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-xl hover:shadow-brand/10">
                <p className="eyebrow text-brand-2">{course.shortName}</p>
                <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="text-foreground underline-offset-4 after:absolute after:inset-0 hover:text-primary hover:underline"
                  >
                    {course.primaryKeyword} in Hyderabad
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{course.fullName}</p>
              </article>
            </li>
          ))}
        </ul>
      </Section>
      <CtaBand
        title="Need help choosing a course?"
        description="Contact NowPath to discuss your learning goals and confirm current course details."
      />
    </>
  )
}
