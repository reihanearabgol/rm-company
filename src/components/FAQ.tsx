'use client'

import { useState, useEffect } from 'react'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const DEFAULT_FAQS = [
  { id: '1', question: 'How long does a typical renovation take?', answer: 'Timeline varies by project scope. A full-home renovation typically takes 4-8 months. Kitchen and bathroom renovations range from 6-12 weeks. We provide a detailed schedule during the planning phase.' },
  { id: '2', question: 'Do you manage all contractors and trades?', answer: 'Yes. We manage the entire process, including architects, structural engineers, electricians, plumbers, and specialty tradespeople. You have one point of contact throughout.' },
  { id: '3', question: 'Can I stay in my home during renovation?', answer: 'It depends on the scope of work. We can often phase projects to allow you to remain at home. For full renovations, temporary relocation is sometimes recommended for comfort and safety.' },
  { id: '4', question: 'What is included in the initial consultation?', answer: 'The complimentary discovery call includes a walkthrough of your space, a discussion of your vision and goals, an overview of the process, and a preliminary budget conversation. No obligation.' },
  { id: '5', question: 'What does the 5-year guarantee cover?', answer: 'Our guarantee covers all workmanship defects, installation errors, and material failures under normal use conditions. We return promptly to address any issues at no cost to you.' },
  { id: '6', question: 'Do you take on projects outside Toronto?', answer: 'We primarily serve the Greater Toronto Area, but we take on select projects across Southern Ontario. Contact us to discuss your location.' },
]

interface FAQProps {
  items?: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const faqs = items && items.length > 0
    ? items.map(item => ({ q: item.question, a: item.answer }))
    : DEFAULT_FAQS.map(item => ({ q: item.question, a: item.answer }))

  const toggle = (i: number) => setOpen(prev => prev === i ? null : i)

  return (
    <section id="faq" style={{ background: '#0a0908', padding: isMobile ? '4rem 1.5rem' : '8rem 4rem' }}>
      <style>{`
        .faq-item { border-bottom: 1px solid rgba(201,169,110,0.1); }
        .faq-q { cursor: pointer; transition: color 0.25s ease; }
        .faq-q:hover { color: #e8d5b0 !important; }
        .faq-toggle { transition: transform 0.35s ease, color 0.25s ease; }
        .faq-a-wrap {
          overflow: hidden;
          transition: max-height 0.45s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.35s ease;
        }
      `}</style>

      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ width: '30px', height: '1px', background: '#c9a96e' }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c9a96e' }}>
            Questions
          </span>
        </div>

        <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 300, lineHeight: 1.1, color: '#f5f0e8', marginBottom: '4rem' }}>
          Frequently <em style={{ fontStyle: 'italic', color: '#e8d5b0' }}>Asked</em>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 380px', gap: isMobile ? '0' : '6rem', alignItems: 'start' }}>
          <div>
            {faqs.map((faq, i) => {
              const isOpen = open === i
              return (
                <div key={i} className="faq-item">
                  <div className="faq-q" onClick={() => toggle(i)}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.75rem 0', gap: '1.5rem' }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.15rem', fontWeight: 300, color: isOpen ? '#e8d5b0' : '#f5f0e8', lineHeight: 1.3, transition: 'color 0.25s ease' }}>
                      {faq.q}
                    </span>
                    <div className="faq-toggle"
                      style={{ width: '32px', height: '32px', flexShrink: 0, border: `1px solid ${isOpen ? '#c9a96e' : 'rgba(201,169,110,0.3)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: isOpen ? '#c9a96e' : 'rgba(201,169,110,0.5)', fontSize: '1.1rem', fontWeight: 300, transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.35s ease, border-color 0.25s ease' }}>
                      +
                    </div>
                  </div>
                  <div className="faq-a-wrap" style={{ maxHeight: isOpen ? '300px' : '0px', opacity: isOpen ? 1 : 0 }}>
                    <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.88rem', fontWeight: 300, color: '#a09890', lineHeight: 1.8, paddingBottom: '1.75rem' }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {!isMobile && (
            <div style={{ background: '#1c1b19', border: '1px solid rgba(201,169,110,0.15)', padding: '2.5rem', position: 'sticky', top: '120px' }}>
              <div style={{ width: '30px', height: '1px', background: '#c9a96e', marginBottom: '1.5rem' }} />
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2rem', fontWeight: 300, color: '#f5f0e8', lineHeight: 1.2, marginBottom: '1rem' }}>
                Still have<br /><em style={{ fontStyle: 'italic', color: '#e8d5b0' }}>questions?</em>
              </h3>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', fontWeight: 300, color: '#a09890', lineHeight: 1.8, marginBottom: '2rem' }}>
                Our team is available Monday to Friday, 9am to 6pm. We typically respond within four business hours.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '36px', height: '36px', border: '1px solid rgba(201,169,110,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9a96e', fontSize: '0.85rem', flexShrink: 0 }}>✆</div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', color: '#f5f0e8' }}>+1 (250) 884-2728</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '36px', height: '36px', border: '1px solid rgba(201,169,110,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c9a96e', fontSize: '0.85rem', flexShrink: 0 }}>@</div>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.85rem', color: '#f5f0e8' }}>arabgol.reihane.official@gmail.com</span>
                </div>
              </div>
              <a href="/consultation" style={{ display: 'block', textAlign: 'center', padding: '1rem 2rem', background: '#c9a96e', color: '#0a0908', fontFamily: "'DM Sans', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', marginBottom: '0.75rem' }}>
                Book a Consultation
              </a>
              <p style={{ textAlign: 'center', fontFamily: "'DM Sans', sans-serif", fontSize: '0.62rem', color: '#a09890', letterSpacing: '0.06em' }}>
                Complimentary · No obligation · 60 minutes
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
