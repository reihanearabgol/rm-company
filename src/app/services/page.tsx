'use client'
import Navbar from '@/components/Navbar'
import Link from 'next/link'
import { useState } from 'react'

const SERVICES = [
  {
    id: 'kitchen',
    num: '01',
    title: 'Kitchen Remodeling',
    tagline: 'Luxury Kitchen Design',
    desc: 'Bespoke kitchens designed around how you live — premium materials, custom millwork, and flawless execution.',
    features: ['Custom Cabinetry & Millwork','Waterfall Islands','Quartz & Natural Stone','Architectural Lighting','Premium Appliance Integration','Hidden Storage Solutions'],
    gallery: ['Modern Minimal','Warm Contemporary','Dark Luxury','Penthouse Kitchen','Open Concept Living'],
    cta: 'Start Your Kitchen Consultation',
    detail: 'Our kitchen renovation service transforms the heart of your home into a curated culinary environment. Every element — from bespoke cabinetry to integrated appliance systems — is designed with precision and crafted to the highest standards of luxury construction.',
  },
  {
    id: 'bathroom',
    num: '02',
    title: 'Bathroom Renovation',
    tagline: 'Luxury Bathroom Design',
    desc: 'Spa-inspired bathrooms with natural stone, designer fixtures, and meticulous attention to every detail.',
    features: ['Spa-Inspired Wet Rooms','Heated Floor Systems','Floating Vanities','Large Format Porcelain','Custom Glass Systems','Architectural Fixtures'],
    gallery: ['Hotel Inspired','Modern Spa','Dark Stone Luxury','Scandinavian Minimal'],
    cta: 'Book Bathroom Consultation',
    detail: 'We design bathrooms that transcend function and become private sanctuaries. Drawing inspiration from the world\'s finest finest hotels and spas, our bathroom renovations balance material excellence with spatial harmony.',
  },
  {
    id: 'flooring',
    num: '03',
    title: 'Flooring',
    tagline: 'Premium Flooring Collection',
    desc: 'Hardwood, engineered wood, tile, and luxury vinyl installed with precision and lasting quality.',
    features: ['Wide Plank Oak','Herringbone Patterns','Engineered Hardwood','Luxury Vinyl Plank','Large Format Tile','Natural Stone'],
    gallery: ['Classic Oak','Modern Dark','Pattern Floors','Stone & Marble'],
    cta: 'Explore Flooring Options',
    detail: 'The foundation of every beautiful interior begins underfoot. Our flooring specialists source and install premium materials that elevate every room — from wide plank white oak to dramatic large format stone.',
  },
  {
    id: 'painting',
    num: '04',
    title: 'Painting',
    tagline: 'Curated Colour Studio',
    desc: 'Interior and exterior painting with curated designer palettes. Explore our Colour Studio.',
    features: ['Designer Colour Consultation','Interior Painting','Exterior Painting','Luxury Finishes','Accent Walls','Architectural Colour Planning'],
    gallery: ['Warm Neutrals','Deep Tones','Monochromatic','Bold Accents'],
    cta: 'Request Colour Consultation',
    detail: 'Colour is the most transformative element in any interior. Our painting service combines technical mastery with a deep understanding of light, space, and material interaction to create environments that feel both intentional and effortless.',
    isPainting: true,
  },
  {
    id: 'drywall',
    num: '05',
    title: 'Drywall',
    tagline: 'Architectural Drywall Systems',
    desc: 'Expert drywall installation and finishing — smooth, precise, and ready for the perfect finish.',
    features: ['Level 5 Smooth Finish','Custom Ceiling Details','Cove Lighting Preparation','Modern Wall Systems','Curved Feature Walls','Premium Finish Standards'],
    gallery: ['Smooth Finish','Coffered Ceilings','Feature Walls','Cove Details'],
    cta: 'Request Project Review',
    detail: 'Exceptional interiors begin with flawless walls. Our drywall team delivers Level 5 smooth finishes and architectural details — from cove ceiling preparations to custom feature wall systems — that form the perfect canvas for your vision.',
  },
  {
    id: 'basement',
    num: '06',
    title: 'Basement Finishing',
    tagline: 'Luxury Basement Transformation',
    desc: 'Transform unfinished basements into elegant, functional living spaces — home theatre, gym, or private suite.',
    features: ['Home Theatre Systems','Private Gym','Entertainment Lounge','Guest Suite','Home Office','Wine Display & Cellar'],
    gallery: ['Home Cinema','Gym Studio','Entertainment Bar','Guest Retreat'],
    cta: 'Plan Your Basement Transformation',
    detail: 'The lower level of your home holds extraordinary potential. We transform unfinished basements into purposeful, beautifully designed spaces — from private home cinemas and wellness studios to sophisticated entertainment lounges and guest suites.',
  },
  {
    id: 'commercial',
    num: '07',
    title: 'Commercial Renovation',
    tagline: 'Commercial Design & Construction',
    desc: 'Modern office and commercial renovation services that reflect your brand and elevate the client experience.',
    features: ['Office & Studio Spaces','Retail Environments','Hospitality Projects','Brand-Focused Interiors','Tenant Improvements','Project Coordination'],
    gallery: ['Corporate Office','Retail Space','Restaurant & Hospitality','Studio & Showroom'],
    cta: 'Discuss Your Commercial Project',
    detail: 'Commercial spaces communicate your brand before a single word is spoken. We design and build environments that balance operational efficiency with exceptional aesthetic quality — creating spaces where your team thrives and clients take notice.',
  },
]

