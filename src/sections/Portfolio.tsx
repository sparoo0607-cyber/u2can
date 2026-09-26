import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import MicroLabel from '../components/MicroLabel'
import PlaceholderPanel from '../components/PlaceholderPanel'

interface Card {
  key: string
  label: string
  x: number // % offset from center
  y: number // % offset from center
  z: number // depth, px (negative = further back)
  rotateY: number
  rotateZ: number
  width: number // px, desktop
  photo?: string
  objectPosition?: string
  treatment?: string
}

const CARDS: Card[] = [
  // far edges — barely-visible receding strips, suggest the gallery continues off-screen
  {
    key: 'edge-l',
    label: 'U2C / ARCHIVE',
    x: -46,
    y: 2,
    z: -420,
    rotateY: 62,
    rotateZ: 0,
    width: 160,
    photo: '/assets/real/group-photo-students.jpeg',
    objectPosition: '0% 30%',
    treatment: 'grayscale contrast-75 opacity-40',
  },
  {
    key: 'edge-r',
    label: 'U2C / ARCHIVE',
    x: 46,
    y: -4,
    z: -420,
    rotateY: -62,
    rotateZ: 0,
    width: 160,
    photo: '/assets/real/creative-space-mural-room.jpeg',
    objectPosition: '100% 40%',
    treatment: 'grayscale contrast-75 opacity-40',
  },

  // diamond of four corner cards around the center — deliberately kept OFF the
  // vertical center line so the top ("WORK") and bottom ("WORDS") lines of the
  // headline stay fully clear, matching the reference composition. Only the
  // middle lines are meant to be obscured, by the center image.
  {
    key: 'top-left',
    label: 'INAUGURATION',
    x: -25,
    y: -24,
    z: -120,
    rotateY: 24,
    rotateZ: -2,
    width: 230,
    photo: '/assets/real/inauguration-ribbon-cutting.png',
    objectPosition: '0% 50%',
    treatment: 'grayscale',
  },
  {
    key: 'top-right',
    label: 'MECHANICAL ENGINEERING',
    x: 27,
    y: -21,
    z: -100,
    rotateY: -22,
    rotateZ: 2,
    width: 225,
    photo: '/assets/real/anits-campus.jpeg',
    objectPosition: '50% 40%',
    treatment: 'grayscale sepia-[.3]',
  },
  {
    key: 'bottom-left',
    label: 'CREATIVE SPACE',
    x: -23,
    y: 25,
    z: -50,
    rotateY: 17,
    rotateZ: -2,
    width: 235,
    photo: '/assets/real/creative-space-mural-room.jpeg',
    objectPosition: '20% 30%',
  },
  {
    key: 'bottom-right',
    label: 'FACULTY GATHERING',
    x: 24,
    y: 27,
    z: -40,
    rotateY: -16,
    rotateZ: 2,
    width: 230,
    photo: '/assets/real/inauguration-ribbon-cutting.png',
    objectPosition: '100% 55%',
    treatment: 'grayscale',
  },

  // small accents tucked in close behind the center image (not out at the
  // margins) so they read as depth rather than covering the clear top/bottom text
  {
    key: 'accent-1',
    label: 'SPORTS WING',
    x: -3,
    y: -9,
    z: -160,
    rotateY: -3,
    rotateZ: 3,
    width: 140,
    // PLACEHOLDER: no verified sports-wing action photo supplied yet
  },
  {
    key: 'accent-2',
    label: 'LITERATURE WING',
    x: 4,
    y: 13,
    z: -150,
    rotateY: 4,
    rotateZ: -3,
    width: 140,
    // PLACEHOLDER: no verified literature-wing photo supplied yet
  },

  // center, sharp and foremost
  {
    key: 'center',
    label: 'STUDENT CULTURE / EST. 2016',
    x: 0,
    y: 4,
    z: 60,
    rotateY: 0,
    rotateZ: 0,
    width: 300,
    photo: '/assets/real/group-photo-students.jpeg',
    objectPosition: '50% 25%',
  },
]

