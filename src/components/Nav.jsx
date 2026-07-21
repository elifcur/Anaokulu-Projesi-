import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { OKUL } from '../data'
import { Arrow } from './icons'

const LINKS = [
  ['/', 'Anasayfa'],
  ['/hakkimizda', 'Hakkımızda'],
  ['/yaklasimimiz', 'Yaklaşımımız'],
  ['/kitaplik', 'Kitaplığımız'],
]

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

        <button
          className="nav__burger"
          aria-label="Menü"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'}>
              {label}
            </NavLink>
          ))}
          <Link className="btn" to="/iletisim">
            İletişim <Arrow width="18" height="18" />
          </Link>
        </div>
      )}
    </nav>
  )
}
