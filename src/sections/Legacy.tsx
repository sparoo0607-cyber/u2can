import Reveal from '../components/Reveal'
import MicroLabel from '../components/MicroLabel'

// Generic, structural era labels only — we don't have verified per-year facts
// beyond the founding year (2016) and the Best Club recognition, so these are
// deliberately light/generic rather than specific dated claims.
const MILESTONES = [
  { year: '2016', label: 'Foundation' },
  { year: '2018', label: 'Expansion' },
  { year: '2020', label: 'Creative Culture' },
  { year: '2022', label: 'New Generation' },
  { year: '2024', label: 'Recognition' },
  { year: '2026', label: '10 Years' },
]

export default function Legacy() {
  return (
    <section id="legacy" className="relative bg-[#e7e7e3] px-5 py-28 text-[#111111] md:px-10 md:py-36">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end">
          <Reveal>
            <MicroLabel className="mb-4 block text-[#a6821c]">EST. 07 / 10 / 2016</MicroLabel>
            <h2 className="font-display text-[12vw] font-black uppercase leading-[0.88] tracking-tighter sm:text-[9vw] md:text-[6vw]">
              10 Years of
              <br />
              Making.
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="max-w-sm">
            <p className="text-sm leading-relaxed text-[#111111]/70">
              Founded as the first student club of the Department of Mechanical Engineering,
              ANITS — U Too Can has carried a decade of student-led events, culture, and
              creativity, from its first cohort to today&apos;s.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16 md:mt-24">
          <div className="hairline-light absolute left-0 right-0 top-3 hidden md:block" />
          <div className="grid grid-cols-2 gap-y-12 sm:grid-cols-3 md:flex md:justify-between md:gap-0">
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08} className="relative flex flex-col items-start md:items-center">
                <span className="mb-3 hidden h-1.5 w-1.5 rounded-full bg-[#d4af37] md:block" />
                <span className="font-mono text-xs text-[#a6821c]">{m.year}</span>
                <span className="mt-2 font-display text-sm font-bold uppercase tracking-tight md:text-center">
                  {m.label}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
