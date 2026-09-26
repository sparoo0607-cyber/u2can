import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenis: Lenis | null = null
let rafId: number | null = null

/**
 * Initializes Lenis smooth scroll and wires it into GSAP's ScrollTrigger + ticker
 * so scroll-driven animations stay in sync. Returns a cleanup function.
 * No-ops (returns native scroll) when the user prefers reduced motion.
 */
export function initSmoothScroll(): () => void {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    ScrollTrigger.refresh()
    return () => {}
  }

  lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    touchMultiplier: 1.5,
  })

  lenis.on('scroll', ScrollTrigger.update)

  const raf = (time: number) => {
    lenis?.raf(time * 1000)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)

  gsap.ticker.add(() => {})
  ScrollTrigger.refresh()

  return () => {
    if (rafId) cancelAnimationFrame(rafId)
    lenis?.destroy()
    lenis = null
  }
}

export function getLenis(): Lenis | null {
  return lenis
}
