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
  backgroundImagePriority = false,
  backgroundImageClassName,
  backgroundGrid = false,
  backgroundDecoration,
  backgroundMap,
  actions,
  aside,
  stats,
  statsStyle = 'default',
  statsLabelClassName,
  contentClassName,
}: {
  eyebrow: string
  title: React.ReactNode
  description: React.ReactNode
  breadcrumbs?: BreadcrumbItem[]
  backgroundImage?: string
  backgroundImagePriority?: boolean
  backgroundImageClassName?: string
  backgroundGrid?: boolean
  backgroundDecoration?: string
  backgroundMap?: string
  actions?: React.ReactNode
  aside?: React.ReactNode
  stats?: HeroStat[]
  statsStyle?: 'default' | 'cards'
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
          loading={backgroundImagePriority ? 'eager' : undefined}
          aria-hidden="true"
          className={cn('pointer-events-none object-cover', backgroundImageClassName ?? 'opacity-[0.12] mix-blend-luminosity')}
        />
      )}
      {backgroundGrid && <div aria-hidden="true" className="bg-hero-grid pointer-events-none absolute inset-0" />}
      {backgroundDecoration && (
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-[0.14] sm:w-3/4 lg:w-2/3" aria-hidden="true">
          <Image
            src={backgroundDecoration}
            alt=""
            fill
            sizes="(min-width: 1024px) 67vw, 100vw"
            className="object-contain object-right"
          />
        </div>
      )}
      {backgroundMap && (
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/2 opacity-[0.18] lg:w-1/3" aria-hidden="true">
          <Image
            src={backgroundMap}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 50vw"
            className="object-contain object-left"
          />
        </div>
      )}
      <div className={cn('relative mx-auto max-w-7xl px-4 pt-16 md:px-6 md:pt-24', breadcrumbs ? 'pb-8 md:pb-10' : 'pb-14', contentClassName)}>
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
          <dl className={cn(
            'mt-10 grid grid-cols-2 md:grid-cols-4',
            statsStyle === 'cards'
              ? 'gap-3 md:gap-4'
              : 'mt-16 border-t border-white/10',
          )}>
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={cn(
                  statsStyle === 'cards'
                    ? 'rounded-xl border border-white/10 bg-white/[0.04] p-4 md:p-5'
                    : cn('py-6 pr-4', i > 0 && 'md:border-l md:border-white/10 md:pl-6', i % 2 === 1 && 'border-l border-white/10 pl-4 md:pl-6'),
                )}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className={cn('text-2xl font-bold tracking-tight', statsStyle === 'cards' && 'text-blue-300 md:text-3xl')}>{s.value}</dd>
                <dd className={cn(
                  'mt-2 min-h-[2.5rem] text-white/60',
                  statsLabelClassName ? 'leading-5' : 'text-sm max-[1199px]:text-[13px]',
                  statsStyle === 'cards' && 'mt-1 min-h-0 text-xs leading-relaxed md:text-sm',
                  statsLabelClassName,
                )}>{s.label}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
      {breadcrumbs && (
        <div className="pb-8 md:pb-10">
          <Breadcrumbs items={breadcrumbs} variant="hero" />
        </div>
      )}
    </section>
  )
}

export function AccentText({ children, className }: { children: React.ReactNode; className?: string }) {
  return <em className={cn('font-light italic text-blue-300', className)}>{children}</em>
}
