import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Dice5, RotateCcw, Sparkles, Code2 } from 'lucide-react'
import './Projects.css'

const projects = [
  { id: 1, title: 'AI-Powered Resume Builder', desc: 'Build a MERN app where users input their details and AI generates a professional resume with multiple templates. Include PDF export.' },
  { id: 2, title: 'Smart Expense Tracker', desc: 'Create a finance app where AI categorizes expenses, predicts spending patterns, and gives budget recommendations.' },
  { id: 3, title: 'College Complaint Management System', desc: 'A platform where students submit complaints, admins manage them, and AI auto-categorizes and prioritizes issues.' },
  { id: 4, title: 'AI Recipe Finder', desc: 'Users input available ingredients and AI suggests recipes with step-by-step instructions. Include save/favorites and nutrition info.' },
  { id: 5, title: 'Online Quiz Platform', desc: 'Teachers create quizzes, students attempt them with timers, and AI generates explanations for wrong answers. Include leaderboard.' },
  { id: 6, title: 'Job Board with AI Matching', desc: 'Companies post jobs, students apply, and AI matches candidates to jobs based on skills and preferences.' },
  { id: 7, title: 'Student Study Planner', desc: 'An AI-powered planner that takes syllabus/exam dates and generates personalized study schedules with reminders.' },
  { id: 8, title: 'AI Code Review Tool', desc: 'Users paste code and AI reviews it for bugs, best practices, and security issues. Support multiple languages.' },
  { id: 9, title: 'Campus Lost & Found', desc: 'Students report lost/found items with images, AI matches similar items, and notifications are sent to potential owners.' },
  { id: 10, title: 'Fitness Tracker with AI Coach', desc: 'Track workouts and diet, AI generates personalized exercise plans and nutrition advice based on goals.' },
  { id: 11, title: 'E-Commerce Product Recommender', desc: 'A mini e-commerce store where AI recommends products based on browsing history and purchase patterns.' },
  { id: 12, title: 'AI Meeting Notes Summarizer', desc: 'Upload meeting recordings/transcripts and AI generates structured notes with action items and key decisions.' },
  { id: 13, title: 'Hostel Room Booking System', desc: 'Students book hostel rooms, admin manages allocations. AI suggests optimal room assignments based on preferences.' },
  { id: 14, title: 'AI-Powered Blog Platform', desc: 'A blogging platform where AI helps with writing suggestions, SEO optimization, and auto-generating tags/summaries.' },
  { id: 15, title: 'Virtual Lab Experiment Simulator', desc: 'Students perform virtual experiments with step-by-step guides. AI evaluates results and provides explanations.' },
  { id: 16, title: 'Smart Attendance System', desc: 'Faculty mark attendance, view analytics. AI predicts students at risk of low attendance and sends alerts.' },
  { id: 17, title: 'AI Travel Planner', desc: 'Users input destination, budget, and dates. AI generates complete itineraries with hotels, activities, and tips.' },
  { id: 18, title: 'Peer Code Learning Platform', desc: 'Students share code solutions, AI explains code line-by-line, and peers can review and comment.' },
  { id: 19, title: 'AI Customer Support Chatbot Builder', desc: 'Build a platform where businesses create custom AI chatbots by uploading their FAQ/knowledge base documents.' },
  { id: 20, title: 'Smart Library Management', desc: 'Digital library with book search, borrowing system. AI recommends books based on reading history and interests.' },
  { id: 21, title: 'AI Email Composer', desc: 'Users describe the email purpose and AI drafts professional emails with tone selection (formal, friendly, urgent).' },
  { id: 22, title: 'Campus Navigation App', desc: 'Interactive campus map with building info. AI chatbot answers questions about locations, timings, and departments.' },
  { id: 23, title: 'AI Story Generator', desc: 'Users provide a genre, characters, and setting. AI generates creative stories with the ability to continue/branch narratives.' },
  { id: 24, title: 'Student Mentorship Platform', desc: 'Connect juniors with seniors. AI matches mentors/mentees based on skills, interests, and availability.' },
  { id: 25, title: 'AI Flashcard Study App', desc: 'Users input topics and AI generates flashcards with spaced repetition. Track learning progress over time.' },
  { id: 26, title: 'Smart Parking Management', desc: 'Real-time parking slot availability, booking system. AI predicts peak hours and suggests optimal times.' },
  { id: 27, title: 'AI Interview Prep Platform', desc: 'AI generates interview questions based on job role, evaluates answers, and provides feedback with improvement tips.' },
  { id: 28, title: 'Collaborative Document Editor', desc: 'Real-time collaborative editing with version history. AI helps with grammar, summarization, and formatting.' },
  { id: 29, title: 'AI Health Symptom Checker', desc: 'Users input symptoms, AI suggests possible conditions and recommends whether to see a doctor. Include disclaimer.' },
  { id: 30, title: 'Smart Canteen Pre-Order System', desc: 'Students pre-order meals, view menus. AI recommends meals based on dietary preferences and past orders.' },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)
  const [rolling, setRolling] = useState(false)
  const [used, setUsed] = useState([])

  const rollDice = () => {
    if (rolling) return
    setRolling(true)
    setSelected(null)

    const available = projects.filter(p => !used.includes(p.id))
    if (available.length === 0) {
      setRolling(false)
      return
    }

    let count = 0
    const interval = setInterval(() => {
      const rand = available[Math.floor(Math.random() * available.length)]
      setSelected(rand)
      count++
      if (count > 15) {
        clearInterval(interval)
        const final = available[Math.floor(Math.random() * available.length)]
        setSelected(final)
        setUsed(prev => [...prev, final.id])
        setRolling(false)
      }
    }, 100)
  }

  const reset = () => {
    setUsed([])
    setSelected(null)
  }

  return (
    <div className="day-page">
      <header className="day-hero" style={{ borderBottom: '3px solid var(--neon-purple)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="tag tag-purple">Capstone</span>
            <h1 className="day-hero-title">Choose Your <span className="neon-purple">Project</span></h1>
            <p className="day-hero-sub">30 unique AI-powered MERN project ideas — Roll the dice!</p>
          </motion.div>
        </div>
      </header>

      <div className="container day-content">
        {/* Dice Roller */}
        <section className="section" style={{ textAlign: 'center' }}>
          <div className="dice-area">
            <motion.button
              className={`dice-button ${rolling ? 'rolling' : ''}`}
              onClick={rollDice}
              whileTap={{ scale: 0.95 }}
              disabled={rolling || used.length >= 30}
            >
              <motion.div
                animate={rolling ? { rotate: [0, 360] } : { rotate: 0 }}
                transition={rolling ? { duration: 0.3, repeat: Infinity, ease: 'linear' } : {}}
              >
                <Dice5 size={64} />
              </motion.div>
            </motion.button>

            <p className="dice-instruction">
              {used.length >= 30
                ? 'All 30 projects assigned! 🎉'
                : rolling
                  ? 'Rolling...'
                  : 'Click the dice to get your project!'}
            </p>

            <div className="dice-stats">
              <span className="tag tag-cyan">{30 - used.length} remaining</span>
              <span className="tag tag-pink">{used.length} assigned</span>
              {used.length > 0 && (
                <button className="neo-btn" onClick={reset} style={{ fontSize: '0.8rem', padding: '6px 14px' }}>
                  <RotateCcw size={14} /> Reset
                </button>
              )}
            </div>
          </div>

          {/* Selected Project */}
          <AnimatePresence mode="wait">
            {selected && !rolling && (
              <motion.div
                key={selected.id}
                className="neo-card selected-project"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <div className="selected-badge">
                  <Sparkles size={18} /> Project #{selected.id}
                </div>
                <h2 className="selected-title">{selected.title}</h2>
                <p className="selected-desc">{selected.desc}</p>
                <div className="selected-tags">
                  <span className="tag tag-cyan">React</span>
                  <span className="tag tag-pink">Node/Express</span>
                  <span className="tag tag-orange">MongoDB</span>
                  <span className="tag tag-lime">AI Integration</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* All Projects List */}
        <section className="section">
          <h2 className="section-title">📋 All 30 Project Ideas</h2>
          <p className="section-subtitle">Each project must include: React frontend, Node/Express backend, MongoDB, and at least one AI feature</p>
          <div className="grid-2">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                className={`neo-card project-item ${used.includes(p.id) ? 'assigned' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.03, 0.5) }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <span className={`project-num ${used.includes(p.id) ? 'done' : ''}`}>
                    {used.includes(p.id) ? '✓' : p.id}
                  </span>
                  <h4 style={{ fontSize: '0.95rem' }}>{p.title}</h4>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>


    </div>
  )
}
