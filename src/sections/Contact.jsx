import { ArrowUpRight, Github, Linkedin, Mail, FileText, Phone } from 'lucide-react'
import { profile } from '../data'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <SectionHeading eyebrow="06 / GET IN TOUCH" title="Let’s build quality into what’s next." description="If you’re hiring for QA Automation or SDET opportunities, I’d be glad to connect." centered />
        <div className="contact-panel">
          <div>
            <span className="eyebrow">START A CONVERSATION</span>
            <h3>Have a role or a project in mind?</h3>
            <p>Reach out by phone or email, or connect with me through my professional profiles.</p>
            <a className="button button-primary" href={`mailto:${profile.email}`}>Email me <ArrowUpRight size={17} /></a>
          </div>
          <div className="contact-links">
            <a href={`mailto:${profile.email}`}><Mail size={18} /><span><small>EMAIL</small>{profile.email}</span><ArrowUpRight size={16} /></a>
            <a href={`tel:${profile.phone}`}><Phone size={18} /><span><small>PHONE</small>{profile.phoneDisplay}</span><ArrowUpRight size={16} /></a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /><span><small>LINKEDIN</small>Connect professionally</span><ArrowUpRight size={16} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18} /><span><small>GITHUB</small>View code & repositories</span><ArrowUpRight size={16} /></a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer"><FileText size={18} /><span><small>RESUME</small>View my resume</span><ArrowUpRight size={16} /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
