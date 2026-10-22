import { Section, SectionHeading } from '@/components/section'

const trustMetrics = [
  { value: '500+', label: 'Alumni Trained' },
  { value: '100+', label: 'Hiring Partners' },
  { value: '4.9/5', label: 'Avg Class Rating' },
  { value: '85%', label: 'Avg Salary Hike' },
] as const

const hiringCompanies = [
  { name: 'Cognizant', mark: 'C', color: '#1686b8' },
  { name: 'Infosys', mark: 'I', color: '#0875bd' },
  { name: 'TCS', mark: 'T', color: '#5b2c91' },
  { name: 'Accenture', mark: '>', color: '#a100ff' },
  { name: 'Deloitte', mark: 'D', color: '#86bc25' },
  { name: 'Capgemini', mark: 'C', color: '#0070ad' },
  { name: 'Wipro', mark: 'W', color: '#6f2c91' },
  { name: 'HCLTech', mark: 'H', color: '#0072bc' },
  { name: 'ServiceNow', mark: 'S', color: '#81b5a1' },
  { name: 'Tech Mahindra', mark: 'T', color: '#ed1c24' },
  { name: 'LTIMindtree', mark: 'L', color: '#e54b4b' },
  { name: 'Mphasis', mark: 'M', color: '#d33c8c' },
  { name: 'Cyient', mark: 'C', color: '#5a6474' },
  { name: 'Persistent Systems', mark: 'P', color: '#5144a0' },
  { name: 'PwC', mark: 'PwC', color: '#e0301e' },
  { name: 'Genpact', mark: 'G', color: '#00a3e0' },
] as const

const iconPalette = [
  { background: '#e3f4ef', color: '#0f766e' },
  { background: '#e4eefb', color: '#1d5fa8' },
  { background: '#eee8fb', color: '#5b3fb3' },
  { background: '#fdf0e1', color: '#a64b00' },
  { background: '#fde8ee', color: '#be123c' },
] as const

export function HomeLocations() {
  return (
    <Section id="locations" tone="dark" labelledBy="locations-title">
      <SectionHeading
        id="locations-title"
        tone="dark"
        eyebrow="INDUSTRY TRUST"
        title={<>Where our ServiceNow <AccentDark>alumni work</AccentDark></>}
        description={
          <span className="fs-lead text-base font-medium text-slate-300 sm:text-lg">
            Empowering professionals with top-rated{' '}
            <strong className="font-semibold">ServiceNow Training in Hyderabad</strong>
            {' '}to master ITSM, CAD &amp; CSA, landing high-paying roles across leading global IT enterprises.
          </span>
        }
      />
      <dl className="mt-12 grid grid-cols-2 gap-6 text-center md:grid-cols-4 md:gap-4">
        {trustMetrics.map((metric) => (
          <div key={metric.label} className="flex flex-col items-center gap-2">
            <dt className="text-sm text-white/70">{metric.label}</dt>
            <dd className="text-3xl font-bold tracking-tight text-white md:text-4xl">{metric.value}</dd>
          </div>
        ))}
      </dl>
      <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {hiringCompanies.map((company, index) => (
          <li
            key={company.name}
          className="industry-trust-float flex min-h-14 items-center justify-center gap-[10px] rounded-xl border border-slate-200 bg-white px-3 py-3 text-center text-sm font-semibold text-slate-700 shadow-sm"
          style={{ animationDelay: `${(index % 8) * -0.18}s` }}
          >
          <span
            aria-hidden="true"
            className={`flex h-[30px] shrink-0 items-center justify-center rounded-[9px] text-[14px] font-bold leading-none ${company.mark === 'PwC' ? 'min-w-[30px] px-[6px]' : 'w-[30px]'}`}
            style={{
                backgroundColor: iconPalette[index % iconPalette.length].background,
                color: iconPalette[index % iconPalette.length].color,
              } as React.CSSProperties}
            >
              {company.mark}
            </span>
            <span>{company.name}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}

function AccentDark({ children }: { children: React.ReactNode }) {
  return <em className="font-light italic text-emerald-300">{children}</em>
}
