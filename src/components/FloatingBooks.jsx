import { HERO_KITAPLAR } from '../data'

// Manifesto çevresinde süzülen dağınık kitaplar (kart iki yanına yerleşir).
const LAYOUT = [
  { top: '3%', left: '0%', w: 186, rot: -8, dur: 9, delay: 0 },
  { top: '42%', left: '3%', w: 158, rot: 6, dur: 11, delay: 0.8 },
  { top: '74%', left: '-1%', w: 196, rot: -4, dur: 10, delay: 0.4 },
  { top: '1%', left: '85%', w: 178, rot: 7, dur: 10.5, delay: 0.3 },
  { top: '38%', left: '88%', w: 164, rot: -6, dur: 12, delay: 1.2 },
  { top: '72%', left: '84%', w: 188, rot: 5, dur: 9.5, delay: 0.6 },
]

export default function FloatingBooks() {
  return (
    <div className="manifesto__books" aria-hidden="true">
      {LAYOUT.map((b, i) => {
        const id = HERO_KITAPLAR[i % HERO_KITAPLAR.length]
        return (
          <div
            key={i}
            className="floatbook"
            style={{
              top: b.top,
              left: b.left,
              '--w': `${b.w}px`,
              '--rot': `${b.rot}deg`,
              '--dur': `${b.dur}s`,
              '--delay': `${b.delay}s`,
            }}
          >
            <img src={`/kitaplar/${id}-sm.webp`} alt="" width={b.w} loading="lazy" />
          </div>
        )
      })}
    </div>
  )
}
