import { Link } from 'react-router-dom'
import { OKUL } from '../data'

export default function Footer() {
  const yil = 2026
  return (
    <footer className="footer">
      <svg
        className="footer__wave"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
        height="70"
      >
        <path
          d="M0 40C220 78 420 78 640 48c220-30 420-34 800 6v40H0Z"
          fill="currentColor"
        />
      </svg>

      <div className="wrap footer__grid">
        <div>
          <div className="footer__brand">
            a<span className="brand__badge">
              <img src="/logo.webp" alt="" />
            </span>
            <span>Heren Doğa</span>
          </div>
          <p className="tag">“{OKUL.slogan}”</p>
          <p style={{ marginTop: '1rem', opacity: 0.8, maxWidth: '34ch' }}>
            {OKUL.adTam}. Doğa, oyun ve keşif temelli okul öncesi eğitim.
          </p>
        </div>

        <div>
          <h4>Keşfet</h4>
          <Link className="flink" to="/">
            Anasayfa
          </Link>
          <Link className="flink" to="/hakkimizda">
            Hakkımızda
          </Link>
          <Link className="flink" to="/yaklasimimiz">
            Yaklaşımımız
          </Link>
          <Link className="flink" to="/kitaplik">
            Kitaplığımız
          </Link>
        </div>

        <div>
          <h4>İletişim</h4>
          <a className="flink" href={`tel:${OKUL.telefon.replace(/\s/g, '')}`}>
            {OKUL.telefon}
          </a>
          <a className="flink" href={`mailto:${OKUL.eposta}`}>
            {OKUL.eposta}
          </a>
          <a className="flink" href="#" onClick={(e) => e.preventDefault()}>
            {OKUL.instagram}
          </a>
          <Link className="flink" to="/iletisim">
            Ön kayıt formu
          </Link>
        </div>
      </div>

      <div className="wrap footer__bottom">
        <span>
          © {yil} {OKUL.adTam}. Tüm hakları saklıdır.
        </span>
        <a
          className="tasarloji"
          href="https://tasarloji.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Design by <b>Tasarloji</b>
        </a>
      </div>
    </footer>
  )
}
