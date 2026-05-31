'use client'

// // import { useEffect, useRef } from 'react'

// // const SERVICES = [
// //   {
// //     num: '01',
// //     name: 'Architectural Interiors',
// //     desc: 'Refined architectural interiors for modern living — crafted for elegance, function, and lasting beauty.',
// //     icon: (
// //       <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={0.9} style={{ width: '44px', height: '44px' }}>
// //         <rect x="6" y="12" width="36" height="28" />
// //         <path d="M6 20h36M18 20v20M30 20v20" />
// //       </svg>
// //     ),
// //   },
// //   {
// //     num: '02',
// //     name: 'Kitchen Renovation',
// //     desc: 'Bespoke kitchen renovations crafted with precision, premium materials, and timeless craftsmanship.',
// //     icon: (
// //       <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={0.9} style={{ width: '44px', height: '44px' }}>
// //         <path d="M8 40V18L24 8l16 10v22M18 40V28h12v12" />
// //       </svg>
// //     ),
// //   },
// //   {
// //     num: '03',
// //     name: 'Bathroom Remodeling',
// //     desc: 'Spa-inspired bathroom remodeling with premium fixtures, natural stone, and flawless attention to detail.',
// //     icon: (
// //       <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={0.9} style={{ width: '44px', height: '44px' }}>
// //         <circle cx="24" cy="24" r="10" />
// //         <path d="M24 8v4M24 36v4M8 24h4M36 24h4" />
// //       </svg>
// //     ),
// //   },
// //   {
// //     num: '04',
// //     name: 'Custom Cabinetry',
// //     desc: 'Custom cabinetry designed for timeless functionality — handcrafted millwork built to last a lifetime.',
// //     icon: (
// //       <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={0.9} style={{ width: '44px', height: '44px' }}>
// //         <rect x="8" y="8" width="32" height="32" />
// //         <path d="M16 8v32M32 8v32M8 16h32M8 32h32" />
// //       </svg>
// //     ),
// //   },
// //   {
// //     num: '05',
// //     name: 'Residential Renovation',
// //     desc: 'Complete residential renovations from concept to completion — one dedicated team, zero compromise.',
// //     icon: (
// //       <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={0.9} style={{ width: '44px', height: '44px' }}>
// //         <path d="M8 40c0-8.84 7.16-16 16-16s16 7.16 16 16" />
// //         <path d="M24 24V10M18 16l6-6 6 6M6 40h36" />
// //       </svg>
// //     ),
// //   },
// // ]

// // export default function Services() {
// //   const sectionRef = useRef<HTMLElement>(null)

// //   useEffect(() => {
// //     const cards = sectionRef.current?.querySelectorAll('.service-card')
// //     if (!cards) return

// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             entry.target.classList.add('visible')
// //           }
// //         })
// //       },
// //       { threshold: 0.1 }
// //     )

// //     cards.forEach((card) => observer.observe(card))
// //     return () => observer.disconnect()
// //   }, [])

// //   return (
// //     <section
// //       ref={sectionRef}
// //       id="services"
// //       style={{
// //         background: 'var(--color-obsidian)',
// //         padding: 'var(--section-padding-v) var(--section-padding-h)',
// //       }}
// //     >
// //       <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

// //         {/* Header */}
// //         <div className="services-header" style={{ marginBottom: '4rem' }}>
// //           <div>
// //             <div className="label-row">
// //               <span className="t-label">Our Expertise</span>
// //             </div>
// //             <h2 className="t-display-l" style={{ marginTop: '0.5rem' }}>
// //               Crafted for<br />
// //               <em>Every Vision</em>
// //             </h2>
// //           </div>
// //           <p className="t-body" style={{ maxWidth: '480px', alignSelf: 'flex-end' }}>
// //             From intimate residences to landmark interiors, we bring
// //             architectural precision and artistic sensitivity to every project.
// //           </p>
// //         </div>

