import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import RealtyOverview from './pages/RealtyOverview'
import OngoingProjects from './pages/OngoingProjects'
import CompletedProjects from './pages/CompletedProjects'
import PropertyListings from './pages/PropertyListings'
import InvestmentOpportunities from './pages/InvestmentOpportunities'
import AboutQalaGriha from './pages/AboutQalaGriha'
import Collections from './pages/Collections'
import Gallery from './pages/Gallery'
import ClientStories from './pages/ClientStories'
import AboutChandraraprabh from './pages/AboutChandraraprabh'
import ChandraraprabhServices from './pages/ChandraraprabhServices'
import ChandraraprabhGallery from './pages/ChandraraprabhGallery'
import ChandraraprabhProjects from './pages/ChandraraprabhProjects'

function App() {
  return (
    <Router>
      <div className="font-body bg-offwhite text-primary">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realty-overview" element={<RealtyOverview />} />
          <Route path="/ongoing-projects" element={<OngoingProjects />} />
          <Route path="/completed-projects" element={<CompletedProjects />} />
          <Route path="/property-listings" element={<PropertyListings />} />
          <Route path="/investment-opportunities" element={<InvestmentOpportunities />} />
          <Route path="/about-qalagriha" element={<AboutQalaGriha />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/client-stories" element={<ClientStories />} />
          <Route path="/about-chandraraprabh" element={<AboutChandraraprabh />} />
          <Route path="/chandraraprabh-services" element={<ChandraraprabhServices />} />
          <Route path="/chandraraprabh-gallery" element={<ChandraraprabhGallery />} />
          <Route path="/chandraraprabh-projects" element={<ChandraraprabhProjects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
