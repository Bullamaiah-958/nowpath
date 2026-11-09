import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowRight, FlaskConical, Layers, ListChecks } from 'lucide-react'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { LinkButton } from '@/components/link-button'
import { Section } from '@/components/section'
import { SyllabusGrid } from '@/components/syllabus-grid'
import { coursePagePath, courses, getCourseBySyllabusSlug, syllabusPath } from '@/data/courses'
import { itsmFullSyllabus } from '@/data/itsm-full-syllabus'

type SyllabusRouteProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug: syllabusPath(slug).replace('/syllabus/', '') }))
}

export async function generateMetadata({ params }: SyllabusRouteProps): Promise<Metadata> {
  const { slug } = await params
  const course = getCourseBySyllabusSlug(slug)
  if (!course) return {}

  return {
    title: `${course.primaryKeyword} Syllabus`,
    description: `Review the published topics for ${course.primaryKeyword}. Contact Rise Gen Technologies to confirm the current syllabus.`,
    alternates: { canonical: syllabusPath(course.slug) },
    robots: { index: true, follow: true },
  }
}

export default async function SyllabusPage({ params }: SyllabusRouteProps) {
  const { slug } = await params
  const course = getCourseBySyllabusSlug(slug)
  if (!course) notFound()
  const modules = course.slug === 'servicenow-itsm-training'
    ? itsmFullSyllabus
    : course.syllabus.map((module) => ({ ...module, handsOn: [] as string[] }))

  const topicCount = modules.reduce((sum, module) => sum + module.topics.length, 0)
  const handsOnCount = modules.reduce((sum, module) => sum + module.handsOn.length, 0)
  const stats = [
    { icon: Layers, value: modules.length, label: 'Modules' },
    { icon: ListChecks, value: topicCount, label: 'Topics' },
    ...(handsOnCount > 0 ? [{ icon: FlaskConical, value: handsOnCount, label: 'Hands-on labs' }] : []),
  ]

  return (
    <>
      <header className="relative overflow-hidden bg-hero text-ink-foreground">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 size-[28rem] rounded-full bg-primary/30 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/3 size-[24rem] rounded-full bg-brand-2/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-8 pt-16 md:px-6 md:pt-24 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="eyebrow text-blue-300">{course.shortName} · Course syllabus</p>
            <h1 id="syllabus-title" className="mt-5 text-balance text-3xl font-bold leading-[1.02] tracking-tight md:text-5xl lg:text-6xl">
              {course.primaryKeyword} <span className="text-gradient">syllabus</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Review the syllabus topics below. Contact Rise Gen Technologies to confirm the current course outline and batch details.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href="/contact" size="lg">Ask about the next batch <ArrowRight className="size-4" aria-hidden="true" /></LinkButton>
              <LinkButton href={coursePagePath(course.slug)} variant="ghostLight" size="lg">Back to course overview</LinkButton>
            </div>
          </div>
          <dl className="grid grid-cols-3 gap-3 lg:col-span-5 lg:max-w-xs lg:grid-cols-1 lg:justify-self-end lg:w-full">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-200">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dd className="text-3xl font-extrabold leading-none tracking-tight text-white">{value}</dd>
                  <dt className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60">{label}</dt>
                </div>
              </div>
            ))}
          </dl>
        </div>
        <Breadcrumbs
          variant="hero"
          items={[
            { name: 'Courses', href: '/courses' },
            { name: course.primaryKeyword, href: coursePagePath(course.slug) },
            { name: 'Syllabus', href: syllabusPath(course.slug) },
          ]}
        />
      </header>
      <Section tone="muted" labelledBy="syllabus-title">
        <SyllabusGrid modules={modules} />
      </Section>
    </>
  )
}
