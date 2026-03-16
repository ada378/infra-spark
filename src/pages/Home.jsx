import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'

const properties = [
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    title: 'Azure Heights Villa',
    location: 'Beverly Hills, California',
    price: '$2,450,000',
    beds: '5 Beds',
    baths: '4 Baths',
    sqft: '4,500 sqft',
    badge: 'Featured',
    badgeColor: 'bg-accent'
  },
  {
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    title: 'Skyline Penthouse',
    location: 'Manhattan, New York',
    price: '$890,000',
    beds: '3 Beds',
    baths: '3 Baths',
    sqft: '2,200 sqft',
    badge: 'New Listing',
    badgeColor: 'bg-gold'
  },
  {
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    title: 'Oceanview Estate',
    location: 'Miami Beach, Florida',
    price: '$1,750,000',
    beds: '6 Beds',
    baths: '5 Baths',
    sqft: '5,800 sqft',
    badge: 'Investment',
    badgeColor: 'bg-primary'
  }
]

export default function Home() {
  useEffect(() => {
    const fadeElements = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1 })
    fadeElements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/2818535-uhd_3840_2160_24fps.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlay - Transparent for clear video */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="fade-up visible">
            <p className="text-gold font-medium tracking-widest uppercase mb-6 text-sm">Welcome to InfraSpark</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Where Dreams Meet <br/>
              <span className="bg-gradient-to-r from-gold to-yellow-200 bg-clip-text text-transparent">Architectural Excellence</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Discover premium real estate & timeless art solutions. We craft spaces that inspire, 
              investments that deliver, and experiences that last generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/property-listings" className="btn-primary px-10 py-4 rounded-full text-white font-semibold text-lg">
                <i className="fas fa-home mr-2"></i> Explore Properties
              </Link>
              <Link to="/ongoing-projects" className="border-2 border-white/30 hover:border-white px-10 py-4 rounded-full text-white font-semibold text-lg transition-all hover:bg-white hover:text-primary">
                <i className="fas fa-building mr-2"></i> View Projects
              </Link>
            </div>
            </div>
          </div>
          <a href="#divisions" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 hover:text-white transition cursor-pointer">
            <span className="text-sm mb-2">Scroll Down</span>
            <i className="fas fa-chevron-down text-xl animate-bounce"></i>
          </a>
        </section>

        {/* Division Selector */}
        <section id="divisions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-up">
            <p className="text-accent font-medium tracking-widest uppercase mb-3">Our Divisions</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Two Worlds, One Vision</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Excellence in real estate development and artistic architecture, united under one trusted brand.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link to="/realty-overview" className="division-card rounded-3xl p-8 md:p-12 card-hover cursor-pointer fade-up block" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-pink-600 flex items-center justify-center mb-6">
                <i className="fas fa-city text-white text-3xl"></i>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">Real Estate</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Premium residential and commercial properties. From luxury apartments to sprawling villas.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium">Residential</span>
                <span className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium">Commercial</span>
                <span className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium">Mixed-Use</span>
              </div>
              <span className="text-accent font-semibold flex items-center gap-2 group">
                Learn More <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
              </span>
            </Link>
            
            <Link to="/about-qalagriha" className="division-card rounded-3xl p-8 md:p-12 card-hover cursor-pointer fade-up block" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold to-yellow-500 flex items-center justify-center mb-6">
                <i className="fas fa-palette text-white text-3xl"></i>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">QalaGriha</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Art meets architecture in our boutique design studio. Bespoke interiors and artistic marvels.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium">Interior Design</span>
                <span className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium">Art Curation</span>
                <span className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium">Architecture</span>
              </div>
              <span className="text-gold font-semibold flex items-center gap-2 group">
                Discover QalaGriha <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
              </span>
            </Link>

            <Link to="/about-chandraraprabh" className="division-card rounded-3xl p-8 md:p-12 card-hover cursor-pointer fade-up block" style={{ animationDelay: '0.3s' }}>
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6">
                <i className="fas fa-lightbulb text-white text-3xl"></i>
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-4">Chandraraprabh</h3>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Illuminating spaces with celestial brilliance. Cutting-edge lighting solutions.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium">Smart Lighting</span>
                <span className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium">LED Solutions</span>
                <span className="px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-medium">Design</span>
              </div>
              <span className="text-indigo-600 font-semibold flex items-center gap-2 group">
                Explore Chandraraprabh <i className="fas fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Legacy Impact Map - India Focus */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-up">
            <p className="text-gold font-medium tracking-widest uppercase mb-3">Our Presence</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white">Legacy Impact Map</h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">Explore our footprint across India. Click on markers to discover our landmark projects.</p>
          </div>
          
          {/* Interactive Map - India Focus */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl fade-up" style={{ height: '600px', maxWidth: '900px', margin: '0 auto' }}>
            {/* India Map Background - Better Quality */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
              <svg viewBox="0 0 800 900" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                {/* Simplified India Map Outline */}
                <path d="M580,120 L620,130 L640,150 L630,180 L650,200 L640,230 L620,250 L580,260 L540,250 L520,230 L530,200 L510,180 L490,170 L470,150 L480,120 L500,100 L520,80 L560,70 L580,120 Z" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2"/>
                <path d="M450,200 L480,190 L500,200 L510,230 L500,260 L480,280 L450,290 L420,280 L400,250 L410,220 L430,200 Z" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2"/>
                <path d="M350,280 L400,270 L440,280 L450,310 L430,340 L380,350 L340,330 L330,300 Z" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2"/>
                <path d="M280,320 L320,310 L350,330 L360,360 L340,390 L290,400 L260,380 L250,350 Z" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2"/>
                <path d="M200,380 L240,370 L270,390 L280,430 L260,470 L210,480 L180,450 L170,410 Z" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2"/>
                {/* Southern Peninsula */}
                <path d="M320,450 L360,440 L380,470 L370,510 L340,540 L310,530 L300,490 Z" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="2"/>
                {/* Sri Lanka */}
                <ellipse cx="450" cy="580" rx="30" ry="50" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="1"/>
              </svg>
            </div>
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/60"></div>
            
            {/* India Location Points - Accurate Positions */}
            <div className="absolute inset-0">
              {/* Delhi/NCR - North */}
              <div className="absolute" style={{ top: '23%', left: '58%' }}>
                <button className="relative group">
                  <div className="w-6 h-6 bg-gold rounded-full animate-pulse shadow-lg shadow-gold/50"></div>
                  <div className="absolute top-0 w-6 h-6 bg-gold rounded-full border-2 border-white"></div>
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-3 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 -translate-y-2 group-hover:translate-y-0">
                    <p className="text-sm font-bold text-primary">Delhi NCR</p>
                    <p className="text-xs text-accent font-semibold">18 Projects</p>
                  </div>
                </button>
              </div>
              
              {/* Mumbai - West Coast */}
              <div className="absolute" style={{ top: '42%', left: '22%' }}>
                <button className="relative group">
                  <div className="w-8 h-8 bg-accent rounded-full animate-pulse shadow-lg shadow-accent/50"></div>
                  <div className="absolute top-0 w-8 h-8 bg-accent rounded-full border-3 border-white"></div>
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-3 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 -translate-y-2 group-hover:translate-y-0">
                    <p className="text-sm font-bold text-primary">Mumbai, Maharashtra</p>
                    <p className="text-xs text-accent font-semibold">25 Projects | HQ</p>
                  </div>
                </button>
              </div>
              
              {/* Bangalore - South */}
              <div className="absolute" style={{ top: '62%', left: '38%' }}>
                <button className="relative group">
                  <div className="w-6 h-6 bg-gold rounded-full animate-pulse shadow-lg shadow-gold/50"></div>
                  <div className="absolute top-0 w-6 h-6 bg-gold rounded-full border-2 border-white"></div>
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-3 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 -translate-y-2 group-hover:translate-y-0">
                    <p className="text-sm font-bold text-primary">Bangalore, Karnataka</p>
                    <p className="text-xs text-accent font-semibold">15 Projects</p>
                  </div>
                </button>
              </div>
              
              {/* Chennai - Southeast */}
              <div className="absolute" style={{ top: '58%', left: '25%' }}>
                <button className="relative group">
                  <div className="w-5 h-5 bg-accent rounded-full animate-pulse shadow-lg shadow-accent/50"></div>
                  <div className="absolute top-0 w-5 h-5 bg-accent rounded-full border-2 border-white"></div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-3 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 -translate-y-2 group-hover:translate-y-0">
                    <p className="text-sm font-bold text-primary">Chennai, Tamil Nadu</p>
                    <p className="text-xs text-accent font-semibold">12 Projects</p>
                  </div>
                </button>
              </div>
              
              {/* Hyderabad - Central */}
              <div className="absolute" style={{ top: '48%', left: '35%' }}>
                <button className="relative group">
                  <div className="w-5 h-5 bg-gold rounded-full animate-pulse shadow-lg shadow-gold/50"></div>
                  <div className="absolute top-0 w-5 h-5 bg-gold rounded-full border-2 border-white"></div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-3 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 -translate-y-2 group-hover:translate-y-0">
                    <p className="text-sm font-bold text-primary">Hyderabad, Telangana</p>
                    <p className="text-xs text-accent font-semibold">10 Projects</p>
                  </div>
                </button>
              </div>
              
              {/* Pune - West */}
              <div className="absolute" style={{ top: '40%', left: '20%' }}>
                <button className="relative group">
                  <div className="w-5 h-5 bg-accent rounded-full animate-pulse shadow-lg shadow-accent/50"></div>
                  <div className="absolute top-0 w-5 h-5 bg-accent rounded-full border-2 border-white"></div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-3 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 -translate-y-2 group-hover:translate-y-0">
                    <p className="text-sm font-bold text-primary">Pune, Maharashtra</p>
                    <p className="text-xs text-accent font-semibold">8 Projects</p>
                  </div>
                </button>
              </div>
              
              {/* Kolkata - East */}
              <div className="absolute" style={{ top: '28%', left: '78%' }}>
                <button className="relative group">
                  <div className="w-5 h-5 bg-gold rounded-full animate-pulse shadow-lg shadow-gold/50"></div>
                  <div className="absolute top-0 w-5 h-5 bg-gold rounded-full border-2 border-white"></div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-3 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 -translate-y-2 group-hover:translate-y-0">
                    <p className="text-sm font-bold text-primary">Kolkata, West Bengal</p>
                    <p className="text-xs text-accent font-semibold">6 Projects</p>
                  </div>
                </button>
              </div>
              
              {/* Ahmedabad - Gujarat */}
              <div className="absolute" style={{ top: '30%', left: '15%' }}>
                <button className="relative group">
                  <div className="w-5 h-5 bg-accent rounded-full animate-pulse shadow-lg shadow-accent/50"></div>
                  <div className="absolute top-0 w-5 h-5 bg-accent rounded-full border-2 border-white"></div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white rounded-xl px-4 py-3 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 -translate-y-2 group-hover:translate-y-0">
                    <p className="text-sm font-bold text-primary">Ahmedabad, Gujarat</p>
                    <p className="text-xs text-accent font-semibold">5 Projects</p>
                  </div>
                </button>
              </div>
              
              {/* Jaipur - Rajasthan */}
              <div className="absolute" style={{ top: '20%', left: '35%' }}>
                <button className="relative group">
                  <div className="w-4 h-4 bg-gold rounded-full animate-pulse shadow-lg shadow-gold/50"></div>
                  <div className="absolute top-0 w-4 h-4 bg-gold rounded-full border-2 border-white"></div>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white rounded-xl px-3 py-2 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 -translate-y-2 group-hover:translate-y-0">
                    <p className="text-xs font-bold text-primary">Jaipur, Rajasthan</p>
                    <p className="text-xs text-accent font-semibold">4 Projects</p>
                  </div>
                </button>
              </div>
              
              {/* Chandigarh - North */}
              <div className="absolute" style={{ top: '15%', left: '50%' }}>
                <button className="relative group">
                  <div className="w-4 h-4 bg-accent rounded-full animate-pulse shadow-lg shadow-accent/50"></div>
                  <div className="absolute top-0 w-4 h-4 bg-accent rounded-full border-2 border-white"></div>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white rounded-xl px-3 py-2 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 -translate-y-2 group-hover:translate-y-0">
                    <p className="text-xs font-bold text-primary">Chandigarh</p>
                    <p className="text-xs text-accent font-semibold">3 Projects</p>
                  </div>
                </button>
              </div>
              
              {/* Kochi - Kerala */}
              <div className="absolute" style={{ top: '68%', left: '28%' }}>
                <button className="relative group">
                  <div className="w-4 h-4 bg-gold rounded-full animate-pulse shadow-lg shadow-gold/50"></div>
                  <div className="absolute top-0 w-4 h-4 bg-gold rounded-full border-2 border-white"></div>
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-white rounded-xl px-3 py-2 shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap z-20 -translate-y-2 group-hover:translate-y-0">
                    <p className="text-xs font-bold text-primary">Kochi, Kerala</p>
                    <p className="text-xs text-accent font-semibold">2 Projects</p>
                  </div>
                </button>
              </div>
            </div>
            
            {/* Stats Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-md py-5 px-8 border-t border-white/10">
              <div className="flex justify-around text-center">
                <div className="text-white">
                  <p className="text-3xl font-bold text-accent">11</p>
                  <p className="text-xs text-white/70 uppercase tracking-wider">Cities</p>
                </div>
                <div className="text-white">
                  <p className="text-3xl font-bold text-gold">108</p>
                  <p className="text-xs text-white/70 uppercase tracking-wider">Projects</p>
                </div>
                <div className="text-white">
                  <p className="text-3xl font-bold text-accent">1800+</p>
                  <p className="text-xs text-white/70 uppercase tracking-wider">Clients</p>
                </div>
                <div className="text-white">
                  <p className="text-3xl font-bold text-gold">15+</p>
                  <p className="text-xs text-white/70 uppercase tracking-wider">Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 fade-up">
            <div>
              <p className="text-accent font-medium tracking-widest uppercase mb-3">Featured</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">Latest Properties</h2>
            </div>
            <Link to="/property-listings" className="hidden md:inline-flex items-center gap-2 text-accent font-semibold mt-4 md:mt-0 hover:gap-4 transition-all">
              View All Properties <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <PropertyCard key={index} property={property} delay={index * 0.1} />
            ))}
          </div>
          
          <div className="text-center mt-10 fade-up">
            <Link to="/property-listings" className="md:hidden inline-flex items-center gap-2 text-accent font-semibold">
              View All Properties <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* About QalaGriha Preview */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid)"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="fade-up">
              <p className="text-gold font-medium tracking-widest uppercase mb-3">QalaGriha</p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Where Art Meets Architecture</h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                QalaGriha (meaning "Art Home" in Sanskrit) is our boutique division dedicated to creating 
                timeless spaces that blend traditional artistry with contemporary design. Every project 
                is a canvas, every client a patron of exquisite craftsmanship.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-5">
                  <i className="fas fa-paint-brush text-gold text-2xl mb-3"></i>
                  <h4 className="font-semibold mb-1">Bespoke Interiors</h4>
                  <p className="text-white/60 text-sm">Tailored designs that reflect your unique personality</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-2xl p-5">
                  <i className="fas fa-gem text-gold text-2xl mb-3"></i>
                  <h4 className="font-semibold mb-1">Art Curation</h4>
                  <p className="text-white/60 text-sm">Curated collections from world-renowned artists</p>
                </div>
              </div>
              <Link to="/about-qalagriha" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-semibold">
                Explore QalaGriha <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4 fade-up" style={{ animationDelay: '0.2s' }}>
              <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80" alt="Interior Design" className="rounded-2xl w-full h-64 object-cover mt-8"/>
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80" alt="Modern Architecture" className="rounded-2xl w-full h-64 object-cover"/>
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80" alt="Art Collection" className="rounded-2xl w-full h-64 object-cover"/>
              <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80" alt="Luxury Design" className="rounded-2xl w-full h-64 object-cover mt-8"/>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-accent to-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="fade-up">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading">150+</div>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div className="fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading">2500+</div>
              <p className="text-white/80">Happy Clients</p>
            </div>
            <div className="fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading">15+</div>
              <p className="text-white/80">Years Experience</p>
            </div>
            <div className="fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading">25+</div>
              <p className="text-white/80">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-up">
            <p className="text-accent font-medium tracking-widest uppercase mb-3">Investment</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">High-Return Opportunities</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">Invest in premium properties with guaranteed returns and appreciation potential.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Downtown Plaza', roi: '12%', badge: 'High Demand', desc: 'Commercial mixed-use development in the heart of the financial district.', target: '$5M', funded: 75 },
              { title: 'Riverside Luxury Apartments', roi: '15%', badge: 'Hot Pick', desc: 'Premium waterfront residential complex with panoramic views.', target: '$12M', funded: 60 },
              { title: 'Tech Park Phase II', roi: '18%', badge: 'Premium', desc: 'State-of-the-art IT park with Fortune 500 tenants.', target: '$25M', funded: 40 }
            ].map((investment, index) => (
              <div key={index} className="investment-card bg-offwhite rounded-3xl p-8 card-hover fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">{investment.roi} ROI</span>
                  <span className="text-gray-400"><i className="fas fa-chart-line"></i> {investment.badge}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-primary mb-3">{investment.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{investment.desc}</p>
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Target</span>
                    <span className="font-semibold">{investment.target}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className={`h-2 rounded-full ${index === 1 ? 'bg-gold' : 'bg-accent'}`} style={{ width: `${investment.funded}%` }}></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{investment.funded}% Funded</p>
                </div>
                <Link to="/investment-opportunities" className="block w-full text-center bg-primary text-white py-3 rounded-xl font-semibold hover:bg-accent transition">
                  Invest Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-up">
            <p className="text-accent font-medium tracking-widest uppercase mb-3">Testimonials</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">What Our Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "InfraSpark transformed our dream home into reality. Their attention to detail and quality is unmatched.", name: 'Sarah Johnson', role: 'Homeowner', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
              { quote: "QalaGriha's interior design team created a masterpiece. Our office space now reflects our brand perfectly.", name: 'Michael Chen', role: 'CEO, TechVentures', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
              { quote: "The investment team at InfraSpark guided us through every step. Our returns have exceeded expectations!", name: 'Emily Rodriguez', role: 'Investor', image: 'https://randomuser.me/api/portraits/women/68.jpg' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 card-hover fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex text-gold mb-4">
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
          
          <div className="text-center mt-10 fade-up">
            <Link to="/client-stories" className="inline-flex items-center gap-2 text-accent font-semibold border-2 border-accent px-8 py-3 rounded-full hover:bg-accent hover:text-white transition">
              View All Stories <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="white"/>
            </pattern>
            <rect width="100" height="100" fill="url(#grid2)"/>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center fade-up">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated with InfraSpark</h2>
          <p className="text-white/70 mb-8">Subscribe to get the latest property listings, investment opportunities, and design inspiration.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input type="email" placeholder="Enter your email" className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-accent"/>
            <button type="submit" className="btn-primary px-8 py-4 rounded-full text-white font-semibold whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
