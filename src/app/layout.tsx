import type { Metadata } from 'next'
import './globals.css'
import Cursor from '@/components/Cursor'
import { Analytics } from '@vercel/analytics/react'

export const metadata: Metadata = {
  title: 'R&M Company — Luxury Renovation',
  description: 'Award-winning luxury renovation and interior architecture in Toronto.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        <Cursor />
        <Analytics />
      </body>
    </html>
  )
}
