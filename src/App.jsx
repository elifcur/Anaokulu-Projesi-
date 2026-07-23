import { Routes, Route, useLocation } from 'react-router-dom'
import { useSeo } from './seo'
import ScrollToTop from './components/ScrollToTop'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Hakkimizda from './pages/Hakkimizda'
import Yaklasim from './pages/Yaklasim'
import Kitaplik from './pages/Kitaplik'
import Iletisim from './pages/Iletisim'

export default function App() {
  const { pathname } = useLocation()
  // Her rota için başlık/meta etiketlerini güncelle (SEO).
  useSeo(pathname)

  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/yaklasimimiz" element={<Yaklasim />} />
          <Route path="/kitaplik" element={<Kitaplik />} />
          <Route path="/iletisim" element={<Iletisim />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
