import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { BlogPost } from '@/lib/blog'

export function PostCard({ post, variant = 'default' }: { post: BlogPost; variant?: 'default' | 'listing' }) {
  if (variant === 'listing') {
    return (
      <article className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-xl hover:shadow-brand/10">
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">{post.category}</span>
          <span className="text-muted-foreground">{post.readTime}</span>
        </div>
        <h3 className="mt-5 text-xl font-bold leading-snug tracking-tight">
          <Link href={`/blog/${post.slug}`} className="rounded-sm after:absolute after:inset-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
        <div className="mt-6 flex items-center justify-between gap-3 border-t border-border pt-4">
          <time dateTime={post.date} className="text-xs font-medium text-muted-foreground">
            {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
          </time>
          <span aria-hidden="true" className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Read article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none" />
          </span>
        </div>
      </article>
    )
  }

  return (
    <article className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-xl hover:shadow-brand/10">
      <p className="eyebrow text-brand-2">
        {post.category} &middot; {post.readTime}
      </p>
      <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight">
        <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
      <time dateTime={post.date} className="mt-6 text-xs font-medium text-muted-foreground">
        {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
      </time>
    </article>
  )
}
