import { Section, SectionEyebrow } from '@/components/section'
import { whyNowPathCards } from '@/data/site'

export function HomeWhy() {
  return (
    <Section id="why" tone="muted" labelledBy="why-title">
      <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <SectionEyebrow>WHY NOWPATH</SectionEyebrow>
          <h2 id="why-title" className="mt-3 text-balance text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            Why Choose NowPath for <span className="text-gradient">ServiceNow Training</span>
          </h2>
        </div>
        <p className="text-pretty text-lg leading-relaxed text-ink lg:col-span-5">
          Learn through tracked progress, hands-on practice and clearly grouped ServiceNow topics.
        </p>
      </div>
      <div className="why-nowpath-grid mt-12 grid items-stretch overflow-hidden rounded-2xl border border-border bg-card">
        {whyNowPathCards.map((card) => (
          <article
            key={card.title}
            className="why-nowpath-card flex h-full flex-col p-7 md:p-8"
          >
            <p className="eyebrow text-[var(--text-accent)]">{card.label}</p>
            <h3 className="why-nowpath-title fs-title mt-3 font-bold tracking-tight text-ink">{card.title}</h3>
            <p className="why-nowpath-description fs-small mt-3 leading-relaxed text-foreground/80">{card.body}</p>
          </article>
        ))}
      </div>
      <p className="mt-4 text-base text-muted-foreground">
        We provide mock interviews, resume support and spoken English practice. All batch terms are discussed with every student before the batch starts.
      </p>
    </Section>
  )
}
