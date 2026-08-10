import { useState } from 'react'

type Filter = 'all' | 'strength' | 'cardio' | 'people' | 'facility'

const photos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=600&h=800&fit=crop&auto=format', cat: 'strength', label: 'DEADLIFT SESSION', span: 'row-span-2' },
  { id: 2, src: 'https://images.unsplash.com/photo-1521805103424-d8f8430e8933?w=800&h=400&fit=crop&auto=format', cat: 'facility', label: 'THE PLATFORM', span: '' },
  { id: 3, src: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=400&fit=crop&auto=format', cat: 'facility', label: 'IRON ARSENAL', span: '' },
  { id: 4, src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=800&fit=crop&auto=format', cat: 'people', label: 'THE WORK', span: 'row-span-2' },
  { id: 5, src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=500&fit=crop&auto=format', cat: 'facility', label: 'MAIN FLOOR', span: '' },
  { id: 6, src: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=400&fit=crop&auto=format', cat: 'strength', label: 'DUMBBELL WORK', span: '' },
  { id: 7, src: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?w=800&h=500&fit=crop&auto=format', cat: 'people', label: 'TEAM LIFT', span: '' },
  { id: 8, src: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=600&h=400&fit=crop&auto=format', cat: 'cardio', label: 'CONDITIONING', span: '' },
  { id: 9, src: 'https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?w=600&h=800&fit=crop&auto=format', cat: 'people', label: 'GAME FACE', span: 'row-span-2' },
  { id: 10, src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=500&fit=crop&auto=format', cat: 'cardio', label: 'GROUP TRAINING', span: '' },
  { id: 11, src: 'https://images.unsplash.com/photo-1637430308606-86576d8fef3c?w=600&h=400&fit=crop&auto=format', cat: 'facility', label: 'MACHINE ZONE', span: '' },
  { id: 12, src: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?w=600&h=400&fit=crop&auto=format', cat: 'facility', label: 'FREE WEIGHTS', span: '' },
]

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: 'ALL' },
  { key: 'strength', label: 'STRENGTH' },
  { key: 'cardio', label: 'CARDIO' },
  { key: 'people', label: 'MEMBERS' },
  { key: 'facility', label: 'FACILITY' },
]

export default function Gallery() {
  const [active, setActive] = useState<Filter>('all')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const visible = active === 'all' ? photos : photos.filter((p) => p.cat === active)
  const lbPhoto = photos.find((p) => p.id === lightbox)

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="relative py-24 border-b border-[#2a2a2a] overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e5141e]" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono-label text-xs tracking-widest text-[#e5141e] mb-4">THE FACILITY</p>
          <h1 className="font-display font-black text-[clamp(64px,10vw,140px)] leading-none text-white uppercase">
            GALLERY
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`font-mono-label text-xs tracking-widest px-5 py-2.5 border transition-colors ${
                active === f.key
                  ? 'border-[#e5141e] text-[#e5141e] bg-[#e5141e]/10'
                  : 'border-[#2a2a2a] text-[#888888] hover:text-white hover:border-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Masonry-ish grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-px space-y-px">
          {visible.map((photo) => (
            <div
              key={photo.id}
              className="break-inside-avoid mb-px relative group cursor-pointer overflow-hidden bg-[#111]"
              onClick={() => setLightbox(photo.id)}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/60 transition-colors duration-300 flex items-end">
                <div className="translate-y-full group-hover:translate-y-0 transition-transform duration-300 w-full p-4">
                  <div className="font-mono-label text-xs tracking-widest text-[#e5141e]">{photo.cat.toUpperCase()}</div>
                  <div className="font-display font-bold text-lg text-white">{photo.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && lbPhoto && (
        <div
          className="fixed inset-0 z-[100] bg-[#0a0a0a]/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 font-mono-label text-xs tracking-widest text-[#888888] hover:text-white border border-[#2a2a2a] hover:border-white px-4 py-2 transition-colors"
            onClick={() => setLightbox(null)}
          >
            CLOSE ×
          </button>
          <img
            src={lbPhoto.src.replace('w=600', 'w=1200').replace('w=800', 'w=1200')}
            alt={lbPhoto.label}
            className="max-w-4xl max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <div className="font-mono-label text-xs text-[#e5141e] tracking-widest">{lbPhoto.cat.toUpperCase()}</div>
            <div className="font-display font-bold text-xl text-white">{lbPhoto.label}</div>
          </div>
        </div>
      )}
    </div>
  )
}
