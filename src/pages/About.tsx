const team = [
  {
    name: 'MARCUS HAYES',
    role: 'Head Coach / Founder',
    creds: 'CSCS · USAPL Elite · 14 yrs',
    img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&h=500&fit=crop&auto=format',
    bio: 'Former competitive powerlifter with 3 national titles. Built IronRex from a single squat rack in 2012.',
  },
  {
    name: 'SIERRA VOLKOV',
    role: 'Strength & Conditioning',
    creds: 'NSCA-CSCS · CF-L2 · 9 yrs',
    img: 'https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?w=400&h=500&fit=crop&auto=format',
    bio: 'Specialist in athletic performance. Works with collegiate athletes and weekend warriors alike.',
  },
  {
    name: 'DEON WHITFIELD',
    role: 'Bodybuilding Coach',
    creds: 'NASM-CPT · IFBB Pro · 11 yrs',
    img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=500&fit=crop&auto=format',
    bio: 'IFBB Pro competitor with 6 show wins. Specializes in peak week, posing, and hypertrophy programming.',
  },
  {
    name: 'ANYA REEVES',
    role: 'Nutrition & Metabolic Coach',
    creds: 'RD · CISSN · 7 yrs',
    img: 'https://images.unsplash.com/photo-1591258370814-01609b341790?w=400&h=500&fit=crop&auto=format',
    bio: 'Registered dietitian focused on body recomposition, contest prep, and sustainable performance nutrition.',
  },
]

const milestones = [
  { year: '2012', event: 'Founded with 1,200 sq ft in Bushwick' },
  { year: '2015', event: 'Expanded to 6,000 sq ft — added group classes' },
  { year: '2018', event: 'Opened Performance Recovery Wing' },
  { year: '2021', event: 'Moved to flagship 12,000 sq ft Brooklyn location' },
  { year: '2024', event: 'Launched online coaching platform' },
  { year: '2026', event: '2,400 members and counting' },
]

export default function About() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="relative py-24 border-b border-[#2a2a2a] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e5141e]" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono-label text-xs tracking-widest text-[#e5141e] mb-4">OUR STORY</p>
          <h1 className="font-display font-black text-[clamp(64px,10vw,140px)] leading-none text-white uppercase">
            ABOUT<br /><span className="text-[#e5141e]">UNITY FITNESS</span>
          </h1>
        </div>
      </div>

      {/* Mission */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-display font-black text-[clamp(40px,5vw,72px)] text-white uppercase leading-none mb-8">
              BUILT FOR<br />BEASTS,<br />RUN BY<br /><span className="text-[#e5141e]">BEASTS.</span>
            </h2>
            <p className="text-[#aaaaaa] leading-relaxed mb-6">
              IronRex started with a 500lb barbell set, a rented garage, and a coach who&apos;d just missed qualifying for nationals by 5 pounds. That loss became the fuel. Everything here was built to make sure you don&apos;t have those moments.
            </p>
            <p className="text-[#aaaaaa] leading-relaxed">
              We don&apos;t do trendy. We don&apos;t do gimmicks. We do the work — the same fundamental movements that have built champions for 100 years — with better science, better coaching, and a community that pushes each other.
            </p>
          </div>

          {/* Timeline */}
          <div>
            <div className="font-mono-label text-xs tracking-widest text-[#e5141e] mb-8">TIMELINE</div>
            <div className="relative">
              <div className="absolute left-12 top-0 bottom-0 w-px bg-[#2a2a2a]" />
              <div className="space-y-8">
                {milestones.map((m) => (
                  <div key={m.year} className="flex gap-6 items-start">
                    <div className="w-24 shrink-0 font-mono-label text-sm text-[#e5141e] pt-0.5">{m.year}</div>
                    <div className="relative">
                      <div className="absolute -left-[25px] top-2 w-2 h-2 bg-[#e5141e]" />
                      <p className="text-[#aaaaaa] text-sm leading-relaxed pl-1">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-[#2a2a2a] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-8 h-0.5 bg-[#e5141e]" />
            <span className="font-mono-label text-xs tracking-widest text-[#e5141e]">THE COACHES</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#2a2a2a]">
            {team.map((t) => (
              <div key={t.name} className="bg-[#0a0a0a] group overflow-hidden">
                <div className="relative overflow-hidden h-72 bg-[#111]">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent" />
                </div>
                <div className="p-6">
                  <div className="font-mono-label text-[10px] text-[#e5141e] tracking-widest mb-1">{t.creds}</div>
                  <h3 className="font-display font-black text-xl text-white mb-1">{t.name}</h3>
                  <div className="font-mono-label text-[10px] text-[#888888] tracking-wider mb-3">{t.role}</div>
                  <p className="text-[#888888] text-xs leading-relaxed">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#111111] border-t border-b border-[#2a2a2a] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-8 h-0.5 bg-[#e5141e]" />
            <span className="font-mono-label text-xs tracking-widest text-[#e5141e]">WHAT WE STAND FOR</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2a2a2a]">
            {[
              { v: 'DISCIPLINE', d: 'Progress is a system, not motivation. We build habits that outlast willpower.' },
              { v: 'COMMUNITY', d: 'No elitism. Every rep helps the person next to you get stronger.' },
              { v: 'EXCELLENCE', d: 'We obsess over form, program design, and coaching quality. Always.' },
            ].map((x) => (
              <div key={x.v} className="bg-[#111111] p-10">
                <div className="w-12 h-1 bg-[#e5141e] mb-6" />
                <h3 className="font-display font-black text-3xl text-white mb-4">{x.v}</h3>
                <p className="text-[#888888] leading-relaxed text-sm">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
