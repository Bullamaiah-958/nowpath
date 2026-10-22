import Link from 'next/link'
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
  Phone,
  type LucideIcon,
} from 'lucide-react'
import { courseMenuDescriptions, courseMenuGroups, courseMenuItems } from '@/lib/courses'
import { mainNav, site, trainingModes } from '@/lib/site'
import { Logo } from './logo'
import { LinkButton } from './link-button'
import { MobileMenu } from './mobile-menu'

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

export function SiteHeader() {
  const [coursesItem, ...rest] = mainNav
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="bg-gradient-brand h-[3px]" aria-hidden="true" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6">
        <Logo />

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-xl border border-border bg-card/70 px-2 py-1.5 text-sm font-semibold">
            <li className="group relative">
              <Link
                href={coursesItem.href}
                className="flex items-center gap-1 rounded-lg px-3 py-1.5 transition-colors hover:bg-muted"
                aria-haspopup="true"
              >
                {coursesItem.label}
                <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
              </Link>
              <div className="invisible fixed left-1/2 top-16 w-[min(72rem,calc(100vw-2rem))] -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="grid max-h-[calc(100dvh-5rem)] overflow-y-auto rounded-2xl border border-border bg-background shadow-2xl lg:grid-cols-[minmax(0,1fr)_18rem]">
                  <div className="grid gap-6 p-5 md:grid-cols-2 md:gap-0 md:p-7">
                    {courseMenuGroups.map((group, index) => (
                      <section
                        key={group.title}
                        aria-labelledby={`course-menu-${group.title.replaceAll(' ', '-').toLowerCase()}`}
                        className={index === 1 ? 'border-border md:border-l md:pl-7' : 'md:pr-7'}
                      >
                        <div className="mb-4 flex items-center gap-2.5">
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-accent text-brand-2">
                            {index === 0 ? <Layers3 className="size-4" aria-hidden="true" /> : <Settings2 className="size-4" aria-hidden="true" />}
                          </span>
                          <div className="min-w-0 flex-1">
                            <h2 id={`course-menu-${group.title.replaceAll(' ', '-').toLowerCase()}`} className="eyebrow text-[13px] font-bold tracking-[0.12em] text-primary">
                              {group.title}
                            </h2>
                            <p className="mt-0.5 text-sm font-medium leading-relaxed text-foreground">{group.description}</p>
                          </div>
                          <span className="h-px w-8 bg-gradient-brand" aria-hidden="true" />
                        </div>
                        <ul className="grid gap-1">
                          {courseMenuItems.filter((course) => group.categories.some((category) => category === course.category)).map((course) => {
                            const Icon = courseIcons[course.code] ?? BookOpen
                            return (
                              <li key={course.slug}>
                                <Link
                                  href={course.href}
                                  className="group/course flex items-center gap-3 rounded-lg px-2.5 py-2 transition-colors hover:bg-accent/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                                >
                                  <span className="border-gradient-brand flex size-8 shrink-0 items-center justify-center rounded-md text-primary transition-colors group-hover/course:text-brand-2">
                                    <Icon className="size-4" aria-hidden="true" />
                                  </span>
                                  <span className="min-w-0 flex-1">
                                    <span className="flex items-center justify-between gap-2">
                                      <span className="text-[14.5px] font-semibold leading-snug text-ink group-hover/course:text-primary">{course.name}</span>
                                      <ArrowRight className="size-3.5 shrink-0 text-brand-orange transition-transform group-hover/course:translate-x-0.5" aria-hidden="true" />
                                    </span>
                                    <span className="mt-0.5 line-clamp-2 block text-[13px] font-medium leading-relaxed text-brand-2">
                                      {courseMenuDescriptions[course.code]}
                                    </span>
                                  </span>
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      </section>
                    ))}
                  </div>
                  <aside className="relative flex flex-col justify-between overflow-hidden bg-ink p-6 text-ink-foreground md:p-7">
                    <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-brand/25 blur-3xl" aria-hidden="true" />
                    <div className="relative">
                      <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-emerald-300">
                        <Sparkles className="size-5" aria-hidden="true" />
                      </span>
                      <p className="eyebrow mt-5 text-[0.65rem] text-emerald-300">YOUR NEXT SKILL</p>
                      <h2 className="mt-2 text-xl font-bold leading-tight">Find the right ServiceNow course for you.</h2>
                      <p className="mt-3 text-sm font-normal leading-relaxed text-white/70">
                        Explore each course, compare learning paths, and decide where you want to begin.
                      </p>
                      <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80">
                        <BookOpen className="size-3.5 text-emerald-300" aria-hidden="true" />
                        {courseMenuItems.length} courses to explore
                      </p>
                    </div>
                    <div className="relative mt-8 space-y-2">
                      <Link href="/courses" className="flex items-center justify-center gap-2 rounded-lg bg-gradient-brand px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
                        Browse all courses <ArrowRight className="size-4 text-brand-orange" aria-hidden="true" />
                      </Link>
                      <Link href="/contact" className="block rounded-lg border border-white/15 px-4 py-2.5 text-center text-sm font-semibold text-white/85 transition-colors hover:bg-white/10">
                        Talk to our team
                      </Link>
                    </div>
                  </aside>
                </div>
              </div>
            </li>
            <li className="group relative">
              <Link
                href="/servicenow-online-training"
                className="flex items-center gap-1 rounded-lg px-3 py-1.5 transition-colors hover:bg-muted"
                aria-haspopup="true"
              >
                Training Mode
                <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
              </Link>
              <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="w-64 rounded-2xl border border-border bg-card p-2 shadow-xl">
                  {trainingModes.map((mode) => (
                    <Link key={mode.href} href={mode.href} className="block rounded-xl p-3 transition-colors hover:bg-muted">
                      {mode.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            {rest.map((item) =>
              item.label === 'Resources' ? (
                <li key={item.href} className="group relative">
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 rounded-lg px-3 py-1.5 transition-colors hover:bg-muted"
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className="size-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />
                  </Link>
                  <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="w-48 rounded-2xl border border-border bg-card p-2 shadow-xl">
                      <Link href="/blog" className="block rounded-xl p-3 transition-colors hover:bg-muted">
                        Blog
                      </Link>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link href={item.href} className="block rounded-lg px-3 py-1.5 transition-colors hover:bg-muted">
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="hidden items-center gap-2 px-2 text-sm font-semibold xl:flex">
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </a>
          <LinkButton href="/contact" className="hidden sm:inline-flex">
            Book free demo
          </LinkButton>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
