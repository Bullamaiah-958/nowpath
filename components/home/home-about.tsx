import Image from 'next/image'
import { LinkButton } from '@/components/link-button'
import { Section, SectionEyebrow } from '@/components/section'

export function HomeAbout() {
  return (
    <Section id="about" tone="muted" labelledBy="about-title">
      <div className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <SectionEyebrow>ABOUT RISE GEN TECHNOLOGIES</SectionEyebrow>
          <h2 id="about-title" className="mt-4 text-balance text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
            Focused ServiceNow learning, <span className="text-gradient">grounded in practice.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Rise Gen Technologies focuses on ServiceNow and JavaScript training for freshers and working professionals. Choose online learning or classroom batches in Kukatpally, Hyderabad, with guided instruction, hands-on practice and a real-time project.
          </p>
          <div className="mt-7">
            <LinkButton href="/about">About Rise Gen Technologies</LinkButton>
          </div>
        </div>
        <figure className="overflow-hidden rounded-3xl border border-border bg-card">
          <Image
            src="/images/classroom.png"
            alt="Trainer leading a classroom session while learners practise on laptops"
            width={1264}
            height={848}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="h-full w-full object-cover"
          />
        </figure>
      </div>
    </Section>
  )
}
