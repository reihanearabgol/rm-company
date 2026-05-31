'use client'

import { useState, useEffect, useCallback } from 'react'
import { Lead, LeadStatus, STATUS_LABELS, STATUS_COLORS } from '@/lib/leads'
import { SiteContent, DEFAULT_CONTENT } from '@/lib/cms'

const STATUSES: LeadStatus[] = ['new', 'contacted', 'in_progress', 'completed', 'archived']
type Tab = 'leads' | 'analytics' | 'cms'

function statusStyle(status: LeadStatus) {
  return {
    background: STATUS_COLORS[status] + '22',
    color: STATUS_COLORS[status],
    border: `1px solid ${STATUS_COLORS[status]}55`,
    borderRadius: '2px',
    padding: '3px 10px',
    fontSize: '11px',
    letterSpacing: '0.12em',
    textTransform: 'uppercase' as const,
    fontWeight: 500,
    display: 'inline-block',
  }
}

export default function OwnerDashboardClient() {
  const [activeTab, setActiveTab] = useState<Tab>('leads')
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [filterStatus, setFilterStatus] = useState<LeadStatus | 'all'>('all')
  const [editingNotes, setEditingNotes] = useState(false)
  const [notesValue, setNotesValue] = useState('')
  const [saving, setSaving] = useState(false)
  const [cms, setCms] = useState<SiteContent>(DEFAULT_CONTENT)
  const [cmsSection, setCmsSection] = useState('hero')
  const [cmsSaving, setCmsSaving] = useState(false)
  const [cmsStatus, setCmsStatus] = useState('')
  const [hasDraft, setHasDraft] = useState(false)

  const fetchLeads = useCallback(async () => {
    try {
      const res = await fetch('/api/owner/leads')
      if (res.status === 401) { window.location.href = '/owner/login'; return }
      const data = await res.json()
      setLeads(data.leads || [])
    } catch (e) { console.error(e) }
    finally { setLoading(false) }
  }, [])

  const fetchCms = useCallback(async () => {
    try {
      const res = await fetch('/api/owner/cms')
      const data = await res.json()
      setCms(data.draft || data.published)
      setHasDraft(!!data.draft)
    } catch (e) { console.error(e) }
  }, [])

  useEffect(() => { fetchLeads() }, [fetchLeads])
  useEffect(() => { if (activeTab === 'cms') fetchCms() }, [activeTab, fetchCms])

  const updateStatus = async (lead: Lead, status: LeadStatus) => {
    setSaving(true)
    try {
      await fetch('/api/owner/leads', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: lead.id, status }) })
      setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, status } : l))
      if (selectedLead?.id === lead.id) setSelectedLead(prev => prev ? { ...prev, status } : null)
    } finally { setSaving(false) }
  }

  const saveNotes = async () => {
    if (!selectedLead) return
    setSaving(true)
    try {
      await fetch('/api/owner/leads', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: selectedLead.id, notes: notesValue }) })
      setLeads(prev => prev.map(l => l.id === selectedLead.id ? { ...l, notes: notesValue } : l))
      setSelectedLead(prev => prev ? { ...prev, notes: notesValue } : null)
      setEditingNotes(false)
    } finally { setSaving(false) }
  }

  const saveDraft = async () => {
    setCmsSaving(true)
    try {
      await fetch('/api/owner/cms', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content: cms, action: 'save_draft' }) })
      setHasDraft(true)
      setCmsStatus('Draft saved')
      setTimeout(() => setCmsStatus(''), 3000)
    } finally { setCmsSaving(false) }
  }

  const publish = async () => {
    setCmsSaving(true)
    try {
      await fetch('/api/owner/cms', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ content: cms, action: 'publish' }) })
      setHasDraft(false)
      setCmsStatus('Published successfully!')
      setTimeout(() => setCmsStatus(''), 3000)
    } finally { setCmsSaving(false) }
  }

  const logout = async () => {
    await fetch('/api/owner/logout', { method: 'POST' })
    window.location.href = '/owner/login'
  }

  const filtered = leads.filter(l => filterStatus === 'all' || l.status === filterStatus)
  const counts = STATUSES.reduce((acc, s) => ({ ...acc, [s]: leads.filter(l => l.status === s).length }), {} as Record<LeadStatus, number>)

  const inputStyle = {
    width: '100%', background: 'rgba(232,220,200,0.05)',
    border: '1px solid rgba(201,169,110,0.25)', borderRadius: '1px',
    padding: '10px 14px', fontSize: '14px', color: '#e8dcc8',
    fontFamily: '"DM Sans", sans-serif', outline: 'none',
    boxSizing: 'border-box' as const, marginBottom: '16px',
  }

  const labelStyle = {
    display: 'block', fontSize: '11px', letterSpacing: '0.18em',
    textTransform: 'uppercase' as const, color: 'rgba(201,169,110,0.6)',
    marginBottom: '8px',
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0a0908', fontFamily: '"DM Sans", sans-serif', color: '#e8dcc8' }}>
      <div style={{ position: 'fixed', inset: 0, backgroundImage: 'linear-gradient(rgba(201,169,110,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0 }} />

      {/* Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(10,9,8,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,169,110,0.15)', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '24px', height: '1px', background: '#c9a96e' }} />
          <span style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '20px', fontWeight: 300, color: '#e8dcc8', letterSpacing: '0.08em' }}>R&M Company</span>
          <span style={{ color: 'rgba(201,169,110,0.4)', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>/ Owner Panel</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {(['leads', 'analytics', 'cms'] as Tab[]).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              background: activeTab === tab ? 'rgba(201,169,110,0.15)' : 'none',
              border: `1px solid ${activeTab === tab ? 'rgba(201,169,110,0.4)' : 'rgba(201,169,110,0.15)'}`,
              color: activeTab === tab ? '#c9a96e' : 'rgba(232,220,200,0.4)',
              padding: '7px 16px', fontSize: '11px', letterSpacing: '0.15em',
              textTransform: 'uppercase', cursor: 'pointer', borderRadius: '1px',
              fontFamily: '"DM Sans", sans-serif',
            }}>
              {tab === 'leads' ? '📋 Leads' : tab === 'analytics' ? '📊 Analytics' : '✏️ Content'}
            </button>
          ))}
          <button onClick={logout} style={{ background: 'none', border: '1px solid rgba(201,169,110,0.2)', color: 'rgba(232,220,200,0.5)', padding: '7px 16px', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '1px', fontFamily: '"DM Sans", sans-serif', marginLeft: '8px' }}>
            Logout
          </button>
        </div>
      </header>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', padding: '40px 32px' }}>

        {/* LEADS TAB */}
        {activeTab === 'leads' && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginBottom: '40px' }}>
              {STATUSES.map(s => (
                <button key={s} onClick={() => setFilterStatus(filterStatus === s ? 'all' : s)} style={{
                  background: filterStatus === s ? STATUS_COLORS[s] + '18' : 'rgba(232,220,200,0.03)',
                  border: `1px solid ${filterStatus === s ? STATUS_COLORS[s] + '60' : 'rgba(201,169,110,0.12)'}`,
                  borderRadius: '2px', padding: '20px', cursor: 'pointer', textAlign: 'left', fontFamily: '"DM Sans", sans-serif',
                }}>
                  <div style={{ fontSize: '28px', fontFamily: '"Cormorant Garamond", serif', color: STATUS_COLORS[s], fontWeight: 300, marginBottom: '6px' }}>{counts[s] || 0}</div>
                  <div style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(232,220,200,0.5)' }}>{STATUS_LABELS[s]}</div>
                </button>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: selectedLead ? '1fr 420px' : '1fr', gap: '24px', alignItems: 'start' }}>
              <div style={{ background: 'rgba(232,220,200,0.03)', border: '1px solid rgba(201,169,110,0.12)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 180px 140px 140px 160px', padding: '14px 24px', borderBottom: '1px solid rgba(201,169,110,0.12)', fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.6)' }}>
                  <span>Client</span><span>Project Type</span><span>Budget</span><span>Received</span><span>Status</span>
                </div>
                {loading ? (
                  <div style={{ padding: '60px', textAlign: 'center', color: 'rgba(232,220,200,0.3)' }}>Loading...</div>
                ) : filtered.length === 0 ? (
                  <div style={{ padding: '60px 24px', textAlign: 'center', color: 'rgba(232,220,200,0.3)', fontSize: '14px' }}>
                    {leads.length === 0 ? 'No quote submissions yet.' : 'No leads match this filter.'}
                  </div>
                ) : filtered.map(lead => (
                  <div key={lead.id} onClick={() => { setSelectedLead(lead); setNotesValue(lead.notes || ''); setEditingNotes(false) }} style={{ display: 'grid', gridTemplateColumns: '1fr 180px 140px 140px 160px', padding: '16px 24px', borderBottom: '1px solid rgba(201,169,110,0.07)', cursor: 'pointer', background: selectedLead?.id === lead.id ? 'rgba(201,169,110,0.06)' : 'transparent', borderLeft: selectedLead?.id === lead.id ? '2px solid rgba(201,169,110,0.5)' : '2px solid transparent' }}>
                    <div>
                      <div style={{ fontSize: '15px', color: '#e8dcc8', marginBottom: '3px', fontFamily: '"Cormorant Garamond", serif', fontWeight: 500 }}>{lead.name}</div>
                      <div style={{ fontSize: '12px', color: 'rgba(232,220,200,0.4)' }}>{lead.email}</div>
                    </div>
                    <div style={{ fontSize: '13px', color: 'rgba(232,220,200,0.7)', alignSelf: 'center' }}>{lead.projectType || '—'}</div>
                    <div style={{ fontSize: '13px', color: '#c9a96e', alignSelf: 'center' }}>{lead.budget || '—'}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(232,220,200,0.4)', alignSelf: 'center' }}>{new Date(lead.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                    <div style={{ alignSelf: 'center' }}><span style={statusStyle(lead.status)}>{STATUS_LABELS[lead.status]}</span></div>
                  </div>
                ))}
              </div>

              {selectedLead && (
                <div style={{ background: 'rgba(232,220,200,0.03)', border: '1px solid rgba(201,169,110,0.15)', borderRadius: '2px', padding: '28px', position: 'sticky', top: '88px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                    <div>
                      <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '24px', fontWeight: 300, color: '#e8dcc8', margin: '0 0 6px' }}>{selectedLead.name}</h2>
                      <span style={statusStyle(selectedLead.status)}>{STATUS_LABELS[selectedLead.status]}</span>
                    </div>
                    <button onClick={() => setSelectedLead(null)} style={{ background: 'none', border: 'none', color: 'rgba(232,220,200,0.3)', cursor: 'pointer', fontSize: '20px', padding: '0' }}>×</button>
                  </div>
                  <InfoRow label="Email" value={selectedLead.email} isLink={`mailto:${selectedLead.email}`} />
                  {selectedLead.phone && <InfoRow label="Phone" value={selectedLead.phone} isLink={`tel:${selectedLead.phone}`} />}
                  <div style={{ borderTop: '1px solid rgba(201,169,110,0.1)', paddingTop: '20px', marginTop: '16px', marginBottom: '24px' }}>
                    <InfoRow label="Type" value={selectedLead.projectType || '—'} />
                    <InfoRow label="Budget" value={selectedLead.budget || '—'} />
                    <InfoRow label="Received" value={new Date(selectedLead.createdAt).toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })} />
                  </div>
                  {selectedLead.message && (
                    <div style={{ marginBottom: '24px', borderTop: '1px solid rgba(201,169,110,0.1)', paddingTop: '20px' }}>
                      <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.5)', marginBottom: '12px' }}>Message</div>
                      <p style={{ fontSize: '14px', color: 'rgba(232,220,200,0.7)', lineHeight: '1.7', margin: 0 }}>{selectedLead.message}</p>
                    </div>
                  )}
                  <div style={{ marginBottom: '24px', borderTop: '1px solid rgba(201,169,110,0.1)', paddingTop: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.5)' }}>Notes</div>
                      {!editingNotes && <button onClick={() => setEditingNotes(true)} style={{ background: 'none', border: 'none', color: 'rgba(201,169,110,0.6)', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', padding: 0, fontFamily: '"DM Sans", sans-serif' }}>Edit</button>}
                    </div>
                    {editingNotes ? (
                      <div>
                        <textarea value={notesValue} onChange={e => setNotesValue(e.target.value)} rows={4} style={{ width: '100%', background: 'rgba(232,220,200,0.05)', border: '1px solid rgba(201,169,110,0.25)', borderRadius: '1px', padding: '12px', fontSize: '14px', color: '#e8dcc8', fontFamily: '"DM Sans", sans-serif', resize: 'vertical', boxSizing: 'border-box', outline: 'none' }} />
                        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                          <button onClick={saveNotes} disabled={saving} style={{ background: '#c9a96e', border: 'none', borderRadius: '1px', padding: '8px 16px', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#0a0908', cursor: 'pointer', fontFamily: '"DM Sans", sans-serif', fontWeight: 500 }}>Save</button>
                          <button onClick={() => setEditingNotes(false)} style={{ background: 'none', border: '1px solid rgba(201,169,110,0.2)', borderRadius: '1px', padding: '8px 16px', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(232,220,200,0.5)', cursor: 'pointer', fontFamily: '"DM Sans", sans-serif' }}>Cancel</button>
                        </div>
                      </div>
                    ) : (
                      <p style={{ fontSize: '14px', color: 'rgba(232,220,200,0.5)', lineHeight: '1.7', margin: 0, fontStyle: selectedLead.notes ? 'normal' : 'italic' }}>{selectedLead.notes || 'No notes added.'}</p>
                    )}
                  </div>
                  <div style={{ borderTop: '1px solid rgba(201,169,110,0.1)', paddingTop: '20px' }}>
                    <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.5)', marginBottom: '12px' }}>Update Status</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {STATUSES.map(s => (
                        <button key={s} onClick={() => updateStatus(selectedLead, s)} disabled={saving || selectedLead.status === s} style={{ background: selectedLead.status === s ? STATUS_COLORS[s] + '25' : 'rgba(232,220,200,0.04)', border: `1px solid ${selectedLead.status === s ? STATUS_COLORS[s] + '70' : 'rgba(201,169,110,0.15)'}`, borderRadius: '2px', padding: '6px 12px', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: selectedLead.status === s ? STATUS_COLORS[s] : 'rgba(232,220,200,0.5)', cursor: selectedLead.status === s ? 'default' : 'pointer', fontFamily: '"DM Sans", sans-serif', fontWeight: 500 }}>
                          {STATUS_LABELS[s]}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {/* ANALYTICS TAB */}
        {activeTab === 'analytics' && (
          <div>
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '28px', fontWeight: 300, color: '#e8dcc8', margin: '0 0 8px' }}>Analytics</h2>
              <p style={{ color: 'rgba(232,220,200,0.4)', fontSize: '14px', margin: 0 }}>Live data from Vercel Analytics. Visit your site a few times to see data appear.</p>
            </div>

            {/* Stats cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
              {[
                { label: 'Total Leads', value: leads.length, color: '#c9a96e', sub: 'All time' },
                { label: 'New Leads', value: leads.filter(l => l.status === 'new').length, color: '#c9a96e', sub: 'Awaiting contact' },
                { label: 'In Progress', value: leads.filter(l => l.status === 'in_progress').length, color: '#9e6ec9', sub: 'Active projects' },
                { label: 'Completed', value: leads.filter(l => l.status === 'completed').length, color: '#6ec98a', sub: 'Successfully closed' },
              ].map((stat, i) => (
                <div key={i} style={{ background: 'rgba(232,220,200,0.03)', border: '1px solid rgba(201,169,110,0.12)', borderRadius: '2px', padding: '24px' }}>
                  <div style={{ fontSize: '36px', fontFamily: '"Cormorant Garamond", serif', color: stat.color, fontWeight: 300, marginBottom: '8px' }}>{stat.value}</div>
                  <div style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#e8dcc8', marginBottom: '4px' }}>{stat.label}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(232,220,200,0.4)' }}>{stat.sub}</div>
                </div>
              ))}
            </div>

            {/* Vercel Analytics link */}
            <div style={{ background: 'rgba(232,220,200,0.03)', border: '1px solid rgba(201,169,110,0.12)', borderRadius: '2px', padding: '32px', textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>📊</div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '22px', fontWeight: 300, color: '#e8dcc8', margin: '0 0 12px' }}>Full Web Analytics</h3>
              <p style={{ color: 'rgba(232,220,200,0.5)', fontSize: '14px', lineHeight: '1.7', margin: '0 0 24px', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
                View detailed visitor stats, page views, traffic sources, device breakdown, and geographic data in your Vercel dashboard.
              </p>
              <a href="https://vercel.com/reihanearabgols-projects/rm-company/analytics" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#c9a96e', color: '#0a0908', padding: '12px 28px', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '1px', fontWeight: 500 }}>
                View Full Analytics →
              </a>
            </div>

            {/* Recent leads activity */}
            <div style={{ background: 'rgba(232,220,200,0.03)', border: '1px solid rgba(201,169,110,0.12)', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(201,169,110,0.1)', fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.6)' }}>Recent Lead Activity</div>
              {leads.slice(0, 5).map(lead => (
                <div key={lead.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid rgba(201,169,110,0.07)' }}>
                  <div>
                    <div style={{ fontSize: '14px', color: '#e8dcc8', fontFamily: '"Cormorant Garamond", serif' }}>{lead.name}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(232,220,200,0.4)' }}>{lead.projectType} · {lead.budget}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={statusStyle(lead.status)}>{STATUS_LABELS[lead.status]}</span>
                    <span style={{ fontSize: '12px', color: 'rgba(232,220,200,0.3)' }}>{new Date(lead.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
              {leads.length === 0 && <div style={{ padding: '40px', textAlign: 'center', color: 'rgba(232,220,200,0.3)', fontSize: '14px' }}>No leads yet.</div>}
            </div>
          </div>
        )}

        {/* CMS TAB */}
        {activeTab === 'cms' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
              <div>
                <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '28px', fontWeight: 300, color: '#e8dcc8', margin: '0 0 8px' }}>Content Management</h2>
                <p style={{ color: 'rgba(232,220,200,0.4)', fontSize: '14px', margin: 0 }}>Edit your website content without touching code.</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {cmsStatus && <span style={{ fontSize: '12px', color: '#6ec98a', letterSpacing: '0.1em' }}>{cmsStatus}</span>}
                {hasDraft && <span style={{ fontSize: '11px', color: '#c9a96e', background: 'rgba(201,169,110,0.15)', padding: '4px 10px', borderRadius: '2px', letterSpacing: '0.1em' }}>UNSAVED DRAFT</span>}
                <button onClick={saveDraft} disabled={cmsSaving} style={{ background: 'none', border: '1px solid rgba(201,169,110,0.3)', color: '#c9a96e', padding: '8px 16px', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '1px', fontFamily: '"DM Sans", sans-serif' }}>
                  Save Draft
                </button>
                <button onClick={publish} disabled={cmsSaving} style={{ background: '#c9a96e', border: 'none', color: '#0a0908', padding: '8px 20px', fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '1px', fontFamily: '"DM Sans", sans-serif', fontWeight: 500 }}>
                  Publish
                </button>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '24px' }}>
              {/* Section nav */}
              <div style={{ background: 'rgba(232,220,200,0.03)', border: '1px solid rgba(201,169,110,0.12)', borderRadius: '2px', overflow: 'hidden', height: 'fit-content' }}>
                {[
                  { id: 'hero', label: '🏠 Hero Section' },
                  { id: 'contact', label: '📞 Contact Info' },
                  { id: 'services', label: '🔨 Services' },
                  { id: 'faq', label: '❓ FAQ' },
                  { id: 'footer', label: '📄 Footer' },
                  { id: 'seo', label: '🔍 SEO Settings' },
                ].map(section => (
                  <button key={section.id} onClick={() => setCmsSection(section.id)} style={{
                    width: '100%', padding: '14px 16px', textAlign: 'left', background: cmsSection === section.id ? 'rgba(201,169,110,0.12)' : 'transparent',
                    border: 'none', borderLeft: cmsSection === section.id ? '2px solid #c9a96e' : '2px solid transparent',
                    borderBottom: '1px solid rgba(201,169,110,0.07)', color: cmsSection === section.id ? '#c9a96e' : 'rgba(232,220,200,0.6)',
                    fontSize: '13px', cursor: 'pointer', fontFamily: '"DM Sans", sans-serif',
                  }}>{section.label}</button>
                ))}
              </div>

              {/* Section editor */}
              <div style={{ background: 'rgba(232,220,200,0.03)', border: '1px solid rgba(201,169,110,0.12)', borderRadius: '2px', padding: '28px' }}>

                {cmsSection === 'hero' && (
                  <div>
                    <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '20px', fontWeight: 300, color: '#e8dcc8', margin: '0 0 24px' }}>Hero Section</h3>
                    <label style={labelStyle}>Main Headline</label>
                    <input style={inputStyle} value={cms.hero.headline} onChange={e => setCms(p => ({ ...p, hero: { ...p.hero, headline: e.target.value } }))} />
                    <label style={labelStyle}>Subheadline</label>
                    <input style={inputStyle} value={cms.hero.subheadline} onChange={e => setCms(p => ({ ...p, hero: { ...p.hero, subheadline: e.target.value } }))} />
                    <label style={labelStyle}>Description</label>
                    <textarea rows={3} style={{ ...inputStyle, resize: 'vertical' }} value={cms.hero.description} onChange={e => setCms(p => ({ ...p, hero: { ...p.hero, description: e.target.value } }))} />
                    <label style={labelStyle}>Primary Button Text</label>
                    <input style={inputStyle} value={cms.hero.ctaPrimary} onChange={e => setCms(p => ({ ...p, hero: { ...p.hero, ctaPrimary: e.target.value } }))} />
                    <label style={labelStyle}>Secondary Button Text</label>
                    <input style={inputStyle} value={cms.hero.ctaSecondary} onChange={e => setCms(p => ({ ...p, hero: { ...p.hero, ctaSecondary: e.target.value } }))} />
                  </div>
                )}

                {cmsSection === 'contact' && (
                  <div>
                    <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '20px', fontWeight: 300, color: '#e8dcc8', margin: '0 0 24px' }}>Contact Information</h3>
                    <label style={labelStyle}>Phone Number</label>
                    <input style={inputStyle} value={cms.contact.phone} onChange={e => setCms(p => ({ ...p, contact: { ...p.contact, phone: e.target.value } }))} />
                    <label style={labelStyle}>Email Address</label>
                    <input style={inputStyle} value={cms.contact.email} onChange={e => setCms(p => ({ ...p, contact: { ...p.contact, email: e.target.value } }))} />
                    <label style={labelStyle}>Street Address</label>
                    <input style={inputStyle} value={cms.contact.address} onChange={e => setCms(p => ({ ...p, contact: { ...p.contact, address: e.target.value } }))} />
                    <label style={labelStyle}>City / Province / Postal</label>
                    <input style={inputStyle} value={cms.contact.city} onChange={e => setCms(p => ({ ...p, contact: { ...p.contact, city: e.target.value } }))} />
                  </div>
                )}

                {cmsSection === 'services' && (
                  <div>
                    <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '20px', fontWeight: 300, color: '#e8dcc8', margin: '0 0 24px' }}>Services</h3>
                    {cms.services.map((service, i) => (
                      <div key={service.id} style={{ marginBottom: '24px', padding: '20px', background: 'rgba(232,220,200,0.03)', border: '1px solid rgba(201,169,110,0.1)', borderRadius: '2px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                          <span style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.5)' }}>Service {i + 1}</span>
                          <button onClick={() => setCms(p => ({ ...p, services: p.services.filter((_, idx) => idx !== i) }))} style={{ background: 'none', border: 'none', color: 'rgba(232,220,200,0.3)', cursor: 'pointer', fontSize: '16px' }}>✕</button>
                        </div>
                        <label style={labelStyle}>Title</label>
                        <input style={inputStyle} value={service.title} onChange={e => setCms(p => ({ ...p, services: p.services.map((s, idx) => idx === i ? { ...s, title: e.target.value } : s) }))} />
                        <label style={labelStyle}>Description</label>
                        <textarea rows={2} style={{ ...inputStyle, resize: 'vertical' }} value={service.description} onChange={e => setCms(p => ({ ...p, services: p.services.map((s, idx) => idx === i ? { ...s, description: e.target.value } : s) }))} />
                      </div>
                    ))}
                    <button onClick={() => setCms(p => ({ ...p, services: [...p.services, { id: Date.now().toString(), title: 'New Service', description: 'Service description' }] }))} style={{ background: 'none', border: '1px dashed rgba(201,169,110,0.3)', color: 'rgba(201,169,110,0.6)', padding: '12px 20px', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '2px', width: '100%', fontFamily: '"DM Sans", sans-serif' }}>
                      + Add Service
                    </button>
                  </div>
                )}

                {cmsSection === 'faq' && (
                  <div>
                    <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '20px', fontWeight: 300, color: '#e8dcc8', margin: '0 0 24px' }}>FAQ</h3>
                    {cms.faq.map((item, i) => (
                      <div key={item.id} style={{ marginBottom: '20px', padding: '20px', background: 'rgba(232,220,200,0.03)', border: '1px solid rgba(201,169,110,0.1)', borderRadius: '2px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                          <span style={{ fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.5)' }}>Question {i + 1}</span>
                          <button onClick={() => setCms(p => ({ ...p, faq: p.faq.filter((_, idx) => idx !== i) }))} style={{ background: 'none', border: 'none', color: 'rgba(232,220,200,0.3)', cursor: 'pointer', fontSize: '16px' }}>✕</button>
                        </div>
                        <label style={labelStyle}>Question</label>
                        <input style={inputStyle} value={item.question} onChange={e => setCms(p => ({ ...p, faq: p.faq.map((f, idx) => idx === i ? { ...f, question: e.target.value } : f) }))} />
                        <label style={labelStyle}>Answer</label>
                        <textarea rows={3} style={{ ...inputStyle, resize: 'vertical' }} value={item.answer} onChange={e => setCms(p => ({ ...p, faq: p.faq.map((f, idx) => idx === i ? { ...f, answer: e.target.value } : f) }))} />
                      </div>
                    ))}
                    <button onClick={() => setCms(p => ({ ...p, faq: [...p.faq, { id: Date.now().toString(), question: 'New Question', answer: 'Answer here' }] }))} style={{ background: 'none', border: '1px dashed rgba(201,169,110,0.3)', color: 'rgba(201,169,110,0.6)', padding: '12px 20px', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer', borderRadius: '2px', width: '100%', fontFamily: '"DM Sans", sans-serif' }}>
                      + Add Question
                    </button>
                  </div>
                )}

                {cmsSection === 'footer' && (
                  <div>
                    <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '20px', fontWeight: 300, color: '#e8dcc8', margin: '0 0 24px' }}>Footer</h3>
                    <label style={labelStyle}>Copyright Text</label>
                    <input style={inputStyle} value={cms.footer.copyright} onChange={e => setCms(p => ({ ...p, footer: { ...p.footer, copyright: e.target.value } }))} />
                    <label style={labelStyle}>Tagline</label>
                    <input style={inputStyle} value={cms.footer.tagline} onChange={e => setCms(p => ({ ...p, footer: { ...p.footer, tagline: e.target.value } }))} />
                  </div>
                )}

                {cmsSection === 'seo' && (
                  <div>
                    <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '20px', fontWeight: 300, color: '#e8dcc8', margin: '0 0 24px' }}>SEO Settings</h3>
                    <label style={labelStyle}>Page Title (shown in browser tab)</label>
                    <input style={inputStyle} value={cms.seo.title} onChange={e => setCms(p => ({ ...p, seo: { ...p.seo, title: e.target.value } }))} />
                    <label style={labelStyle}>Meta Description (shown in Google)</label>
                    <textarea rows={3} style={{ ...inputStyle, resize: 'vertical' }} value={cms.seo.description} onChange={e => setCms(p => ({ ...p, seo: { ...p.seo, description: e.target.value } }))} />
                    <p style={{ fontSize: '12px', color: 'rgba(232,220,200,0.3)', marginTop: '8px' }}>Keep description between 150-160 characters for best Google results. Currently: {cms.seo.description.length} characters.</p>
                  </div>
                )}

              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function InfoRow({ label, value, isLink }: { label: string; value: string; isLink?: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '14px' }}>
      <span style={{ color: 'rgba(232,220,200,0.4)' }}>{label}</span>
      {isLink ? (
        <a href={isLink} style={{ color: '#c9a96e', textDecoration: 'none', textAlign: 'right', maxWidth: '220px', wordBreak: 'break-all' }}>{value}</a>
      ) : (
        <span style={{ color: 'rgba(232,220,200,0.8)', textAlign: 'right', maxWidth: '220px' }}>{value}</span>
      )}
    </div>
  )
}
