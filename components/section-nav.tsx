'use client'

import { useEffect, useState } from 'react'

export function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')
  const itemIds = items.map((item) => item.id).join(',')
  const chevronClip = 'polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%, 14px 50%)'

  useEffect(() => {
    const sections = itemIds
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visibleSections[0]) setActiveId(visibleSections[0].target.id)
      },
      { rootMargin: '-140px 0px -65% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [itemIds])

  return (
    <nav aria-label="On this page" className="sticky top-[67px] z-30 border-y border-border bg-secondary/80 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-1.5 md:px-6">
        <span className="hidden shrink-0 text-xs font-bold uppercase tracking-[0.14em] text-primary sm:block">
          Jump to
        </span>
        <ul className="flex min-w-0 touch-pan-x snap-x snap-mandatory gap-0.5 overflow-x-auto overscroll-x-contain py-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:flex-1 lg:overflow-visible">
          {items.map((item, index) => (
            <li key={item.id} className="min-w-[112px] shrink-0 snap-start lg:flex-1">
              <a
                href={`#${item.id}`}
                aria-current={activeId === item.id ? 'location' : undefined}
                onClick={() => setActiveId(item.id)}
                className={`group block h-[40px] p-px text-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  activeId === item.id ? 'bg-brand-orange/50' : 'bg-brand/25 hover:bg-brand/55'
                }`}
                style={{ clipPath: chevronClip }}
              >
                <span
                  className="flex h-full flex-col items-center justify-center bg-card px-5 transition-colors group-hover:bg-accent/60"
                  style={{ clipPath: chevronClip }}
                >
                  <span className="flex items-center gap-1 whitespace-nowrap text-xs font-semibold leading-tight text-primary">
                    <span>{index + 1}.</span>
                    <span>{item.label}</span>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
