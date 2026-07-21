import PageHero from '../components/PageHero'
import LibraryGrid from '../components/LibraryGrid'
import HomeCTA from '../components/HomeCTA'

export default function Kitaplik() {
  return (
    <>
      <PageHero
        eyebrow="Sınıf kitaplığımız"
        title="Her rafta bir"
        titleEm="macera saklı."
        subtitle="Aç Tırtıl’dan Frederick’e, Minik Tohum’dan Renk Canavarı’na… Çocuklar günlerine bir hikâyeyle başlar."
        tone="sec-sky"
      />
      <LibraryGrid />
      <HomeCTA />
    </>
  )
}
