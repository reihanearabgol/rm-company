'use client'

import Link from 'next/link'

const COLS = [
  {
    title: 'Services',
    links: [
      { label: 'Basement Renovation',  href: '/services' },
      { label: 'Kitchen Remodeling',   href: '/services' },
      { label: 'Bathroom Renovation',  href: '/services' },
      { label: 'Flooring',             href: '/services' },
      { label: 'Painting',             href: '/colour-studio' },
      { label: 'Full Home Renovation', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Process',    href: '/process' },
      { label: 'Projects',       href: '/projects' },
      { label: 'Client Stories', href: '/stories' },
      { label: 'Colour Studio',  href: '/colour-studio' },
      { label: 'Contact',        href: '/contact' },
    ],
  },
]

const SOCIALS = [
  { label: 'Li', title: 'LinkedIn',  href: '#' },
  { label: 'Ig', title: 'Instagram', href: '#' },
  { label: 'Pt', title: 'Pinterest', href: '#' },
  { label: 'Ho', title: 'Houzz',     href: '#' },
]

const LEGAL = ['Privacy Policy', 'Terms of Service', 'Cookie Policy']

interface FooterProps {
  copyright?: string
  tagline?: string
  phone?: string
  email?: string
}

export default function Footer({
  copyright = '© 2024 R&M Company. All rights reserved.',
  tagline = 'Luxury Renovation · Toronto',
  phone = '+1 (250) 884-2728',
  email = 'arabgol.reihane.official@gmail.com',
}: FooterProps) {
  return (
    <footer style={{ background: 'var(--color-charcoal, #141210)', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '5rem 5vw 2.5rem' }}>
        <div className="footer-top">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link href="/" style={{ fontFamily: 'var(--font-display, Cormorant Garamond, Georgia, serif)', fontSize: '1.75rem', fontWeight: 300, color: 'var(--color-ivory, #e8dcc8)', textDecoration: 'none' }}>
              R&M Company<span style={{ color: '#c9a96e' }}>.</span>
            </Link>
            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: '260px' }}>
              {tagline}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <a href={`tel:${phone}`} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#c9a96e', textDecoration: 'none' }}>{phone}</a>
              <a href={`mailto:${email}`} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: '#c9a96e', textDecoration: 'none' }}>{email}</a>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} title={s.title} style={{ width: '36px', height: '36px', border: '1px solid rgba(201,169,110,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'border-color 0.25s ease, color 0.25s ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#c9a96e'; e.currentTarget.style.color = '#c9a96e' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
                >{s.label}</a>
              ))}
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#c9a96e', display: 'block', marginBottom: '1.25rem' }}>{col.title}</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.25s ease', display: 'block' }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#e8dcc8')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                    >{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ height: '1px', background: 'rgba(201,169,110,0.1)', margin: '3.5rem 0 1.75rem' }} />
        <div className="footer-bottom">
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)' }}>{copyright}</p>
          <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap' }}>
            {LEGAL.map((label) => (
              <a key={label} href="#" style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.25s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#e8dcc8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >{label}</a>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .footer-top { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem 2rem; }
        @media (min-width: 1024px) { .footer-top { grid-template-columns: 2fr 1fr 1fr; gap: 4rem; } }
        .footer-bottom { display: flex; flex-direction: column; gap: 1rem; }
        @media (min-width: 768px) { .footer-bottom { flex-direction: row; align-items: center; justify-content: space-between; } }
      `}</style>
    </footer>
  )
}
