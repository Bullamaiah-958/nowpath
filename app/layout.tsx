import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Bai_Jamjuree } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { FloatingContact } from '@/components/floating-contact'
import { JsonLd } from '@/components/json-ld'
import { organizationSchema, websiteSchema } from '@/lib/schema'
import { site } from '@/lib/site'
import './globals.css'

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-bai-jamjuree',
  display: 'swap',
})

export const metadata: Metadata = {
  // TODO: Replace the placeholder with the production site origin.
  metadataBase: new URL(site.url),
  title: {
    default: 'ServiceNow Training Institute in Hyderabad | Online & Classroom | Rise Gen Technologies',
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'ServiceNow Training',
    'ServiceNow Training Institute',
    'ServiceNow Courses',
    'ServiceNow Online Training',
    'ServiceNow Offline Training',
    'ServiceNow Classroom Training',
    'ServiceNow Training in Hyderabad',
    'ServiceNow Training Institute in Hyderabad',
    'ServiceNow Online Training in Hyderabad',
    'ServiceNow Classroom Training in Hyderabad',
    'Best ServiceNow Training Institute in Hyderabad',
  ],
  applicationName: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: site.name,
    url: site.url,
    title: 'ServiceNow Training Institute in Hyderabad | Rise Gen Technologies',
    description: site.description,
    images: [{ url: '/images/classroom.png', width: 1536, height: 1024, alt: 'ServiceNow classroom training in Hyderabad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ServiceNow Training Institute in Hyderabad | Rise Gen Technologies',
    description: site.description,
    images: ['/images/classroom.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' }   },
  icons: {
    icon: [
      { url: '/rise-gen-favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/rise-gen-favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/rise-gen-favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#102a3a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html id="top" lang="en-IN" className={`${baiJamjuree.variable} bg-background`}>
      <body className="font-sans font-medium antialiased">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-card focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <FloatingContact />
        {process.env.NODE_ENV === 'production' && (
          <Script
            src="/_vercel/insights/script.js"
            strategy="lazyOnload"
            data-sdkn="nextjs"
            data-sdkv="1.6.1"
          />
        )}
      </body>
    </html>
  )
}
