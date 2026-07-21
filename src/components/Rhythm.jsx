import { GUNUMUZ } from '../data'

const renkler = ['var(--terra)', 'var(--green)', 'var(--gold)', 'var(--sky)']

export default function Rhythm() {
  return (
    <section className="section sec-sky" id="gunumuz">
      <div className="wrap">
        <span className="eyebrow">Bir günümüz</span>
        <h2 className="display-l" style={{ marginTop: '0.6rem', maxWidth: '18ch' }}>
          Öğrenme masada değil, hayatın içinde başlar.
        </h2>

        <div className="rhythm__grid">
          {GUNUMUZ.map((g, i) => (
            <article
              className="rhythm__item reveal"
              key={g.baslik}
              style={{ '--c': renkler[i], animationDelay: `${i * 0.08}s` }}
            >
              <div className="rhythm__num">0{i + 1}</div>
              <h3>{g.baslik}</h3>
              <p>{g.metin}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
