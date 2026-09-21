import { skills } from '../data/portfolioData.js'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <h2 className="section-heading">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="card">
              <p
                className="font-display text-xs font-semibold tracking-wide mb-4"
                style={{ color: 'var(--accent)' }}
              >
                {category}
              </p>

              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
