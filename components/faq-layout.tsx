import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-12">
      <div className="grid gap-4 lg:col-span-4">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
          <Image src="/images/journey-practice.jpg" alt="A learner practising on a laptop" fill sizes="(min-width: 1024px) 32vw, 100vw" className="object-cover" />
        </div>
        <div className="rounded-2xl border border-primary/15 bg-gradient-to-br from-accent via-card to-secondary p-6 sm:p-8">
          <h3 className="text-xl font-bold text-ink">Still have questions?</h3>
          <p className="mt-3 leading-relaxed text-foreground/80">Talk to us about courses, prerequisites and current batch details.</p>
          <Link href="/contact" className="mt-4 inline-flex min-h-11 items-center gap-2 font-semibold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            Talk to an Expert <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
      <div className="min-w-0 lg:col-span-8">{children}</div>
    </div>
  )
}
