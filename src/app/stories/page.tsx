'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { useState } from 'react'

const FEATURED = {
  quote: "R&M Company transformed our home beyond anything we imagined. Every detail was considered, every material chosen with extraordinary care. The result is a space that feels both timeless and deeply personal.",
  author: "Sarah & James K.", location: "Rosedale, Toronto", project: "Full Home Renovation", initials: "SK",
}

const STORIES = [
  { quote: "From the first meeting to the final reveal, the process was seamless. Our kitchen is now the heart of our home.", author: "Michael R.", location: "Forest Hill", project: "Kitchen Renovation", initials: "MR" },
  { quote: "The attention to detail is unmatched. They understood our vision immediately and elevated it beyond expectations.", author: "Priya & Arjun S.", location: "Yorkville", project: "Master Suite Renovation", initials: "PS" },
  { quote: "Professional, creative, and genuinely passionate about their craft. Our bathroom feels like a five-star hotel.", author: "Catherine L.", location: "The Annex", project: "Bathroom Remodeling", initials: "CL" },
  { quote: "We have worked with many contractors over the years. This was a completely different experience — truly white glove.", author: "Robert & Diana M.", location: "Lawrence Park", project: "Basement Finishing", initials: "RM" },
  { quote: "Every promise made during the consultation was delivered — on time, on budget, and beyond expectations.", author: "Jennifer & Thomas W.", location: "Summerhill", project: "Kitchen & Bath", initials: "JW" },
  { quote: "The team's eye for detail is extraordinary. Our basement went from unused to our favourite room in the house.", author: "David K.", location: "Moore Park", project: "Basement Finishing", initials: "DK" },
]

const STATS = [
  { num: '98%', label: 'Client Satisfaction' },
  { num: '500+', label: 'Projects Completed' },
  { num: '17', label: 'Years of Excellence' },
  { num: '5★', label: 'Average Review' },
]

export default function StoriesPage() {
  const [active, setActive] = useState(0)
  return (
    <main style={{ background: '#0a0908', minHeight: '100vh' }}>
      <style>{`.t-mini:hover { border-color: rgba(201,169,110,0.3) !important; background: rgba(201,169,110,0.04) !important; }`}</style>
      <Navbar />

      {/* Hero */}
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: 'clamp(120px,18vh,180px) 5vw 5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ width: '30px', height: '1px', background: '#c9a96e' }} />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e' }}>Client Stories</span>
        </div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 300, color: '#e8dcc8', lineHeight: 1.05, marginBottom: '1.25rem' }}>
          What Our Clients<br /><em style={{ color: '#e8d5b0' }}>Say</em>
        </h1>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: '#a09890', lineHeight: 1.8, maxWidth: '520px' }}>
          Real stories from families and businesses we have had the privilege of working with across Toronto.
        </p>
      </div>

      {/* Stats */}
      <div style={{ background: '#1c1b19', borderTop: '1px solid rgba(201,169,110,0.1)', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', padding: '3rem 5vw' }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '0 2rem', borderRight: i < 3 ? '1px solid rgba(201,169,110,0.12)' : 'none' }}>
              <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '3rem', fontWeight: 300, color: '#c9a96e', display: 'block', marginBottom: '0.5rem' }}>{s.num}</span>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a09890' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Featured + mini cards */}
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '6rem 5vw' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          {/* Featured */}
          <div style={{ padding: '3rem', border: '1px solid rgba(201,169,110,0.2)', background: '#1c1b19', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-0.5rem', left: '2rem', fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '8rem', lineHeight: 1, color: '#c9a96e', opacity: 0.1, pointerEvents: 'none', userSelect: 'none' }}>"</div>
            <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
              {[...Array(5)].map((_,i) => <div key={i} style={{ width: '8px', height: '8px', background: '#c9a96e', clipPath: 'polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)' }} />)}
            </div>
            <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.35rem', fontWeight: 300, fontStyle: 'italic', color: '#f5f0e8', lineHeight: 1.65, marginBottom: '2rem' }}>"{FEATURED.quote}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#2e2c29', border: '1px solid rgba(201,169,110,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond, Georgia, serif', color: '#c9a96e', flexShrink: 0 }}>{FEATURED.initials}</div>
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#f5f0e8', marginBottom: '2px' }}>{FEATURED.author}</p>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', color: '#a09890' }}>{FEATURED.location} · {FEATURED.project}</p>
              </div>
            </div>
          </div>

          {/* Mini cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {STORIES.map((t, i) => (
              <div key={i} className="t-mini" onClick={() => setActive(i)}
                style={{ padding: '1.5rem', border: `1px solid ${active===i ? 'rgba(201,169,110,0.35)' : 'rgba(255,255,255,0.06)'}`, background: active===i ? 'rgba(201,169,110,0.05)' : 'transparent', cursor: 'pointer', transition: 'all 0.3s', position: 'relative' }}>
                {active===i && <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '2px', background: '#c9a96e' }} />}
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '0.9rem', fontStyle: 'italic', color: active===i ? '#f5f0e8' : '#a09890', lineHeight: 1.6, marginBottom: '0.75rem', transition: 'color 0.3s' }}>"{t.quote}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#2e2c29', border: '1px solid rgba(201,169,110,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '0.7rem', color: '#c9a96e', flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: active===i ? '#f5f0e8' : '#a09890', marginBottom: '1px', transition: 'color 0.3s' }}>{t.author}</p>
                    <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', color: 'rgba(160,152,144,0.6)' }}>{t.location} · {t.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ borderTop: '1px solid rgba(201,169,110,0.1)', padding: '5rem 5vw', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 300, color: '#e8dcc8', lineHeight: 1.15, marginBottom: '1rem' }}>
            Ready to Create Your<br /><em style={{ color: '#e8d5b0' }}>Own Story?</em>
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: '#a09890', lineHeight: 1.8, marginBottom: '2rem' }}>
            Join the families who have trusted R&M Company to transform their spaces.
          </p>
          <Link href="/consultation" style={{ display: 'inline-block', padding: '1rem 3rem', background: '#c9a96e', color: '#0a0908', fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Book Free Consultation
          </Link>
        </div>
      </div>
    </main>
  )
}
