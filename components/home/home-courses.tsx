import { courses } from '@/lib/courses'
import { CourseCard } from '@/components/course-card'
import { LinkButton } from '@/components/link-button'
import { Section, SectionHeading } from '@/components/section'

export function HomeCourses() {
  return (
    <Section id="courses" tone="muted" labelledBy="courses-title">
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
            Every course includes your own Personal Developer Instance and ends with a real-time project. Preparation for an official certification is optional.
          </span>
        }
      />
      <ul className="mt-12 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {courses.slice(0, 8).map((c) => (
          <li key={c.slug} className="h-full">
            <CourseCard course={c} />
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-center">
        <LinkButton href="/courses" size="lg">
          View all courses
        </LinkButton>
      </div>
    </Section>
  )
}
