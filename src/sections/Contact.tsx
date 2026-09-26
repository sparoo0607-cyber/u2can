import { Mail } from 'lucide-react'
import Reveal from '../components/Reveal'
import MicroLabel from '../components/MicroLabel'

/** Simple inline Instagram glyph (lucide-react no longer ships a trademarked icon). */
function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

const FIELD_CLASS =
  'w-full border-0 border-b border-white/20 bg-transparent px-0 py-3 text-sm text-[#ececea] placeholder:text-[#ececea]/35 focus:border-[#d4af37] focus:outline-none'

export default function Contact() {
  // Note: this form has no backend wired up — it is a styled template only.
  // Real contact happens via the email/Instagram links below.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <section id="contact" className="relative bg-[#151515] px-5 py-28 text-[#ececea] md:px-10 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:gap-20">
        <div>
          <Reveal>
            <MicroLabel className="mb-3 block">CONTACT</MicroLabel>
            <h2 className="font-display text-[11vw] font-black uppercase leading-[0.9] tracking-tighter sm:text-[7vw] md:text-[4.5vw]">
              Let&apos;s make something.
            </h2>
          </Reveal>

          <Reveal delay={0.15} className="mt-10 space-y-4">
            <a
              href="mailto:utoocan2027@gmail.com"
              className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-[#ececea]/80 hover:text-[#d4af37]"
            >
              <Mail className="h-4 w-4" /> utoocan2027@gmail.com
            </a>
            <a
              href="https://instagram.com/utoo_can"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-[#ececea]/80 hover:text-[#d4af37]"
            >
              <InstagramGlyph /> @utoo_can
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-8" aria-label="Contact U2C (template form, not yet connected)">
            <div>
              <label htmlFor="name" className="micro-label mb-1 block">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" placeholder="Your full name" className={FIELD_CLASS} />
            </div>
            <div>
              <label htmlFor="email" className="micro-label mb-1 block">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className={FIELD_CLASS} />
            </div>
            <div>
              <label htmlFor="yearDept" className="micro-label mb-1 block">Year / Department</label>
              <input id="yearDept" name="yearDept" type="text" placeholder="e.g. 2nd Year, Mechanical" className={FIELD_CLASS} />
            </div>
            <div>
              <label htmlFor="message" className="micro-label mb-1 block">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Tell us what you're interested in" className={FIELD_CLASS} />
            </div>
            <button type="submit" className="btn-rect text-[#ececea]">
              Send Message →
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
