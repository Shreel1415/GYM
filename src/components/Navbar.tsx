import { useState } from 'react'

type Page = 'home' | 'services' | 'about' | 'packages' | 'gallery' | 'testimonials'

interface NavbarProps {
  current: Page
  navigate: (p: Page) => void
}

const navItems: { label: string; page: Page }[] = [
  { label: 'HOME', page: 'home' },
  { label: 'SERVICES', page: 'services' },
  { label: 'ABOUT', page: 'about' },
  { label: 'PACKAGES', page: 'packages' },
  { label: 'GALLERY', page: 'gallery' },
  { label: 'TESTIMONIALS', page: 'testimonials' },
]

export default function Navbar({ current, navigate }: NavbarProps) {
  const [open, setOpen] = useState(false)

  const handleNav = (page: Page) => {
    navigate(page)
    setOpen(false)
    window.scrollTo(0, 0)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#2a2a2a] bg-[#0a0a0a]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-[#e5141e] flex items-center justify-center">
            <span className="font-display font-black text-white text-sm leading-none">IR</span>
          </div>
          <span className="font-display font-black text-xl tracking-widest text-white uppercase">
            Unity<span className="text-[#e5141e]"> Fitness</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              className={`font-mono-label text-xs tracking-widest transition-colors duration-150 ${
                current === page
                  ? 'text-[#e5141e]'
                  : 'text-[#888888] hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => handleNav('packages')}
            className="font-display font-bold text-sm tracking-widest px-5 py-2 bg-[#e5141e] text-white hover:bg-[#c0111a] transition-colors duration-150"
          >
            JOIN NOW
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#2a2a2a] bg-[#0a0a0a]">
          {navItems.map(({ label, page }) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              className={`w-full text-left px-6 py-4 font-mono-label text-xs tracking-widest border-b border-[#1a1a1a] transition-colors ${
                current === page ? 'text-[#e5141e]' : 'text-[#888888] hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
          <div className="p-6">
            <button
              onClick={() => handleNav('packages')}
              className="w-full font-display font-bold tracking-widest py-3 bg-[#e5141e] text-white"
            >
              JOIN NOW
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
