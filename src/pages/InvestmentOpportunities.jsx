import { useEffect } from 'react'

export default function InvestmentOpportunities() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const investments = [
    { title: 'Downtown Plaza', roi: '12%', badge: 'High Demand', desc: 'Commercial mixed-use development in the heart of the financial district.', target: '$5M', min: '$50,000', funded: 75, icon: 'fa-chart-line' },
    { title: 'Riverside Luxury Apartments', roi: '15%', badge: 'Hot Pick', desc: 'Premium waterfront residential complex with panoramic views.', target: '$12M', min: '$100,000', funded: 60, icon: 'fa-fire', gold: true },
    { title: 'Tech Park Phase II', roi: '18%', badge: 'Premium', desc: 'State-of-the-art IT park with Fortune 500 tenants.', target: '$25M', min: '$250,000', funded: 40, icon: 'fa-gem' },
    { title: 'Healthcare Campus', roi: '10%', badge: 'Secure', desc: 'Medical office building with long-term hospital lease.', target: '$8M', min: '$75,000', funded: 85, icon: 'fa-shield-alt' },
    { title: 'Student Housing Complex', roi: '14%', badge: 'Residential', desc: 'Purpose-built student accommodation near university.', target: '$15M', min: '$25,000', funded: 55, icon: 'fa-home', gold: true },
    { title: 'Mixed-Use Development', roi: '20%', badge: 'High Growth', desc: 'Retail, office, and residential in emerging district.', target: '$30M', min: '$500,000', funded: 25, icon: 'fa-rocket' }
  ]

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gold font-medium tracking-widest uppercase mb-4 fade-up">Grow Your Wealth</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 fade-up">Investment Opportunities</h1>
          <p className="text-white/80 fade-up">Premium investment options with guaranteed returns</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {investments.map((inv, index) => (
              <div key={index} className="investment-card bg-white rounded-3xl p-8 card-hover fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">{inv.roi} ROI</span>
                  <span className="text-gray-400"><i className={`fas ${inv.icon}`}></i> {inv.badge}</span>
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{inv.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{inv.desc}</p>
                <div className="border-t border-gray-200 pt-4 mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Target</span>
                    <span className="font-semibold">{inv.target}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-500">Min Investment</span>
                    <span className="font-semibold">{inv.min}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div className={`h-2 rounded-full ${inv.gold ? 'bg-gold' : 'bg-accent'}`} style={{ width: `${inv.funded}%` }}></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{inv.funded}% Funded</p>
                </div>
                <button className="block w-full text-center bg-primary text-white py-3 rounded-xl font-semibold hover:bg-accent transition">Invest Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
