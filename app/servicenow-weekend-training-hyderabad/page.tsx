import type { Metadata } from 'next'
import { CalendarDays, ExternalLink, Laptop, Layers, MapPin, Phone } from 'lucide-react'
import { LandingPage } from '@/components/landing-page'
import { TrainingHeroStrip } from '@/components/training-hero-strip'
import { createPageMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'ServiceNow Weekend Training in Hyderabad',
    description:
      'Join ServiceNow weekend training in Hyderabad or online. Learn through hands-on projects and trainer guidance. Contact us for current batch details.',
    canonicalPath: '/servicenow-weekend-training-hyderabad',
  }),
  keywords: [
    'ServiceNow Weekend Training in Hyderabad',
    'ServiceNow Weekend Batches',
    'ServiceNow Hybrid Training',
    'ServiceNow Training for Working Professionals',
  ],
}

export default function WeekendTrainingPage() {
  return (
    <LandingPage
      crumb="ServiceNow Weekend Training in Hyderabad"
      href="/servicenow-weekend-training-hyderabad"
      showCoursesSection={false}
      faqEyebrow="03 · FAQ"
      ctaTone="muted"
      eyebrow="ServiceNow Hybrid Training · Weekend Batches"
      title={
        <>
          ServiceNow Weekend Training <span className="font-light text-blue-300">in Hyderabad.</span>
        </>
      }
      intro={
        <div>
          <p>
            Learn ServiceNow in Saturday and Sunday intensive batches designed for working professionals. Attend classroom sessions in Hyderabad or switch between online and classroom learning, with the same hands-on curriculum and project work.
          </p>
          <dl className="mt-6 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { value: 'Sat–Sun', label: 'Weekend intensive batches' },
              { value: '8–10 hrs', label: 'Weekly learning schedule' },
              { value: 'Hybrid', label: 'Online and classroom options' },
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
      heroAside={
        <div role="region" aria-labelledby="weekend-training-title" className="relative mx-auto w-full max-w-md">
          <div className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-blue-400/15 blur-3xl" aria-hidden="true" />
          <TrainingHeroStrip mode="Weekend training batch" detail="Online & Hyderabad" icon={CalendarDays} />
          <div className="@container relative rounded-xl border border-white/15 bg-ink/75 p-5 shadow-2xl shadow-brand/20 backdrop-blur-sm sm:p-6">
            <div>
              <div className="flex items-center justify-between gap-3">
                <p className="text-[10px] font-bold uppercase tracking-wide text-blue-200/75">Weekend learning advantage</p>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-cyan-200">
                  <span className="size-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
                  Hybrid
                </span>
              </div>
              <h2 id="weekend-training-title" className="mt-2 whitespace-nowrap font-semibold leading-tight text-white [font-size:clamp(0.875rem,5.4cqw,1.5rem)]">
                Weekend Training Overview
              </h2>
            </div>
            <ul className="mt-6 text-sm text-white/75">
              {[
                {
                  title: 'Weekend-focused schedule',
                  body: 'Learn on Saturday and Sunday while keeping your weekdays free for other commitments.',
                  icon: CalendarDays,
                  iconClass: 'bg-blue-400/15 text-blue-200',
                },
                {
                  title: 'Online or classroom',
                  body: 'Choose online learning or classroom sessions in Hyderabad and ask about switching modes.',
                  icon: Layers,
                  iconClass: 'bg-cyan-400/15 text-cyan-200',
                },
                {
                  title: 'Hands-on practice',
                  body: 'Work through ServiceNow exercises and projects with trainer guidance.',
                  icon: Laptop,
                  iconClass: 'bg-violet-400/15 text-violet-200',
                },
              ].map(({ title, body, icon: Icon, iconClass }) => (
                <li key={title} className="flex items-start gap-3 border-b border-dotted border-white/40 py-4 first:pt-0">
                  <span className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${iconClass}`}>
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="pt-0.5">
                    <strong className="block text-sm font-semibold text-white">{title}</strong>
                    <span className="mt-1 block leading-relaxed text-white/60">{body}</span>
                  </span>
                </li>
              ))}
            </ul>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kukatpally%2C%20Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex min-h-10 items-center justify-between gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white/75 transition-colors hover:border-blue-200/30 hover:bg-white/[0.08]"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-blue-300" aria-hidden="true" />
                Kukatpally centre location
              </span>
              <span className="inline-flex items-center gap-1 text-blue-200">
                View map <ExternalLink className="size-3" aria-hidden="true" />
              </span>
            </a>
          </div>
          <div className="relative mt-3 flex flex-nowrap items-center justify-between gap-2 rounded-2xl border border-white/10 bg-ink/80 p-4 shadow-lg sm:gap-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <CalendarDays className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold uppercase tracking-wide text-cyan-200">Ready to join a weekend batch?</span>
                <span className="mt-1 block text-sm font-semibold leading-snug text-white/80">
                  Ask us about upcoming batch timings.
                </span>
              </span>
            </div>
            <a
              href={site.phoneHref}
              className="inline-flex min-h-9 shrink-0 items-center justify-center gap-1.5 rounded-full bg-gradient-brand px-3.5 py-2 text-sm font-bold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
            >
              Call centre <Phone className="size-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      }
      heroSecondaryActionVariant="ghostLight"
      featuresTitle={
        <>
          Keep learning, <span className="text-gradient">even with a busy workweek.</span>
        </>
      }
      featureDescriptionClassName="line-clamp-none"
      features={[
        { title: 'Weekend-focused schedule', body: 'Build ServiceNow skills through focused Saturday and Sunday sessions. Keep your weekdays free while making steady progress with a structured learning schedule.' },
        { title: 'Classroom or online', body: 'Join weekend training online or attend classes in Hyderabad. Ask about switching between modes to keep learning when your schedule or location changes.' },
        { title: 'Hands-on practice', body: 'Put ServiceNow concepts into practice through exercises and project work. Get trainer guidance as you apply what you learn and build confidence on the platform.' },
        { title: 'Designed for professionals', body: 'Develop practical ServiceNow skills alongside your work commitments. The intensive weekend format helps you make time for learning without weekday classes.' },
      ]}
      highlightsTitle="What the ServiceNow weekend batch includes"
      highlightsDescription="Build practical ServiceNow skills through focused weekend sessions, hands-on projects and trainer guidance. Choose online or classroom learning in Hyderabad and prepare for interviews while balancing your weekday commitments."
      highlights={[
        'Saturday and Sunday intensive batches',
        'Eight to ten hours of weekly sessions',
        'Online and Hyderabad classroom options',
        'Flexible switching between learning modes',
        'Hands-on ServiceNow curriculum and projects',
        'Interview preparation and mock interviews',
      ]}
      faqs={[
        { q: 'When are the weekend ServiceNow batches held?', a: 'Weekend batches are planned for Saturday and Sunday. Contact Rise Gen Technologies to confirm the current batch schedule and availability.' },
        { q: 'Can I join online or in the classroom?', a: 'Weekend learners can choose online training or classroom sessions in Hyderabad. Contact Rise Gen Technologies to confirm the mode available for your chosen batch.' },
        { q: 'Can I switch between online and classroom training?', a: 'The hybrid batch is designed to allow switching between online and classroom modes. Confirm the current arrangements with Rise Gen Technologies before enrolling.' },
        { q: 'How many hours per week should I plan for?', a: 'Weekend batches are described as intensive sessions of around eight to ten hours per week. Confirm the exact hours and timings for the next batch with Rise Gen Technologies.' },
        { q: 'Does the weekend batch include hands-on ServiceNow practice?', a: 'Yes. The weekend training includes practical exercises and project work with trainer guidance to help you apply ServiceNow concepts.' },
        { q: 'Is interview preparation available with weekend training?', a: 'The weekend training includes interview preparation and mock interviews. Contact Rise Gen Technologies to confirm what is included in your chosen batch.' },
      ]}
    />
  )
}
