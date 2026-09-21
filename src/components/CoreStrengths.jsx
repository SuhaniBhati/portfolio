import { coreStrengths } from '../data/portfolioData.js'

export default function CoreStrengths() {
  return (
    <div className="card mt-8 w-full max-w-4xl text-left">
      <p
        className="font-display text-xs font-semibold tracking-wide mb-5"
        style={{ color: 'var(--accent)' }}
      >
        Core Strengths
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {coreStrengths.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm"
            style={{
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              backgroundColor: 'var(--surface-soft)',
            }}
          >
            <span
              className="shrink-0 rounded-full"
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: 'var(--accent)',
              }}
            />

            {item}
          </div>
        ))}
      </div>
    </div>
  )
}