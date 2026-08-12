import { useState } from 'react'

type Billing = 'monthly' | 'annual'

const plans = [
  {
    id: 'grind',
    name: 'THE GRIND',
    tag: 'STARTER',
    monthly: 2500,
    annual: 7000,
    color: 'border-[#2a2a2a]',
    accent: false,
    features: [
      'Full gym access (all hours)',
      'Locker room & showers',
      '2 group classes / week',
      'Gym assessment',
      'App access & workout log',
    ],
    missing: ['Personal training', 'Nutrition coaching', 'Recovery suite'],
  },
  {
    id: 'beast',
    name: 'THE BEAST',
    tag: 'MOST POPULAR',
    monthly: 3000,
    annual: 9000,
    color: 'border-[#e5141e]',
    accent: true,
    features: [
      'Full gym access (all hours)',
      'Unlimited group classes',
      '4 PT sessions / month',
      'Custom programming',
      'Nutrition consultation',
      'Recovery suite access',
      'Priority lane during peak',
    ],
    missing: ['Advanced body composition scans'],
  },
  {
    id: 'elite',
    name: 'ELITE',
    tag: 'ALL-IN',
    monthly: 4000,
    annual: 12000,
    color: 'border-[#2a2a2a]',
    accent: false,
    features: [
      'Full gym access (all hours)',
      'Unlimited group classes',
      'Unlimited PT sessions',
      'Custom meal plans',
      'Bi-weekly check-ins',
      'DEXA body composition scans',
      'Recovery suite — unlimited',
      'Guest passes (4/mo)',
      'Merch credit $50/yr',
    ],
    missing: [],
  },
]

export default function Packages() {
  const [billing, setBilling] = useState<Billing>('monthly')

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="relative py-24 border-b border-[#2a2a2a] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e5141e]" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono-label text-xs tracking-widest text-[#e5141e] mb-4">PRICING</p>
          <h1 className="font-display font-black text-[clamp(64px,10vw,140px)] leading-none text-white uppercase">
            PICK YOUR<br /><span className="text-[#e5141e]">WEAPON</span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Billing toggle */}
        <div className="flex items-center gap-4 mb-16">
          <button
            onClick={() => setBilling('monthly')}
            className={`font-mono-label text-xs tracking-widest px-5 py-2.5 border transition-colors ${
              billing === 'monthly'
                ? 'border-[#e5141e] text-[#e5141e] bg-[#e5141e]/10'
                : 'border-[#2a2a2a] text-[#888888] hover:text-white hover:border-white'
            }`}
          >
            MONTHLY
          </button>
          <button
            onClick={() => setBilling('annual')}
            className={`font-mono-label text-xs tracking-widest px-5 py-2.5 border transition-colors ${
              billing === 'annual'
                ? 'border-[#e5141e] text-[#e5141e] bg-[#e5141e]/10'
                : 'border-[#2a2a2a] text-[#888888] hover:text-white hover:border-white'
            }`}
          >
            ANNUAL
            <span className="ml-2 text-[#e5141e]">SAVE 25%</span>
          </button>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#2a2a2a]">
          {plans.map((p) => (
            <div
              key={p.id}
              className={`relative bg-[#0a0a0a] flex flex-col border-t-2 ${p.color}`}
            >
              {p.accent && (
                <div className="absolute -top-px left-0 right-0 h-0.5 bg-[#e5141e]" />
              )}
              <div className="p-8 flex-1">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <div className="font-mono-label text-[10px] tracking-widest text-[#888888] mb-1">{p.tag}</div>
                    <h2 className="font-display font-black text-2xl text-white">{p.name}</h2>
                  </div>
                  {p.accent && (
                    <div className="bg-[#e5141e] font-mono-label text-[9px] text-white tracking-widest px-2 py-1">
                      POPULAR
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className="font-display font-black text-[64px] leading-none text-white">
                      ₹{billing === 'monthly' ? p.monthly : p.annual}
                    </span>
                    <span className="font-mono-label text-xs text-[#888888] mb-3">/mo</span>
                  </div>
                  {billing === 'annual' && (
                    <div className="font-mono-label text-[10px] text-[#e5141e] tracking-widest mt-1">
                      BILLED ₹{p.annual * 12}/YR · SAVE ₹{(p.monthly - p.annual) * 12}
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-white">
                      <div className="mt-1.5 w-1 h-1 bg-[#e5141e] shrink-0" />
                      {f}
                    </li>
                  ))}
                  {p.missing.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#444444] line-through">
                      <div className="mt-1.5 w-1 h-1 bg-[#333] shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0">
                <button
                  className={`w-full font-display font-bold tracking-widest py-4 transition-colors ${
                    p.accent
                      ? 'bg-[#e5141e] text-white hover:bg-[#c0111a]'
                      : 'border border-white/30 text-white hover:border-white hover:bg-white/5'
                  }`}
                >
                  GET STARTED
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 border border-[#2a2a2a] p-6 flex gap-4">
          <div className="w-1 bg-[#e5141e] shrink-0" />
          <div>
            <div className="font-mono-label text-xs tracking-widest text-[#e5141e] mb-2">NO LOCK-IN GUARANTEE</div>
            <p className="text-[#888888] text-sm leading-relaxed">
              All plans are cancel-anytime with 30 days notice. We earn your loyalty through results, not contracts. First-time members get a free 7-day trial — no card required.
            </p>
          </div>
        </div>

        {/* Add-ons */}
        <div className="mt-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-8 h-0.5 bg-[#e5141e]" />
            <span className="font-mono-label text-xs tracking-widest text-[#e5141e]">ADD-ONS</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-[#2a2a2a]">
            {[
              { name: 'Extra PT Session', price: '₹1500', unit: '/session' },
              { name: 'Contest Prep Package', price: '₹1000', unit: '/12 weeks' },
              { name: 'DEXA Scan', price: '₹3000', unit: '/scan' },
              { name: 'Nutrition Plan', price: '₹250', unit: '/month' },
            ].map((a) => (
              <div key={a.name} className="bg-[#0a0a0a] p-6">
                <div className="font-display font-bold text-xl text-white mb-1">{a.name}</div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-black text-3xl text-[#e5141e]">{a.price}</span>
                  <span className="font-mono-label text-[10px] text-[#888888]">{a.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
