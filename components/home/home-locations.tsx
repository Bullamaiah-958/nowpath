import { Section, SectionHeading } from '@/components/section'

const trustMetrics = [
  { value: '100+', label: 'Alumni Trained' },
  { value: '25+', label: 'Hiring Partners' },
  { value: '4.5/5', label: 'Avg Class Rating' },
  { value: '30–40%', label: 'Avg Salary Hike' },
] as const

const hiringCompanies = [
  { name: 'Cognizant', mark: 'C' },
  { name: 'Infosys', mark: 'I' },
  { name: 'TCS', mark: 'T' },
  { name: 'Accenture', mark: '>' },
  { name: 'Deloitte', mark: 'D' },
  { name: 'Capgemini', mark: 'C' },
  { name: 'Wipro', mark: 'W' },
  { name: 'HCLTech', mark: 'H' },
  { name: 'ServiceNow', mark: 'S' },
  { name: 'Tech Mahindra', mark: 'T' },
  { name: 'LTIMindtree', mark: 'L' },
  { name: 'Mphasis', mark: 'M' },
  { name: 'Cyient', mark: 'C' },
  { name: 'Persistent Systems', mark: 'P' },
  { name: 'PwC', mark: 'PwC' },
  { name: 'Genpact', mark: 'G' },
] as const

const iconPalette = [
  { background: '#eee8fb', color: '#5b3fb3' },
  { background: '#e4eefb', color: '#1d5fa8' },
] as const

export function HomeLocations() {
  return (
    <Section id="locations" tone="dark" labelledBy="locations-title">
      <SectionHeading
        id="locations-title"
        tone="dark"
        eyebrow="INDUSTRY TRUST"
        title={<>Where our <AccentDark>alumni work</AccentDark></>}
        description={
          <span className="fs-lead font-medium text-slate-300">
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
  return <em className="font-light italic text-blue-300">{children}</em>
}
