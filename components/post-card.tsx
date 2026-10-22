import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'

export function PostCard({ post }: { post: BlogPost }) {
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
