import Image from 'next/image'
import Link from 'next/link'
import { LinkButton } from '@/components/link-button'
import { Section, SectionEyebrow } from '@/components/section'

export function HomeAbout() {
  return (
    <Section id="about" tone="white" labelledBy="about-title" className="relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <svg viewBox="0 0 1440 520" preserveAspectRatio="none" className="h-full w-full opacity-70" fill="none">
          <g className="text-brand-violet" stroke="currentColor" strokeWidth="3" strokeDasharray="0 8" strokeLinecap="round">
            <path d="M-70 62C-5 17 95 14 140 68s25 128-34 160S-12 253-46 207" />
            <path d="M-72 78C4 27 91 31 126 78s17 104-37 135S-6 233-39 195" />
            <path d="M-74 96C11 42 79 48 111 88s9 81-41 110S5 211-31 182" />
            <path d="M-76 116C18 59 65 67 95 101s1 59-45 86S15 190-22 168" />
            <path d="M-78 139C25 80 50 86 77 113s-6 39-48 61S24 170-13 153" />
          </g>
          <g transform="translate(0 110)" className="text-brand" stroke="currentColor" strokeWidth="3" strokeDasharray="0 8" strokeLinecap="round">
            <path d="M1515 329c-65-45-165-48-210 6s-25 128 34 160 118 25 152-21" />
            <path d="M1517 345c-76-51-163-47-198 0s-17 104 37 135 95 20 128-18" />
            <path d="M1519 363c-85-54-153-48-185-8s-9 81 41 110 75 13 111-16" />
            <path d="M1521 383c-94-57-141-49-171-15s-1 59 45 86 59 4 96-18" />
            <path d="M1523 406c-103-59-128-53-155-26s6 39 48 61 46-1 83-18" />
          </g>
        </svg>
      </div>
      <div className="relative z-10 grid gap-12 md:grid-cols-2 md:items-center lg:gap-16">
        <div className="relative mx-auto w-full max-w-[34rem]">
          <span aria-hidden="true" className="absolute -left-3 top-[18%] z-10 size-3 rounded-full bg-brand-violet" />
          <span aria-hidden="true" className="absolute right-[2%] top-[8%] z-10 size-2 rounded-full bg-brand" />
          <figure
            className="about-image-reveal relative aspect-[1/0.9] overflow-hidden border border-brand/20 shadow-2xl shadow-brand/15"
            style={{ borderRadius: '46% 54% 42% 58% / 45% 38% 62% 55%' }}
          >
            <Image
              src="/images/classroom.png"
              alt="Trainer leading a classroom session while learners practise on laptops"
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover"
            />
          </figure>
          <span aria-hidden="true" className="absolute bottom-[8%] right-[4%] z-10 size-3 rounded-full bg-brand-cyan" />
        </div>
        <div className="max-w-xl">
          <SectionEyebrow>ABOUT RISE GEN TECHNOLOGIES</SectionEyebrow>
          <h2 id="about-title" className="mt-5 text-balance text-4xl font-bold leading-[1.02] tracking-tight md:text-5xl">
            Focused ServiceNow learning <span className="text-gradient">built around real practice.</span>
          </h2>
          <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            Rise Gen Technologies focuses on ServiceNow and JavaScript training for freshers and working professionals. Choose online learning or classroom batches in Kukatpally, Hyderabad, with guided instruction, hands-on practice and a real-time project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <LinkButton href="/contact" size="lg">Book a Free Demo</LinkButton>
            <Link
              href="/about"
              className="font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              Discover Rise Gen
            </Link>
          </div>
        </div>
      </div>
    </Section>
  )
}
