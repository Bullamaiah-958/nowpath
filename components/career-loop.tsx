import Link from 'next/link'
import { roadmapSteps } from '@/data/site'

export function CareerLoop() {
  return (
    <div className="mx-auto min-h-[33rem] w-full max-w-sm rounded-3xl border border-white/15 bg-white/[0.06] p-5 shadow-2xl shadow-black/10 backdrop-blur-sm sm:p-6" role="region" aria-labelledby="career-roadmap-title">
      <div className="flex items-center gap-3">
        <h2 id="career-roadmap-title" className="eyebrow text-emerald-300">Your Career Roadmap</h2>
        <span className="shrink-0 rounded-full border border-white/15 px-2.5 py-1 font-mono text-xs text-white/70">01 — 05</span>
      </div>
      <p className="mt-1 min-w-0 text-sm text-white/60">Five steps to become job-ready in ServiceNow</p>
      <ol className="relative mt-5 space-y-2 [--step-circle-size:2.5rem] [--step-padding:0.75rem] [--step-border:1px] before:absolute before:bottom-[2.285rem] before:left-[calc(var(--step-border)+var(--step-padding)+(var(--step-circle-size)/2))] before:top-[2.285rem] before:w-px before:-translate-x-1/2 before:bg-gradient-to-b before:from-emerald-300/70 before:to-emerald-300/20">
        {roadmapSteps.map((step, index) => (
          <li
            key={step.number}
            className={`relative flex items-center gap-3 rounded-2xl border p-[var(--step-padding)] ${
              index === roadmapSteps.length - 1
                ? 'border-emerald-300/30 bg-emerald-300/10'
                : 'border-white/10 bg-white/[0.03]'
            }`}
          >
            <Link href={step.href} className="flex min-w-0 flex-1 items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200">
              <span
                className={`z-10 flex size-[var(--step-circle-size)] shrink-0 items-center justify-center rounded-xl font-mono text-sm font-semibold ${
                  index === roadmapSteps.length - 1 ? 'bg-emerald-300 text-ink' : 'border border-white/15 bg-ink text-emerald-200'
                }`}
              >
                {step.number}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold">{step.title}</span>
                <span className={`mt-0.5 block leading-relaxed text-white/75 ${
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
