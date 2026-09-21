import { useEffect, useState } from 'react'
import { Code2, Linkedin, Download } from 'lucide-react'
import { profile, links } from '../data/portfolioData.js'

const typingRoles = [
  'Software Engineer',
  'Full-Stack Developer',
  'AI-Supported Application Developer',
  'Computer Science & Data Science Undergraduate',
]

function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentRole = typingRoles[roleIndex]
    const isComplete = text === currentRole
    const isEmpty = text.length === 0

    let delay = deleting ? 38 : 72

    if (!deleting && isComplete) {
      delay = 1450
    }

    if (deleting && isEmpty) {
      delay = 450
    }

    const timer = window.setTimeout(() => {
      if (!deleting) {
        setText(currentRole.slice(0, text.length + 1))

        if (isComplete) {
          setDeleting(true)
        }
      } else {
        setText(currentRole.slice(0, Math.max(0, text.length - 1)))

        if (isEmpty) {
          setDeleting(false)
          setRoleIndex((index) => (index + 1) % typingRoles.length)
        }
      }
    }, delay)

    return () => window.clearTimeout(timer)
  }, [text, deleting, roleIndex])

  return (
    <div
      className="typing-shell"
      aria-label={`Current role: ${typingRoles[roleIndex]}`}
    >
      <Code2 size={17} aria-hidden="true" />

      <span className="typing-text">
        {text}
      </span>

      <span
        className="typing-cursor"
        aria-hidden="true"
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pt-28 pb-20 sm:pt-32 sm:pb-16"    >
      <div className="section-inner relative z-10 animate-fadeUp">

        <h1 className="hero-name font-display font-semibold leading-[0.9]">
          <span>Suhani</span>
          <span>Bhati</span>
        </h1>

        <TypingRole />

        <p
          className="hero-copy max-w-2xl text-base leading-relaxed"
          style={{ color: 'var(--text-secondary)' }}
        >
          {profile.heroText}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>

          <a
            href={links.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download resume"
            className="icon-action"
            style={{
              width: '2.75rem',
              height: '2.75rem',
            }}
          >
            <Download size={17} />
          </a>
        </div>
      </div>
    </section>
  )
}