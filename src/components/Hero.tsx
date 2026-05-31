'use client'
'use client'
'use client'
// 'use client'

// import { useRef } from 'react'
// import { motion } from 'framer-motion'

// const containerVariants = {
//   hidden: {},
//   visible: {
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.3,
//     },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1.1,
//       ease: [0.16, 1, 0.3, 1],
//     },
//   },
// }

// const scrollVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       delay: 1.8,
//       duration: 1,
//     },
//   },
// }

// export default function Hero() {
//   const videoRef = useRef<HTMLVideoElement>(null)

//   return (
//     <section
//       aria-label="Hero"
//       style={{
//         position:   'relative',
//         width:      '100%',
//         height:     '100svh',
//         minHeight:  '600px',
//         overflow:   'hidden',
//         display:    'flex',
//         alignItems: 'flex-end',
//       }}
//     >

//       {/* Video */}
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="auto"
//         aria-hidden="true"
//         style={{
//           position:       'absolute',
//           inset:          0,
//           width:          '100%',
//           height:         '100%',
//           objectFit:      'cover',
//           objectPosition: 'center',
//           zIndex:         0,
//           filter:         'saturate(0.75) brightness(0.9)',
//         }}
//       >
//         <source src="https://res.cloudinary.com/drqhlvcvv/video/upload/v1780246462/hero_a4narq.mp4" type="video/mp4" />
//       </video>

//       {/* Gradient overlay */}
//       <div
//         aria-hidden="true"
//         style={{
//           position: 'absolute',
//           inset:    0,
//           zIndex:   1,
//           background: `linear-gradient(
//             to top,
//             rgba(10, 9, 8, 0.92) 0%,
//             rgba(10, 9, 8, 0.55) 40%,
//             rgba(10, 9, 8, 0.20) 100%
//           )`,
//         }}
//       />

//       {/* Vignette */}
//       <div
//         aria-hidden="true"
//         style={{
//           position: 'absolute',
//           inset:    0,
//           zIndex:   1,
//           background: `radial-gradient(
//             ellipse at center,
//             transparent 40%,
//             rgba(10, 9, 8, 0.5) 100%
//           )`,
//         }}
//       />

//       {/* Content */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         style={{
//           position:      'relative',
//           zIndex:        2,
//           width:         '100%',
//           maxWidth:      '1320px',
//           margin:        '0 auto',
//           padding:       'var(--section-padding-h)',
//           paddingBottom: 'clamp(5rem, 10vh, 8rem)',
//         }}
//       >

//         {/* Label */}
//         <motion.div
//           variants={itemVariants}
//           className="label-row"
//           style={{ marginBottom: 'var(--space-6)' }}
//         >
//           <span className="t-label">
//             Luxury Renovation · Est. 2018
//           </span>
//         </motion.div>

//         {/* Headline */}
//         <motion.h1
//           variants={itemVariants}
//           className="t-hero"
//           style={{ maxWidth: '820px', marginBottom: 'var(--space-6)' }}
//         >
//           Where Space<br />
//           Becomes <em>Art</em>
//         </motion.h1>

//         {/* Subtitle */}
//         <motion.p
//           variants={itemVariants}
//           className="t-body-l"
//           style={{
//             maxWidth:     '460px',
//             marginBottom: 'var(--space-10)',
//             color:        'var(--color-ivory-dim)',
//           }}
//         >
//      We shape timeless interiors through elegance and restraint 
//      — spaces designed for modern living.
//         </motion.p>

//         {/* CTAs */}
//         <motion.div
//           variants={itemVariants}
//           style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}
//         >
//           <a href="/consultation" className="btn btn-gold">
//             Book Consultation
//           </a>
//           <a href="#projects" className="btn btn-ghost">
//             Discover Spaces
//           </a>
//         </motion.div> 

//       </motion.div>

