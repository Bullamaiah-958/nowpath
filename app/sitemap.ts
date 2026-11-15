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
    ['/servicenow-itsm-training', 0.9],
    ['/syllabus/servicenow-itsm-training-in-hyderabad', 0.8],
    ['/servicenow-admin-training', 0.9],
    ['/syllabus/servicenow-admin-training-in-hyderabad', 0.8],
    ['/servicenow-developer-training', 0.9],
    ['/syllabus/servicenow-developer-training-in-hyderabad', 0.8],
    ['/servicenow-scripting-training', 0.9],
    ['/syllabus/servicenow-scripting-training-in-hyderabad', 0.8],
    ['/servicenow-itom-training', 0.9],
    ['/syllabus/servicenow-itom-training-in-hyderabad', 0.8],
    ['/servicenow-cmdb-training', 0.9],
    ['/syllabus/servicenow-cmdb-training-in-hyderabad', 0.8],
    ['/servicenow-csm-training', 0.9],
    ['/syllabus/servicenow-csm-training-in-hyderabad', 0.8],
    ['/servicenow-hrsd-training', 0.9],
    ['/syllabus/servicenow-hrsd-training-in-hyderabad', 0.8],
    ['/servicenow-grc-training', 0.9],
    ['/syllabus/servicenow-grc-training-in-hyderabad', 0.8],
    ['/syllabus/servicenow-now-assist-training-in-hyderabad', 0.8],
    ['/servicenow-online-training', 0.9],
    ['/servicenow-classroom-training-hyderabad', 0.9],
    ['/servicenow-now-assist-training', 0.9],
    ['/servicenow-weekend-training-hyderabad', 0.9],
    ['/servicenow-career-training', 0.8],
    ['/servicenow-interview-questions', 0.8],
    ['/blog', 0.7],
    ['/about', 0.5],
    ['/contact', 0.6],
  ]
  return [
    ...staticPages.map(([path, priority]) => ({ url: absoluteUrl(path), lastModified: now, changeFrequency: 'weekly' as const, priority })),
    ...courses
      .filter((course) => course.slug !== 'servicenow-itsm-training' && course.slug !== 'servicenow-admin-training' && course.slug !== 'servicenow-developer-training' && course.slug !== 'servicenow-scripting-training' && course.slug !== 'servicenow-itom-training' && course.slug !== 'servicenow-cmdb-training' && course.slug !== 'servicenow-csm-training' && course.slug !== 'servicenow-hrsd-training' && course.slug !== 'servicenow-grc-training' && course.slug !== 'servicenow-now-assist-training')
      .map((course) => ({ url: absoluteUrl(`/courses/${course.slug}`), lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 })),
    ...locations.map((l) => ({ url: absoluteUrl(`/locations/${l.slug}`), lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...posts.map((p) => ({ url: absoluteUrl(`/blog/${p.slug}`), lastModified: new Date(p.date), changeFrequency: 'monthly' as const, priority: 0.6 })),
  ]
}
