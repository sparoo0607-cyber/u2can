import Reveal from '../components/Reveal'
import MicroLabel from '../components/MicroLabel'

export default function ReadyToCreate() {
  return (
    <section className="relative flex flex-col md:h-[80vh] md:min-h-[560px] md:flex-row">
      <div className="relative h-72 w-full overflow-hidden md:h-auto md:w-1/2">
        <img
          src="/assets/real/group-photo-students.jpeg"
          alt="U2C students together in matching club event t-shirts"
          className="h-full w-full object-cover grayscale contrast-125"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#151515]/30" />
      </div>

      <div className="flex w-full flex-col justify-center bg-[#e7e7e3] px-5 py-16 text-[#111111] md:w-1/2 md:px-14">
        <Reveal>
          <MicroLabel className="mb-4 block text-[#a6821c]">JOIN U2C</MicroLabel>
          <h2 className="font-display text-[11vw] font-black uppercase leading-[0.9] tracking-tighter sm:text-[7vw] md:text-[4.2vw]">
            Ready to create?
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#111111]/65">
            Reach out over email or Instagram to find out how to get involved with a wing
            or an upcoming U2C event.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:utoocan2027@gmail.com" className="btn-rect text-[#111111]">
              Join U2C →
            </a>
            <a
              href="https://instagram.com/utoo_can"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-rect text-[#111111]"
            >
              @utoo_can
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
