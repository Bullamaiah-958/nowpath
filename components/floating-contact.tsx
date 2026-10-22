import { Mail, MessageCircle, Phone, Video } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'

export function FloatingContact() {
  return (
    <div className="floating-contact fixed right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col items-end gap-2">
      <a
        href={site.phoneHref}
        aria-label={`Call NowPath at ${site.phone}`}
        className="group flex h-11 w-11 flex-row-reverse items-center justify-start gap-2 overflow-hidden rounded-full border border-[#60a5fa] bg-[#bfdbfe] px-3 text-sm font-semibold text-[#1e3a8a] shadow-lg hover:w-[5.5rem] focus-visible:w-[5.5rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-2"
      >
        <Phone className="size-4 shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">Call</span>
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact NowPath on WhatsApp"
        className="group flex h-11 w-11 flex-row-reverse items-center justify-start gap-2 overflow-hidden rounded-full border border-[#4ade80] bg-[#bbf7d0] px-3 text-sm font-semibold text-[#166534] shadow-lg hover:w-[7.25rem] focus-visible:w-[7.25rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-2"
      >
        <MessageCircle className="size-4 shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">WhatsApp</span>
      </a>
      <a
        href="mailto:mandasrinivas413@gmail.com"
        aria-label="Email NowPath at mandasrinivas413@gmail.com"
        className="group flex h-11 w-11 flex-row-reverse items-center justify-start gap-2 overflow-hidden rounded-full border border-[#f87171] bg-[#fecaca] px-3 text-sm font-semibold text-[#991b1b] shadow-lg hover:w-[5.5rem] focus-visible:w-[5.5rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-2"
      >
        <Mail className="size-4 shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">Email</span>
      </a>
      <a
        href="https://www.youtube.com/nowpath"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Watch NowPath videos on YouTube"
        className="group flex h-11 w-11 flex-row-reverse items-center justify-start gap-2 overflow-hidden rounded-full border border-[#a78bfa] bg-[#ddd6fe] px-3 text-sm font-semibold text-[#5b21b6] shadow-lg hover:w-[5.5rem] focus-visible:w-[5.5rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-2"
      >
        <Video className="size-4 shrink-0" aria-hidden="true" />
        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">Video</span>
      </a>
    </div>
  )
}
