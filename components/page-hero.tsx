import { cn } from '@/lib/utils'
import Image from 'next/image'
import { Breadcrumbs } from './breadcrumbs'
import { SectionEyebrow } from './section'

export type HeroStat = { value: string; label: string }
export type BreadcrumbItem = { name: string; href: string }

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
  backgroundImage,
  actions,
  aside,
  stats,
  statsLabelClassName,
  contentClassName,
}: {
  eyebrow: string
  title: React.ReactNode
  description: React.ReactNode
  breadcrumbs?: BreadcrumbItem[]
  backgroundImage?: string
  actions?: React.ReactNode
  aside?: React.ReactNode
  stats?: HeroStat[]
  statsLabelClassName?: string
  contentClassName?: string
}) {
  return (
    <section className="bg-hero relative overflow-hidden text-ink-foreground">
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          className="pointer-events-none object-cover opacity-[0.12] mix-blend-luminosity"
        />
      )}
      <div className={cn('relative mx-auto max-w-7xl px-4 pt-16 md:px-6 md:pt-24', contentClassName, breadcrumbs ? 'pb-2' : 'pb-14')}>
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
                <dd className="text-2xl font-bold tracking-tight">{s.value}</dd>
                <dd className={cn('mt-2 min-h-[2.5rem] text-white/60', statsLabelClassName ? 'leading-5' : 'text-sm max-[1199px]:text-[13px]', statsLabelClassName)}>{s.label}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
      {breadcrumbs && <Breadcrumbs items={breadcrumbs} variant="hero" />}
    </section>
  )
}

export function AccentText({ children, className }: { children: React.ReactNode; className?: string }) {
  return <em className={cn('font-light italic text-blue-300', className)}>{children}</em>
}
