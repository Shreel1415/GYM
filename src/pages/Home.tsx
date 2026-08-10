type Page = 'home' | 'services' | 'about' | 'packages' | 'gallery' | 'testimonials'

interface HomeProps {
  navigate: (p: Page) => void
}

const stats = [
  { value: '2,400+', label: 'Active Members' },
  { value: '18', label: 'Expert Trainers' },
  { value: '12K', label: 'Sq Ft Floor Space' },
  { value: '97%', label: 'Retention Rate' },
]

const features = [
  {
    tag: '01 / STRENGTH',
    title: 'POWERLIFTING\nZONE',
    desc: 'Olympic platforms, power racks, free weights up to 200lbs. Built for those who move serious iron.',
    img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=700&fit=crop&auto=format',
  },
  {
    tag: '02 / CARDIO',
    title: 'PERFORMANCE\nCARDIO',
    desc: 'Assault bikes, curved treadmills, rowers. No handles. No mercy.',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=700&fit=crop&auto=format',
  },
  {
    tag: '03 / COACHING',
    title: 'ELITE\nCOACHING',
    desc: 'One-on-one programming from certified S&C coaches who\'ve trained pros.',
    img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=700&fit=crop&auto=format',
  },
]

export default function Home({ navigate }: HomeProps) {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-[#111111]"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=1800&h=1200&fit=crop&auto=format)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 to-transparent" />

        {/* Red accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e5141e]" />

        <div className="relative max-w-7xl mx-auto px-6 pb-24 w-full">
          <div className="max-w-3xl">
            {/* <p className="font-mono-label text-xs tracking-[0.3em] text-[#e5141e] mb-6">
              EST. 2012 — BROOKLYN, NY
            </p>*/}
            <h1 className="font-display font-black text-[clamp(72px,12vw,160px)] leading-[0.88] tracking-tight text-white uppercase mb-8">
              FORGE<br />
              YOUR<br />
              <span className="text-[#e5141e]">LEGEND</span>
            </h1>
            <p className="text-[#aaaaaa] text-lg max-w-xl mb-10 leading-relaxed">
              Virar&apos;s most hardcore training facility. No mirrors for vanity — only for form.
              Elite coaching, premium iron, zero excuses.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => { navigate('packages'); window.scrollTo(0,0) }}
                className="font-display font-bold text-lg tracking-widest px-8 py-4 bg-[#e5141e] text-white hover:bg-[#c0111a] transition-colors"
              >
                START TODAY
              </button>
              <button
                onClick={() => { navigate('services'); window.scrollTo(0,0) }}
                className="font-display font-bold text-lg tracking-widest px-8 py-4 border border-white/30 text-white hover:border-white hover:bg-white/5 transition-colors"
              >
                OUR SERVICES
              </button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 right-0 left-0">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-[#2a2a2a] ml-auto max-w-2xl">
              {stats.map((s) => (
                <div key={s.label} className="border-r border-b border-[#2a2a2a] px-6 py-5 bg-[#0a0a0a]/80 backdrop-blur-sm">
                  <div className="font-display font-black text-3xl text-[#e5141e]">{s.value}</div>
                  <div className="font-mono-label text-[10px] text-[#888888] tracking-widest mt-1">{s.label.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-0.5 bg-[#e5141e]" />
          <span className="font-mono-label text-xs tracking-widest text-[#e5141e]">WHAT WE OFFER</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2a2a2a]">
          {features.map((f) => (
            <div key={f.tag} className="bg-[#0a0a0a] group overflow-hidden">
              <div className="relative h-72 overflow-hidden bg-[#111]">
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="font-mono-label text-[10px] tracking-widest text-[#e5141e] bg-[#0a0a0a]/80 px-2 py-1">
                    {f.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-black text-3xl text-white leading-tight mb-3 whitespace-pre-line">
                  {f.title}
                </h3>
                <p className="text-[#888888] text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#e5141e] py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-mono-label text-xs tracking-widest text-white/60 mb-2">LIMITED TIME OFFER</p>
            <h2 className="font-display font-black text-[clamp(36px,6vw,72px)] text-white leading-none uppercase">
              FIRST WEEK FREE.<br />NO CONTRACTS.
            </h2>
          </div>
          <button
            onClick={() => { navigate('packages'); window.scrollTo(0,0) }}
            className="shrink-0 font-display font-bold text-xl tracking-widest px-10 py-5 bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] transition-colors"
          >
            CLAIM YOUR TRIAL
          </button>
        </div>
      </section>

      {/* Trainer teaser */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-0.5 bg-[#e5141e]" />
              <span className="font-mono-label text-xs tracking-widest text-[#e5141e]">OUR PHILOSOPHY</span>
            </div>
            <h2 className="font-display font-black text-[clamp(48px,7vw,96px)] leading-none text-white uppercase mb-8">
              PAIN IS<br />
              TEMPO<span className="text-[#e5141e]">RARY.</span>
            </h2>
            <p className="text-[#aaaaaa] leading-relaxed mb-6">
              Every world-class physique started as a decision made in a dark moment. We provide the environment, the coaching, and the community that turns that decision into a daily discipline.
            </p>
            <p className="text-[#aaaaaa] leading-relaxed mb-10">
              Our coaches have competed at national and international level. They&apos;ve been through the grind — so they know exactly how to take you there.
            </p>
            <button
              onClick={() => { navigate('about'); window.scrollTo(0,0) }}
              className="font-display font-bold tracking-widest text-sm px-6 py-3 border border-[#e5141e] text-[#e5141e] hover:bg-[#e5141e] hover:text-white transition-colors"
            >
              MEET THE TEAM →
            </button>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#e5141e]/30" />
            <img
              src="https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=700&h=900&fit=crop&auto=format"
              alt="Elite trainer"
              className="w-full h-[560px] object-cover object-center bg-[#111]"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a0a0a] to-transparent">
              <div className="font-mono-label text-xs text-[#e5141e] tracking-widest">HEAD COACH</div>
              <div className="font-display font-black text-2xl text-white">MARCUS HAYES</div>
              <div className="font-mono-label text-xs text-[#888888]">CSCS · 14 YEARS EXPERIENCE</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
