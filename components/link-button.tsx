import Link from 'next/link'
import { cn } from '@/lib/utils'

const variants = {
  primary: 'bg-gradient-brand text-white shadow-lg shadow-brand/25 hover:opacity-90',
  light: 'bg-white text-ink hover:bg-white/90',
  outline: 'border border-foreground/15 bg-card text-foreground hover:border-foreground/30',
  ghostLight: 'border border-white/20 text-white hover:bg-white/10',
} as const

type Props = {
  href: string
  variant?: keyof typeof variants
  size?: 'md' | 'lg'
  className?: string
  children: React.ReactNode
  external?: boolean
}

export function LinkButton({ href, variant = 'primary', size = 'md', className, children, external }: Props) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring',
    size === 'lg' ? 'h-12 px-6 text-base' : 'h-10 px-4 text-sm',
    variants[variant],
    className,
  )
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
