import { Link } from 'react-router-dom'
import { Arrow } from './icons'
import { KAPANIS } from '../data'

export default function HomeCTA() {
  return (
    <section className="section cta">
      <div className="wrap cta__card reveal">
        <h2>{KAPANIS.baslik}</h2>
        <p>{KAPANIS.metin}</p>
        <div className="cta__actions">
          <Link className="btn" to="/iletisim">
            Ön kayıt & iletişim <Arrow width="18" height="18" />
          </Link>
          <Link className="btn btn--ghost btn--onDark" to="/hakkimizda">
            Bizi tanıyın
          </Link>
        </div>
      </div>
    </section>
  )
}
