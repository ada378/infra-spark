import { useEffect, useState } from 'react'

export default function ChandraraprabhGallery() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(false)
  const [lightboxImg, setLightboxImg] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const images = [
    { category: 'residential', src: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80', title: 'Modern Villa' },
    { category: 'commercial', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', title: 'Office Building' },
    { category: 'landscape', src: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&q=80', title: 'Garden Lighting' },
    { category: 'residential', src: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80', title: 'Living Room' },
    { category: 'commercial', src: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80', title: 'Hotel Lobby' },
    { category: 'landscape', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', title: 'Pool Area' },
    { category: 'residential', src: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&q=80', title: 'Bedroom' },
    { category: 'commercial', src: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80', title: 'Retail Store' },
    { category: 'landscape', src: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80', title: 'Pathway Lights' },
    { category: 'residential', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', title: 'Kitchen' },
    { category: 'commercial', src: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&q=80', title: 'Conference Room' },
    { category: 'landscape', src: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80', title: 'Patio' }
  ]

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter)

  return (
    <>
      <section className="pt-40 pb-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <pattern id="p" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="white"/>
            </pattern>
            <rect width="100" height="100" fill="url(#p)"/>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <p className="text-indigo-300 tracking-widest uppercase mb-4 fade-up">Chandraraprabh</p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 fade-up">Gallery</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto fade-up">A visual journey through our finest lighting installations and projects.</p>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {['all', 'residential', 'commercial', 'landscape'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full transition ${filter === type ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600'}`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((img, index) => (
              <div key={index} className="gallery-item rounded-2xl overflow-hidden fade-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-64 object-cover cursor-pointer"
                  onClick={() => { setLightboxImg(img.src); setLightbox(true); }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div className={`fixed inset-0 bg-black/95 z-50 items-center justify-center p-8 ${lightbox ? 'flex' : 'hidden'}`}>
        <button onClick={() => setLightbox(false)} className="absolute top-6 right-6 text-white text-3xl hover:text-indigo-400">
          <i className="fas fa-times"></i>
        </button>
        <img src={lightboxImg} alt="" className="max-w-full max-h-full rounded-lg"/>
      </div>
    </>
  )
}
