export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(148,163,184,.06)',
      padding: '40px 0',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 24px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap' as const, gap: 16,
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          fontWeight: 700, fontSize: 15, color: '#94a3b8',
        }}>
          <svg width="18" height="18" viewBox="0 0 64 64" fill="none">
            <rect width="64" height="64" rx="14" fill="#0ea5e9"/>
            <path d="M18 20h10l8 12-8 12H18l8-12-8-12z" fill="#fff" opacity="0.9"/>
            <path d="M36 20h10l8 12-8 12H36l8-12-8-12z" fill="#fff" opacity="0.6"/>
          </svg>
          n8n Templates PRO
        </div>

        <div style={{ display: 'flex', gap: 20, fontSize: 13, color: '#475569' }}>
          <a href="#" style={{ transition: 'color .2s' }} onMouseEnter={e => e.currentTarget.style.color = '#94a3b8'} onMouseLeave={e => e.currentTarget.style.color = ''}>Termos</a>
          <a href="#" style={{ transition: 'color .2s' }} onMouseEnter={e => e.currentTarget.style.color = '#94a3b8'} onMouseLeave={e => e.currentTarget.style.color = ''}>Privacidade</a>
          <a href="#" style={{ transition: 'color .2s' }} onMouseEnter={e => e.currentTarget.style.color = '#94a3b8'} onMouseLeave={e => e.currentTarget.style.color = ''}>Suporte</a>
        </div>

        <div style={{ fontSize: 12, color: '#475569', width: '100%', textAlign: 'center' as const, marginTop: 8 }}>
          © 2026 n8n Templates PRO. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
