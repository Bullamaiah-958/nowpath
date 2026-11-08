'use client'

import Link from 'next/link'
import { ArrowRight, Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

type CourseLink = { slug: string; href: string; name: string; cardSubtitle: string; description: string }

export function CareerCourseScroll({ courses }: { courses: CourseLink[] }) {
  const regionRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [visible, setVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(true)
  const [desktopHeight, setDesktopHeight] = useState<number>()

  useEffect(() => {
    const list = regionRef.current?.querySelector('ul')
    if (!list) return
    const items = Array.from(list.children)
    const update = () => {
      const gap = parseFloat(window.getComputedStyle(list).rowGap) || 0
      const largest = Math.max(...items.map((item) => item.getBoundingClientRect().height))
      setDesktopHeight(largest * Math.min(4, items.length) + gap * Math.max(0, Math.min(4, items.length) - 1))
    }
    const observer = new ResizeObserver(update)
    observer.observe(list)
    items.forEach((item) => observer.observe(item))
    update()
    return () => observer.disconnect()
  }, [courses])

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(preference.matches)
    update()
    preference.addEventListener('change', update)
    return () => preference.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const region = regionRef.current
    if (!region) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 })
    observer.observe(region)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const region = regionRef.current
    if (!region || paused || hovered || focused || reducedMotion || !visible) return

    let frame: number
    let previous: number | undefined
    let position = region.scrollTop
    const tick = (time: number) => {
      if (previous !== undefined) {
        const maxScroll = region.scrollHeight - region.clientHeight
        if (maxScroll > 0) {
          position += Math.min(time - previous, 100) * 0.025
          if (position >= maxScroll) position = 0
          region.scrollTop = position
        }
      }
      previous = time
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [paused, hovered, focused, reducedMotion, visible])

  return (
    <div className="min-w-0 lg:col-span-7">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <p id="career-courses-hint" className="text-sm text-muted-foreground">Scroll to explore all courses</p>
        {!reducedMotion && (
          <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Resume automatic scrolling' : 'Pause automatic scrolling'} title={paused ? 'Resume automatic scrolling' : 'Pause automatic scrolling'} className="inline-flex size-11 items-center justify-center rounded-full border border-primary/20 bg-card text-primary transition-colors hover:border-primary hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none">
            {paused ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
          </button>
        )}
      </div>
      <div
        ref={regionRef}
        role="region"
        aria-label="ServiceNow courses"
        aria-describedby="career-courses-hint"
        tabIndex={0}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setFocused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false)
        }}
        onWheel={() => setPaused(true)}
        onTouchStart={() => setPaused(true)}
        onPointerDown={() => setPaused(true)}
        style={desktopHeight ? { '--career-courses-height': `${desktopHeight}px` } as React.CSSProperties : undefined}
        className="max-h-[28rem] overflow-y-auto overscroll-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:h-[var(--career-courses-height,40rem)] lg:max-h-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        <ul className="grid gap-4">
          {courses.map((course, index) => (
            <li key={course.slug}>
              <Link href={course.href} className="group grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-3 rounded-2xl border border-primary/10 bg-gradient-to-r from-secondary via-card to-accent/70 px-5 py-6 transition-colors hover:border-primary/40 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary sm:min-h-36 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)_auto] sm:items-center sm:gap-5 sm:px-7 motion-reduce:transition-none">
                <span className="min-w-0">
                  <span aria-hidden="true" className="mb-1 block text-2xl font-bold leading-none tracking-tight text-primary">{String(index + 1).padStart(2, '0')}</span>
                  <span className="block text-lg font-bold leading-snug text-ink group-hover:text-primary">{course.name}</span>
                  <span className="mt-1 block text-sm text-primary">{course.cardSubtitle}</span>
                </span>
                <span className="col-start-1 text-sm leading-relaxed text-muted-foreground sm:col-auto sm:border-l sm:border-primary/20 sm:py-1 sm:pl-5">{course.description}</span>
                <ArrowRight className="col-start-2 row-start-1 mt-1 size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1 sm:col-auto sm:row-auto sm:mt-0 motion-reduce:transition-none" aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
