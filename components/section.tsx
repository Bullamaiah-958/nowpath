import { cn } from '@/lib/utils'

const tones = {
  default: 'bg-background',
  muted: 'bg-secondary',
  white: 'bg-card',
  dark: 'bg-hero text-ink-foreground',
} as const

export function Section({
  id,
  tone = 'default',
  className,
  children,
  labelledBy,
}: {
  id?: string
  tone?: keyof typeof tones
  className?: string
  children: React.ReactNode
  labelledBy?: string
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn(tones[tone], 'py-12 md:py-20', className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-6">{children}</div>
    </section>
  )
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  tone = 'default',
  className,
}: {
  id?: string
  eyebrow?: string
  title: React.ReactNode
  description?: React.ReactNode
  tone?: 'default' | 'dark'
  className?: string
}) {
  return (
    <div className={cn('grid gap-6 lg:grid-cols-12 lg:items-end', className)}>
      <div className="lg:col-span-7">
        {eyebrow && <SectionEyebrow tone={tone}>{eyebrow}</SectionEyebrow>}
        <h2 id={id} className="mt-3 text-balance text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>
      {description && (
        <p className={cn('text-pretty leading-relaxed lg:col-span-5', tone === 'dark' ? 'text-white/70' : 'text-muted-foreground')}>
          {description}
        </p>
      )}
    </div>
  )
}

export function SectionEyebrow({
  tone = 'default',
  children,
  className,
}: {
  tone?: 'default' | 'dark'
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        'inline-flex rounded-full px-3.5 py-1.5 text-xs font-bold tracking-[0.12em] uppercase',
        tone === 'dark' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-gradient-brand text-white',
        className,
      )}
    >
      {children}
    </p>
  )
}
