import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AboutChandraraprabh() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="pt-40 pb-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <pattern id="p" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="1" fill="white"/>
            </pattern>
            <rect width="100" height="100" fill="url(#p)"/>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center fade-up">
            <i className="fas fa-lightbulb text-white text-4xl"></i>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4 fade-up">Chandraraprabh</h1>
          <p className="text-indigo-300 text-xl tracking-widest uppercase mb-4 fade-up">Lighting • Innovation • Design</p>
          <p className="text-white/80 text-lg max-w-2xl mx-auto fade-up">Illuminating spaces with celestial brilliance. We bring light design to life with cutting-edge technology and artistic vision.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <p className="text-indigo-600 font-medium tracking-widest uppercase mb-3">Our Story</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">Light as Art, Design as Expression</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">Chandraraprabh (meaning "Moonlight" in Sanskrit) is our specialized division dedicated to creating breathtaking lighting solutions. We believe that light is not just illumination – it's an art form that transforms spaces into magical experiences.</p>
              <p className="text-gray-600 mb-8 leading-relaxed">From residential lighting design to large-scale commercial installations, our team of lighting experts combines technical expertise with artistic vision to create environments that inspire and captivate. Every project is a journey into the art of light.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-indigo-50 rounded-2xl p-6">
                  <i className="fas fa-lightbulb text-indigo-600 text-2xl mb-3"></i>
                  <h4 className="font-bold mb-1">Smart Lighting</h4>
                  <p className="text-gray-500 text-sm">Intelligent control systems</p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <i className="fas fa-cube text-purple-600 text-2xl mb-3"></i>
                  <h4 className="font-bold mb-1">Custom Fixtures</h4>
                  <p className="text-gray-500 text-sm">Bespoke lighting designs</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 fade-up">
              <img src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80" className="rounded-2xl w-full h-64 object-cover mt-8"/>
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" className="rounded-2xl w-full h-64 object-cover"/>
              <img src="https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&q=80" className="rounded-2xl w-full h-64 object-cover"/>
              <img src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80" className="rounded-2xl w-full h-64 object-cover mt-8"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 fade-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: 'fa-gem', title: 'Elegance', desc: 'Sophisticated lighting solutions that elevate any space' },
              { icon: 'fa-lightbulb', title: 'Innovation', desc: 'Cutting-edge technology and creative approaches' },
              { icon: 'fa-star', title: 'Excellence', desc: 'Uncompromising quality in every installation' },
              { icon: 'fa-heart', title: 'Passion', desc: 'Dedicated to perfecting the art of light' }
            ].map((value, index) => (
              <div key={index} className="text-center fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                  <i className={`fas ${value.icon} text-indigo-300 text-2xl`}></i>
                </div>
                <h4 className="font-heading text-xl font-bold mb-2">{value.title}</h4>
                <p className="text-white/60 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-up">
              <p className="text-indigo-600 font-medium tracking-widest uppercase mb-3">Why Choose Us</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">Excellence in Every Ray of Light</h2>
              <div className="space-y-6">
                {[
                  { icon: 'fa-award', title: 'Award Winning', desc: 'Recognized industry leaders in lighting design' },
                  { icon: 'fa-clock', title: 'Timely Delivery', desc: 'Projects completed on schedule, every time' },
                  { icon: 'fa-headset', title: '24/7 Support', desc: 'Round-the-clock technical assistance' },
                  { icon: 'fa-leaf', title: 'Eco-Friendly', desc: 'Energy-efficient solutions for a greener future' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center flex-shrink-0">
                      <i className={`fas ${item.icon} text-white`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-up grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80" className="rounded-2xl w-full h-48 object-cover mt-8"/>
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" className="rounded-2xl w-full h-48 object-cover"/>
              <img src="https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&q=80" className="rounded-2xl w-full h-48 object-cover"/>
              <img src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=600&q=80" className="rounded-2xl w-full h-48 object-cover mt-8"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Illuminate Your World</h2>
          <p className="mb-8 text-white/90">Let Chandraraprabh transform your space with the magic of light.</p>
          <Link to="/chandraraprabh-services" className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition mr-4">Our Services</Link>
          <Link to="/chandraraprabh-projects" className="inline-block border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition">View Projects</Link>
        </div>
      </section>
    </>
  )
}
