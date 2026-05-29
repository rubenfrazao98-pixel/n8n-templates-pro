import { useEffect, useRef, useState } from 'react'
import { templates, categories } from '../data/templates'

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

const catMap: Record<string, string> = {}
categories.forEach(c => { catMap[c.id] = c.color })

const filterBtn = (active: boolean): React.CSSProperties => ({
  padding: '8px 20px',
  borderRadius: 100,
  fontSize: 13,
  fontWeight: 500,
  border: active ? '1px solid rgba(14,165,233,.3)' : '1px solid rgba(148,163,184,.08)',
  background: active ? 'rgba(14,165,233,.1)' : 'transparent',
  color: active ? '#7dd3fc' : '#64748b',
  cursor: 'pointer',
  transition: 'all .2s ease',
})

export default function TemplatesShowcase() {
  const [filter, setFilter] = useState<string | null>(null)
  const { ref, visible } = useReveal(.03)
  const filtered = filter ? templates.filter(t => t.category === filter) : templates

  return (
    <section id="templates" style={{
      padding: '100px 0',
      background: 'linear-gradient(180deg, transparent, rgba(139,92,246,.015), transparent)',
      scrollMarginTop: 80,
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
            Catálogo
          </div>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 800, color: '#f1f5f9' }}>
            Conheça Todos os Templates
          </h2>
        </div>

        <div style={{
          display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 32,
          flexWrap: 'wrap' as const,
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(15px)',
          transition: 'all .5s ease .1s',
        }}>
          <button style={filterBtn(filter === null)} onClick={() => setFilter(null)}>
            Todos ({templates.length})
          </button>
          {categories.map(cat => (
            <button key={cat.id} style={filterBtn(filter === cat.id)} onClick={() => setFilter(cat.id)}>
              {cat.name}
            </button>
          ))}
        </div>

        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          marginBottom: 24, padding: '12px 20px',
          background: 'rgba(30,41,59,.25)', borderRadius: 12,
          border: '1px solid rgba(148,163,184,.04)',
          opacity: visible ? 1 : 0, transition: 'all .5s ease .15s',
        }}>
          <span style={{ fontSize: 14, color: '#94a3b8' }}>
            Exibindo <strong style={{ color: '#f1f5f9' }}>{filtered.length}</strong> templates
          </span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 13, color: '#34d399',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#34d399"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            Todos testados
          </span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 16,
        }}>
          {filtered.map((t, i) => (
            <div
              key={t.id}
              style={{
                background: 'rgba(30,41,59,.35)',
                border: '1px solid rgba(148,163,184,.06)',
                borderRadius: 14,
                padding: 24,
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all .4s ease ${.15 + Math.min(i, 11) * .04}s, border .3s ease, box-shadow .3s ease, background .3s ease`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(148,163,184,.12)'
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,.15)'
                e.currentTarget.style.background = 'rgba(30,41,59,.55)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(148,163,184,.06)'
                e.currentTarget.style.transform = ''
                e.currentTarget.style.boxShadow = ''
                e.currentTarget.style.background = ''
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, background: 'rgba(148,163,184,.04)',
                }}>
                  {t.icon}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#f1f5f9' }}>{t.name}</div>
                </div>
              </div>
              <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6, marginBottom: 16 }}>
                {t.description}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 100,
                  background: `${catMap[t.category] || '#64748b'}12`,
                  color: catMap[t.category] || '#64748b',
                }}>
                  {t.difficulty}
                </span>
                <span style={{ fontSize: 12, color: '#475569' }}>{t.nodes} nodes</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
