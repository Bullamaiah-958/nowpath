import type { Metadata } from 'next'
import { ArrowDown, ArrowUpRight, CalendarDays, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'
import { PageHero } from '@/components/page-hero'
import { Section, SectionEyebrow } from '@/components/section'
import { EnquiryForm } from '@/components/enquiry-form'
import { LinkButton } from '@/components/link-button'

export const metadata: Metadata = {
  title: 'Contact & Free Demo | ServiceNow Training in Kukatpally, Hyderabad',
  description: 'Book a free ServiceNow demo class. Call, WhatsApp or visit Rise Gen Technologies ServiceNow Training Institute in Kukatpally, Hyderabad. Online and classroom batches every two weeks.',
  alternates: { canonical: '/contact' },
}

export default function ContactPage() {
  const channels = [
    { icon: Phone, label: 'Call us', value: site.phone, description: 'Speak with our team', href: site.phoneHref },
    { icon: MessageCircle, label: 'WhatsApp', value: 'Chat with a counsellor', description: 'Ask about courses and demos', href: whatsappLink() },
    { icon: Mail, label: 'Email us', value: site.email, description: 'Send us your enquiry', href: `mailto:${site.email}` },
  ]
  return (
    <>
      <PageHero
        eyebrow="Contact · Free demo class"
        breadcrumbs={[{ name: 'Contact', href: '/contact' }]}
        title={
          <>
            Let’s start your <span className="font-light text-blue-300">ServiceNow journey.</span>
          </>
        }
        description={<p>Have questions about ServiceNow training? Talk to our team or request a free demo class to explore your options.</p>}
        contentClassName="pt-12 pb-10 md:pt-16 md:pb-12"
        actions={
          <>
            <LinkButton href="#demo-enquiry" size="lg">Request a free demo <ArrowDown className="size-4" aria-hidden="true" /></LinkButton>
            <LinkButton href={whatsappLink()} size="lg" variant="ghostLight" external><MessageCircle className="size-4" aria-hidden="true" /> Chat on WhatsApp</LinkButton>
          </>
        }
        aside={
          <div className="mx-auto max-w-md rounded-2xl border border-white/15 bg-ink/70 p-6 shadow-2xl shadow-brand/20 backdrop-blur-sm sm:p-8">
            <span className="flex size-12 items-center justify-center rounded-xl bg-blue-400/15 text-blue-200">
              <CalendarDays className="size-6" aria-hidden="true" />
            </span>
            <p className="mt-5 text-sm font-bold uppercase tracking-wider text-blue-200">Free demo class</p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-white">Not sure where to start?</h2>
            <p className="mt-3 text-base leading-relaxed text-white/75">Share your interests and preferred training mode. Our team can help you explore the right course.</p>
            <div className="mt-5 border-t border-white/15 pt-4 text-sm text-white/75">
              Online and classroom training &middot; Kukatpally, Hyderabad
            </div>
          </div>
        }
      />
      <Section id="demo-enquiry" tone="muted" labelledBy="contact-details-title" className="scroll-mt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <SectionEyebrow>Get in touch</SectionEyebrow>
            <h2 id="contact-details-title" className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Let’s <span className="text-gradient">connect.</span></h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">Choose the way that works for you, or fill in the form to request a demo and continue on WhatsApp.</p>
            <div className="mt-7 grid gap-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith('http') ? '_blank' : undefined}
                  rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <c.icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-muted-foreground">{c.label}</span>
                    <span className="mt-1 block break-words text-base font-bold">{c.value}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{c.description}</span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
              ))}
              <address className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 not-italic">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-muted-foreground">Classroom centre</span>
                  <span className="mt-1 block text-base font-bold">
                    {site.address.street}, {site.address.locality}, {site.address.region}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">{site.hours}</span>
                </span>
              </address>
            </div>
          </div>
          <div className="lg:col-span-6">
            <EnquiryForm variant="contact" />
          </div>
        </div>
      </Section>
    </>
  )
}
