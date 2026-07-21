import { Sprout } from './icons'

// İç sayfaların üst başlığı.
export default function PageHero({ eyebrow, title, titleEm, subtitle, tone = 'sec-green' }) {
  return (
    <section className={`pagehero ${tone}`}>
      <span className="pagehero__leaf" aria-hidden="true">
        <Sprout width="120" height="120" />
      </span>
      <div className="wrap pagehero__inner reveal">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="display-l">
          {title} {titleEm && <em>{titleEm}</em>}
        </h1>
        {subtitle && <p className="lede">{subtitle}</p>}
      </div>
    </section>
  )
}
