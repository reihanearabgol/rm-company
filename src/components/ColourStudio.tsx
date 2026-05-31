'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { ALL_COLOURS, type Colour } from '@/data/allColours'

const FAMILIES = ['All','Red','Orange','Yellow','Green','Blue','Purple','Neutral','Brown','White','Gray','Black']

const MOOD_PALETTES = [
  { name: 'Calm & Serene',    colours: ['#A8C0D4','#8FA88C','#C8C4BC','#E8E0C8','#6B9080'] },
  { name: 'Bold & Dramatic',  colours: ['#1E2D4A','#6B1F2A','#2D4A38','#4A3060','#0A0908'] },
  { name: 'Warm & Inviting',  colours: ['#C9A96E','#C8A048','#D4850A','#A07040','#B5541C'] },
  { name: 'Modern Minimal',   colours: ['#FFFFFF','#F5F5F0','#C8C4BC','#808890','#1C1B19'] },
  { name: 'Nature & Organic', colours: ['#5A6B4A','#6B9080','#8A7868','#A88C30','#584030'] },
  { name: 'Luxury Dark',      colours: ['#141210','#2E2C29','#484850','#6A7080','#c9a96e'] },
]

function hexToLuma(hex: string) {
  const r = parseInt(hex.slice(1,3),16)
  const g = parseInt(hex.slice(3,5),16)
  const b = parseInt(hex.slice(5,7),16)
  return 0.299*r + 0.587*g + 0.114*b
}

