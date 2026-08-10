export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#2a2a2a] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#e5141e] flex items-center justify-center">
                <span className="font-display font-black text-white text-sm">IR</span>
              </div>
              <span className="font-display font-black text-xl tracking-widest text-white uppercase">
                Unity<span className="text-[#e5141e]"> Fitness</span>
              </span>
            </div>
            <p className="text-[#888888] text-sm leading-relaxed">
              No excuses. No shortcuts. Just iron, sweat, and relentless progress.
            </p>
            <div className="flex gap-3 mt-6">
              {['IG', 'FB', 'YT'].map((s) => (
                <div
                  key={s}
                  className="w-8 h-8 border border-[#2a2a2a] flex items-center justify-center font-mono-label text-[10px] text-[#888888] hover:border-[#e5141e] hover:text-[#e5141e] cursor-pointer transition-colors"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-mono-label text-xs tracking-widest text-[#e5141e] mb-5">NAVIGATE</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'Packages', 'Gallery', 'Testimonials'].map((item) => (
                <li key={item}>
                  <span className="text-[#888888] text-sm hover:text-white cursor-pointer transition-colors">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-mono-label text-xs tracking-widest text-[#e5141e] mb-5">HOURS</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between gap-6">
                <span className="text-[#888888]">Mon – Fri</span>
                <span className="text-white font-mono-label text-xs">05:00 – 23:00</span>
              </li>
              <li className="flex justify-between gap-6">
                <span className="text-[#888888]">Saturday</span>
                <span className="text-white font-mono-label text-xs">06:00 – 22:00</span>
              </li>
              <li className="flex justify-between gap-6">
                <span className="text-[#888888]">Sunday</span>
                <span className="text-white font-mono-label text-xs">07:00 – 20:00</span>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-mono-label text-xs text-green-400">WE ARE OPEN NOW</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono-label text-xs tracking-widest text-[#e5141e] mb-5">CONTACT</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <div className="font-mono-label text-[10px] text-[#888888] mb-1 tracking-widest">ADDRESS</div>
                <div className="text-white">Chorghe Ground, Virar(East)</div>
              </li>
              <li>
                <div className="font-mono-label text-[10px] text-[#888888] mb-1 tracking-widest">PHONE</div>
                <div className="text-white">+91 123 456 7890</div>
              </li>
              <li>
                <div className="font-mono-label text-[10px] text-[#888888] mb-1 tracking-widest">EMAIL</div>
                <div className="text-white">info@unityfitness.com</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono-label text-xs text-[#555555]">
            © 2026 UNITY FITNESS. ALL RIGHTS RESERVED.
          </p>
          <p className="font-mono-label text-xs text-[#555555]">
            BUILT FOR THOSE WHO NEVER QUIT.
          </p>
        </div>
      </div>
    </footer>
  )
}
