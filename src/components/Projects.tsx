'use client'
'use client'
'use client'
// 'use client'

// import Image from 'next/image'

// const PROJECTS = [
//   {
//     location: 'Rosedale, Toronto',
//     title: 'The Thornwood\nResidence',
//     meta: 'Full Interior · 4,800 sq ft · 2024',
//     image: '/images/projects/thornwood.jpg',
//     color: '#1b2d3a',
//   },
//   {
//     location: 'Forest Hill, Toronto',
//     title: 'Casa Serena\nEstate',
//     meta: 'Full Renovation · 6,200 sq ft · 2024',
//     image: '/images/projects/casa-serena.jpg',
//     color: '#2a1d1d',
//   },
//   {
//     location: 'Yorkville, Toronto',
//     title: 'Penthouse\nAtelier',
//     meta: 'Interior · 3,100 sq ft · 2023',
//     image: '/images/projects/penthouse.jpg',
//     color: '#1c2b1c',
//   },
//   {
//     location: 'King West, Toronto',
//     title: 'The Meridian\nLoft',
//     meta: 'Conversion · 2,400 sq ft · 2023',
//     image: '/images/projects/meridian.jpg',
//     color: '#291d2e',
//   },
//   {
//     location: 'Bridle Path, Toronto',
//     title: 'Maison\nRiviera',
//     meta: 'Architecture · 8,000 sq ft · 2022',
//     image: '/images/projects/thornwood-2.jpg',
//     color: '#26201a',
//   },
// ]



// // const PROJECTS = [
// //   {
// //     label: 'Toronto • GTA',
// //     title: 'Architectural\nInteriors',
// //     meta: 'Interior transformations shaped through layout, light, material, and refined detail.',
// //     image: '/images/projects/thornwood.jpg',
// //     color: '#1b2d3a',
// //   },

// //   {
// //     label: 'Kitchen Renovation',
// //     title: 'Kitchen Design\n& Renovation',
// //     meta: 'Custom kitchens, cabinetry, islands, lighting, and premium finishes.',
// //     image: '/images/projects/casa-serena.jpg',
// //     color: '#2a1d1d',
// //   },

// //   {
// //     label: 'Bathroom Remodeling',
// //     title: 'Spa-Inspired\nBathrooms',
// //     meta: 'Walk-in showers, tile work, vanities, fixtures, and heated flooring.',
// //     image: '/images/projects/penthouse.jpg',
// //     color: '#1c2b1c',
// //   },

// //   {
// //     label: 'Cabinetry & Detail',
// //     title: 'Custom Millwork\n& Cabinetry',
// //     meta: 'Built-in storage, custom woodwork, shelving, trim, and architectural details.',
// //     image: '/images/projects/meridian.jpg',
// //     color: '#291d2e',
// //   },

// //   {
// //     label: 'Hamilton • Oshawa • GTA',
// //     title: 'Residential\nRenovation',
// //     meta: 'Basements, flooring, painting, layout improvements, and complete renovations.',
// //     image: '/images/projects/thornwood-2.jpg',
// //     color: '#26201a',
// //   },
// // ]

// export default function Projects() {
//   return (
//     <section
//       id="projects"
//       style={{
//         background: 'var(--color-charcoal)',
//         padding: 'var(--section-padding-v) 0',
//         overflow: 'hidden',
//       }}
//     >
//       <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 var(--section-padding-h)' }}>

//         {/* Header */}
//         <div
//           style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'flex-end',
//             flexWrap: 'wrap',
//             gap: '1.5rem',
//             marginBottom: '3.5rem',
//           }}
//         >
//           <div>
//             <div className="label-row">
//               <span className="t-label">Portfolio</span>
//             </div>
//             <h2 className="t-display-l">
//               Selected <em>Works</em>
//             </h2>
//           </div>
//           <a
//             href="#"
//             className="btn btn-ghost"
//             style={{ padding: '0.75rem 1.75rem' }}
//           >
//             View All Projects
//           </a>
//         </div>
//       </div>

