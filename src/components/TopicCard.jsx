import { motion } from 'framer-motion'

export default function TopicCard({ icon, title, desc, neon = 'cyan', delay = 0 }) {
  const colors = {
    cyan: 'var(--neon-cyan)',
    pink: 'var(--neon-pink)',
    lime: 'var(--neon-lime)',
    orange: 'var(--neon-orange)',
    purple: 'var(--neon-purple)',
  }
  return (
    <motion.div
      className="neo-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      style={{ borderTop: `3px solid ${colors[neon]}` }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: `${colors[neon]}18`,
          color: colors[neon],
        }}>
          {icon}
        </div>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{title}</h3>
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{desc}</p>
    </motion.div>
  )
}
