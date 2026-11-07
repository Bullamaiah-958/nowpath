import { Section, SectionEyebrow } from '@/components/section'
import { whyTrainingCards } from '@/data/site'

export function HomeWhy() {
  return (
    <Section id="why" tone="muted" labelledBy="why-title">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <SectionEyebrow>WHY RISE GEN TECHNOLOGIES</SectionEyebrow>
          <h2 id="why-title" className="mt-3 text-balance text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            Why Choose <span className="whitespace-nowrap">Rise Gen</span> Technologies for{' '}
            <span className="text-gradient">ServiceNow Training</span>
          </h2>
        </div>
        <p className="fs-lead border-l-2 border-brand-violet/50 pl-4 text-pretty leading-6 text-ink lg:col-span-5">
          <span className="block">Build real ServiceNow skills with guided, hands-on practice.</span>
          <span className="block">Track your progress through daily tasks and weekly tests.</span>
          <span className="block">Prepare for your next step with projects and interview support.</span>
        </p>
      </div>
      <div className="why-training-grid mt-12 grid items-stretch overflow-hidden rounded-2xl border border-border bg-card">
        {whyTrainingCards.map((card) => (
          <article
            key={card.title}
            className="why-training-card flex h-full flex-col p-7 md:p-8"
          >
            <p className="eyebrow text-[var(--text-accent)]">{card.label}</p>
            <h3 className="why-training-title fs-title mt-3 font-bold tracking-tight text-ink">{card.title}</h3>
            <p className="why-training-description fs-small mt-3 font-medium leading-relaxed text-foreground">{card.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-4 text-base text-muted-foreground">
        We provide mock interviews, resume support and spoken English practice. All batch terms are discussed with every student before the batch starts.
      </p>
    </Section>
  )
}
