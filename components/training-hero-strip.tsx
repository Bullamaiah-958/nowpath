import type { LucideIcon } from 'lucide-react'

export function TrainingHeroStrip({
  mode,
  detail,
  icon: Icon,
}: {
  mode: string
  detail: string
  icon: LucideIcon
}) {
  return (
    <div className="relative mb-3 flex justify-end">
      <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-white/15 bg-ink/75 px-3 py-2 text-xs font-medium text-white/75">
        <span className="inline-flex items-center gap-1.5">
          <span className="size-1.5 shrink-0 rounded-full bg-cyan-300" aria-hidden="true" />
          {mode}
        </span>
        <span className="inline-flex items-center gap-1.5 border-l border-white/20 pl-3">
          <Icon className="size-3.5 shrink-0 text-cyan-200" aria-hidden="true" />
          {detail}
        </span>
      </div>
    </div>
  )
}
