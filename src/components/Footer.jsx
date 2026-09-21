import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react'

import {
  profile,
  links,
  footer,
} from '../data/portfolioData.js'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (item) => {
    document
      .getElementById(item.toLowerCase())
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="relative"
      style={{
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="section-inner relative px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <p
              className="font-display font-semibold text-lg mb-3"
              style={{ color: 'var(--text-primary)' }}
            >
              {profile.name}
            </p>

            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              {footer.description}
            </p>

            <p
              className="text-sm italic"
              style={{ color: 'var(--accent)' }}
            >
              "{footer.quote}"
            </p>
          </div>

          <div>
            <p
              className="font-display text-xs font-semibold tracking-wide mb-4"
              style={{ color: 'var(--accent)' }}
            >
              Navigate
            </p>

            <ul className="flex flex-col gap-2.5">
              {footer.navLinks.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo(item)}
                    className="text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              className="font-display text-xs font-semibold tracking-wide mb-4"
              style={{ color: 'var(--accent)' }}
            >
              Contact
            </p>

            <ul className="flex flex-col gap-2.5 mb-5">
              <li
                className="flex items-center gap-2 text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Mail size={14} />

                <a href={`mailto:${profile.email}`}>
                  {profile.email}
                </a>
              </li>

              <li
                className="flex items-center gap-2 text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                <Phone size={14} />

                <a href={profile.phoneHref}>
                  {profile.phone}
                </a>
              </li>

              <li
                className="flex items-center gap-2 text-sm"
                style={{ color: 'var(--text-secondary)' }}
              >
                <MapPin size={14} />

                {profile.location}
              </li>
            </ul>

            <div className="flex items-center gap-2">
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="icon-action"
              >
                <Github size={16} />
              </a>

              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="icon-action"
              >
                <Linkedin size={16} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="icon-action"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-wrap items-center justify-between gap-3 text-xs"
          style={{
            borderTop: '1px solid var(--border-subtle)',
            color: 'var(--text-secondary)',
          }}
        >
          <span>
            © {year} {profile.name}. All rights reserved.
          </span>

          <span>
            Built with React + Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  )
}
