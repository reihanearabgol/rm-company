'use client'
'use client'
'use client'




import Image from 'next/image'

const REASONS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} style={{ width: '18px', height: '18px' }}>
        <path d="M12 2l3 7h7l-6 4.5 2.3 7L12 17l-6.3 3.5L8 13.5 2 9h7z" />
      </svg>
    ),
    title: 'Thoughtful Design',
    desc: 'Thoughtfully designed interiors inspired by timeless architecture and modern living.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} style={{ width: '18px', height: '18px' }}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: 'Structured Planning',
    desc: 'Clear communication and structured planning throughout every stage of the renovation process.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} style={{ width: '18px', height: '18px' }}>
        <path d="M9 12l2 2 4-4" />
        <path d="M21 12c0 4.97-4.03 9-9 9S3 16.97 3 12 7.03 3 12 3s9 4.03 9 9z" />
      </svg>
    ),
    title: 'Built to Last',
    desc: 'Built with long-lasting materials, thoughtful detailing, and careful execution.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} style={{ width: '18px', height: '18px' }}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Dedicated Project Care',
    desc: 'Every project is guided with dedicated attention from concept to completion.',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      id="whyus"
      style={{
        background: 'var(--color-charcoal)',
        padding: 'var(--section-padding-v) var(--section-padding-h)',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div className="why-grid">

          {/* Left — Image */}
          <div className="why-image-wrap">
            <div className="why-image">

              {/* Real photo */}
              <Image
                src="/images/why/material-board.jpg"
                alt="Luxury renovation materials — marble, wood, architectural finishes"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Cinematic dark overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(10,9,8,0.45) 0%, rgba(10,9,8,0.15) 100%)',
              }} />

              {/* Gold border */}
              <div style={{
                position: 'absolute',
                inset: 0,
                border: '1px solid rgba(201,169,110,0.18)',
                pointerEvents: 'none',
              }} />


            </div>
          </div>

          {/* Right — Content */}
          <div>
            <div className="label-row">
              <span className="t-label">Why R&amp;M Company</span>
            </div>
            <h2 className="t-display-l" style={{ marginBottom: '2.5rem' }}>
              Built on Trust<br />
              <em>&amp; Craft</em>
            </h2>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }}>
              {REASONS.map((reason, i) => (
                <li
                  key={reason.title}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '52px 1fr',
                    gap: '1.25rem',
                    alignItems: 'start',
                    padding: '1.75rem 0',
                    borderBottom: i < REASONS.length - 1
                      ? '1px solid rgba(201,169,110,0.1)'
                      : 'none',
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    border: '1px solid rgba(201,169,110,0.28)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gold)',
                    flexShrink: 0,
                  }}>
                    {reason.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 300,
                      fontSize: '1.2rem',
                      color: 'var(--color-ivory)',
                      marginBottom: '0.4rem',
                    }}>
                      {reason.title}
                    </h3>
                    <p className="t-body" style={{ fontSize: '0.875rem' }}>
                      {reason.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .why-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }
        @media (min-width: 1024px) {
          .why-grid { grid-template-columns: 1fr 1fr; gap: 6rem; }
        }
        .why-image-wrap { order: 2; }
        @media (min-width: 1024px) {
          .why-image-wrap { order: 1; }
        }
        .why-image {
          position: relative;
          height: clamp(320px, 46vw, 600px);
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}