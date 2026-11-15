'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowRight,
  BookOpen,
  Braces,
  Code2,
  Database,
  Headset,
  HeartHandshake,
  Layers3,
  Settings2,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  type LucideIcon,
} from 'lucide-react'
import { courseMenuDescriptions, courseMenuGroups, courseMenuItems } from '@/lib/courses'

const courseIcons: Record<string, LucideIcon> = {
  ITSM: Headset,
  CMDB: Database,
  CSM: HeartHandshake,
  HRSD: HeartHandshake,
  GRC: ShieldCheck,
  ADMIN: Settings2,
  DEVELOPER: Code2,
  SCRIPTING: Braces,
  'NOW ASSIST': Sparkles,
}

const courseIconColors: Record<string, string> = {
  ITSM: 'border-indigo-100 bg-indigo-50 text-indigo-600 group-hover/course:border-indigo-600 group-hover/course:bg-indigo-600 group-hover/course:text-white',
  CMDB: 'border-blue-100 bg-blue-50 text-blue-600 group-hover/course:border-blue-600 group-hover/course:bg-blue-600 group-hover/course:text-white',
  CSM: 'border-cyan-100 bg-cyan-50 text-cyan-600 group-hover/course:border-cyan-600 group-hover/course:bg-cyan-600 group-hover/course:text-white',
  HRSD: 'border-fuchsia-100 bg-fuchsia-50 text-fuchsia-600 group-hover/course:border-fuchsia-600 group-hover/course:bg-fuchsia-600 group-hover/course:text-white',
  GRC: 'border-emerald-100 bg-emerald-50 text-emerald-600 group-hover/course:border-emerald-600 group-hover/course:bg-emerald-600 group-hover/course:text-white',
  ITOM: 'border-sky-100 bg-sky-50 text-sky-600 group-hover/course:border-sky-600 group-hover/course:bg-sky-600 group-hover/course:text-white',
  ADMIN: 'border-blue-100 bg-blue-50 text-blue-600 group-hover/course:border-blue-600 group-hover/course:bg-blue-600 group-hover/course:text-white',
  DEVELOPER: 'border-violet-100 bg-violet-50 text-violet-600 group-hover/course:border-violet-600 group-hover/course:bg-violet-600 group-hover/course:text-white',
  SCRIPTING: 'border-pink-100 bg-pink-50 text-pink-600 group-hover/course:border-pink-600 group-hover/course:bg-pink-600 group-hover/course:text-white',
  'NOW ASSIST': 'border-purple-100 bg-purple-50 text-purple-600 group-hover/course:border-purple-600 group-hover/course:bg-purple-600 group-hover/course:text-white',
}

const courseBadges: Record<string, string> = {
  ITSM: 'Popular',
  ADMIN: 'CSA Path',
  'NOW ASSIST': 'Gen AI',
}

