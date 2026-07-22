import { useEffect } from 'react'

// Yayına alınca gerçek alan adınızla değiştirin (index.html, sitemap.xml, robots.txt içinde de).
export const BASE_URL = 'https://www.herendoga.com'

// Her sayfa (rota) için başlık ve açıklama
const PAGES = {
  '/': {
    title: 'Heren Doğa Anaokulu | Doğa Temelli Okul Öncesi Eğitim',
    description:
      'Özel Heren Doğa Anaokulu — Montessori, Waldorf ve Reggio Emilia yaklaşımlarını doğa ve oyunla buluşturan çocuk merkezli okul öncesi eğitim. Doğanın içinde, çocuğun ritminde.',
  },
  '/hakkimizda': {
    title: 'Hakkımızda | Heren Doğa Anaokulu',
    description:
      'Çocukların doğadan kopmadığı, oyunun eğitimden ayrılmadığı bir yuva. Eklektik ve çocuk merkezli eğitim anlayışımız, vizyonumuz ve değerlerimiz.',
  },
  '/yaklasimimiz': {
    title: 'Yaklaşımımız | Heren Doğa Anaokulu',
    description:
      'Montessori’nin bağımsızlığı, Waldorf’un hayal gücü ve Reggio Emilia’nın keşfini doğa ve oyunla buluşturan bütüncül eğitim yaklaşımımız.',
  },
  '/kitaplik': {
    title: 'Kitaplığımız | Heren Doğa Anaokulu',
    description:
      'Aç Tırtıl’dan Frederick’e, Minik Tohum’dan Renk Canavarı’na… Çocukların günlerine bir hikâyeyle başladığı zengin sınıf kitaplığımız.',
  },
  '/iletisim': {
    title: 'İletişim & Ön Kayıt | Heren Doğa Anaokulu',
    description:
      'Çocuğunuz için doğanın içinde bir yuva mı arıyorsunuz? Ön kayıt ve okul gezisi için bize ulaşın, sizi kahvaltıya bekleyelim.',
  },
}

function setTag(selector, attr, key, value) {
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value)
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Rota değişince başlık + meta etiketlerini günceller.
export function useSeo(pathname) {
  useEffect(() => {
    const page = PAGES[pathname] || PAGES['/']
    const url = BASE_URL + (pathname === '/' ? '/' : pathname)

    document.title = page.title
    setTag('meta[name="description"]', 'name', 'description', page.description)
    setTag('meta[property="og:title"]', 'property', 'og:title', page.title)
    setTag('meta[property="og:description"]', 'property', 'og:description', page.description)
    setTag('meta[property="og:url"]', 'property', 'og:url', url)
    setTag('meta[name="twitter:title"]', 'name', 'twitter:title', page.title)
    setTag('meta[name="twitter:description"]', 'name', 'twitter:description', page.description)
    setCanonical(url)
  }, [pathname])
}
