import PageHero from '../components/PageHero'
import Contact from '../components/Contact'

export default function Iletisim() {
  return (
    <>
      <PageHero
        eyebrow="İletişim & ön kayıt"
        title="Gelin,"
        titleEm="tanışalım."
        subtitle="Çocuğunuz için doğanın içinde bir yuva arıyorsanız, bir okul gezisiyle başlayalım."
        tone="sec-green"
      />
      <Contact />
    </>
  )
}
