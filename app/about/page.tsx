import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Clock3,
  Laptop,
  MapPin,
  Mic,
  MessageCircle,
  MessagesSquare,
  Phone,
  UserCheck,
} from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import { LinkButton } from '@/components/link-button'
import { Section, SectionEyebrow, SectionHeading } from '@/components/section'
import { breadcrumbSchema } from '@/lib/schema'
import { createPageMetadata } from '@/lib/seo'
import { site, whatsappLink } from '@/lib/site'

const TRAINER_NAME = '[TRAINER NAME]'
const TRAINER_EXPERIENCE = '[X] years'
const TRAINER_MODULES = '[MODULES]'
const TRAINER_BACKGROUND_AND_TEACHING_STYLE = '[1–2 lines about background and teaching style]'
const TRAINER_LINKEDIN_URL = '[LINKEDIN URL]'

const aboutTitle = 'About Rise Gen Technologies | ServiceNow Training Hyderabad'
const aboutDescription =
  'Rise Gen Technologies is a ServiceNow training institute in Ameerpet, Hyderabad. 7 hours a day of class and hands-on practice, weekly tests, and teaching in Telugu and English.'
const aboutPageMetadata = createPageMetadata({
  title: 'About',
  description: aboutDescription,
  canonicalPath: '/about',
})

export const metadata: Metadata = {
  ...aboutPageMetadata,
  title: { absolute: aboutTitle },
  openGraph: { ...aboutPageMetadata.openGraph, title: aboutTitle },
  twitter: { ...aboutPageMetadata.twitter, title: aboutTitle },
}

const glanceItems = [
  { label: 'Core course duration', value: '2.5–3 months, ending with a real-time project', icon: CalendarDays },
  { label: 'Weekday classroom schedule', value: 'Monday to Friday, 10:00 AM to 7:00\u00a0PM', icon: Clock },
  { label: 'Daily class and practice', value: '2 hrs class + 5 hrs hands-on practice', icon: BookOpen },
  { label: 'Weekly spoken English', value: '3 hrs every week with interview preparation', icon: Mic },
  { label: 'Attendance requirement', value: 'Minimum 90% to complete the course', icon: CheckCircle2 },
]

const studentSupport = [
  'Weekly progress check for every student',
  'Daily tasks submitted and reviewed',
  'Weekend written test before moving to the next topic',
  'Minimum 90% attendance',
  'Explained in simple Telugu and English',
]

const trainingDetails = [
  {
    icon: BookOpen,
    title: '2 hours of class',
    description: 'ServiceNow and JavaScript, taught step by step.',
  },
  {
    icon: Laptop,
    title: '5 hours of hands-on practice',
    description: 'Daily tasks on your own ServiceNow Personal Developer Instance, submitted every day.',
  },
  {
    icon: MessagesSquare,
    title: 'Weekly Spoken English',
    description: '3 hours every week, with interview preparation.',
  },
  {
    icon: ClipboardCheck,
    title: 'Weekend test',
    description: 'A written test every weekend, plus mock interviews.',
  },
  {
    icon: Check,
    title: 'Pass to move on',
    description: 'Pass the weekly test to move to the next topic. If you don’t pass, you get one more attempt.',
  },
  {
    icon: UserCheck,
    title: 'Minimum 90% attendance',
    description: 'Learning only works when you attend.',
  },
]

const courseGroups = [
  {
    title: 'Service management',
    courses: [
      { label: 'ITSM', href: '/courses/servicenow-itsm-training' },
      { label: 'CMDB', href: '/courses/servicenow-cmdb-training' },
      { label: 'CSM', href: '/courses/servicenow-csm-training' },
      { label: 'HRSD', href: '/courses/servicenow-hrsd-training' },
      { label: 'GRC', href: '/courses/servicenow-grc-training' },
    ],
  },
  {
    title: 'Platform & development',
    courses: [
      { label: 'Admin', href: '/courses/servicenow-admin-training' },
      { label: 'Developer', href: '/courses/servicenow-developer-training' },
      { label: 'Scripting', href: '/courses/servicenow-scripting-training' },
      { label: 'Now Assist', href: '/servicenow-now-assist-training' },
    ],
  },
]

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': `${site.url}/#organization`,
  name: 'Rise Gen Technologies',
  telephone: '+91 90323 63182',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ameerpet, Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
}

const trainerSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: TRAINER_NAME,
  jobTitle: 'Partner and Lead Trainer',
  description: `${TRAINER_EXPERIENCE} of experience in ServiceNow; worked on ${TRAINER_MODULES}. ${TRAINER_BACKGROUND_AND_TEACHING_STYLE}`,
  worksFor: { '@id': `${site.url}/#organization` },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={trainerSchema} />

      <section className="bg-hero relative overflow-hidden text-ink-foreground">
        <Image
          src="/images/about-banner.png"
          alt="Rise Gen Technologies branded banner background"
          fill
          sizes="100vw"
          aria-hidden="true"
          className="pointer-events-none object-cover opacity-[0.12] mix-blend-luminosity"
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-12 md:px-6 md:py-24">
          <div className="min-w-0 md:col-span-8">
            <SectionEyebrow tone="dark">About Rise Gen Technologies · ServiceNow Training in Hyderabad</SectionEyebrow>
            <h1 className="mt-5 text-balance text-3xl font-bold leading-[0.98] tracking-tight md:text-5xl lg:text-6xl">
              A ServiceNow Training Institute in Hyderabad That Tracks Every Student
            </h1>
            <p className="mt-7 text-pretty text-lg leading-relaxed text-white/70">
              Rise Gen Technologies is a ServiceNow training institute in Ameerpet, Hyderabad. We teach ServiceNow and JavaScript through live classes, daily practice on your own ServiceNow instance, weekly tests and mock interviews, for freshers and working professionals.
            </p>
            <nav aria-label="Breadcrumb" className="mt-5 text-xs text-white/65">
              <ol className="flex flex-wrap items-center gap-2 text-sm font-medium">
                <li className="flex items-center gap-2">
                  <Link href="/" className="text-white/65 hover:text-white">Home</Link>
                  <span aria-hidden="true" className="text-white/40">/</span>
                </li>
                <li aria-current="page" className="text-white">About</li>
              </ol>
            </nav>
          </div>

          <aside
            aria-labelledby="about-glance-title"
            className="mx-auto w-full min-w-0 max-w-sm rounded-3xl border border-blue-200/25 bg-gradient-to-br from-blue-400/15 via-white/[0.08] to-violet-400/15 p-5 shadow-2xl shadow-brand/20 backdrop-blur-sm sm:p-6 md:col-span-4"
          >
            <h2 id="about-glance-title" className="eyebrow text-blue-300">At a glance</h2>
            <p className="mt-1 min-w-0 text-sm text-white/80">Course schedule and learning details</p>
            <ul className="mt-5 space-y-2">
              {glanceItems.map((item) => {
                const Icon = item.icon

                return (
                  <li key={item.label} className="flex min-w-0 items-center gap-2 rounded-2xl border border-blue-200/20 bg-blue-200/[0.08] p-2">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-blue-300/50 bg-blue-400 text-white">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <dl className="min-w-0 flex-1">
                      <dt className="font-semibold md:whitespace-nowrap">{item.label}</dt>
                      <dd className="mt-0.5 whitespace-normal text-xs leading-relaxed text-white/85 md:whitespace-nowrap">{item.value}</dd>
                    </dl>
                  </li>
                )
              })}
            </ul>
          </aside>
        </div>
        <JsonLd data={breadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }])} />
      </section>

      <Section id="why-rise-gen" labelledBy="why-rise-gen-title">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="min-w-0">
            <SectionHeading
              id="why-rise-gen-title"
              eyebrow="Why we started"
              title="Training should move at the learner’s pace."
              className="lg:grid-cols-1"
            />
            <div className="mt-6 space-y-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                Many institutes finish the syllabus on schedule without checking whether students can apply what they learned. We started Rise Gen to make progress part of the learning process.
              </p>
              <p>
                We follow each student’s progress every week and move on only when the previous topic is understood. Concepts are explained in simple Telugu and English, so freshers can follow each step.
              </p>
            </div>
          </div>
          <aside
            aria-labelledby="student-support-title"
            className="relative min-w-0 rounded-3xl border border-blue-200/25 bg-hero p-5 text-ink-foreground shadow-2xl shadow-brand/20 backdrop-blur-sm sm:p-6"
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/15 via-white/[0.08] to-violet-400/15" aria-hidden="true" />
            <div className="relative">
              <h3 id="student-support-title" className="text-xl font-bold leading-tight">How we keep every student on track</h3>
              <ul className="mt-5 grid gap-4">
                {studentSupport.map((item) => (
                  <li key={item} className="flex min-w-0 items-start gap-3 text-[15px] leading-relaxed text-white/85">
                    <Check className="mt-0.5 size-4 shrink-0 text-blue-200" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>

      <Section id="how-we-train" tone="muted" labelledBy="how-we-train-title">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="min-w-0 md:col-span-5">
            <SectionHeading
              id="how-we-train-title"
              eyebrow="How we train"
              title="A full day of learning, not just a class."
              className="lg:grid-cols-1"
            />
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              Classes run Monday to Friday, 10:00 AM to 7:00 PM. The core course takes 2.5 to 3 months and ends with a real-time project.
            </p>
          </div>
          <ul className="grid min-w-0 gap-4 sm:grid-cols-2 md:col-span-7">
            {trainingDetails.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.title} className="rounded-2xl border border-border bg-card p-5">
                  <Icon className="size-5 text-brand-violet" aria-hidden="true" />
                  <h3 className="mt-3 text-xl font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.description}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </Section>

      <Section id="our-courses" labelledBy="our-courses-title">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="min-w-0 md:col-span-5">
            <SectionHeading
              id="our-courses-title"
              eyebrow="Our courses"
              title="One platform, taught in depth."
              className="lg:grid-cols-1"
            />
            <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              We focus on ServiceNow only, so every hour goes into one skill set. Service management: ITSM, CMDB, CSM, HRSD and GRC. Platform and development: Admin, Developer, Scripting and Now Assist. Every course runs on your own instance and ends with a project. Official certification training is optional.
            </p>
            <LinkButton href="/courses" className="mt-6">Explore all ServiceNow courses</LinkButton>
          </div>
          <div className="grid min-w-0 gap-4 sm:grid-cols-2 md:col-span-7">
            {courseGroups.map((group) => (
              <section key={group.title} className="rounded-2xl border border-border bg-card p-5" aria-labelledby={`course-group-${group.title.replaceAll(' ', '-')}`}>
                <h3 id={`course-group-${group.title.replaceAll(' ', '-')}`} className="text-xl font-bold tracking-tight">{group.title}</h3>
                <ul className="mt-4 grid gap-3">
                  {group.courses.map((course) => (
                    <li key={course.href}>
                      <Link href={course.href} className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline">
                        {course.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </Section>

      <Section id="your-trainer" tone="muted" labelledBy="your-trainer-title">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="min-w-0">
            <SectionHeading
              id="your-trainer-title"
              eyebrow="Your trainer"
              title="Learn from someone who has trained 100+ professionals."
              className="lg:grid-cols-1"
            />
            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/images/trainer.jpg"
                alt={`${TRAINER_NAME}, Partner and Lead Trainer at Rise Gen Technologies`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="min-w-0">
            <h3 className="text-xl font-bold tracking-tight">{TRAINER_NAME}</h3>
            <p className="mt-2 text-lg leading-relaxed text-muted-foreground">
              Partner and Lead Trainer at Rise Gen Technologies. {TRAINER_EXPERIENCE} of experience in ServiceNow, worked on {TRAINER_MODULES}, and has trained 100+ professionals.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{TRAINER_BACKGROUND_AND_TEACHING_STYLE}</p>
            {TRAINER_LINKEDIN_URL.startsWith('https://') ? (
              <LinkButton href={TRAINER_LINKEDIN_URL} external className="mt-6">LinkedIn Profile</LinkButton>
            ) : (
              <span aria-disabled="true" className="mt-6 inline-flex h-10 items-center justify-center rounded-lg border border-foreground/15 bg-card px-4 text-sm font-semibold text-muted-foreground">
                LinkedIn: {TRAINER_LINKEDIN_URL}
              </span>
            )}
          </div>
        </div>
      </Section>

      <Section id="our-promise" labelledBy="our-promise-title">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="min-w-0">
            <SectionHeading
              id="our-promise-title"
              eyebrow="Our promise"
              title="Honest training, no empty guarantees."
              className="lg:grid-cols-1"
            />
            <div className="mt-6 space-y-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              <p>
                We promise practical training, individual attention and honest feedback every week. We do not promise jobs or certification results. Hiring decisions are made by employers, and certification exams are separate.
              </p>
              <p>
                If you attend regularly, complete your tasks and pass the weekly tests, you will leave knowing how to work on ServiceNow and how to explain your work in an interview.
              </p>
            </div>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-6" aria-labelledby="before-you-join-title">
            <Clock3 className="size-5 text-brand-violet" aria-hidden="true" />
            <h3 id="before-you-join-title" className="mt-3 text-xl font-bold tracking-tight">Before you join</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              Before a batch begins, every student discusses the terms with us: timings, attendance, daily tasks and weekly tests. We want you to join knowing exactly what is expected.
            </p>
          </aside>
        </div>
      </Section>

      <Section id="visit-us" tone="muted" labelledBy="visit-us-title">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="min-w-0">
            <SectionHeading
              id="visit-us-title"
              title="Come and see the classroom."
              className="lg:grid-cols-1"
            />
            <address className="mt-6 flex flex-col gap-5 not-italic">
              <span className="flex items-start gap-3 text-lg leading-relaxed">
                <MapPin className="mt-1 size-5 shrink-0 text-brand-violet" aria-hidden="true" />
                <span>Ameerpet, Hyderabad, Telangana</span>
              </span>
              <a href={site.phoneHref} className="flex items-center gap-3 text-lg font-semibold hover:text-primary">
                <Phone className="size-5 shrink-0 text-brand-violet" aria-hidden="true" />
                +91 90323 63182
              </a>
            </address>
          </div>
          <div className="flex min-w-0 flex-wrap gap-3 rounded-2xl border border-border bg-card p-6">
            <LinkButton href="/contact">Book Free Demo</LinkButton>
            <LinkButton href={whatsappLink()} variant="outline" external>
              <MessageCircle className="size-4" aria-hidden="true" />
              Chat on WhatsApp
            </LinkButton>
          </div>
        </div>
      </Section>
    </>
  )
}
