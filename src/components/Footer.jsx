import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-16 pb-8" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center">
                <span className="text-white font-heading text-xl font-bold">IS</span>
              </div>
              <span className="font-heading text-2xl font-bold">InfraSpark</span>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed">
              Your trusted partner in real estate and architectural excellence. We build more than structures; we create legacies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/realty-overview" className="text-white/60 hover:text-accent transition">Realty Overview</Link></li>
              <li><Link to="/ongoing-projects" className="text-white/60 hover:text-accent transition">Ongoing Projects</Link></li>
              <li><Link to="/completed-projects" className="text-white/60 hover:text-accent transition">Completed Projects</Link></li>
              <li><Link to="/property-listings" className="text-white/60 hover:text-accent transition">Property Listings</Link></li>
              <li><Link to="/investment-opportunities" className="text-white/60 hover:text-accent transition">Investment Opportunities</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">QalaGriha</h4>
            <ul className="space-y-3">
              <li><Link to="/about-qalagriha" className="text-white/60 hover:text-gold transition">About QalaGriha</Link></li>
              <li><Link to="/collections" className="text-white/60 hover:text-gold transition">Collections</Link></li>
              <li><Link to="/gallery" className="text-white/60 hover:text-gold transition">Gallery</Link></li>
              <li><Link to="/client-stories" className="text-white/60 hover:text-gold transition">Client Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Chandraraprabh</h4>
            <ul className="space-y-3">
              <li><Link to="/about-chandraraprabh" className="text-white/60 hover:text-indigo-400 transition">About Chandraraprabh</Link></li>
              <li><Link to="/chandraraprabh-services" className="text-white/60 hover:text-indigo-400 transition">Services & Solutions</Link></li>
              <li><Link to="/chandraraprabh-gallery" className="text-white/60 hover:text-indigo-400 transition">Gallery</Link></li>
              <li><Link to="/chandraraprabh-projects" className="text-white/60 hover:text-indigo-400 transition">Projects & Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-1 text-accent"></i>
                <span>123 Business Avenue, Suite 100<br/>New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-accent"></i>
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-accent"></i>
                <span>info@infraspark.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/40 text-sm">
          <p>&copy; 2024 InfraSpark. All rights reserved. | Built with passion and precision.</p>
        </div>
      </div>
    </footer>
  )
}
