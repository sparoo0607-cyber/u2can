import Reveal from '../components/Reveal'
import MicroLabel from '../components/MicroLabel'
import ParticleField from '../components/ParticleField'

export default function MoreThanClub() {
  return (
    <section className="relative overflow-hidden bg-[#151515] px-5 py-28 text-[#ececea] md:px-10 md:py-40">
      <div className="absolute inset-0">
        <img
          src="/assets/real/creative-space-mural-room.jpeg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover opacity-15 grayscale"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#151515]/80" />
      </div>

      <ParticleField className="opacity-40" />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <MicroLabel className="mb-4 block">FROM STUDENTS TO ALUMNI</MicroLabel>
          <h2 className="font-display text-[13vw] font-black uppercase leading-[0.88] tracking-tighter sm:text-[9vw] md:text-[6.5vw]">
            More than
            <br />
            <span className="text-[#d4af37]">a club.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 md:mt-20 md:grid-cols-3 md:gap-8">
          <Reveal delay={0.05}>
            <MicroLabel className="mb-3 block text-[#d4af37]">Our strength</MicroLabel>
            <p className="text-sm leading-relaxed text-[#ececea]/75">
              U2C thrives on the unity of its students and the constant encouragement of
              faculty. Together they create an environment where ideas are nurtured, talents
              are celebrated, and every student is empowered to explore, create, and excel.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <MicroLabel className="mb-3 block text-[#d4af37]">Our impact</MicroLabel>
            <p className="text-sm leading-relaxed text-[#ececea]/75">
              Even during COVID-19, U2C kept the spirit alive through online events, sessions,
              and competitions — never stopping, always connecting.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <MicroLabel className="mb-3 block text-[#d4af37]">Students to alumni</MicroLabel>
            <p className="text-sm leading-relaxed text-[#ececea]/75">
              Founded by students in 2016, U2C continues to thrive through student leadership
              and a strong alumni network, connecting generations and carrying the spirit of
              U Too Can forward.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