// //         {/* Grid */}
// //         <div className="services-grid">
// //           {SERVICES.map((service, i) => (
// //             <div
// //               key={service.num}
// //               className="service-card reveal"
// //               style={{ transitionDelay: `${i * 80}ms` }}
// //             >
// //               <div className="service-card-line" />
// //               <span
// //                 className="t-label"
// //                 style={{ opacity: 0.5, display: 'block', marginBottom: '1.75rem' }}
// //               >
// //                 {service.num}
// //               </span>
// //               <div style={{ color: 'var(--color-gold)', opacity: 0.35, marginBottom: '1.25rem' }}>
// //                 {service.icon}
// //               </div>
// //               <h3
// //                 style={{
// //                   fontFamily: 'var(--font-display)',
// //                   fontWeight: 300,
// //                   fontSize: '1.4rem',
// //                   lineHeight: 1.2,
// //                   color: 'var(--color-ivory)',
// //                   marginBottom: '0.875rem',
// //                 }}
// //               >
// //                 {service.name}
// //               </h3>
// //               <p className="t-body" style={{ fontSize: '0.875rem' }}>
// //                 {service.desc}
// //               </p>
// //               <div className="service-arrow">Explore →</div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>

// //       <style>{`
// //         .services-header {
// //           display: grid;
// //           grid-template-columns: 1fr;
// //           gap: 2rem;
// //           align-items: flex-end;
// //         }
// //         @media (min-width: 768px) {
// //           .services-header { grid-template-columns: 1fr 1fr; gap: 4rem; }
// //         }

// //         .services-grid {
// //           display: grid;
// //           grid-template-columns: 1fr;
// //           gap: 2px;
// //         }
// //         @media (min-width: 640px) {
// //           .services-grid { grid-template-columns: repeat(2, 1fr); }
// //         }
// //         @media (min-width: 1024px) {
// //           .services-grid { grid-template-columns: repeat(3, 1fr); }
// //         }

// //         .service-card {
// //           position: relative;
// //           overflow: hidden;
// //           background: var(--color-charcoal);
// //           padding: 2.5rem 2.25rem;
// //           transition: background 0.4s ease;
// //           cursor: default;
// //         }
// //         .service-card:hover { background: var(--color-ash); }

// //         .service-card-line {
// //           position: absolute;
// //           bottom: 0;
// //           left: 0;
// //           height: 1px;
// //           width: 0;
// //           background: var(--color-gold);
// //           transition: width 0.65s cubic-bezier(0.16, 1, 0.3, 1);
// //         }
// //         .service-card:hover .service-card-line { width: 100%; }

// //         .service-arrow {
// //           margin-top: 1.5rem;
// //           font-family: var(--font-sans);
// //           font-size: 0.6rem;
// //           letter-spacing: 0.18em;
// //           text-transform: uppercase;
// //           color: var(--color-gold);
// //           opacity: 0;
// //           transition: opacity 0.3s ease;
// //         }
// //         .service-card:hover .service-arrow { opacity: 1; }
// //       `}</style>
// //     </section>
// //   )
// // }


// 'use client'

// import { useEffect, useRef } from 'react'

// const SERVICES = [
//   {
//     num: '01',
//     name: 'Architectural Interiors',
//     desc: 'Refined architectural interiors for modern living — crafted for elegance, function, and lasting beauty.',
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={0.9} style={{ width: '44px', height: '44px' }}>
//         <rect x="6" y="12" width="36" height="28" />
//         <path d="M6 20h36M18 20v20M30 20v20" />
//       </svg>
//     ),
//   },
//   {
//     num: '02',
//     name: 'Kitchen Renovation',
//     desc: 'Bespoke kitchen renovations crafted with precision, premium materials, and timeless craftsmanship.',
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={0.9} style={{ width: '44px', height: '44px' }}>
//         <path d="M8 40V18L24 8l16 10v22M18 40V28h12v12" />
//       </svg>
//     ),
//   },
//   {
//     num: '03',
//     name: 'Bathroom Remodeling',
//     desc: 'Spa-inspired bathroom remodeling with premium fixtures, natural stone, and flawless attention to detail.',
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={0.9} style={{ width: '44px', height: '44px' }}>
//         <circle cx="24" cy="24" r="10" />
//         <path d="M24 8v4M24 36v4M8 24h4M36 24h4" />
//       </svg>
//     ),
//   },
//   {
//     num: '04',
//     name: 'Custom Cabinetry',
//     desc: 'Custom cabinetry designed for timeless functionality — handcrafted millwork built to last a lifetime.',
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={0.9} style={{ width: '44px', height: '44px' }}>
//         <rect x="8" y="8" width="32" height="32" />
//         <path d="M16 8v32M32 8v32M8 16h32M8 32h32" />
//       </svg>
//     ),
//   },
//   {
//     num: '05',
//     name: 'Residential Renovation',
//     desc: 'Complete residential renovations from concept to completion — one dedicated team, zero compromise.',
//     icon: (
//       <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={0.9} style={{ width: '44px', height: '44px' }}>
//         <path d="M8 40c0-8.84 7.16-16 16-16s16 7.16 16 16" />
//         <path d="M24 24V10M18 16l6-6 6 6M6 40h36" />
//       </svg>
//     ),
//   },
// ]

