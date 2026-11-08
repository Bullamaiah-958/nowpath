import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, BookOpen, BriefcaseBusiness, FolderKanban, GraduationCap, Headset, Laptop, MessageSquare, MessagesSquare, Phone, RefreshCw, UserRoundCheck } from 'lucide-react'
import { CareerJourney } from '@/components/career-journey'
import { CareerCourseScroll } from '@/components/career-course-scroll'
import { LandingPage } from '@/components/landing-page'
import { Section, SectionEyebrow, SectionHeading } from '@/components/section'
import { TrainingHeroStrip } from '@/components/training-hero-strip'
import { courseMenuDescriptions, courseMenuItems } from '@/lib/courses'
import { createPageMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'ServiceNow Career Training',
    description:
      'Build practical ServiceNow skills with career training, guided exercises, projects and mock interview preparation at Rise Gen Technologies.',
    canonicalPath: '/servicenow-career-training',
  }),
  keywords: ['ServiceNow Career Training', 'ServiceNow Interview Preparation'],
}

export default function CareerPage() {
  return (
    <LandingPage
      crumb="ServiceNow Career Training"
      href="/servicenow-career-training"
      showCoursesSection={false}
      faqEyebrow="05 · FAQ"
      ctaTone="muted"
      eyebrow="ServiceNow career training · Interview preparation"
      title={<>Build your <span className="font-light text-blue-300">ServiceNow career.</span></>}
      intro={
        <div>
          <p>
            Build practical ServiceNow skills and prepare for interviews through weekday classes, hands-on exercises, project work and mock interviews. Explore career paths and take the next step with confidence.
          </p>
          <dl className="mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { value: 'Hands-on', label: 'Practical learning and projects' },
              { value: 'Weekdays', label: 'Classes and daily practice' },
              { value: 'Mock', label: 'Interviews and weekend tests' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4 text-center">
                <dt className="text-xl font-bold tracking-tight text-blue-300">{item.value}</dt>
                <dd className="mt-1 text-xs leading-relaxed text-white/60">{item.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      }
      heroContentClassName="pt-5 pb-6 md:pt-7 md:pb-8"
      heroBackgroundDecoration="/images/dotted-globe.svg"
      heroBackgroundMap="/images/dotted-world-map.svg"
      heroSecondaryActionVariant="ghostLight"
      heroAside={
        <div role="region" aria-labelledby="career-overview-title" className="relative mx-auto w-full max-w-md">
          <div className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-blue-400/15 blur-3xl" aria-hidden="true" />
          <TrainingHeroStrip mode="Career-focused training" detail="Skills & interview prep" icon={BriefcaseBusiness} />
          <div className="@container relative rounded-xl border border-white/15 bg-ink/75 p-5 shadow-2xl shadow-brand/20 backdrop-blur-sm sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-[10px] font-bold uppercase tracking-wide text-blue-200/75">Learn, practise, prepare</p>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-cyan-200">
                <span className="size-1.5 rounded-full bg-cyan-300" aria-hidden="true" /> Career prep
              </span>
            </div>
            <h2 id="career-overview-title" className="mt-2 whitespace-nowrap font-semibold leading-tight text-white [font-size:clamp(0.875rem,5.4cqw,1.5rem)]">Career Training Overview</h2>
            <ul className="mt-6 text-sm text-white/75">
              {[
                { title: 'Build platform knowledge', body: 'Learn ServiceNow concepts and relevant technical fundamentals.', icon: BookOpen, iconClass: 'bg-blue-400/15 text-blue-200' },
                { title: 'Apply what you learn', body: 'Work through practical exercises and projects with trainer guidance.', icon: Laptop, iconClass: 'bg-cyan-400/15 text-cyan-200' },
                { title: 'Prepare for interviews', body: 'Practise explaining your skills through tests and mock interviews.', icon: MessageSquare, iconClass: 'bg-violet-400/15 text-violet-200' },
              ].map(({ title, body, icon: Icon, iconClass }) => (
                <li key={title} className="flex items-start gap-3 border-b border-dotted border-white/40 py-4 first:pt-0">
                  <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${iconClass}`}><Icon className="size-4" aria-hidden="true" /></span>
                  <span className="pt-0.5"><strong className="block text-sm font-semibold text-white">{title}</strong><span className="mt-1 block leading-relaxed text-white/60">{body}</span></span>
                </li>
              ))}
            </ul>
            <Link href="/contact" className="mt-5 flex min-h-10 items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white/75 transition-colors hover:border-blue-200/30 hover:bg-white/[0.08]">
              <span className="inline-flex items-center gap-2"><BriefcaseBusiness className="size-4 text-blue-300" aria-hidden="true" /> Career training enquiries</span>
              <span className="inline-flex items-center gap-1 text-blue-200">Contact us <ArrowRight className="size-3.5" aria-hidden="true" /></span>
            </Link>
          </div>
          <div className="relative mt-3 flex flex-nowrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-ink/80 p-4 shadow-lg sm:gap-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200"><BriefcaseBusiness className="size-5" aria-hidden="true" /></span>
              <span className="min-w-0"><span className="block text-xs font-bold uppercase tracking-wide text-cyan-200">Ready to get started?</span><span className="mt-1 block text-sm font-semibold leading-snug text-white/80">Ask us about career training.</span></span>
            </div>
            <a href={site.phoneHref} className="inline-flex min-h-9 shrink-0 items-center justify-center gap-1.5 rounded-full bg-gradient-brand px-3.5 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300">Call centre <Phone className="size-3.5" aria-hidden="true" /></a>
          </div>
        </div>
      }
      beforeFeatures={
        <Section tone="white" labelledBy="journey-title">
          <SectionHeading id="journey-title" eyebrow="01 · Your journey" title={<>From learning to <span className="text-gradient">career preparation.</span></>} description="Follow a practical learning path, from understanding the platform to preparing to discuss your skills in interviews." />
          <CareerJourney />
        </Section>
      }
      featuresEyebrow="02 · What you get"
      featuresTitle={<>Support for your <span className="text-gradient">next step.</span></>}
      featuresDescription="Build technical understanding, practise regularly and prepare to communicate your skills through a structured learning experience."
      featuresStyle="numbered"
      features={[
        { title: 'Practical ServiceNow learning', body: 'Learn platform concepts through weekday classes, daily practicals and assigned tasks. Apply your knowledge as you work through exercises and project work.', icon: BookOpen },
        { title: 'Trainer guidance', body: 'Get guidance as you work through ServiceNow topics and practical exercises. Use feedback and regular practice to strengthen your understanding of the platform.', icon: UserRoundCheck },
        { title: 'Interview preparation', body: 'Prepare to discuss your skills through weekend tests and mock interviews. The schedule also includes three hours a week of spoken English and interview preparation.', icon: MessageSquare },
        { title: 'Optional certification preparation', body: 'Ask about optional training for official ServiceNow certifications. Contact us to confirm available preparation, exam registration and any separate fees.', icon: Award },
        { title: 'Project-based practice', body: 'Apply ServiceNow concepts in project work alongside your daily exercises. Build experience explaining the tasks you complete and the skills you use.', icon: FolderKanban },
        { title: 'Communication skills', body: 'Practise spoken English as part of your interview preparation. Develop confidence describing your learning and responding to questions in a professional setting.', icon: MessagesSquare },
      ]}
      showHighlightsSection={false}
      extra={
        <>
          <Section labelledBy="career-paths-title">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <SectionEyebrow>03 · Career paths</SectionEyebrow>
                <h2 id="career-paths-title" className="mt-3 text-balance text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                  Explore courses for your <span className="text-gradient">career goals.</span>
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-foreground/80">Find a direction that fits your interests and explore the ServiceNow courses available.</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Requirements vary by employer, and training does not guarantee a job.</p>
                <div className="mt-5 flex flex-wrap gap-x-6">
                  <Link href="/courses" className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                    View course catalog <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                  <Link href="/servicenow-interview-questions" className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                    Practise interview questions <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
                <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
                  <Image src="/images/online-learning.png" alt="A learner working on a laptop" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                </div>
              </div>
              <CareerCourseScroll courses={courseMenuItems.map(({ slug, href, name, cardSubtitle, code, tagline }) => ({
                slug, href, name, cardSubtitle, description: courseMenuDescriptions[code] || tagline,
              }))} />
            </div>
          </Section>
          <Section tone="muted" labelledBy="who-title">
            <div>
              <div className="mx-auto max-w-3xl text-center">
                <SectionEyebrow>04 · Who is it for?</SectionEyebrow>
                <h2 id="who-title" className="mt-3 text-balance text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                  Choose a starting point for <span className="text-gradient">your goals.</span>
                </h2>
                <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-foreground/80">Whether you are starting out or building on existing experience, contact us to discuss prerequisites and a suitable course.</p>
              </div>
              <div className="mt-10 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)_minmax(0,1fr)] lg:grid-rows-2 lg:gap-6">
                {[
                  { title: 'Freshers', body: 'Explore ServiceNow fundamentals and practical exercises as a starting point for your learning journey.', icon: GraduationCap },
                  { title: 'Career changers', body: 'Explore the platform and its career paths while considering how your existing experience might apply.', icon: RefreshCw },
                  { title: 'Working professionals', body: 'Build on your experience by learning ServiceNow concepts and developing practical platform skills.', icon: BriefcaseBusiness },
                  { title: 'IT support professionals', body: 'Use your IT support experience to explore ServiceNow and its workflows.', icon: Headset },
                ].map(({ title, body, icon: Icon }, index) => (
                  <article key={title} className={`career-audience-border rounded-2xl border p-5 sm:p-6 ${index === 0 ? 'lg:col-start-1 lg:row-start-1' : index === 1 ? 'lg:col-start-1 lg:row-start-2' : index === 2 ? 'lg:col-start-3 lg:row-start-1' : 'lg:col-start-3 lg:row-start-2'}`}>
                    <div className="flex items-center gap-3">
                      <Icon className="size-8 shrink-0 text-primary" aria-hidden="true" />
                      <h3 className="text-xl font-bold leading-snug text-ink">{title}</h3>
                    </div>
                    <p className="mt-3 leading-relaxed text-foreground/80">{body}</p>
                  </article>
                ))}
                <div className="mx-auto w-full max-w-sm sm:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:self-center">
                  <div className="relative aspect-square">
                    <div className="career-audience-border absolute inset-0 rounded-full border-2" aria-hidden="true" />
                    <div className="absolute inset-3 flex overflow-hidden rounded-full">
                      <div className="relative h-full w-[56%]">
                        <Image src="/images/journey-interview.jpg" alt="A learner discussing their goals with an interviewer" fill sizes="(min-width: 1024px) 20vw, 65vw" className="object-cover object-left" />
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
            </div>
          </Section>
        </>
      }
      faqs={[
        { q: 'What does the career preparation schedule include?', a: 'The schedule includes classes Monday to Friday with daily practicals, weekend tests and mock interviews, plus three hours per week of spoken English and interview preparation. Contact us to confirm current batch timings.' },
        { q: 'Do I need prior ServiceNow experience?', a: 'Prerequisites can depend on the course you choose. Contact Rise Gen Technologies to discuss your background and a suitable starting point before enrolling.' },
        { q: 'Is official certification training included?', a: 'Official certification training is optional. Contact Rise Gen Technologies to confirm available preparation and whether exam registration or fees are separate.' },
        { q: 'What interview preparation is available?', a: 'The program includes weekend tests and mock interviews, along with spoken English and interview preparation. Contact us to confirm what is included in your batch.' },
        { q: 'Does the training guarantee a job?', a: 'No. The program provides technical learning and interview preparation. Hiring decisions depend on employers and individual circumstances.' },
        { q: 'Which ServiceNow topics can I study?', a: 'The course catalog includes ServiceNow Administration, ITSM and Scripting among other subjects. Explore the course pages or contact us for help choosing a starting point.' },
      ]}
    />
  )
}
