import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = location.pathname === '/'

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-scroll' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center">
              <span className="text-white font-heading text-xl font-bold">IS</span>
            </div>
            <div>
              <span className={`font-heading text-2xl font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>InfraSpark</span>
              <p className={`text-xs ${scrolled ? 'text-gray-500' : 'text-gray-300'}`}>Real Estate & More</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className={`font-medium transition flex items-center gap-2 ${scrolled ? 'text-primary hover:text-accent' : 'text-white/90 hover:text-white'}`}>
                Real Estate <i className="fas fa-chevron-down text-xs"></i>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/realty-overview" className="block px-5 py-3 text-gray-700 hover:bg-accent hover:text-white rounded-t-xl transition">Realty Overview</Link>
                <Link to="/ongoing-projects" className="block px-5 py-3 text-gray-700 hover:bg-accent hover:text-white transition">Ongoing Projects</Link>
                <Link to="/completed-projects" className="block px-5 py-3 text-gray-700 hover:bg-accent hover:text-white transition">Completed Projects</Link>
                <Link to="/property-listings" className="block px-5 py-3 text-gray-700 hover:bg-accent hover:text-white transition">Property Listings</Link>
                <Link to="/investment-opportunities" className="block px-5 py-3 text-gray-700 hover:bg-accent hover:text-white rounded-b-xl transition">Investment Opportunities</Link>
              </div>
            </div>

            <div className="relative group">
              <button className={`font-medium transition flex items-center gap-2 ${scrolled ? 'text-primary hover:text-accent' : 'text-white/90 hover:text-white'}`}>
                QalaGriha <i className="fas fa-chevron-down text-xs"></i>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/about-qalagriha" className="block px-5 py-3 text-gray-700 hover:bg-accent hover:text-white rounded-t-xl transition">About QalaGriha</Link>
                <Link to="/collections" className="block px-5 py-3 text-gray-700 hover:bg-accent hover:text-white transition">Collections / Services</Link>
                <Link to="/gallery" className="block px-5 py-3 text-gray-700 hover:bg-accent hover:text-white transition">Gallery</Link>
                <Link to="/client-stories" className="block px-5 py-3 text-gray-700 hover:bg-accent hover:text-white rounded-b-xl transition">Client Stories</Link>
              </div>
            </div>

            <div className="relative group">
              <button className={`font-medium transition flex items-center gap-2 ${scrolled ? 'text-primary hover:text-accent' : 'text-white/90 hover:text-white'}`}>
                Chandraraprabh <i className="fas fa-chevron-down text-xs"></i>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link to="/about-chandraraprabh" className="block px-5 py-3 text-gray-700 hover:bg-indigo-500 hover:text-white rounded-t-xl transition">About Chandraraprabh</Link>
                <Link to="/chandraraprabh-services" className="block px-5 py-3 text-gray-700 hover:bg-indigo-500 hover:text-white transition">Services & Solutions</Link>
                <Link to="/chandraraprabh-gallery" className="block px-5 py-3 text-gray-700 hover:bg-indigo-500 hover:text-white transition">Gallery</Link>
                <Link to="/chandraraprabh-projects" className="block px-5 py-3 text-gray-700 hover:bg-indigo-500 hover:text-white rounded-b-xl transition">Projects & Stories</Link>
              </div>
            </div>

            <Link to="/#contact" className="btn-primary px-6 py-3 rounded-full text-white font-medium">
              Contact Us
            </Link>
          </div>

          <button onClick={() => setMobileMenuOpen(true)} className={`lg:hidden text-2xl ${scrolled ? 'text-primary' : 'text-white'}`}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 z-50 bg-primary ${mobileMenuOpen ? '' : 'hidden'}`}>
        <div className="flex flex-col h-full p-8">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl">
            <i className="fas fa-times"></i>
          </button>
          <div className="mt-16 space-y-6">
            <div className="text-white/60 text-sm uppercase tracking-wider mb-4">Real Estate</div>
            <Link to="/realty-overview" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl font-medium hover:text-accent block">Realty Overview</Link>
            <Link to="/ongoing-projects" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl font-medium hover:text-accent block">Ongoing Projects</Link>
            <Link to="/completed-projects" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl font-medium hover:text-accent block">Completed Projects</Link>
            <Link to="/property-listings" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl font-medium hover:text-accent block">Property Listings</Link>
            <Link to="/investment-opportunities" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl font-medium hover:text-accent block">Investment Opportunities</Link>
            
            <div className="text-white/60 text-sm uppercase tracking-wider mb-4 mt-8">QalaGriha</div>
            <Link to="/about-qalagriha" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl font-medium hover:text-accent block">About QalaGriha</Link>
            <Link to="/collections" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl font-medium hover:text-accent block">Collections / Services</Link>
            <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl font-medium hover:text-accent block">Gallery</Link>
            <Link to="/client-stories" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl font-medium hover:text-accent block">Client Stories</Link>

            <div className="text-white/60 text-sm uppercase tracking-wider mb-4 mt-8">Chandraraprabh</div>
            <Link to="/about-chandraraprabh" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl font-medium hover:text-indigo-400 block">About Chandraraprabh</Link>
            <Link to="/chandraraprabh-services" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl font-medium hover:text-indigo-400 block">Services & Solutions</Link>
            <Link to="/chandraraprabh-gallery" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl font-medium hover:text-indigo-400 block">Gallery</Link>
            <Link to="/chandraraprabh-projects" onClick={() => setMobileMenuOpen(false)} className="text-white text-xl font-medium hover:text-indigo-400 block">Projects & Stories</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
