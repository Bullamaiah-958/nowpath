import Image from 'next/image'
import Link from 'next/link'
import { LinkButton } from '@/components/link-button'
import { Section, SectionEyebrow } from '@/components/section'

export function HomeAbout() {
  return (
    <Section id="about" tone="muted" labelledBy="about-title">
      <div className="grid gap-12 md:grid-cols-2 md:items-center lg:gap-16">
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
        <div className="relative mx-auto w-full max-w-[34rem]">
          <span aria-hidden="true" className="absolute -left-3 top-[18%] z-10 size-3 rounded-full bg-brand-violet" />
          <span aria-hidden="true" className="absolute right-[2%] top-[8%] z-10 size-2 rounded-full bg-brand" />
          <figure
            className="relative aspect-[1/0.9] overflow-hidden shadow-xl shadow-brand/10"
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
      </div>
    </Section>
  )
}
