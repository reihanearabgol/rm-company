interface Service {
  id: string
  title: string
  description: string
}

interface ServicesSectionProps {
  services?: Service[]
}

const DEFAULT_SERVICES = [
  { id: '1', title: 'Kitchen Renovation', description: 'Bespoke kitchens designed around how you live — premium materials, custom millwork, and flawless execution.' },
  { id: '2', title: 'Bathroom Remodeling', description: 'Spa-inspired bathrooms with natural stone, designer fixtures, and meticulous attention to every detail.' },
  { id: '3', title: 'Full Home Renovation', description: 'Complete residential renovations from concept to completion — one dedicated team, zero compromise.' },
  { id: '4', title: 'Custom Cabinetry', description: 'Bespoke cabinetry designed for timeless functionality — handcrafted millwork built to last a lifetime.' },
]

export default function ServicesSection({ services }: ServicesSectionProps) {
  const items = services && services.length > 0 ? services : DEFAULT_SERVICES

  return (
    <section id="services" style={{ background: '#0a0908', padding: '8rem 4rem' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '30px', height: '1px', background: '#c9a96e' }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e' }}>Our Expertise</span>
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1, color: '#f5f0e8', marginBottom: '4rem' }}>
          Crafted for <em style={{ fontStyle: 'italic', color: '#e8d5b0' }}>Every Vision</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2px' }}>
          {items.map((service, i) => (
            <div key={service.id} style={{ background: '#141210', padding: '2.5rem 2.25rem', position: 'relative', overflow: 'hidden', transition: 'background 0.3s ease', cursor: 'default' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,169,110,0.05)'; const line = e.currentTarget.querySelector('.s-line') as HTMLElement; if (line) line.style.width = '100%' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#141210'; const line = e.currentTarget.querySelector('.s-line') as HTMLElement; if (line) line.style.width = '0%' }}
            >
              <div className="s-line" style={{ position: 'absolute', bottom: 0, left: 0, height: '1px', width: '0%', background: '#c9a96e', transition: 'width 0.5s cubic-bezier(0.16,1,0.3,1)' }} />
              <span style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '0.6rem', letterSpacing: '0.16em', color: 'rgba(201,169,110,0.4)', marginBottom: '1.5rem' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', fontWeight: 300, color: '#e8dcc8', marginBottom: '0.875rem', lineHeight: 1.2 }}>
                {service.title}
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
