import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  return (
    <Link href="/" className={cn('flex items-center gap-2.5', className)} aria-label="NowPath ServiceNow Training Institute">
      <span className="bg-gradient-brand flex size-9 items-center justify-center rounded-xl text-sm font-bold text-white" aria-hidden="true">
        NP
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn('text-lg font-bold tracking-tight', tone === 'light' ? 'text-white' : 'text-foreground')}>NowPath</span>
        <span className={cn('mt-1 text-[0.6rem] font-semibold tracking-[0.2em] uppercase', tone === 'light' ? 'text-white/60' : 'text-muted-foreground')}>
          ServiceNow Institute
        </span>
      </span>
    </Link>
  )
}
