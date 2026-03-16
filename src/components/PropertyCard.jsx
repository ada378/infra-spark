export default function PropertyCard({ property, delay = 0 }) {
  return (
    <div className="property-card bg-white rounded-3xl overflow-hidden card-hover fade-up" style={{ animationDelay: `${delay}s` }}>
      <div className="relative h-64 overflow-hidden">
        <img src={property.image} alt={property.title} className="property-img w-full h-full object-cover" />
        {property.badge && (
          <div className={`absolute top-4 left-4 px-4 py-1 rounded-full text-sm font-medium text-white ${property.badgeColor || 'bg-accent'}`}>
            {property.badge}
          </div>
        )}
        <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full">
          <span className="text-gold font-bold">{property.price}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-primary mb-2">{property.title}</h3>
        <p className="text-gray-500 text-sm mb-4"><i className="fas fa-map-marker-alt mr-2 text-accent"></i>{property.location}</p>
        <div className="flex gap-4 text-gray-500 text-sm mb-4">
          <span><i className="fas fa-bed mr-2"></i>{property.beds}</span>
          <span><i className="fas fa-bath mr-2"></i>{property.baths}</span>
          <span><i className="fas fa-ruler-combined mr-2"></i>{property.sqft}</span>
        </div>
        <a href="#" className="block w-full text-center border-2 border-primary text-primary py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition">
          View Details
        </a>
      </div>
    </div>
  )
}
