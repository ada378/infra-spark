import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ChandraraprabhProjects() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const projects = [
    { name: 'Skyline Tower', location: 'New York, NY', type: 'Commercial', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80', desc: 'Complete lighting solution for 50-story commercial tower.' },
    { name: 'Luxe Villa', location: 'Mumbai, India', type: 'Residential', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'Smart home lighting for premium residential property.' },
    { name: 'Tech Hub', location: 'Bangalore, India', type: 'Commercial', image: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&q=80', desc: 'Innovative lighting for IT campus.' },
    { name: 'Royal Palace', location: 'Dubai, UAE', type: 'Residential', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80', desc: 'Luxury lighting for royal residence.' },
    { name: 'Ocean Resort', location: 'Maldives', type: 'Hospitality', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80', desc: 'Beach resort lighting design.' },
    { name: 'City Mall', location: 'Singapore', type: 'Commercial', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', desc: 'Shopping mall illumination.' }
  ]

  const testimonials = [
    { quote: "Chandraraprabh transformed our office with stunning lighting. The smart system saves energy and looks amazing!", name: 'John Smith', role: 'CEO, TechCorp', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { quote: "Our home has never looked better. The team understood exactly what we wanted and delivered beyond expectations.", name: 'Sarah Johnson', role: 'Homeowner', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { quote: "Professional, timely, and exceptional quality. Our hotel guests consistently praise the ambiance.", name: 'Michael Chen', role: 'Hotel Manager', image: 'https://randomuser.me/api/portraits/men/52.jpg' }
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
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 fade-up">Projects & Stories</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto fade-up">Explore our portfolio of successful lighting projects and client testimonials.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 fade-up">
            <p className="text-indigo-600 font-medium tracking-widest uppercase mb-3">Our Work</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-lg fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-56">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover"/>
                  <span className="absolute top-4 left-4 px-3 py-1 bg-indigo-600 text-white text-xs rounded-full">{project.type}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-primary mb-2">{project.name}</h3>
                  <p className="text-gray-500 text-sm mb-2"><i className="fas fa-map-marker-alt mr-2 text-indigo-600"></i>{project.location}</p>
                  <p className="text-gray-600 text-sm">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Stats & Achievements</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '150+', label: 'Happy Clients' },
              { number: '50+', label: 'Awards Won' },
              { number: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index} className="fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-indigo-300 mb-2 font-heading">{stat.number}</div>
                <p className="text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 fade-up">
            <p className="text-indigo-600 font-medium tracking-widest uppercase mb-3">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex text-indigo-500 mb-4">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover"/>
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Start Your Project</h2>
          <p className="mb-8 text-white/90">Let us illuminate your space with brilliance.</p>
          <Link to="/#contact" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
