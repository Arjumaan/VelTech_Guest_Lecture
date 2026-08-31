import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({ lang = 'text', children }) {
  return (
    <div className="code-block-wrapper" style={{ position: 'relative', margin: '12px 0' }}>
      {lang && lang !== 'text' && (
        <span 
          className="lang-tag" 
          style={{ 
            position: 'absolute', 
            top: '8px', 
            right: '12px', 
            fontSize: '0.7rem', 
            color: 'var(--neon-cyan)', 
            textTransform: 'uppercase', 
            letterSpacing: '1px',
            zIndex: 10
          }}
        >
          {lang}
        </span>
      )}
      <SyntaxHighlighter 
        language={lang} 
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '18px 20px',
          borderRadius: 'var(--radius-sm)',
          fontFamily: 'var(--mono)',
          fontSize: '0.85rem',
          lineHeight: '1.6',
          boxShadow: 'inset 4px 4px 8px rgba(0,0,0,0.3), inset -2px -2px 6px rgba(255,255,255,0.05)',
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
