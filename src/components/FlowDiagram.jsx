import { ArrowDown } from 'lucide-react'

export default function FlowDiagram({ items, color = 'var(--neon-cyan)' }) {
  return (
    <div className="flow">
      {items.map((item, i) => (
        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          <div className="flow-item" style={{ borderLeft: `3px solid ${color}` }}>
            {item}
          </div>
          {i < items.length - 1 && (
            <ArrowDown size={18} style={{ color }} />
          )}
        </div>
      ))}
    </div>
  )
}
