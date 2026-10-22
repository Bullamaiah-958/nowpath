import Link from 'next/link'
import { ChevronDown, Phone } from 'lucide-react'
import { courses } from '@/lib/courses'
import { mainNav, site } from '@/lib/site'
import { Logo } from './logo'
import { LinkButton } from './link-button'
import { MobileMenu } from './mobile-menu'

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
              <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="grid w-[34rem] grid-cols-2 gap-1 rounded-2xl border border-border bg-card p-3 shadow-xl">
                  {courses.map((c) => (
                    <Link key={c.slug} href={`/courses/${c.slug}`} className="rounded-xl p-3 transition-colors hover:bg-muted">
                      <span className="eyebrow text-[0.65rem] text-brand-2">{c.code}</span>
                      <span className="mt-1 block font-semibold leading-snug">{c.name}</span>
                    </Link>
                  ))}
                  <Link href="/courses" className="col-span-2 mt-1 rounded-xl bg-muted p-3 text-center text-sm font-semibold text-primary">
                    View all ServiceNow Courses
                  </Link>
                </div>
              </div>
            </li>
            {rest.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="block rounded-lg px-3 py-1.5 transition-colors hover:bg-muted">
                  {item.label}
                </Link>
              </li>
            ))}
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
