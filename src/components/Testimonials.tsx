'use client'

import { useState, useEffect } from 'react'

const FEATURED = {
  quote: "Maison Atelier transformed our home beyond anything we imagined. Every detail was considered, every material chosen with extraordinary care. The result is a space that feels both timeless and deeply personal.",
  author: "Sarah & James K.",
  location: "Rosedale, Toronto",
  project: "Full Home Renovation",
  initials: "SK",
}

const TESTIMONIALS = [
  { quote: "From the first meeting to the final reveal, the process was seamless. Our kitchen is now the heart of our home.", author: "Michael R.", location: "Forest Hill", project: "Kitchen Renovation", initials: "MR" },
  { quote: "The attention to detail is unmatched. They understood our vision immediately and elevated it beyond expectations.", author: "Priya & Arjun S.", location: "Yorkville", project: "Master Suite Renovation", initials: "PS" },
  { quote: "Professional, creative, and genuinely passionate about their craft. Our bathroom feels like a five-star hotel.", author: "Catherine L.", location: "The Annex", project: "Bathroom Remodeling", initials: "CL" },
  { quote: "We've worked with many contractors over the years. This was a completely different experience — truly white glove.", author: "Robert & Diana M.", location: "Lawrence Park", project: "Basement Finishing", initials: "RM" },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])
  return (
    <section id="testimonials" style={{ background: '#1c1b19', padding: isMobile ? '4rem 1.5rem' : '8rem 4rem', overflow: 'hidden' }}>
      <style>{`.testimonial-mini:hover { border-color: rgba(201,169,110,0.3) !important; background: rgba(201,169,110,0.04) !important; } .testimonial-mini:hover .mini-author { color: #f5f0e8 !important; }`}</style>
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '30px', height: '1px', background: '#c9a96e' }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e' }}>Client Stories</span>
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1, color: '#f5f0e8', marginBottom: '4rem' }}>
          What Our Clients <em style={{ fontStyle: 'italic', color: '#e8d5b0' }}>Say</em>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '6rem', alignItems: 'start' }}>
          <div style={{ padding: isMobile ? '1.5rem' : '3rem', border: '1px solid rgba(201,169,110,0.2)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-0.5rem', left: '2rem', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '8rem', lineHeight: 1, color: '#c9a96e', opacity: 0.12, pointerEvents: 'none', userSelect: 'none' }}>"</div>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
              {[...Array(5)].map((_, i) => <div key={i} style={{ width: '8px', height: '8px', background: '#c9a96e', clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />)}
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: isMobile ? '1.1rem' : '1.35rem', fontWeight: 300, fontStyle: 'italic', color: '#f5f0e8', lineHeight: 1.65, marginBottom: '2rem' }}>"{FEATURED.quote}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#2e2c29', border: '1px solid rgba(201,169,110,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', color: '#c9a96e', flexShrink: 0 }}>{FEATURED.initials}</div>
              <div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 400, color: '#f5f0e8', marginBottom: '2px' }}>{FEATURED.author}</p>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', color: '#a09890', letterSpacing: '0.04em' }}>{FEATURED.location} · {FEATURED.project}</p>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-mini" onClick={() => setActive(i)} style={{ padding: '1.75rem', border: `1px solid ${active === i ? 'rgba(201,169,110,0.35)' : 'rgba(255,255,255,0.06)'}`, background: active === i ? 'rgba(201,169,110,0.05)' : 'transparent', cursor: 'pointer', transition: 'all 0.3s ease', position: 'relative' }}>
                {active === i && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', background: '#c9a96e' }} />}
                <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '0.95rem', fontStyle: 'italic', color: active === i ? '#f5f0e8' : '#a09890', lineHeight: 1.6, marginBottom: '1rem', transition: 'color 0.3s ease' }}>"{t.quote}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#2e2c29', border: '1px solid rgba(201,169,110,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '0.75rem', color: '#c9a96e', flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <p className="mini-author" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.75rem', fontWeight: 400, color: active === i ? '#f5f0e8' : '#a09890', marginBottom: '1px', transition: 'color 0.3s ease' }}>{t.author}</p>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', color: 'rgba(160,152,144,0.6)', letterSpacing: '0.04em' }}>{t.location} · {t.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ marginTop: isMobile ? '2.5rem' : '5rem', paddingTop: isMobile ? '2rem' : '3rem', borderTop: '1px solid rgba(201,169,110,0.1)', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '0' }}>
          {[{ num: '98%', label: 'Client Satisfaction' }, { num: '500+', label: 'Projects Completed' }, { num: '17', label: 'Years of Excellence' }, { num: '5\u2605', label: 'Average Review' }].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center', padding: isMobile ? '1.5rem 0' : '0 2rem', borderRight: isMobile ? 'none' : (i < 3 ? '1px solid rgba(201,169,110,0.12)' : 'none'), borderBottom: isMobile ? '1px solid rgba(201,169,110,0.08)' : 'none' }}>
              <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 300, color: '#c9a96e', lineHeight: 1, display: 'block', marginBottom: '0.5rem' }}>{stat.num}</span>
              <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a09890' }}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
