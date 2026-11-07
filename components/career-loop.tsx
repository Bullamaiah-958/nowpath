import Link from 'next/link'
import { roadmapSteps } from '@/data/site'

export function CareerLoop() {
  return (
    <div className="mx-auto min-h-[33rem] w-full max-w-sm rounded-3xl border border-blue-200/25 bg-gradient-to-br from-blue-400/15 via-white/[0.08] to-violet-400/15 p-5 shadow-2xl shadow-brand/20 backdrop-blur-sm sm:p-6" role="region" aria-labelledby="career-roadmap-title">
      <div className="flex items-center gap-3">
        <h2 id="career-roadmap-title" className="eyebrow text-blue-300">Your Career Roadmap</h2>
        <span className="shrink-0 rounded-full border border-blue-200/25 bg-blue-300/10 px-2.5 py-1 font-mono text-xs text-white/85">01 — 05</span>
      </div>
      <p className="mt-1 min-w-0 text-sm text-white/80">Five steps to become job-ready in ServiceNow</p>
      <ol className="relative mt-5 space-y-2 [--step-circle-size:2.5rem] [--step-padding:0.75rem] [--step-border:1px] before:absolute before:bottom-[2.285rem] before:left-[calc(var(--step-border)+var(--step-padding)+(var(--step-circle-size)/2))] before:top-[2.285rem] before:w-px before:-translate-x-1/2 before:bg-gradient-to-b before:from-blue-300/90 before:to-violet-300/70">
        {roadmapSteps.map((step, index) => (
          <li
            key={step.number}
            className={`relative flex items-center gap-3 rounded-2xl border p-[var(--step-padding)] ${
              index === roadmapSteps.length - 1
                ? 'border-blue-200/45 bg-gradient-to-r from-blue-300/30 to-blue-200/15 shadow-md shadow-blue-950/10'
                : 'border-blue-200/20 bg-blue-200/[0.08]'
            }`}
          >
            <Link href={step.href} className="flex min-w-0 flex-1 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-200">
              <span
                className={`z-10 flex size-[var(--step-circle-size)] shrink-0 items-center justify-center rounded-xl font-mono text-sm font-semibold ${
                  index === roadmapSteps.length - 1 ? 'bg-blue-200 text-ink shadow-md shadow-blue-300/25' : 'border border-blue-200/25 bg-ink text-blue-200'
                }`}
              >
                {step.number}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold">{step.title}</span>
                <span className={`mt-0.5 block leading-relaxed text-white/85 ${
                  index === 0
                    ? 'whitespace-nowrap text-[0.6875rem] min-[24rem]:text-[0.8125rem]'
                    : index === roadmapSteps.length - 1
                      ? 'whitespace-nowrap text-[0.625rem] min-[24rem]:text-xs md:text-[0.8125rem]'
                      : 'whitespace-normal break-words text-[0.8125rem]'
                }`}>{step.description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
