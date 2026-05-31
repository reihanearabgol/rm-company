'use client'

import { useState, useEffect, useCallback } from 'react'
import { Lead, LeadStatus, STATUS_LABELS, STATUS_COLORS } from '@/lib/leads'

const STATUSES: LeadStatus[] = ['new', 'contacted', 'in_progress', 'completed', 'archived']

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
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [filterStatus, setFilterStatus] = useState<LeadStatus | 'all'>('all')
  const [editingNotes, setEditingNotes] = useState(false)
  const [notesValue, setNotesValue] = useState('')
  const [saving, setSaving] = useState(false)

  const fetchLeads = useCallback(async () => {
    try {
      const res = await fetch('/api/owner/leads')
      if (res.status === 401) {
        window.location.href = '/owner/login'
        return
      }
      const data = await res.json()
      setLeads(data.leads || [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchLeads() }, [fetchLeads])

  const updateStatus = async (lead: Lead, status: LeadStatus) => {
    setSaving(true)
    try {
      await fetch('/api/owner/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: lead.id, status }),
      })
      setLeads(prev => prev.map(l => l.id === lead.id ? { ...l, status, updatedAt: new Date().toISOString() } : l))
      if (selectedLead?.id === lead.id) setSelectedLead(prev => prev ? { ...prev, status } : null)
    } finally {
      setSaving(false)
    }
  }

  const saveNotes = async () => {
    if (!selectedLead) return
    setSaving(true)
    try {
      await fetch('/api/owner/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: selectedLead.id, notes: notesValue }),
      })
      setLeads(prev => prev.map(l => l.id === selectedLead.id ? { ...l, notes: notesValue } : l))
      setSelectedLead(prev => prev ? { ...prev, notes: notesValue } : null)
      setEditingNotes(false)
    } finally {
      setSaving(false)
    }
  }

  const logout = async () => {
    await fetch('/api/owner/logout', { method: 'POST' })
    window.location.href = '/owner/login'
  }

  const filtered = leads.filter(l => filterStatus === 'all' || l.status === filterStatus)
  const counts = STATUSES.reduce((acc, s) => ({ ...acc, [s]: leads.filter(l => l.status === s).length }), {} as Record<LeadStatus, number>)

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#0a0908', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: '#c9a96e', fontFamily: '"DM Sans", sans-serif', letterSpacing: '0.2em', fontSize: '13px' }}>Loading leads...</p>
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#0a0908', fontFamily: '"DM Sans", sans-serif', color: '#e8dcc8' }}>
      <div style={{
        position: 'fixed', inset: 0,
        backgroundImage: 'linear-gradient(rgba(201,169,110,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.025) 1px, transparent 1px)',
        backgroundSize: '60px 60px', pointerEvents: 'none', zIndex: 0,
      }} />

      <header style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(10,9,8,0.95)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(201,169,110,0.15)',
        padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '24px', height: '1px', background: '#c9a96e' }} />
          <span style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '20px', fontWeight: 300,
            color: '#e8dcc8', letterSpacing: '0.08em',
          }}>R&M Company</span>
          <span style={{ color: 'rgba(201,169,110,0.4)', fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>/ Owner Panel</span>
        </div>
        <button onClick={logout} style={{
          background: 'none', border: '1px solid rgba(201,169,110,0.2)',
          color: 'rgba(232,220,200,0.5)', padding: '7px 16px',
          fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
          cursor: 'pointer', borderRadius: '1px',
          fontFamily: '"DM Sans", sans-serif',
        }}>
          Logout
        </button>
      </header>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', padding: '40px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '12px', marginBottom: '40px' }}>
          {STATUSES.map(s => (
            <button key={s} onClick={() => setFilterStatus(filterStatus === s ? 'all' : s)} style={{
              background: filterStatus === s ? STATUS_COLORS[s] + '18' : 'rgba(232,220,200,0.03)',
              border: `1px solid ${filterStatus === s ? STATUS_COLORS[s] + '60' : 'rgba(201,169,110,0.12)'}`,
              borderRadius: '2px', padding: '20px',
              cursor: 'pointer', textAlign: 'left',
              fontFamily: '"DM Sans", sans-serif',
            }}>
              <div style={{ fontSize: '28px', fontFamily: '"Cormorant Garamond", serif', color: STATUS_COLORS[s], fontWeight: 300, marginBottom: '6px' }}>
                {counts[s] || 0}
              </div>
              <div style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(232,220,200,0.5)' }}>
                {STATUS_LABELS[s]}
              </div>
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: selectedLead ? '1fr 420px' : '1fr', gap: '24px', alignItems: 'start' }}>
          <div style={{
            background: 'rgba(232,220,200,0.03)',
            border: '1px solid rgba(201,169,110,0.12)',
            borderRadius: '2px', overflow: 'hidden',
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 180px 140px 140px 160px',
              padding: '14px 24px',
              borderBottom: '1px solid rgba(201,169,110,0.12)',
              fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase',
              color: 'rgba(201,169,110,0.6)',
            }}>
              <span>Client</span>
              <span>Project Type</span>
              <span>Budget</span>
              <span>Received</span>
              <span>Status</span>
            </div>

            {filtered.length === 0 ? (
              <div style={{ padding: '60px 24px', textAlign: 'center', color: 'rgba(232,220,200,0.3)', fontSize: '14px' }}>
                {leads.length === 0 ? 'No quote submissions yet.' : 'No leads match this filter.'}
              </div>
            ) : (
              filtered.map(lead => (
                <div
                  key={lead.id}
                  onClick={() => {
                    setSelectedLead(lead)
                    setNotesValue(lead.notes || '')
                    setEditingNotes(false)
                  }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 180px 140px 140px 160px',
                    padding: '16px 24px',
                    borderBottom: '1px solid rgba(201,169,110,0.07)',
                    cursor: 'pointer',
                    background: selectedLead?.id === lead.id ? 'rgba(201,169,110,0.06)' : 'transparent',
                    borderLeft: selectedLead?.id === lead.id ? '2px solid rgba(201,169,110,0.5)' : '2px solid transparent',
                  }}
                >
                  <div>
                    <div style={{ fontSize: '15px', color: '#e8dcc8', marginBottom: '3px', fontFamily: '"Cormorant Garamond", serif', fontWeight: 500 }}>
                      {lead.name}
                    </div>
                    <div style={{ fontSize: '12px', color: 'rgba(232,220,200,0.4)' }}>{lead.email}</div>
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(232,220,200,0.7)', alignSelf: 'center' }}>{lead.projectType || '—'}</div>
                  <div style={{ fontSize: '13px', color: '#c9a96e', alignSelf: 'center' }}>{lead.budget || '—'}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(232,220,200,0.4)', alignSelf: 'center' }}>
                    {new Date(lead.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                  <div style={{ alignSelf: 'center' }}>
                    <span style={statusStyle(lead.status)}>{STATUS_LABELS[lead.status]}</span>
                  </div>
                </div>
              ))
            )}
          </div>

          {selectedLead && (
            <div style={{
              background: 'rgba(232,220,200,0.03)',
              border: '1px solid rgba(201,169,110,0.15)',
              borderRadius: '2px', padding: '28px',
              position: 'sticky', top: '88px',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                <div>
                  <h2 style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '24px', fontWeight: 300,
                    color: '#e8dcc8', margin: '0 0 6px',
                  }}>{selectedLead.name}</h2>
                  <span style={statusStyle(selectedLead.status)}>{STATUS_LABELS[selectedLead.status]}</span>
                </div>
                <button onClick={() => setSelectedLead(null)} style={{
                  background: 'none', border: 'none', color: 'rgba(232,220,200,0.3)',
                  cursor: 'pointer', fontSize: '20px', padding: '0', lineHeight: '1',
                }}>×</button>
              </div>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.5)', marginBottom: '14px' }}>Contact</div>
                <InfoRow label="Email" value={selectedLead.email} isLink={`mailto:${selectedLead.email}`} />
                {selectedLead.phone && <InfoRow label="Phone" value={selectedLead.phone} isLink={`tel:${selectedLead.phone}`} />}
              </div>

              <div style={{ marginBottom: '24px', borderTop: '1px solid rgba(201,169,110,0.1)', paddingTop: '20px' }}>
                <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.5)', marginBottom: '14px' }}>Project</div>
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
                  {!editingNotes && (
                    <button onClick={() => setEditingNotes(true)} style={{
                      background: 'none', border: 'none', color: 'rgba(201,169,110,0.6)',
                      fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
                      cursor: 'pointer', padding: 0, fontFamily: '"DM Sans", sans-serif',
                    }}>Edit</button>
                  )}
                </div>
                {editingNotes ? (
                  <div>
                    <textarea
                      value={notesValue}
                      onChange={e => setNotesValue(e.target.value)}
                      rows={4}
                      placeholder="Add private notes about this client..."
                      style={{
                        width: '100%', background: 'rgba(232,220,200,0.05)',
                        border: '1px solid rgba(201,169,110,0.25)', borderRadius: '1px',
                        padding: '12px', fontSize: '14px', color: '#e8dcc8',
                        fontFamily: '"DM Sans", sans-serif', resize: 'vertical',
                        boxSizing: 'border-box', outline: 'none', lineHeight: '1.6',
                      }}
                    />
                    <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                      <button onClick={saveNotes} disabled={saving} style={{
                        background: '#c9a96e', border: 'none', borderRadius: '1px',
                        padding: '8px 16px', fontSize: '11px', letterSpacing: '0.15em',
                        textTransform: 'uppercase', color: '#0a0908', cursor: 'pointer',
                        fontFamily: '"DM Sans", sans-serif', fontWeight: 500,
                      }}>Save</button>
                      <button onClick={() => setEditingNotes(false)} style={{
                        background: 'none', border: '1px solid rgba(201,169,110,0.2)',
                        borderRadius: '1px', padding: '8px 16px', fontSize: '11px',
                        letterSpacing: '0.15em', textTransform: 'uppercase',
                        color: 'rgba(232,220,200,0.5)', cursor: 'pointer',
                        fontFamily: '"DM Sans", sans-serif',
                      }}>Cancel</button>
                    </div>
                  </div>
                ) : (
                  <p style={{ fontSize: '14px', color: 'rgba(232,220,200,0.5)', lineHeight: '1.7', margin: 0, fontStyle: selectedLead.notes ? 'normal' : 'italic' }}>
                    {selectedLead.notes || 'No notes added.'}
                  </p>
                )}
              </div>

              <div style={{ borderTop: '1px solid rgba(201,169,110,0.1)', paddingTop: '20px' }}>
                <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(201,169,110,0.5)', marginBottom: '12px' }}>Update Status</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {STATUSES.map(s => (
                    <button
                      key={s}
                      onClick={() => updateStatus(selectedLead, s)}
                      disabled={saving || selectedLead.status === s}
                      style={{
                        background: selectedLead.status === s ? STATUS_COLORS[s] + '25' : 'rgba(232,220,200,0.04)',
                        border: `1px solid ${selectedLead.status === s ? STATUS_COLORS[s] + '70' : 'rgba(201,169,110,0.15)'}`,
                        borderRadius: '2px', padding: '6px 12px',
                        fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: selectedLead.status === s ? STATUS_COLORS[s] : 'rgba(232,220,200,0.5)',
                        cursor: selectedLead.status === s ? 'default' : 'pointer',
                        fontFamily: '"DM Sans", sans-serif', fontWeight: 500,
                      }}
                    >
                      {STATUS_LABELS[s]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
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