//       {/* Horizontal Scroll Strip */}
//       <div
//         className="no-scrollbar"
//         style={{
//           display: 'flex',
//           gap: '2px',
//           overflowX: 'auto',
//           paddingLeft: 'var(--section-padding-h)',
//           paddingRight: 'var(--section-padding-h)',
//           paddingBottom: '1rem',
//         }}
//       >
//         {PROJECTS.map((project) => (
//           <article
//             key={project.title}
//             className="project-card"
//             style={{ background: project.color }}
//           >
//             {/* Image */}
//             <div className="project-image-wrap">
//               <Image
//                 src={project.image}
//                 alt={project.title.replace('\n', ' ')}
//                 fill
//                 style={{ objectFit: 'cover', transition: 'transform 0.75s cubic-bezier(0.16,1,0.3,1)' }}
//                 className="project-image"
//                 sizes="(max-width: 768px) 280px, 420px"
//               />
//             </div>

//             {/* Overlay */}
//             <div className="project-overlay" />

//             {/* Info */}
//             <div className="project-info">
//               <p
//                 className="t-label"
//                 style={{ marginBottom: '0.4rem' }}
//               >
//                 {project.location}
//               </p>
//               <h3
//                 style={{
//                   fontFamily: 'var(--font-display)',
//                   fontWeight: 300,
//                   fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
//                   color: 'var(--color-ivory)',
//                   lineHeight: 1.2,
//                   whiteSpace: 'pre-line',
//                 }}
//               >
//                 {project.title}
//               </h3>
//               <p
//                 className="project-meta t-label"
//                 style={{ color: 'var(--color-mist)', marginTop: '0.6rem' }}
//               >
//                 {project.meta}
//               </p>
//             </div>
//           </article>
//         ))}
//       </div>

//       <style>{`
//         .project-card {
//           position: relative;
//           overflow: hidden;
//           flex: 0 0 auto;
//           width: clamp(270px, 34vw, 420px);
//           height: clamp(380px, 52vw, 560px);
//           cursor: default;
//         }

//         .project-image-wrap {
//           position: absolute;
//           inset: 0;
//         }

//         .project-card:hover .project-image {
//           transform: scale(1.06) !important;
//         }

//         .project-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(
//             to top,
//             rgba(10,9,8,0.95) 0%,
//             transparent 60%
//           );
//         }

//         .project-info {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           right: 0;
//           padding: 2rem 2rem 2.25rem;
//           transform: translateY(12px);
//           transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
//         }

//         .project-card:hover .project-info {
//           transform: translateY(0);
//         }

//         .project-meta {
//           opacity: 0;
//           transition: opacity 0.4s ease 0.1s;
//         }

//         .project-card:hover .project-meta {
//           opacity: 1;
//         }
//       `}</style>
//     </section>
//   )
// }




import Image from 'next/image'

// const PROJECTS = [
//   {
//     location: 'Toronto Luxury Interiors',
//     title: 'Architectural\nInteriors',
//     meta: 'Space Planning · Interior Detailing · Premium Finishes',
//     image: '/images/projects/thornwood.jpg',
//     color: '#1b2d3a',
//   },
//   {
//     location: 'Custom Kitchen Design',
//     title: 'Kitchen\nRenovation',
//     meta: 'Custom Cabinetry · Stonework · Lighting Design',
//     image: '/images/projects/casa-serena.jpg',
//     color: '#2a1d1d',
//   },
//   {
//     location: 'Spa-Inspired Spaces',
//     title: 'Bathroom\nRemodeling',
//     meta: 'Tilework · Luxury Fixtures · Heated Flooring',
//     image: '/images/projects/penthouse.jpg',
//     color: '#1c2b1c',
//   },
//   {
//     location: 'Bespoke Millwork',
//     title: 'Custom\nCabinetry',
//     meta: 'Built-ins · Storage Systems · Wood Detailing',
//     image: '/images/projects/meridian.jpg',
//     color: '#291d2e',
//   },
//   {
//     location: 'Full Home Transformation',
//     title: 'Residential\nRenovation',
//     meta: 'Design & Build · Full Interior Renovation',
//     image: '/images/projects/thornwood-2.jpg',
//     color: '#26201a',
//   },
// ]


