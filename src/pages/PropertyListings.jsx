import { useEffect, useState } from 'react'
import PropertyCard from '../components/PropertyCard'

export default function PropertyListings() {
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const properties = [
    { type: 'villa', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80', title: 'Azure Heights Villa', location: 'Beverly Hills, CA', price: '$2,450,000', beds: '5 Beds', baths: '4 Baths', sqft: '4,500 sqft', badge: 'Featured', badgeColor: 'bg-accent' },
    { type: 'apartment', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80', title: 'Skyline Penthouse', location: 'Manhattan, NY', price: '$890,000', beds: '3 Beds', baths: '3 Baths', sqft: '2,200 sqft', badge: 'New', badgeColor: 'bg-gold' },
    { type: 'villa', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80', title: 'Oceanview Estate', location: 'Miami Beach, FL', price: '$1,750,000', beds: '6 Beds', baths: '5 Baths', sqft: '5,800 sqft', badge: 'Beach', badgeColor: 'bg-primary' },
    { type: 'penthouse', image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&q=80', title: 'The Crown Penthouse', location: 'Chicago, IL', price: '$3,200,000', beds: '4 Beds', baths: '4 Baths', sqft: '3,800 sqft', badge: 'Luxury', badgeColor: 'bg-accent' },
    { type: 'commercial', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', title: 'Downtown Office Tower', location: 'Seattle, WA', price: '$5,500,000', beds: '25 Floors', baths: 'Office', sqft: '500 Park', badge: 'Investment', badgeColor: 'bg-green-500' },
    { type: 'apartment', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80', title: 'Urban Lofts', location: 'Austin, TX', price: '$750,000', beds: '2 Beds', baths: '2 Baths', sqft: '1,500 sqft', badge: 'Popular', badgeColor: 'bg-gold' }
  ]

  const filteredProperties = filter === 'all' ? properties : properties.filter(p => p.type === filter)

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 fade-up">Property Listings</h1>
          <p className="text-white/80 fade-up">Find your perfect property from our curated collection</p>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {['all', 'villa', 'apartment', 'penthouse', 'commercial'].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-3 rounded-full font-medium transition ${filter === type ? 'bg-primary text-white' : 'bg-offwhite text-primary hover:bg-primary hover:text-white'}`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <PropertyCard key={index} property={property} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
