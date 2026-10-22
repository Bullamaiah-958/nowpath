import type { Metadata } from 'next'
import { posts } from '@/lib/blog'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PageHero, AccentText } from '@/components/page-hero'
import { Section, SectionHeading } from '@/components/section'
import { PostCard } from '@/components/post-card'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'ServiceNow Tutorials & Guides | ITSM, Scripting, Certification Blog',
  description:
    'Free ServiceNow tutorials for beginners: what is ServiceNow, ITSM, CSM, HRSD, GRC, scripting, business rules, client scripts, certification guide and real-time scenarios.',
  keywords: ['ServiceNow Tutorial', 'How to Learn ServiceNow', 'ServiceNow Learning Path for Beginners', 'ServiceNow Scripting Tutorial', 'ServiceNow Certification Guide'],
  alternates: { canonical: '/blog' },
}

const categories = ['Fundamentals', 'Modules', 'Scripting', 'Career'] as const

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} />
      <PageHero
        eyebrow="Resources · ServiceNow tutorials"
        title={
          <>
            Learn ServiceNow, <AccentText>one guide at a time.</AccentText>
          </>
        }
        description={<p>Practical, trainer-written ServiceNow tutorials — from &ldquo;What is ServiceNow?&rdquo; to business rules, client scripts, certification and real-time scenarios.</p>}
      />
      {categories.map((cat, i) => {
        const list = posts.filter((p) => p.category === cat)
        if (!list.length) return null
        return (
          <Section key={cat} tone={i % 2 === 0 ? 'default' : 'muted'} labelledBy={`cat-${cat}`}>
            <SectionHeading id={`cat-${cat}`} eyebrow={`0${i + 1} · ${cat}`} title={`ServiceNow ${cat}`} />
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {list.map((p) => (
                <li key={p.slug}>
                  <PostCard post={p} />
                </li>
              ))}
            </ul>
          </Section>
        )
      })}
      <CtaBand />
    </>
  )
}
