import Reveal from '../components/Reveal'
import MicroLabel from '../components/MicroLabel'

export default function CulturalStatement() {
  return (
    <section className="relative overflow-hidden bg-[#151515] px-5 py-28 text-[#ececea] md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <MicroLabel className="mb-8 block">ARCHIVE / STATEMENT</MicroLabel>

        <div className="relative">
          <Reveal>
            <h2 className="font-display text-[11vw] font-black uppercase leading-[0.92] tracking-tighter sm:text-[9vw] md:text-[6.2vw]">
              We learn. We express.
              <br />
              <span className="text-[#d4af37]">We explore.</span> We compete.
              <br />
              We lead.
            </h2>
          </Reveal>

          {/* Archival event photo, overlapping the type block on larger screens */}
          <Reveal delay={0.25} className="relative mx-auto mt-12 w-full max-w-xs md:absolute md:right-0 md:top-1/2 md:mt-0 md:w-72 md:-translate-y-1/2 md:translate-x-8">
            <div className="border border-white/15 bg-black/40 p-2 shadow-2xl">
              <img
                src="/assets/real/inauguration-ribbon-cutting.png"
                alt="Archival collage: U2C inauguration ribbon-cutting ceremony and a faculty gathering"
                className="w-full grayscale contrast-125"
                loading="lazy"
              />
              <MicroLabel className="mt-2 block px-1 pb-1">2016 / Inauguration</MicroLabel>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
