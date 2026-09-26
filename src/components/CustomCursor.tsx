import { useEffect, useRef, useState } from 'react'
import { useIsTouchDevice } from '../lib/useIsMobile'
import { useReducedMotion } from '../lib/useReducedMotion'

/**
 * Small circular custom cursor, desktop-only (disabled on touch devices).
 * Expands and shows a label when hovering an element with [data-cursor="view"|"open"].
 */
export default function CustomCursor() {
  const isTouch = useIsTouchDevice()
  const reducedMotion = useReducedMotion()
  const dotRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState<string | null>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (isTouch) return
    document.body.classList.add('u2c-custom-cursor')

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let tx = x
    let ty = y

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      const target = e.target as HTMLElement
      const cursorEl = target.closest('[data-cursor]') as HTMLElement | null
      if (cursorEl) {
        setActive(true)
        setLabel(cursorEl.getAttribute('data-cursor-label') || cursorEl.getAttribute('data-cursor'))
      } else {
        setActive(false)
        setLabel(null)
      }
    }

    let raf = 0
    const tick = () => {
      x += (tx - x) * 0.2
      y += (ty - y) * 0.2
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(tick)

    return () => {
      document.body.classList.remove('u2c-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [isTouch])

  if (isTouch || reducedMotion) return null

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[999] flex items-center justify-center rounded-full border border-[#d4af37] transition-[width,height,background-color] duration-200 ease-out"
      style={{
        width: active ? 64 : 12,
        height: active ? 64 : 12,
        background: active ? 'rgba(212,175,55,0.15)' : 'rgba(212,175,55,0.9)',
      }}
    >
      {label && (
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#e7e7e3]">
          {label}
        </span>
      )}
    </div>
  )
}
