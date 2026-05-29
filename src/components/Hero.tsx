import { useState } from 'react'

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    position: 'relative' as const,
    overflow: 'hidden',
    paddingTop: 80,
  },
  bg: {
    position: 'absolute' as const,
    inset: 0,
    background: `
      radial-gradient(ellipse 80% 60% at 50% -20%, rgba(14,165,233,.15), transparent),
      radial-gradient(ellipse 60% 50% at 80% 80%, rgba(139,92,246,.1), transparent),
      radial-gradient(ellipse 40% 40% at 20% 70%, rgba(14,165,233,.05), transparent)
    `,
  },
  grid: {
    position: 'absolute' as const,
    inset: 0,
    maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 30%, transparent 70%)',
    WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 30%, transparent 70%)',
    backgroundImage: `
      linear-gradient(rgba(148,163,184,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(148,163,184,.04) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
  },
  floatingOrb: (x: number, y: number, size: number, delay: number) => ({
    position: 'absolute' as const,
    left: `${x}%`,
    top: `${y}%`,
    width: size,
    height: size,
    borderRadius: '50%',
    background: `radial-gradient(circle, rgba(14,165,233,.12), transparent)`,
    animation: `float ${6 + delay}s ease-in-out infinite`,
    animationDelay: `${delay}s`,
    pointerEvents: 'none' as const,
  }),
  content: {
    position: 'relative' as const,
    zIndex: 1,
    textAlign: 'center' as const,
    maxWidth: 800,
    margin: '0 auto',
    padding: '0 24px',
  },
  pill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    background: 'rgba(14,165,233,.08)',
    border: '1px solid rgba(14,165,233,.15)',
    borderRadius: 100,
    padding: '6px 18px 6px 8px',
    fontSize: 13,
    color: '#7dd3fc',
    marginBottom: 28,
    animation: 'fadeInUp .6s ease',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#34d399',
    display: 'inline-block',
    animation: 'pulse-glow 2s ease-in-out infinite',
  },
  title: {
    fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
    fontWeight: 900,
    lineHeight: 1.08,
    letterSpacing: '-2.5px',
    marginBottom: 24,
    animation: 'fadeInUp .6s ease .1s both',
  },
  subtitle: {
    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
    color: '#94a3b8',
    lineHeight: 1.7,
    maxWidth: 580,
    margin: '0 auto 40px',
    animation: 'fadeInUp .6s ease .2s both',
  },
  ctaGroup: {
    display: 'flex',
    gap: 12,
    justifyContent: 'center',
    flexWrap: 'wrap' as const,
    animation: 'fadeInUp .6s ease .3s both',
  },
  ctaPrimary: {
    background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
    color: '#fff',
    padding: '18px 44px',
    borderRadius: 14,
    fontWeight: 700,
    fontSize: 16,
    border: 'none',
    cursor: 'pointer',
    transition: 'all .25s ease',
    boxShadow: '0 4px 24px rgba(14,165,233,.3)',
    letterSpacing: '0.3px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
  },
  ctaSecondary: {
    background: 'rgba(148,163,184,.06)',
    color: '#e2e8f0',
    padding: '18px 36px',
    borderRadius: 14,
    fontWeight: 600,
    fontSize: 16,
    border: '1px solid rgba(148,163,184,.12)',
    cursor: 'pointer',
    transition: 'all .25s ease',
  },
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: 56,
    marginTop: 64,
    flexWrap: 'wrap' as const,
    animation: 'fadeInUp .6s ease .4s both',
  },
  statItem: { textAlign: 'center' as const },
  statValue: {
    fontSize: 30,
    fontWeight: 800,
    color: '#f1f5f9',
    letterSpacing: '-0.5px',
    background: 'linear-gradient(180deg, #f1f5f9, #94a3b8)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  statLabel: {
    fontSize: 13,
    color: '#475569',
    marginTop: 4,
    fontWeight: 500,
  },
  divider: {
    width: 1,
    background: 'rgba(148,163,184,.1)',
    alignSelf: 'stretch' as const,
  },
  toggle: {
    display: 'inline-flex', background: 'rgba(30,41,59,.5)', borderRadius: 10,
    padding: 3, marginTop: 32,
    animation: 'fadeInUp .6s ease .45s both',
  },
  toggleBtn: (active: boolean) => ({
    padding: '6px 18px', borderRadius: 8, fontSize: 12, fontWeight: 600,
    border: 'none', cursor: 'pointer',
    background: active ? 'linear-gradient(135deg, #0ea5e9, #8b5cf6)' : 'transparent',
    color: active ? '#fff' : '#64748b',
    transition: 'all .2s',
  }),
}

export default function Hero() {
  const [currency, setCurrency] = useState<'br' | 'pt'>('pt')

  return (
    <section style={styles.section}>
      <div style={styles.bg} />
      <div style={styles.grid} />
      <div style={styles.floatingOrb(15, 20, 300, 0)} />
      <div style={styles.floatingOrb(80, 60, 200, 2)} />
      <div style={styles.floatingOrb(60, 10, 150, 4)} />

      <div style={styles.content}>
        <div style={styles.pill}>
          <span style={styles.dot} />
          23 templates testados em produção
        </div>

        <h1 style={styles.title}>
          Automatize Seu Negócio{' '}
          <span className="gradient-text">Sem Escrever Código</span>
        </h1>

        <p style={styles.subtitle}>
          Kit completo com 23 workflows n8n prontos para importar.
          Automatize Instagram, WhatsApp, vendas e IA — tudo testado e validado.
        </p>

        <div style={styles.ctaGroup}>
          <a href="#pricing">
            <button
              style={styles.ctaPrimary}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 8px 40px rgba(14,165,233,.45)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(14,165,233,.3)'
              }}
            >
              {currency === 'pt' ? 'Quero Automatizar' : 'Quero Automatizar Agora'}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </a>
          <a href="#templates">
            <button
              style={styles.ctaSecondary}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(148,163,184,.12)'
                e.currentTarget.style.borderColor = 'rgba(148,163,184,.2)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = ''
                e.currentTarget.style.borderColor = ''
              }}
            >
              Ver Templates
            </button>
          </a>
        </div>

        <div style={styles.stats}>
          <div style={styles.statItem}>
            <div style={styles.statValue}>23</div>
            <div style={styles.statLabel}>Templates</div>
          </div>
          <div style={styles.divider} />
          <div style={styles.statItem}>
            <div style={styles.statValue}>100%</div>
            <div style={styles.statLabel}>Testados</div>
          </div>
          <div style={styles.divider} />
          <div style={styles.statItem}>
            <div style={styles.statValue}>+200</div>
            <div style={styles.statLabel}>Clientes</div>
          </div>
          <div style={styles.divider} />
          <div style={styles.statItem}>
            <div style={styles.statValue}>{currency === 'pt' ? '€9,90' : 'R$47'}</div>
            <div style={styles.statLabel}>Investimento</div>
          </div>
        </div>

        <div style={styles.toggle as React.CSSProperties}>
          <button
            style={styles.toggleBtn(currency === 'pt')}
            onClick={() => setCurrency('pt')}
          >
            🇵🇹 Portugal (€)
          </button>
          <button
            style={styles.toggleBtn(currency === 'br')}
            onClick={() => setCurrency('br')}
          >
            🇧🇷 Brasil (R$)
          </button>
        </div>
      </div>
    </section>
  )
}
