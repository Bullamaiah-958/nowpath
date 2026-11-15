import Image from 'next/image'
import { Section, SectionHeading } from '@/components/section'
import { TrainingModes } from '@/components/training-modes'

export function HomeModes() {
  return (
    <Section id="modes" tone="white" labelledBy="modes-title">
      <SectionHeading
        id="modes-title"
        eyebrow="Online, offline & classroom"
        title={
          <>
            Choose a learning mode <span className="text-gradient">that works for you.</span>
          </>
        }
        description={
          <span className="fs-lead">
            Choose online training from anywhere, or join offline classes at our Kukatpally classroom in Hyderabad. Switch between online and classroom modes mid-course at no extra cost.
          </span>
        }
        className="mb-8"
      />
      <div className="grid gap-4 mb-10 md:grid-cols-2">
        <figure className="relative aspect-[3/2] overflow-hidden rounded-2xl">
          <Image
            src="/images/classroom.png"
            alt="Learners attending a classroom session at Rise Gen Technologies in Kukatpally, Hyderabad"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-full bg-ink/80 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
            <span>Classroom · Kukatpally, Hyderabad</span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kukatpally%2C%20Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open map for Kukatpally, Hyderabad"
              className="shrink-0 underline decoration-white/50 underline-offset-2 hover:decoration-white"
            >
              Open map
            </a>
          </figcaption>
        </figure>
        <figure className="relative aspect-[3/2] overflow-hidden rounded-2xl">
          <Image
            src="/images/online-learning.png"
            alt="A learner attending a live online class from home"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 rounded-full bg-ink/80 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
            Live online · Anywhere
          </figcaption>
        </figure>
      </div>
      <TrainingModes />
    </Section>
  )
}
