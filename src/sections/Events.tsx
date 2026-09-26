import MicroLabel from '../components/MicroLabel'
import PlaceholderPanel from '../components/PlaceholderPanel'
import Reveal from '../components/Reveal'

// Structural categories only — we have no verified specific event names or dates,
// so each category shows generic placeholder entries rather than invented ones.
const CATEGORIES = [
  { name: 'Workshops', tag: 'Innovation Cell' },
  { name: 'Competitions', tag: 'Multiple Wings' },
  { name: 'Sports', tag: 'Sport Club' },
  { name: 'Cultural', tag: 'Cultural Club' },
  { name: 'Creative', tag: 'Creative Pods' },
]

export default function Events() {
  return (
    <section className="relative bg-[#e7e7e3] py-24 text-[#111111] md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <MicroLabel className="mb-3 block text-[#a6821c]">EXPERIENCES</MicroLabel>
          <h2 className="font-display text-[9vw] font-black uppercase leading-[0.9] tracking-tighter sm:text-[6vw] md:text-[4vw]">
            What happens at U2C.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#111111]/60">
            A running set of categories U2C organizes across the year. Specific dates and
            entries are added by the club as events are scheduled.
          </p>
        </Reveal>
      </div>

      <div className="no-scrollbar mt-12 flex gap-5 overflow-x-auto px-5 pb-4 md:mt-16 md:px-10">
        {CATEGORIES.map((cat, i) => (
          <Reveal
            key={cat.name}
            delay={i * 0.06}
            className="relative flex h-64 w-[70vw] shrink-0 flex-col justify-between border border-black/10 p-5 sm:w-[40vw] md:h-72 md:w-[24vw]"
          >
            {/* PLACEHOLDER: add a real photo representative of this event category when available */}
            <div className="absolute inset-0 -z-10">
              <PlaceholderPanel label={`${cat.name.toLowerCase()} event photo`} tone="light" />
            </div>
            <MicroLabel className="text-[#a6821c]">{cat.tag}</MicroLabel>
            <div>
              <h3 className="font-display text-xl font-black uppercase tracking-tight">{cat.name}</h3>
              {/* PLACEHOLDER: add real event title + date once scheduled/confirmed */}
              <p className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[#111111]/40">
                Date to be announced
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
