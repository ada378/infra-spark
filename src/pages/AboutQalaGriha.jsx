import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AboutQalaGriha() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-secondary to-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <pattern id="p" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="white"/>
            </pattern>
            <rect width="100" height="100" fill="url(#p)"/>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-gold to-yellow-400 flex items-center justify-center fade-up">
            <i className="fas fa-palette text-white text-4xl"></i>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 fade-up">QalaGriha</h1>
          <p className="text-gold text-xl tracking-widest uppercase mb-4 fade-up">Art • Architecture • Boutique</p>
          <p className="text-white/80 text-lg max-w-2xl mx-auto fade-up">Where art meets architecture in perfect harmony. We create timeless spaces that tell your unique story.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <p className="text-gold font-medium tracking-widest uppercase mb-3">Our Story</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">The Art of Living Beautifully</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">QalaGriha (meaning "Art Home" in Sanskrit) was born from a passion to create spaces that transcend mere functionality. We believe that every space should be a canvas, every home a masterpiece.</p>
              <p className="text-gray-600 mb-8 leading-relaxed">Our team of artisans, designers, and architects work in perfect harmony to deliver bespoke interiors, curated art collections, and architectural designs that reflect the unique personality of each client.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-offwhite rounded-2xl p-6">
                  <i className="fas fa-gem text-gold text-2xl mb-3"></i>
                  <h4 className="font-bold mb-1">Bespoke Design</h4>
                  <p className="text-gray-500 text-sm">Tailored to your vision</p>
                </div>
                <div className="bg-offwhite rounded-2xl p-6">
                  <i className="fas fa-paint-brush text-gold text-2xl mb-3"></i>
                  <h4 className="font-bold mb-1">Art Curation</h4>
                  <p className="text-gray-500 text-sm">Curated collections</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 fade-up">
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80" className="rounded-2xl w-full h-64 object-cover mt-8"/>
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80" className="rounded-2xl w-full h-64 object-cover"/>
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80" className="rounded-2xl w-full h-64 object-cover"/>
              <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80" className="rounded-2xl w-full h-64 object-cover mt-8"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'fa-heart', title: 'Passion', desc: 'Every project is a labor of love' },
              { icon: 'fa-star', title: 'Excellence', desc: 'Uncompromising quality in every detail' },
              { icon: 'fa-lightbulb', title: 'Innovation', desc: 'Pushing boundaries of design' },
              { icon: 'fa-users', title: 'Client Focus', desc: 'Your vision, our expertise' }
            ].map((value, index) => (
              <div key={index} className="text-center fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <i className={`fas ${value.icon} text-gold text-2xl`}></i>
                </div>
                <h4 className="font-heading text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-white/60 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gold text-white text-center">
        <div className="max-w-4xl mx-auto px-4 fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Transform Your Space</h2>
          <p className="mb-8 text-white/90">Let QalaGriha create a masterpiece that reflects your unique style.</p>
          <Link to="/collections" className="inline-block bg-white text-gold px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition">Explore Collections</Link>
        </div>
      </section>
    </>
  )
}
