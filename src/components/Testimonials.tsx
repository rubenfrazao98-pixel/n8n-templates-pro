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

const testimonials = [
  {
    name: 'Rafael Oliveira',
    role: 'Marketing Digital',
    avatar: 'RO',
    text: 'Comprei o kit e já automatizei todo o atendimento do Instagram. Economizo umas 3h por dia. Vale cada centavo!',
    rating: 5,
  },
  {
    name: 'Camila Santos',
    role: 'E-commerce',
    avatar: 'CS',
    text: 'Os templates são muito bem feitos. Importei e funcionou de primeira. O suporte também é muito rápido.',
    rating: 5,
  },
  {
    name: 'Lucas Mendes',
    role: 'Gestor de Tráfego',
    avatar: 'LM',
    text: 'Já tinha tentado fazer meus próprios workflows mas sempre dava erro. Com esses templates resolvi tudo em minutos.',
    rating: 5,
  },
  {
    name: 'Juliana Costa',
    role: 'Infoprodutora',
    avatar: 'JC',
    text: 'A automação de lead pra email sequence mudou meu negócio. Os leads chegam e já recebem sequência de vendas.',
    rating: 5,
  },
]

export default function Testimonials() {
  const { ref, visible } = useReveal(.1)

  return (
    <section style={{
      padding: '100px 0',
      background: 'linear-gradient(180deg, transparent, rgba(14,165,233,.015), transparent)',
      position: 'relative' as const,
      overflow: 'hidden',
    }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          textAlign: 'center' as const, marginBottom: 48,
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all .6s ease',
        }}>
          <div style={{
            fontSize: 13, fontWeight: 600, color: '#0ea5e9',
            textTransform: 'uppercase' as const, letterSpacing: '1.5px', marginBottom: 12,
          }}>
            Depoimentos
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#f1f5f9' }}>
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
        }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                background: 'linear-gradient(135deg, rgba(30,41,59,.4), rgba(30,41,59,.2))',
                border: '1px solid rgba(148,163,184,.06)',
                borderRadius: 16,
                padding: 28,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all .5s ease ${.1 + i * .1}s`,
              }}
            >
              <div style={{
                color: '#fbbf24', fontSize: 14, marginBottom: 12, letterSpacing: 3,
                display: 'flex', gap: 2,
              }}>
                {Array.from({length: t.rating}).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic' as const }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700, color: '#fff',
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#f1f5f9' }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: '#475569' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
