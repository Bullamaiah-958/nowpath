import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Section } from '@/components/section'
import { courses, getCoursePageData } from '@/data/courses'

type SyllabusRouteProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: SyllabusRouteProps): Promise<Metadata> {
  const { slug } = await params
  const course = getCoursePageData(slug)
  if (!course) return {}

  return {
    title: { absolute: `${course.primaryKeyword} Syllabus | NowPath` },
    description: `Review the published topics for ${course.primaryKeyword}. Contact NowPath to confirm the current syllabus.`,
    alternates: { canonical: `/syllabus/${course.slug}` },
    robots: { index: true, follow: true },
  }
}

export default async function SyllabusPage({ params }: SyllabusRouteProps) {
  const { slug } = await params
  const course = getCoursePageData(slug)
  if (!course) notFound()

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Courses', href: '/courses' },
          { name: course.primaryKeyword, href: `/courses/${course.slug}` },
          { name: 'Syllabus', href: `/syllabus/${course.slug}` },
        ]}
      />
      <Section labelledBy="syllabus-title">
        <p className="eyebrow text-brand-2">{course.shortName} · Course syllabus</p>
        <h1 id="syllabus-title" className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-5xl">
          {course.primaryKeyword} syllabus
        </h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">
          Review the syllabus topics below. Contact NowPath to confirm the current course outline and batch details.
        </p>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {course.syllabus.map((module, index) => (
            <li key={module.title} className="min-h-48 rounded-2xl border border-border bg-card p-6">
              <span className="font-mono text-xs font-semibold text-brand-2">Module {String(index + 1).padStart(2, '0')}</span>
              <h2 className="mt-2 text-lg font-bold tracking-tight">{module.title}</h2>
              <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-foreground/80">
                {module.topics.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
            </li>
          ))}
        </ol>
      </Section>
    </>
  )
}
