import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Code2, BookOpen } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/day1', label: 'Day 1' },
  { to: '/day2', label: 'Day 2' },
  { to: '/day3', label: 'Day 3' },
  { to: '/project-code', label: 'Code' },
  { to: '/projects', label: 'Projects' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          <Code2 size={24} className="neon-cyan" />
          <span>MERN<span className="neon-pink">&</span>AI</span>
        </Link>

        <div className="navbar-links">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`nav-link ${location.pathname === l.to ? 'active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <a href="VelTech_Day1.pptx" download="VelTech_Day1.pptx" className="neo-btn nav-download">
            <BookOpen size={16} /> PPTs
          </a>
          <a href="https://github.com/Arjumaan/MERN_Starter" target="_blank" rel="noreferrer" className="neo-btn" style={{ marginLeft: 8 }}>
            <Code2 size={16} /> Source Code
          </a>
        </div>

        <button className="menu-toggle neo-btn" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`mobile-link ${location.pathname === l.to ? 'active' : ''}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
