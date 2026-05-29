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

const benefits = [
  {
    icon: <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>,
    title: 'Pronto pra Usar',
    desc: 'Importe o JSON no seu n8n e execute em segundos. Zero configuração complexa.',
    color: '#fbbf24',
  },
  {
    icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>,
    title: '100% Testados',
    desc: 'Cada workflow foi validado em produção. Garantia de funcionamento imediato.',
    color: '#34d399',
  },
  {
    icon: <path d="M13 10V3L4 14h7v7l9-11h-7z"/>,
    title: 'Suporte VIP',
    desc: 'Grupo exclusivo no WhatsApp. Tire dúvidas direto com quem criou os templates.',
    color: '#38bdf8',
  },
  {
    icon: <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>,
    title: 'Atualizações Vitalícias',
    desc: 'Pague uma vez e receba todos os novos templates lançados. Para sempre.',
    color: '#a78bfa',
  },
  {
    icon: <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>,
    title: 'Seguro & Confiável',
    desc: 'Workflows com tratamento de erros, logs e boas práticas de segurança.',
    color: '#f472b6',
  },
  {
    icon: <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>,
    title: 'Documentação Inclusa',
    desc: 'Cada template com guia PDF explicando setup, variáveis e uso passo a passo.',
    color: '#38bdf8',
  },
]

export default function Benefits() {
  const { ref, visible } = useReveal(.05)

  return (
    <section style={{
      padding: '100px 0',
      background: 'linear-gradient(180deg, transparent, rgba(14,165,233,.015), transparent)',
    }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          textAlign: 'center' as const, marginBottom: 64,
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all .6s ease',
        }}>
          <div style={{
            fontSize: 13, fontWeight: 600, color: '#0ea5e9',
            textTransform: 'uppercase' as const, letterSpacing: '1.5px', marginBottom: 12,
          }}>
            Por que escolher
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#f1f5f9' }}>
            Tudo que você precisa pra automatizar
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 20,
        }}>
          {benefits.map((b, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(30,41,59,.4)',
                border: '1px solid rgba(148,163,184,.06)',
                borderRadius: 16,
                padding: 32,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all .5s ease ${.1 + i * .08}s, border .3s ease, background .3s ease, box-shadow .3s ease`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(148,163,184,.15)'
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,.2)'
                e.currentTarget.style.background = 'rgba(30,41,59,.6)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(148,163,184,.06)'
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = ''
                e.currentTarget.style.background = ''
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20, background: `${b.color}12`,
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={b.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {b.icon}
                </svg>
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, color: '#f1f5f9' }}>{b.title}</h3>
              <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