export default function ColourStudio() {
  const [tab, setTab] = useState<'explore'|'inspiration'|'paint'>('explore')
  const [family, setFamily] = useState('All')
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<Colour | null>(null)
  const [saved, setSaved] = useState<Colour[]>([])
  const [hoveredId, setHoveredId] = useState<string|null>(null)

  const filtered = useMemo(() => {
    let list = family === 'All' ? ALL_COLOURS : ALL_COLOURS.filter(c => c.family === family)
    if (search.trim()) list = list.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    return list
  }, [family, search])

  const isSaved = (c: Colour) => saved.some(s => s.id === c.id)
  const toggleSave = (c: Colour) => setSaved(prev =>
    prev.some(s => s.id === c.id) ? prev.filter(s => s.id !== c.id) : [...prev, c]
  )

  return (
    <div style={{ background:'#0a0908', minHeight:'100vh', paddingTop:'80px' }}>
      <style>{`
        .cs-swatch { cursor:pointer; transition:transform 0.12s ease, box-shadow 0.12s ease; }
        .cs-swatch:hover { transform:scale(1.06); z-index:10; box-shadow:0 6px 20px rgba(0,0,0,0.6); }
        .cs-tab:hover { color:#e8dcc8 !important; }
        .cs-fam:hover { background:rgba(201,169,110,0.08) !important; color:#e8dcc8 !important; }
        .cs-save:hover { background:rgba(201,169,110,0.12) !important; border-color:#c9a96e !important; }
        input[type=text]::placeholder { color:rgba(255,255,255,0.2); }
      `}</style>

      {/* Top navigation tabs */}
      <div style={{ borderBottom:'1px solid rgba(201,169,110,0.12)', background:'#0a0908', position:'sticky', top:'80px', zIndex:100 }}>
        <div style={{ maxWidth:'1400px', margin:'0 auto', padding:'0 2rem', display:'flex', alignItems:'center', gap:'0' }}>
          {(['explore','inspiration','paint'] as const).map(t => (
            <button key={t} className="cs-tab" onClick={()=>setTab(t)}
              style={{ padding:'1.1rem 1.75rem', background:'none', border:'none', cursor:'pointer', fontFamily:'DM Sans, sans-serif', fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase', color:tab===t?'#c9a96e':'rgba(255,255,255,0.4)', borderBottom:tab===t?'2px solid #c9a96e':'2px solid transparent', marginBottom:'-1px', transition:'color 0.2s', fontWeight:tab===t?500:400 }}>
              {t === 'explore' ? 'Explore Colour' : t === 'inspiration' ? 'Inspiration' : 'Paint an Image'}
            </button>
          ))}
          <div style={{ marginLeft:'auto', display:'flex', alignItems:'center', gap:'0.5rem' }}>
            <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.6rem', color:'rgba(255,255,255,0.2)', letterSpacing:'0.1em' }}>
              {filtered.length} colours
            </span>
          </div>
        </div>
      </div>

      {/* ── EXPLORE COLOUR tab ── */}
      {tab === 'explore' && (
        <div style={{ maxWidth:'1400px', margin:'0 auto', padding:'2rem' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 300px', gap:'2rem', alignItems:'start' }}>

            {/* Left — search + filters + grid */}
            <div>
              {/* Search */}
              <div style={{ position:'relative', marginBottom:'1.25rem' }}>
                <span style={{ position:'absolute', left:'1rem', top:'50%', transform:'translateY(-50%)', color:'rgba(201,169,110,0.5)', fontSize:'1rem', pointerEvents:'none' }}>⌕</span>
                <input type="text" placeholder="Search colours..." value={search} onChange={e=>setSearch(e.target.value)}
                  style={{ width:'100%', padding:'0.8rem 1rem 0.8rem 2.75rem', background:'#1c1b19', border:'1px solid rgba(201,169,110,0.2)', color:'#e8dcc8', fontFamily:'DM Sans, sans-serif', fontSize:'0.85rem', outline:'none', boxSizing:'border-box', transition:'border-color 0.25s' }}
                  onFocus={e=>e.target.style.borderColor='#c9a96e'} onBlur={e=>e.target.style.borderColor='rgba(201,169,110,0.2)'} />
                {search && <button onClick={()=>setSearch('')} style={{ position:'absolute', right:'1rem', top:'50%', transform:'translateY(-50%)', background:'none', border:'none', color:'rgba(255,255,255,0.3)', cursor:'pointer', fontSize:'0.9rem' }}>✕</button>}
              </div>

              {/* Family filter tabs */}
              <div style={{ display:'flex', flexWrap:'wrap', gap:'4px', marginBottom:'1.5rem', paddingBottom:'1.5rem', borderBottom:'1px solid rgba(201,169,110,0.08)' }}>
                {FAMILIES.map(f => (
                  <button key={f} className="cs-fam" onClick={()=>{ setFamily(f); setSearch('') }}
                    style={{ padding:'0.45rem 1rem', background:family===f?'#c9a96e':'transparent', color:family===f?'#0a0908':'rgba(255,255,255,0.45)', border:`1px solid ${family===f?'#c9a96e':'rgba(255,255,255,0.1)'}`, fontFamily:'DM Sans, sans-serif', fontSize:'0.68rem', letterSpacing:'0.08em', cursor:'pointer', transition:'all 0.2s', fontWeight:family===f?500:400 }}>
                    {f}
                  </button>
                ))}
              </div>

              {/* Colour grid */}
              {filtered.length === 0 ? (
                <div style={{ textAlign:'center', padding:'4rem', color:'rgba(255,255,255,0.2)', fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'1.2rem', fontStyle:'italic' }}>
                  No colours found for "{search}"
                </div>
              ) : (
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(72px, 1fr))', gap:'3px' }}>
                  {filtered.map(colour => {
                    const isSelected = selected?.id === colour.id
                    const isHovered  = hoveredId === colour.id
                    const dark = hexToLuma(colour.hex) < 128
                    return (
                      <div key={colour.id} className="cs-swatch"
                        onClick={()=>setSelected(isSelected ? null : colour)}
                        onMouseEnter={()=>setHoveredId(colour.id)}
                        onMouseLeave={()=>setHoveredId(null)}
                        style={{ position:'relative', outline:isSelected?'2px solid #c9a96e':'1px solid rgba(255,255,255,0.04)', outlineOffset:isSelected?'-2px':'0', zIndex:isSelected?5:1 }}>
                        {/* Swatch colour block */}
                        <div style={{ background:colour.hex, height:'clamp(48px,4.5vw,68px)', position:'relative' }}>
                          {isSaved(colour) && (
                            <div style={{ position:'absolute', top:'3px', right:'3px', width:'5px', height:'5px', borderRadius:'50%', background:dark?'rgba(255,255,255,0.8)':'rgba(0,0,0,0.5)' }} />
                          )}
                          {isSelected && (
                            <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                              <div style={{ width:'10px', height:'10px', borderRadius:'50%', background:dark?'rgba(255,255,255,0.9)':'rgba(0,0,0,0.6)', boxShadow:'0 0 0 2px rgba(255,255,255,0.3)' }} />
                            </div>
                          )}
                        </div>
                        {/* Name label */}
                        <div style={{ padding:'4px 5px', background:'#141210', borderTop:'1px solid rgba(255,255,255,0.04)' }}>
                          <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.52rem', color:'rgba(255,255,255,0.45)', lineHeight:1.3, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{colour.name}</p>
                        </div>
                        {/* Hover tooltip */}
                        {isHovered && !isSelected && (
                          <div style={{ position:'absolute', bottom:'100%', left:'50%', transform:'translateX(-50%)', background:'#1c1b19', border:'1px solid rgba(201,169,110,0.25)', padding:'7px 10px', zIndex:20, whiteSpace:'nowrap', pointerEvents:'none', marginBottom:'4px', boxShadow:'0 4px 20px rgba(0,0,0,0.6)' }}>
                            <p style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'0.78rem', color:'#e8dcc8', marginBottom:'1px' }}>{colour.name}</p>
                            <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.58rem', color:'#c9a96e', letterSpacing:'0.08em' }}>{colour.hex.toUpperCase()}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Right — selected panel + palette */}
            <div style={{ position:'sticky', top:'140px' }}>

              {/* Selected colour card */}
              <div style={{ border:'1px solid rgba(201,169,110,0.15)', background:'#1c1b19', marginBottom:'1.25rem' }}>
                {selected ? (
                  <>
                    {/* Large colour preview */}
                    <div style={{ height:'110px', background:selected.hex, position:'relative' }}>
                      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom,transparent 60%,rgba(0,0,0,0.15))' }} />
                      <div style={{ position:'absolute', bottom:'8px', right:'10px', fontFamily:'DM Sans, sans-serif', fontSize:'0.58rem', letterSpacing:'0.1em', color:hexToLuma(selected.hex)>140?'rgba(0,0,0,0.4)':'rgba(255,255,255,0.5)' }}>
                        {selected.hex.toUpperCase()}
                      </div>
                    </div>
                    <div style={{ padding:'1.25rem' }}>
                      <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:'0.5rem' }}>
                        <h3 style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'1.2rem', fontWeight:300, color:'#e8dcc8', lineHeight:1.2 }}>{selected.name}</h3>
                        <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.52rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'#c9a96e', border:'1px solid rgba(201,169,110,0.25)', padding:'3px 7px', flexShrink:0, marginLeft:'8px' }}>{selected.finish}</span>
                      </div>
                      <p style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'0.85rem', color:'#a09890', lineHeight:1.7, fontStyle:'italic', marginBottom:'0.75rem' }}>{selected.mood}</p>
                      <div style={{ display:'flex', flexWrap:'wrap', gap:'4px', marginBottom:'1.25rem' }}>
                        {selected.rooms.map(room=>(
                          <span key={room} style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.55rem', color:'#c9a96e', border:'1px solid rgba(201,169,110,0.2)', padding:'2px 8px', letterSpacing:'0.06em' }}>{room}</span>
                        ))}
                      </div>
                      <button className="cs-save" onClick={()=>toggleSave(selected)}
                        style={{ width:'100%', padding:'0.8rem', background:isSaved(selected)?'rgba(201,169,110,0.12)':'transparent', border:'1px solid rgba(201,169,110,0.3)', fontFamily:'DM Sans, sans-serif', fontSize:'0.6rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'#c9a96e', cursor:'pointer', transition:'all 0.25s' }}>
                        {isSaved(selected) ? '✓  Saved to Palette' : '+  Save Colour'}
                      </button>
                    </div>
                  </>
                ) : (
                  <div style={{ padding:'2.5rem 1.5rem', textAlign:'center' }}>
                    <div style={{ width:'1px', height:'32px', background:'linear-gradient(to bottom,#c9a96e,transparent)', margin:'0 auto 1rem' }} />
                    <p style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'0.9rem', color:'rgba(255,255,255,0.2)', fontStyle:'italic', lineHeight:1.6 }}>
                      Hover to preview.<br />Click to select a colour.
                    </p>
                  </div>
                )}
              </div>

              {/* My Palette */}
              <div style={{ border:'1px solid rgba(201,169,110,0.12)', background:'#1c1b19', padding:'1.25rem' }}>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'1rem' }}>
                  <div style={{ display:'flex', alignItems:'center', gap:'0.5rem' }}>
                    <div style={{ width:'16px', height:'1px', background:'rgba(201,169,110,0.4)' }} />
                    <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.58rem', letterSpacing:'0.16em', textTransform:'uppercase', color:'rgba(255,255,255,0.3)' }}>My Palette</span>
                    {saved.length > 0 && <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.55rem', color:'#c9a96e', border:'1px solid rgba(201,169,110,0.2)', padding:'1px 6px' }}>{saved.length}</span>}
                  </div>
                  {saved.length > 0 && (
                    <button onClick={()=>setSaved([])} style={{ background:'none', border:'none', fontFamily:'DM Sans, sans-serif', fontSize:'0.55rem', color:'rgba(255,255,255,0.2)', cursor:'pointer', letterSpacing:'0.1em', textTransform:'uppercase', transition:'color 0.2s' }}
                      onMouseEnter={e=>e.currentTarget.style.color='rgba(255,255,255,0.5)'}
                      onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.2)'}>Clear</button>
                  )}
                </div>

                {saved.length === 0 ? (
                  <>
                    {/* Empty slots */}
                    <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:'4px', marginBottom:'0.75rem' }}>
                      {[...Array(5)].map((_,i)=>(
                        <div key={i} style={{ height:'36px', border:'1px dashed rgba(201,169,110,0.12)', background:'rgba(10,9,8,0.5)' }} />
                      ))}
                    </div>
                    <p style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'0.78rem', color:'rgba(255,255,255,0.18)', fontStyle:'italic', textAlign:'center' }}>Save colours to build your palette</p>
                  </>
                ) : (
                  <>
                    {/* Colour strip */}
                    <div style={{ display:'flex', height:'8px', marginBottom:'8px', border:'1px solid rgba(201,169,110,0.08)' }}>
                      {saved.map(c=><div key={c.id} style={{ flex:1, background:c.hex }} />)}
                    </div>
                    {/* Saved list */}
                    <div style={{ display:'flex', flexDirection:'column', gap:'3px' }}>
                      {saved.map(c=>(
                        <div key={c.id} style={{ display:'flex', alignItems:'center', gap:'8px', padding:'5px 8px', background:'rgba(10,9,8,0.4)', border:'1px solid rgba(201,169,110,0.06)' }}>
                          <div style={{ width:'24px', height:'24px', background:c.hex, flexShrink:0, border:'1px solid rgba(255,255,255,0.05)' }} />
                          <div style={{ flex:1, minWidth:0 }}>
                            <p style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'0.72rem', color:'#e8dcc8', overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{c.name}</p>
                            <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.52rem', color:'#a09890', letterSpacing:'0.06em' }}>{c.hex.toUpperCase()}</p>
                          </div>
                          <button onClick={()=>toggleSave(c)} style={{ background:'none', border:'none', color:'rgba(255,255,255,0.2)', cursor:'pointer', fontSize:'10px', padding:'2px', transition:'color 0.2s', flexShrink:0 }}
                            onMouseEnter={e=>e.currentTarget.style.color='rgba(255,255,255,0.6)'}
                            onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.2)'}>✕</button>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Book CTA */}
                <div style={{ marginTop:'1.25rem', paddingTop:'1.25rem', borderTop:'1px solid rgba(201,169,110,0.08)' }}>
                  <a href="/consultation" style={{ display:'block', textAlign:'center', padding:'0.85rem', background:'#c9a96e', color:'#0a0908', fontFamily:'DM Sans, sans-serif', fontSize:'0.62rem', letterSpacing:'0.15em', textTransform:'uppercase', textDecoration:'none', transition:'background 0.3s' }}
                    onMouseEnter={e=>e.currentTarget.style.background='#e8d5b0'}
                    onMouseLeave={e=>e.currentTarget.style.background='#c9a96e'}>
                    Book Colour Consultation
                  </a>
                  <p style={{ textAlign:'center', marginTop:'0.5rem', fontFamily:'DM Sans, sans-serif', fontSize:'0.58rem', color:'rgba(255,255,255,0.18)' }}>Complimentary · No obligation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── INSPIRATION tab ── */}
      {tab === 'inspiration' && (
        <div style={{ maxWidth:'1400px', margin:'0 auto', padding:'3rem 2rem' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1rem' }}>
            <div style={{ width:'30px', height:'1px', background:'#c9a96e' }} />
            <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.65rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a96e' }}>Mood Palettes</span>
          </div>
          <h2 style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'clamp(2rem,3vw,3rem)', fontWeight:300, color:'#e8dcc8', marginBottom:'3rem' }}>
            Find Your <em style={{ color:'#e8d5b0' }}>Palette</em>
          </h2>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'2px' }}>
            {MOOD_PALETTES.map(palette=>(
              <div key={palette.name} style={{ background:'#141210', border:'1px solid rgba(201,169,110,0.08)', padding:'1.75rem', cursor:'pointer', transition:'all 0.25s' }}
                onMouseEnter={e=>{ e.currentTarget.style.background='rgba(201,169,110,0.04)'; e.currentTarget.style.borderColor='rgba(201,169,110,0.25)' }}
                onMouseLeave={e=>{ e.currentTarget.style.background='#141210'; e.currentTarget.style.borderColor='rgba(201,169,110,0.08)' }}>
                {/* Palette strip */}
                <div style={{ display:'flex', height:'48px', marginBottom:'1rem', overflow:'hidden' }}>
                  {palette.colours.map(hex=>(
                    <div key={hex} style={{ flex:1, background:hex }} />
                  ))}
                </div>
                <h3 style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'1.1rem', fontWeight:300, color:'#e8dcc8', marginBottom:'0.5rem' }}>{palette.name}</h3>
                <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.7rem', color:'rgba(255,255,255,0.3)', marginBottom:'1rem' }}>{palette.colours.length} colours</p>
                <div style={{ display:'flex', gap:'4px' }}>
                  {palette.colours.map(hex=>(
                    <div key={hex} style={{ width:'24px', height:'24px', background:hex, border:'1px solid rgba(255,255,255,0.06)', borderRadius:'50%' }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop:'4rem', textAlign:'center' }}>
            <p style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'1.2rem', color:'#a09890', fontStyle:'italic', marginBottom:'1.5rem' }}>
              Want help choosing the perfect palette?
            </p>
            <a href="/consultation" style={{ display:'inline-block', padding:'1rem 2.75rem', background:'#c9a96e', color:'#0a0908', fontFamily:'DM Sans, sans-serif', fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase', textDecoration:'none' }}>
              Book Colour Consultation
            </a>
          </div>
        </div>
      )}

      {/* ── PAINT AN IMAGE tab ── */}
      {tab === 'paint' && (
        <div style={{ maxWidth:'1400px', margin:'0 auto', padding:'3rem 2rem' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'1rem', marginBottom:'1rem' }}>
            <div style={{ width:'30px', height:'1px', background:'#c9a96e' }} />
            <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.65rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'#c9a96e' }}>Visualise Your Space</span>
          </div>
          <h2 style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'clamp(2rem,3vw,3rem)', fontWeight:300, color:'#e8dcc8', marginBottom:'1rem' }}>
            Paint <em style={{ color:'#e8d5b0' }}>an Image</em>
          </h2>
          <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.9rem', color:'#a09890', lineHeight:1.8, maxWidth:'500px', marginBottom:'3rem' }}>
            See how your selected colours look in real spaces. Upload your own photo or choose from our room library.
          </p>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'2px', marginBottom:'3rem' }}>
            {[
              { label:'Use Our Photo', sub:'Browse our room library', icon:'▷' },
              { label:'Upload Your Photo', sub:'Apply colours to your space', icon:'△' },
            ].map(opt=>(
              <div key={opt.label} style={{ padding:'3rem 2.5rem', background:'#141210', border:'1px solid rgba(201,169,110,0.1)', cursor:'pointer', transition:'all 0.3s', textAlign:'center' }}
                onMouseEnter={e=>{ e.currentTarget.style.background='rgba(201,169,110,0.05)'; e.currentTarget.style.borderColor='rgba(201,169,110,0.3)' }}
                onMouseLeave={e=>{ e.currentTarget.style.background='#141210'; e.currentTarget.style.borderColor='rgba(201,169,110,0.1)' }}>
                <div style={{ width:'56px', height:'56px', border:'1px solid rgba(201,169,110,0.25)', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 1.5rem', color:'#c9a96e', fontSize:'1.2rem' }}>{opt.icon}</div>
                <h3 style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'1.4rem', fontWeight:300, color:'#e8dcc8', marginBottom:'0.5rem' }}>{opt.label}</h3>
                <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.78rem', color:'rgba(255,255,255,0.3)', marginBottom:'1.5rem' }}>{opt.sub}</p>
                <span style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.62rem', letterSpacing:'0.15em', textTransform:'uppercase', color:'rgba(201,169,110,0.5)', border:'1px solid rgba(201,169,110,0.2)', padding:'0.5rem 1.25rem' }}>
                  Coming Soon
                </span>
              </div>
            ))}
          </div>
          <div style={{ background:'#141210', border:'1px solid rgba(201,169,110,0.1)', padding:'3rem', textAlign:'center' }}>
            <p style={{ fontFamily:'Cormorant Garamond, Georgia, serif', fontSize:'1.3rem', fontWeight:300, color:'#e8dcc8', marginBottom:'0.75rem' }}>
              Prefer a personal colour consultation?
            </p>
            <p style={{ fontFamily:'DM Sans, sans-serif', fontSize:'0.85rem', color:'#a09890', lineHeight:1.8, maxWidth:'420px', margin:'0 auto 2rem' }}>
              Our colour specialists will visit your space and guide you through the perfect palette selection.
            </p>
            <a href="/consultation" style={{ display:'inline-block', padding:'1rem 2.75rem', background:'#c9a96e', color:'#0a0908', fontFamily:'DM Sans, sans-serif', fontSize:'0.7rem', letterSpacing:'0.15em', textTransform:'uppercase', textDecoration:'none' }}>
              Book Colour Consultation
            </a>
          </div>
        </div>
      )}
    </div>
  )
}