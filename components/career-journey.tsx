'use client'

import { useState } from 'react'
import Image from 'next/image'
import { BookOpen, Compass, Laptop, MessageSquare } from 'lucide-react'

const journey = [
  { title: 'Learn the fundamentals', body: 'Build your understanding of ServiceNow and JavaScript fundamentals.', icon: BookOpen, image: '/images/classroom.png', position: 'object-left brightness-110' },
  { title: 'Practise your skills', body: 'Apply what you learn through exercises, assigned tasks and projects.', icon: Laptop, image: '/images/journey-practice.jpg', position: 'object-center' },
  { title: 'Prepare for interviews', body: 'Review your progress with tests, mock interviews and spoken English practice.', icon: MessageSquare, image: '/images/journey-interview.jpg', position: 'object-center' },
  { title: 'Explore career paths', body: 'Discover ServiceNow roles that fit your interests and experience.', icon: Compass, image: '/images/about-banner.png', position: 'object-center brightness-110' },
]

export function CareerJourney() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <div className="relative isolate mt-10 overflow-hidden rounded-3xl border border-blue-200/60 bg-gradient-to-br from-sky-50 via-white to-violet-50 px-4 py-10 sm:px-8 sm:py-14">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-32 size-80 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute -bottom-36 -right-12 size-96 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute -right-16 -top-28 size-72 rounded-full border border-violet-300/40" />
        <div className="absolute -right-9 -top-20 size-56 rounded-full border border-violet-300/40" />
        <svg className="absolute inset-0 h-full w-full text-blue-400/40" viewBox="0 0 1200 480" preserveAspectRatio="none" fill="none">
          <path d="M-60 385C145 130 260 500 485 245S820 80 1010 235s260 25 300-30" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 9" />
          <circle cx="127" cy="275" r="5" fill="currentColor" />
          <circle cx="1055" cy="258" r="5" fill="currentColor" />
        </svg>
      </div>
      <p className="relative mb-8 text-center text-base font-semibold text-foreground">Hover over a circle or select a step to discover more.</p>
      <ol className="relative mx-auto grid max-w-3xl justify-items-center gap-4 sm:grid-cols-2 xl:flex xl:max-w-none xl:justify-center xl:gap-0">
        {journey.map(({ title, body, icon: Icon, image, position }, index) => {
          const isSelected = selected === index
          return (
            <li key={title} className={`relative w-full max-w-[17rem] xl:-ml-8 xl:w-[25%] xl:max-w-[18rem] xl:shrink-0 xl:first:ml-0 xl:hover:z-20 xl:focus-within:z-20 ${isSelected ? 'xl:z-10' : ''}`}>
              <button
                type="button"
                aria-label={`Step ${index + 1}: ${title}`}
                aria-expanded={isSelected}
                aria-controls={`career-journey-step-${index + 1}`}
                onClick={() => setSelected(isSelected ? null : index)}
                className="group relative flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-full border-2 border-white bg-sky-50 px-6 py-6 text-center text-ink shadow-lg transition-colors hover:border-brand-violet focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary aria-expanded:border-brand-violet motion-reduce:transition-none sm:px-7"
              >
                <Image src={image} alt="" fill sizes="(min-width: 1024px) 288px, (min-width: 640px) 272px, 85vw" className={`object-cover ${position}`} />
                <span aria-hidden="true" className="absolute inset-0 bg-white/15" />
                <span aria-hidden="true" className={`absolute inset-0 scale-0 rounded-full bg-gradient-to-br from-sky-100 via-blue-100 to-violet-200 transition-transform duration-300 ease-out motion-reduce:transition-none group-hover:scale-100 ${isSelected ? 'scale-100' : ''}`} />
                <span className={`relative flex w-full flex-col items-center rounded-2xl border border-white/40 bg-white/70 px-3 py-3 shadow-sm transition-colors duration-300 motion-reduce:transition-none group-hover:border-transparent group-hover:bg-transparent group-hover:shadow-none ${isSelected ? 'border-transparent bg-transparent shadow-none' : ''}`}>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-white text-primary">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <span className="mt-2 text-xs font-bold tracking-[0.12em] text-primary">STEP 0{index + 1}</span>
                  <span className="mt-1 text-base font-bold leading-tight sm:text-lg">{title}</span>
                  <span id={`career-journey-step-${index + 1}`} className={`mt-2 text-[13px] leading-5 text-foreground ${isSelected ? 'block' : 'hidden group-hover:block'}`}>{body}</span>
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
