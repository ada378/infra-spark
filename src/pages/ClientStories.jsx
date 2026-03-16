import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ClientStories() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const stories = [
    { quote: "InfraSpark transformed our dream home into reality. Their attention to detail and quality is unmatched. We couldn't be happier with our new villa!", name: 'Sarah Johnson', role: 'Homeowner', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { quote: "QalaGriha's interior design team created a masterpiece. Our office space now reflects our brand perfectly and has become a conversation starter with every client.", name: 'Michael Chen', role: 'CEO, TechVentures', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
    { quote: "The investment team at InfraSpark guided us through every step. Our returns have exceeded expectations! Professional and trustworthy.", name: 'Emily Rodriguez', role: 'Investor', image: 'https://randomuser.me/api/portraits/women/68.jpg' },
    { quote: "We wanted a home that blended modern design with Indian heritage. QalaGriha delivered beyond our imagination. Truly exceptional craftsmanship.", name: 'Raj Patel', role: 'Business Owner', image: 'https://randomuser.me/api/portraits/men/52.jpg' },
    { quote: "From the first consultation to final delivery, the team was professional and attentive. Our penthouse looks stunning!", name: 'Amanda Foster', role: 'Interior Designer', image: 'https://randomuser.me/api/portraits/women/33.jpg' },
    { quote: "We invested in two properties through InfraSpark and both have appreciated significantly. Their market knowledge is excellent.", name: 'David Thompson', role: 'Real Estate Investor', image: 'https://randomuser.me/api/portraits/men/75.jpg' }
  ]

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gold tracking-widest uppercase mb-4 fade-up">Testimonials</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 fade-up">Client Stories</h1>
          <p className="text-white/80 fade-up">What our clients say about their experience</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div key={index} className="story-card bg-white rounded-3xl p-8 fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex text-gold mb-4">
                  <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <p className="text-gray-600 mb-6 italic">"{story.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={story.image} alt={story.name} className="w-14 h-14 rounded-full object-cover"/>
                  <div>
                    <h4 className="font-semibold text-primary">{story.name}</h4>
                    <p className="text-gray-400 text-sm">{story.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Story?</h2>
          <p className="text-white/70 mb-8">Join our satisfied clients and let us transform your vision into reality.</p>
          <Link to="/#contact" className="inline-block bg-gradient-to-r from-accent to-gold px-8 py-4 rounded-full font-semibold hover:transform hover:-translate-y-1 transition">Get in Touch</Link>
        </div>
      </section>
    </>
  )
}
