import { YAKLASIMLAR } from '../data'
import { Leaf } from './icons'

const renkVar = {
  terra: 'var(--terra)',
  green: 'var(--green)',
  gold: 'var(--gold)',
  sage: 'var(--sage)',
}

export default function Approach({ bare = false, tone = 'sec-peach' }) {
  return (
    <section className={`section ${tone}`} id="yaklasim">
      <div className="wrap">
        {!bare && (
          <div className="approach__head">
            <div>
              <span className="eyebrow">Eklektik & çocuk merkezli</span>
              <h2 className="display-l">
                Tek bir kalıp değil, çocuğa açılan dört kapı
              </h2>
            </div>
            <p className="lede">
              Dünyaca kabul görmüş yaklaşımların çocuğu en çok besleyen yanlarını,
              MEB programıyla bütünleştirip özgün bir kültüre dönüştürüyoruz.
            </p>
          </div>
        )}

        <div className="cards">
          {YAKLASIMLAR.map((y, i) => (
            <article
              className="card reveal"
              key={y.ad}
              style={{ '--c': renkVar[y.renk], animationDelay: `${i * 0.08}s` }}
            >
              <span className="card__tag" />
              <span className="card__num">0{i + 1}</span>
              <span className="card__dot">
                <Leaf width="22" height="22" />
              </span>
              <h3>{y.ad}</h3>
              <p className="card__ozet">{y.ozet}</p>
              <p>{y.metin}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
