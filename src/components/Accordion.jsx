import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Accordion({ title, icon, neonColor = 'cyan', children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="accordion">
      <button
        className={`accordion-header ${open ? 'open' : ''} neon-border-${neonColor}`}
        onClick={() => setOpen(!open)}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {icon} {title}
        </span>
        <ChevronDown size={18} className="icon" />
      </button>
      <div className={`accordion-body ${open ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  )
}
