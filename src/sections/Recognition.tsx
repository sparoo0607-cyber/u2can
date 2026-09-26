import Reveal from '../components/Reveal'
import MicroLabel from '../components/MicroLabel'

export default function Recognition() {
  return (
    <section className="relative bg-[#e7e7e3] px-5 py-28 text-center text-[#111111] md:py-40">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <MicroLabel className="mb-6 block text-[#a6821c]">RECOGNITION</MicroLabel>
          <h2 className="font-display text-[10vw] font-black uppercase leading-[0.9] tracking-tighter sm:text-[7vw] md:text-[4.5vw]">
            Recognized for what we create.
          </h2>

          <div className="mx-auto mt-14 flex max-w-md flex-col items-center border border-black/10 px-8 py-10">
            <span className="text-3xl" aria-hidden="true">🏆</span>
            <h3 className="mt-4 font-display text-lg font-black uppercase tracking-tight">
              Best Club Award
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#111111]/65">
              Recognized as the Best Club in ANITS, celebrating U2C&apos;s excellence in
              student engagement, innovation, creativity, and overall contribution to
              campus life.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
