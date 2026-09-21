import { about } from '../data/portfolioData.js'
import CoreStrengths from './CoreStrengths.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner flex flex-col items-center text-center">
        <h2 className="section-heading section-heading--center">
          {about.title}
        </h2>

        <p
          className="max-w-3xl text-base leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {about.text}
        </p>

        <CoreStrengths />
      </div>
    </section>
  )
}