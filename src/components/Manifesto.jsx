import { MANIFESTO } from '../data'
import { Branch } from './icons'
import FloatingBooks from './FloatingBooks'

export default function Manifesto() {
  return (
    <section className="section manifesto sec-green" id="felsefe">
      <FloatingBooks />
      <Branch
        className="doodle"
        style={{ top: '8%', left: '4%', width: 160, transform: 'rotate(8deg)' }}
        aria-hidden="true"
      />
      <Branch
        className="doodle"
        style={{
          bottom: '10%',
          right: '3%',
          width: 150,
          transform: 'scaleX(-1) rotate(6deg)',
          color: 'var(--gold)',
          opacity: 0.55,
        }}
        aria-hidden="true"
      />
      <div className="wrap">
        <div className="manifesto__card reveal">
          <span className="eyebrow" style={{ marginBottom: '1rem' }}>
            Felsefemiz
          </span>
          <h2>
            Her çocuk, dünyayı <em>dokunarak</em> öğrenir
          </h2>
          <p className="poem">
            {MANIFESTO.dizeler.map((d, i) =>
              d === '' ? (
                <span className="gap" key={i} />
              ) : (
                <span key={i}>
                  {d}
                  <br />
                </span>
              )
            )}
          </p>
        </div>
      </div>
    </section>
  )
}
