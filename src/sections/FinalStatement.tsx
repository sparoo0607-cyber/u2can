import Reveal from '../components/Reveal'

export default function FinalStatement() {
  return (
    <section className="relative flex h-[70vh] min-h-[420px] flex-col items-center justify-center bg-[#111111] px-5 text-center text-[#ececea]">
      <Reveal>
        <h2 className="font-display text-[16vw] font-black uppercase leading-none tracking-tighter sm:text-[12vw] md:text-[7vw]">
          U Too Can.
        </h2>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-[#d4af37]">
          Enhance. Explore. Execute.
        </p>
      </Reveal>
    </section>
  )
}