// export default function Services() {
//   const sectionRef = useRef<HTMLElement>(null)

//   useEffect(() => {
//     const cards = sectionRef.current?.querySelectorAll('.service-card')
//     if (!cards) return

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('visible')
//           }
//         })
//       },
//       { threshold: 0.1 }
//     )

//     cards.forEach((card) => observer.observe(card))
//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section
//       ref={sectionRef}
//       id="services"
//       style={{
//         background: 'var(--color-obsidian)',
//         padding: 'var(--section-padding-v) var(--section-padding-h)',
//       }}
//     >
//       <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

//         {/* Header */}
//         <div className="services-header" style={{ marginBottom: '4rem' }}>
//           <div>
//             <div className="label-row">
//               <span className="t-label">Our Expertise</span>
//             </div>
//             <h2 className="t-display-l" style={{ marginTop: '0.5rem' }}>
//               Crafted for<br />
//               <em>Every Vision</em>
//             </h2>
//           </div>
//           <p className="t-body" style={{ maxWidth: '480px', alignSelf: 'flex-end' }}>
//             From intimate residences to landmark interiors, we bring
//             architectural precision and artistic sensitivity to every project.
//           </p>
//         </div>

//         {/* Grid */}
//         <div className="services-grid">
//           {SERVICES.map((service, i) => (
//             <div
//               key={service.num}
//               className="service-card reveal"
//               style={{ transitionDelay: `${i * 80}ms` }}
//             >
//               <div className="service-card-line" />
//               <span
//                 className="t-label"
//                 style={{ opacity: 0.5, display: 'block', marginBottom: '1.75rem' }}
//               >
//                 {service.num}
//               </span>
//               <div style={{ color: 'var(--color-gold)', opacity: 0.35, marginBottom: '1.25rem' }}>
//                 {service.icon}
//               </div>
//               <h3
//                 style={{
//                   fontFamily: 'var(--font-display)',
//                   fontWeight: 300,
//                   fontSize: '1.4rem',
//                   lineHeight: 1.2,
//                   color: 'var(--color-ivory)',
//                   marginBottom: '0.875rem',
//                 }}
//               >
//                 {service.name}
//               </h3>
//               <p className="t-body" style={{ fontSize: '0.875rem' }}>
//                 {service.desc}
//               </p>
//               <div className="service-arrow">Explore →</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style>{`
//         .services-header {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 2rem;
//           align-items: flex-end;
//         }
//         @media (min-width: 768px) {
//           .services-header { grid-template-columns: 1fr 1fr; gap: 4rem; }
//         }

//         .services-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 2px;
//         }
//         @media (min-width: 640px) {
//           .services-grid { grid-template-columns: repeat(2, 1fr); }
//         }
//         @media (min-width: 1024px) {
//           .services-grid { grid-template-columns: repeat(3, 1fr); }
//         }

//         .service-card {
//           position: relative;
//           overflow: hidden;
//           background: var(--color-charcoal);
//           padding: 2.5rem 2.25rem;
//           transition: background 0.4s ease;
//           cursor: default;
//         }
//         .service-card:hover { background: var(--color-ash); }

//         .service-card-line {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           height: 1px;
//           width: 0;
//           background: var(--color-gold);
//           transition: width 0.65s cubic-bezier(0.16, 1, 0.3, 1);
//         }
//         .service-card:hover .service-card-line { width: 100%; }

