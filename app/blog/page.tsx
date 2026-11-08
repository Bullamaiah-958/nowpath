import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Braces, BriefcaseBusiness, Layers3, Library } from 'lucide-react'
import { posts } from '@/lib/blog'
import { PageHero } from '@/components/page-hero'
import { BlogCategoryFilter } from '@/components/blog-category-filter'
import { CtaBand } from '@/components/cta-band'
import { LinkButton } from '@/components/link-button'
import { TrainingHeroStrip } from '@/components/training-hero-strip'

export const metadata: Metadata = {
  title: 'ServiceNow Tutorials & Guides | ITSM, Scripting, Certification Blog',
  description:
    'Free ServiceNow tutorials for beginners: what is ServiceNow, ITSM, CSM, HRSD, GRC, scripting, business rules, client scripts, certification guide and real-time scenarios.',
  keywords: ['ServiceNow Tutorial', 'How to Learn ServiceNow', 'ServiceNow Learning Path for Beginners', 'ServiceNow Scripting Tutorial', 'ServiceNow Certification Guide'],
  alternates: { canonical: '/blog' },
}

const categories = [
  { id: 'fundamentals', label: 'Fundamentals', description: 'Start with the platform and build a foundation for your ServiceNow learning.', icon: BookOpen },
  { id: 'modules', label: 'Modules', description: 'Explore how ServiceNow supports IT, customer service, HR and risk workflows.', icon: Layers3 },
  { id: 'scripting', label: 'Scripting', description: 'Learn about scripting concepts and examples for ServiceNow development.', icon: Braces },
  { id: 'career', label: 'Career', description: 'Explore learning paths, interview preparation and ways to build your skills.', icon: BriefcaseBusiness },
] as const

const availableCategories = categories.filter(({ label }) => posts.some((post) => post.category === label))

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources · ServiceNow tutorials"
        breadcrumbs={[{ name: 'Blog', href: '/blog' }]}
        title={
          <>
            ServiceNow tutorials <span className="font-light text-blue-300">and guides.</span>
          </>
        }
        description={<p>Explore ServiceNow fundamentals, modules, scripting and career topics. Find practical guides to help you learn and prepare for your next step.</p>}
        contentClassName="pt-5 pb-6 md:pt-7 md:pb-8"
        backgroundImage="/images/blog-servicenow-background.png"
        backgroundImagePriority
        backgroundImageClassName="opacity-100"
        backgroundGrid
        actions={
          <>
            <LinkButton href="#all" size="lg">Explore tutorials <ArrowRight className="size-4" aria-hidden="true" /></LinkButton>
            <LinkButton href="/servicenow-interview-questions" size="lg" variant="ghostLight">Interview questions</LinkButton>
          </>
        }
        aside={
          <div role="region" aria-labelledby="blog-overview-title" className="relative mx-auto w-full max-w-md">
            <div className="pointer-events-none absolute -right-16 -top-20 size-56 rounded-full bg-blue-400/15 blur-3xl" aria-hidden="true" />
            <TrainingHeroStrip mode="Learning resources" detail="Tutorials & guides" icon={Library} />
            <div className="relative rounded-xl border border-white/15 bg-ink/75 p-5 shadow-2xl shadow-brand/20 backdrop-blur-sm sm:p-6">
              <p className="text-[10px] font-bold uppercase tracking-wide text-blue-200/75">Choose a topic</p>
              <h2 id="blog-overview-title" className="mt-2 text-xl font-semibold leading-tight text-white sm:text-2xl">Explore ServiceNow resources</h2>
              <ul className="mt-6 text-sm text-white/75">
                {availableCategories.map(({ id, label, description, icon: Icon }) => (
                  <li key={id} className="border-b border-dotted border-white/40">
                    <Link href={`#${id}`} className="flex items-start gap-3 py-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-400/15 text-blue-200"><Icon className="size-4" aria-hidden="true" /></span>
                      <span className="min-w-0 flex-1"><strong className="block font-semibold text-white">{label}</strong><span className="mt-1 block leading-relaxed text-white/60">{description}</span></span>
                      <ArrowRight className="mt-1 size-4 shrink-0 text-blue-200" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        }
      />
      <BlogCategoryFilter categories={availableCategories.map(({ id, label, description }) => ({ id, label, description }))} posts={posts} />
      <CtaBand tone="muted" />
    </>
  )
}
