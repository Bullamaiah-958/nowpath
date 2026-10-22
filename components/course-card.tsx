import Link from 'next/link'
import { Award } from 'lucide-react'
import type { Course } from '@/lib/courses'

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      aria-label={course.name}
      className="course-card group relative flex h-full min-h-64 flex-col rounded-2xl border border-border p-6 transition-shadow hover:shadow-xl hover:shadow-brand/10"
    >
      <div className="flex items-start justify-between gap-4">
        <p className="course-card-eyebrow whitespace-nowrap">
          {course.code} &middot; {course.category}
        </p>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          aria-hidden="true"
        >
          <polyline points="15 3 21 3 21 9" />
          <polyline points="9 21 3 21 3 15" />
          <line x1="21" y1="3" x2="14" y2="10" />
          <line x1="3" y1="21" x2="10" y2="14" />
        </svg>
      </div>
      <h3 className="mt-4 text-xl font-bold leading-tight tracking-tight">
        {course.name}
      </h3>
      <p className="course-card-subtitle mt-1 truncate whitespace-nowrap">{course.cardSubtitle}</p>
      <p className="course-card-description mt-4 flex-1 leading-relaxed">{course.tagline}</p>
      <dl className="course-card-certification mt-auto flex min-w-0 border-t border-border pt-4 font-medium">
        <div className="flex min-w-0 items-center gap-1.5">
          <dt className="sr-only">Certification</dt>
          <Award className="size-3.5 shrink-0 text-[var(--text-body)]" aria-hidden="true" />
          <dd className="min-w-0 truncate whitespace-nowrap">{course.cardCertification}</dd>
        </div>
      </dl>
    </Link>
  )
}
