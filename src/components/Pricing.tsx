import { useEffect, useRef, useState } from 'react'

function useReveal(threshold = .1) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

const plans = {
  br: {
    symbol: 'R$',
    price: '47',
    old: 'R$97',
    label: 'Pagamento único • Acesso vitalício',
    methods: ['💳 Cartão', '📱 Pix', '🏦 Boleto'],
    cta: 'Quero Meus Templates Agora',
    badge: 'MAIS VENDIDO',
  },
  pt: {
    symbol: '€',
    price: '9,90',
    old: '€19,90',
    label: 'Pagamento único • Acesso vitalício',
    methods: ['💳 Cartão', '📱 MB Way', '🏦 Transferência'],
    cta: 'Quero Os Meus Templates',
    badge: '⭐ PARA PORTUGAL',
  },
}

export default function Pricing() {
  const { ref, visible } = useReveal(.1)
  const [locale, setLocale] = useState<'br' | 'pt'>('pt')

  const p = plans[locale]

  return (
    <section id="pricing" style={{
      padding: '100px 0',
      scrollMarginTop: 40,
      position: 'relative' as const,
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute' as const, inset: 0,
        background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(14,165,233,.05), transparent)',
      }} />

      <div ref={ref} style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', position: 'relative' as const, zIndex: 1 }}>
        <div style={{
          textAlign: 'center' as const, marginBottom: 40,
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all .6s ease',
        }}>
          <div style={{
            fontSize: 13, fontWeight: 600, color: '#0ea5e9',
            textTransform: 'uppercase' as const, letterSpacing: '1.5px', marginBottom: 12,
          }}>
            Investimento
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: 12 }}>
            Kit Completo de Templates
          </h2>
          <p style={{ fontSize: 15, color: '#64748b', maxWidth: 500, margin: '0 auto 24px' }}>
            Pagamento único. Acesso vitalício. Atualizações inclusas.
          </p>

          <div style={{
            display: 'inline-flex', background: 'rgba(30,41,59,.6)', borderRadius: 12,
            padding: 4, border: '1px solid rgba(148,163,184,.08)',
          }}>
            <button onClick={() => setLocale('pt')} style={{
              padding: '8px 24px', borderRadius: 10, fontSize: 13, fontWeight: 600,
              border: 'none', cursor: 'pointer',
              background: locale === 'pt' ? 'linear-gradient(135deg, #0ea5e9, #8b5cf6)' : 'transparent',
              color: locale === 'pt' ? '#fff' : '#64748b',
              transition: 'all .2s',
            }}>
              🇵🇹 Portugal (€)
            </button>
            <button onClick={() => setLocale('br')} style={{
              padding: '8px 24px', borderRadius: 10, fontSize: 13, fontWeight: 600,
              border: 'none', cursor: 'pointer',
              background: locale === 'br' ? 'linear-gradient(135deg, #0ea5e9, #8b5cf6)' : 'transparent',
              color: locale === 'br' ? '#fff' : '#64748b',
              transition: 'all .2s',
            }}>
              🇧🇷 Brasil (R$)
            </button>
          </div>
        </div>

        <div style={{
          maxWidth: 460,
          margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(30,41,59,.8), rgba(30,41,59,.3))',
          border: '1px solid rgba(14,165,233,.12)',
          borderRadius: 24,
          padding: '40px 36px',
          position: 'relative' as const,
          overflow: 'hidden',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(.97)',
          transition: 'all .6s ease .15s',
        }}>
          <div style={{
            position: 'absolute' as const, top: 0, left: 0, right: 0, height: 3,
            background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6, #0ea5e9)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 3s ease-in-out infinite',
          }} />

          <div style={{
            position: 'absolute' as const, top: 16, right: -32,
            background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
            color: '#fff', fontSize: 11, fontWeight: 700,
            padding: '4px 40px', transform: 'rotate(45deg)',
          }}>
            {p.badge}
          </div>

          <div style={{ textAlign: 'center' as const, marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 8 }}>
              <span style={{ fontSize: 18, color: '#475569', textDecoration: 'line-through' }}>{p.old}</span>
              <span style={{ fontSize: 24, fontWeight: 700, color: '#f1f5f9', verticalAlign: 'super' }}>{p.symbol}</span>
              <span style={{ fontSize: 56, fontWeight: 900, color: '#f1f5f9', letterSpacing: '-2px' }}>{p.price}</span>
            </div>
            <div style={{ fontSize: 14, color: '#64748b', marginTop: 4 }}>{p.label}</div>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10,
            marginBottom: 28,
          }}>
            {[
              { icon: '📦', title: '23 Templates', desc: 'Workflows prontos' },
              { icon: '📘', title: 'Guia PDF', desc: 'Setup passo a passo' },
              { icon: '💬', title: 'Grupo VIP', desc: 'Suporte WhatsApp' },
            ].map((b, i) => (
              <div key={i} style={{
                background: 'rgba(148,163,184,.04)',
                border: '1px solid rgba(148,163,184,.06)',
                borderRadius: 12, padding: '14px 12px', textAlign: 'center' as const,
              }}>
                <div style={{ fontSize: 22, marginBottom: 4 }}>{b.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#f1f5f9' }}>{b.title}</div>
                <div style={{ fontSize: 10, color: '#475569', marginTop: 2 }}>{b.desc}</div>
              </div>
            ))}
          </div>

          <ul style={{
            listStyle: 'none', padding: 0, margin: '0 0 32px',
            display: 'flex', flexDirection: 'column' as const, gap: 12,
          }}>
            {[
              '23 templates n8n testados em produção',
              'Workflows para Instagram, WhatsApp, Vendas e IA',
              'Arquivos JSON prontos para importar',
              'Guia PDF completo de instalação e uso',
              'Acesso ao grupo VIP de suporte no WhatsApp',
              'Atualizações vitalícias — novos templates inclusos',
              'Tratamento de erros em todos os workflows',
              'Documentação detalhada de cada template',
            ].map((f, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#cbd5e1' }}>
                <div style={{
                  width: 20, height: 20, borderRadius: '50%',
                  background: 'rgba(52,211,153,.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#10b981">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                {f}
              </li>
            ))}
          </ul>

          <a
            href="#"
            onClick={e => { e.preventDefault(); alert(`🔗 Checkout ${locale === 'pt' ? '€9,90 (Portugal)' : 'R$47 (Brasil)'}`) }}
          >
            <button
              style={{
                display: 'block', width: '100%',
                background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
                color: '#fff', padding: '18px 32px', borderRadius: 14,
                fontWeight: 700, fontSize: 17, border: 'none', cursor: 'pointer',
                transition: 'all .25s ease',
                boxShadow: '0 8px 30px rgba(14,165,233,.3)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 12px 44px rgba(14,165,233,.4)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(14,165,233,.3)'
              }}
            >
              {p.cta}
            </button>
          </a>

          <div style={{
            display: 'flex', justifyContent: 'center', gap: 20,
            marginTop: 16, fontSize: 12, color: '#475569',
          }}>
            {p.methods.map((m, i) => <span key={i}>{m}</span>)}
          </div>

          <div style={{
            textAlign: 'center' as const, marginTop: 24,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            fontSize: 13, color: '#34d399',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#34d399">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
            Compra segura • Garantia de 7 dias
          </div>
        </div>
      </div>
    </section>
  )
}
