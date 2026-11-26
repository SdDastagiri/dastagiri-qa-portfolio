import { ShieldCheck, Search, Database, MessageSquareText } from 'lucide-react'
import { achievements } from '../data'

const customerQualityPoints = [
  { icon: Search, title: 'Issue investigation', description: 'Reproduce reported issues and narrow down the failure area.' },
  { icon: Database, title: 'Backend validation', description: 'Use AWS CloudWatch logs and DynamoDB data to support analysis.' },
  { icon: MessageSquareText, title: 'Clear follow-through', description: 'Share findings with the team and support troubleshooting through resolution.' },
]

export default function Achievements() {
  return (
    <section className="stats-section" aria-label="Professional achievements">
      <div className="container">
        <div className="stats-grid">
          {achievements.map((item, i) => (
            <article className="stat-card reveal" key={item.label}>
              <span className="stat-index">0{i + 1}</span>
              <strong>{item.value}</strong>
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>

        <article className="customer-quality-card reveal">
          <div className="customer-quality-intro">
            <span className="customer-quality-icon"><ShieldCheck size={22} /></span>
            <div>
              <span className="customer-quality-eyebrow">BEYOND TEST EXECUTION</span>
              <h2>Customer-Centric Quality</h2>
              <p>
                I investigate customer-reported issues by reproducing scenarios, reviewing application
                logs, and validating backend data. I work with the team to identify likely root causes
                and support clear, timely resolution.
              </p>
            </div>
          </div>

          <div className="customer-quality-points">
            {customerQualityPoints.map(({ icon: Icon, title, description }) => (
              <div className="customer-quality-point" key={title}>
                <span className="customer-quality-point-icon"><Icon size={17} /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}
