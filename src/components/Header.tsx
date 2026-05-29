import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed' as const,
      top: 0, left: 0, right: 0,
      zIndex: 50,
      padding: scrolled ? '12px 0' : '18px 0',
      background: scrolled ? 'rgba(15,23,42,.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(1.5)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(148,163,184,.08)' : '1px solid transparent',
      transition: 'all .3s ease',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="28" height="28" viewBox="0 0 64 64" fill="none">
            <rect width="64" height="64" rx="14" fill="#0ea5e9"/>
            <path d="M18 20h10l8 12-8 12H18l8-12-8-12z" fill="#fff" opacity="0.9"/>
            <path d="M36 20h10l8 12-8 12H36l8-12-8-12z" fill="#fff" opacity="0.6"/>
          </svg>
          <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-0.5px' }}>
            n8n<span style={{ color: '#0ea5e9' }}>Pro</span>
          </span>
          <span style={{
            background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
            borderRadius: 6, padding: '3px 7px',
            fontSize: 10, fontWeight: 700, color: '#fff',
            letterSpacing: '0.3px',
          }}>
            TEMPLATES
          </span>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <a href="#templates" style={{
            fontSize: 13, color: '#94a3b8', fontWeight: 500,
            transition: 'color .2s', display: 'none',
          } as React.CSSProperties & { display?: string }}
            onMouseEnter={e => e.currentTarget.style.color = '#e2e8f0'}
            onMouseLeave={e => e.currentTarget.style.color = ''}
          >
            Templates
          </a>
          <a href="#pricing">
            <button style={{
              background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
              color: '#fff', padding: '9px 22px', borderRadius: 10,
              fontWeight: 600, fontSize: 13, border: 'none', cursor: 'pointer',
              transition: 'all .2s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(14,165,233,.35)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = ''
              }}
            >
              Comprar Agora
            </button>
          </a>
        </nav>
      </div>
    </header>
  )
}
