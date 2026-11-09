'use client'

import { useEffect, useState } from 'react'
import type { BlogPost } from '@/lib/blog'
import { Section, SectionHeading } from '@/components/section'
import { PostCard } from '@/components/post-card'

type Category = { id: string; label: BlogPost['category']; description: string }

export function BlogCategoryFilter({ categories, posts }: { categories: Category[]; posts: BlogPost[] }) {
  const [selected, setSelected] = useState('all')

  useEffect(() => {
    const syncHash = () => {
      const id = window.location.hash.slice(1)
      setSelected(categories.some((category) => category.id === id) ? id : 'all')
    }

    syncHash()
    window.addEventListener('hashchange', syncHash)
    window.addEventListener('popstate', syncHash)
    return () => {
      window.removeEventListener('hashchange', syncHash)
      window.removeEventListener('popstate', syncHash)
    }
  }, [categories])

  const selectedCategory = categories.find((category) => category.id === selected)
  const visiblePosts = selectedCategory ? posts.filter((post) => post.category === selectedCategory.label) : posts

  function selectCategory(id: string) {
    setSelected(id)
    if (window.location.hash !== `#${id}`) {
      window.history.pushState(null, '', `#${id}`)
    }
  }

  return (
    <>
      <div className="muted-pattern-background border-y border-border bg-secondary/80">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-4 md:px-6">
          <div role="group" aria-label="Filter articles by category" className="flex flex-wrap items-center gap-2">
            <span className="mr-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">Filter by</span>
            {[{ id: 'all', label: 'All' }, ...categories].map(({ id, label }) => (
              <button
                key={id}
                id={id}
                type="button"
                aria-pressed={selected === id}
                onClick={() => selectCategory(id)}
                className={`scroll-mt-5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  selected === id ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-foreground hover:border-primary hover:text-primary'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <p aria-live="polite" className="ml-auto rounded-full border border-primary/15 bg-card px-4 py-2 text-sm font-medium text-muted-foreground">
            Showing {visiblePosts.length} {visiblePosts.length === 1 ? 'article' : 'articles'}
            {selectedCategory && ` in ${selectedCategory.label}`}
          </p>
        </div>
      </div>
      <Section labelledBy="blog-articles-title">
        <SectionHeading
          id="blog-articles-title"
          title={<>ServiceNow <span className="text-gradient">{selectedCategory ? selectedCategory.label : 'tutorials and guides'}</span></>}
          description={selectedCategory ? selectedCategory.description : 'Explore tutorials across fundamentals, modules, scripting and career preparation.'}
          className="[&_h2]:text-2xl md:[&_h2]:text-4xl"
        />
        <ul className="mt-10 flex flex-wrap justify-center gap-4">
          {visiblePosts.map((post) => (
            <li key={post.slug} className="w-full md:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]">
              <PostCard post={post} variant="listing" />
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
