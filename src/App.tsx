import { useState } from 'react'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Packages from './pages/Packages'
import Gallery from './pages/Gallery'
import Testimonials from './pages/Testimonials'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

type Page = 'home' | 'services' | 'about' | 'packages' | 'gallery' | 'testimonials'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  const pageMap: Record<Page, JSX.Element> = {
    home: <Home navigate={setPage} />,
    services: <Services />,
    about: <About />,
    packages: <Packages />,
    gallery: <Gallery />,
    testimonials: <Testimonials />,
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f5f5f5]">
      <Navbar current={page} navigate={setPage} />
      <main>{pageMap[page]}</main>
      <Footer />
    </div>
  )
}
