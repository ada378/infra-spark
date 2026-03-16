import { useEffect } from 'react'

export default function CompletedProjects() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const projects = [
    { image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', name: 'The Royal Palaces', location: 'Premium Estates, Beverly Hills', year: '2023', desc: 'A collection of 25 ultra-luxury villas with private pools, smart home systems, and breathtaking views.', features: ['6 Beds', '7 Baths', '8,500 sqft'] },
    { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', name: 'Metropolitan Tower', location: 'Financial District, NYC', year: '2022', desc: 'A 55-story mixed-use tower featuring luxury residences, premium office spaces, and retail galleries.', features: ['55 Floors', '200 Units', 'LEED Gold'] },
    { image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', name: 'Harbor View Residences', location: 'Marina Bay, San Francisco', year: '2023', desc: 'Waterfront luxury apartments with private terraces and world-class amenities including spa and marina.', features: ['3-4 Beds', 'Pool', 'Marina'] },
    { image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80', name: 'Tech Plaza Office Complex', location: 'Silicon Valley, CA', year: '2021', desc: 'State-of-the-art office campus for Fortune 500 companies with innovation centers and collaborative spaces.', features: ['4 Buildings', '5,000 Capacity', '2,000 Parking'] }
  ]

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gold font-medium tracking-widest uppercase mb-4 fade-up">Delivered Excellence</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 fade-up">Completed Projects</h1>
          <p className="text-white/80 fade-up">Landmarks that define skylines</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden card-hover fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-80">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover"/>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">Completed {project.year}</div>
                </div>
                <div className="p-8">
                  <h3 className="font-heading text-2xl font-bold mb-3">{project.name}</h3>
                  <p className="text-gray-500 mb-4"><i className="fas fa-map-marker-alt mr-2 text-accent"></i>{project.location}</p>
                  <p className="text-gray-600 mb-6">{project.desc}</p>
                  <div className="flex gap-4 text-sm">
                    {project.features.map((feature, i) => (
                      <span key={i} className="bg-offwhite px-4 py-2 rounded-full">{feature}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
