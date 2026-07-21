import { SLOGANLAR } from '../data'

export default function Band() {
  const items = [...SLOGANLAR, ...SLOGANLAR]
  return (
    <div className="band" aria-hidden="true">
      <div className="band__track">
        {items.map((s, i) => (
          <span className="band__item" key={i}>
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}
