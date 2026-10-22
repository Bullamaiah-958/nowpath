import type { Metadata } from 'next'
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { PageHero, AccentText } from '@/components/page-hero'
import { Section } from '@/components/section'
import { EnquiryForm } from '@/components/enquiry-form'

export const metadata: Metadata = {
  title: 'Contact & Free Demo | ServiceNow Training in Ameerpet, Hyderabad',
  description: 'Book a free ServiceNow demo class. Call, WhatsApp or visit NowPath ServiceNow Training Institute in Ameerpet, Hyderabad. Online and classroom batches every two weeks.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const channels = [
    { icon: Phone, label: 'Call', value: site.phone, href: site.phoneHref },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with a counsellor', href: whatsappLink() },
    { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  ]
  return (
    <>
      <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />
      <PageHero
        eyebrow="Contact · Free demo class"
        title={
          <>
            Talk to a counsellor, <AccentText>not a call centre.</AccentText>
          </>
        }
        description={<p>Tell us your background and goals. We will recommend the right ServiceNow course and invite you to a free live demo class.</p>}
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-4 lg:col-span-6">
            <h2 className="text-3xl font-bold tracking-tight">Reach us directly</h2>
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary"
              >
                <c.icon className="size-6 text-primary" aria-hidden="true" />
                <span>
                  <span className="eyebrow block text-muted-foreground">{c.label}</span>
                  <span className="mt-1 block text-lg font-semibold">{c.value}</span>
                </span>
              </a>
            ))}
            <address className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 not-italic">
              <MapPin className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
              <span>
                <span className="eyebrow block text-muted-foreground">Classroom centre</span>
                <span className="mt-1 block text-lg font-semibold">
                  {site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode}
                </span>
                <span className="mt-1 block text-sm text-muted-foreground">Mon–Sat, 7:00 AM – 9:00 PM</span>
              </span>
            </address>
          </div>
          <div className="lg:col-span-6">
            <EnquiryForm />
          </div>
        </div>
      </Section>
    </>
  )
}