//         .service-arrow {
//           margin-top: 1.5rem;
//           font-family: var(--font-sans);
//           font-size: 0.6rem;
//           letter-spacing: 0.18em;
//           text-transform: uppercase;
//           color: var(--color-gold);
//           opacity: 0;
//           transition: opacity 0.3s ease;
//         }
//         .service-card:hover .service-arrow { opacity: 1; }
//       `}</style>
//     </section>
//   )
// }



import Navbar from '@/components/Navbar'
import Link   from 'next/link'

export const metadata = {
  title: 'Renovation Services | R&M Company',
  description: 'Explore our full range of luxury renovation, design, and project support services.',
}

const SERVICE_GROUPS = [
  {
    id:       'renovation',
    number:   '01',
    title:    'Renovation Services',
    subtitle: 'Precision craftsmanship for every living space.',
    items: [
      { title: 'Kitchen Renovation',    desc: 'Bespoke kitchens designed around how you live — premium materials, custom millwork, and flawless execution.',    href: '#kitchen' },
      { title: 'Bathroom Remodeling',   desc: 'Spa-inspired bathrooms with natural stone, designer fixtures, and meticulous attention to every detail.',         href: '#bathroom' },
      { title: 'Flooring',              desc: 'Hardwood, engineered wood, tile, and luxury vinyl installed with precision and lasting quality.',                  href: '/colour-studio' },
      { title: 'Painting',              desc: 'Interior and exterior painting with curated designer palettes. Explore our Colour Studio for palette inspiration.', href: '/colour-studio' },
      { title: 'Basement Finishing',    desc: 'Transform unfinished basements into elegant, functional living spaces — home theatre, gym, or private suite.',     href: '#basement' },
      { title: 'Commercial Renovation', desc: 'Modern office and commercial renovation services that reflect your brand and elevate the client experience.',      href: '#commercial' },
    ],
  },
  {
    id:       'estimate',
    number:   '02',
    title:    'Free Estimate',
    subtitle: 'Start your renovation journey with zero obligation.',
    items: [
      { title: 'Request Estimate',   desc: 'Describe your project and receive a detailed scope and pricing estimate from our senior team within 48 hours.',   href: '/consultation' },
      { title: 'Send Your Budget',   desc: 'Share your budget range and we will craft a renovation plan that maximises impact without compromise.',            href: '/consultation' },
      { title: 'Upload Photos',      desc: 'Send us photos of your current space so our designers can begin visualising the transformation.',                  href: '/consultation' },
      { title: 'Book a Site Visit',  desc: 'Schedule an on-site consultation with a dedicated project lead — complimentary for all qualified projects.',       href: '/consultation' },
    ],
  },
  {
    id:       'followup',
    number:   '03',
    title:    'Project Follow-Up',
    subtitle: 'Full transparency at every stage of your renovation.',
    items: [
      { title: 'Project Status',    desc: 'View live updates on your renovation progress — milestones, schedules, and team communications in one place.',    href: '#followup' },
      { title: "Today's Progress",  desc: 'Daily progress reports with photos from your project site, sent directly to your preferred channel.',            href: '#followup' },
      { title: 'Next Stage',        desc: 'Know exactly what happens next — upcoming work, material deliveries, and team schedules always visible.',        href: '#followup' },
      { title: 'Payment Status',    desc: 'Clear payment milestones tied to project stages. No surprises, no ambiguity — just transparent financials.',    href: '#followup' },
      { title: 'Schedule Update',   desc: 'Request timeline adjustments or flag concerns directly through your dedicated project manager.',                href: '#followup' },
    ],
  },
  {
    id:       'photos',
    number:   '04',
    title:    'Send Photos & Documents',
    subtitle: 'Share everything your team needs to deliver perfection.',
    items: [
      { title: 'Upload Project Photos',   desc: 'Send before photos, inspiration images, or reference materials directly to your project file.',              href: '#photos' },
      { title: 'Upload Videos',           desc: 'Walk us through your space via video — our team reviews every detail before the first visit.',               href: '#photos' },
      { title: 'Upload Documents',        desc: 'Architectural drawings, floor plans, permits, and contracts — all stored securely and accessible anytime.',  href: '#photos' },
    ],
  },
  {
    id:       'design',
    number:   '05',
    title:    'Design Ideas',
    subtitle: 'Curated inspiration for every style and space.',
    items: [
      { title: 'Kitchen Ideas',    desc: 'From minimal Scandinavian to rich Mediterranean — explore kitchen design concepts tailored to your lifestyle.',         href: '#design' },
      { title: 'Bathroom Ideas',   desc: 'Spa retreats, powder rooms, and master ensuites — find the aesthetic that resonates with your vision.',               href: '#design' },
      { title: 'Flooring Ideas',   desc: 'Material boards and finish combinations to help you choose the perfect floor for every room.',                         href: '#design' },
      { title: 'Paint Colours',    desc: 'Explore our Colour Studio — a curated digital palette tool inspired by premium architectural colour systems.',         href: '/colour-studio' },
      { title: 'Modern Designs',   desc: 'Contemporary renovation concepts from our portfolio — clean lines, quality materials, and enduring sophistication.',   href: '#design' },
    ],
  },
]

