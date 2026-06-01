'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { SiteContent, DEFAULT_CONTENT } from '@/lib/cms'

const SERVICE_DETAILS: Record<string, {
  tagline: string
  features: string[]
  gallery: string[]
  cta: string
  detail: string
  isPainting?: boolean
}> = {
  '1': {
    tagline: 'Luxury Kitchen Design',
    features: ['Custom Cabinetry & Millwork','Waterfall Islands','Quartz & Natural Stone','Architectural Lighting','Premium Appliance Integration','Hidden Storage Solutions'],
    gallery: ['Modern Minimal','Warm Contemporary','Dark Luxury','Penthouse Kitchen'],
    cta: 'Start Your Kitchen Consultation',
    detail: 'Our kitchen renovation service transforms the heart of your home into a curated culinary environment. Every element is designed with precision and crafted to the highest standards of luxury construction.',
  },
  '2': {
    tagline: 'Luxury Bathroom Design',
    features: ['Spa-Inspired Wet Rooms','Heated Floor Systems','Floating Vanities','Large Format Porcelain','Custom Glass Systems','Architectural Fixtures'],
    gallery: ['Hotel Inspired','Modern Spa','Dark Stone Luxury','Scandinavian Minimal'],
    cta: 'Book Bathroom Consultation',
    detail: 'We design bathrooms that transcend function and become private sanctuaries. Our bathroom renovations balance material excellence with spatial harmony.',
  },
  '3': {
    tagline: 'Complete Home Transformation',
    features: ['Full Project Management','Architectural Planning','Interior Design','Premium Materials','Trade Coordination','Quality Assurance'],
    gallery: ['Modern Home','Classic Revival','Contemporary Open','Luxury Estate'],
    cta: 'Plan Your Home Renovation',
    detail: 'Complete residential renovations from concept to completion — one dedicated team, zero compromise. We manage every detail so you can focus on the vision.',
  },
  '4': {
    tagline: 'Bespoke Cabinetry & Millwork',
    features: ['Custom Cabinet Design','Premium Hardware','Built-in Storage','Media Units','Walk-in Closets','Kitchen Islands'],
    gallery: ['Modern Minimal','Warm Wood','Dark Luxury','Shaker Classic'],
    cta: 'Design Your Custom Cabinetry',
    detail: 'Bespoke cabinetry designed for timeless functionality — handcrafted millwork built to last a lifetime. Every piece is made to order for your exact space.',
  },
}

const FALLBACK_DETAILS = {
  tagline: 'Premium Renovation Service',
  features: ['Expert Craftsmanship','Premium Materials','Dedicated Project Manager','5-Year Guarantee','On-Time Delivery','Quality Assurance'],
  gallery: ['Modern Design','Contemporary','Classic','Luxury'],
  cta: 'Book a Consultation',
  detail: 'Our team of experts delivers exceptional results with premium materials and meticulous attention to detail.',
}

