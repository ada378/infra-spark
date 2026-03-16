import { useEffect } from 'react'

export default function Collections() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const services = [
    { icon: 'fa-couch', title: 'Interior Design', desc: 'Complete interior design solutions from concept to execution. We transform spaces into personalized sanctuaries.', features: ['Space Planning', 'Color Consultation', 'Furniture Selection', 'Lighting Design'], color: 'from-gold to-yellow-400' },
    { icon: 'fa-palette', title: 'Art Curation', desc: 'Curated art collections from renowned artists worldwide. We help you find the perfect pieces to complement your space.', features: ['Original Artworks', 'Limited Editions', 'Sculptures', 'Custom Commissions'], color: 'from-accent to-pink-600' },
    { icon: 'fa-drafting-compass', title: 'Architecture', desc: 'Architectural design that combines aesthetics with functionality. From concept to completion.', features: ['Residential Design', 'Commercial Spaces', 'Renovation', '3D Visualization'], color: 'from-primary to-secondary' },
    { icon: 'fa-gem', title: 'Bespoke Furniture', desc: 'Custom-made furniture crafted by master artisans. Each piece is unique and tailored to your specifications.', features: ['Custom Designs', 'Premium Materials', 'Handcrafted', 'Luxury Fabrics'], color: 'from-purple-600 to-purple-800' },
    { icon: 'fa-leaf', title: 'Landscape Design', desc: 'Transform outdoor spaces into breathtaking gardens. From terraces to large estates.', features: ['Garden Design', 'Outdoor Living', 'Plant Selection', 'Water Features'], color: 'from-teal-500 to-teal-700' },
    { icon: 'fa-hotel', title: 'Hospitality Design', desc: 'Luxury hospitality projects including hotels, resorts, and private clubs.', features: ['Hotel Interiors', 'Resort Design', 'Private Clubs', 'Spa Design'], color: 'from-red-500 to-red-700' }
  ]

  const collections = [
    { name: 'Modern Minimalist', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80' },
    { name: 'Contemporary Art', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80' },
    { name: 'Classic Elegance', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80' },
    { name: 'Bohemian Chic', image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80' }
  ]

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gold tracking-widest uppercase mb-4 fade-up">QalaGriha</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 fade-up">Collections & Services</h1>
          <p className="text-white/80 fade-up">Bespoke design solutions for discerning clients</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card bg-white rounded-3xl p-8 fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <i className={`fas ${service.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="font-heading text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500 mb-6">{service.desc}</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i}><i className="fas fa-check text-gold mr-2"></i>{feature}</li>
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
            <p className="text-gold tracking-widest uppercase mb-3">Featured</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Our Collections</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {collections.map((collection, index) => (
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
    </>
  )
}
