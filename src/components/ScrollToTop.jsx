import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Her rota değişiminde sayfayı en üste al.
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
