import Link from 'next/link'
import { Mail, MapPin, Phone } from 'lucide-react'
import { courses } from '@/lib/courses'
import { locations } from '@/lib/locations'
import { site } from '@/lib/site'
import { Logo } from './logo'

const resources = [
  { label: 'ServiceNow Online Training', href: '/servicenow-online-training' },
  { label: 'ServiceNow Classroom Training in Hyderabad', href: '/servicenow-classroom-training-hyderabad' },
  { label: 'ServiceNow Career Training', href: '/servicenow-career-training' },
  { label: 'ServiceNow Interview Questions', href: '/servicenow-interview-questions' },
  { label: 'What Is ServiceNow?', href: '/blog/what-is-servicenow' },
  { label: 'ServiceNow Certification Guide', href: '/blog/servicenow-certification-guide' },
  { label: 'Blog & Tutorials', href: '/blog' },
]

export function SiteFooter() {
  return (
    <footer className="bg-hero text-ink-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo tone="light" />
            <p className="fs-small mt-5 max-w-sm leading-relaxed text-white/70">
              {site.name} is a ServiceNow Training Institute in Hyderabad delivering ServiceNow online training, offline and classroom training with real-time projects and job-oriented career support.
            </p>
            <ul className="fs-small mt-6 flex flex-col gap-3 text-white/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <address className="not-italic">
                  {site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode}
                </address>
              </li>
              <li>
                <a href={site.phoneHref} className="flex gap-3 hover:text-white">
                  <Phone className="size-4" aria-hidden="true" />
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex gap-3 hover:text-white">
                  <Mail className="size-4" aria-hidden="true" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <FooterColumn title="ServiceNow Courses" className="lg:col-span-3">
            {courses.map((c) => (
              <FooterLink key={c.slug} href={`/courses/${c.slug}`}>
                {c.name}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Training & Resources" className="lg:col-span-3">
            {resources.map((r) => (
              <FooterLink key={r.href} href={r.href}>
                {r.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Hyderabad Locations" className="lg:col-span-2">
            {locations.map((l) => (
              <FooterLink key={l.slug} href={`/locations/${l.slug}`}>
                {l.keyword}
              </FooterLink>
            ))}
            <FooterLink href="/about">About us</FooterLink>
            <FooterLink href="/contact">Contact</FooterLink>
          </FooterColumn>
        </div>

        <div className="fs-small mt-14 flex flex-col gap-5 border-t border-white/10 pt-6 text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex items-center gap-2" aria-label="Social media">
            <li>
              <span role="img" aria-label="LinkedIn" className="flex size-[38px] items-center justify-center rounded-full border border-white/15 text-xs font-semibold text-white/70">
                in
              </span>
            </li>
            <li>
              <span role="img" aria-label="YouTube" className="flex size-[38px] items-center justify-center rounded-full border border-white/15 text-sm text-white/70">
                ▶
              </span>
            </li>
            <li>
              <span role="img" aria-label="Instagram" className="flex size-[38px] items-center justify-center rounded-full border border-white/15 text-xs font-semibold text-white/70">
                IG
              </span>
            </li>
            <li>
              <span role="img" aria-label="Facebook" className="flex size-[38px] items-center justify-center rounded-full border border-white/15 text-sm font-semibold text-white/70">
                f
              </span>
            </li>
            <li>
              <span role="img" aria-label="X" className="flex size-[38px] items-center justify-center rounded-full border border-white/15 text-xs font-semibold text-white/70">
                X
              </span>
            </li>
          </ul>
          <div className="flex flex-col gap-3 sm:items-end sm:text-right">
            <p>&copy; 2016–{new Date().getFullYear()} {site.shortName} · {site.address.locality}, {site.address.region} · India</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              <li><span>Privacy</span></li>
              <li><span>Terms</span></li>
              <li><span>Content standards</span></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, className, children }: { title: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <h2 className="eyebrow fs-title text-white/50">{title}</h2>
      <ul className="fs-small mt-4 flex flex-col gap-2.5">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/80 transition-colors hover:text-white">
        {children}
      </Link>
    </li>
  )
}
