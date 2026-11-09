'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function AboutNavLink() {
  const isActive = usePathname() === '/about'

  return (
    <Link
      href="/about"
      aria-current={isActive ? 'page' : undefined}
      className={`relative block whitespace-nowrap rounded-lg px-2.5 py-2 transition-colors hover:text-cyan-600 xl:px-3 ${isActive ? 'text-cyan-600 after:absolute after:inset-x-2.5 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-cyan-500 xl:after:inset-x-3' : ''}`}
    >
      About
    </Link>
  )
}
