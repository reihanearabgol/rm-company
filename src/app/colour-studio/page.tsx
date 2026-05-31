'use client'

import Navbar from '@/components/Navbar'
import ColourStudio from '@/components/ColourStudio'

export default function ColourStudioPage() {
  return (
    <main style={{ background: '#0a0908', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <ColourStudio />
      </div>
    </main>
  )
}
