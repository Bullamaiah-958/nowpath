import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, BookOpen, Check, FolderKanban, Laptop, Layers, MapPin, Workflow } from 'lucide-react'
import { coursePagePath, syllabusPath, type CoursePageData } from '@/data/courses'
import type { CourseLandingContent } from '@/data/course-landing'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CtaBand } from '@/components/cta-band'
import { FaqList } from '@/components/faq-list'
import { FaqLayout } from '@/components/faq-layout'
import { LinkButton } from '@/components/link-button'
import { SyllabusScroll } from '@/components/syllabus-scroll'
import { Section, SectionEyebrow, SectionHeading } from '@/components/section'

export function CourseLandingPage({
  course,
  content,
}: {
  course: CoursePageData
  content: CourseLandingContent
}) {
  const { idPrefix: p, panel, stats, audience } = content
  return (
    <>
      <section className="relative overflow-hidden bg-hero text-ink-foreground">
        {content.heroBackgroundImage && (
          <>
            <Image
              src={content.heroBackgroundImage}
              alt=""
              fill
              preload
              sizes="100vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-hero opacity-45" />
          </>
        )}
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 size-[34rem] rounded-full border border-white/5 bg-blue-400/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-6 pt-5 md:px-6 md:pb-8 md:pt-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow text-blue-300">{content.heroEyebrow}</p>
              <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold leading-[1.02] tracking-tight normal-case md:text-6xl">
                {content.heroTitle}{' '}
                <span className="mt-2 block text-blue-300">{content.heroTitleAccent}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
                {content.heroLead}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <LinkButton href="/contact" size="lg">Ask about the next batch <ArrowRight className="size-4" aria-hidden="true" /></LinkButton>
                <LinkButton href={syllabusPath(course.slug)} variant="ghostLight" size="lg">
                  View course syllabus
                </LinkButton>
              </div>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/70">
                {content.heroChecks.map((check) => (
                  <li key={check} className="inline-flex items-center gap-2"><Check className="size-4 text-cyan-300" aria-hidden="true" /> {check}</li>
                ))}
              </ul>
            </div>

            <aside aria-label={panel.ariaLabel} className="lg:col-span-5">
              <div className={`overflow-hidden rounded-2xl border border-white/15 ${content.solidHeroPanel ? 'bg-ink/95' : 'bg-ink/70'} shadow-2xl shadow-blue-950/40`}>
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-3">
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-red-400/70" />
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-amber-300/70" />
                  <span aria-hidden="true" className="size-2.5 rounded-full bg-emerald-400/70" />
                  <p className="ml-3 flex items-center gap-2 text-xs font-semibold text-white/80">
                    <Workflow className="size-3.5 text-blue-300" aria-hidden="true" /> {panel.title}
                  </p>
                </div>
                <ol className="divide-y divide-white/10 px-4">
                  {panel.items.map((item) => (
                    <li key={item.record} className="flex items-start gap-4 py-4">
                      <span className="mt-0.5 rounded-md bg-white/10 px-2 py-1 font-mono text-[11px] font-bold text-blue-200">{item.record}</span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <p className="font-bold text-white">{item.title}</p>
                          <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${item.tone}`}>{item.status}</span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-white/60">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <p className="border-t border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-relaxed text-white/55">
                  {panel.footnote}
                </p>
              </div>
            </aside>
          </div>
        </div>
        <div className="pb-8 md:pb-10">
          <Breadcrumbs
            variant="hero"
            items={[
              { name: 'Courses', href: '/courses' },
              { name: course.primaryKeyword, href: coursePagePath(course.slug) },
            ]}
          />
        </div>
      </section>

      <Section tone="muted" className="border-b border-border py-6 md:py-8" labelledBy={`${p}-focus-title`}>
        <h2 id={`${p}-focus-title`} className="sr-only">ServiceNow {content.areaLabel} course at a glance</h2>
        <div className="relative overflow-hidden rounded-3xl border border-primary/10 bg-gradient-to-br from-secondary via-card to-accent/70 shadow-md shadow-primary/5">
          <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-gradient-brand" />
          <dl className="grid grid-cols-1 divide-y divide-primary/10 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {[
              { icon: BookOpen, value: String(course.syllabus.length), label: 'Syllabus modules', detail: stats.modulesDetail },
              { icon: FolderKanban, value: String(course.projects.length), label: 'Practice projects', detail: stats.projectsDetail },
              { icon: Layers, value: '2', label: 'Learning modes', detail: 'Online and classroom' },
              { icon: Award, value: stats.certValue, label: stats.certLabel, detail: stats.certDetail },
            ].map(({ icon: Icon, value, label, detail }) => (
              <div key={label} className="relative flex items-center gap-4 overflow-hidden px-5 py-5 sm:py-6">
                <Icon aria-hidden="true" className="pointer-events-none absolute right-4 top-4 size-9 text-primary/30" strokeWidth={1.5} />
                <span aria-hidden="true" className="text-gradient relative shrink-0 text-5xl font-extrabold leading-none tracking-tight">{value}</span>
                <div className="relative min-w-0 border-l border-primary/20 pl-4">
                  <dt className="text-sm font-bold uppercase tracking-wider text-ink">{label}<span className="sr-only">: {value}</span></dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="white" id={`${p}-syllabus`} labelledBy={`${p}-syllabus-title`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <div>
              <SectionEyebrow>{content.syllabus.lead}</SectionEyebrow>
              <h2 id={`${p}-syllabus-title`} className="mt-3 text-balance text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                {content.syllabus.headingPlain} <span className="text-gradient">{content.syllabus.headingAccent}</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-foreground/80">
                {content.syllabus.intro}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Confirm the current syllabus and batch details with the training team.</p>
              <div className="mt-5 flex flex-wrap gap-x-6">
                <Link href={syllabusPath(course.slug)} className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                  View full syllabus <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link href="/contact" className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                  Ask about batches <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
          <SyllabusScroll modules={course.syllabus} label={`${course.primaryKeyword} syllabus modules`} idPrefix={p} />
        </div>
      </Section>

      <Section tone="muted" labelledBy={`${p}-audience-title`}>
        <div className="mx-auto max-w-3xl text-center">
          <SectionEyebrow>02 · Who is it for?</SectionEyebrow>
          <h2 id={`${p}-audience-title`} className="mt-3 text-balance text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            {audience.headingPlain} <span className="text-gradient">{audience.headingAccent}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-foreground/80">
            {audience.intro} {course.prerequisites.join(' ')}
          </p>
        </div>
        <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1fr)] lg:grid-rows-2 lg:gap-6">
          {audience.cards.map(({ title, body, icon: Icon }, index) => (
            <article key={title} className={`${audience.cardFit ? 'career-audience-card h-fit self-start shadow-sm shadow-primary/5 transition-shadow hover:shadow-md hover:shadow-primary/10' : 'career-audience-border'} rounded-2xl border ${audience.cardPadding ?? 'p-5 sm:p-6'} ${index === 0 ? 'lg:col-start-1 lg:row-start-1' : index === 1 ? 'lg:col-start-1 lg:row-start-2' : index === 2 ? 'lg:col-start-3 lg:row-start-1' : 'lg:col-start-3 lg:row-start-2'}`}>
              <div className="flex items-center gap-3">
                <Icon className="size-8 shrink-0 text-primary" aria-hidden="true" />
                <h3 className="text-xl font-bold leading-snug text-ink">{title}</h3>
              </div>
              <p className="mt-3 text-balance leading-relaxed text-foreground/80">{body}</p>
            </article>
          ))}
          <div className="mx-auto w-full max-w-sm sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
            <div className="relative aspect-square">
              <div className="career-audience-border absolute inset-0 rounded-full border-2" aria-hidden="true" />
              <div className="absolute inset-3 flex overflow-hidden rounded-full">
                <div className="relative h-full w-[56%]">
                  <Image src="/images/journey-interview.jpg" alt="A learner discussing their goals with a trainer" fill sizes="(min-width: 1024px) 20vw, 65vw" className="object-cover object-left" />
                </div>
                <div className="bg-hero flex w-[44%] flex-col justify-center border-l-[10px] border-secondary px-4 text-white sm:px-6">
                  <BookOpen className="size-8 text-blue-300" aria-hidden="true" />
                  <p className="mt-4 text-lg font-bold leading-snug sm:text-2xl">Your next step starts here.</p>
                </div>
              </div>
              <span aria-hidden="true" className="absolute left-[56%] top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[6px] border-secondary bg-gradient-brand text-white sm:size-16 sm:border-8">
                <ArrowRight className="size-5 -rotate-45" />
              </span>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link href="/contact" className="mt-8 inline-flex min-h-11 items-center gap-3 rounded-full bg-gradient-brand px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none">
            Discuss your starting point <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      <Section id={`${p}-training-modes`} tone="white" labelledBy={`${p}-modes-title`}>
        <SectionHeading
          id={`${p}-modes-title`}
          eyebrow="03 · Choose how to learn"
          title={`Online or offline ServiceNow ${content.areaLabel} training in Hyderabad`}
          description="Check the current timetable, delivery format and availability with Rise Gen Technologies before choosing a batch."
        />
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-0 md:divide-x md:divide-border">
          <article className="md:pr-12">
            <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl bg-secondary">
              <Image src={content.trainingModeImages?.online.src ?? '/images/online-learning.png'} alt={content.trainingModeImages?.online.alt ?? 'Learner attending a live online ServiceNow session'} fill sizes="(min-width: 768px) 40vw, 100vw" unoptimized={content.trainingModeImages?.online.src.startsWith('http')} className="object-cover" />
            </div>
            {!content.hideTrainingModeIcons && <Laptop className="size-6 text-primary" aria-hidden="true" />}
            <h3 className="mt-4 text-xl font-bold">ServiceNow {content.areaLabel} Online Training</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{content.trainingModes?.onlineDescription ?? `Explore ServiceNow ${content.areaLabel} Online Training from anywhere. Ask about sessions, timetable and current availability.`}</p>
            <Link href="/servicenow-online-training" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
              Explore online training <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </article>
          <article className="md:pl-12">
            <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl bg-secondary">
              <Image src={content.trainingModeImages?.classroom.src ?? '/images/classroom.png'} alt={content.trainingModeImages?.classroom.alt ?? 'ServiceNow classroom training in Hyderabad'} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            </div>
            {!content.hideTrainingModeIcons && <MapPin className="size-6 text-primary" aria-hidden="true" />}
            <h3 className="mt-4 text-xl font-bold">ServiceNow {content.areaLabel} Classroom Training</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{content.trainingModes?.classroomDescription ?? `Explore ServiceNow ${content.areaLabel} Offline Training at our Hyderabad classroom. Ask about sessions, timetable and current availability.`}</p>
            <Link href="/servicenow-classroom-training-hyderabad" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline">
              Explore classroom training <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </article>
        </div>
      </Section>

      <Section id={`${p}-faq`} tone="muted" labelledBy={`${p}-faq-title`}>
        <FaqLayout>
          <SectionHeading
            id={`${p}-faq-title`}
            eyebrow={`04 · ServiceNow ${content.areaLabel} course questions`}
            title="Frequently asked questions"
          />
          <div className="mt-10">
            <FaqList faqs={course.faqs} />
          </div>
        </FaqLayout>
      </Section>

      <CtaBand
        variant="centered"
        title={`Ask about ${course.primaryKeyword}.`}
        description="Contact Rise Gen Technologies to confirm the current syllabus, batch dates, training mode and course details."
      />
    </>
  )
}