const PROJECTS = [
  {
    location: 'TORONTO LUXURY INTERIORS',
    title: 'Architectural\nInteriors',
    meta: 'Space planning · Interior detailing · Premium finishes',
    image: '/images/projects/architectural-interiors.jpg',
    color: '#1b2d3a',
  },
  {
    location: 'CUSTOM KITCHEN DESIGN',
    title: 'Kitchen\nRenovation',
    meta: 'Custom cabinetry · Stone surfaces · Luxury appliances',
    image: '/images/projects/kitchen-renovation.jpg',
    color: '#2a1d1d',
  },
  {
    location: 'SPA-INSPIRED SPACES',
    title: 'Bathroom\nRemodeling',
    meta: 'Luxury tilework · Heated flooring · Walk-in showers',
    image: '/images/projects/bathroom-remodeling.jpg',
    color: '#1c2b1c',
  },
  {
    location: 'BESPOKE MILLWORK',
    title: 'Custom\nCabinetry',
    meta: 'Built-ins · Storage systems · Wood detailing',
    image: '/images/projects/custom-cabinetry.jpg',
    color: '#291d2e',
  },
  {
    location: 'FULL HOME TRANSFORMATION',
    title: 'Residential\nRenovation',
    meta: 'Design & Build · Premium materials · Modern layouts',
    image: '/images/projects/residential-renovation.jpg',
    color: '#26201a',
  },
]



export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: 'var(--color-charcoal)',
        padding: 'var(--section-padding-v) 0',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 var(--section-padding-h)' }}>

        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginBottom: '3.5rem',
          }}
        >
          <div>
            <div className="label-row">
              <span className="t-label">Renovation Services</span>
            </div>
            <h2 className="t-display-l">
              Crafted <em>Spaces</em>
            </h2>
          </div>
          <a
            href="/consultation"
            className="btn btn-ghost"
            style={{ padding: '0.75rem 1.75rem' }}
          >
            Start Your Renovation
          </a>
        </div>
      </div>

      {/* Horizontal Scroll Strip */}
      <div
        className="no-scrollbar"
        style={{
          display: 'flex',
          gap: '2px',
          overflowX: 'auto',
          paddingLeft: 'var(--section-padding-h)',
          paddingRight: 'var(--section-padding-h)',
          paddingBottom: '1rem',
        }}
      >
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="project-card"
            style={{ background: project.color }}
          >
            <div className="project-image-wrap">
              <Image
                src={project.image}
                alt={project.title.replace('\n', ' ')}
                fill
                style={{ objectFit: 'cover', transition: 'transform 0.75s cubic-bezier(0.16,1,0.3,1)' }}
                className="project-image"
                sizes="(max-width: 768px) 280px, 420px"
              />
            </div>

            <div className="project-overlay" />

            <div className="project-info">
              <p className="t-label" style={{ marginBottom: '0.4rem' }}>
                {project.location}
              </p>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 300,
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
                  color: 'var(--color-ivory)',
                  lineHeight: 1.2,
                  whiteSpace: 'pre-line',
                }}
              >
                {project.title}
              </h3>
              <p
                className="project-meta t-label"
                style={{ color: 'var(--color-mist)', marginTop: '0.6rem' }}
              >
                {project.meta}
              </p>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .project-card {
          position: relative;
          overflow: hidden;
          flex: 0 0 auto;
          width: clamp(270px, 34vw, 420px);
          height: clamp(380px, 52vw, 560px);
          cursor: default;
        }
        .project-image-wrap { position: absolute; inset: 0; }
        .project-card:hover .project-image { transform: scale(1.06) !important; }
        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,9,8,0.95) 0%, transparent 60%);
        }
        .project-info {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 2rem 2rem 2.25rem;
          transform: translateY(12px);
          transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .project-card:hover .project-info { transform: translateY(0); }
        .project-meta { opacity: 0; transition: opacity 0.4s ease 0.1s; }
        .project-card:hover .project-meta { opacity: 1; }
      `}</style>
    </section>
  )
}