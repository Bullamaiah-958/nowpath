import { cn } from '@/lib/utils'
import { SectionEyebrow } from './section'

export type HeroStat = { value: string; label: string }

export function PageHero({
  eyebrow,
  title,
  description,
  actions,
  aside,
  stats,
  statsLabelClassName,
}: {
  eyebrow: string
  title: React.ReactNode
  description: React.ReactNode
  actions?: React.ReactNode
  aside?: React.ReactNode
  stats?: HeroStat[]
  statsLabelClassName?: string
}) {
  return (
    <section className="bg-hero relative overflow-hidden text-ink-foreground">
      <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-16 md:px-6 md:pt-24">
        <div className={cn('grid gap-12', aside && 'lg:grid-cols-12 lg:items-center')}>
          <div className={cn(aside && 'lg:col-span-7')}>
            <SectionEyebrow tone="dark">{eyebrow}</SectionEyebrow>
            <h1 className="mt-5 text-balance text-3xl font-bold leading-[0.98] tracking-tight md:text-5xl lg:text-6xl">{title}</h1>
            <div className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-white/70">{description}</div>
            {actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}
          </div>
          {aside && <div className="lg:col-span-5">{aside}</div>}
        </div>
        {stats && (
          <dl className="mt-16 grid grid-cols-2 border-t border-white/10 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={s.label} className={cn('py-6 pr-4', i > 0 && 'md:border-l md:border-white/10 md:pl-6', i % 2 === 1 && 'border-l border-white/10 pl-4 md:pl-6')}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-bold tracking-tight md:text-3xl">{s.value}</dd>
                <dd className={cn('mt-2 min-h-[2.5rem] text-white/60', statsLabelClassName ? 'leading-5' : 'text-sm max-[1199px]:text-[13px]', statsLabelClassName)}>{s.label}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  )
}

export function AccentText({ children, className }: { children: React.ReactNode; className?: string }) {
  return <em className={cn('font-light italic text-emerald-300', className)}>{children}</em>
}
