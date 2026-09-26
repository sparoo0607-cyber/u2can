import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import ParticleField from '../components/ParticleField'
import MicroLabel from '../components/MicroLabel'
import { useReducedMotion } from '../lib/useReducedMotion'

const HERO_CLIPS = [
  '/assets/video/hero-1.mp4',
  '/assets/video/hero-2.mp4',
  '/assets/video/hero-3.mp4',
  '/assets/video/hero-4.mp4',
]

export default function Hero() {
  const [clipIndex, setClipIndex] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const reducedMotion = useReducedMotion()

  function handleEnded() {
    setClipIndex((i) => (i + 1) % HERO_CLIPS.length)
  }

  return (
    <section id="top" className="relative flex h-[100svh] min-h-[640px] w-full flex-col overflow-hidden bg-[#111111] text-[#ececea]">
      {/* Background — cycles through four clips back-to-back, one after another, looping
          from the last back to the first. Falls back to a still photo when the visitor
          has requested reduced motion, since autoplaying video ignores that preference
          less obviously than a CSS animation would. */}
      <div className="absolute inset-0">
        {reducedMotion ? (
          <img
            src="/assets/real/group-photo-students.jpeg"
            alt="U2C students gathered together in matching club event t-shirts"
            className="h-full w-full object-cover object-top grayscale contrast-125"
          />
        ) : (
          // Source clips were shot/exported sideways (90°), so the raw frame is rotated
          // back upright here. Rotating a landscape-sized box by 90° turns it portrait,
          // so width/height are pre-swapped to viewport units (100svh × 100vw) and the
          // whole thing is centered — a plain object-cover can't do this rotation itself.
          <video
            key={clipIndex}
            ref={videoRef}
            src={HERO_CLIPS[clipIndex]}
            poster="/assets/real/group-photo-students.jpeg"
            autoPlay
            muted
            playsInline
            preload="auto"
            onEnded={handleEnded}
            className="absolute left-1/2 top-1/2 object-cover grayscale contrast-125"
            style={{
              width: '100svh',
              height: '100vw',
              transform: 'translate(-50%, -50%) rotate(-90deg)',
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
        <div className="absolute inset-0 bg-[#151515] mix-blend-color opacity-40" />
      </div>

      <ParticleField className="opacity-70" />

      {/* 10-year anniversary mark — slow reveal on the right, arrives well after the
          headline so it reads as a quiet flourish rather than competing with the type. */}
      <motion.img
        src="/assets/real/u2c-logo-10years.webp"
        alt="U2C 10-year anniversary emblem"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.82, rotate: -4 }}
        animate={{ opacity: 0.92, scale: 1, rotate: 0 }}
        transition={{ duration: 2.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute right-[4%] top-[13%] z-[6] hidden w-[22vw] max-w-[320px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.65)] sm:block md:right-[6%] md:top-[15%]"
      />

      {/* thin vertical guides */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        <div className="vguide" style={{ left: '8.33%' }} />
        <div className="vguide" style={{ left: '50%' }} />
        <div className="vguide" style={{ left: '91.66%' }} />
      </div>

      <div className="relative z-10 flex flex-1 flex-col justify-between px-5 pt-24 pb-8 md:px-10 md:pt-28">
        <div className="flex items-start justify-between">
          <MicroLabel>U2C / 001</MicroLabel>
          <div className="text-right">
            <MicroLabel className="block">EST. 2016</MicroLabel>
            <MicroLabel className="block">ANITS / MECHANICAL ENGINEERING</MicroLabel>
          </div>
        </div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-display text-[15vw] font-black uppercase leading-[0.86] tracking-tighter sm:text-[13vw] md:text-[9.5vw]"
          >
            <span className="block">Beyond</span>
            <span className="block pl-[8vw] text-[#d4af37] md:pl-[12vw]">The</span>
            <span className="block">Classroom.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 flex flex-col items-start justify-between gap-6 border-t border-white/15 pt-6 md:flex-row md:items-end"
          >
            <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#ececea]/85">
              Enhance. Explore. Execute.
            </p>
            <a href="#legacy" className="btn-rect text-[#ececea]" data-cursor="view" data-cursor-label="Scroll">
              Enter U2C →
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="relative z-10 flex items-center justify-center pb-6"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#ececea]/50">Scroll</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="block h-6 w-px bg-[#d4af37]"
          />
        </div>
      </motion.div>
    </section>
  )
}
