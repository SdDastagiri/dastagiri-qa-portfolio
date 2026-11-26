import { skillGroups } from '../data'
import SectionHeading from '../components/SectionHeading'
import SkillCard from '../components/SkillCard'

export default function Skills() {
  return <section className="section" id="skills"><div className="container"><SectionHeading eyebrow="TECHNICAL EXPERTISE" title="A practical engineering toolkit." description="Technologies and testing practices used across my QA work." /><div className="skills-grid">{skillGroups.map((group, i) => <SkillCard key={group.title} group={group} index={i} />)}</div></div></section>
}