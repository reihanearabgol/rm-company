'use client'

const STATS = [
  {
    number: '5.0',
    label: 'Five Star Average Review',
    sublabel: '★ ★ ★ ★ ★',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.2" style={{ width: '28px', height: '28px', marginBottom: '0.75rem' }}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    number: '2 Year',
    label: 'Warranty on All Projects',
    sublabel: 'Workmanship Guarantee',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.2" style={{ width: '28px', height: '28px', marginBottom: '0.75rem' }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    number: '60 Min',
    label: 'Private Consultation',
    sublabel: 'With Our Specialists',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.2" style={{ width: '28px', height: '28px', marginBottom: '0.75rem' }}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    number: '98%',
    label: 'Client Satisfaction',
    sublabel: 'We Put You First',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.2" style={{ width: '28px', height: '28px', marginBottom: '0.75rem' }}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
]

export default function TrustBar() {
  return (
    <section style={{
      background: 'var(--color-charcoal, #141210)',
      borderTop: '1px solid rgba(201,169,110,0.1)',
      borderBottom: '1px solid rgba(201,169,110,0.1)',
      padding: '3.5rem 5vw',
    }}>
      <div style={{
        maxWidth: '1320px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '2rem',
      }} className="trustbar-grid">
        {STATS.map((stat, i) => (
          <div key={stat.label} style={{ textAlign: 'center', padding: '1rem 2rem', position: 'relative' }}>
            {i > 0 && (
              <div style={{ position: 'absolute', left: 0, top: '10%', bottom: '10%', width: '1px', background: 'rgba(201,169,110,0.15)' }} className="trust-divider" />
            )}
            <div style={{ display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
            <span style={{ display: 'block', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 300, color: '#c9a96e', lineHeight: 1, marginBottom: '0.4rem' }}>
              {stat.number}
            </span>
            <div style={{ width: '24px', height: '1px', background: 'rgba(201,169,110,0.4)', margin: '0.5rem auto' }} />
            <span style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '0.25rem' }}>
              {stat.label}
            </span>
            <span style={{ display: 'block', fontFamily: "'DM Sans', sans-serif", fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.5)' }}>
              {stat.sublabel}
            </span>
          </div>
        ))}
      </div>
      <style>{`
        @media (min-width: 768px) {
          .trustbar-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
