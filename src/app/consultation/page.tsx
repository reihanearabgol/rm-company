'use client'
import Navbar from '@/components/Navbar'
import { useState } from 'react'

export default function ConsultationPage() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', projectType:'', budget:'', description:'' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const inp: React.CSSProperties = {
    width:'100%', background:'transparent', border:'none',
    borderBottom:'1px solid rgba(201,169,110,0.15)',
    color:'#e8dcc8', fontFamily:'Cormorant Garamond,Georgia,serif',
    fontSize:'1.1rem', fontWeight:300, padding:'0.85rem 0',
    outline:'none', transition:'border-color 0.25s', boxSizing:'border-box'
  }
  const lbl: React.CSSProperties = {
    fontFamily:'DM Sans,sans-serif', fontSize:'0.6rem',
    letterSpacing:'0.18em', textTransform:'uppercase',
    color:'rgba(160,152,144,0.7)', display:'block', marginBottom:'0.25rem'
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.phone) return
    setSending(true); setError('')
    try {
      const res = await fetch('/api/quote', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ fullName:form.name, email:form.email, phone:form.phone, projectType:form.projectType, address:'', city:'', postalCode:'', description:form.description, budget:form.budget, timeline:'', referral:'', contactMethod:'' }),
      })
      if (res.ok) setSent(true)
      else setError('Something went wrong. Please try again.')
    } catch { setError('Something went wrong. Please try again.') }
    setSending(false)
  }

  return (
    <main style={{ background:'#0a0908', minHeight:'100vh' }}>
      <Navbar />
      <style>{`
        .form-input::placeholder { color: rgba(201,169,110,0.25); font-family: 'Cormorant Garamond',Georgia,serif; font-style: italic; }
        .form-input:focus { border-color: rgba(201,169,110,0.6) !important; }
        .send-btn:hover { background: #e8d5b0 !important; }
        select option { background: #1c1b19; color: #e8dcc8; }
      `}</style>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'100vh', paddingTop:'80px' }}>

        {/* LEFT */}
        <div style={{ padding:'clamp(60px,10vh,100px) clamp(2rem,5vw,5rem) 4rem', display:'flex', flexDirection:'column', justifyContent:'center', borderRight:'1px solid rgba(201,169,110,0.08)', position:'relative' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'2rem' }}>
            <div style={{ width:'30px', height:'1px', background:'#c9a96e' }} />
            <span style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.62rem', letterSpacing:'0.22em', textTransform:'uppercase', color:'#c9a96e' }}>Get Started</span>
          </div>

          <h1 style={{ fontFamily:'Cormorant Garamond,Georgia,serif', fontSize:'clamp(2.8rem,5vw,4.5rem)', fontWeight:300, color:'#e8dcc8', lineHeight:1.05, marginBottom:'1.5rem', letterSpacing:'-0.01em' }}>
            Request a<br /><em style={{ color:'#c9a96e', fontStyle:'italic' }}>Free Estimate</em>
          </h1>

          <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.9rem', fontWeight:300, color:'#a09890', lineHeight:1.9, maxWidth:'380px', marginBottom:'3.5rem' }}>
            Tell us about your project. We'll respond within 24 hours with a personalised consultation timeline and preliminary investment guide.
          </p>

          <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
            {[
              { icon:'✆', label:'+1 (647) 614-4437', href:'sms:+16476144437' },
              { icon:'@', label:'shakeri.mojtaba.official@gmail.com', href:'mailto:shakeri.mojtaba.official@gmail.com' },
              { icon:'◎', label:'Toronto, Ontario, Canada', href:'#' },
            ].map(item => (
              <a key={item.label} href={item.href} style={{ display:'flex', alignItems:'center', gap:'1rem', textDecoration:'none' }}
                onMouseEnter={e => e.currentTarget.style.opacity='0.65'}
                onMouseLeave={e => e.currentTarget.style.opacity='1'}>
                <div style={{ width:'34px', height:'34px', border:'1px solid rgba(201,169,110,0.2)', display:'flex', alignItems:'center', justifyContent:'center', color:'#c9a96e', fontSize:'0.85rem', flexShrink:0 }}>{item.icon}</div>
                <span style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.82rem', color:'#a09890', letterSpacing:'0.02em' }}>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div style={{ padding:'clamp(60px,10vh,100px) clamp(2rem,5vw,5rem) 4rem', display:'flex', flexDirection:'column', justifyContent:'center' }}>
          {sent ? (
            <div style={{ textAlign:'center', maxWidth:'400px' }}>
              <div style={{ width:'56px', height:'56px', borderRadius:'50%', border:'1px solid #c9a96e', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 2rem', color:'#c9a96e', fontSize:'1.4rem' }}>✓</div>
              <h2 style={{ fontFamily:'Cormorant Garamond,Georgia,serif', fontSize:'2rem', fontWeight:300, color:'#e8dcc8', marginBottom:'1rem' }}>Request Received</h2>
              <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.875rem', color:'#a09890', lineHeight:1.8 }}>Thank you, {form.name.split(' ')[0]}. A member of our team will be in touch within 24 hours.</p>
            </div>
          ) : (
            <div style={{ maxWidth:'500px', width:'100%' }}>
              <div style={{ display:'flex', flexDirection:'column', gap:'2.25rem' }}>
                <div>
                  <label style={lbl}>Full Name</label>
                  <input className="form-input" style={inp} type="text" placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
                </div>
                <div>
                  <label style={lbl}>Email Address</label>
                  <input className="form-input" style={inp} type="email" placeholder="your@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
                </div>
                <div>
                  <label style={lbl}>Phone</label>
                  <input className="form-input" style={inp} type="tel" placeholder="+1 (416) 000 0000" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
                </div>
                <div>
                  <label style={lbl}>Project Type</label>
                  <select className="form-input" style={{ ...inp, appearance:'none' as any }} value={form.projectType} onChange={e=>setForm({...form,projectType:e.target.value})}>
                    <option value="">Select a service</option>
                    <option>Kitchen Renovation</option>
                    <option>Bathroom Renovation</option>
                    <option>Basement Renovation</option>
                    <option>Flooring</option>
                    <option>Painting</option>
                    <option>Drywall</option>
                    <option>Full Home Renovation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={lbl}>Project Budget Range</label>
                  <select className="form-input" style={{ ...inp, appearance:'none' as any }} value={form.budget} onChange={e=>setForm({...form,budget:e.target.value})}>
                    <option value="">Select a range</option>
                    <option>Under $25,000</option>
                    <option>$25,000 – $50,000</option>
                    <option>$50,000 – $100,000</option>
                    <option>$100,000 – $250,000</option>
                    <option>$250,000+</option>
                    <option>Prefer to discuss</option>
                  </select>
                </div>
                <div>
                  <label style={lbl}>Tell Us About Your Vision</label>
                  <textarea className="form-input" style={{ ...inp, height:'100px', resize:'vertical' as const }} placeholder="Describe your project..." value={form.description} onChange={e=>setForm({...form,description:e.target.value})} />
                </div>
                {error && <p style={{ fontFamily:'DM Sans,sans-serif', fontSize:'0.75rem', color:'rgba(201,169,110,0.8)' }}>{error}</p>}
                <button className="send-btn" onClick={handleSubmit} disabled={sending||!form.name||!form.email||!form.phone}
                  style={{ width:'100%', padding:'1.25rem', background:(!form.name||!form.email||!form.phone)?'rgba(201,169,110,0.4)':'#c9a96e', color:'#0a0908', fontFamily:'DM Sans,sans-serif', fontSize:'0.68rem', letterSpacing:'0.2em', textTransform:'uppercase', border:'none', cursor:(!form.name||!form.email||!form.phone)?'not-allowed':'pointer', transition:'background 0.3s' }}>
                  {sending ? 'Sending...' : 'Send Request'}
                </button>
                <p style={{ textAlign:'center', fontFamily:'DM Sans,sans-serif', fontSize:'0.6rem', color:'rgba(255,255,255,0.18)', letterSpacing:'0.08em', marginTop:'-1rem' }}>
                  Complimentary · No obligation · Response within 24 hours
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
