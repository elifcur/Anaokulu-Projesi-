import { FEATURES } from '../data'
import { iconByName } from './icons'

const renkVar = {
  green: 'var(--green)',
  gold: 'var(--gold)',
  sky: 'var(--sky)',
  terra: 'var(--terra)',
  sage: 'var(--sage)',
}

// Referanstaki dairesel ikon kartları satırı — beyaz yüzen kart içinde.
export default function Features() {
  return (
    <section className="features">
      <div className="wrap">
        <div className="features__card reveal">
          {FEATURES.map((f, i) => {
            const Ico = iconByName[f.icon]
            return (
              <div className="feature" key={f.baslik} style={{ '--c': renkVar[f.renk], animationDelay: `${i * 0.06}s` }}>
                <span className="feature__ico">
                  <Ico width="26" height="26" />
                </span>
                <h3>{f.baslik}</h3>
                <p>{f.metin}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
