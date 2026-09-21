import { Check } from 'lucide-react'
import { experience } from '../data/portfolioData.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <h2 className="section-heading">Experience</h2>

        <div className="relative pl-8">
          <div
            className="absolute left-[5px] top-2 bottom-2 w-px"
            style={{ backgroundColor: 'var(--border-strong)' }}
          />

          {experience.map((job) => (
            <div
              key={job.company}
              className="relative mb-2"
            >
              <span
                className="absolute -left-8 top-2 rounded-full"
                style={{
                  width: '11px',
                  height: '11px',
                  backgroundColor: 'var(--accent)',
                  boxShadow: '0 0 0 4px var(--accent-soft)',
                }}
              />

              <div className="card">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3
                    className="font-display font-semibold text-lg"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    {job.role}
                  </h3>

                  <span
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {job.duration}
                  </span>
                </div>

                <p
                  className="text-sm font-medium mb-3"
                  style={{ color: 'var(--accent)' }}
                >
                  {job.company} · {job.type}
                </p>

                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {job.description}
                </p>

                <ul className="grid sm:grid-cols-2 gap-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      <Check
                        size={14}
                        style={{
                          color: 'var(--accent)',
                          marginTop: '3px',
                          flexShrink: 0,
                        }}
                      />

                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}