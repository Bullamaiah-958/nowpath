import Link from 'next/link'
import { ChevronDown, Phone } from 'lucide-react'
import { mainNav, site, trainingModes } from '@/lib/site'
import { AboutNavLink } from './about-nav-link'
import { CourseMegaMenu } from './course-mega-menu'
import { Logo } from './logo'
import { MobileMenu } from './mobile-menu'

export function SiteHeader() {
  const [coursesItem, ...rest] = mainNav
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="bg-gradient-brand h-[3px]" aria-hidden="true" />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 md:px-6">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1 rounded-xl border border-border bg-card/70 px-2 py-2 text-sm font-semibold xl:gap-2">
            <CourseMegaMenu href={coursesItem.href} label={coursesItem.label} />
            <li className="group relative">
              <Link
                href="/servicenow-online-training"
                className="flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 transition-colors hover:bg-muted hover:text-cyan-600 xl:px-3"
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
                    className="flex items-center gap-1 whitespace-nowrap rounded-lg px-2.5 py-2 transition-colors hover:bg-muted hover:text-cyan-600 xl:px-3"
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
                  {item.label === 'About' ? (
                    <AboutNavLink />
                  ) : (
                    <Link href={item.href} className="block whitespace-nowrap rounded-lg px-2.5 py-2 transition-colors hover:bg-muted hover:text-cyan-600 xl:px-3">
                      {item.label}
                    </Link>
                  )}
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a href={site.phoneHref} className="hidden items-center gap-2 px-2 text-sm font-semibold transition-colors hover:text-cyan-600 xl:flex">
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </a>
          <Link href="/contact" className="header-demo-shimmer relative hidden h-10 items-center justify-center overflow-hidden rounded-lg bg-gradient-brand px-4 text-sm font-semibold text-white shadow-lg shadow-brand/25 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:inline-flex">
            Book Free Demo
          </Link>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
