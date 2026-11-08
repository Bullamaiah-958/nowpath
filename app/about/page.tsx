import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock,
  GraduationCap,
  Headset,
  MapPin,
  Mic,
  ArrowRight,
  Gauge,
  ShieldCheck,
} from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import { LinkButton } from '@/components/link-button'
import { CtaBand } from '@/components/cta-band'
import { Section, SectionEyebrow, SectionHeading } from '@/components/section'
import { AboutFaqAccordion } from '@/app/about/about-faq-accordion'
import { FaqLayout } from '@/components/faq-layout'
import type { Faq } from '@/lib/courses'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import { createPageMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

const aboutTitle = 'About Rise Gen Technologies | ServiceNow Training Hyderabad'
const aboutDescription =
  'Rise Gen Technologies is a ServiceNow training institute in Kukatpally, Hyderabad. 7 hours a day of class and hands-on practice, weekly tests, and teaching in Telugu and English.'
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
  { label: 'Core course duration', value: '2.5–3 months, ending with a real-time project', icon: CalendarDays, iconStyle: 'border-cyan-400/25 bg-cyan-400/10 text-cyan-300' },
  { label: 'Weekday classroom schedule', value: 'Monday to Friday, 10:00 AM to 7:00 PM', icon: Clock, iconStyle: 'border-blue-400/25 bg-blue-400/10 text-blue-300' },
  { label: 'Daily class and practice', value: '2 hrs class + 5 hrs hands-on practice', icon: BookOpen, iconStyle: 'border-teal-400/25 bg-teal-400/10 text-teal-300' },
  { label: 'Weekly spoken English', value: '3 hrs every week with interview preparation', icon: Mic, iconStyle: 'border-cyan-400/25 bg-cyan-400/10 text-cyan-300' },
  { label: 'Attendance requirement', value: 'Minimum 90% to complete the course', icon: CheckCircle2, iconStyle: 'border-indigo-400/25 bg-indigo-400/10 text-indigo-300' },
]

