import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#wings', label: 'Wings' },
  { href: '#archive', label: 'Archive' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-4 transition-colors duration-300 md:px-10 ${
        scrolled ? 'bg-[#151515]/85 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <a href="#top" className="flex items-center gap-3" data-cursor="view" data-cursor-label="TOP">
        <img
          src="/assets/real/u2c-logo-10years.webp"
          alt="U2C — U Too Can 10-year anniversary mark"
          className="h-10 w-10 object-contain"
        />
        <span className="font-display text-sm font-bold uppercase tracking-tight text-[#ececea]">
          U2C
        </span>
      </a>

      <nav className="hidden gap-8 font-mono text-[11px] uppercase tracking-widest text-[#ececea]/70 md:flex">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className="transition-colors hover:text-[#d4af37]">
            {l.label}
          </a>
        ))}
      </nav>

      <a href="#contact" className="btn-rect hidden text-[#ececea] md:inline-flex">
        Join U2C →
      </a>

      <a href="#contact" className="font-mono text-[10px] uppercase tracking-widest text-[#d4af37] md:hidden">
        Join
      </a>
    </header>
  )
}
