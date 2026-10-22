import type { MetadataRoute } from 'next'
import { courses } from '@/data/courses'
import { posts } from '@/lib/blog'
import { locations } from '@/lib/locations'
import { absoluteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticPages: [string, number][] = [
    ['/', 1],
    ['/courses', 0.9],
    ['/servicenow-online-training', 0.9],
    ['/servicenow-classroom-training-hyderabad', 0.9],
    ['/servicenow-career-training', 0.8],
    ['/servicenow-interview-questions', 0.8],
    ['/blog', 0.7],
    ['/about', 0.5],
    ['/contact', 0.6],
  ]
  return [
    ...staticPages.map(([path, priority]) => ({ url: absoluteUrl(path), lastModified: now, changeFrequency: 'weekly' as const, priority })),
    ...courses.map((c) => ({ url: absoluteUrl(`/courses/${c.slug}`), lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 })),
    ...locations.map((l) => ({ url: absoluteUrl(`/locations/${l.slug}`), lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: new Date(p.date), changeFrequency: 'monthly' as const, priority: 0.6 })),
  ]
}