const aboutFaqs: Faq[] = [
  {
    q: 'Where is Rise Gen Technologies located?',
    a: 'Rise Gen Technologies is located in Kukatpally, Hyderabad. You can call +91 90323 63182 or book a free demo to visit the classroom.',
  },
  {
    q: 'Who can join the ServiceNow course?',
    a: 'Freshers and working professionals can join. The course starts from the fundamentals of ServiceNow and JavaScript and builds up to a real-time project over 2.5 to 3 months.',
  },
  {
    q: 'What is the daily schedule?',
    a: 'Classes run Monday to Friday, 10:00 AM to 7:00 PM. Each day has 2 hours of class and 5 hours of hands-on practice on your own ServiceNow instance, with daily tasks to submit. There is a written test every weekend and 3 hours of spoken English every week.',
  },
  {
    q: 'In which language do you teach?',
    a: 'We teach in simple Telugu and English so that freshers can follow every step.',
  },
  {
    q: 'Is attendance compulsory?',
    a: 'Yes. We ask every student to attend at least 90% of classes and complete the daily tasks, because practice only works when you take part.',
  },
  {
    q: 'Do you guarantee a job or certification?',
    a: 'No. We offer practical training, individual attention and weekly feedback. Hiring decisions are made by employers and certification exams are separate. If you attend regularly, complete your tasks and pass the weekly tests, you will leave knowing how to work on ServiceNow and how to explain your work in an interview.',
  },
  {
    q: 'How can I attend a free demo class?',
    a: 'Click Book Free Demo or message us on WhatsApp at +91 90323 63182, and we will share the next demo date.',
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
    addressLocality: 'Kukatpally, Hyderabad',
    addressRegion: 'Telangana',
    addressCountry: 'IN',
  },
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={organizationSchema} />

      <section className="bg-hero relative overflow-hidden text-ink-foreground">
        <Image
          src="/images/about-banner.png"
          alt="Rise Gen Technologies branded banner background"
          width={1200}
          height={628}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 size-full object-cover opacity-[0.12] mix-blend-luminosity"
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 md:grid-cols-12 md:gap-8 md:px-6 md:py-20 lg:gap-12">
          <div className="min-w-0 md:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-800/50 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold tracking-wide text-cyan-300">
              <span className="size-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(0,210,255,0.8)]" aria-hidden="true" />
              About Rise Gen Technologies · ServiceNow Training in Hyderabad
            </p>
            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.02] tracking-tight md:text-5xl lg:text-[3.5rem]">
              A ServiceNow Training Institute In Hyderabad
              <span className="mt-1 block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                That Tracks Every Student
              </span>
            </h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-slate-300">
              Rise Gen Technologies is a ServiceNow training institute in Kukatpally, Hyderabad. Learn ServiceNow and JavaScript through live classes, daily practice on your own instance, weekly tests and mock interviews.
            </p>
            <nav aria-label="Breadcrumb" className="mt-5">
              <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-400">
                <li className="flex items-center gap-2">
                  <Link href="/" className="transition-colors hover:text-cyan-300">Home</Link>
                  <span aria-hidden="true" className="text-slate-600">/</span>
                </li>
                <li aria-current="page" className="text-cyan-300">About</li>
              </ol>
            </nav>
            <div className="mt-7 flex flex-wrap gap-3">
              <LinkButton
                href="/contact"
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20 transition-all hover:-translate-y-0.5 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/40"
              >
                Book Free Demo Class <ArrowRight className="size-4" aria-hidden="true" />
              </LinkButton>
              <a
                href={site.phoneHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-700/70 bg-slate-800/70 px-6 font-semibold text-slate-200 transition-colors hover:bg-slate-700/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                <Headset className="size-4 text-cyan-300" aria-hidden="true" />
                Speak to Counselor
              </a>
            </div>
            <dl className="mt-7 grid max-w-xl grid-cols-3 border-t border-white/10 pt-5">
              <div className="pr-3">
                <dt className="text-xs leading-relaxed text-slate-400 sm:text-sm">Instance Practice</dt>
                <dd className="mt-1 text-base font-bold text-white sm:text-lg">100%</dd>
              </div>
              <div className="border-l border-white/10 px-3">
                <dt className="text-xs leading-relaxed text-slate-400 sm:text-sm">Mentorship Tracking</dt>
                <dd className="mt-1 text-base font-bold text-white sm:text-lg">1:1</dd>
              </div>
              <div className="border-l border-white/10 pl-3">
                <dt className="text-xs leading-relaxed text-slate-400 sm:text-sm">Mock Interviews</dt>
                <dd className="mt-1 text-base font-bold text-white sm:text-lg">Job Ready</dd>
              </div>
            </dl>
          </div>

          <aside
            aria-labelledby="about-glance-title"
            className="relative mx-auto w-full min-w-0 max-w-md overflow-hidden rounded-3xl border border-cyan-500/15 bg-gradient-to-b from-[#10243b]/95 to-[#0d1d32]/95 p-5 shadow-2xl shadow-cyan-950/25 backdrop-blur-xl sm:p-7 md:col-span-5"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-cyan-400/[0.035] blur-3xl" aria-hidden="true" />
            <div className="relative flex items-start justify-between gap-4">
              <div>
                <h2 id="about-glance-title" className="eyebrow text-xs text-cyan-400">At a glance</h2>
                <p className="mt-2 text-base font-semibold text-white">Course schedule and learning details</p>
              </div>
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/[0.07] text-cyan-300">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
            </div>
            <ul className="relative mt-5 space-y-2.5 border-t border-white/10 pt-5">
              {glanceItems.map((item) => {
                const Icon = item.icon

                return (
                  <li key={item.label} className="group flex min-w-0 items-center gap-3 rounded-xl border border-[#293b53]/70 bg-[#14253b]/80 p-3 transition-all hover:translate-x-1 hover:border-cyan-500/20 hover:bg-[#192c43]/90">
                    <span className={`flex size-10 shrink-0 items-center justify-center rounded-lg border transition-all group-hover:scale-105 group-hover:shadow-[0_0_8px_rgba(0,210,255,0.08)] ${item.iconStyle}`}>
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <dl className="min-w-0 flex-1">
                      <dt className="text-sm font-semibold text-white md:whitespace-nowrap">{item.label}</dt>
                      <dd className="mt-0.5 text-xs leading-relaxed text-slate-400 md:whitespace-nowrap">{item.value}</dd>
                    </dl>
                  </li>
                )
              })}
            </ul>
            <div className="relative mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-white/10 pt-4 text-xs font-medium">
              <span className="inline-flex items-center gap-1.5 text-cyan-300">
                <MapPin className="size-3.5" aria-hidden="true" />
                Kukatpally, Hyderabad
              </span>
              <span className="text-slate-400">Monday–Friday classes</span>
            </div>
          </aside>
        </div>
        <JsonLd data={breadcrumbSchema([{ name: 'Home', href: '/' }, { name: 'About', href: '/about' }])} />
      </section>

      <Section id="why-rise-gen" labelledBy="why-rise-gen-title">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="min-w-0">
            <SectionHeading
              id="why-rise-gen-title"
              eyebrow="About Rise Gen Technologies"
              title={
                <>
                  Focused ServiceNow learning, <span className="text-gradient">built around real practice.</span>
                </>
              }
              className="lg:grid-cols-1"
            />
            <div className="mt-6 space-y-4 text-pretty text-justify text-lg leading-relaxed text-muted-foreground">
              <p>
                Rise Gen Technologies is a training institute that teaches one platform, ServiceNow, and teaches it in depth. We run classroom batches in Kukatpally, Hyderabad, for freshers who are starting out and working professionals who want to move into ServiceNow.
              </p>
              <p>
                Our core course takes 2.5 to 3 months and ends with a real-time project. Along the way you learn ServiceNow and JavaScript together, because most real ServiceNow work needs both. From there you can go deeper into ITSM, CMDB, CSM, HRSD, GRC, Admin, Developer, Scripting or Now Assist.
              </p>
              <p>
                Founded in 2026 by Manda Srinivas Rao, Rise Gen is partner-led, with its leaders directly involved in how you learn.
              </p>
            </div>
          </div>
          <figure className="min-w-0 overflow-hidden rounded-3xl border border-border bg-card">
            <Image
              src="/images/classroom.png"
              alt="ServiceNow trainer leading a classroom session while learners practise on laptops"
              width={1264}
              height={848}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="h-full w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-sm text-muted-foreground">
              About Rise Gen Technologies
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section id="our-mission" tone="muted" labelledBy="our-mission-title">
        <div className="grid min-w-0 gap-12 md:grid-cols-2 md:items-center">
          <div className="min-w-0">
            <SectionHeading
              id="our-mission-title"
              eyebrow="Our mission"
              title={
                <>
                  Help every learner become <span className="text-gradient">confident enough to do the work.</span>
                </>
              }
              className="lg:grid-cols-1"
            />
            <p className="mt-6 border-l-2 border-brand-violet/50 pl-4 text-pretty text-justify text-lg leading-relaxed text-muted-foreground">
              We exist to help freshers and working professionals learn ServiceNow properly: step by step, in simple language, with enough practice that the skills stay with them. We measure our work by what a student can do on the last day of the course, not by how much of the syllabus we covered.
            </p>
          </div>
          <div className="grid min-w-0 gap-4">
            <article className="min-w-0 rounded-2xl border border-border/80 bg-card p-5 shadow-sm shadow-foreground/5">
              <div className="flex items-center gap-2">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-border/80 bg-muted/70 text-brand-violet">
                  <Gauge className="size-4" aria-hidden="true" />
                </span>
                <p className="rounded-md bg-muted/70 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Performance</p>
              </div>
              <h3 className="mt-3 text-xl font-bold tracking-tight">Skills that show on the job.</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                Daily hands-on practice on your own ServiceNow instance, weekly tests and mock interviews build the speed and accuracy you need when real work begins.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Performance training features">
                <li className="rounded-md border border-border/80 bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">Daily instance practice</li>
                <li className="rounded-md border border-border/80 bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">Weekly tests</li>
                <li className="rounded-md border border-border/80 bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">Mock interviews</li>
              </ul>
            </article>
            <article className="min-w-0 rounded-2xl border border-border/80 bg-card p-5 shadow-sm shadow-foreground/5">
              <div className="flex items-center gap-2">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md border border-border/80 bg-muted/70 text-brand-violet">
                  <ShieldCheck className="size-4" aria-hidden="true" />
                </span>
                <p className="rounded-md bg-muted/70 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Trust</p>
              </div>
              <h3 className="mt-3 text-xl font-bold tracking-tight">No surprises, no empty promises.</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                We explain the timings, attendance, tasks and tests before you join, and we are honest about what we offer: practical training and personal attention, not guarantees about jobs.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2" aria-label="Our commitments">
                <li className="rounded-md border border-border/80 bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">Zero False Guarantees</li>
                <li className="rounded-md border border-border/80 bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">Clear Attendance Norms</li>
                <li className="rounded-md border border-border/80 bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground">Personal Mentorship</li>
              </ul>
            </article>
          </div>
        </div>
      </Section>

      <Section id="faq" labelledBy="about-faq-title">
        <FaqLayout>
          <SectionHeading
            id="about-faq-title"
            eyebrow="Questions answered"
            title={<>Frequently asked questions <span className="text-gradient">about Rise Gen Technologies</span></>}
            className="[&>div]:lg:col-span-12"
          />
          <div className="mt-8">
            <AboutFaqAccordion faqs={aboutFaqs} />
          </div>
          <JsonLd data={faqSchema(aboutFaqs)} />
        </FaqLayout>
      </Section>

      <CtaBand descriptionClassName="fs-lead" />
    </>
  )
}
