import PageHero from '../components/PageHero'
import Approach from '../components/Approach'
import Rhythm from '../components/Rhythm'
import HomeCTA from '../components/HomeCTA'

export default function Yaklasim() {
  return (
    <>
      <PageHero
        eyebrow="Yaklaşımımız"
        title="Tek bir kalıp değil,"
        titleEm="dört ayrı kapı."
        subtitle="Montessori, Waldorf ve Reggio Emilia’nın en besleyici yanlarını doğa ve oyunla buluşturuyoruz."
        tone="sec-peach"
      />
      <Approach bare tone="sec-cream" />
      <Rhythm />
      <HomeCTA />
    </>
  )
}
