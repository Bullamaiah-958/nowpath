import type { Faq } from './courses'
import type { CoursePageData } from '../data/courses'
import { absoluteUrl, site } from './site'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    logo: absoluteUrl('/icon.svg'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    areaServed: 'Hyderabad, Telangana, India',
    // TODO: Replace with verified official social profile URLs.
    sameAs: ['https://example.com/TODO-official-profile'],
  }
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  }
}

export function faqSchema(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
}

export function coursePageSchema(course: CoursePageData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.primaryKeyword,
    description: course.metaDescription,
    url: absoluteUrl(`/courses/${course.slug}`),
    provider: {
      '@type': 'EducationalOrganization',
      name: site.name,
      url: absoluteUrl('/'),
    },
    hasCourseInstance: course.modes.map((mode) => ({
      '@type': 'CourseInstance',
      courseMode: mode === 'Online' ? 'online' : 'onsite',
      location:
        mode === 'Online'
          ? { '@type': 'VirtualLocation', url: absoluteUrl('/online-training') }
          : { '@type': 'Place', name: 'Classroom training in Hyderabad' },
    })),
  }
}
