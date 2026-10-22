import Image from 'next/image'
import { Section, SectionHeading } from '@/components/section'
import { TrainingModes } from '@/components/training-modes'

export function HomeModes() {
  return (
    <Section id="modes" labelledBy="modes-title">
      <SectionHeading
        id="modes-title"
        eyebrow="Online, offline & classroom"
        title={
          <>
            Learn ServiceNow <span className="text-gradient">the way you learn best.</span>
          </>
        }
        description={
          <span className="fs-lead text-lg">
            Choose ServiceNow Online Training, ServiceNow Offline Training or ServiceNow Classroom Training in Hyderabad. Switch modes mid-course at no extra cost.
          </span>
        }
        className="mb-8"
      />
      <div className="grid gap-4 mb-10 md:grid-cols-2">
        <figure className="relative aspect-[3/2] overflow-hidden rounded-2xl">
          <Image
            src="/images/classroom.png"
            alt="Learners at NowPath's ServiceNow classroom training in Ameerpet, Hyderabad"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute bottom-4 left-4 rounded-full bg-ink/80 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
            Classroom · Ameerpet, Hyderabad
          </figcaption>
        </figure>
        <figure className="relative aspect-[3/2] overflow-hidden rounded-2xl">
          <Image
            src="/images/online-learning.png"
            alt="A learner attending live ServiceNow online training from home"
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
