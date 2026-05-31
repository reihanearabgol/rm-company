'use client'

interface FinalCTAProps {
  phone?: string
  email?: string
}

export default function FinalCTA({
  phone = '+1 (250) 884-2728',
  email = 'arabgol.reihane.official@gmail.com',
}: FinalCTAProps) {
  return (
    <section id="finalcta" style={{ background: '#0a0908', padding: '10rem 4rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(ellipse at center, rgba(201,169,110,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '80px', background: 'linear-gradient(to bottom, transparent, rgba(201,169,110,0.4))' }} />
      <div style={{ maxWidth: '700px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '30px', height: '1px', background: '#c9a96e' }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e' }}>Begin Your Journey</span>
          <div style={{ width: '30px', height: '1px', background: '#c9a96e' }} />
        </div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.05, color: '#f5f0e8', letterSpacing: '-0.01em', marginBottom: '1.5rem' }}>
          Your Dream Space<br />Awaits <em style={{ fontStyle: 'italic', color: '#e8d5b0' }}>Creation</em>
        </h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '1rem', fontWeight: 300, color: '#a09890', lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 2rem' }}>
          Join the families and visionaries who have trusted R&M Company to transform their most intimate spaces. Let us begin the conversation.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <a href={`tel:${phone}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', color: '#c9a96e', textDecoration: 'none' }}>{phone}</a>
          <span style={{ color: 'rgba(201,169,110,0.3)' }}>·</span>
          <a href={`mailto:${email}`} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', color: '#c9a96e', textDecoration: 'none' }}>{email}</a>
        </div>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="/consultation" style={{ display: 'inline-block', padding: '1.1rem 2.75rem', background: '#c9a96e', color: '#0a0908', fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#e8d5b0'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#c9a96e'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Book Free Consultation</a>
          <a href="#projects" style={{ display: 'inline-block', padding: '1.1rem 2.75rem', background: 'transparent', color: '#f5f0e8', fontFamily: "'DM Sans', sans-serif", fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', border: '1px solid rgba(245,240,232,0.3)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = '#f5f0e8'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(245,240,232,0.3)'}
          >Explore Our Work</a>
        </div>
        <p style={{ marginTop: '2rem', fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: '#a09890', letterSpacing: '0.06em' }}>Complimentary · No obligation · Greater Toronto Area</p>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '1px', height: '80px', background: 'linear-gradient(to top, transparent, rgba(201,169,110,0.4))' }} />
    </section>
  )
}
