'use client'

import { useState, useId } from 'react'

const PROJECT_TYPES = [
  'Full Home Renovation',
  'Interior Architecture',
  'Kitchen Design',
  'Bathroom Renovation',
  'Custom Millwork',
  'Outdoor Spaces',
]

const BUDGETS = [
  '$50K – $150K',
  '$150K – $300K',
  '$300K – $600K',
  '$600K – $1M',
  '$1M+',
]

interface FormState {
  name: string
  email: string
  phone: string
  type: string
  budget: string
  message: string
}

const EMPTY: FormState = {
  name: '',
  email: '',
  phone: '',
  type: '',
  budget: '',
  message: '',
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid rgba(245,240,232,0.14)',
  color: 'var(--color-ivory)',
  fontFamily: 'var(--font-sans)',
  fontWeight: 300,
  fontSize: '0.9375rem',
  padding: '0.7rem 0',
  outline: 'none',
  transition: 'border-color 0.25s ease',
  appearance: 'none',
}

export default function EstimateCTA() {
  const [form, setForm] = useState<FormState>(EMPTY)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const id = useId()

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderBottomColor = 'var(--color-gold)'
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderBottomColor = 'rgba(245,240,232,0.14)'
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 900))
    setSent(true)
    setSending(false)
  }

  return (
    <section
      id="estimate"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, var(--color-charcoal) 0%, var(--color-obsidian) 100%)',
      }} />

      {/* Gold glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-200px',
          right: '-200px',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1320px', margin: '0 auto' }}>
        <div className="estimate-wrap">

          {/* Left — Info */}
          <div className="estimate-left">
            <div className="label-row">
              <span className="t-label">Get Started</span>
            </div>
            <h2 className="t-display-l" style={{ marginBottom: '1.5rem' }}>
              Request a<br />
              <em>Free Estimate</em>
            </h2>
            <p className="t-body" style={{ maxWidth: '340px', marginBottom: '2.5rem' }}>
              Tell us about your project. We respond within 24 hours with a
              personalised consultation timeline and investment guide.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {[
                { icon: '✆', text: '+1 (647) 614-4437' },
                { icon: '@', text: 'hello@maisonatelier.ca' },
                { icon: '⌖', text: '220 King St W, Suite 410, Toronto' },
              ].map((row) => (
                <div key={row.text} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    flexShrink: 0,
                    border: '1px solid rgba(201,169,110,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    color: 'var(--color-gold)',
                  }}>
                    {row.icon}
                  </div>
                  <span className="t-body" style={{ fontSize: '0.85rem', paddingTop: '4px' }}>
                    {row.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="estimate-right">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '4rem 0' }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '3rem',
                  fontWeight: 300,
                  color: 'var(--color-ivory)',
                  marginBottom: '1rem',
                }}>
                  Thank you.
                </div>
                <p className="t-body">
                  We'll be in touch within 24 hours.
                </p>
                <button
                  onClick={() => { setForm(EMPTY); setSent(false) }}
                  className="btn btn-ghost-gold"
                  style={{ marginTop: '2rem' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                noValidate
                style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor={`${id}-name`}
                    className="t-label"
                    style={{ display: 'block', marginBottom: '0.5rem' }}
                  >
                    Full Name
                  </label>
                  <input
                    id={`${id}-name`}
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={update}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    required
                    placeholder="Your name"
                    style={inputStyle}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor={`${id}-email`}
                    className="t-label"
                    style={{ display: 'block', marginBottom: '0.5rem' }}
                  >
                    Email Address
                  </label>
                  <input
                    id={`${id}-email`}
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    required
                    placeholder="your@email.com"
                    style={inputStyle}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor={`${id}-phone`}
                    className="t-label"
                    style={{ display: 'block', marginBottom: '0.5rem' }}
                  >
                    Phone
                  </label>
                  <input
                    id={`${id}-phone`}
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={update}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    placeholder="+1 (416) 000 0000"
                    style={inputStyle}
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor={`${id}-type`}
                    className="t-label"
                    style={{ display: 'block', marginBottom: '0.5rem' }}
                  >
                    Project Type
                  </label>
                  <select
                    id={`${id}-type`}
                    name="type"
                    value={form.type}
                    onChange={update}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="" disabled>Select a service</option>
                    {PROJECT_TYPES.map((t) => (
                      <option
                        key={t}
                        value={t}
                        style={{ background: 'var(--color-charcoal)' }}
                      >
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor={`${id}-budget`}
                    className="t-label"
                    style={{ display: 'block', marginBottom: '0.5rem' }}
                  >
                    Budget Range
                  </label>
                  <select
                    id={`${id}-budget`}
                    name="budget"
                    value={form.budget}
                    onChange={update}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                  >
                    <option value="" disabled>Select a range</option>
                    {BUDGETS.map((b) => (
                      <option
                        key={b}
                        value={b}
                        style={{ background: 'var(--color-charcoal)' }}
                      >
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor={`${id}-msg`}
                    className="t-label"
                    style={{ display: 'block', marginBottom: '0.5rem' }}
                  >
                    Your Vision
                  </label>
                  <textarea
                    id={`${id}-msg`}
                    name="message"
                    value={form.message}
                    onChange={update}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    rows={3}
                    placeholder="Describe your project, timeline, and requirements…"
                    style={{ ...inputStyle, resize: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-gold"
                  disabled={sending}
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    opacity: sending ? 0.7 : 1,
                    transition: 'opacity 0.3s ease',
                    marginTop: '0.5rem',
                  }}
                >
                  {sending ? 'Sending…' : 'Send Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .estimate-wrap {
          display: grid;
          grid-template-columns: 1fr;
        }

        .estimate-left {
          padding: var(--section-padding-v) var(--section-padding-h);
          border-bottom: 1px solid rgba(201,169,110,0.1);
        }

        .estimate-right {
          padding: var(--section-padding-v) var(--section-padding-h);
        }

        @media (min-width: 1024px) {
          .estimate-wrap {
            grid-template-columns: 1fr 1fr;
          }
          .estimate-left {
            border-bottom: none;
            border-right: 1px solid rgba(201,169,110,0.1);
          }
        }

        input::placeholder,
        textarea::placeholder {
          color: var(--color-ash-light);
          opacity: 0.6;
        }

        select option {
          background: var(--color-charcoal);
          color: var(--color-ivory);
        }
      `}</style>
    </section>
  )
}