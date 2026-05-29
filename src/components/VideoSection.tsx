import { useEffect, useRef, useState } from 'react'

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: .15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

export default function VideoSection() {
  const { ref, visible } = useReveal()
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  function handlePlay() {
    setPlaying(true)
    setTimeout(() => videoRef.current?.play(), 100)
  }

  return (
    <section style={{
      padding: '40px 0 100px',
      position: 'relative' as const,
    }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', textAlign: 'center' as const }}>
        <div style={{
          fontSize: 13, fontWeight: 600, color: '#0ea5e9',
          textTransform: 'uppercase' as const, letterSpacing: '1.5px', marginBottom: 12,
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all .6s ease',
        }}>
          Vídeo de Apresentação
        </div>

        <h2 style={{
          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
          fontWeight: 800, marginBottom: 16, color: '#f1f5f9',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all .6s ease .1s',
        }}>
          Veja como é fácil automatizar
        </h2>

        <p style={{
          fontSize: 15, color: '#64748b', maxWidth: 500, margin: '0 auto 36px',
          opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all .6s ease .2s',
        }}>
          Demonstração completa dos templates em ação.
        </p>

        <div
          ref={ref}
          style={{
            position: 'relative' as const,
            borderRadius: 20,
            overflow: 'hidden',
            background: '#0a0a0f',
            aspectRatio: '16 / 9',
            border: '1px solid rgba(148,163,184,.1)',
            boxShadow: '0 25px 80px rgba(0,0,0,.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(.97)',
            transition: 'all .8s ease .3s',
          }}
        >
          <video
            ref={videoRef}
            src="video/promo.mp4"
            playsInline
            controls={playing}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              display: 'block',
            }}
            onEnded={() => setPlaying(false)}
          />

          {!playing && (
            <div
              onClick={handlePlay}
              onMouseEnter={e => {
                const btn = e.currentTarget.querySelector('.play-btn') as HTMLElement
                if (btn) btn.style.transform = 'scale(1.1)'
              }}
              onMouseLeave={e => {
                const btn = e.currentTarget.querySelector('.play-btn') as HTMLElement
                if (btn) btn.style.transform = ''
              }}
              style={{
                position: 'absolute', inset: 0, cursor: 'pointer',
                background: 'linear-gradient(135deg, rgba(14,165,233,.12), rgba(139,92,246,.12))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexDirection: 'column', gap: 20, zIndex: 2,
              }}
            >
              <div className="play-btn" style={{
                width: 80, height: 80, borderRadius: '50%',
                background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all .3s',
                boxShadow: '0 8px 40px rgba(14,165,233,.4)',
              }}>
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span style={{ fontSize: 13, color: '#94a3b8', fontWeight: 500 }}>Assistir demonstração</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
