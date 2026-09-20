import { Link } from 'react-router-dom'
import { Heart, ExternalLink, Code2, Globe, ShieldCheck, Cpu } from 'lucide-react'
import './Footer.css'
import cslLogo from '../assets/csl_logo.jpeg'
import sentrasecLogo from '../assets/sentrasec_logo.png'

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-top-accent" />
      
      <div className="container footer-container">
        <div className="footer-grid">
          
          {/* Brand & Description Column */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <div className="brand-icon-box">
                <Cpu size={22} className="neon-cyan" />
              </div>
              <div className="brand-title-group">
                <span className="brand-text">MERN<span className="neon-pink">&</span>AI</span>
                <span className="brand-subtext">Full-Stack & AI Masterclass</span>
              </div>
            </div>
            
            <p className="footer-description">
              An intensive 3-Day Guest Lecture Masterclass empowering students with modern web architecture, AI integrations, and real-world full-stack development.
            </p>

            <div className="masterclass-pill">
              <span className="live-dot" />
              <span>VelTech Guest Lecture Series</span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div className="footer-col footer-col-nav">
            <h4 className="footer-col-title">
              <Code2 size={16} className="neon-cyan" /> Curriculum Hub
            </h4>
            <ul className="footer-links-list">
              <li><Link to="/">Masterclass Overview</Link></li>
              <li><Link to="/day1">Day 1: MERN Core</Link></li>
              <li><Link to="/day2">Day 2: AI Integration</Link></li>
              <li><Link to="/day3">Day 3: Deployment</Link></li>
              <li><Link to="/projects">Project Showcase</Link></li>
            </ul>
          </div>

          {/* Institutional Partners Column */}
          <div className="footer-col footer-col-partners">
            <h4 className="footer-col-title">
              <ShieldCheck size={16} className="neon-purple" /> Institutional Partners
            </h4>

            <div className="partners-cards-container">
              {/* CSL Card */}
              <div className="partner-card glass-card">
                <div className="partner-card-header">
                  <span className="partner-badge">Organized By</span>
                  <span className="partner-org-name">Creator Space Lab</span>
                </div>
                <div className="partner-logo-wrapper">
                  <img src={cslLogo} alt="Creator Space Lab" className="partner-logo-img" />
                </div>
                <a
                  href="https://www.creatorspacelab.org.in"
                  target="_blank"
                  rel="noreferrer"
                  className="partner-external-btn"
                >
                  <Globe size={13} />
                  <span>creatorspacelab.org.in</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* SentraSec Card */}
              <div className="partner-card glass-card">
                <div className="partner-card-header">
                  <span className="partner-badge partner-badge-supported">Supported By</span>
                  <span className="partner-org-name">SentraSec</span>
                </div>
                <div className="partner-logo-wrapper">
                  <img src={sentrasecLogo} alt="SentraSec" className="partner-logo-img" />
                </div>
                <a
                  href="https://www.sentrasec.in"
                  target="_blank"
                  rel="noreferrer"
                  className="partner-external-btn"
                >
                  <Globe size={13} />
                  <span>sentrasec.in</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            © {new Date().getFullYear()} <span className="highlight-text">Arjulabs</span>. All rights reserved.
          </p>

          <div className="tech-stack-pills">
            <span>React 19</span>
            <span className="dot">•</span>
            <span>Vite</span>
            <span className="dot">•</span>
            <span>Three.js</span>
            <span className="dot">•</span>
            <span>Node.js</span>
          </div>

          <p className="footer-love-text">
            Engineered with <Heart size={14} className="neon-pink-heart" /> by <strong>SentraSec</strong> for students
          </p>
        </div>
      </div>
    </footer>
  )
}
