'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const STEPS = [
  { num: '01', title: 'Discovery', desc: 'We begin with a complimentary consultation to understand your vision, lifestyle, and goals. No obligation — just a genuine conversation about your space.', duration: '1-2 hours' },
  { num: '02', title: 'Design', desc: 'Our designers craft a detailed concept — materials, finishes, layouts, and 3D visualisations. You review, refine, and approve before anything begins.', duration: '1-2 weeks' },
  { num: '03', title: 'Planning', desc: 'Full project scheduling, permits, contractor coordination, and budget finalisation. Every detail is locked in before a single wall is touched.', duration: '1-3 weeks' },
  { num: '04', title: 'Build', desc: 'Expert tradespeople execute the work with precision, under daily management by your dedicated project lead. You receive daily progress updates.', duration: 'Project dependent' },
  { num: '05', title: 'Reveal', desc: 'A final walkthrough, snag resolution, and handover — with our 5-year workmanship guarantee. Your home, transformed.', duration: '1-2 days' },
]

export default function ProcessPage() {
  return (
    <main style={{ background: '#0a0908', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: 'clamp(120px,18vh,180px) 5vw 6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ width: '30px', height: '1px', background: '#c9a96e' }} />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e' }}>How We Work</span>
        </div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 300, color: '#e8dcc8', lineHeight: 1.05, marginBottom: '1.25rem' }}>
          Our<br /><em style={{ color: '#e8d5b0' }}>Process</em>
        </h1>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: '#a09890', lineHeight: 1.8, maxWidth: '520px', marginBottom: '5rem' }}>
          A structured, transparent process designed to make your renovation seamless — from first conversation to final reveal.
        </p>
        <div style={{ maxWidth: '800px' }}>
          {STEPS.map((step, i) => (
            <div key={step.num} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '3rem', paddingBottom: '4rem', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '0.5rem' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', border: '1px solid rgba(201,169,110,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0a0908', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.1rem', fontWeight: 300, color: '#c9a96e' }}>{step.num}</span>
                </div>
                {i < STEPS.length - 1 && <div style={{ width: '1px', flex: 1, minHeight: '60px', background: 'linear-gradient(to bottom, rgba(201,169,110,0.3), rgba(201,169,110,0.05))', marginTop: '1rem' }} />}
              </div>
              <div style={{ paddingTop: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 300, color: '#e8dcc8' }}>{step.title}</h2>
                  <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.12em', color: 'rgba(201,169,110,0.6)', border: '1px solid rgba(201,169,110,0.2)', padding: '4px 12px' }}>{step.duration}</span>
                </div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.92rem', color: '#a09890', lineHeight: 1.85 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: '#1c1b19', borderTop: '1px solid rgba(201,169,110,0.1)', borderBottom: '1px solid rgba(201,169,110,0.1)', padding: '3.5rem 5vw' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
          {[{ num: '5 Year', label: 'Workmanship Guarantee' }, { num: '96%', label: 'On-Time Delivery Rate' }, { num: '1', label: 'Dedicated Project Lead' }].map((s, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '0 2rem', borderRight: i < 2 ? '1px solid rgba(201,169,110,0.12)' : 'none' }}>
              <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '2.5rem', fontWeight: 300, color: '#c9a96e', display: 'block', marginBottom: '0.5rem' }}>{s.num}</span>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#a09890' }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: '6rem 5vw', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', fontWeight: 300, color: '#e8dcc8', lineHeight: 1.15, marginBottom: '1rem' }}>
            Ready to Begin<br /><em style={{ color: '#e8d5b0' }}>Your Journey?</em>
          </h2>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: '#a09890', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Book a complimentary discovery call and let us show you exactly how we work.
          </p>
          <Link href="/consultation" style={{ display: 'inline-block', padding: '1rem 3rem', background: '#c9a96e', color: '#0a0908', fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Book Free Consultation
          </Link>
        </div>
      </div>
    </main>
  )
}
