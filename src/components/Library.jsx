import { KITAPLAR } from '../data'

const rots = [-3, 2, -1.5, 3, -2, 1.5, -2.5, 2.5]

function Row({ ids, reverse, dur }) {
  // Kesintisiz döngü için iki kez basıyoruz.
  const doubled = [...ids, ...ids]
  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''}`}>
      <div className="marquee__track" style={{ '--dur': `${dur}s` }}>
        {doubled.map((id, i) => (
          <div
            className="spine"
            key={`${id}-${i}`}
            style={{ '--r': `${rots[i % rots.length]}deg` }}
          >
            <img
              src={`${import.meta.env.BASE_URL}kitaplar/${id}-sm.webp`}
              alt="Sınıf kitaplığından bir hikâye kitabı"
              loading="lazy"
              decoding="async"
              width="168"
              height="224"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Library() {
  const half = Math.ceil(KITAPLAR.length / 2)
  const row1 = KITAPLAR.slice(0, half)
  const row2 = KITAPLAR.slice(half)
  return (
    <section className="section library sec-cream" id="kitaplik">
      <div className="wrap library__head reveal">
        <span className="eyebrow" style={{ justifyContent: 'center' }}>
          Sınıf kitaplığımız
        </span>
        <h2>
          Her rafta bir <em>macera</em> saklı
        </h2>
        <p className="lede" style={{ margin: '1rem auto 0' }}>
          Aç Tırtıl’dan Frederick’e, Minik Tohum’dan Renk Canavarı’na… Çocuklar
          günlerine bir hikâyeyle başlar, merakla devam eder.
        </p>
      </div>
      <Row ids={row1} dur={70} />
      <Row ids={row2} reverse dur={78} />
    </section>
  )
}
