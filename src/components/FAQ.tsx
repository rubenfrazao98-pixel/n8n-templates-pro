import { useEffect, useRef, useState } from 'react'

function useReveal(threshold = .05) {
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

const faqs = [
  { q: 'O que é n8n?', a: 'n8n é uma plataforma open-source de automação no-code. Com ela, você conecta apps como Instagram, WhatsApp, Gmail, GPT e centenas de outros sem escrever uma linha de código. É como o Zapier, mas self-hosted e muito mais barato.' },
  { q: 'Preciso saber programar para usar?', a: 'Não! Os templates já vêm prontos. Você só precisa importar o arquivo JSON no seu n8n, configurar as credenciais (como sua conta do Instagram ou WhatsApp) e ativar. Até quem nunca usou n8n consegue em minutos.' },
  { q: 'Como vou receber os templates?', a: 'Após a confirmação do pagamento, você recebe um link para baixar um arquivo .zip com todos os templates JSON + guia PDF + bônus. Os arquivos são compatíveis com n8n versão 1.x e superior.' },
  { q: 'O que está incluído no kit?', a: '23 templates para Instagram, WhatsApp, vendas, IA e produtividade. Guia PDF completo, acesso ao grupo VIP no WhatsApp, e atualizações vitalícias. Cada template tem tratamento de erros e boas práticas.' },
  { q: 'Funciona com qualquer hospedagem n8n?', a: 'Sim! Os templates funcionam em qualquer instância do n8n: self-hosted (VPS, Docker), n8n.cloud, Railway, Render, ou qualquer outra hospedagem. Basta importar o JSON.' },
  { q: 'Qual a garantia?', a: 'Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro. Sem perguntas.' },
  { q: 'Recebo atualizações?', a: 'Sim! Quando novos templates forem lançados, você recebe automaticamente. Já estamos preparando mais 10 templates para os próximos meses. O preço vai subir, mas quem já comprou continua com acesso vitalício.' },
  { q: 'Quanto tempo leva para configurar?', a: 'Cada template leva entre 5-15 minutos para configurar (importar + colocar credenciais). O guia PDF ensina passo a passo. Em menos de 1 hora você pode ter vários workflows rodando.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const { ref, visible } = useReveal(.05)

  return (
    <section style={{
      padding: '100px 0',
      background: 'linear-gradient(180deg, transparent, rgba(139,92,246,.015), transparent)',
    }}>
      <div ref={ref} style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          textAlign: 'center' as const, marginBottom: 48,
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all .6s ease',
        }}>
          <div style={{
            fontSize: 13, fontWeight: 600, color: '#0ea5e9',
            textTransform: 'uppercase' as const, letterSpacing: '1.5px', marginBottom: 12,
          }}>
            FAQ
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#f1f5f9' }}>
            Perguntas Frequentes
          </h2>
        </div>

        {faqs.map((faq, i) => (
          <div
            key={i}
            style={{
              borderBottom: '1px solid rgba(148,163,184,.06)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(16px)',
              transition: `all .4s ease ${.05 + i * .04}s`,
            }}
          >
            <div
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                cursor: 'pointer', gap: 16, padding: '22px 0',
                userSelect: 'none' as const,
              }}
            >
              <span style={{
                fontSize: 15, fontWeight: 600, color: '#e2e8f0',
                transition: 'color .2s',
              }}>
                {faq.q}
              </span>
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                style={{
                  color: '#475569', flexShrink: 0,
                  transition: 'transform .3s ease',
                  transform: open === i ? 'rotate(180deg)' : '',
                }}
              >
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </div>
            <div style={{
              fontSize: 14, color: '#64748b', lineHeight: 1.7,
              maxHeight: open === i ? 300 : 0,
              overflow: 'hidden',
              transition: 'all .35s ease',
              paddingTop: open === i ? 0 : 0,
              marginBottom: open === i ? 20 : 0,
            }}>
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
