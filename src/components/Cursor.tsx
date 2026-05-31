'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = -100, mouseY = -100
    let ringX = -100, ringY = -100
    let animId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      // Dot snaps instantly to cursor
      if (dotRef.current) {
        dotRef.current.style.left = mouseX + 'px'
        dotRef.current.style.top = mouseY + 'px'
      }
      // Ring lerps slowly behind
      ringX += (mouseX - ringX) * 0.08
      ringY += (mouseY - ringY) * 0.08
      if (ringRef.current) {
        ringRef.current.style.left = ringX + 'px'
        ringRef.current.style.top = ringY + 'px'
      }
      animId = requestAnimationFrame(animate)
    }

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest('a,button,[role="button"],input,select,textarea,label')) {
        ringRef.current && (ringRef.current.style.width = '52px')
        ringRef.current && (ringRef.current.style.height = '52px')
        ringRef.current && (ringRef.current.style.borderColor = 'rgba(201,169,110,0.9)')
      }
    }
    const onLeave = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      if (t.closest('a,button,[role="button"],input,select,textarea,label')) {
        ringRef.current && (ringRef.current.style.width = '36px')
        ringRef.current && (ringRef.current.style.height = '36px')
        ringRef.current && (ringRef.current.style.borderColor = 'rgba(201,169,110,0.45)')
      }
    }
    const onDown = () => {
      dotRef.current && (dotRef.current.style.transform = 'translate(-50%,-50%) scale(0.6)')
      ringRef.current && (ringRef.current.style.transform = 'translate(-50%,-50%) scale(0.8)')
    }
    const onUp = () => {
      dotRef.current && (dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)')
      ringRef.current && (ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)')
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onEnter)
    window.addEventListener('mouseout', onLeave)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    animId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onEnter)
      window.removeEventListener('mouseout', onLeave)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', width: '7px', height: '7px',
        background: '#c9a96e', borderRadius: '50%',
        transform: 'translate(-50%,-50%)',
        pointerEvents: 'none', zIndex: 99999,
        transition: 'transform 0.15s ease',
        boxShadow: '0 0 8px rgba(201,169,110,0.7)',
        top: '-100px', left: '-100px',
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', width: '36px', height: '36px',
        border: '1px solid rgba(201,169,110,0.45)', borderRadius: '50%',
        transform: 'translate(-50%,-50%)',
        pointerEvents: 'none', zIndex: 99998,
        transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease, transform 0.15s ease',
        top: '-100px', left: '-100px',
      }} />
    </>
  )
}
