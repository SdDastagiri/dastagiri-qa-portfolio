
import {
  ShieldCheck,
  GitBranch,
  Crosshair,
  Gauge,
} from 'lucide-react'

import SectionHeading from '../components/SectionHeading'

const principles = [
  {
    icon: ShieldCheck,
    title: 'Quality by Design',
    description:
      'Identify risks early and validate critical business requirements across application workflows.',
  },
  {
    icon: GitBranch,
    title: 'End-to-End Thinking',
    description:
      'Connect UI, API, and backend validation to verify complete business scenarios.',
  },
  {
    icon: Crosshair,
    title: 'Practical Automation',
    description:
      'Build maintainable automation coverage for functional, regression, and API testing.',
  },
  {
    icon: Gauge,
    title: 'Continuous Improvement',
    description:
      'Investigate defects, analyze failures, and strengthen test coverage for reliable releases.',
  },
]

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">

        <SectionHeading
          eyebrow="ABOUT ME"
          title="Quality is more than a test result."
          description="A thoughtful approach to testing, automation, and dependable software delivery."
        />

        <div className="about-layout">

          {/* Professional Introduction */}
          <div className="about-copy">

            <p className="about-lead">
              I'm a QA Automation Engineer with{' '}
              <strong>4+ years of experience</strong> in software
              testing and automation across Web, API, Mobile,
              PWA, and POS applications.
            </p>

            <p>
              My experience includes developing and maintaining
              automation solutions, validating complex business
              workflows, performing end-to-end testing, and
              investigating defects across application and
              backend layers.
            </p>

            <p>
              I believe effective quality engineering goes beyond
              executing test cases. It involves understanding
              business requirements, identifying risks early,
              building meaningful automation coverage, and
              supporting reliable software releases.
            </p>

            {/* My Approach */}
            <div className="about-note">
              <span className="note-mark">“</span>
              <div>
                <strong>MY APPROACH</strong>
                <p>
                  Reliable coverage. Clear communication.
                  Quality in every release.
                </p>
              </div>
            </div>

          </div>

          {/* Engineering Principles */}
          <div className="principle-grid">

            {principles.map((item) => {
              const Icon = item.icon

              return (
                <article
                  className="principle-card"
                  key={item.title}
                >
                  <Icon size={23} strokeWidth={1.8} />

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              )
            })}

          </div>

        </div>
      </div>
    </section>
  )
}