export function CourseMegaMenu({ href, label }: { href: string; label: string }) {
  const [open, setOpen] = useState(false)

  return (
    <li
      className={`relative ${open ? 'z-[52]' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocusCapture={() => setOpen(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false)
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') setOpen(false)
      }}
    >
      <Link
        href={href}
        className={`flex items-center gap-1 whitespace-nowrap rounded-lg border px-2.5 py-2 transition-colors xl:px-3 ${
          open
            ? 'border-cyan-300/40 bg-cyan-300/10 text-cyan-300'
            : 'border-transparent hover:bg-muted hover:text-cyan-600'
        }`}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls="course-mega-menu"
      >
        {label}
        <ChevronDown className={`size-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </Link>
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`fixed inset-x-0 bottom-0 top-[83px] z-[40] bg-slate-950/80 backdrop-blur-[6px] transition-opacity duration-200 ease-out ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      />
      <div
        id="course-mega-menu"
        aria-hidden={!open}
        className={`fixed left-1/2 top-[83px] z-[51] w-[min(54rem,calc(100vw-2rem))] -translate-x-1/2 pt-3 transition-[opacity,transform,visibility] duration-200 ease-out min-[1536px]:w-[min(72rem,calc(100vw-2rem))] ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible translate-y-2 opacity-0'
        }`}
      >
        <div className="grid max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl lg:grid-cols-[minmax(0,1fr)_18rem] min-[1536px]:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="grid gap-6 p-5 md:grid-cols-2 md:gap-0 md:p-5 min-[1536px]:p-7">
            {courseMenuGroups.map((group, index) => (
              <section
                key={group.title}
                aria-labelledby={`course-menu-${group.title.replaceAll(' ', '-').toLowerCase()}`}
                className={index === 1 ? 'border-border md:border-l md:pl-7' : 'md:pr-7'}
              >
                <div className="mb-3 flex items-center gap-2 min-[1536px]:mb-4">
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-brand text-white min-[1536px]:size-8">
                    {index === 0 ? <Layers3 className="size-3.5 min-[1536px]:size-4" aria-hidden="true" /> : <Settings2 className="size-3.5 min-[1536px]:size-4" aria-hidden="true" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h2 id={`course-menu-${group.title.replaceAll(' ', '-').toLowerCase()}`} className="eyebrow text-[10px] font-bold tracking-[0.08em] text-primary min-[1536px]:text-xs">
                      {group.title}
                    </h2>
                    <p className="mt-0.5 truncate text-[10px] font-medium leading-snug text-muted-foreground min-[1536px]:text-xs">{group.description}</p>
                  </div>
                  <span className="h-px w-5 bg-gradient-brand" aria-hidden="true" />
                </div>
                <ul className="grid min-w-0 gap-0.5">
                  {courseMenuItems.filter((course) => group.categories.some((category) => category === course.category)).map((course) => {
                    const Icon = courseIcons[course.code] ?? BookOpen
                    const badge = courseBadges[course.code]
                    return (
                      <li key={course.slug} className="min-w-0">
                        <Link
                          href={course.href}
                          tabIndex={open ? undefined : -1}
                          className="group/course flex min-w-0 items-center gap-2 rounded-lg px-2 py-[7.25px] transition-[background-color,box-shadow,transform] duration-150 hover:translate-x-0.5 hover:bg-blue-50/80 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring min-[1536px]:gap-3 min-[1536px]:px-2.5 min-[1536px]:py-[10px]"
                        >
                          <span className={`flex size-6 shrink-0 items-center justify-center rounded-md border transition-colors duration-200 ${courseIconColors[course.code] ?? 'border-slate-100 bg-slate-50 text-slate-600 group-hover/course:border-slate-600 group-hover/course:bg-slate-600 group-hover/course:text-white'} min-[1536px]:size-8`}>
                            <Icon className="size-3 min-[1536px]:size-4" aria-hidden="true" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="flex min-w-0 items-center justify-between gap-2">
                              <span className="flex min-w-0 items-center gap-1.5">
                                <span className="min-w-0 truncate text-[11px] font-semibold leading-tight text-ink group-hover/course:text-primary min-[1536px]:text-sm">{course.name}</span>
                                {badge && (
                                  <span className="shrink-0 rounded-full bg-primary/10 px-1.5 py-0.5 text-[9px] font-semibold leading-none text-primary min-[1536px]:text-[11px]">
                                    {badge}
                                  </span>
                                )}
                              </span>
                              <ArrowRight className="size-3 shrink-0 text-brand-violet transition-[color,transform] group-hover/course:translate-x-0.5 group-hover/course:text-blue-600" aria-hidden="true" />
                            </span>
                            <span className="mt-0.5 line-clamp-2 min-w-0 text-[10px] font-medium leading-snug text-brand-2 min-[1536px]:text-xs">
                              {courseMenuDescriptions[course.code]}
                            </span>
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
                {index === 1 && (
                  <div className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-3 py-2 min-[1536px]:mt-5 min-[1536px]:px-4 min-[1536px]:py-3">
                    <div className="min-w-0">
                      <p className="text-[10px] font-semibold text-foreground min-[1536px]:text-xs">100% Real-Time Scenarios</p>
                      <p className="mt-0.5 truncate text-[9px] text-muted-foreground min-[1536px]:text-[11px]">Industry-aligned live projects included</p>
                    </div>
                    <span className="shrink-0 rounded-md bg-primary/5 px-2 py-1 text-[9px] font-semibold text-primary min-[1536px]:text-[11px]">Live Labs</span>
                  </div>
                )}
              </section>
            ))}
          </div>
          <aside className="relative flex flex-col justify-between overflow-hidden bg-ink p-5 text-ink-foreground min-[1536px]:p-7">
            <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-brand/25 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <span className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-blue-300 min-[1536px]:size-10">
                <Sparkles className="size-4 min-[1536px]:size-5" aria-hidden="true" />
              </span>
              <p className="eyebrow mt-4 text-[9px] text-blue-300 min-[1536px]:mt-5 min-[1536px]:text-[10px]">YOUR NEXT SKILL</p>
              <h2 className="mt-1.5 text-base font-bold leading-tight tracking-tight min-[1536px]:text-lg">
                Find the right
                <br />
                ServiceNow course for you.
              </h2>
              <p className="mt-2 text-[11px] font-normal leading-relaxed text-white/70 min-[1536px]:mt-3 min-[1536px]:text-sm">
                Explore each course, compare learning paths, and decide where you want to begin.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/80 min-[1536px]:mt-5 min-[1536px]:px-3 min-[1536px]:py-1.5 min-[1536px]:text-xs">
                <BookOpen className="size-3 text-blue-300 min-[1536px]:size-3.5" aria-hidden="true" />
                {courseMenuItems.length} courses to explore
              </p>
            </div>
            <div className="relative mt-5 space-y-1.5 min-[1536px]:mt-8 min-[1536px]:space-y-2">
              <Link href="/courses" tabIndex={open ? undefined : -1} className="flex items-center justify-center gap-2 rounded-lg bg-gradient-brand px-3 py-1.5 text-[11px] font-semibold text-white transition-opacity hover:opacity-90 min-[1536px]:px-4 min-[1536px]:py-3 min-[1536px]:text-sm">
                Browse All Courses <ArrowRight className="size-3.5 text-brand-violet min-[1536px]:size-4" aria-hidden="true" />
              </Link>
              <Link href="/contact" tabIndex={open ? undefined : -1} className="block rounded-lg border border-white/15 px-3 py-1.5 text-center text-[11px] font-semibold text-white/85 transition-colors hover:bg-white/10 min-[1536px]:px-4 min-[1536px]:py-2.5 min-[1536px]:text-sm">
                Talk to Our Team
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </li>
  )
}
