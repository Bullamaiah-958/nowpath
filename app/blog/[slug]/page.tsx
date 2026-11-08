import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { posts, getPost } from '@/lib/blog'
import { getCourse } from '@/lib/courses'
import { absoluteUrl, site } from '@/lib/site'
import { JsonLd } from '@/components/json-ld'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { CourseCard } from '@/components/course-card'
import { PostCard } from '@/components/post-card'
import { CtaBand } from '@/components/cta-band'
import { ChevronsRight, Download } from 'lucide-react'

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
    publisher: { '@type': 'Organization', name: site.name, logo: { '@type': 'ImageObject', url: absoluteUrl('/images/rise-gen-technologies.png') } },
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      <article>
        <header className="relative overflow-hidden bg-gradient-to-br from-[#062c66] via-[#174d95] to-[#562c82] text-ink-foreground">
          <Image
            src="/images/blog-detail-hero.png"
            alt=""
            fill
            sizes="100vw"
            loading="eager"
            aria-hidden="true"
            className="pointer-events-none object-cover object-right"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/65 via-slate-950/50 to-slate-950/40" aria-hidden="true" />
          <div className="bg-hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-16 md:px-6 md:pt-20">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-blue-200/30 bg-blue-400/10 px-3 py-1 text-sm font-semibold text-blue-100">{post.category}</span>
                <span className="text-sm font-medium text-white/80">{post.readTime}</span>
              </div>
              <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.02] tracking-tight md:text-6xl">{post.title}</h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/85">{post.description}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-white/80">
                <span>By the {site.name} trainer team</span>
                <span aria-hidden="true" className="text-blue-200/70">&middot;</span>
                <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
              </div>
            </div>
          </div>
          <div className="relative pb-8 md:pb-10">
            <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }, { name: post.title, href: `/blog/${post.slug}` }]} variant="hero" />
          </div>
        </header>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:px-6 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)]">
          <nav aria-label="Table of contents">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto">
              <div className="border-b border-border bg-secondary px-5 py-4">
                <p className="text-base font-bold text-foreground">In this <span className="text-gradient">article</span></p>
              </div>
              <ol className="flex flex-col gap-1 p-3 text-base">
                {post.sections.map((s) => (
                  <li key={s.heading}>
                    <a href={`#${slugify(s.heading)}`} className="group flex items-start gap-3 rounded-xl px-2 py-2.5 leading-snug text-foreground/80 transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                      <ChevronsRight className="mt-0.5 size-5 shrink-0 rounded-full border border-current p-0.5 text-primary" aria-hidden="true" />
                      <span>{s.heading}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>
          <div className="max-w-none">
            {post.sections.map((s, index) => (
              <section key={s.heading} className="mb-12">
                <h2 id={slugify(s.heading)} className="scroll-mt-32 text-2xl font-bold tracking-tight md:text-3xl">
                  {s.heading}
                </h2>
                {s.body.map((para) => (
                  <p key={para.slice(0, 40)} className="mt-4 text-base leading-relaxed text-foreground/85">
                    {para}
                  </p>
                ))}
                {s.list && (
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {s.list.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-relaxed text-foreground/85">
                        {post.slug === 'what-is-servicenow' && s.heading === 'What ServiceNow is used for' ? (
                          <ChevronsRight className="mt-1 size-5 shrink-0 rounded-full border border-current p-0.5 text-primary" aria-hidden="true" />
                        ) : (
                          <span className="bg-gradient-brand mt-3 size-1.5 shrink-0 rounded-full" aria-hidden="true" />
                        )}
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
                {post.slug === 'what-is-servicenow' && index === 1 && (
                  <aside aria-labelledby="csa-roadmap-title" className="relative mt-10 overflow-hidden rounded-2xl bg-gradient-to-r from-[#5a329b] via-[#174d95] to-[#092d54] text-white">
                    <Image
                      src="/images/blog-gartner-banner.webp"
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 65vw, 100vw"
                      aria-hidden="true"
                      className="pointer-events-none object-cover object-right"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#4c287f]/95 via-[#123c78]/90 to-[#092d54]/40" aria-hidden="true" />
                    <div className="relative max-w-xl p-6 sm:p-8">
                      <p className="eyebrow text-blue-100">Free learning resource</p>
                      <h3 id="csa-roadmap-title" className="mt-3 text-xl font-bold tracking-tight sm:text-2xl">
                        ServiceNow CSA Certification Roadmap
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-white/90">
                        Get a practical study plan, hands-on checklist and links to official certification resources.
                      </p>
                      <a
                        href="/resources/servicenow-csa-roadmap.pdf"
                        download
                        className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        <Download className="size-4" aria-hidden="true" />
                        Download the free PDF
                      </a>
                    </div>
                  </aside>
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
