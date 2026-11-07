import type { MetadataRoute } from 'next'
import { site } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fbfc',
    theme_color: '#102a3a',
    icons: [
      { src: '/rise-gen-favicon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/rise-gen-favicon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png', purpose: 'any' },
    ],
  }
}
