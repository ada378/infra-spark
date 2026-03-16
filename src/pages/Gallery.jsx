import { useEffect, useState } from 'react'

export default function Gallery() {
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
    { category: 'interior', src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80' },
    { category: 'art', src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80' },
    { category: 'architecture', src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80' },
    { category: 'furniture', src: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80' },
    { category: 'interior', src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80' },
    { category: 'art', src: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80' },
    { category: 'architecture', src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80' },
    { category: 'furniture', src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
    { category: 'interior', src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80' },
    { category: 'art', src: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=600&q=80' },
    { category: 'architecture', src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80' },
    { category: 'furniture', src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' }
  ]

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter)

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gold tracking-widest uppercase mb-4 fade-up">QalaGriha</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 fade-up">Gallery</h1>
          <p className="text-white/80 fade-up">A visual journey through our finest works</p>
        </div>
      </section>

      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {['all', 'interior', 'art', 'architecture', 'furniture'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-full transition ${filter === type ? 'bg-primary text-white' : 'bg-offwhite text-primary hover:bg-primary hover:text-white'}`}
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
                  alt="" 
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
        <button onClick={() => setLightbox(false)} className="absolute top-6 right-6 text-white text-3xl hover:text-gold">
          <i className="fas fa-times"></i>
        </button>
        <img src={lightboxImg} alt="" className="max-w-full max-h-full rounded-lg"/>
      </div>
    </>
  )
}
