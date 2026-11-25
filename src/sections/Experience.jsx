import SectionHeading from '../components/SectionHeading'
import TimelineItem from '../components/TimelineItem'
import { experience } from '../data'

export default function Experience() {
  return <section className="section" id="experience"><div className="container"><SectionHeading eyebrow="04 / CAREER" title="Professional experience." description="Roles and responsibilities across quality engineering and software testing." /><div className="timeline">{experience.map((item, i) => <TimelineItem key={item.company} item={item} index={i} />)}</div></div></section>
}