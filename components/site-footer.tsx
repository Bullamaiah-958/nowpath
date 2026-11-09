import Link from 'next/link'
import { ArrowRight, Mail, MapPin, MessageCircle, Phone, Video } from 'lucide-react'
import { courses } from '@/lib/courses'
import { site, trainingModes, whatsappLink } from '@/lib/site'
import { coursePagePath } from '@/data/courses'
import { Logo } from './logo'

const featuredCourseCodes = ['ADMIN', 'DEVELOPER', 'ITSM', 'SCRIPTING', 'HRSD', 'CSM']
const featuredCourses = featuredCourseCodes
  .map((code) => courses.find((course) => course.code === code))
  .filter((course) => course !== undefined)

const resources = [
  { label: 'About Us', href: '/about' },
  { label: 'Interview Q&A Bank', href: '/servicenow-interview-questions' },
  { label: 'Blog & Tutorials', href: '/blog' },
  { label: 'Free Demo Session', href: '/contact' },
  { label: 'Careers', href: '/servicenow-career-training' },
  { label: 'Contact Us', href: '/contact' },
]

export function SiteFooter() {
  const newsletterHref = `mailto:${site.email}?subject=${encodeURIComponent('Subscribe to Rise Gen Technologies updates')}&body=${encodeURIComponent('Please email me about upcoming ServiceNow courses, learning resources and batches.')}`

  return (
    <footer className="bg-hero text-ink-foreground">
      <section aria-labelledby="footer-updates-title" className="border-y border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-6 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/20 bg-blue-400/10 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-blue-300">
              <span className="size-1.5 rounded-full bg-blue-400" aria-hidden="true" />
              WEEKLY UPDATES
            </p>
            <h2 id="footer-updates-title" className="mt-2 text-lg font-semibold text-white">
              Get ServiceNow tips &amp; training updates
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-white/60">
              Email us for learning resources, interview prep and upcoming batches.
            </p>
          </div>
          <a
            href={newsletterHref}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-gradient-brand px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
          >
            Subscribe
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_1.1fr_0.85fr_1fr] lg:gap-8 md:px-6 md:py-12">
        <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              Practical ServiceNow training with hands-on projects, dedicated practice and interview preparation.
            </p>
            <ul className="mt-4 flex flex-col text-sm text-white/70">
              <li className="flex items-start gap-2">
                <Phone className="mt-1 size-3.5 shrink-0 text-blue-300" aria-hidden="true" />
                <a href={site.phoneHref} className="transition-colors hover:text-white">{site.phone}</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-1 size-3.5 shrink-0 text-blue-300" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-white">{site.email}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-1 size-3.5 shrink-0 text-blue-300" aria-hidden="true" />
                <address className="not-italic">
                  {site.address.locality}, {site.address.region}, India
                </address>
              </li>
            </ul>

            <ul className="mt-4 flex items-center gap-2" aria-label="Social media">
              <li>
                <span
                  role="img"
                  aria-label="LinkedIn"
                  className="flex size-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] text-xs font-semibold text-white/70"
                >
                  in
                </span>
              </li>
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact Rise Gen Technologies on WhatsApp"
                  className="flex size-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/nowpath"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch Rise Gen Technologies videos on YouTube"
                  className="flex size-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] text-white/70 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                >
                  <Video className="size-4" aria-hidden="true" />
                </a>
              </li>
              <li>
                <span
                  role="img"
                  aria-label="X"
                  className="flex size-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] text-sm font-semibold text-white/70"
                >
                  X
                </span>
              </li>
              <li>
                <span
                  role="img"
                  aria-label="Instagram"
                  className="flex size-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.05] text-xs font-semibold text-white/70"
                >
                  IG
                </span>
              </li>
            </ul>
        </div>

        <FooterColumn title="Programs & Courses">
          {featuredCourses.map((course) => (
            <FooterLink key={course.slug} href={coursePagePath(course.slug)}>
              {course.name}
            </FooterLink>
          ))}
          <FooterLink href="/courses">All Courses</FooterLink>
        </FooterColumn>

        <FooterColumn title="Training Modes">
          {trainingModes.map((mode) => (
            <FooterLink key={mode.href} href={mode.href}>
              {mode.label}
            </FooterLink>
          ))}
          <FooterLink href="/servicenow-career-training">Career Training</FooterLink>
        </FooterColumn>

        <FooterColumn title="Resources & Company">
          {resources.map((resource, index) => (
            <FooterLink key={`${resource.href}-${index}`} href={resource.href}>
              {resource.label}
            </FooterLink>
          ))}
        </FooterColumn>
      </div>

      <div className="border-t border-white/10 bg-black/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs leading-relaxed text-white/50 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link href="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="transition-colors hover:text-white">Terms of Service</Link></li>
            <li><Link href="/refund-and-attendance-policy" className="transition-colors hover:text-white">Refund &amp; Attendance Policy</Link></li>
          </ul>
        </div>
      </div>

    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-base font-semibold tracking-[0.08em] text-white">{title}</h2>
      <ul className="mt-3 flex flex-col gap-1 text-sm">{children}</ul>
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="group flex min-h-8 items-center gap-2 text-white/65 transition-colors hover:text-white">
        <span className="flex size-4 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/55 transition-colors group-hover:border-blue-300 group-hover:text-blue-300">
          <ArrowRight className="size-2.5" aria-hidden="true" />
        </span>
        {children}
      </Link>
    </li>
  )
}
