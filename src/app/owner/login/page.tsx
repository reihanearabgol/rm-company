'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function OwnerLoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/owner/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        router.push('/owner/dashboard')
      } else {
        setError('Incorrect password.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0a0908',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '"DM Sans", sans-serif',
    }}>
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{
        width: '100%',
        maxWidth: '420px',
        padding: '0 24px',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            display: 'inline-block',
            width: '48px',
            height: '2px',
            background: '#c9a96e',
            marginBottom: '24px',
          }} />
          <h1 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: '32px',
            fontWeight: 300,
            color: '#e8dcc8',
            letterSpacing: '0.1em',
            margin: '0 0 8px',
          }}>
            R&M Company
          </h1>
          <p style={{
            fontSize: '12px',
            letterSpacing: '0.25em',
            color: '#c9a96e',
            textTransform: 'uppercase',
            margin: 0,
          }}>
            Owner Portal
          </p>
        </div>

        <div style={{
          background: 'rgba(232, 220, 200, 0.04)',
          border: '1px solid rgba(201, 169, 110, 0.2)',
          borderRadius: '2px',
          padding: '40px',
        }}>
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '32px' }}>
              <label style={{
                display: 'block',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#c9a96e',
                marginBottom: '12px',
              }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter owner password"
                required
                autoFocus
                style={{
                  width: '100%',
                  background: 'rgba(232, 220, 200, 0.05)',
                  border: '1px solid rgba(201, 169, 110, 0.25)',
                  borderRadius: '1px',
                  padding: '14px 16px',
                  fontSize: '15px',
                  color: '#e8dcc8',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: '"DM Sans", sans-serif',
                }}
              />
            </div>

            {error && (
              <p style={{
                color: '#e07070',
                fontSize: '13px',
                marginBottom: '20px',
                textAlign: 'center',
              }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                background: loading ? 'rgba(201, 169, 110, 0.3)' : '#c9a96e',
                border: 'none',
                borderRadius: '1px',
                padding: '14px',
                fontSize: '12px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: loading ? '#999' : '#0a0908',
                cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: 500,
              }}
            >
              {loading ? 'Authenticating...' : 'Enter Dashboard'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
