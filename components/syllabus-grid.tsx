'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react'

type Module = { title: string; topics: string[]; handsOn: string[] }

const PREVIEW_TOPICS = 4
const PAGE_SIZE = 9

export function SyllabusGrid({ modules }: { modules: Module[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [fading, setFading] = useState(false)
  const active = openIndex === null ? null : modules[openIndex]
  const pageCount = Math.ceil(modules.length / PAGE_SIZE)
  const startIndex = (pageNumber - 1) * PAGE_SIZE
  const timerRef = useRef<number>(0)

  function goToPage(next: number) {
    if (next === pageNumber || fading) return
    setFading(true)
    gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    timerRef.current = window.setTimeout(() => {
      setPageNumber(next)
      setFading(false)
    }, 200)
  }

  useEffect(() => () => window.clearTimeout(timerRef.current), [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (openIndex !== null && !dialog.open) dialog.showModal()
    if (openIndex === null && dialog.open) dialog.close()
  }, [openIndex])

  return (
    <div ref={gridRef} className="scroll-mt-28">
      <ol className={`grid grid-cols-1 gap-5 transition-all duration-200 ease-out motion-reduce:transition-none md:grid-cols-2 lg:grid-cols-3 ${fading ? 'translate-y-3 opacity-0' : 'translate-y-0 opacity-100'}`}>
        {modules.map((module, index) => {
          const onPage = index >= startIndex && index < startIndex + PAGE_SIZE
          const total = module.topics.length + module.handsOn.length
          const hasMore = module.topics.length > PREVIEW_TOPICS || module.handsOn.length > 0
          return (
            <li key={module.title} className={`group relative min-w-0 ${onPage ? '' : 'hidden'}`}>
              <svg aria-hidden="true" viewBox="0 0 80 80" className="pointer-events-none absolute right-0 top-0 z-10 size-20 text-secondary" fill="currentColor">
                <path d="M0 0H80V80C80 63 72 56 56 56H51C35 56 24 46 24 30V24C24 8 16 0 0 0Z" />
              </svg>
              <span aria-hidden="true" className="absolute right-0 top-0 z-10 flex size-10 items-center justify-center rounded-full bg-card text-sm font-bold text-primary transition-colors group-hover:bg-brand-2 group-hover:text-white motion-reduce:transition-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="relative flex h-[21rem] flex-col overflow-hidden rounded-3xl border-b border-l border-t border-primary/20 bg-card p-7">
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary to-brand-2 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 motion-reduce:transition-none" />
                <h2 className="relative line-clamp-2 min-h-[3.5rem] pr-10 text-xl font-bold leading-snug text-ink transition-colors group-hover:text-white group-focus-within:text-white motion-reduce:transition-none" title={module.title}>{module.title}</h2>
                <ul className="relative mt-4 flex max-h-[7.1rem] flex-col gap-2.5 overflow-hidden text-[15px] leading-snug text-foreground/80 transition-colors group-hover:text-white group-focus-within:text-white motion-reduce:transition-none">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary transition-colors group-hover:text-white group-focus-within:text-white" aria-hidden="true" />
                      <span className="line-clamp-1">{topic}</span>
                    </li>
                  ))}
                </ul>
                {module.handsOn.length > 0 && (
                  <ul className="sr-only">
                    {module.handsOn.map((item) => <li key={item}>Hands-on: {item}</li>)}
                  </ul>
                )}
                <div className="relative mt-auto pt-4">
                  {hasMore ? (
                    <button
                      type="button"
                      onClick={() => setOpenIndex(index)}
                      aria-haspopup="dialog"
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-brand px-5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:gap-3 group-hover:bg-white group-hover:bg-none group-hover:text-primary group-focus-within:bg-white group-focus-within:bg-none group-focus-within:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                    >
                      View all {total} topics<span className="sr-only"> in {module.title}</span>
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </button>
                  ) : (
                    <span className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors group-hover:text-white">{total} topics</span>
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ol>

      {pageCount > 1 && (
        <nav aria-label="Syllabus pages" className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => goToPage(pageNumber - 1)}
            disabled={pageNumber === 1}
            className="inline-flex h-11 items-center gap-1 rounded-full border border-primary/20 bg-card px-4 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />Previous
          </button>
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => goToPage(n)}
              aria-label={`Page ${n}`}
              aria-current={n === pageNumber ? 'page' : undefined}
              className={`size-11 rounded-full text-sm font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${n === pageNumber ? 'bg-gradient-brand text-white shadow-md shadow-primary/20' : 'border border-primary/20 bg-card text-primary hover:bg-primary/10'}`}
            >
              {n}
            </button>
          ))}
          <button
            type="button"
            onClick={() => goToPage(pageNumber + 1)}
            disabled={pageNumber === pageCount}
            className="inline-flex h-11 items-center gap-1 rounded-full border border-primary/20 bg-card px-4 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Next<ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </nav>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="syllabus-dialog-title"
        onClose={() => setOpenIndex(null)}
        onClick={(event) => { if (event.target === dialogRef.current) setOpenIndex(null) }}
        className="m-auto max-h-[85vh] w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-3xl border border-primary/20 bg-card p-0 text-foreground shadow-2xl backdrop:bg-ink/60"
      >
        {active && (
          <div className="flex max-h-[85vh] flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-border p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Module {String((openIndex ?? 0) + 1).padStart(2, '0')}</p>
                <h2 id="syllabus-dialog-title" className="mt-1 text-xl font-bold leading-snug text-ink">{active.title}</h2>
              </div>
              <button
                type="button"
                onClick={() => setOpenIndex(null)}
                className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border hover:bg-secondary focus-visible:outline-2 focus-visible:outline-primary"
                aria-label="Close"
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>
            <div className="overflow-y-auto p-6">
              <ul className="flex flex-col gap-2.5 text-[15px] leading-snug text-foreground/80">
                {active.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              {active.handsOn.length > 0 && (
                <div className="mt-6 border-t border-border pt-5">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">Hands-on</p>
                  <ul className="mt-3 flex flex-col gap-2.5 text-[15px] leading-snug text-foreground/80">
                    {active.handsOn.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-brand-2" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </div>
  )
}
