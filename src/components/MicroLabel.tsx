interface MicroLabelProps {
  children: React.ReactNode
  className?: string
}

/** Small uppercase monospace metadata label, e.g. "U2C / 001", "EST. 2016". */
export default function MicroLabel({ children, className = '' }: MicroLabelProps) {
  return (
    <span className={`micro-label font-mono ${className}`}>
      {children}
    </span>
  )
}