export default function ServicesPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [services, setServices] = useState(DEFAULT_CONTENT.services)

  useEffect(() => {
    fetch('/api/owner/cms')
      .then(r => r.json())
      .then(data => {
        const content: SiteContent = data.published || data.draft || DEFAULT_CONTENT
        if (content.services?.length > 0) setServices(content.services)
      })
      .catch(() => {})
  }, [])

  const selectedService = services.find(s => s.id === selected)
  const selectedDetails = selected ? (SERVICE_DETAILS[selected] || FALLBACK_DETAILS) : null

  return (
    <main style={{ background: '#0a0908', minHeight: '100vh' }}>
      <Navbar />

      {/* Page hero */}
      <section style={{ paddingTop: 'clamp(120px, 18vh, 180px)', paddingBottom: 'clamp(4rem, 8vh, 6rem)', padding: 'clamp(120px, 18vh, 180px) 5vw clamp(4rem, 8vh, 6rem)', maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
          <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c9a96e' }} />
          <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.7)' }}>R&M Company</span>
        </div>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 300, color: '#e8dcc8', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
          Renovation<br /><em>Services</em>
        </h1>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1rem, 1.5vw, 1.15rem)', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, maxWidth: '520px', fontStyle: 'italic' }}>
          Explore our full range of renovation, design, and project support services.
        </p>
      </section>

      {/* Services list */}
      <section style={{ padding: '0 5vw', paddingBottom: 'clamp(4rem, 8vh, 7rem)', maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2px' }}>
          {services.map((service, i) => (
            <div key={service.id} onClick={() => setSelected(service.id)} style={{ background: '#141210', padding: '2.5rem 2.25rem', position: 'relative', overflow: 'hidden', cursor: 'pointer', transition: 'background 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,169,110,0.05)'; const line = e.currentTarget.querySelector('.s-line') as HTMLElement; if (line) line.style.width = '100%' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#141210'; const line = e.currentTarget.querySelector('.s-line') as HTMLElement; if (line) line.style.width = '0%' }}
            >
              <div className="s-line" style={{ position: 'absolute', bottom: 0, left: 0, height: '1px', width: '0%', background: '#c9a96e', transition: 'width 0.5s cubic-bezier(0.16,1,0.3,1)' }} />
              <span style={{ display: 'block', fontFamily: 'Georgia, serif', fontSize: '0.6rem', letterSpacing: '0.16em', color: 'rgba(201,169,110,0.4)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem', fontWeight: 300, color: '#e8dcc8', marginBottom: '0.875rem', lineHeight: 1.2 }}>
                {service.title}
              </h3>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {service.description}
              </p>
              <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.5)' }}>
                Explore →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Detail panel */}
      {selected && selectedService && selectedDetails && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)' }} onClick={() => setSelected(null)} />
          <div style={{ position: 'relative', width: 'min(680px, 100vw)', height: '100vh', background: '#1c1b19', borderLeft: '1px solid rgba(201,169,110,0.15)', overflowY: 'auto', zIndex: 1 }}>
            <div style={{ position: 'sticky', top: 0, background: '#1c1b19', borderBottom: '1px solid rgba(201,169,110,0.1)', padding: '1.75rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', zIndex: 2 }}>
              <div>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '0.25rem' }}>R&M Company</p>
                <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', fontWeight: 300, color: '#e8dcc8' }}>{selectedService.title}</h2>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: 'none', border: '1px solid rgba(201,169,110,0.2)', color: '#e8dcc8', width: '40px', height: '40px', cursor: 'pointer', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
            </div>
            <div style={{ padding: '2.5rem' }}>
              <p style={{ fontFamily: 'Georgia, serif', fontSize: '1rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: '2rem', fontStyle: 'italic' }}>
                {selectedDetails.tagline}
              </p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                {selectedDetails.detail}
              </p>
              <div style={{ marginBottom: '2.5rem' }}>
                <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '1.25rem' }}>What's Included</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {selectedDetails.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: '4px', height: '4px', background: '#c9a96e', borderRadius: '50%', flexShrink: 0 }} />
                      <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link href="/consultation" style={{ display: 'block', textAlign: 'center', padding: '1.1rem 2rem', background: '#c9a96e', color: '#0a0908', fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', textDecoration: 'none' }}>
                {selectedDetails.cta}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section style={{ padding: '5rem 5vw', borderTop: '1px solid rgba(201,169,110,0.1)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 300, color: '#e8dcc8', lineHeight: 1.15, marginBottom: '1.25rem' }}>
          Start Your Renovation<br /><em>Journey Today</em>
        </h2>
        <Link href="/consultation" style={{ display: 'inline-block', padding: '1rem 3rem', background: '#c9a96e', color: '#0a0908', fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', marginTop: '1.5rem' }}>
          Book a Free Consultation
        </Link>
      </section>
    </main>
  )
}
