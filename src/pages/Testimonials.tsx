import { useState } from 'react'

const testimonials = [
  {
    name: 'TYLER MORRISON',
    role: 'Member since 2019',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&auto=format&face',
    quote: "I've trained at 11 gyms across 3 cities. IronRex isn't a gym — it's a temple. The coaching is the best I've ever had. Added 60lbs to my deadlift in 6 months.",
    result: '+60LB DEADLIFT',
    rating: 5,
  },
  {
    name: 'JASMINE OKAFOR',
    role: 'Member since 2021',
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&auto=format',
    quote: "Started here after 2 years of spinning my wheels. Deon built me a real program, Anya sorted my nutrition, and 14 weeks later I stepped on stage for the first time. This place changed my life.",
    result: 'FIRST COMPETITION',
    rating: 5,
  },
  {
    name: 'MARCUS CHEN',
    role: 'Member since 2020',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&auto=format',
    quote: "The group classes alone are worth the membership. The community here holds you accountable in a way no app ever will. Down 35lbs and the strongest I've been since college.",
    result: '-35LB BODY FAT',
    rating: 5,
  },
  {
    name: 'PRIYA VENKAT',
    role: 'Member since 2022',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&auto=format',
    quote: "As a woman who was intimidated by weights, the coaches made me feel completely welcome and capable from day one. Now I squat more than most men in my office. No big deal.",
    result: '2× BODYWEIGHT SQUAT',
    rating: 5,
  },
  {
    name: 'DARIUS WELLS',
    role: 'Member since 2018',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&auto=format',
    quote: "6 years in. I've seen trainers come and go at every gym I've tried. Marcus built a staff that stays because they actually care. That culture trickles down to every member.",
    result: '6 YEAR MEMBER',
    rating: 5,
  },
  {
    name: 'ELENA ROMERO',
    role: 'Member since 2023',
    img: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&auto=format',
    quote: "The recovery suite alone is worth $89/month. Cold plunge every morning has changed how I sleep, recover, and perform. And the coaches actually program for recovery — rare.",
    result: 'PR EVERY MONTH',
    rating: 5,
  },
]

const transformations = [
  { name: 'Jake R.', months: 16, before: '218lb / 28% BF', after: '194lb / 11% BF' },
  { name: 'Michelle S.', months: 8, before: '162lb / 34% BF', after: '138lb / 18% BF' },
  { name: 'Carlos T.', months: 12, before: '155lb skinny-fat', after: '178lb lean' },
]

export default function Testimonials() {
  const [featured, setFeatured] = useState(0)

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="relative py-24 border-b border-[#2a2a2a] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e5141e]" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono-label text-xs tracking-widest text-[#e5141e] mb-4">REAL RESULTS</p>
          <h1 className="font-display font-black text-[clamp(64px,10vw,140px)] leading-none text-white uppercase">
            THEY<br /><span className="text-[#e5141e]">PROVED IT.</span>
          </h1>
        </div>
      </div>

      {/* Featured testimonial */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2a2a2a]">
          <div className="bg-[#0a0a0a] p-12 flex flex-col justify-between">
            <div>
              <div className="font-display font-black text-[80px] text-[#e5141e] leading-none mb-6">"</div>
              <p className="text-white text-xl leading-relaxed font-display font-semibold mb-8">
                {testimonials[featured].quote}
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonials[featured].img}
                  alt={testimonials[featured].name}
                  className="w-14 h-14 object-cover object-top bg-[#111]"
                />
                <div>
                  <div className="font-display font-black text-white">{testimonials[featured].name}</div>
                  <div className="font-mono-label text-[10px] text-[#888888] tracking-widest">{testimonials[featured].role}</div>
                </div>
                <div className="ml-auto">
                  <div className="font-mono-label text-xs text-[#e5141e] tracking-widest border border-[#e5141e] px-3 py-1">
                    {testimonials[featured].result}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Selector */}
          <div className="bg-[#0a0a0a] divide-y divide-[#1a1a1a]">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setFeatured(i)}
                className={`w-full flex items-center gap-4 p-6 text-left transition-colors ${
                  featured === i ? 'bg-[#111]' : 'hover:bg-[#0f0f0f]'
                }`}
              >
                <div className={`w-0.5 h-10 shrink-0 ${featured === i ? 'bg-[#e5141e]' : 'bg-[#2a2a2a]'}`} />
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 object-cover object-top bg-[#111] shrink-0"
                />
                <div className="min-w-0">
                  <div className="font-display font-bold text-white text-sm truncate">{t.name}</div>
                  <div className="font-mono-label text-[10px] text-[#888888] tracking-widest">{t.role}</div>
                </div>
                <div className="ml-auto shrink-0">
                  <div className="font-mono-label text-[9px] text-[#e5141e] tracking-widest">{t.result}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Transformations */}
      <section className="border-t border-[#2a2a2a] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-8 h-0.5 bg-[#e5141e]" />
            <span className="font-mono-label text-xs tracking-widest text-[#e5141e]">BODY TRANSFORMATIONS</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2a2a2a]">
            {transformations.map((t) => (
              <div key={t.name} className="bg-[#0a0a0a] p-8">
                <div className="font-display font-black text-white text-2xl mb-1">{t.name}</div>
                <div className="font-mono-label text-xs text-[#e5141e] tracking-widest mb-6">
                  {t.months} MONTHS
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-mono-label text-[10px] text-[#888888] tracking-widest mb-2">BEFORE</div>
                    <div className="text-white text-sm">{t.before}</div>
                  </div>
                  <div>
                    <div className="font-mono-label text-[10px] text-[#e5141e] tracking-widest mb-2">AFTER</div>
                    <div className="text-white text-sm">{t.after}</div>
                  </div>
                </div>
                <div className="mt-6 h-1 bg-[#1a1a1a]">
                  <div className="h-1 bg-[#e5141e]" style={{ width: `${(t.months / 16) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rating bar */}
      <section className="bg-[#e5141e] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-baseline gap-4">
            <span className="font-display font-black text-[80px] text-white leading-none">4.9</span>
            <div>
              <div className="flex gap-1 mb-1">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="text-white text-xl">★</span>
                ))}
              </div>
              <div className="font-mono-label text-xs text-white/70 tracking-widest">AVERAGE RATING</div>
            </div>
          </div>
          <div className="h-12 w-px bg-white/20 hidden md:block" />
          <div className="text-center md:text-left">
            <div className="font-display font-black text-4xl text-white">1,847</div>
            <div className="font-mono-label text-xs text-white/70 tracking-widest">REVIEWS ON GOOGLE</div>
          </div>
          <div className="h-12 w-px bg-white/20 hidden md:block" />
          <div className="text-center md:text-left">
            <div className="font-display font-black text-4xl text-white">96%</div>
            <div className="font-mono-label text-xs text-white/70 tracking-widest">WOULD RECOMMEND</div>
          </div>
        </div>
      </section>
    </div>
  )
}
