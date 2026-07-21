import PageHero from '../components/PageHero'
import Manifesto from '../components/Manifesto'
import HomeCTA from '../components/HomeCTA'
import { HAKKIMIZDA } from '../data'
import { Leaf } from '../components/icons'

export default function Hakkimizda() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Doğanın içinde,"
        titleEm="çocuğun yanında."
        subtitle="Özel Heren Doğa Anaokulu; doğa, oyun ve keşif temelli, çocuk merkezli bir okul öncesi eğitim yuvasıdır."
      />

      <Manifesto />

      <section className="section sec-cream">
        <div className="wrap about">
          <div className="about__intro reveal">
            <span className="eyebrow">Kim olduğumuz</span>
            <h2 className="display-l">{HAKKIMIZDA.girisBaslik}</h2>
            <p className="lede">{HAKKIMIZDA.giris}</p>
          </div>

          <div className="about__blocks">
            {HAKKIMIZDA.bloklar.map((b, i) => (
              <article className="about__block reveal" key={b.etiket} style={{ animationDelay: `${i * 0.08}s` }}>
                <span className="about__num">0{i + 1}</span>
                <span className="eyebrow">{b.etiket}</span>
                <h3>{b.baslik}</h3>
                <p>{b.metin}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sec-green">
        <div className="wrap quote-block reveal">
          <span className="quote-mark" aria-hidden="true">“</span>
          <p className="quote-block__text">{HAKKIMIZDA.alinti}</p>
          <ul className="values">
            {HAKKIMIZDA.degerler.map((d) => (
              <li key={d}>
                <Leaf width="18" height="18" /> {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <HomeCTA />
    </>
  )
}
