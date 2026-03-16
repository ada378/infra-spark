import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ChandraraprabhServices() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const services = [
    { icon: 'fa-lightbulb', title: 'Smart Lighting', desc: 'Intelligent lighting control systems with automation and energy efficiency. Transform your space with one-touch ambiance control.', features: ['Automated Controls', 'Energy Saving', 'App Integration', 'Voice Control'] },
    { icon: 'fa-cube', title: 'Custom Fixtures', desc: 'Bespoke lighting fixtures designed and crafted to match your unique vision. Every piece is a work of art.', features: ['Custom Designs', 'Premium Materials', 'Artisan Crafted', 'Unique Pieces'] },
    { icon: 'fa-building', title: 'Commercial Lighting', desc: 'Large-scale lighting solutions for offices, hotels, retail spaces, and public buildings.', features: ['LED Retrofits', 'Emergency Lighting', 'Architectural Lights', 'High Bay Lights'] },
    { icon: 'fa-home', title: 'Residential Lighting', desc: 'Create the perfect ambiance in your home with our curated collection of residential lighting solutions.', features: ['Ambient Lighting', 'Task Lighting', 'Accent Lights', 'Outdoor Lights'] },
    { icon: 'fa-tree', title: 'Landscape Lighting', desc: 'Transform your outdoor spaces with professional landscape lighting design and installation.', features: ['Garden Lights', 'Pathway Lights', 'Security Lights', 'Pool Lighting'] },
    { icon: 'fa-industry', title: 'Industrial Lighting', desc: 'High-performance lighting solutions for warehouses, factories, and industrial facilities.', features: ['High Bay LED', 'Flood Lights', 'Explosion Proof', 'Motion Sensors'] }
  ]

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
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 fade-up">Services & Solutions</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto fade-up">Comprehensive lighting solutions for every need. From concept to installation, we bring your vision to life.</p>
        </div>
      </section>

      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 fade-up">
            <p className="text-indigo-600 font-medium tracking-widest uppercase mb-3">What We Offer</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card bg-white rounded-3xl p-8 fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${index % 2 === 0 ? 'bg-gradient-to-br from-indigo-500 to-indigo-600' : 'bg-gradient-to-br from-purple-500 to-purple-600'}`}>
                  <i className={`fas ${service.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 mb-6">{service.desc}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i}><i className="fas fa-check text-indigo-500 mr-2"></i>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 fade-up">
            <p className="text-indigo-600 font-medium tracking-widest uppercase mb-3">Collections</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">Lighting Collections</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Modern Minimalist', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80' },
              { name: 'Crystal Elegance', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
              { name: 'Industrial Chic', image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&q=80' },
              { name: 'Classic Vintage', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80' }
            ].map((collection, index) => (
              <div key={index} className="collection-card rounded-3xl overflow-hidden relative fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={collection.image} alt={collection.name} className="w-full h-64 object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h4 className="text-white font-heading text-lg font-bold">{collection.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <p className="text-indigo-600 font-medium tracking-widest uppercase mb-3">Process</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">Our Approach</h2>
              <div className="space-y-6">
                {[
                  { step: '01', title: 'Consultation', desc: 'We discuss your vision, requirements, and budget to understand your needs.' },
                  { step: '02', title: 'Design', desc: 'Our experts create detailed lighting designs and 3D visualizations.' },
                  { step: '03', title: 'Installation', desc: 'Professional installation by certified technicians with precision.' },
                  { step: '04', title: 'Support', desc: 'Ongoing maintenance and support to ensure lasting brilliance.' }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-up">
              <img src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=800&q=80" alt="Lighting Design" className="rounded-3xl w-full h-96 object-cover"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
          <p className="mb-8 text-white/90">Contact us today for a free consultation and quote.</p>
          <Link to="/#contact" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
