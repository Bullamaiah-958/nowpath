'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { courses } from '@/lib/courses'
import { mainNav } from '@/lib/site'

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="flex size-10 items-center justify-center rounded-lg border border-border bg-card"
      >
        {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
      </button>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest('a')) setOpen(false)
          }}
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border bg-background px-4 pb-8 pt-4 shadow-xl"
        >
          <ul className="flex flex-col">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block border-b border-border py-3 text-base font-semibold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-6 text-muted-foreground">Popular courses</p>
          <ul className="mt-2 grid grid-cols-2 gap-2">
            {courses.map((c) => (
              <li key={c.slug}>
                <Link href={`/courses/${c.slug}`} className="block rounded-lg bg-card p-3 text-sm font-semibold">
                  {c.name.replace('ServiceNow ', '')}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="bg-gradient-brand mt-6 flex h-12 items-center justify-center rounded-lg font-semibold text-white">
            Book a free demo
          </Link>
        </nav>
      )}
    </div>
  )
}
