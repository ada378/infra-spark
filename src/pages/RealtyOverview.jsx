import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function RealtyOverview() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    fadeElements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold font-medium tracking-widest uppercase mb-4 fade-up">Real Estate Division</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 fade-up">Realty Overview</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto fade-up">Building excellence since 2009. We transform visions into iconic landmarks.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">Excellence in Every Detail</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">At InfraSpark Real Estate, we believe that a home is more than just four walls – it's a foundation for memories, dreams, and generations to come. Since our inception, we've been committed to delivering exceptional properties that blend architectural brilliance with functional design.</p>
              <p className="text-gray-600 mb-8 leading-relaxed">Our portfolio spans luxury residential villas, premium apartments, commercial complexes, and mixed-use developments. Each project reflects our unwavering commitment to quality, sustainability, and innovation.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-offwhite rounded-2xl p-6">
                  <i className="fas fa-award text-accent text-2xl mb-3"></i>
                  <h4 className="font-bold text-primary mb-1">Award Winning</h4>
                  <p className="text-gray-500 text-sm">Industry recognition for excellence</p>
                </div>
                <div className="bg-offwhite rounded-2xl p-6">
                  <i className="fas fa-leaf text-gold text-2xl mb-3"></i>
                  <h4 className="font-bold text-primary mb-1">Sustainable</h4>
                  <p className="text-gray-500 text-sm">Eco-friendly development practices</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 fade-up">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" className="rounded-2xl w-full h-56 object-cover mt-8"/>
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" className="rounded-2xl w-full h-56 object-cover"/>
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80" className="rounded-2xl w-full h-56 object-cover"/>
              <img src="https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&q=80" className="rounded-2xl w-full h-56 object-cover mt-8"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-up">
            <p className="text-accent font-medium tracking-widest uppercase mb-3">What We Offer</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'fa-home', title: 'Residential Development', desc: 'Luxury villas, apartments, and townhouses designed for modern living.' },
              { icon: 'fa-building', title: 'Commercial Projects', desc: 'Office spaces, retail complexes, and mixed-use developments.' },
              { icon: 'fa-hand-holding-usd', title: 'Investment Advisory', desc: 'Expert guidance for property investments with high returns.' }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 card-hover fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${index === 0 ? 'bg-gradient-to-br from-accent to-pink-600' : index === 1 ? 'bg-gradient-to-br from-gold to-yellow-500' : 'bg-gradient-to-br from-primary to-secondary'}`}>
                  <i className={`fas ${service.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-white/70 mb-8">Explore our curated collection of premium properties.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/property-listings" className="btn-primary px-8 py-4 rounded-full text-white font-semibold">View Properties</Link>
            <Link to="/investment-opportunities" className="border-2 border-white/30 px-8 py-4 rounded-full text-white font-semibold hover:bg-white hover:text-primary transition">Investment Opportunities</Link>
          </div>
        </div>
      </section>
    </>
  )
}
