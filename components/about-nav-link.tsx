'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function AboutNavLink() {
  const isActive = usePathname() === '/about'

  return (
    <Link
      href="/about"
      aria-current={isActive ? 'page' : undefined}
      className={`relative block rounded-lg px-3 py-1.5 transition-colors hover:text-cyan-600 ${isActive ? 'text-cyan-600 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-cyan-500' : ''}`}
    >
      About
    </Link>
  )
}
