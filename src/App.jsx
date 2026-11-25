import { useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Achievements from './sections/Achievements'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Contact from './sections/Contact'
import { profile } from './data'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Achievements />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="footer"><div className="container footer-inner"><a className="brand" href="#home"><span className="brand-mark">SD</span><span>Sayyad Dastagiri<span className="brand-dot">.</span></span></a><p>Designed with purpose. Built around quality.</p><span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span></div></footer>
      <a className="back-top" href="#home" aria-label="Back to top"><ArrowUp size={17} /></a>
    </>
  )
}