export default function Portfolio() {
  const stageRef = useRef<HTMLDivElement>(null)

  // Free-drag rotation: unbounded on both axes, so the whole fanned gallery can be
  // spun a full 360° (and beyond) horizontally or vertically, not just nudged a few
  // degrees. rotateY tracks horizontal drag, rotateX tracks vertical drag (inverted,
  // so dragging up tilts the top of the stage toward the viewer).
  const rotY = useMotionValue(0)
  const rotX = useMotionValue(0)
  const stageRotateY = useSpring(rotY, { stiffness: 90, damping: 20, mass: 0.7 })
  const stageRotateX = useSpring(rotX, { stiffness: 90, damping: 20, mass: 0.7 })

  const dragging = useRef(false)
  const last = useRef({ x: 0, y: 0 })
  const DRAG_SENSITIVITY = 0.5 // degrees per pixel dragged

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    dragging.current = true
    last.current = { x: e.clientX, y: e.clientY }
    stageRef.current?.setPointerCapture(e.pointerId)
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return
    const dx = e.clientX - last.current.x
    const dy = e.clientY - last.current.y
    last.current = { x: e.clientX, y: e.clientY }
    rotY.set(rotY.get() + dx * DRAG_SENSITIVITY)
    rotX.set(rotX.get() - dy * DRAG_SENSITIVITY)
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    dragging.current = false
    stageRef.current?.releasePointerCapture(e.pointerId)
  }

  return (
    <section className="relative overflow-hidden bg-[#151515] px-5 py-28 text-[#ececea] md:px-10 md:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
        <div className="grid h-full grid-cols-12">
          {Array.from({ length: 13 }).map((_, i) => (
            <div key={i} className="border-l border-white first:border-l-0" />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl">
        <MicroLabel className="mb-4 block text-[#d4af37]">SELECTED / MOMENTS</MicroLabel>

        <div
          ref={stageRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className="relative mx-auto hidden h-[720px] max-w-5xl cursor-grab touch-none select-none active:cursor-grabbing md:block"
          style={{ perspective: '1600px' }}
        >
          <MicroLabel className="pointer-events-none absolute left-1/2 top-2 z-20 -translate-x-1/2 text-white/40">
            DRAG TO ROTATE
          </MicroLabel>
          {/* centered stacked headline, sits BEHIND the near/center cards and in front of
              the far ones (z-[5]) — same as the reference: it reads clearly on the dark
              background at top ("Work") and bottom ("Louder."), where the diamond of
              corner cards deliberately leaves it uncovered, and is allowed to disappear
              behind the center photo in the middle, which is the intended effect. */}
          <div className="pointer-events-none absolute inset-0 z-[5] flex flex-col items-center justify-center gap-0 text-center">
            <span className="font-display text-[6.5vw] font-black uppercase leading-[0.85] tracking-tighter text-[#ececea] lg:text-[74px]">
              Work
            </span>
            <span className="font-display text-[6.5vw] font-black uppercase leading-[0.85] tracking-tighter text-[#ececea] lg:text-[74px]">
              That
            </span>
            <span className="font-display text-[6.5vw] font-black uppercase leading-[0.85] tracking-tighter text-[#ececea] lg:text-[74px]">
              Speaks
            </span>
            <span className="font-display text-[6.5vw] font-black uppercase leading-[0.85] tracking-tighter text-[#ececea] lg:text-[74px]">
              Louder.
            </span>
          </div>

          <motion.div
            className="absolute inset-0"
            style={{
              transformStyle: 'preserve-3d',
              rotateY: stageRotateY,
              rotateX: stageRotateX,
            }}
          >
            {CARDS.map((card, i) => (
              // Static 3D placement lives on a plain (non-motion) element: Framer Motion takes
              // full ownership of `transform` on any element where it animates a transform-ish
              // prop (scale, etc), which would silently clobber a hand-written translate3d/rotateY
              // string. Keeping position here and the animated reveal on the nested motion.div
              // below keeps the two from fighting over the same CSS property.
              <div
                key={card.key}
                className="absolute"
                style={{
                  // left/top percentages are relative to the container (correct for spreading
                  // cards across the stage); translate3d() percentages would instead resolve
                  // against the card's OWN small width/height, which is what collapsed every
                  // card into a tight cluster near center before this was split out.
                  left: `calc(50% + ${card.x}%)`,
                  top: `calc(50% + ${card.y}%)`,
                  width: card.width,
                  aspectRatio: '4 / 5',
                  transform: `translate(-50%, -50%) translateZ(${card.z}px) rotateY(${card.rotateY}deg) rotateZ(${card.rotateZ}deg)`,
                  transformStyle: 'preserve-3d',
                  zIndex: 100 + card.z,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.9, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ scale: 1.06 }}
                  className="relative h-full w-full overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] will-change-transform"
                >
                  {card.photo ? (
                    <img
                      src={card.photo}
                      alt={card.label}
                      loading="lazy"
                      className={`h-full w-full object-cover ${card.treatment ?? ''}`}
                      style={{ objectPosition: card.objectPosition }}
                    />
                  ) : (
                    <PlaceholderPanel label={card.label.toLowerCase()} tone="dark" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                  <MicroLabel className="absolute bottom-2 left-2 text-[9px] text-white/90">
                    {card.label}
                  </MicroLabel>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* mobile: horizontal snap strip, no 3D perspective */}
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:hidden">
          {CARDS.filter((c) => c.key !== 'edge-l' && c.key !== 'edge-r').map((card) => (
            <div
              key={card.key}
              className="relative aspect-[4/5] w-[68%] flex-shrink-0 snap-start overflow-hidden"
            >
              {card.photo ? (
                <img
                  src={card.photo}
                  alt={card.label}
                  loading="lazy"
                  className={`h-full w-full object-cover ${card.treatment ?? ''}`}
                  style={{ objectPosition: card.objectPosition }}
                />
              ) : (
                <PlaceholderPanel label={card.label.toLowerCase()} tone="dark" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
              <MicroLabel className="absolute bottom-2 left-2 text-[9px] text-white/90">
                {card.label}
              </MicroLabel>
            </div>
          ))}
        </div>

        <h2 className="mt-16 max-w-3xl font-display text-[8vw] font-black uppercase leading-[0.9] tracking-tighter sm:text-[6vw] md:hidden">
          Work that speaks louder.
        </h2>
      </div>
    </section>
  )
}
