import { useState } from 'react'
import { Plus } from 'lucide-react'
import Reveal from '../components/Reveal'
import MicroLabel from '../components/MicroLabel'

const FAQS = [
  {
    q: 'What is U2C?',
    a: 'U TOO CAN (U2C) is a student club of the Department of Mechanical Engineering, ANITS, established in 2016. It organizes technical and non-technical events, cultural programs, sports activities, art, photography, videography, and more, giving students a platform to explore, express, and excel.',
  },
  {
    q: 'Who can join?',
    a: 'U2C is a student-driven club within the Department of Mechanical Engineering at ANITS, open to students who want to get involved across its six wings.',
  },
  {
    q: 'What are the six wings?',
    a: 'Literature (Writers Hub), Media/Photography (Lit-Cite), Sports (Sport Club), Innovation Cell (Innovate), Cultural Club, and Creative Pods — each focused on a different craft, from writing and media to sport, innovation, culture, and creative expression.',
  },
  {
    q: 'Do I need experience?',
    a: 'No specific experience is required — the wings are built as a platform to explore, express, and excel, so students at any stage can get involved and grow their skills.',
  },
  {
    q: 'How can I participate in events?',
    a: 'U2C runs technical and non-technical events, cultural programs, sports activities, and creative sessions throughout the year. Reach out via email or Instagram to learn about current and upcoming activities.',
  },
  {
    q: 'How can I join a wing?',
    a: 'Get in touch through the contact details below — email or Instagram — to find out how to get involved with a specific wing.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative bg-[#e7e7e3] px-5 py-28 text-[#111111] md:px-10 md:py-36">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <MicroLabel className="mb-3 block text-[#a6821c]">FAQ</MicroLabel>
          <h2 className="font-display text-[9vw] font-black uppercase leading-[0.9] tracking-tighter sm:text-[6vw] md:text-[3.6vw]">
            Common questions.
          </h2>
        </Reveal>

        <div className="mt-12 border-t border-black/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={item.q} className="border-b border-black/10">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-lg font-bold uppercase tracking-tight md:text-xl">
                    {item.q}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-[#a6821c] transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`grid overflow-hidden transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl text-sm leading-relaxed text-[#111111]/70">{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
