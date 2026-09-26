import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import MicroLabel from '../components/MicroLabel'

const LEFT_WORDS = ['PEOPLE', 'IDEAS', 'EVENTS', 'CULTURE', 'BEYOND', 'ACADEMICS']

export default function CulturalStatement() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  // slow, opposite-direction drift on the background photo and the ghost numeral —
  // a quiet parallax read as the section scrolls through, not a headline effect
  const bgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])
  const numeralY = useTransform(scrollYProgress, [0, 1], ['4%', '-4%'])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#111111] px-5 py-28 text-[#e9e7e1] md:px-10 md:py-36"
    >
      {/* discovered, not presented — a heavily desaturated archival photo sitting
          almost invisibly behind everything */}
      <motion.div style={{ y: bgY }} className="pointer-events-none absolute -inset-y-[8%] inset-x-0 opacity-[0.14]">
        <img
          src="/assets/real/group-photo-students.jpeg"
          alt=""
          aria-hidden="true"
          className="h-full w-full scale-105 object-cover object-top opacity-90 grayscale blur-[1px] contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#111111]/70 to-[#111111]" />
      </motion.div>

      {/* film grain, analog dust, vignette — this should feel like a printed poster
          scanned in, not a clean UI surface */}
      <div className="grain-overlay pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="grid h-full grid-cols-12">
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} className="border-l border-white first:border-l-0" />
          ))}
        </div>
      </div>

      {/* oversized outlined ghost numeral — archive page marker, meant to almost
          disappear into the background rather than dominate it */}
      <motion.span
        style={{ y: numeralY, WebkitTextStroke: '1.5px rgba(233,231,225,0.14)' }}
        aria-hidden="true"
        className="pointer-events-none absolute -right-[4vw] -top-[4vw] select-none font-display text-[36vw] font-black leading-none text-transparent"
      >
        02
      </motion.span>

      <div className="relative mx-auto max-w-[110rem]">
        {/* top row: archive label (left) / section marker (right) */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="block h-px w-8 bg-[#d8a92e]" aria-hidden="true" />
            <MicroLabel className="block">ARCHIVE / STATEMENT</MicroLabel>
          </div>
          <MicroLabel className="hidden text-right text-white/40 sm:block">U2C / 02 — STUDENT CULTURE</MicroLabel>
        </div>

        {/* three-column editorial layout: metadata / headline+collage / metadata */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-[10rem_1fr_10rem] md:gap-8 xl:grid-cols-[12rem_1fr_12rem]">
          {/* left metadata rail */}
          <Reveal delay={0.05} className="order-2 flex flex-row flex-wrap gap-x-10 gap-y-6 md:order-1 md:flex-col md:justify-between">
            <div>
              <MicroLabel className="block text-white/50">EST.</MicroLabel>
              <MicroLabel className="block text-[#e9e7e1]">2016</MicroLabel>
            </div>
            <div>
              <MicroLabel className="block text-white/50">MECHANICAL</MicroLabel>
              <MicroLabel className="block text-white/50">ENGINEERING</MicroLabel>
              <MicroLabel className="mt-1 block text-white/50">ANITS</MicroLabel>
            </div>
            <ul className="space-y-1.5">
              {LEFT_WORDS.map((w) => (
                <li key={w}>
                  <MicroLabel className="block text-white/35">{w}</MicroLabel>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* center: headline + photo collage */}
          <div className="relative order-1 md:order-2">
            {/* small tilted archival print, taped at the corners, near the top of the headline */}
            <Reveal
              delay={0.15}
              className="relative z-30 mx-auto mb-8 w-44 -rotate-3 sm:w-52 md:absolute md:-top-14 md:left-[8%] md:mx-0 md:mb-0 md:w-56"
            >
              <div
                data-cursor="view"
                data-cursor-label="VIEW"
                className="relative border-[5px] border-[#e9e7e1] bg-[#e9e7e1] shadow-[0_25px_55px_-15px_rgba(0,0,0,0.75)]"
              >
                {/* tape corners */}
                <span className="absolute -left-3 -top-2 h-5 w-12 -rotate-[18deg] bg-[#e9e7e1]/70 shadow-sm" aria-hidden="true" />
                <span className="absolute -right-3 -top-2 h-5 w-12 rotate-[18deg] bg-[#e9e7e1]/70 shadow-sm" aria-hidden="true" />
                <img
                  src="/assets/real/creative-space-mural-room.jpeg"
                  alt="U2C clubroom with a hand-painted mural of the six wings"
                  className="w-full grayscale contrast-125"
                  loading="lazy"
                />
              </div>
            </Reveal>

            <Reveal>
              <h2 className="relative z-10 font-display text-[13vw] font-black uppercase leading-[0.9] tracking-tighter sm:text-[10vw] md:text-[5.6vw]">
                <span className="block">We learn.</span>
                <span className="block pl-[6vw] md:pl-[9vw]">We express.</span>
                <span className="block text-[#d8a92e]">We explore.</span>
                <span className="block pl-[4vw] md:pl-[6vw]">We compete.</span>
                <span className="block">We lead.</span>
              </h2>
            </Reveal>

            {/* handwritten annotation, floating just above the large photo */}
            <span
              aria-hidden="true"
              className="pointer-events-none relative z-30 mt-6 block -rotate-2 font-hand text-3xl text-[#e9e7e1]/80 sm:text-4xl md:absolute md:-top-8 md:right-[12%] md:mt-0"
            >
              More than
              <br />a club.
            </span>

            {/* large archival photograph — borderless, rotated, physically overlapping
                the tail of the headline rather than boxed off in a card */}
            <Reveal
              delay={0.3}
              className="relative z-20 mx-auto mt-12 w-full max-w-sm rotate-2 sm:max-w-md md:absolute md:right-0 md:top-[6%] md:mt-0 md:w-[26rem] md:max-w-none lg:w-[30rem]"
            >
              <div data-cursor="view" data-cursor-label="VIEW" className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-3 -top-3 z-10 h-8 w-16 -rotate-6 bg-[#d8a92e]/90 shadow-[0_8px_20px_rgba(0,0,0,0.4)]"
                />
                <img
                  src="/assets/real/group-photo-students.jpeg"
                  alt="U2C students gathered together in matching club event t-shirts"
                  className="w-full shadow-[0_35px_75px_-15px_rgba(0,0,0,0.8)] grayscale contrast-125"
                  loading="lazy"
                />
                {/* signature-style scribble */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 160 50"
                  className="absolute bottom-4 left-4 h-10 w-32 text-[#d8a92e] opacity-80"
                >
                  <path
                    d="M4 34c10-18 18-24 24-14 5 9-2 20 6 20s10-16 20-18 12 10 20 8 8-14 18-16 14 6 24 4 12-10 18-12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <MicroLabel className="mt-3 flex items-center gap-2 text-white/50">
                <span className="block h-px w-5 bg-[#d8a92e]" aria-hidden="true" />
                2016 / INAUGURATION
              </MicroLabel>
            </Reveal>
          </div>

          {/* right metadata rail */}
          <Reveal delay={0.1} className="order-3 flex flex-col justify-between gap-8">
            <div>
              <div className="mb-3 h-px w-8 bg-[#d8a92e]" aria-hidden="true" />
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-widest text-white/50">
                Ideas
                <br />
                People
                <br />
                Experiences
                <br />A stronger
                <br />
                U2C.
              </p>
            </div>

            <a
              href="#archive"
              data-cursor="view"
              data-cursor-label="OPEN"
              className="group hidden items-center gap-3 md:flex"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-white/30 transition-colors group-hover:border-[#d8a92e]">
                <ArrowUpRight
                  size={16}
                  className="text-white/70 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#d8a92e]"
                />
              </span>
              <span className="font-mono text-[10px] uppercase leading-tight tracking-widest text-white/60">
                Explore
                <br />
                the archive
              </span>
            </a>
          </Reveal>
        </div>

        {/* bottom row: archive index / mood statement / era marker */}
        <div className="mt-24 flex flex-col gap-8 border-t border-white/10 pt-6 md:mt-40 md:flex-row md:items-start md:justify-between md:gap-6">
          <div className="flex items-center gap-3">
            <MicroLabel className="text-white/50">02 / 16</MicroLabel>
            <span className="block h-px w-8 bg-[#d8a92e]" aria-hidden="true" />
          </div>

          <p className="max-w-xs font-mono text-[10px] uppercase leading-relaxed tracking-widest text-white/45 md:text-center">
            A space for every idea,
            <br />
            every passion and
            <br />
            every version of you.
          </p>

          <div className="flex items-center gap-3 md:flex-row-reverse">
            <MicroLabel className="text-white/50">STUDENT CULTURE / SINCE 2016</MicroLabel>
            <span className="block h-px w-8 bg-[#d8a92e]" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
