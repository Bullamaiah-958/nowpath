import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { courses, getCoursePageData } from '@/data/courses'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CtaBand } from '@/components/cta-band'
import { FaqList } from '@/components/faq-list'
import { LinkButton } from '@/components/link-button'
import { Section, SectionHeading } from '@/components/section'
import { coursePageSchema } from '@/lib/schema'
import { absoluteUrl } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'

type CourseRouteProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: CourseRouteProps): Promise<Metadata> {
  const { slug } = await params
  const course = getCoursePageData(slug)
  if (!course) return {}

  const canonical = `/courses/${course.slug}`
  return {
    title: { absolute: course.metaTitle },
    description: course.metaDescription,
    keywords: [course.primaryKeyword, ...course.keywordVariants],
    alternates: { canonical },
    openGraph: {
      type: 'website',
      title: course.metaTitle,
      description: course.metaDescription,
      url: canonical,
      siteName: 'NowPath Institute',
      locale: 'en_IN',
      images: [
        {
          url: '/images/classroom.png',
          width: 1536,
          height: 1024,
          alt: 'NowPath ServiceNow Training Institute classroom training',
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
}

export default async function CoursePage({ params }: CourseRouteProps) {
  const { slug } = await params
  const course = getCoursePageData(slug)
  if (!course) notFound()

  const relatedCourses = course.relatedSlugs
    .map((relatedSlug) => getCoursePageData(relatedSlug))
    .filter((relatedCourse) => relatedCourse !== undefined)

  return (
    <>
      <JsonLd data={coursePageSchema(course)} />

      <section className="relative overflow-hidden bg-hero text-ink-foreground">
        <Breadcrumbs
          variant="hero"
          items={[
            { name: 'Courses', href: '/courses' },
            { name: course.primaryKeyword, href: `/courses/${course.slug}` },
          ]}
        />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-4 md:px-6 md:pb-16 lg:pb-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-7">
              <ul aria-label={`${course.shortName} course topics`} className="mb-6 flex flex-wrap gap-2">
                {course.topics.slice(0, 4).map((topic) => (
                  <li key={topic} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/85">
                    {topic}
                  </li>
                ))}
              </ul>
              <h1 className="text-balance text-3xl font-bold leading-[0.98] tracking-tight md:text-5xl lg:text-6xl">
                {course.primaryKeyword} <span className="text-emerald-300">in Hyderabad</span>
                <span className="mt-3 block text-2xl font-light italic leading-tight text-emerald-200 md:text-3xl lg:text-4xl">
                  Hands-on course built for job-ready skills
                </span>
              </h1>
              <div className="mt-6 max-w-2xl space-y-3 text-base leading-relaxed text-white/75">
                <p>{course.intro[0]}</p>
                <p>
                  {course.intro[1]} Learn through{' '}
                  <Link className="font-semibold text-white underline decoration-white/50 underline-offset-4 hover:decoration-white" href="/online-training">
                    ServiceNow online training
                  </Link>{' '}
                  or{' '}
                  <Link className="font-semibold text-white underline decoration-white/50 underline-offset-4 hover:decoration-white" href="/classroom">
                    classroom training in Hyderabad
                  </Link>.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="/book-demo" size="lg">Book free demo</LinkButton>
                <LinkButton href={`/syllabus/${course.slug}`} variant="ghostLight" size="lg">
                  Download syllabus
                </LinkButton>
              </div>
            </div>

            <div className="mx-auto min-w-0 w-full max-w-sm lg:col-span-5">
              <aside className="flex min-h-[33rem] w-full min-w-0 flex-col rounded-3xl border border-white/15 bg-white/[0.06] p-5 shadow-2xl shadow-black/10 backdrop-blur-sm sm:p-6">
                <h2 className="eyebrow text-emerald-300">Course snapshot</h2>
                <ol className="mt-4 grid flex-1 grid-rows-5 gap-2">
                  {course.snapshot.map((item, index) => (
                    <li key={`${item.title}-${index}`} className="flex min-h-0 items-center gap-3 rounded-xl border border-white/10 bg-ink/80 px-3 py-2">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-semibold text-emerald-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block whitespace-normal break-words text-xs font-semibold leading-tight">{item.title}</span>
                        <span className="mt-0.5 block whitespace-normal break-words text-[0.6875rem] leading-tight text-white/65">{item.topics}</span>
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-3 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-xs text-white/70">
                  <span className="font-semibold text-white">Not sure this fits you?</span>{' '}
                  <Link href="/book-demo" className="underline decoration-white/40 underline-offset-4 hover:decoration-white">
                    Book a free counselling call →
                  </Link>
                </p>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <Section id="learn" labelledBy="learn-title">
        <SectionHeading
          id="learn-title"
          eyebrow="Course syllabus"
          title="What you will learn"
          description={`Explore the ${course.fullName} syllabus and its topic list.`}
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {course.syllabus.map((module, index) => (
            <li key={module.title} className="min-h-56 rounded-2xl border border-border bg-card p-6">
              <span className="font-mono text-xs font-semibold text-brand-2">
                Module {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-lg font-bold tracking-tight">{module.title}</h3>
              <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed text-foreground/80">
                {module.topics.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
            </li>
          ))}
        </ol>
        <h3 className="mt-12 text-xl font-bold tracking-tight">Tools and skills</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {course.toolsSkills.map((skill) => (
            <li key={skill} className="rounded-xl border border-border bg-card p-4 text-sm leading-relaxed">
              {skill}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="projects" tone="dark" labelledBy="projects-title">
        <SectionHeading
          id="projects-title"
          tone="dark"
          eyebrow="Applied learning"
          title="Real-time projects"
          description="Review the project scope and deliverables with the training team before enrolling."
        />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {course.projects.map((project, index) => (
            <li key={project.title} className="min-h-48 rounded-2xl border border-white/10 bg-white/5 p-6">
              <span className="font-mono text-xs text-emerald-300">
                Project {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-bold">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{project.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="audience-title">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <SectionHeading id="audience-title" title="Who should join" className="lg:grid-cols-1" />
            <ul className="mt-6 flex flex-col gap-3">
              {course.whoShouldJoin.map((item) => (
                <li key={item} className="rounded-xl border border-border bg-card p-4 text-sm leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading id="prerequisites-title" title="Prerequisites" className="lg:grid-cols-1" />
            <ul className="mt-6 flex flex-col gap-3">
              {course.prerequisites.map((item) => (
                <li key={item} className="rounded-xl border border-border bg-card p-4 text-sm leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="training-modes" tone="muted" labelledBy="modes-title">
        <SectionHeading
          id="modes-title"
          eyebrow={course.duration ? `Duration: ${course.duration}` : undefined}
          title="Online and Classroom training in Hyderabad"
          description={course.batchInfo}
        />
        <p className="mt-6 max-w-3xl leading-relaxed text-muted-foreground">
          Choose a delivery mode after confirming the current schedule and availability with NowPath. Learn about{' '}
          <Link className="font-semibold text-primary underline-offset-4 hover:underline" href="/online-training">
            online training
          </Link>{' '}
          or{' '}
          <Link className="font-semibold text-primary underline-offset-4 hover:underline" href="/classroom">
            classroom training in Hyderabad
          </Link>.
        </p>
      </Section>

      <Section id="faq" labelledBy="faq-title">
        <SectionHeading
          id="faq-title"
          eyebrow="Course questions"
          title="Frequently asked questions"
        />
        <div className="mt-10">
          <FaqList faqs={course.faqs} />
        </div>
      </Section>

      <Section id="related-courses" tone="white" labelledBy="related-title">
        <SectionHeading id="related-title" eyebrow="Keep learning" title="Related ServiceNow courses" />
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {relatedCourses.map((relatedCourse) => (
            <li key={relatedCourse.slug} className="min-h-40 rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-xl hover:shadow-brand/10">
              <Link
                href={`/courses/${relatedCourse.slug}`}
                className="text-lg font-bold leading-snug text-primary underline-offset-4 hover:underline"
              >
                {relatedCourse.primaryKeyword}
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{relatedCourse.fullName}</p>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title={`Ask about ${course.primaryKeyword}.`}
        description="Contact NowPath to confirm the current syllabus, batch dates, training mode and course details."
      />
    </>
  )
}
