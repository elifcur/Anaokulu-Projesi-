import { GELISIM } from '../data'
import { iconByName } from './icons'

export default function Develop() {
  return (
    <section className="section develop sec-gold" id="gelisim">
      <div className="wrap develop__inner">
        <div className="reveal">
          <span className="eyebrow">Bütüncül gelişim</span>
          <h2>
            Sadece zihni değil, <em>bütün bir çocuğu</em> büyütürüz.
          </h2>
          <p className="lede" style={{ marginTop: '1.2rem' }}>
            Güvenli ve ritimli bir yapı içinde; bilişsel, duygusal, sosyal,
            fiziksel ve yaratıcı gelişimi birlikte destekliyoruz. Çünkü her
            çocuğun kendi gelişim hızı ve ritmi vardır.
          </p>
        </div>

        <div className="chips reveal">
          {GELISIM.map((g) => {
            const Ico = iconByName[g.icon]
            return (
              <span className="chip" key={g.ad}>
                <span className="chip__ico">
                  <Ico width="26" height="26" />
                </span>
                {g.ad} gelişim
              </span>
            )
          })}
        </div>
      </div>
    </section>
  )
}
