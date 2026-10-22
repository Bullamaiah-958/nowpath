export function SectionNav({ items }: { items: { id: string; label: string }[] }) {
  return (
    <nav aria-label="On this page" className="sticky top-[67px] z-30 border-b border-border bg-background/95 backdrop-blur-md">
      <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 font-mono text-xs md:px-6 [scrollbar-width:none]">
        {items.map((item) => (
          <li key={item.id} className="shrink-0">
            <a href={`#${item.id}`} className="block rounded-full px-3 py-1.5 text-foreground/80 transition-colors hover:bg-ink hover:text-ink-foreground">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
