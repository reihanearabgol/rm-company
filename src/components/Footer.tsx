'use client'
import Link from 'next/link'
import { RiInstagramLine, RiWhatsappLine, RiTelegramLine, RiMailLine } from 'react-icons/ri'

const NAV_LINKS = [
  {
    title: 'Services',
    links: [
      { label: 'Kitchen Remodeling', href: '/services' },
      { label: 'Bathroom Renovation', href: '/services' },
      { label: 'Basement Finishing', href: '/services' },
      { label: 'Flooring', href: '/services' },
      { label: 'Painting', href: '/colour-studio' },
      { label: 'Drywall', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Process', href: '/process' },
      { label: 'Projects', href: '/projects' },
      { label: 'Client Stories', href: '/stories' },
      { label: 'Colour Studio', href: '/colour-studio' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Consultation',
    links: [
      { label: 'Request a Quote', href: '/consultation' },
      { label: 'Book Site Visit', href: '/consultation' },
      { label: 'Send Project Photo', href: '/consultation' },
    ],
  },
]

function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  )
}

function IconTelegram() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 5L2 12.5l7 1"/>
      <path d="M21 5L9 13.5"/>
      <path d="M21 5l-2.5 15L9 13.5"/>
      <path d="M9 13.5V19l3.5-3"/>
    </svg>
  )
}

function IconEmail() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m2 7 10 7 10-7"/>
    </svg>
  )
}

const SOCIALS = [
  { label: 'Instagram', href: 'https://instagram.com/r_m_renovation_',            Icon: RiInstagramLine },
  { label: 'WhatsApp',  href: 'https://wa.me/16476144437',                         Icon: RiWhatsappLine  },
  { label: 'Telegram',  href: 'https://t.me/RMCompanyBot',                     Icon: RiTelegramLine  },
  { label: 'Email',     href: 'mailto:shakeri.mojtaba.official@gmail.com',         Icon: RiMailLine      },
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a0908', borderTop: '1px solid rgba(201,169,110,0.1)' }}>
      <style>{`
        .f-social {
          width: 42px; height: 42px;
          border: 1px solid rgba(201,169,110,0.18);
          border-radius: 6px;
          display: flex; align-items: center; justify-content: center;
          color: rgba(201,169,110,0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          background: transparent;
          flex-shrink: 0;
        }
        .f-social:hover {
          background: rgba(201,169,110,0.08);
          border-color: rgba(201,169,110,0.6);
          color: #c9a96e;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 24px rgba(201,169,110,0.12);
        }
        .f-link { color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.25s; font-family: DM Sans, sans-serif; font-size: 0.82rem; font-weight: 300; }
        .f-link:hover { color: #c9a96e; }
        .f-contact { color: #a09890; text-decoration: none; transition: opacity 0.25s; }
        .f-contact:hover { opacity: 0.65; }
        @media (max-width: 900px) {
          .f-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .f-nav { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '5rem 4rem 3rem' }}>
        <div className="f-grid" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '8rem', marginBottom: '4rem' }}>

          {/* ── Brand column ── */}
          <div>
            {/* Monogram */}
            <div style={{ marginBottom: '2rem' }}>
              <svg viewBox="0 0 64 64" width="56" height="56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="63" height="63" stroke="rgba(201,169,110,0.22)" strokeWidth="0.75"/>
                <line x1="0" y1="63" x2="63" y2="0" stroke="rgba(201,169,110,0.08)" strokeWidth="0.5"/>
                <text x="32" y="42" textAnchor="middle"
                  fontFamily="Cormorant Garamond, Georgia, serif"
                  fontSize="30" fontWeight="300" fill="#c9a96e" letterSpacing="1">RM</text>
              </svg>
            </div>

            <Link href="/" style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: '1.35rem', fontWeight: 300, color: '#e8dcc8', textDecoration: 'none', display: 'block', marginBottom: '0.35rem', letterSpacing: '0.03em' }}>
              R&M Company<span style={{ color: '#c9a96e' }}>.</span>
            </Link>

            <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.7rem', letterSpacing: '0.1em', color: '#a09890', marginBottom: '2rem' }}>
              Luxury Renovation · Toronto
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '2.5rem' }}>
              <a className="f-contact" href="tel:+16476144437"
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', fontWeight: 300, transition: 'opacity 0.25s' }}>
                +1 (647) 614-4437
              </a>
              <a className="f-contact" href="mailto:shakeri.mojtaba.official@gmail.com"
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.78rem', fontWeight: 300, transition: 'opacity 0.25s' }}>
                shakeri.mojtaba.official@gmail.com
              </a>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {SOCIALS.map(({ label, href, Icon }) => (
                <a key={label} href={href} title={label} className="f-social"
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer">
                  <Icon size={19} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Nav columns ── */}
          <div className="f-nav" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', paddingTop: '0.5rem' }}>
            {NAV_LINKS.map(col => (
              <div key={col.title}>
                <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#c9a96e', marginBottom: '1.5rem' }}>
                  {col.title}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                  {col.links.map(link => (
                    <Link key={link.label} href={link.href} className="f-link">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop: '1px solid rgba(201,169,110,0.07)', paddingTop: '1.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.62rem', color: 'rgba(255,255,255,0.22)', letterSpacing: '0.06em' }}>
            &copy; 2025 R&M Company Inc. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Privacy Policy', 'Terms of Service'].map(label => (
              <a key={label} href="#"
                style={{ fontFamily: 'DM Sans, sans-serif', fontSize: '0.62rem', color: 'rgba(255,255,255,0.22)', textDecoration: 'none', transition: 'color 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#c9a96e'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.22)'}>
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
