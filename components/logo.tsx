import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export function Logo({ tone = 'dark', className }: { tone?: 'dark' | 'light'; className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'flex w-[190px] shrink-0 flex-col items-center rounded-md sm:w-[210px]',
        tone === 'light' ? 'bg-white px-2 py-1' : '',
        className,
      )}
      aria-label="Rise Gen Technologies"
    >
      <span className="relative flex w-[104px] flex-col items-center sm:w-[124px]">
        <Image
          src="/images/rise-gen-symbol.png"
          alt=""
          aria-hidden="true"
          width={457}
          height={315}
          priority
          unoptimized
          className="h-auto w-[47%] max-w-none object-contain"
        />
        <Image
          src="/images/rise-gen-word.png"
          alt="Rise Gen"
          width={923}
          height={100}
          priority
          unoptimized
          className="mt-0.5 h-auto w-[112%] max-w-none object-contain"
        />
      </span>
      <span
        aria-hidden="true"
        className="mt-0.5 flex w-full items-center justify-center gap-1 whitespace-nowrap text-[9px] font-semibold leading-[10px] tracking-[0.04em] text-[#102a3a] sm:text-[10px] sm:leading-3"
      >
        <Image
          src="/images/rise-gen-caption-arrow-left.png"
          alt=""
          aria-hidden="true"
          width={100}
          height={44}
          unoptimized
          className="h-auto w-5 shrink-0 sm:w-6"
        />
        TECHNOLOGY SOLUTIONS
        <Image
          src="/images/rise-gen-caption-arrow-right.png"
          alt=""
          aria-hidden="true"
          width={100}
          height={44}
          unoptimized
          className="h-auto w-5 shrink-0 sm:w-6"
        />
      </span>
    </Link>
  )
}
