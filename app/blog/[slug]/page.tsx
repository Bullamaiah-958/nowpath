import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { posts, getPost } from '@/lib/blog'
import { getCourse } from '@/lib/courses'
import { absoluteUrl, site } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CourseCard } from '@/components/course-card'
import { PostCard } from '@/components/post-card'
import { CtaBand } from '@/components/cta-band'

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: 'article', title: post.title, description: post.description, publishedTime: post.date, url: `/blog/${post.slug}` },
  }
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()
  const course = getCourse(post.relatedCourse)
  const more = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    author: { '@type': 'Organization', name: site.name },
    publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: absoluteUrl('/icon.svg') } },
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }, { name: post.title, href: `/blog/${post.slug}` }]} />
      <article>
        <header className="bg-hero text-ink-foreground">
          <div className="mx-auto max-w-4xl px-4 pb-14 pt-16 md:px-6 md:pt-20">
            <p className="eyebrow text-emerald-300">
              {post.category} &middot; {post.readTime} read
            </p>
            <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl">{post.title}</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-white/70">{post.description}</p>
            <p className="mt-8 text-sm text-white/60">
              By the {site.name} trainer team &middot;{' '}
              <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
            </p>
          </div>
        </header>
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-14 md:px-6 lg:grid-cols-12">
          <nav aria-label="Table of contents" className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow text-muted-foreground">Contents</p>
              <ol className="mt-4 flex flex-col gap-2 border-l border-border text-sm">
                {post.sections.map((s) => (
                  <li key={s.heading}>
                    <a href={`#${slugify(s.heading)}`} className="-ml-px block border-l border-transparent pl-4 text-foreground/70 hover:border-primary hover:text-foreground">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
          <div className="max-w-none lg:col-span-9">
            {post.sections.map((s) => (
              <section key={s.heading} className="mb-12">
                <h2 id={slugify(s.heading)} className="scroll-mt-32 text-2xl font-bold tracking-tight md:text-3xl">
                  {s.heading}
                </h2>
                {s.body.map((para) => (
                  <p key={para.slice(0, 40)} className="mt-4 text-lg leading-relaxed text-foreground/85">
                    {para}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {s.list.map((item) => (
                      <li key={item} className="flex gap-3 text-lg leading-relaxed text-foreground/85">
                        <span className="bg-gradient-brand mt-3 size-1.5 shrink-0 rounded-full" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {s.code && (
                  <pre className="mt-5 overflow-x-auto rounded-xl bg-ink p-5 font-mono text-sm leading-relaxed text-ink-foreground">
                    <code>{s.code}</code>
                  </pre>
                )}
              </section>
            ))}
            {course && (
              <aside aria-label="Recommended course" className="mt-4 rounded-2xl border border-border bg-secondary p-6">
                <p className="eyebrow text-brand-2">Go deeper with a live trainer</p>
                <div className="mt-4 max-w-md">
                  <CourseCard course={course} />
                </div>
              </aside>
            )}
          </div>
        </div>
      </article>
      {more.length > 0 && (
        <section aria-labelledby="more-title" className="bg-secondary py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 id="more-title" className="text-3xl font-bold tracking-tight">
              More {post.category.toLowerCase()} guides
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {more.map((p) => (
                <li key={p.slug}>
                  <PostCard post={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      <CtaBand />
    </>
  )
}
