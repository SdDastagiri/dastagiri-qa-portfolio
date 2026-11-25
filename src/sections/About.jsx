import { Crosshair, Gauge, GitBranch, ShieldCheck } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const principles = [
  { icon: ShieldCheck, title: 'Quality by design', text: 'Think beyond happy paths and validate behaviour where it matters most.' },
  { icon: GitBranch, title: 'End-to-end thinking', text: 'Connect UI, API, and backend checks to understand complete user workflows.' },
  { icon: Crosshair, title: 'Practical automation', text: 'Build maintainable coverage that supports fast, confident releases.' },
  { icon: Gauge, title: 'Continuous improvement', text: 'Use clear reporting and defect investigation to strengthen product quality.' },
]

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container">
        <SectionHeading eyebrow="01 / ABOUT ME" title="Quality is more than a test result." description="A thoughtful approach to testing, automation, and dependable software delivery." />
        <div className="about-layout">
          <div className="about-copy">
            <p className="about-lead">I’m a QA Automation Engineer with <strong>4+ years of experience</strong> across web, API, mobile, PWA, and POS applications.</p>
            <p>My core toolkit includes Java, Selenium WebDriver, REST Assured, Appium, TestNG, Maven, JavaScript, and Node.js. I’ve worked across UI and API automation, functional and regression testing, backend validation, test case design, defect investigation, and framework maintenance.</p>
            <p>I enjoy understanding how systems behave end to end, identifying meaningful risk, and building automation that gives teams useful feedback — not just more test scripts.</p>
            <div className="about-note"><span className="note-mark">“</span><span>My focus: reliable coverage, clear communication, and quality that supports every release.</span></div>
          </div>
          <div className="principle-grid">{principles.map(({ icon: Icon, title, text }) => <article className="principle-card" key={title}><Icon size={20} /><h3>{title}</h3><p>{text}</p></article>)}</div>
        </div>
      </div>
    </section>
  )
}