import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/schema'
import { JsonLd } from './json-ld'

export function Breadcrumbs({
  items,
  variant = 'default',
}: {
  items: { name: string; href: string }[]
  variant?: 'default' | 'hero'
}) {
  const all = [{ name: 'Home', href: '/' }, ...items]
  const nav = (
    <nav
      aria-label="Breadcrumb"
      className={`mx-auto max-w-7xl px-4 py-3 md:px-6 ${variant === 'hero' ? 'text-xs text-white/65' : ''}`}
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm font-medium">
        {all.map((item, i) => {
          const last = i === all.length - 1
          return (
            <li key={item.href} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className={variant === 'hero' ? 'text-white' : 'text-primary'}>
                  {item.name}
                </span>
              ) : (
                <>
                  <Link
                    href={item.href}
                    className={variant === 'hero' ? 'text-white/65 hover:text-white' : 'text-foreground/80 hover:text-foreground'}
                  >
                    {item.name}
                  </Link>
                  <span aria-hidden="true" className={variant === 'hero' ? 'text-white/40' : 'text-muted-foreground'}>
                    /
                  </span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )

  return (
    <>
      <JsonLd data={breadcrumbSchema(all)} />
      {variant === 'hero' ? nav : <div className="border-b border-border bg-secondary">{nav}</div>}
    </>
  )
}
