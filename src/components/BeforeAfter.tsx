'use client'

import Image from 'next/image'

// const PAIRS = [
//   {
//     // before: { src: '/images/before-after/before-1.jpeg', label: 'Before' },
//     // after:  { src: '/images/before-after/after-1.jpeg',  label: 'After' },
//     before: { src: '/images/before-after/Before-1.jpeg', label: 'Before' },
//     after: { src: '/images/before-after/after-1.jpg', label: 'After' },
//     title:  'Kitchen Transformation',
//     location: 'Rosedale, Toronto',
//   },
//   {
//     // before: { src: '/images/before-after/before-4.jpeg', label: 'Before' },
//     // after:  { src: '/images/before-after/after-4.jpeg',  label: 'After'  },
//     before: { src: '/images/before-after/Before-1.jpeg', label: 'Before' },
//     after: { src: '/images/before-after/after-1.jpg', label: 'After' },
//     title:  'Living Room Redesign',
//     location: 'Forest Hill, Toronto',
//   },
// ]


const PAIRS = [
  {
    before: { src: '/images/before-after/before-1.jpeg', label: 'Before' },
    after: { src: '/images/before-after/after-1.jpg', label: 'After' },
    title: 'Kitchen Transformation',
    location: 'Toronto',
  },
  {
    before: { src: '/images/before-after/before-4.jpg', label: 'Before' },
    after: { src: '/images/before-after/after-4.jpg', label: 'After' },
    title: 'Living Room Redesign',
    location: 'Toronto',
  },
  // {
  //   before: { src: '/images/before-after/before-3.jpeg', label: 'Before' },
  //   after: { src: '/images/before-after/after-3.jpeg', label: 'After' },
  //   title: 'Bathroom Remodeling',
  //   location: 'Toronto',
  // },
  // {
  //   before: { src: '/images/before-after/before-5.jpg', label: 'Before' },
  //   after: { src: '/images/before-after/after-5.jpg', label: 'After' },
  //   title: 'Basement Finishing',
  //   location: 'Toronto',
  // },
]


export default function BeforeAfter() {
  return (
    <section
      id="beforeafter"
      style={{
        background: 'var(--color-obsidian)',
        padding: 'var(--section-padding-v) var(--section-padding-h)',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="label-row">
            <span className="t-label">Transformation</span>
          </div>
          <h2 className="t-display-l">
            The R&M<br />
            <em>Difference</em>
          </h2>
        </div>

        {/* Pairs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {PAIRS.map((pair) => (
            <div key={pair.title} className="ba-pair">

              {/* Before */}
              <div className="ba-panel ba-before">
                <div className="ba-image-wrap">
                  <Image
                    src={pair.before.src}
                    alt={`${pair.title} — Before`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="ba-image"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="ba-overlay" />
                <div className="ba-content">
                  <span
                    className="ba-tag"
                    style={{
                      borderColor: 'var(--color-mist)',
                      color: 'var(--color-mist)',
                    }}
                  >
                    Before
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 300,
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      color: 'var(--color-ivory)',
                    }}
                  >
                    The Original Space
                  </h3>
                </div>
              </div>

              {/* Gold Divider */}
              <div className="ba-divider">
                <div className="ba-divider-dot">↔</div>
              </div>

              {/* After */}
              <div className="ba-panel ba-after">
                <div className="ba-image-wrap">
                  <Image
                    src={pair.after.src}
                    alt={`${pair.title} — After`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="ba-image"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="ba-overlay" />
                <div className="ba-content">
                  <span
                    className="ba-tag"
                    style={{
                      borderColor: 'var(--color-gold)',
                      color: 'var(--color-gold)',
                    }}
                  >
                    After
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 300,
                      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                      color: 'var(--color-ivory)',
                    }}
                  >
                    Reimagined by R&M
                  </h3>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="#projects" className="btn btn-ghost" style={{ padding: '1rem 2.5rem' }}>
            Explore All Transformations
          </a>
        </div>
      </div>

      <style>{`
        .ba-pair {
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2px;
        }
        @media (min-width: 768px) {
          .ba-pair {
            grid-template-columns: 1fr 1fr;
          }
        }

        .ba-panel {
          position: relative;
          overflow: hidden;
          height: clamp(280px, 42vw, 500px);
        }

        .ba-image-wrap {
          position: absolute;
          inset: 0;
        }

        .ba-image {
          transition: transform 0.75s cubic-bezier(0.16,1,0.3,1) !important;
        }
        .ba-panel:hover .ba-image {
          transform: scale(1.04) !important;
        }

        .ba-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10,9,8,0.9) 0%,
            transparent 55%
          );
        }

        .ba-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 2.25rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .ba-tag {
          display: inline-block;
          border: 1px solid;
          padding: 0.3rem 0.85rem;
          font-family: var(--font-sans);
          font-size: 0.58rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          width: fit-content;
        }

        .ba-divider {
          display: none;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          background: var(--color-gold);
          z-index: 10;
        }
        @media (min-width: 768px) {
          .ba-divider {
            display: block;
          }
        }

        .ba-divider-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--color-gold);
          color: var(--color-obsidian);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
        }
      `}</style>
    </section>
  )
}