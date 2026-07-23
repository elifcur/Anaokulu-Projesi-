import { KITAPLAR } from '../data'

const rots = [-2, 1.5, -1, 2, -2.5, 1, -1.5, 2.5]

// Tüm kitap kapaklarının dağınık-şık ızgarası (Kitaplık sayfası).
export default function LibraryGrid() {
  return (
    <section className="section sec-cream">
      <div className="wrap">
        <div className="grid-books">
          {KITAPLAR.map((id, i) => (
            <div
              className="spine reveal"
              key={id}
              style={{ '--r': `${rots[i % rots.length]}deg`, animationDelay: `${(i % 6) * 0.05}s` }}
            >
              <img
                src={`${import.meta.env.BASE_URL}kitaplar/${id}-sm.webp`}
                alt="Sınıf kitaplığından bir hikâye kitabı"
                loading="lazy"
                decoding="async"
                width="380"
                height="507"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
