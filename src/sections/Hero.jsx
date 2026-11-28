import { useEffect, useState } from 'react'
import { ArrowUpRight, Expand, FileText, Github, Linkedin, Mail, Phone, X } from 'lucide-react'
import { profile } from '../data'

export default function Hero() {
  const [photoOpen, setPhotoOpen] = useState(false)

  useEffect(() => {
    if (!photoOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setPhotoOpen(false)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [photoOpen])

  return (
    <section className="hero section-shell" id="home">
      <div className="hero-grid container">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> QA ENGINEERING · AUTOMATION · QUALITY</div>
          <p className="hero-intro">Hello, I’m</p>
          <h1>Sayyad <span>Dastagiri</span><i>.</i></h1>
          <h2>QA Automation Engineer </h2>
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
            <a href={`tel:${profile.phone}`} aria-label={`Call ${profile.phoneDisplay}`}><Phone size={17} /></a>
            <span className="social-line" /><span className="social-caption">Open to QA / SDET opportunities</span>
          </div>
        </div>

        <div className="hero-visual profile-visual" aria-label="Profile photograph of Sayyad Dastagiri">
          <div className="profile-orbit profile-orbit-one" />
          <div className="profile-orbit profile-orbit-two" />
          <button
            type="button"
            className="profile-photo-frame"
            onClick={() => setPhotoOpen(true)}
            aria-label="Open full-size profile photograph"
            aria-haspopup="dialog"
          >
            <img src="/dastagiri-profile.jpg" alt="Sayyad Dastagiri, QA Automation Engineer" className="profile-photo" />
            <span className="profile-photo-shade" />
            <span className="profile-photo-caption">
              <span className="profile-caption-dot" />
              <span><strong>Sayyad Dastagiri</strong><small>QA Automation Engineer</small></span>
            </span>
            <span className="profile-photo-expand" aria-hidden="true"><Expand size={17} /></span>
          </button>
          <div className="profile-float-chip profile-chip-top"><span className="chip-pulse" /> Automation-first mindset</div>
          <div className="profile-float-chip profile-chip-middle"><span className="chip-check">✓</span> Release confidence</div>
          <div className="profile-float-chip profile-chip-bottom"><span className="chip-pulse" /> Reliable release delivery</div>
          <div className="profile-float-chip profile-chip-intent">ENGINEERING WITH INTENT <span aria-hidden="true">↘</span></div>
        </div>
      </div>
      <div className="hero-bottom container"><span>QUALITY · PRECISION · RELIABILITY</span></div>

      {photoOpen && (
        <div className="profile-lightbox" role="presentation" onClick={() => setPhotoOpen(false)}>
          <div
            className="profile-lightbox-panel"
            role="dialog"
            aria-modal="true"
            aria-label="Full-size profile photograph"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="profile-lightbox-close"
              onClick={() => setPhotoOpen(false)}
              aria-label="Close full-size photograph"
              autoFocus
            >
              <X size={22} />
            </button>
            <img src="/dastagiri-profile.jpg" alt="Full-size portrait of Sayyad Dastagiri" className="profile-lightbox-image" />
            <div className="profile-lightbox-caption">
              <strong>Sayyad Dastagiri</strong>
              <span>QA Automation Engineer</span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
