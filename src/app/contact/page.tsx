'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <main style={{ background: '#0a0908', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: 'clamp(120px,18vh,180px) 5vw 8rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ width: '30px', height: '1px', background: '#c9a96e' }} />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e' }}>Get In Touch</span>
        </div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 300, color: '#e8dcc8', lineHeight: 1.05, marginBottom: '1.25rem' }}>
          Contact<br /><em style={{ color: '#e8d5b0' }}>Us</em>
        </h1>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: '#a09890', lineHeight: 1.8, maxWidth: '520px', marginBottom: '5rem' }}>
          Our team is available Monday to Friday, 9am to 6pm. We respond within four business hours.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px,1fr))', gap: '2px', marginBottom: '4rem' }}>
          {[
            { label: 'Phone', value: '+1 (647) 614-4437', sub: 'Mon–Fri, 9am–6pm' },
            { label: 'Email', value: 'shakeri.mojtaba.official@gmail.com', sub: 'We reply within 4 hours' },
            { label: 'Location', value: 'Toronto, Ontario', sub: 'Greater Toronto Area' },
            { label: 'Working Hours', value: 'Mon – Fri', sub: '9:00 AM – 6:00 PM EST' },
          ].map(item => (
            <div key={item.label} style={{ padding: '2.5rem', background: '#1c1b19', border: '1px solid rgba(201,169,110,0.1)' }}>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '0.75rem' }}>{item.label}</p>
              <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.3rem', fontWeight: 300, color: '#e8dcc8', marginBottom: '0.4rem' }}>{item.value}</p>
              <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.75rem', color: '#a09890' }}>{item.sub}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <Link href="/consultation" style={{ display: 'inline-block', padding: '1rem 3rem', background: '#c9a96e', color: '#0a0908', fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Book Free Consultation
          </Link>
        </div>
      </div>
    </main>
  )
}
