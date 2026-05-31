'use client'

const STEPS = [
  { num: '01', title: 'Discovery',  desc: 'We begin with a complimentary consultation to understand your vision, lifestyle, and goals.' },
  { num: '02', title: 'Design',     desc: 'Our designers craft a detailed concept — materials, finishes, layouts, and 3D visualisations.' },
  { num: '03', title: 'Planning',   desc: 'Full project scheduling, permits, contractor coordination, and budget finalisation.' },
  { num: '04', title: 'Build',      desc: 'Expert tradespeople execute the work with precision, under daily management by your project lead.' },
  { num: '05', title: 'Reveal',     desc: 'A final walkthrough, snag resolution, and handover — with our 5-year workmanship guarantee.' },
]

export default function Process() {
  return (
    <section id="process" style={{ background: '#0a0908', padding: '8rem 4rem' }}>
      <style>{`
        .process-step:hover .step-dot { border-color: #c9a96e !important; background: rgba(201,169,110,0.08) !important; }
        .process-step:hover .step-title { color: #e8d5b0 !important; }
        @media (max-width: 768px) { .process-steps { grid-template-columns: 1fr !important; gap: 3rem !important; } .process-steps::before { display: none !important; } }
      `}</style>
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '30px', height: '1px', background: '#c9a96e' }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e' }}>Our Process</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '5rem' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1, color: '#f5f0e8' }}>
            How We <em style={{ fontStyle: 'italic', color: '#e8d5b0' }}>Work</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.95rem', fontWeight: 300, color: '#a09890', lineHeight: 1.8 }}>
            A structured, transparent process designed to make your renovation seamless — from first conversation to final reveal.
          </p>
        </div>
        <div className="process-steps" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, position: 'relative' }}>
          <div style={{ position: 'absolute', top: '32px', left: '10%', right: '10%', height: '1px', background: 'linear-gradient(to right, transparent, rgba(201,169,110,0.35) 20%, rgba(201,169,110,0.35) 80%, transparent)', pointerEvents: 'none' }} />
          {STEPS.map((step) => (
            <div key={step.num} className="process-step" style={{ padding: '0 1.5rem', textAlign: 'center', position: 'relative' }}>
              <div className="step-dot" style={{ width: '64px', height: '64px', border: '1px solid rgba(201,169,110,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', background: '#0a0908', position: 'relative', zIndex: 1, transition: 'border-color 0.3s ease, background 0.3s ease' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.1rem', fontWeight: 300, color: '#c9a96e' }}>{step.num}</span>
              </div>
              <h3 className="step-title" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.15rem', fontWeight: 300, color: '#f5f0e8', marginBottom: '0.75rem', lineHeight: 1.3, transition: 'color 0.3s ease' }}>{step.title}</h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.78rem', fontWeight: 300, color: '#a09890', lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid rgba(201,169,110,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 300, color: '#f5f0e8', fontStyle: 'italic' }}>Ready to begin your renovation journey?</p>
          <a href="/consultation" style={{ display: 'inline-block', padding: '1rem 2.5rem', background: 'transparent', border: '1px solid #c9a96e', fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a96e', textDecoration: 'none', transition: 'background 0.3s ease, color 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#c9a96e'; e.currentTarget.style.color = '#0a0908' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a96e' }}
          >Book Free Consultation</a>
        </div>
      </div>
    </section>
  )
}
