const services = [
  {
    num: '01',
    name: 'POWERLIFTING & STRENGTH',
    desc: 'Olympic platforms, power racks, and deadlift stations with competition-grade equipment. Programming built around the Big 3.',
    features: ['Competition barbells & plates', 'Monolift squat racks', 'Chalk allowed', 'Wraps & belt welcome'],
    img: 'https://images.unsplash.com/photo-1521805103424-d8f8430e8933?w=600&h=400&fit=crop&auto=format',
  },
  {
    num: '02',
    name: 'BODYBUILDING & HYPERTROPHY',
    desc: 'Full machine circuit, cable systems, and isolation equipment. Everything you need for symmetry and mass.',
    features: ['Hammer Strength machines', 'Cable crossovers', 'Dedicated mirror zones', 'Posing practice area'],
    img: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop&auto=format',
  },
  {
    num: '03',
    name: 'HIIT & METABOLIC TRAINING',
    desc: 'Interval programming designed to shred fat while preserving hard-earned muscle. High intensity, maximum output.',
    features: ['Assault bikes', 'Battle ropes', 'Sled push/pull track', 'Box jumps & plyos'],
    img: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=600&h=400&fit=crop&auto=format',
  },
  {
    num: '04',
    name: 'PERSONAL TRAINING',
    desc: 'Dedicated 1:1 sessions with certified coaches. Personalized programming, nutrition guidance, and accountability.',
    features: ['Certified S&C coaches', 'Custom programming', 'Monthly assessments', 'Nutrition plans'],
    img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=400&fit=crop&auto=format',
  },
  {
    num: '05',
    name: 'GROUP CLASSES',
    desc: 'Structured team training sessions that combine strength, conditioning, and camaraderie. 20 classes weekly.',
    features: ['Max 12 per class', 'All levels welcome', 'Functional Gym', 'Barbell Club Saturday'],
    img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop&auto=format',
  },
  {
    num: '06',
    name: 'RECOVERY & MOBILITY',
    desc: 'Foam rolling stations, stretching zones, and a steam room. Recovery is training — treat it that way.',
    features: ['Infrared sauna', 'Cold plunge tub', 'Mobility coaching', 'Foam rolling library'],
    img: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?w=600&h=400&fit=crop&auto=format',
  },
]

export default function Services() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="relative py-24 overflow-hidden border-b border-[#2a2a2a]">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e5141e]" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono-label text-xs tracking-widest text-[#e5141e] mb-4">WHAT WE DO</p>
          <h1 className="font-display font-black text-[clamp(64px,10vw,140px)] leading-none text-white uppercase">
            OUR<br /><span className="text-[#e5141e]">SERVICES</span>
          </h1>
        </div>
        {/* Background texture numbers */}
        {/*<div className="absolute right-8 top-8 font-display font-black text-[200px] text-[#111] leading-none select-none pointer-events-none">
          6
        </div>*/}
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-px bg-[#2a2a2a]">
          {services.map((s, i) => (
            <div key={s.num} className="bg-[#0a0a0a] group">
              <div className={`grid grid-cols-1 md:grid-cols-2 ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className="relative overflow-hidden h-64 md:h-auto bg-[#111]">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#e5141e]/10 group-hover:opacity-0 transition-opacity" />
                </div>
                <div className={`p-10 flex flex-col justify-center ${i % 2 === 1 ? 'md:col-start-1' : ''}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-mono-label text-xs text-[#e5141e] tracking-widest">{s.num}</span>
                    <div className="flex-1 h-px bg-[#2a2a2a]" />
                  </div>
                  <h2 className="font-display font-black text-3xl md:text-4xl text-white uppercase leading-tight mb-4">
                    {s.name}
                  </h2>
                  <p className="text-[#888888] leading-relaxed mb-6">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-[#aaaaaa]">
                        <div className="w-1 h-1 bg-[#e5141e] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
