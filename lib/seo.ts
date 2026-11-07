import type { Metadata } from 'next'
import { site } from '@/lib/site'

type PageMetadataOptions = {
  title: string
  description: string
  canonicalPath: string
  image?: {
    url: string
    alt: string
    width?: number
    height?: number
  }
}

export function createPageMetadata({
  title,
  description,
  canonicalPath,
  image = {
    url: '/images/classroom.png',
    width: 1536,
    height: 1024,
    alt: 'ServiceNow classroom training in Hyderabad',
  },
}: PageMetadataOptions): Metadata {
  const brandedTitle = `${title} | ${site.name}`
  return {
    title: { absolute: brandedTitle },
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: 'website',
      title: brandedTitle,
      description,
      url: canonicalPath,
      siteName: site.name,
      locale: 'en_IN',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandedTitle,
      description,
      images: [image.url],
    },
    robots: { index: true, follow: true },
  }
}
