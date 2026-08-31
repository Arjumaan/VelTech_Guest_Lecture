export default function CodeBlock({ lang = '', children }) {
  return (
    <div className="code-block">
      {lang && <span className="lang-tag">{lang}</span>}
      <pre><code>{children}</code></pre>
    </div>
  )
}
