import { ArrowDown, ArrowUpRight, FileText, Github, Linkedin, Mail, Terminal } from 'lucide-react'
import { profile } from '../data'

export default function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> QA ENGINEERING · AUTOMATION · QUALITY</div>
          <p className="hero-intro">Hello, I’m</p>
          <h1>Sayyad <span>Dastagiri</span><i>.</i></h1>
          <h2>QA Automation Engineer</h2>
          <p className="hero-statement">Building confidence in every release.</p>
          <p className="hero-description">I bring 4+ years of experience testing and automating web, API, mobile, PWA, and POS applications — with a focus on reliable workflows and meaningful quality coverage.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore projects <ArrowUpRight size={17} /></a>
            <a className="button button-secondary" href={profile.resume} target="_blank" rel="noopener noreferrer">View resume <FileText size={16} /></a>
          </div>
          <div className="hero-socials">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18} /></a>
            <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>
            <span className="social-line" /><span className="social-caption">Open to QA / SDET opportunities</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Decorative automation code illustration">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="code-window">
            <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>quality-engineering.java</span><Terminal size={14} /></div>
            <div className="code-body">
              <div className="code-line"><span className="ln">01</span><span><b className="code-purple">class</b> <b className="code-blue">QualityEngineer</b> {'{'}</span></div>
              <div className="code-line"><span className="ln">02</span><span className="indent"><b className="code-purple">void</b> validateRelease() {'{'}</span></div>
              <div className="code-line"><span className="ln">03</span><span className="indent2">test.<b className="code-blue">automate</b>();</span></div>
              <div className="code-line"><span className="ln">04</span><span className="indent2">assert.<b className="code-green">quality</b>();</span></div>
              <div className="code-line"><span className="ln">05</span><span className="indent2">shipWithConfidence();</span></div>
              <div className="code-line"><span className="ln">06</span><span className="indent">{'}'}</span></div>
              <div className="code-line"><span className="ln">07</span><span>{'}'}</span></div>
              <div className="code-cursor" />
            </div>
            <div className="window-footer"><span><i /> SYSTEM QUALITY: IN FOCUS</span><span>JAVA · API · UI</span></div>
          </div>
          <div className="float-chip chip-top"><span className="chip-pulse" /> Automation-first mindset</div>
          <div className="float-chip chip-bottom"><span className="chip-check">✓</span> Release confidence</div>
          <div className="visual-caption">ENGINEERING WITH INTENT <ArrowDown size={13} /></div>
        </div>
      </div>
      <div className="hero-bottom container"><span>BASED IN INDIA</span><span className="hero-bottom-line" /><span>QUALITY · PRECISION · RELIABILITY</span></div>
    </section>
  )
}