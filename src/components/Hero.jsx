import { Link } from 'react-router-dom'
import { HERO, OKUL } from '../data'
import {
  Arrow,
  Sprout,
  Cloud,
  StarDoodle,
  Plane,
  Sparkle,
  Dots,
  DashPath,
} from './icons'

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__sun" aria-hidden="true" />

      {/* emoji tarzı doodle'lar */}
      <div className="hero__doodles" aria-hidden="true">
        <Sparkle className="dd" style={{ top: '13%', left: '39%', width: 34, color: 'var(--gold)' }} />
        <Cloud className="dd" style={{ top: '9%', right: '4%', width: 62, color: 'var(--sky)' }} />
        <StarDoodle className="dd" style={{ top: '33%', right: '1.5%', width: 34, color: 'var(--sage)' }} />
        <DashPath className="dd" style={{ top: '40%', right: '9%', width: 90, color: 'var(--ink-faint)' }} />
        <Plane className="dd" style={{ top: '37%', right: '6%', width: 34, color: 'var(--terra)' }} />
        <Dots className="dd" style={{ top: '58%', left: '1%', width: 56, color: 'var(--terra)' }} />
        <StarDoodle className="dd" style={{ bottom: '16%', left: '44%', width: 24, color: 'var(--gold)' }} />
      </div>
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <span className="eyebrow">{HERO.ustBaslik}</span>
          <h1 className="display-xl">
            <span className="line">Doğanın içinde,</span>
            <span className="line">
              <em>çocuğun</em> <span className="leaf-underline">ritminde.</span>
            </span>
          </h1>
          <p className="hero__sub">{HERO.altYazi}</p>
          <div className="hero__cta">
            <Link className="btn" to="/iletisim">
              Bize ulaşın <Arrow width="18" height="18" />
            </Link>
            <Link className="btn btn--ghost" to="/hakkimizda">
              Bizi tanıyın
            </Link>
          </div>
          <p className="hero__note" style={{ marginTop: '1.4rem' }}>
            <Sprout
              width="18"
              height="18"
              style={{ display: 'inline', verticalAlign: '-3px', color: 'var(--green)' }}
            />{' '}
            {OKUL.slogan}
          </p>
        </div>

        <div className="hero__stage">
          <span className="hero__halo" aria-hidden="true" />
          <img
            className="hero__logo"
            src={`${import.meta.env.BASE_URL}logo-cut.webp`}
            alt={`${OKUL.adTam} logosu`}
            width="560"
            height="336"
            fetchpriority="high"
            decoding="async"
          />
        </div>
      </div>

      {/* çayır dalgası */}
      <svg
        className="hero__meadow"
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
        aria-hidden="true"
        height="120"
      >
        <path
          d="M0 70C180 24 340 24 520 58c180 34 320 44 500 14 150-25 290-40 420-24v82H0Z"
          fill="rgba(76,160,31,0.16)"
        />
        <path
          d="M0 96C200 58 380 58 560 84c180 26 360 30 540 6 130-17 250-24 340-14v58H0Z"
          fill="rgba(76,160,31,0.3)"
        />
      </svg>
    </header>
  )
}
