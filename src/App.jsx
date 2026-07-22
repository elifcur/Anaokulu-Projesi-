import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useReveal } from './components/useReveal'
import { useSeo } from './seo'
import ScrollToTop from './components/ScrollToTop'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'

// İkincil sayfalar tembel yüklenir (ilk açılışta kodları inmez → daha hızlı).
const Hakkimizda = lazy(() => import('./pages/Hakkimizda'))
const Yaklasim = lazy(() => import('./pages/Yaklasim'))
const Kitaplik = lazy(() => import('./pages/Kitaplik'))
const Iletisim = lazy(() => import('./pages/Iletisim'))

export default function App() {
  const { pathname } = useLocation()
  // Her rota değişiminde yeni .reveal öğelerini gözle.
  useReveal(pathname)
  // Her rota için başlık/meta etiketlerini güncelle (SEO).
  useSeo(pathname)

  return (
    <>
      <ScrollToTop />
      <Nav />
      <main key={pathname}>
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
