import { useEffect } from 'react'

export default function OngoingProjects() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const projects = [
    { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', name: 'Azure Summit Towers', location: 'Downtown Metro', date: 'Dec 2024', progress: 65, status: 'In Progress', badge: 'bg-accent' },
    { image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', name: 'The Grand Horizon', location: 'Waterfront District', date: 'Mar 2025', progress: 40, status: 'Phase 2', badge: 'bg-gold' },
    { image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', name: 'Emerald Gardens', location: 'Green Valley', date: 'Jun 2025', progress: 15, status: 'Foundation', badge: 'bg-primary' },
    { image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80', name: 'Platinum Business Park', location: 'Tech Corridor', date: 'Feb 2025', progress: 80, status: 'In Progress', badge: 'bg-accent' },
    { image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', name: 'Serenity Heights', location: 'Hillside Avenue', date: 'Jan 2025', progress: 90, status: 'Interior', badge: 'bg-gold' },
    { image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80', name: 'Nova Tech City', location: 'Innovation Hub', date: '2026', progress: 5, status: 'Planning', badge: 'bg-primary' }
  ]

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gold font-medium tracking-widest uppercase mb-4 fade-up">Under Construction</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 fade-up">Ongoing Projects</h1>
          <p className="text-white/80 fade-up">Building tomorrow's landmarks today</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden card-hover fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-64">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover"/>
                  <div className={`absolute top-4 right-4 ${project.badge} text-white px-4 py-1 rounded-full text-sm font-medium`}>{project.status}</div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                    <div className="flex justify-between text-white text-sm">
                      <span><i className="fas fa-calendar mr-2"></i>{project.date}</span>
                      <span><i className="fas fa-percentage mr-2"></i>{project.progress}% Complete</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-500 text-sm mb-4"><i className="fas fa-map-marker-alt mr-2 text-accent"></i>{project.location}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div className="bg-gradient-to-r from-accent to-gold h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                  </div>
                  <p className="text-gray-600 text-sm">{project.name === 'Azure Summit Towers' ? 'Luxury residential towers with 40 floors, rooftop pool, and smart home features.' : project.name === 'The Grand Horizon' ? 'Premium mixed-use development with residential, retail, and office spaces.' : project.name === 'Emerald Gardens' ? 'Eco-friendly gated community with villas, parks, and sustainable amenities.' : project.name === 'Platinum Business Park' ? 'Grade A office spaces with modern amenities and IT infrastructure.' : project.name === 'Serenity Heights' ? 'Premium apartments with panoramic city views and luxury amenities.' : 'Smart city project with integrated technology and sustainable living.'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
