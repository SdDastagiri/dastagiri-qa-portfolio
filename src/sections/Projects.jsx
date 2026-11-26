import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

export default function Projects() {
  return <section className="section section-alt" id="projects"><div className="container"><SectionHeading eyebrow="PROJECT PORTFOLIO" title="Projects & contributions." description="A closer look at the products, workflows, and quality challenges I’ve worked on." /><div className="projects-grid">{projects.map(project => <ProjectCard key={project.number} project={project} />)}</div><p className="confidentiality-note">Project summaries are intentionally high-level and exclude confidential client information, internal endpoints, and production data.</p></div></section>
}