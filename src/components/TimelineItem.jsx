import { BriefcaseBusiness } from 'lucide-react'

export default function TimelineItem({ item, index }) {
  return (
    <article className="timeline-item reveal">
      <div className="timeline-marker"><BriefcaseBusiness size={17} /></div>
      <div className="timeline-card">
        <div className="timeline-head">
          <div><span className="timeline-period">{item.period}</span><h3>{item.company}</h3><p className="timeline-role">{item.role}</p></div>
          <span className="timeline-index">0{index + 1}</span>
        </div>
        <ul className="timeline-points">{item.points.map(point => <li key={point}>{point}</li>)}</ul>
      </div>
    </article>
  )
}