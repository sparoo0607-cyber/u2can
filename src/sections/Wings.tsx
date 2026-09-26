import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MicroLabel from '../components/MicroLabel'
import PlaceholderPanel from '../components/PlaceholderPanel'

gsap.registerPlugin(ScrollTrigger)

const WINGS = [
  {
    num: '01',
    title: 'Literature',
    sub: 'Writers Hub',
    desc: 'A platform for writers to express their thoughts through words, stories, poetry, and literature.',
    icon: '/assets/real/brochure_3.jpeg',
    // No verified photo of a literature/notebook session — shown as a placeholder panel.
    photo: null,
    placeholderLabel: 'literature / writers hub photo',
  },
  {
    num: '02',
    title: 'Media / Photography',
    sub: 'Lit-Cite',
    desc: 'Capturing and creating engaging content through photography, reels, videography, and digital media.',
    icon: '/assets/real/brochure_4.jpeg',
    photo: '/assets/real/creative-space-mural-room.jpeg',
    objectPos: 'object-center',
  },
  {
    num: '03',
    title: 'Sports',
    sub: 'Sport Club',
    desc: 'Promoting fitness, teamwork, sportsmanship, and a spirit of healthy competition.',
    icon: '/assets/real/brochure_5.jpeg',
    // No verified sports action photo available.
    photo: null,
    placeholderLabel: 'sports / sport club action photo',
  },
  {
    num: '04',
    title: 'Innovation Cell',
    sub: 'Innovate',
    desc: 'Encouraging innovation, problem-solving, technical thinking, and creative ideas.',
    icon: '/assets/real/brochure_6.jpeg',
    photo: '/assets/real/anits-campus.jpeg',
    objectPos: 'object-top',
  },
  {
    num: '05',
    title: 'Cultural Club',
    sub: 'Cultural Club',
    desc: 'Celebrating culture and talent through music, dance, performances, and cultural events.',
    icon: '/assets/real/brochure_7.jpeg',
    // No verified cultural-performance stage photo available.
    photo: null,
    placeholderLabel: 'cultural club performance photo',
  },
  {
    num: '06',
    title: 'Creative Pods',
    sub: 'Creative Pods',
    desc: 'A space for creativity, art, and imaginative expression through diverse activities.',
    icon: '/assets/real/brochure_8.png',
    photo: '/assets/real/group-photo-students.jpeg',
    objectPos: 'object-bottom',
  },
]

export default function Wings() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current
      const section = sectionRef.current
      if (!track || !section) return

      const getScrollAmount = () => track.scrollWidth - window.innerWidth

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          scrub: 0.4,
          pin: true,
          invalidateOnRefresh: true,
        },
      })

      return () => tween.kill()
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="wings" ref={sectionRef} className="relative overflow-hidden bg-[#151515] text-[#ececea]">
      <div ref={trackRef} className="flex h-[100svh] w-max">
        <div className="flex h-full w-[92vw] shrink-0 flex-col justify-center border-r border-white/10 px-5 md:w-[38vw] md:px-10">
          <MicroLabel>WINGS / 01–06</MicroLabel>
          <h2 className="mt-6 font-display text-[13vw] font-black uppercase leading-[0.88] tracking-tighter md:text-[5.2vw]">
            Six
            <br />
            Wings.
            <br />
            <span className="text-[#d4af37]">One</span> Club.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#ececea]/60">
            Every student finds a place in one of six wings — each with its own craft,
            rhythm, and community.
          </p>
          <span className="mt-8 font-mono text-[10px] uppercase tracking-widest text-[#ececea]/40">
            Scroll to explore →
          </span>
        </div>

        {WINGS.map((w) => (
          <article
            key={w.num}
            className="relative flex h-full w-[92vw] shrink-0 flex-col justify-between border-r border-white/10 px-5 py-16 md:w-[46vw] md:px-10"
          >
            <div className="absolute inset-0 -z-10">
              {w.photo ? (
                <img
                  src={w.photo}
                  alt=""
                  aria-hidden="true"
                  className={`h-full w-full object-cover ${w.objectPos} duotone-gold opacity-20`}
                  loading="lazy"
                />
              ) : (
                <PlaceholderPanel label={w.placeholderLabel!} className="opacity-60" />
              )}
              <div className="absolute inset-0 bg-[#151515]/60" />
            </div>

            <div className="flex items-start justify-between">
              <span className="font-display text-[8vw] font-black leading-none text-[#d4af37]/30 md:text-[4vw]">
                {w.num}
              </span>
              <img src={w.icon} alt="" aria-hidden="true" className="h-10 w-10 object-contain opacity-80" loading="lazy" />
            </div>

            <div>
              <MicroLabel className="mb-2 block text-[#d4af37]">{w.sub}</MicroLabel>
              <h3 className="font-display text-3xl font-black uppercase tracking-tight md:text-4xl">
                {w.title}
              </h3>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#ececea]/70">{w.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
