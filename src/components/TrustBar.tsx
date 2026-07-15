'use client'

const STATS = [
  { num: '98%',    label: 'Client Satisfaction' },
  { num: '24/7',   label: 'Client Support'       },
  { num: '60 Min', label: 'Free Consultation'    },
  { num: '5\u2605',     label: 'Average Review'       },
]

export default function TrustBar() {
  return (
    <section style={{ background: '#141210', borderTop: '1px solid rgba(201,169,110,0.12)', borderBottom: '1px solid rgba(201,169,110,0.12)' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 4rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ padding: '3.5rem 2rem', borderRight: i < 3 ? '1px solid rgba(201,169,110,0.1)' : 'none', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.4rem, 3.5vw, 3.2rem)', fontWeight: 300, color: '#c9a96e', lineHeight: 1, letterSpacing: '-0.01em', display: 'block' }}>
                {s.num}
              </span>
              <div style={{ width: '24px', height: '1px', background: 'rgba(201,169,110,0.35)', margin: '0.25rem 0' }} />
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a09890', fontWeight: 400 }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
