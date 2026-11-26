import { education } from '../data'
import { GraduationCap } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function Education() {
  return <section className="section section-alt" id="education"><div className="container"><SectionHeading eyebrow="ACADEMIC BACKGROUND" title="Academic foundation." /><article className="education-card"><div className="education-icon"><GraduationCap size={25} /></div><div><span className="timeline-period">{education.year}</span><h3>{education.degree}</h3><p>{education.college}</p><span className="education-university">{education.university}</span></div><span className="education-year">{education.year}</span></article></div></section>
}