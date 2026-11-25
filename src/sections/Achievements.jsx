import { achievements } from '../data'

export default function Achievements() {
  return <section className="stats-section"><div className="container stats-grid">{achievements.map((item, i) => <article className="stat-card reveal" key={item.label}><span className="stat-index">0{i + 1}</span><strong>{item.value}</strong><h3>{item.label}</h3><p>{item.detail}</p></article>)}</div></section>
}