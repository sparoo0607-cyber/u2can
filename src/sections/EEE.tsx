import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MicroLabel from '../components/MicroLabel'

gsap.registerPlugin(ScrollTrigger)

const WORDS = [
  {
    word: 'Enhance.',
    sub: 'Sharpening skills beyond the syllabus.',
    img: '/assets/real/creative-space-mural-room.jpeg',
    objectPos: 'object-left',
  },
  {
    word: 'Explore.',
    sub: 'Trying wings, roles, and ideas outside your comfort zone.',
    img: '/assets/real/anits-campus.jpeg',
    objectPos: 'object-center',
  },
  {
    word: 'Execute.',
    sub: 'Turning plans into events, art, and outcomes.',
    img: '/assets/real/group-photo-students.jpeg',
    objectPos: 'object-bottom',
  },
]

export default function EEE() {
  const sectionRef = useRef<HTMLElement>(null)
  const panelsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const panels = panelsRef.current
      panels.forEach((panel, i) => {
        if (i === 0) return
        gsap.fromTo(
          panel,
          { yPercent: 100 },
          {
            yPercent: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: () => `top+=${(i - 1) * window.innerHeight} top`,
              end: () => `top+=${i * window.innerHeight} top`,
              scrub: true,
            },
          },
        )
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#151515] text-[#ececea]"
      style={{ height: `${WORDS.length * 100}vh` }}
    >
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
        {WORDS.map((w, i) => (
          <div
            key={w.word}
            ref={(el) => {
              if (el) panelsRef.current[i] = el
            }}
            className="absolute inset-0 flex flex-col justify-between px-5 py-24 md:px-10"
            style={{ zIndex: i }}
          >
            <div className="absolute inset-0">
              <img
                src={w.img}
                alt=""
                aria-hidden="true"
                className={`h-full w-full object-cover ${w.objectPos} duotone-mono opacity-30`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#151515]/70" />
            </div>

            <div className="relative flex items-start justify-between">
              <MicroLabel>U2C / 00{i + 2}</MicroLabel>
              <MicroLabel>{`STEP ${i + 1} / ${WORDS.length}`}</MicroLabel>
            </div>

            <div className="relative">
              <h2 className="font-display text-[19vw] font-black uppercase leading-[0.85] tracking-tighter md:text-[13vw]">
                {w.word}
              </h2>
              <p className="mt-4 max-w-md font-mono text-xs uppercase tracking-widest text-[#ececea]/60">
                {w.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
