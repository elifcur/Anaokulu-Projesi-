import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useSeo } from './seo'
import ScrollToTop from './components/ScrollToTop'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'

// İkincil sayfalar tembel yüklenir (ilk açılış hafif kalsın).
const load = {
  hakkimizda: () => import('./pages/Hakkimizda'),
  yaklasim: () => import('./pages/Yaklasim'),
  kitaplik: () => import('./pages/Kitaplik'),
  iletisim: () => import('./pages/Iletisim'),
}
const Hakkimizda = lazy(load.hakkimizda)
const Yaklasim = lazy(load.yaklasim)
const Kitaplik = lazy(load.kitaplik)
const Iletisim = lazy(load.iletisim)

export default function App() {
  const { pathname } = useLocation()
  // Her rota için başlık/meta etiketlerini güncelle (SEO).
  useSeo(pathname)

  // Anasayfa açılınca boştayken diğer sayfaların kodunu önden indir →
  // tıklayınca ANINDA açılır (tembel yüklemenin gecikmesi hissedilmez).
  useEffect(() => {
    const prefetch = () => Object.values(load).forEach((fn) => fn())
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(prefetch, { timeout: 2500 })
      return () => window.cancelIdleCallback?.(id)
    }
    const id = setTimeout(prefetch, 1200)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hakkimizda" element={<Hakkimizda />} />
            <Route path="/yaklasimimiz" element={<Yaklasim />} />
            <Route path="/kitaplik" element={<Kitaplik />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
