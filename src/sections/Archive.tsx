import MicroLabel from '../components/MicroLabel'
import PlaceholderPanel from '../components/PlaceholderPanel'
import Reveal from '../components/Reveal'

const ITEMS = [
  {
    label: 'ANITS Campus',
    ratio: 'aspect-[4/3]',
    photo: '/assets/real/anits-campus.jpeg',
  },
  {
    label: 'Inauguration, 2016',
    ratio: 'aspect-[3/4]',
    photo: '/assets/real/inauguration-ribbon-cutting.png',
  },
  {
    label: 'Group, Event Day',
    ratio: 'aspect-square',
    photo: '/assets/real/group-photo-students.jpeg',
  },
  {
    label: 'Clubroom Mural',
    ratio: 'aspect-[4/5]',
    photo: '/assets/real/creative-space-mural-room.jpeg',
  },
  {
    label: 'Sports Day',
    ratio: 'aspect-[3/4]',
    photo: null,
  },
  {
    label: 'Cultural Evening',
    ratio: 'aspect-[4/3]',
    photo: null,
  },
]

export default function Archive() {
  return (
    <section id="archive" className="relative bg-[#151515] py-24 text-[#ececea] md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <Reveal>
          <MicroLabel className="mb-3 block">ARCHIVE</MicroLabel>
          <h2 className="font-display text-[9vw] font-black uppercase leading-[0.9] tracking-tighter sm:text-[6vw] md:text-[4vw]">
            A decade, in frames.
          </h2>
        </Reveal>
      </div>

      <div className="no-scrollbar mt-12 flex gap-4 overflow-x-auto px-5 pb-4 md:mt-16 md:gap-6 md:px-10">
        {ITEMS.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.06} className={`relative shrink-0 w-[68vw] ${item.ratio} sm:w-[42vw] md:w-[26vw] lg:w-[20vw]`}>
            {item.photo ? (
              <img
                src={item.photo}
                alt={item.label}
                className="h-full w-full border border-white/10 object-cover grayscale contrast-125"
                loading="lazy"
              />
            ) : (
              <PlaceholderPanel label={item.label.toLowerCase()} />
            )}
            <MicroLabel className="absolute bottom-2 left-2 bg-[#151515]/70 px-2 py-1">
              {item.label}
            </MicroLabel>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
