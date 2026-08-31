import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Code2, Server, Brain, Layers, Calendar, BookOpen,
  ArrowRight, Monitor, Database, Shield, Cpu, Sparkles,
  Download
} from 'lucide-react'
import TopicCard from '../components/TopicCard'
import FlowDiagram from '../components/FlowDiagram'
import './Home.css'

const days = [
  {
    num: 1,
    title: 'Web Dev, JavaScript & React',
    color: 'cyan',
    icon: <Monitor size={22} />,
    topics: ['HTML5 & CSS3', 'JavaScript ES6+', 'DOM & Events', 'Promises & Async/Await', 'React Components', 'Props, State & Hooks', 'API Integration'],
    desc: 'From a Web Page to a Modern React Application',
    link: '/day1',
  },
  {
    num: 2,
    title: 'Backend, Database & Security',
    color: 'pink',
    icon: <Server size={22} />,
    topics: ['Node.js & Express', 'REST APIs', 'MongoDB & Mongoose', 'CRUD Operations', 'Authentication (JWT)', 'Authorization (RBAC)', 'API Security'],
    desc: 'From Frontend to a Real Full-Stack Application',
    link: '/day2',
  },
  {
    num: 3,
    title: 'AI Integration & Capstone',
    color: 'lime',
    icon: <Brain size={22} />,
    topics: ['Generative AI & LLMs', 'Prompt Engineering', 'AI API Integration', 'AI Chatbot', 'Content Generation', 'Advanced MERN', 'Deployment & Capstone'],
    desc: 'From a Full-Stack App to an AI-Powered Application',
    link: '/day3',
  },
]

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-badge neo-inset">
              <Sparkles size={14} className="neon-cyan" />
              <span>VelTech Engineering University • Advanced Masterclass</span>
            </div>

            <h1 className="hero-title">
              Full-Stack Engineering with{' '}
              <span className="neon-cyan">MERN</span>{' '}
              &{' '}
              <span className="neon-pink">AI</span>{' '}
              Integration
            </h1>

            <p className="hero-subtitle">
              A rigorous 3-day technical deep-dive bridging the gap between academic theory and enterprise-grade software development. Master modern React, Node.js microservices, NoSQL database design, and state-of-the-art Generative AI implementation.
            </p>

            <div className="hero-actions">
              <Link to="/day1" className="neo-btn primary">
                Initiate Day 1 <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="neo-btn">
                <Layers size={18} /> Access Project Pool
              </Link>
              <a href="https://github.com/Arjumaan/MERN_Starter" target="_blank" rel="noreferrer" className="neo-btn">
                <Code2 size={18} /> Get Source Code
              </a>
            </div>

            <div className="hero-downloads">
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Download Masterclass Assets:</span>
              <a href="VelTech_Day1.pptx" download="VelTech_Day1.pptx" className="neo-btn" style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
                <Download size={14} /> Day 1 PPT
              </a>
              <a href="VelTech_Day2.pptx" download="VelTech_Day2.pptx" className="neo-btn" style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
                <Download size={14} /> Day 2 PPT
              </a>
              <a href="VelTech_Day3.pptx" download="VelTech_Day3.pptx" className="neo-btn" style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
                <Download size={14} /> Day 3 PPT
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Context */}
      <section className="section" style={{ padding: '20px 0 60px' }}>
        <div className="container">
          <div className="grid-3">
            <TopicCard icon={<Code2 size={20} />} title="Modern Architecture" desc="Transition from static pages to dynamic, component-driven Single Page Applications (SPAs) optimized for performance and scalability." neon="cyan" delay={0} />
            <TopicCard icon={<Shield size={20} />} title="Enterprise Security" desc="Implement robust authentication, JWT stateless sessions, and Role-Based Access Control (RBAC) to secure production APIs." neon="pink" delay={0.1} />
            <TopicCard icon={<Brain size={20} />} title="AI-Native Engineering" desc="Move beyond deterministic logic. Integrate Large Language Models (LLMs) via secure backend pipelines to create intelligent, reasoning systems." neon="lime" delay={0.2} />
          </div>
        </div>
      </section>

      {/* Restaurant Analogy */}
      <section className="section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            🍕 The Client-Server Paradigm
          </motion.h2>
          <p className="section-subtitle">Demystifying distributed web architecture through a real-world abstraction</p>
          <div className="grid-2">
            <div className="neo-card neon-border-orange">
              <h3 style={{ marginBottom: 16, fontWeight: 700 }}>🍽️ Operational Mapping</h3>
              <table className="neo-table">
                <thead><tr><th>Restaurant Component</th><th>System Component</th></tr></thead>
                <tbody>
                  <tr><td>Customer</td><td>End User / Browser</td></tr>
                  <tr><td>Menu UI</td><td>Frontend (React.js SPA)</td></tr>
                  <tr><td>Waiter / Order Pad</td><td>RESTful API Interface</td></tr>
                  <tr><td>Kitchen Operations</td><td>Backend Server (Node/Express)</td></tr>
                  <tr><td>Pantry / Storage</td><td>Database (MongoDB / NoSQL)</td></tr>
                  <tr><td>Placing an Order</td><td>HTTP Request (GET/POST)</td></tr>
                  <tr><td>Prepared Food</td><td>JSON Payload Response</td></tr>
                </tbody>
              </table>
            </div>
            <div className="neo-card">
              <h3 style={{ marginBottom: 16, fontWeight: 700 }}>🔄 The Request Lifecycle</h3>
              <FlowDiagram
                items={['🌐 Client (Browser/Mobile)', '📡 HTTP Request via Network', '⚙️ API Gateway / Router', '💾 Database Query Execution', '⚙️ Data Aggregation (Backend)', '📄 JSON Serialization & Response', '🌐 Client Rendering (DOM Update)']}
                color="var(--neon-orange)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3-Day Cards */}
      <section className="section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            📚 The 3-Day Roadmap
          </motion.h2>
          <p className="section-subtitle">A progressive sprint: Building an enterprise-grade application from scratch</p>

          <div className="grid-3">
            {days.map((d, i) => (
              <motion.div
                key={d.num}
                className="neo-card day-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <div className={`day-badge tag tag-${d.color}`}>Day {d.num}</div>
                <div className="day-icon" style={{ color: `var(--neon-${d.color})` }}>
                  {d.icon}
                </div>
                <h3 style={{ margin: '12px 0 6px', fontWeight: 700, fontSize: '1.1rem' }}>{d.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: 16, fontStyle: 'italic' }}>"{d.desc}"</p>
                <ul className="day-topics">
                  {d.topics.map(t => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <Link to={d.link} className="neo-btn" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
                  Explore Module {d.num} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CampusConnect Project */}
      <section className="section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            🚀 Capstone Architecture: <span className="neon-purple">CampusConnect</span>
          </motion.h2>
          <p className="section-subtitle">An intelligent campus management and student networking platform engineered across three phases</p>
          <div className="grid-3">
            <TopicCard icon={<Monitor size={20} />} title="Phase 1: Presentation Layer" desc="Construct a component-based UI using React. Implement React Router for SPA navigation, custom Hooks for state management, and responsive Neomorphic styling." neon="cyan" delay={0} />
            <TopicCard icon={<Database size={20} />} title="Phase 2: Business Logic & Data" desc="Develop a robust RESTful API with Express.js. Establish secure MongoDB schemas, implement JWT-based auth pipelines, and handle complex relational queries." neon="pink" delay={0.1} />
            <TopicCard icon={<Cpu size={20} />} title="Phase 3: Intelligence & DevOps" desc="Deploy the platform and integrate Generative AI for automated event curation, intelligent student recommendations, and an embedded natural language assistant." neon="lime" delay={0.2} />
          </div>
        </div>
      </section>

      {/* Final Architecture */}
      <section className="section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            🏗️ Target System Architecture
          </motion.h2>
          <p className="section-subtitle">The high-level topology of our final deployment</p>
          <div className="neo-card" style={{ maxWidth: 650, margin: '0 auto' }}>
            <FlowDiagram
              items={['👤 End User Context', '⚛️ React SPA (Vite / Vercel)', '🔗 Secure REST API (HTTPS / CORS)', '⚙️ Node.js + Express (Authentication & Business Rules)', '💾 MongoDB Atlas Cloud Cluster          🤖 LLM API (OpenAI/Gemini)', '📄 Synthesized Payload Generation', '🌐 Dynamic DOM Reconciliation (React)']}
              color="var(--neon-purple)"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="app-footer">
        <p>MERN & AI Integration Masterclass • VelTech Engineering University © 2026</p>
      </footer>
    </div>
  )
}
