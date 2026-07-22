import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { OKUL } from '../data'
import { Arrow, Phone } from './icons'

const LINKS = [
  ['/', 'Anasayfa'],
  ['/hakkimizda', 'Hakkımızda'],
  ['/yaklasimimiz', 'Yaklaşımımız'],
  ['/kitaplik', 'Kitaplığımız'],
]
// Mobil menüde İletişim de listede yer alsın
const MOBILE_LINKS = [...LINKS, ['/iletisim', 'İletişim']]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const telHref = `tel:${OKUL.telefon.replace(/[^0-9+]/g, '')}`

  return (
    <nav className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <Link className="brand" to="/" aria-label={OKUL.adTam}>
          <img className="brand__logo" src="/logo-header.webp" alt={OKUL.adTam} />
        </Link>

        <div className="nav__links">
          {LINKS.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => (isActive ? 'is-active' : '')}
            >
              {label}
            </NavLink>
          ))}
          <Link className="btn nav__cta" to="/iletisim">
            İletişim <Arrow width="18" height="18" />
          </Link>
        </div>

        <div className="nav__mobtools">
          <a className="nav__call" href={telHref} aria-label="Bizi arayın">
            <Phone width="20" height="20" />
          </a>
          <button
            className="nav__burger"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {open && (
        <div className="wrap">
          <div className="nav__mobile">
            {MOBILE_LINKS.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                <span className="nav__dot" aria-hidden="true" />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
