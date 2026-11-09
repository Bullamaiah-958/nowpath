'use client'

import { Check, Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

type Module = { title: string; topics: string[] }

const VISIBLE_ITEMS = 3

export function SyllabusScroll({
  modules,
  label = 'ServiceNow ITSM syllabus modules',
  idPrefix = 'itsm',
}: {
  modules: Module[]
  label?: string
  idPrefix?: string
}) {
  const regionRef = useRef<HTMLDivElement>(null)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [visible, setVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(true)
  const [desktopHeight, setDesktopHeight] = useState<number>()

  useEffect(() => {
    const list = regionRef.current?.querySelector('ol')
    if (!list) return
    const items = Array.from(list.children)
    const update = () => {
      const gap = parseFloat(window.getComputedStyle(list).rowGap) || 0
      const count = Math.min(VISIBLE_ITEMS, items.length)
      const total = items.slice(0, count).reduce((sum, item) => sum + item.getBoundingClientRect().height, 0)
      setDesktopHeight(total + gap * Math.max(0, count - 1))
    }
    const observer = new ResizeObserver(update)
    observer.observe(list)
    items.forEach((item) => observer.observe(item))
    update()
    return () => observer.disconnect()
  }, [modules])

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
        <p id={`${idPrefix}-syllabus-hint`} className="text-sm text-muted-foreground">Scroll to explore all {modules.length} modules</p>
        {!reducedMotion && (
          <button type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Resume automatic scrolling' : 'Pause automatic scrolling'} title={paused ? 'Resume automatic scrolling' : 'Pause automatic scrolling'} className="inline-flex size-11 items-center justify-center rounded-full border border-primary/20 bg-card text-primary transition-colors hover:border-primary hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none">
            {paused ? <Play className="size-4" aria-hidden="true" /> : <Pause className="size-4" aria-hidden="true" />}
          </button>
        )}
      </div>
      <div
        ref={regionRef}
        role="region"
        aria-label={label}
        aria-describedby={`${idPrefix}-syllabus-hint`}
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
        style={desktopHeight ? ({ '--syllabus-height': `${desktopHeight}px` } as React.CSSProperties) : undefined}
        className="max-h-[32rem] overflow-y-auto overscroll-contain [scrollbar-width:none] lg:h-[var(--syllabus-height,36rem)] lg:max-h-none [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        <ol className="grid gap-4">
          {modules.map((module, index) => (
            <li key={module.title} className="grid grid-cols-[minmax(0,1fr)] gap-4 rounded-2xl border border-primary/10 bg-gradient-to-r from-secondary via-card to-accent/70 px-5 py-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:items-center sm:gap-6 sm:px-7">
              <div className="min-w-0">
                <span aria-hidden="true" className="mb-1 block text-2xl font-bold leading-none tracking-tight text-primary">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="text-lg font-bold leading-snug text-ink">{module.title}</h3>
              </div>
              <ul className="flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground sm:border-l sm:border-primary/20 sm:pl-5">
                {module.topics.slice(0, 3).map((topic) => (
                  <li key={topic} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    {topic}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
