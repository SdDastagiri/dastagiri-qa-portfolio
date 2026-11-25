import * as Icons from 'lucide-react'

export default function SkillCard({ group, index }) {
  const Icon = Icons[group.icon] || Icons.Code2
  return (
    <article className="skill-card reveal" style={{ '--delay': `${index * 55}ms` }}>
      <div className="skill-icon"><Icon size={20} strokeWidth={1.8} /></div>
      <h3>{group.title}</h3>
      <div className="tag-list">{group.skills.map(skill => <span className="tag" key={skill}>{skill}</span>)}</div>
    </article>
  )
}