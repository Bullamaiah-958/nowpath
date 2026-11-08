import { Mail, MessageCircle, Phone } from 'lucide-react'
import { site, whatsappLink } from '@/lib/site'

export function FloatingContact() {
  return (
    <div className="floating-contact fixed right-4 top-1/2 z-40 flex -translate-y-1/2 flex-col items-end gap-2 max-sm:right-1/2 max-sm:top-auto max-sm:bottom-4 max-sm:translate-x-1/2 max-sm:translate-y-0 max-sm:flex-row max-sm:items-center max-sm:rounded-full max-sm:border max-sm:border-border/80 max-sm:bg-background/90 max-sm:p-2 max-sm:shadow-lg max-sm:backdrop-blur-md">
      <a
        href={site.phoneHref}
        aria-label={`Call Rise Gen Technologies at ${site.phone}`}
        className="group flex h-11 w-11 flex-row-reverse items-center justify-start gap-2 overflow-hidden rounded-full border border-indigo-500 bg-indigo-600 px-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:w-[5.5rem] hover:scale-105 hover:bg-indigo-500 focus-visible:w-[5.5rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-2 max-sm:h-9 max-sm:w-9 max-sm:px-2"
      >
        <Phone className="size-4 shrink-0 max-sm:size-3.5" aria-hidden="true" />
        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">Call</span>
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Rise Gen Technologies on WhatsApp"
        className="group flex h-11 w-11 flex-row-reverse items-center justify-start gap-2 overflow-hidden rounded-full border border-emerald-500 bg-emerald-500 px-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:w-[7.25rem] hover:scale-105 hover:bg-emerald-400 focus-visible:w-[7.25rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-2 max-sm:h-9 max-sm:w-9 max-sm:px-2"
      >
        <MessageCircle className="size-4 shrink-0 max-sm:size-3.5" aria-hidden="true" />
        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">WhatsApp</span>
      </a>
      <a
        href="mailto:mandasrinivas413@gmail.com"
        aria-label="Email Rise Gen Technologies at mandasrinivas413@gmail.com"
        className="group flex h-11 w-11 flex-row-reverse items-center justify-start gap-2 overflow-hidden rounded-full border border-violet-500 bg-violet-600 px-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:w-[5.5rem] hover:scale-105 hover:bg-violet-500 focus-visible:w-[5.5rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-2 max-sm:h-9 max-sm:w-9 max-sm:px-2"
      >
        <Mail className="size-4 shrink-0 max-sm:size-3.5" aria-hidden="true" />
        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">Email</span>
      </a>
      <a
        href="https://www.youtube.com/nowpath"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Watch Rise Gen Technologies videos on YouTube"
        className="group flex h-11 w-11 flex-row-reverse items-center justify-start gap-2 overflow-hidden rounded-full border border-[#ff0000] bg-[#ff0000] px-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:w-[9rem] hover:scale-105 hover:bg-red-700 focus-visible:w-[9rem] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-2 max-sm:h-9 max-sm:w-9 max-sm:px-2"
      >
        <svg viewBox="0 0 24 24" className="size-4 shrink-0 max-sm:size-3.5" aria-hidden="true">
          <rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" />
          <path d="m10 9 5 3-5 3z" fill="#ff0000" />
        </svg>
        <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100">Video Demo</span>
      </a>
    </div>
  )
}