type Service = typeof SERVICES[0] & { isPainting?: boolean }

function ServicePanel({ service, onClose }: { service: Service; onClose: () => void }) {
  return (
    <div style={{ position:'fixed', inset:0, zIndex:1000, display:'flex', alignItems:'flex-start', justifyContent:'flex-end' }}>
      {/* Backdrop */}
      <div style={{ position:'absolute', inset:0, background:'rgba(0,0,0,0.7)' }} onClick={onClose} />
      {/* Panel */}
      <div style={{ position:'relative', width:'min(680px, 100vw)', height:'100vh', background:'#1c1b19', borderLeft:'1px solid rgba(201,169,110,0.15)', overflowY:'auto', zIndex:1 }}>

        {/* Panel header */}
        <div style={{ position:'sticky', top:0, background:'#1c1b19', borderBottom:'1px solid rgba(201,169,110,0.1)', padding:'1.75rem 2.5rem', display:'flex', alignItems:'center', justifyContent:'space-between', zIndex:2 }}>
          <div>
            <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.6rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a96e', marginBottom:'0.25rem' }}>R&M Company</p>
            <h2 style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'1.5rem', fontWeight:300, color:'#e8dcc8' }}>{service.tagline}</h2>
          </div>
          <button onClick={onClose} style={{ background:'none', border:'1px solid rgba(201,169,110,0.2)', color:'rgba(255,255,255,0.4)', cursor:'pointer', width:'36px', height:'36px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1rem', transition:'all 0.25s', borderRadius:'50%' }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor='#c9a96e'; e.currentTarget.style.color='#c9a96e' }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor='rgba(201,169,110,0.2)'; e.currentTarget.style.color='rgba(255,255,255,0.4)' }}>&#x2715;</button>
        </div>

        <div style={{ padding:'2.5rem' }}>

          {/* Hero intro */}
          <div style={{ marginBottom:'2.5rem', paddingBottom:'2.5rem', borderBottom:'1px solid rgba(201,169,110,0.1)' }}>
            <span style={{ fontFamily:'Georgia, serif', fontSize:'0.6rem', color:'rgba(201,169,110,0.4)', fontStyle:'italic', letterSpacing:'0.12em' }}>{service.num}</span>
            <h3 style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'2.2rem', fontWeight:300, color:'#e8dcc8', lineHeight:1.1, margin:'0.5rem 0 1rem' }}>{service.title}</h3>
            <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.9rem', fontWeight:300, color:'#a09890', lineHeight:1.85 }}>{service.detail}</p>
          </div>

          {/* Signature features */}
          <div style={{ marginBottom:'2.5rem', paddingBottom:'2.5rem', borderBottom:'1px solid rgba(201,169,110,0.1)' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1.5rem' }}>
              <div style={{ width:'20px', height:'1px', background:'#c9a96e' }} />
              <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.6rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a96e' }}>Signature Features</span>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px' }}>
              {service.features.map(f=>(
                <div key={f} style={{ display:'flex', alignItems:'center', gap:'0.75rem', padding:'0.75rem 1rem', border:'1px solid rgba(201,169,110,0.1)', background:'rgba(10,9,8,0.5)' }}>
                  <div style={{ width:'4px', height:'4px', borderRadius:'50%', background:'#c9a96e', flexShrink:0 }} />
                  <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.78rem', color:'rgba(255,255,255,0.6)' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Design gallery categories */}
          <div style={{ marginBottom:'2.5rem', paddingBottom:'2.5rem', borderBottom:'1px solid rgba(201,169,110,0.1)' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1.5rem' }}>
              <div style={{ width:'20px', height:'1px', background:'#c9a96e' }} />
              <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.6rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a96e' }}>Design Styles</span>
            </div>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
              {service.gallery.map(g=>(
                <span key={g} style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'0.9rem', fontWeight:300, color:'#e8dcc8', border:'1px solid rgba(201,169,110,0.2)', padding:'0.5rem 1.25rem', letterSpacing:'0.02em' }}>{g}</span>
              ))}
            </div>
          </div>

          {/* Colour Studio — Painting only */}
          {service.isPainting && (
            <div style={{ marginBottom:'2.5rem', paddingBottom:'2.5rem', borderBottom:'1px solid rgba(201,169,110,0.1)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1.5rem' }}>
                <div style={{ width:'20px', height:'1px', background:'#c9a96e' }} />
                <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.6rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a96e' }}>Colour Studio</span>
              </div>
              <p style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'0.95rem', color:'#a09890', fontStyle:'italic', lineHeight:1.8, marginBottom:'1.5rem' }}>
                Explore our curated paint collection and find the perfect palette for your space.
              </p>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'8px', marginBottom:'1.25rem' }}>
                {[
                  { label:'Explore Colour', icon:'◈', desc:'Browse 100+ curated colours' },
                  { label:'Inspiration', icon:'◇', desc:'Mood boards and palettes' },
                  { label:'Paint an Image', icon:'◉', desc:'Visualise on your space' },
                  { label:'Mood Categories', icon:'◈', desc:'By feeling and atmosphere' },
                  { label:'Use Our Photo', icon:'▷', desc:'See colours in real rooms' },
                  { label:'Upload Your Photo', icon:'△', desc:'Apply to your own space' },
                ].map(item => (
                  <div key={item.label} style={{ display:'flex', alignItems:'center', gap:'0.75rem', padding:'0.85rem 1rem', border:'1px solid rgba(201,169,110,0.1)', background:'rgba(10,9,8,0.5)', cursor:'pointer', transition:'border-color 0.25s' }}
                    onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(201,169,110,0.35)'}
                    onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(201,169,110,0.1)'}>
                    <span style={{ color:'#c9a96e', fontSize:'0.75rem', flexShrink:0 }}>{item.icon}</span>
                    <div>
                      <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.72rem', color:'rgba(255,255,255,0.7)', marginBottom:'1px' }}>{item.label}</p>
                      <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.62rem', color:'rgba(255,255,255,0.3)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <a href="/colour-studio" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'0.75rem', padding:'1rem', border:'1px solid rgba(201,169,110,0.3)', color:'#c9a96e', fontFamily:'DM Sans, sans-serif', fontSize:'0.65rem', letterSpacing:'0.15em', textTransform:'uppercase', textDecoration:'none', transition:'all 0.25s', background:'transparent' }}
                onMouseEnter={e=>{ e.currentTarget.style.background='rgba(201,169,110,0.08)'; e.currentTarget.style.borderColor='#c9a96e' }}
                onMouseLeave={e=>{ e.currentTarget.style.background='transparent'; e.currentTarget.style.borderColor='rgba(201,169,110,0.3)' }}>
                Open Full Colour Studio &#8594;
              </a>
            </div>
          )}

          {/* Process overview */}
          <div style={{ marginBottom:'2.5rem', paddingBottom:'2.5rem', borderBottom:'1px solid rgba(201,169,110,0.1)' }}>
            <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'1.5rem' }}>
              <div style={{ width:'20px', height:'1px', background:'#c9a96e' }} />
              <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.6rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a96e' }}>Our Process</span>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
              {[['Discovery','Complimentary consultation to understand your vision and goals'],['Design','Concept development, material selection, and 3D visualisation'],['Build','Expert execution under dedicated project management'],['Reveal','Final walkthrough and handover with 5-year guarantee']].map(([step, desc], i)=>(
                <div key={step} style={{ display:'flex', gap:'1.25rem', alignItems:'flex-start' }}>
                  <div style={{ width:'28px', height:'28px', border:'1px solid rgba(201,169,110,0.3)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#c9a96e', fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'0.75rem', flexShrink:0 }}>0{i+1}</div>
                  <div>
                    <p style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'1rem', fontWeight:300, color:'#e8dcc8', marginBottom:'2px' }}>{step}</p>
                    <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.75rem', color:'rgba(255,255,255,0.35)', lineHeight:1.6 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign:'center', paddingTop:'0.5rem' }}>
            <p style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'1.3rem', fontWeight:300, color:'#e8dcc8', fontStyle:'italic', marginBottom:'1.5rem' }}>
              Ready to discuss your project?
            </p>
            <Link href="/consultation"
              style={{ display:'inline-block', padding:'1rem 3rem', background:'#c9a96e', color:'#0a0908', fontFamily:'DM Sans, sans-serif', fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase', textDecoration:'none', transition:'background 0.3s, transform 0.3s' }}
              onMouseEnter={e=>{ e.currentTarget.style.background='#e8d5b0'; e.currentTarget.style.transform='translateY(-2px)' }}
              onMouseLeave={e=>{ e.currentTarget.style.background='#c9a96e'; e.currentTarget.style.transform='translateY(0)' }}>
              {service.cta}
            </Link>
            <p style={{ marginTop:'0.75rem', fontFamily:'DM Sans, sans-serif', fontSize:'0.65rem', color:'rgba(255,255,255,0.2)' }}>Complimentary consultation · No obligation</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [selected, setSelected] = useState<Service | null>(null)
  return (
    <main style={{ background:'#0a0908', minHeight:'100vh' }}>
      <Navbar />
      {selected && <ServicePanel service={selected} onClose={()=>setSelected(null)} />}

      <div style={{ maxWidth:'1320px', margin:'0 auto', padding:'clamp(120px,18vh,180px) 5vw 8rem' }}>

        {/* Header */}
        <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1.25rem' }}>
          <div style={{ width:'30px', height:'1px', background:'#c9a96e' }} />
          <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.65rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a96e' }}>Our Services</span>
        </div>
        <h1 style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'clamp(2.5rem,6vw,4.5rem)', fontWeight:300, color:'#e8dcc8', lineHeight:1.05, marginBottom:'1.25rem' }}>
          Renovation<br /><em style={{ color:'#e8d5b0' }}>Services</em>
        </h1>
        <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'1rem', fontWeight:300, color:'#a09890', lineHeight:1.85, maxWidth:'520px', marginBottom:'5rem' }}>
          From intimate bathroom remodels to complete home transformations — every project is approached with the same dedication to craft, material excellence, and enduring quality.
        </p>

        {/* Service list */}
        <div style={{ border:'1px solid rgba(201,169,110,0.1)' }}>
          {SERVICES.map((service, i)=>(
            <div key={service.id} onClick={()=>setSelected(service)}
              style={{ padding:'2.25rem 2.75rem', borderBottom: i < SERVICES.length-1 ? '1px solid rgba(201,169,110,0.08)' : 'none', cursor:'pointer', transition:'background 0.25s', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'2rem' }}
              onMouseEnter={e=>e.currentTarget.style.background='rgba(201,169,110,0.04)'}
              onMouseLeave={e=>e.currentTarget.style.background='transparent'}>
              <div style={{ flex:1 }}>
                <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'0.6rem' }}>
                  <span style={{ fontFamily:'Georgia, serif', fontSize:'0.58rem', color:'rgba(201,169,110,0.35)', fontStyle:'italic', letterSpacing:'0.1em' }}>{service.num}</span>
                  <h3 style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'1.4rem', fontWeight:300, color:'#e8dcc8', letterSpacing:'0.01em' }}>{service.title}</h3>
                </div>
                <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.82rem', fontWeight:300, color:'rgba(255,255,255,0.3)', lineHeight:1.75, maxWidth:'560px' }}>{service.desc}</p>
              </div>
              <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:'8px', flexShrink:0 }}>
                <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.6rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'rgba(201,169,110,0.5)' }}>Explore</span>
                <div style={{ width:'34px', height:'34px', border:'1px solid rgba(201,169,110,0.2)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'rgba(201,169,110,0.5)', fontSize:'0.85rem' }}>&#8594;</div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ marginTop:'6rem', paddingTop:'4rem', borderTop:'1px solid rgba(201,169,110,0.1)', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>
          <div>
            <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.6rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a96e', marginBottom:'1rem' }}>Begin Your Journey</p>
            <h2 style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'clamp(1.8rem,3vw,2.5rem)', fontWeight:300, color:'#e8dcc8', lineHeight:1.2 }}>
              Ready to discuss<br /><em style={{ color:'#e8d5b0' }}>your project?</em>
            </h2>
          </div>
          <div>
            <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.875rem', fontWeight:300, color:'#a09890', lineHeight:1.85, marginBottom:'2rem' }}>
              Every exceptional renovation begins with a conversation. Our team is available to discuss your vision, explore possibilities, and guide you through the process.
            </p>
            <Link href="/consultation" style={{ display:'inline-block', padding:'1rem 2.75rem', background:'#c9a96e', color:'#0a0908', fontFamily:'DM Sans, sans-serif', fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase', textDecoration:'none', transition:'background 0.3s' }}
              onMouseEnter={e=>e.currentTarget.style.background='#e8d5b0'}
              onMouseLeave={e=>e.currentTarget.style.background='#c9a96e'}>
              Book Consultation
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
