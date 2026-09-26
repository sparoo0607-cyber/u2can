interface PlaceholderPanelProps {
  label: string
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * A visually intentional placeholder for a photo we don't have yet.
 * Renders a duotone-ish solid panel with a small baked-in micro-label,
 * so missing imagery reads as designed rather than broken.
 */
export default function PlaceholderPanel({ label, tone = 'dark', className = '' }: PlaceholderPanelProps) {
  const bg =
    tone === 'dark'
      ? 'linear-gradient(135deg, #201b14 0%, #171717 60%, #12100c 100%)'
      : 'linear-gradient(135deg, #d9d2c2 0%, #e7e7e3 60%, #cfc7b4 100%)'
  const text = tone === 'dark' ? 'text-[#d4af37]/70' : 'text-[#a6821c]'
  const border = tone === 'dark' ? 'border-white/10' : 'border-black/10'

  return (
    <div
      className={`relative flex h-full w-full items-end border ${border} ${className}`}
      style={{ backgroundImage: bg }}
    >
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          'repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 1px, transparent 14px)',
      }} />
      <span className={`relative m-3 font-mono text-[9px] uppercase tracking-widest ${text}`}>
        Placeholder — {label}
      </span>
    </div>
  )
}
