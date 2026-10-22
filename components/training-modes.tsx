import Link from 'next/link'
import { ChevronsRight } from 'lucide-react'

const modes = [
  {
    title: 'ServiceNow Online Training',
    subtitle: 'Most Popular',
    href: '/servicenow-online-training',
    body: 'Live, interactive sessions led by working ServiceNow Architects with real-time Personal Developer Instance (PDI) lab practice and instant query resolution.',
    points: [
      'Live Zoom / Teams classes with lifetime recording access',
      'Personal Developer Instance (PDI) hands-on labs from Day 1',
      'Flexible Morning & Evening batches (IST & US timezones)',
    ],
  },
  {
    title: 'ServiceNow Classroom Training in Hyderabad',
    subtitle: 'Ameerpet Center',
    href: '/servicenow-classroom-training-hyderabad',
    body: 'In-person physical classroom training at our Ameerpet center with dedicated high-speed lab setups, whiteboard architecture sessions, and 1-on-1 mentor guidance.',
    points: [
      'Prime Ameerpet location near Metro with equipped lab workstations',
      'Small batch size (strictly 15–20 students) for individual focus',
      'Face-to-face mock interview practice and group capstone projects',
    ],
  },
  {
    title: 'Hybrid & Weekend Batches',
    subtitle: 'For Working Professionals',
    href: '/servicenow-weekend-training-hyderabad',
    body: 'Tailored specifically for working professionals—attend weekend classroom sessions in Hyderabad or switch seamlessly between online and offline modes.',
    points: [
      'Saturday & Sunday intensive batches (8–10 hours per week)',
      '100% Flexi-Switching between online & offline at no extra cost',
      'Identical hands-on curriculum, project depth, and trainer',
    ],
  },
]

export function TrainingModes() {
  return (
    <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
      {modes.map((m) => (
        <article key={m.title} className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-7">
          <h3 className="text-xl font-bold leading-tight tracking-tight">
            <Link href={m.href} className="hover:text-primary">
              {m.title}
            </Link>
          </h3>
          <p className="fs-small mt-2 text-xs font-semibold uppercase tracking-wide text-brand-2">{m.subtitle}</p>
          <p className="fs-small mt-3 text-base leading-relaxed text-muted-foreground">{m.body}</p>
          <ul className="fs-small mt-auto flex flex-col gap-2 border-t border-slate-100 pt-4 text-base font-medium">
            {m.points.map((p) => (
              <li key={p} className="flex items-start gap-2">
                <ChevronsRight className="mt-0.5 size-5 shrink-0 rounded-full border border-border p-0.5 text-primary" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
