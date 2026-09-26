import MicroLabel from './MicroLabel'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#111111] px-5 py-12 md:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src="/assets/real/u2c-logo-10years.webp"
              alt="U2C — U Too Can 10-year anniversary mark"
              className="h-12 w-12 object-contain"
            />
            <span className="font-display text-lg font-black uppercase tracking-tight">U Too Can</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#ececea]/60">
            Department of Mechanical Engineering, ANITS — the first student club of the
            department, founded in 2016 and carried forward by students and faculty ever since.
          </p>
          <MicroLabel className="mt-6 block">EST. 2016 / ANITS / MECHANICAL ENGINEERING</MicroLabel>
        </div>

        <div>
          <MicroLabel className="block text-[#d4af37]">Navigate</MicroLabel>
          <ul className="mt-4 space-y-2 text-sm text-[#ececea]/70">
            <li><a href="#wings" className="hover:text-[#d4af37]">Six Wings</a></li>
            <li><a href="#archive" className="hover:text-[#d4af37]">Archive</a></li>
            <li><a href="#team" className="hover:text-[#d4af37]">Team</a></li>
            <li><a href="#faq" className="hover:text-[#d4af37]">FAQ</a></li>
          </ul>
        </div>

        <div>
          <MicroLabel className="block text-[#d4af37]">Contact</MicroLabel>
          <ul className="mt-4 space-y-2 text-sm text-[#ececea]/70">
            <li>
              <a href="mailto:utoocan2027@gmail.com" className="hover:text-[#d4af37]">
                utoocan2027@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/utoo_can"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d4af37]"
              >
                @utoo_can
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 font-mono text-[10px] uppercase tracking-widest text-[#ececea]/40 md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} U Too Can (U2C) — ANITS</span>
        <span>Enhance. Explore. Execute.</span>
      </div>
    </footer>
  )
}
