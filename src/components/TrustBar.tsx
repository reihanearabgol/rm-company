'use client'

const STATS = [
  { number: '24/7', label: 'Project Communication' },
  { number: '60-Minute',   label: 'Private Consultation' },
  { number: '100%',  label: 'Design-Led Approach' },
  { number: '2-Year',   label: 'Workmanship Guarantee' },
]

export default function TrustBar() {
  return (
    <section
      style={{
        background: 'var(--color-charcoal)',
        borderTop: '1px solid rgba(201,169,110,0.1)',
        borderBottom: '1px solid rgba(201,169,110,0.1)',
        padding: '3.5rem 5vw',
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
        }}
        className="trustbar-grid"
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              textAlign: 'center',
              padding: '1rem 2rem',
              position: 'relative',
            }}
          >
            {i > 0 && (
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '10%',
                  bottom: '10%',
                  width: '1px',
                  background: 'rgba(201,169,110,0.15)',
                }}
                className="trust-divider"
              />
            )}
            <span
              style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 300,
                color: 'var(--color-gold)',
                lineHeight: 1,
                marginBottom: '0.5rem',
              }}
            >
              {stat.number}
            </span>
            <span
              className="t-label"
              style={{ color: 'var(--color-mist)' }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .trustbar-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .trust-divider {
            display: block !important;
          }
        }
      `}</style>
    </section>
  )
}