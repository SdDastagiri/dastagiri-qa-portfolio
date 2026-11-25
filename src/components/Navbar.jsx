import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { profile } from '../data'

const links = [
  ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'],
  ['Experience', 'experience'], ['Education', 'education'], ['Contact', 'contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="navbar">
      <div className="nav-inner container">
        <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label={`${profile.name}, home`}>
          <span className="brand-mark">SD</span><span>SD<span className="brand-dot">.</span></span>
        </a>
        <nav className={`nav-links ${open ? 'is-open' : ''}`} aria-label="Main navigation">
          {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let’s talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setOpen(v => !v)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}