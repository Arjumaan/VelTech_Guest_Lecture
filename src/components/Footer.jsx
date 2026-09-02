import { Terminal, ExternalLink, Heart } from 'lucide-react'
import './Footer.css'
import cslLogo from '../assets/csl_logo.jpeg'

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="brand-text">MERN<span className="neon-pink">&</span>AI</span>
            <span className="brand-subtext">VelTech Engineering University Masterclass</span>
          </div>

          <div className="footer-organizer neo-inset">
            <span className="organizer-label">Organized by:</span>
            <img src={cslLogo} alt="Creator Space Lab Logo" className="organizer-logo" />
            <a href="https://www.creatorspacelab.org.in" target="_blank" rel="noreferrer" className="organizer-link">
              www.creatorspacelab.org.in
            </a>
          </div>

          <div className="footer-portfolio neo-inset">
            <span className="portfolio-label">About the Instructor</span>
            <a href="https://portfolio.arjulabs.qzz.io" target="_blank" rel="noreferrer" className="portfolio-link">
              <Terminal size={14} className="neon-cyan" />
              portfolio.arjulabs.qzz.io
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Arjulabs. All rights reserved.</p>
          <p className="footer-love">Engineered with <Heart size={12} className="neon-pink" style={{ fill: 'var(--neon-pink)', margin: '0 4px' }} /> for students.</p>
        </div>
      </div>
    </footer>
  )
}
