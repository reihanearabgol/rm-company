'use client'

import { useState, useEffect } from 'react'

const FEATURED = {
  quote: "R&M Company transformed our home beyond anything we imagined. Every detail was considered, every material chosen with extraordinary care. The result is a space that feels both timeless and deeply personal.",
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

const TRUST_INDICATORS = [
  {
    icon: '⭐',
    number: '5-Star',
    label: 'Rated Service',
    sub: 'Rated 5 Stars by Our Clients',
  },
  {
    icon: '✓',
    number: '98%',
    label: 'Customer Satisfaction',
    sub: 'Trusted by Families Across Toronto',
  },
  {
    icon: '◎',
    number: '60 Min',
    label: 'Free Consultation',
    sub: 'Full Session with Our Experts',
  },
  {
    icon: '24/7',
    number: 'Support',
    label: 'Always Available',
    sub: '24 Hours a Day, 7 Days a Week',
  },
]

interface StatsProps {
  satisfaction?: string
  projects?: string
  years?: string
  review?: string
}

export default function Testimonials({
  satisfaction = '98%',
  projects = '500+',
  years = '17',
  review = '5★',
}: StatsProps) {
  const [active, setActive] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section id="testimonials" style={{ background: '#1c1b19', overflow: 'hidden' }}>
      <style>{`
        .testimonial-mini:hover { border-color: rgba(201,169,110,0.3) !important; background: rgba(201,169,110,0.04) !important; }
        .testimonial-mini:hover .mini-author { color: #f5f0e8 !important; }
        .trust-card:hover { background: rgba(201,169,110,0.06) !important; border-color: rgba(201,169,110,0.3) !important; }
      `}</style>

      {/* CRO Trust Banner */}
      <div style={{ background: 'rgba(201,169,110,0.08)', borderTop: '1px solid rgba(201,169,110,0.15)', borderBottom: '1px solid rgba(201,169,110,0.15)', padding: isMobile ? '2rem 1.5rem' : '2rem 4rem' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', textAlign: 'center', marginBottom: '1.5rem' }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '0.5rem' }}>
            Trusted by Homeowners Across Greater Toronto
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '0.5rem' }}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: '#c9a96e', fontSize: '1.1rem' }}>★</span>
            ))}
          </div>
          <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1rem, 2vw, 1.2rem)', fontWeight: 300, color: '#f5f0e8', fontStyle: 'italic' }}>
            Rated 5 Stars by Our Clients — {satisfaction} Customer Satisfaction
          </p>
        </div>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', gap: '12px' }}>
          {TRUST_INDICATORS.map((item, i) => (
            <div key={i} className="trust-card" style={{ textAlign: 'center', padding: '1.25rem', border: '1px solid rgba(201,169,110,0.15)', background: 'rgba(10,9,8,0.3)', transition: 'all 0.3s ease', cursor: 'default' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.6rem', color: '#c9a96e', marginBottom: '0.25rem', fontWeight: 300 }}>{item.number}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#f5f0e8', marginBottom: '0.2rem' }}>{item.label}</div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.58rem', color: 'rgba(201,169,110,0.6)', letterSpacing: '0.05em' }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ padding: isMobile ? '4rem 1.5rem' : '8rem 4rem' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '30px', height: '1px', background: '#c9a96e' }} />
            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e' }}>Client Stories</span>
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1, color: '#f5f0e8', marginBottom: '0.75rem' }}>
            What Our Clients <em style={{ fontStyle: 'italic', color: '#e8d5b0' }}>Say</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: '520px', marginBottom: '4rem' }}>
            Every project is a relationship built on trust, transparency, and exceptional craftsmanship. Here is what our clients share about their experience.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2rem' : '6rem', alignItems: 'start' }}>
            {/* Featured testimonial */}
            <div style={{ padding: isMobile ? '1.5rem' : '3rem', border: '1px solid rgba(201,169,110,0.2)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-0.5rem', left: '2rem', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '8rem', lineHeight: 1, color: '#c9a96e', opacity: 0.12, pointerEvents: 'none', userSelect: 'none' }}>"</div>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                {[...Array(5)].map((_, i) => (
                  <div key={i} style={{ width: '8px', height: '8px', background: '#c9a96e', clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />
                ))}
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

            {/* Mini testimonials */}
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

          {/* Stats bar */}

          {/* CTA */}
          <div style={{ marginTop: isMobile ? '2.5rem' : '4rem', textAlign: 'center', padding: '2.5rem', border: '1px solid rgba(201,169,110,0.15)', background: 'rgba(201,169,110,0.04)' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '0.75rem' }}>Ready to Begin?</p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 300, color: '#f5f0e8', marginBottom: '0.75rem' }}>
              Book Your <em style={{ color: '#e8d5b0' }}>Free 60-Minute Consultation</em>
            </h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 1.75rem' }}>
              Speak directly with our design specialists. No obligation — just an honest conversation about your vision and how we can bring it to life.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <a href="/consultation" style={{ display: 'inline-block', padding: '0.9rem 2.5rem', background: '#c9a96e', color: '#0a0908', fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Book Free Consultation
              </a>
              <a href="tel:+16476144437" style={{ display: 'inline-block', padding: '0.9rem 2.5rem', background: 'transparent', color: '#f5f0e8', fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)' }}>
                Call Us Now
              </a>
            </div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.6rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.08em' }}>
              ✓ Fast Response Times &nbsp;·&nbsp; ✓ 24/7 Available &nbsp;·&nbsp; ✓ No Obligation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
