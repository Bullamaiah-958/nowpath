import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex shrink-0 items-center rounded-md',
        tone === 'light' ? 'w-fit bg-white px-2 py-1' : 'w-fit',
        className,
      )}
      aria-label="NowPath — Learn, Practice, Get Placed"
    >
      <Image
        src="/images/nowpath-logo.png"
        alt="NowPath — Learn, Practice, Get Placed"
        width={624}
        height={172}
        priority
        className={cn('h-[52px] w-auto max-w-[225px] object-contain', tone === 'light' && 'h-14 max-w-[245px]')}
      />
    </Link>
  )
}
