'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { courseMenuDescriptions, courseMenuGroups, courseMenuItems } from '@/lib/courses'
import { mainNav, trainingModes } from '@/lib/site'

export function MobileMenu() {
  const [open, setOpen] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [coursesItem, ...rest] = mainNav
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
            <li key={coursesItem.href}>
              <div className="flex items-center justify-between border-b border-border">
                <Link href={coursesItem.href} className="py-3 text-base font-semibold">
                  {coursesItem.label}
                </Link>
                <button
                  type="button"
                  aria-expanded={coursesOpen}
                  aria-controls="mobile-courses-menu"
                  aria-label={`${coursesOpen ? 'Collapse' : 'Expand'} courses menu`}
                  onClick={() => setCoursesOpen((value) => !value)}
                  className="flex size-10 items-center justify-center rounded-lg hover:bg-muted"
                >
                  <ChevronDown className={`size-4 transition-transform ${coursesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
              </div>
              {coursesOpen && (
                <div id="mobile-courses-menu" className="space-y-4 border-b border-border py-4">
                  {courseMenuGroups.map((group) => (
                    <section key={group.title}>
                      <h2 className="eyebrow text-[0.65rem] text-brand-2">{group.title}</h2>
                      <p className="mt-1 text-xs text-foreground/70">{group.description}</p>
                      <ul className="mt-2 grid gap-1">
                        {courseMenuItems.filter((course) => group.categories.some((category) => category === course.category)).map((course) => (
                          <li key={course.slug}>
                            <Link href={course.href} className="block rounded-lg p-2 transition-colors hover:bg-muted">
                              <span className="block text-sm font-semibold">{course.name}</span>
                              <span className="mt-0.5 line-clamp-2 block text-[13px] leading-relaxed text-foreground/75">
                                {courseMenuDescriptions[course.code]}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                  <Link href="/courses" className="block rounded-lg bg-muted p-3 text-center text-sm font-semibold text-primary">
                    Explore all courses →
                  </Link>
                </div>
              )}
            </li>
            <li className="border-b border-border py-3">
              <p className="text-base font-semibold">Training Mode</p>
              <ul className="mt-1 pl-3">
                {trainingModes.map((mode) => (
                  <li key={mode.href}>
                    <Link href={mode.href} className="block py-2 text-sm font-medium text-foreground/80">
                      {mode.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            {rest.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block border-b border-border py-3 text-base font-semibold">
                  {item.label}
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
