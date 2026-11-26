import { ArrowUpRight, Check } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <article className="project-card reveal">
      <div className="project-topline"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span></div>
      <div className="project-title-row"><h3>{project.name}</h3><ArrowUpRight size={19} className="muted-icon" /></div>
      <p className="project-summary">{project.summary}</p>
      <div className="project-work">
        <span className="mini-label">CONTRIBUTIONS</span>
        <ul>{project.contributions.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul>
      </div>

      {project.links?.length > 0 && (
        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label={`Open ${link.label} in a new tab`}
            >
              {link.label}
              <span aria-hidden="true"> ↗</span>
            </a>
          ))}
        </div>
      )}

      <div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
    </article>
  )
}