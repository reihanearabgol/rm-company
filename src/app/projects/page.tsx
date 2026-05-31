'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const SECTIONS = [
  { id: 'portfolio', num: '01', title: 'Past Projects', sub: 'Explore our completed renovation portfolio.', items: [
    { title: 'Residential Projects', desc: 'Browse completed home renovations across Toronto — kitchens, baths, basements, and full home transformations.' },
    { title: 'Commercial Projects', desc: 'Office and commercial renovations that reflect your brand and elevate the client experience.' },
    { title: 'Before & After', desc: 'Side-by-side transformations showing the full impact of our renovation work.' },
  ]},
  { id: 'followup', num: '02', title: 'Project Follow-Up', sub: 'Track every stage of your active renovation.', items: [
    { title: 'Project Status', desc: 'View live updates on your renovation — milestones, schedules, and team communications in one place.' },
    { title: "Today's Progress", desc: 'Daily progress reports with photos from your project site, sent to your preferred channel.' },
    { title: 'Next Stage', desc: 'Know exactly what happens next — upcoming work, material deliveries, and schedules always visible.' },
    { title: 'Payment Status', desc: 'Clear payment milestones tied to project stages. No surprises, no ambiguity.' },
    { title: 'Schedule Update', desc: 'Request timeline adjustments or flag concerns directly through your dedicated project manager.' },
  ]},
]

function Card({ item }: { item: { title: string; desc: string } }) {
  return (
    <div style={{ padding: '2rem', background: '#141210', borderBottom: '1px solid rgba(201,169,110,0.07)', transition: 'background 0.3s' }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,169,110,0.05)' }}
      onMouseLeave={e => { e.currentTarget.style.background = '#141210' }}>
      <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.25rem', fontWeight: 300, color: '#e8dcc8', marginBottom: '0.75rem' }}>{item.title}</h3>
      <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.75 }}>{item.desc}</p>
    </div>
  )
}

export default function ProjectsPage() {
  return (
    <main style={{ background: '#0a0908', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: 'clamp(120px,18vh,180px) 5vw 8rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ width: '30px', height: '1px', background: '#c9a96e' }} />
          <span style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e' }}>Our Work</span>
        </div>
        <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 300, color: '#e8dcc8', lineHeight: 1.05, marginBottom: '1.25rem' }}>
          Projects &<br /><em style={{ color: '#e8d5b0' }}>Portfolio</em>
        </h1>
        <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '1rem', color: '#a09890', lineHeight: 1.8, maxWidth: '520px', marginBottom: '4rem' }}>
          Explore completed renovations and track your active project in real time.
        </p>
        {SECTIONS.map(s => (
          <div key={s.id} style={{ marginBottom: '5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '2rem', alignItems: 'baseline', marginBottom: '2rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(201,169,110,0.1)' }}>
              <span style={{ fontFamily: 'Georgia, serif', fontSize: '0.65rem', color: 'rgba(201,169,110,0.4)', fontStyle: 'italic', letterSpacing: '0.18em' }}>{s.num}</span>
              <div>
                <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(1.5rem,3vw,2.2rem)', fontWeight: 300, color: '#e8dcc8', marginBottom: '0.4rem' }}>{s.title}</h2>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.82rem', color: '#a09890' }}>{s.sub}</p>
              </div>
            </div>
            <div style={{ border: '1px solid rgba(201,169,110,0.1)' }}>
              {s.items.map(item => <Card key={item.title} item={item} />)}
            </div>
          </div>
        ))}
        <div style={{ textAlign: 'center' }}>
          <Link href="/consultation" style={{ display: 'inline-block', padding: '1rem 3rem', background: '#c9a96e', color: '#0a0908', fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none' }}>
            Start Your Project
          </Link>
        </div>
      </div>
    </main>
  )
}
