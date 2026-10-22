import { courses } from '@/lib/courses'
import { CourseCard } from '@/components/course-card'
import { Section, SectionHeading } from '@/components/section'

export function HomeCourses() {
  return (
    <Section id="courses" labelledBy="courses-title">
      <SectionHeading
        id="courses-title"
        eyebrow="ServiceNow Courses"
        title={
          <>
            ServiceNow Training Courses <span className="courses-heading-accent">That Build One Career Path.</span>
          </>
        }
        description={
          <span className="courses-intro fs-lead">
            Every course runs on your own ServiceNow Personal Developer Instance, is aligned to an official ServiceNow certification, and ends with a real-time project. Official certification training is optional.
          </span>
        }
      />
      <ul className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {courses.map((c) => (
          <li key={c.slug} className="h-full">
            <CourseCard course={c} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