//       {/* Scroll Indicator */}
//       <motion.div
//         variants={scrollVariants}
//         initial="hidden"
//         animate="visible"
//         aria-hidden="true"
//         style={{
//           position:      'absolute',
//           bottom:        'clamp(2rem, 4vh, 3rem)',
//           right:         'var(--section-padding-h)',
//           zIndex:        2,
//           display:       'flex',
//           flexDirection: 'column',
//           alignItems:    'center',
//           gap:           'var(--space-3)',
//         }}
//       >
//         <div
//           className="scroll-indicator"
//           style={{
//             width:      '1px',
//             height:     '56px',
//             background: 'linear-gradient(to bottom, var(--color-gold), transparent)',
//           }}
//         />
//         <span
//           className="t-label"
//           style={{
//             writingMode:   'vertical-rl',
//             color:         'var(--color-mist)',
//             fontSize:      '0.55rem',
//             letterSpacing: '0.2em',
//           }}
//         >
//           Scroll
//         </span>
//       </motion.div>

//     </section>
//   )
// }



import { motion } from 'framer-motion'

// Animation variants — defined outside component so they're never recreated
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2, // reduced from 0.3
    },
  },
}

const itemVariants = {
  hidden:   { opacity: 0, y: 30 },
  visible:  {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
}

const scrollVariants = {
  hidden:   { opacity: 0 },
  visible:  { opacity: 1, transition: { delay: 1.8, duration: 1 } },
}

export default function Hero() {
  return (
    <section
      aria-label="Hero"
      style={{
        position:   'relative',
        width:      '100%',
        height:     '100svh',
        minHeight:  '600px',
        overflow:   'hidden',
        display:    'flex',
        alignItems: 'flex-end',
      }}
    >
      {/* ── Video
          preload="none"  → browser downloads NOTHING until user interacts
          poster          → shows a static image instantly while video loads
          Use preload="metadata" if you need duration/dimensions on load.
          Never use preload="auto" — it blocks the entire page render.
      ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        
        aria-hidden="true"
        style={{
          position:       'absolute',
          inset:          0,
          width:          '100%',
          height:         '100%',
          objectFit:      'cover',
          objectPosition: 'center',
          zIndex:         0,
          filter:         'saturate(0.75) brightness(0.9)',
        }}
      >
        <source src="https://res.cloudinary.com/drqhlvcvv/video/upload/v1780246462/hero_a4narq.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset:    0,
          zIndex:   1,
          background: `linear-gradient(
            to top,
            rgba(10, 9, 8, 0.92) 0%,
            rgba(10, 9, 8, 0.55) 40%,
            rgba(10, 9, 8, 0.20) 100%
          )`,
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset:    0,
          zIndex:   1,
          background: `radial-gradient(
            ellipse at center,
            transparent 40%,
            rgba(10, 9, 8, 0.5) 100%
          )`,
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          position:      'relative',
          zIndex:        2,
          width:         '100%',
          maxWidth:      '1320px',
          margin:        '0 auto',
          padding:       'var(--section-padding-h)',
          paddingBottom: 'clamp(5rem, 10vh, 8rem)',
        }}
      >
        {/* Label */}
        <motion.div
          variants={itemVariants}
          className="label-row"
          style={{ marginBottom: 'var(--space-6)' }}
        >
          <span className="t-label">Luxury Renovation · Est. 2018</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="t-hero"
          style={{ maxWidth: '820px', marginBottom: 'var(--space-6)' }}
        >
          Where Space<br />
          Becomes <em>Art</em>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="t-body-l"
          style={{
            maxWidth:     '460px',
            marginBottom: 'var(--space-10)',
            color:        'var(--color-ivory-dim)',
          }}
        >
          We shape timeless interiors through elegance and restraint
          — spaces designed for modern living.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}
        >
          <a href="/consultation" className="btn btn-gold">Book Consultation</a>
          <a href="#projects" className="btn btn-ghost">Discover Spaces</a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        variants={scrollVariants}
        initial="hidden"
        animate="visible"
        aria-hidden="true"
        style={{
          position:      'absolute',
          bottom:        'clamp(2rem, 4vh, 3rem)',
          right:         'var(--section-padding-h)',
          zIndex:        2,
          display:       'flex',
          flexDirection: 'column',
          alignItems:    'center',
          gap:           'var(--space-3)',
        }}
      >
        <div style={{
          width:      '1px',
          height:     '56px',
          background: 'linear-gradient(to bottom, var(--color-gold), transparent)',
        }} />
        <span className="t-label" style={{
          writingMode:   'vertical-rl',
          color:         'var(--color-mist)',
          fontSize:      '0.55rem',
          letterSpacing: '0.2em',
        }}>
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
