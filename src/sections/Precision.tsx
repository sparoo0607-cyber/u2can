import Reveal from '../components/Reveal'
import MicroLabel from '../components/MicroLabel'

const PANELS = [
  {
    label: 'FOR STUDENTS',
    title: 'A place to try things.',
    desc: 'Whether it is writing, sport, media, or performance — every wing is a door open to first-timers and specialists alike.',
    objectPos: 'object-left',
  },
  {
    label: 'FOR TEAMS',
    title: 'Built by collaboration.',
    desc: 'Every event, session, and initiative is planned and run by student teams, wing by wing.',
    objectPos: 'object-center',
  },
  {
    label: 'FOR THE CAMPUS',
    title: 'A shared creative culture.',
    desc: 'From technical events to cultural programs, U2C shapes the everyday creative life of the department.',
    objectPos: 'object-right',
  },
]

export default function Precision() {
  return (
    <section className="relative bg-[#e7e7e3] px-5 py-24 text-[#111111] md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <MicroLabel className="mb-3 block text-[#a6821c]">WHAT WE CREATE</MicroLabel>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
          {PANELS.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.1} className="relative flex h-[420px] flex-col justify-end overflow-hidden border border-black/10 p-6 md:h-[520px]">
              <img
                src="/assets/real/creative-space-mural-room.jpeg"
                alt=""
                aria-hidden="true"
                className={`absolute inset-0 h-full w-full object-cover ${p.objectPos} opacity-25 grayscale`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#e7e7e3]/55" />
              <div className="relative">
                <MicroLabel className="mb-4 block text-[#a6821c]">{p.label}</MicroLabel>
                <h3 className="font-display text-2xl font-black uppercase leading-tight tracking-tight md:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#111111]/70">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
