import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useReducedMotion } from '../lib/useReducedMotion'
import { useIsMobile } from '../lib/useIsMobile'

interface FieldProps {
  count: number
}

/** The actual point cloud, gently drifting with a soft mouse-parallax offset. */
function Field({ count }: FieldProps) {
  const pointsRef = useRef<THREE.Points>(null)
  const { viewport, pointer } = useThree()

  const [positions, colorSeed] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const seeds = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 18
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
      seeds[i] = Math.random()
    }
    return [pos, seeds]
  }, [count])

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3)
    const gold = new THREE.Color('#d4af37')
    const white = new THREE.Color('#f2f2ee')
    for (let i = 0; i < count; i++) {
      const c = colorSeed[i] > 0.86 ? gold : white
      cols[i * 3] = c.r
      cols[i * 3 + 1] = c.g
      cols[i * 3 + 2] = c.b
    }
    return cols
  }, [count, colorSeed])

  useFrame((state) => {
    if (!pointsRef.current) return
    const t = state.clock.getElapsedTime()
    pointsRef.current.rotation.y = t * 0.008
    pointsRef.current.rotation.x = Math.sin(t * 0.03) * 0.03
    // gentle mouse parallax
    const targetX = (pointer.x * viewport.width) / 40
    const targetY = (pointer.y * viewport.height) / 40
    pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.02
    pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.02
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

/**
 * Subtle full-bleed particle background. Disabled entirely under
 * prefers-reduced-motion, reduced density on mobile, and paused via
 * IntersectionObserver when its container scrolls off-screen.
 */
export default function ParticleField({ className = '' }: { className?: string }) {
  const reducedMotion = useReducedMotion()
  const isMobile = useIsMobile()
  const wrapRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.01 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (reducedMotion) return null

  const count = isMobile ? 250 : 700

  return (
    <div
      ref={wrapRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {visible && (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, isMobile ? 1.25 : 1.75]}
          gl={{ antialias: false, alpha: true }}
        >
          <Field count={count} />
        </Canvas>
      )}
    </div>
  )
}