export default function ServicesPage() {
  return (
    <main style={{ background: 'var(--color-obsidian, #0a0908)', minHeight: '100vh' }}>
      <Navbar />

      {/* ── Page hero ── */}
      <section style={{
        paddingTop:  'clamp(120px, 18vh, 180px)',
        paddingBottom: 'clamp(4rem, 8vh, 6rem)',
        padding:     'clamp(120px, 18vh, 180px) 5vw clamp(4rem, 8vh, 6rem)',
        maxWidth:    '1320px',
        margin:      '0 auto',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
          <div style={{
            width: '5px', height: '5px', borderRadius: '50%',
            background: '#c9a96e', boxShadow: '0 0 8px rgba(201,169,110,0.5)',
          }} />
          <span style={{
            fontFamily: 'var(--font-display, Georgia, serif)',
            fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'rgba(201,169,110,0.7)',
          }}>
            R&M Company
          </span>
        </div>

        <h1 style={{
          fontFamily:    'var(--font-display, Georgia, serif)',
          fontSize:      'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight:    300,
          color:         'var(--color-ivory, #e8dcc8)',
          lineHeight:    1.05,
          letterSpacing: '-0.02em',
          marginBottom:  '1.25rem',
        }}>
          Renovation<br /><em>Services</em>
        </h1>

        <p style={{
          fontFamily:   'var(--font-display, Georgia, serif)',
          fontSize:     'clamp(1rem, 1.5vw, 1.15rem)',
          color:        'rgba(255,255,255,0.38)',
          lineHeight:   1.7,
          maxWidth:     '520px',
          fontStyle:    'italic',
          letterSpacing: '0.02em',
        }}>
          Explore our full range of renovation, design, and project support services.
        </p>

        <div style={{
          width: '40px', height: '1px', marginTop: '2rem',
          background: 'linear-gradient(to right, rgba(201,169,110,0.45), transparent)',
        }} />
      </section>

      {/* ── Service groups ── */}
      {SERVICE_GROUPS.map((group, gi) => (
        <section
          key={group.id}
          id={group.id}
          style={{
            padding:      '0 5vw',
            paddingBottom: 'clamp(4rem, 8vh, 7rem)',
            maxWidth:     '1320px',
            margin:       '0 auto',
          }}
        >
          {/* Group header */}
          <div style={{
            display:       'grid',
            gridTemplateColumns: '80px 1fr',
            gap:           '2rem',
            alignItems:    'baseline',
            marginBottom:  '2.5rem',
            paddingBottom: '1.5rem',
            borderBottom:  '1px solid rgba(201,169,110,0.1)',
          }}>
            <span style={{
              fontFamily:    'var(--font-display, Georgia, serif)',
              fontSize:      '0.65rem',
              letterSpacing: '0.18em',
              color:         'rgba(201,169,110,0.4)',
              fontStyle:     'italic',
            }}>
              {group.number}
            </span>
            <div>
              <h2 style={{
                fontFamily:    'var(--font-display, Georgia, serif)',
                fontSize:      'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight:    300,
                color:         'var(--color-ivory, #e8dcc8)',
                letterSpacing: '-0.01em',
                marginBottom:  '0.4rem',
              }}>
                {group.title}
              </h2>
              <p style={{
                fontFamily:    'var(--font-display, Georgia, serif)',
                fontSize:      '0.82rem',
                color:         'rgba(255,255,255,0.3)',
                fontStyle:     'italic',
                letterSpacing: '0.02em',
              }}>
                {group.subtitle}
              </p>
            </div>
          </div>

          {/* Service cards grid */}
          <div style={{
            display:             'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap:                 '2px',
          }}>
            {group.items.map((item, ii) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  display:         'block',
                  padding:         '2rem 2rem 2rem',
                  background:      'var(--color-charcoal, #141210)',
                  textDecoration:  'none',
                  position:        'relative',
                  overflow:        'hidden',
                  transition:      'background 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(201,169,110,0.05)'
                  const line = e.currentTarget.querySelector('.card-line') as HTMLElement
                  if (line) line.style.width = '100%'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--color-charcoal, #141210)'
                  const line = e.currentTarget.querySelector('.card-line') as HTMLElement
                  if (line) line.style.width = '0%'
                }}
              >
                {/* Animated gold line */}
                <div className="card-line" style={{
                  position:   'absolute',
                  bottom:     0,
                  left:       0,
                  height:     '1px',
                  width:      '0%',
                  background: '#c9a96e',
                  transition: 'width 0.5s cubic-bezier(0.16,1,0.3,1)',
                }} />

                {/* Number */}
                <span style={{
                  display:       'block',
                  fontFamily:    'var(--font-display, Georgia, serif)',
                  fontSize:      '0.6rem',
                  letterSpacing: '0.16em',
                  color:         'rgba(201,169,110,0.35)',
                  fontStyle:     'italic',
                  marginBottom:  '1.5rem',
                }}>
                  {String(ii + 1).padStart(2, '0')}
                </span>

                {/* Title */}
                <h3 style={{
                  fontFamily:    'var(--font-display, Georgia, serif)',
                  fontSize:      '1.2rem',
                  fontWeight:    300,
                  color:         'var(--color-ivory, #e8dcc8)',
                  letterSpacing: '0.01em',
                  marginBottom:  '0.75rem',
                  lineHeight:    1.2,
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily:    'var(--font-display, Georgia, serif)',
                  fontSize:      '0.8rem',
                  color:         'rgba(255,255,255,0.32)',
                  lineHeight:    1.7,
                  letterSpacing: '0.02em',
                  marginBottom:  '1.5rem',
                }}>
                  {item.desc}
                </p>

                {/* Arrow */}
                <span style={{
                  fontFamily:    'var(--font-display, Georgia, serif)',
                  fontSize:      '0.6rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color:         'rgba(201,169,110,0.5)',
                }}>
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* ── CTA banner ── */}
      <section style={{
        padding:      '5rem 5vw',
        borderTop:    '1px solid rgba(201,169,110,0.1)',
        textAlign:    'center',
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <div style={{ width: '24px', height: '1px', background: 'rgba(201,169,110,0.3)' }} />
            <span style={{
              fontFamily:    'var(--font-display, Georgia, serif)',
              fontSize:      '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color:         'rgba(201,169,110,0.5)',
            }}>
              Ready to begin?
            </span>
            <div style={{ width: '24px', height: '1px', background: 'rgba(201,169,110,0.3)' }} />
          </div>

          <h2 style={{
            fontFamily:    'var(--font-display, Georgia, serif)',
            fontSize:      'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight:    300,
            color:         'var(--color-ivory, #e8dcc8)',
            lineHeight:    1.15,
            marginBottom:  '1.25rem',
          }}>
            Start Your Renovation<br /><em>Journey Today</em>
          </h2>

          <p style={{
            fontFamily:   'var(--font-display, Georgia, serif)',
            fontSize:     '0.9rem',
            color:        'rgba(255,255,255,0.3)',
            lineHeight:   1.7,
            fontStyle:    'italic',
            marginBottom: '2.5rem',
          }}>
            Book a complimentary consultation with our senior design team.
            No obligation — just a conversation about your vision.
          </p>

          <Link href="/consultation" style={{
            display:       'inline-block',
            padding:       '1rem 3rem',
            background:    '#c9a96e',
            color:         '#0a0908',
            fontFamily:    'var(--font-display, Georgia, serif)',
            fontSize:      '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            textDecoration:'none',
            transition:    'opacity 0.25s ease',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}