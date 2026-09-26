import { UserRound } from 'lucide-react'
import Reveal from '../components/Reveal'
import MicroLabel from '../components/MicroLabel'

const TEAM = [
  { name: 'G. Naresh', role: 'Faculty Coordinator', tag: 'Asst. Prof.' },
  { name: 'N. Midun Kumar', role: 'Student Coordinator', tag: 'Student Lead' },
]

export default function Team() {
  return (
    <section id="team" className="relative bg-[#151515] px-5 py-28 text-[#ececea] md:px-10 md:py-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <MicroLabel className="mb-3 block">TEAM</MicroLabel>
          <h2 className="font-display text-[10vw] font-black uppercase leading-[0.9] tracking-tighter sm:text-[7vw] md:text-[4.5vw]">
            The people behind U2C.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:mt-20 md:max-w-2xl">
          {TEAM.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              {/* Editorial rectangular-portrait placeholder: no real photo available for
                  this coordinator. Replace the silhouette block below with an actual
                  portrait when the club supplies one. */}
              <div className="flex aspect-[3/4] w-full items-center justify-center border border-white/10 bg-[#1c1c1c]">
                <UserRound className="h-16 w-16 text-[#d4af37]/40" strokeWidth={1} />
              </div>
              <MicroLabel className="mt-4 block text-[#d4af37]">{member.tag}</MicroLabel>
              <h3 className="mt-1 font-display text-xl font-black uppercase tracking-tight">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-[#ececea]/60">{member.role}</p>
            </Reveal>
          ))}
        </div>

        {/* PLACEHOLDER: additional wing leads / team member names and photos should be
            added here as a further grid of the same card shape once supplied by the club. */}
        <p className="mt-14 max-w-md font-mono text-[10px] uppercase tracking-widest text-[#ececea]/35">
          Additional wing leads and team members to be added.
        </p>
      </div>
    </section>
  )
}
