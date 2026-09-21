import { Github, ExternalLink } from 'lucide-react'

function LinkIcon({ href, label, Icon }) {
  const available = Boolean(href && href !== '#')

  if (!available) {
    return (
      <span
        className="icon-action icon-action--disabled"
        aria-label={`${label} unavailable`}
        title="Not available yet"
      >
        <Icon size={15} />
      </span>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="icon-action"
    >
      <Icon size={15} />
    </a>
  )
}

export default function ProjectCard({ project }) {
  return (
    <div className="card flex flex-col h-full">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3
          className="font-display font-semibold text-lg"
          style={{ color: 'var(--text-primary)' }}
        >
          {project.title}
        </h3>

        <div className="flex items-center gap-2 shrink-0">
          <LinkIcon
            href={project.github}
            label={`${project.title} GitHub repository`}
            Icon={Github}
          />

          <LinkIcon
            href={project.live}
            label={`${project.title} live demo`}
            Icon={ExternalLink}
          />
        </div>
      </div>

      <p
        className="text-sm font-medium mb-3"
        style={{ color: 'var(--accent)' }}
      >
        {project.subtitle}
      </p>

      <p
        className="text-sm leading-relaxed mb-5"
        style={{ color: 'var(--text-secondary)' }}
      >
        {project.description}
      </p>

      <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-5">
        {project.features.map((f) => (
          <li
            key={f}
            className="text-xs"
            style={{ color: 'var(--text-secondary)' }}
          >
            · {f}
          </li>
        ))}
      </ul>

      <div
        className="flex flex-wrap gap-2 mt-auto pt-4"
        style={{
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        {project.tech.map((t) => (
          <span key={t} className="badge">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}