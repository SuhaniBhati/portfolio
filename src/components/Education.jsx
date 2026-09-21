import { education } from '../data/portfolioData.js'

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="section-inner">
        <h2 className="section-heading">Education</h2>
        <div className="flex flex-col gap-5">
          {education.map((edu) => (
            <div
              key={edu.school}
              className="card"
              style={edu.primary ? { borderColor: 'var(--border-strong)' } : {}}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <h3
                  className="font-display font-semibold"
                  style={{
                    color: 'var(--text-primary)',
                    fontSize: edu.primary ? '1.15rem' : '1rem',
                  }}
                >
                  {edu.school}
                </h3>
                <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {edu.duration}
                </span>
              </div>
              <p className="text-sm mb-1" style={{ color: 'var(--accent)' }}>
                {edu.degree}
              </p>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                {edu.detail} · {edu.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
