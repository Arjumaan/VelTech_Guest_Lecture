import { motion } from 'framer-motion'
import { Monitor, Code2, Layout, Braces, Globe, Zap, Component, ArrowRight, FileCode, Palette, Box, MousePointer, Repeat, ListOrdered, GitBranch, Search } from 'lucide-react'
import Accordion from '../components/Accordion'
import CodeBlock from '../components/CodeBlock'
import FlowDiagram from '../components/FlowDiagram'
import TopicCard from '../components/TopicCard'
import './Day.css'

export default function Day1() {
  return (
    <div className="day-page">
      <header className="day-hero" style={{ borderBottom: '3px solid var(--neon-cyan)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="tag tag-cyan">Day 1</span>
            <h1 className="day-hero-title">Web Development, JavaScript & <span className="neon-cyan">React.js</span></h1>
            <p className="day-hero-sub">"From a Web Page to a Modern React Application"</p>
          </motion.div>
        </div>
      </header>

      <div className="container day-content">
        {/* Teaching Story */}
        <section className="section">
          <h2 className="section-title">📖 The Story of Day 1</h2>
          <p className="section-subtitle">We don't teach 4 separate subjects — we tell one story</p>
          <div className="neo-card" style={{ maxWidth: 500, margin: '0 auto' }}>
            <FlowDiagram items={['❓ How does the Web work?', '🖥️ Client + Server', '🏗️ HTML + CSS', '⚡ JavaScript', '📦 JSON + APIs', '⏳ Promises + async/await', '⚛️ React', '🔗 API Integration']} color="var(--neon-cyan)" />
          </div>
        </section>

        {/* PART I - Web Fundamentals */}
        <section className="section">
          <h2 className="section-title">🌐 Part I — Web Fundamentals</h2>
          <p className="section-subtitle">What happens when you type a URL into your browser?</p>

          <Accordion title="Client-Server Architecture" icon={<Globe size={18} />} neonColor="cyan" defaultOpen={true}>
            <p style={{ marginBottom: 16 }}>When you visit <strong>amazon.in</strong> or <strong>instagram.com</strong>, your browser (the <em>client</em>) sends a request to a remote <em>server</em>, which responds with data.</p>
            <FlowDiagram items={['👤 User', '🌐 Client / Browser', '📡 HTTP Request', '⚙️ Server (Node/Express)', '💾 Database (MongoDB)', '📄 JSON Response', '🌐 Client renders UI']} color="var(--neon-cyan)" />
            <div className="real-world-box">
              <strong>🍕 Restaurant Analogy:</strong> Customer → Menu (Frontend) → Waiter (API) → Kitchen (Backend) → Storage (Database) → Food (Response) → Customer
            </div>
          </Accordion>

          <Accordion title="HTTP Methods & Status Codes" icon={<Repeat size={18} />} neonColor="cyan">
            <div className="grid-2" style={{ marginBottom: 16 }}>
              <div>
                <h4 style={{ marginBottom: 8 }}>HTTP Methods</h4>
                <table className="neo-table"><thead><tr><th>Method</th><th>Action</th><th>Example</th></tr></thead><tbody>
                  <tr><td><span className="tag tag-lime">GET</span></td><td>Retrieve</td><td>GET /students</td></tr>
                  <tr><td><span className="tag tag-cyan">POST</span></td><td>Create</td><td>POST /students</td></tr>
                  <tr><td><span className="tag tag-orange">PUT</span></td><td>Replace</td><td>PUT /students/101</td></tr>
                  <tr><td><span className="tag tag-purple">PATCH</span></td><td>Partial update</td><td>PATCH /students/101</td></tr>
                  <tr><td><span className="tag tag-pink">DELETE</span></td><td>Remove</td><td>DELETE /students/101</td></tr>
                </tbody></table>
              </div>
              <div>
                <h4 style={{ marginBottom: 8 }}>Status Codes</h4>
                <table className="neo-table"><thead><tr><th>Code</th><th>Meaning</th></tr></thead><tbody>
                  <tr><td>200</td><td>OK</td></tr>
                  <tr><td>201</td><td>Created</td></tr>
                  <tr><td>400</td><td>Bad Request</td></tr>
                  <tr><td>401</td><td>Unauthorized</td></tr>
                  <tr><td>404</td><td>Not Found</td></tr>
                  <tr><td>500</td><td>Server Error</td></tr>
                </tbody></table>
              </div>
            </div>
          </Accordion>
        </section>

        {/* PART II - HTML5 */}
        <section className="section">
          <h2 className="section-title">🏗️ Part II — HTML5</h2>
          <p className="section-subtitle">Structure & semantic meaning of web content</p>

          <Accordion title="Basic HTML Document" icon={<FileCode size={18} />} neonColor="orange" defaultOpen={true}>
            <CodeBlock lang="html">{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CampusConnect</title>
</head>
<body>
  <h1>CampusConnect</h1>
</body>
</html>`}</CodeBlock>
            <div className="real-world-box">
              <strong>💡 Real World:</strong> Every website you visit — Google, YouTube, Netflix — starts with this exact structure. The <code>&lt;head&gt;</code> contains metadata, the <code>&lt;body&gt;</code> contains visible content.
            </div>
          </Accordion>

          <Accordion title="Semantic HTML" icon={<Layout size={18} />} neonColor="orange">
            <p style={{ marginBottom: 12 }}>Instead of using <code>&lt;div&gt;</code> for everything, use meaningful tags:</p>
            <div className="grid-2">
              <div>
                <h4 style={{ marginBottom: 8, color: 'var(--neon-pink)' }}>❌ Bad</h4>
                <CodeBlock lang="html">{`<div>
  <div>
    <div></div>
  </div>
</div>`}</CodeBlock>
              </div>
              <div>
                <h4 style={{ marginBottom: 8, color: 'var(--neon-lime)' }}>✅ Good</h4>
                <CodeBlock lang="html">{`<header>
  <nav></nav>
</header>
<main>
  <section>
    <article></article>
  </section>
</main>
<footer></footer>`}</CodeBlock>
              </div>
            </div>
            <div className="real-world-box"><strong>Why?</strong> Accessibility, SEO, Maintainability, Collaboration</div>
          </Accordion>

          <Accordion title="HTML Forms" icon={<FileCode size={18} />} neonColor="orange">
            <CodeBlock lang="html">{`<form>
  <label for="name">Name</label>
  <input type="text" id="name" required>

  <label for="email">Email</label>
  <input type="email" id="email" required>

  <button type="submit">Register</button>
</form>`}</CodeBlock>
            <div className="real-world-box"><strong>Used in:</strong> Login, Registration, Search, Payment, Feedback, Contact forms</div>
          </Accordion>
        </section>

        {/* PART III - CSS3 */}
        <section className="section">
          <h2 className="section-title">🎨 Part III — CSS3</h2>
          <p className="section-subtitle">HTML = Structure, CSS = Appearance, JavaScript = Behaviour</p>

          <Accordion title="Box Model, Flexbox & Grid" icon={<Box size={18} />} neonColor="pink" defaultOpen={true}>
            <h4>Box Model</h4>
            <CodeBlock lang="css">{`.card {
  margin: 20px;     /* Outside space */
  padding: 20px;    /* Inside space */
  border: 1px solid #ddd;
  /* Content sits inside padding */
}`}</CodeBlock>
            <h4 style={{ marginTop: 16 }}>Flexbox — for 1D layouts</h4>
            <CodeBlock lang="css">{`.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}`}</CodeBlock>
            <h4 style={{ marginTop: 16 }}>Grid — for 2D layouts</h4>
            <CodeBlock lang="css">{`.events {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 768px) {
  .events { grid-template-columns: 1fr; }
}`}</CodeBlock>
            <div className="real-world-box"><strong>💡</strong> Flexbox = Navbar, toolbars, button groups. Grid = Card layouts, dashboards, galleries.</div>
          </Accordion>
        </section>

        {/* PART IV - JavaScript */}
        <section className="section">
          <h2 className="section-title">⚡ Part IV — JavaScript</h2>
          <p className="section-subtitle">"Our page looks good. But what happens when the user clicks Register?"</p>

          <Accordion title="Variables, Types & Functions" icon={<Braces size={18} />} neonColor="lime" defaultOpen={true}>
            <CodeBlock lang="javascript">{`// Variables
let score = 10;        // Can be reassigned
const college = "VelTech"; // Cannot be reassigned

// Data Types
const name = "Arjun";     // String
const age = 21;            // Number
const isStudent = true;    // Boolean

// Functions
function add(a, b) { return a + b; }

// Arrow Function
const multiply = (a, b) => a * b;

// Template Literals
const msg = \`Hello \${name}, you are \${age}\`;`}</CodeBlock>
          </Accordion>

          <Accordion title="Arrays & Critical Methods (map, filter, reduce)" icon={<ListOrdered size={18} />} neonColor="lime">
            <CodeBlock lang="javascript">{`const events = ["AI Workshop", "Hackathon", "Cloud Workshop"];

// map() → Transform each item
const doubled = [1, 2, 3].map(n => n * 2);
// → [2, 4, 6]

// filter() → Select items
const big = [10, 20, 30, 40].filter(n => n > 20);
// → [30, 40]

// find() → Locate one item
const found = events.find(e => e === "Hackathon");

// reduce() → Combine into one result
const total = [100, 200, 300].reduce((sum, p) => sum + p, 0);
// → 600`}</CodeBlock>
            <div className="real-world-box"><strong>🔑 These are critical for React!</strong> map() renders lists, filter() implements search, reduce() calculates totals.</div>
          </Accordion>

          <Accordion title="Objects, Destructuring & Spread" icon={<Braces size={18} />} neonColor="lime">
            <CodeBlock lang="javascript">{`// Object
const student = {
  id: 101,
  name: "Arjun",
  department: "CSE",
  skills: ["JavaScript", "React"]
};

// Destructuring
const { name, age } = student;

// Spread Operator (important for React state!)
const updated = { ...student, age: 22 };`}</CodeBlock>
          </Accordion>

          <Accordion title="DOM & Events" icon={<MousePointer size={18} />} neonColor="lime">
            <p style={{ marginBottom: 12 }}>The DOM is the browser's object representation of the page that JavaScript can manipulate.</p>
            <CodeBlock lang="javascript">{`// Select element
const btn = document.querySelector(".register-btn");

// Add event listener
btn.addEventListener("click", () => {
  alert("Registered!");
});

// Counter example
let count = 0;
const countEl = document.getElementById("count");

document.getElementById("increment")
  .addEventListener("click", () => {
    count++;
    countEl.textContent = count;
  });`}</CodeBlock>
            <div className="real-world-box"><strong>❓ Key Question:</strong> "What happens if we had 50 components like this counter?" → This leads us to <strong>React</strong>.</div>
          </Accordion>
        </section>

        {/* PART V - JSON & Async */}
        <section className="section">
          <h2 className="section-title">📡 Part V — JSON, APIs & Async JavaScript</h2>

          <Accordion title="JSON & APIs" icon={<Globe size={18} />} neonColor="purple" defaultOpen={true}>
            <CodeBlock lang="json">{`{
  "id": 101,
  "name": "Arjun",
  "department": "CSE",
  "skills": ["JavaScript", "React"]
}`}</CodeBlock>
            <p style={{ margin: '12px 0' }}>An <strong>API</strong> is a defined interface through which one system communicates with another. Examples: Weather API, Payment API, Google Maps API, AI API.</p>
            <CodeBlock lang="javascript">{`// Object → JSON string
JSON.stringify({ name: "Arjun", age: 21 });

// JSON string → Object
JSON.parse('{"name":"Arjun","age":21}');`}</CodeBlock>
          </Accordion>

          <Accordion title="Promises & async/await" icon={<Zap size={18} />} neonColor="purple">
            <p style={{ marginBottom: 12 }}>When we call an API, the response might take time. The browser shouldn't freeze!</p>
            <FlowDiagram items={['PENDING', 'FULFILLED ✅  or  REJECTED ❌']} color="var(--neon-purple)" />
            <CodeBlock lang="javascript">{`// Promise Chain
fetch("/api/events")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Modern async/await (preferred)
async function getEvents() {
  try {
    const response = await fetch("/api/events");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}`}</CodeBlock>
            <div className="real-world-box"><strong>⚠️ Important:</strong> A 404 response does NOT automatically reject the fetch Promise. Always check <code>response.ok</code>!</div>
          </Accordion>
        </section>

        {/* PART VI - React */}
        <section className="section">
          <h2 className="section-title">⚛️ Part VI — React</h2>
          <p className="section-subtitle">A JavaScript library for building user interfaces from reusable components</p>

          <Accordion title="1. Setting up a React Environment" icon={<Monitor size={18} />} neonColor="cyan" defaultOpen={true}>
            <p style={{ marginBottom: 12 }}>Before writing React, we need an environment. We don't just write React in a standard HTML file; we use a <strong>bundler</strong> like Vite.</p>
            <h4 style={{ color: 'var(--neon-pink)' }}>What is Node.js and NPM?</h4>
            <p style={{ marginBottom: 8 }}><strong>Node.js</strong> allows us to run JavaScript outside the browser. <strong>NPM</strong> (Node Package Manager) allows us to download code libraries created by other developers.</p>
            <CodeBlock lang="bash">{`# 1. Check if Node is installed
node -v
npm -v

# 2. Create a new React project using Vite
npm create vite@latest campus-connect -- --template react

# 3. Enter the folder and install dependencies
cd campus-connect
npm install

# 4. Start the development server
npm run dev`}</CodeBlock>
            <div className="grid-2" style={{ marginTop: 16 }}>
              <div>
                <h4 style={{ marginBottom: 8 }}>package.json</h4>
                <p style={{ fontSize: '0.85rem' }}>This file acts as the <strong>identity card</strong> of your project. It lists your project's name, scripts (like <code>npm run dev</code>), and all the external libraries (dependencies) your project needs to run.</p>
              </div>
              <div>
                <h4 style={{ marginBottom: 8 }}>node_modules/</h4>
                <p style={{ fontSize: '0.85rem' }}>When you run <code>npm install</code>, NPM reads <code>package.json</code> and downloads all the required libraries into this folder. It is HUGE, so we <strong>never</strong> upload it to GitHub.</p>
              </div>
            </div>
          </Accordion>

          <Accordion title="2. Components & JSX" icon={<Component size={18} />} neonColor="cyan">
            <p style={{ marginBottom: 12 }}>Instead of one giant page, build a tree of components:</p>
            <CodeBlock lang="text">{`App
├── Navbar
├── Hero
├── SearchBar
├── EventList
│   ├── EventCard
│   ├── EventCard
│   └── EventCard
└── Footer`}</CodeBlock>
            <CodeBlock lang="jsx">{`function Welcome() {
  return <h1>Welcome to CampusConnect</h1>;
}

// JSX allows HTML-like markup inside JavaScript
function App() {
  const name = "Arjun";
  return <h1>Hello {name}</h1>;
}`}</CodeBlock>
            <div className="real-world-box"><strong>JSX Rules:</strong> Close all tags (<code>&lt;img /&gt;</code>), use <code>className</code> not <code>class</code>, JS inside <code>{'{}'}</code>, one root element.</div>
          </Accordion>

          <Accordion title="Props — Passing Data to Components" icon={<ArrowRight size={18} />} neonColor="cyan">
            <CodeBlock lang="jsx">{`function EventCard({ title, category }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{category}</p>
    </article>
  );
}

// Usage
<EventCard title="AI Workshop" category="AI" />
<EventCard title="Hackathon" category="Development" />`}</CodeBlock>
            <div className="real-world-box"><strong>Real World:</strong> Amazon ProductCard receives name, price, image. Netflix MovieCard receives title, rating, genre.</div>
          </Accordion>

          <Accordion title="State (useState) — Component Memory" icon={<Zap size={18} />} neonColor="cyan">
            <CodeBlock lang="jsx">{`import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}`}</CodeBlock>
            <FlowDiagram items={['User Interaction', 'Event Handler', 'setState()', 'State Changes', 'React Re-renders', 'Updated UI']} color="var(--neon-cyan)" />
            <div className="real-world-box"><strong>Props vs State:</strong> Props = data passed IN to a component. State = data MANAGED by the component.</div>
          </Accordion>

          <Accordion title="Lists, Conditional Rendering & Forms" icon={<ListOrdered size={18} />} neonColor="cyan">
            <h4>Rendering Lists with map()</h4>
            <CodeBlock lang="jsx">{`function EventList() {
  return (
    <div>
      {events.map(event => (
        <EventCard
          key={event.id}
          title={event.title}
          category={event.category}
        />
      ))}
    </div>
  );
}`}</CodeBlock>
            <h4 style={{ marginTop: 16 }}>Conditional Rendering</h4>
            <CodeBlock lang="jsx">{`{isLoggedIn ? <Dashboard /> : <Login />}

{loading && <p>Loading events...</p>}
{error && <p>Error: {error}</p>}`}</CodeBlock>
            <h4 style={{ marginTop: 16 }}>Controlled Forms</h4>
            <CodeBlock lang="jsx">{`const [email, setEmail] = useState("");

<input
  type="email"
  value={email}
  onChange={e => setEmail(e.target.value)}
/>`}</CodeBlock>
          </Accordion>

          <Accordion title="useEffect & API Integration" icon={<Globe size={18} />} neonColor="cyan">
            <p style={{ marginBottom: 12 }}>useEffect synchronizes a component with external systems (APIs, timers, etc.)</p>
            <CodeBlock lang="jsx">{`import { useEffect, useState } from "react";

function EventList() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadEvents() {
      try {
        setLoading(true);
        const response = await fetch("/api/events");
        if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    loadEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error: {error}</p>;
  if (events.length === 0) return <p>No events available.</p>;

  return (
    <div>
      {events.map(event => (
        <article key={event.id}>
          <h2>{event.title}</h2>
          <p>{event.category}</p>
        </article>
      ))}
    </div>
  );
}`}</CodeBlock>
            <div className="real-world-box"><strong>🎯 This single example teaches:</strong> useState, useEffect, async/await, fetch, HTTP status, JSON, error handling, loading state, map, key, conditional rendering!</div>
          </Accordion>

          <Accordion title="React Router & Context API" icon={<GitBranch size={18} />} neonColor="cyan">
            <h4>Router — Maps URLs to components</h4>
            <CodeBlock lang="jsx">{`<Route path="/events" element={<Events />} />
<Route path="/login" element={<Login />} />`}</CodeBlock>
            <h4 style={{ marginTop: 16 }}>Context API — Avoids prop drilling</h4>
            <p>Instead of passing user data through 5 levels of components, Context lets any component access shared data directly.</p>
            <CodeBlock lang="text">{`Without Context:      With Context:
App                   UserContext
 ↓ props              /    |    \\
Dashboard          Navbar  Dash  Profile
 ↓ props
Sidebar
 ↓ props
Profile`}</CodeBlock>
          </Accordion>
        </section>

        {/* Search Feature */}
        <section className="section">
          <h2 className="section-title">🔍 Part VII — Search Feature</h2>
          <Accordion title="Building Search in React" icon={<Search size={18} />} neonColor="purple" defaultOpen={true}>
            <CodeBlock lang="jsx">{`const [search, setSearch] = useState("");

const filteredEvents = events.filter(event =>
  event.title.toLowerCase().includes(search.toLowerCase())
);

<input
  type="text"
  placeholder="Search events..."
  value={search}
  onChange={e => setSearch(e.target.value)}
/>

<EventList events={filteredEvents} />`}</CodeBlock>
            <FlowDiagram items={['User types', 'search state updates', 'filter() runs', 'filteredEvents', 'EventList re-renders']} color="var(--neon-purple)" />
          </Accordion>
        </section>

        {/* Practical Exercises */}
        <section className="section">
          <h2 className="section-title">💻 Part VIII — Practical Exercises</h2>
          <p className="section-subtitle">Let's build things to solidify our knowledge!</p>

          <Accordion title="1. Profile Card (Props)" icon={<Box size={18} />} neonColor="cyan" defaultOpen={true}>
            <p>Create a <code>StudentProfile</code> component that takes <code>name</code>, <code>department</code>, <code>year</code>, and <code>skills</code> as props, and renders a professional card.</p>
          </Accordion>

          <Accordion title="2. Product Filter (filter)" icon={<Search size={18} />} neonColor="cyan">
            <p>Given a list of products (Laptop: 70k, Phone: 30k, Tablet: 25k), use <code>.filter()</code> to display only products above ₹30,000.</p>
          </Accordion>

          <Accordion title="3. Interactive Counter (State)" icon={<Zap size={18} />} neonColor="cyan">
            <p>Build a counter with three buttons: <strong>+</strong>, <strong>-</strong>, and <strong>Reset</strong> using <code>useState</code>.</p>
          </Accordion>

          <Accordion title="4. API Fetching (useEffect)" icon={<Globe size={18} />} neonColor="cyan">
            <p>Fetch users from <code>https://jsonplaceholder.typicode.com/users</code> and render their names and emails on the screen.</p>
          </Accordion>
        </section>

        {/* Common Doubts */}
        <section className="section">
          <h2 className="section-title">🤔 Part IX — Common Student Doubts</h2>
          
          <Accordion title="Why do we need React if JavaScript can manipulate the DOM?" icon={<Component size={18} />} neonColor="orange" defaultOpen={true}>
            <p>JavaScript absolutely can manipulate the DOM. React provides a component-oriented model for organizing UI, managing state and describing how the UI should correspond to application data. It becomes especially useful as the interface grows.</p>
          </Accordion>

          <Accordion title="Is React a programming language?" icon={<Code2 size={18} />} neonColor="orange">
            <p>No. <strong>JavaScript</strong> is the programming language. <strong>React</strong> is a JavaScript library.</p>
          </Accordion>

          <Accordion title="Are props and state the same?" icon={<Repeat size={18} />} neonColor="orange">
            <p>No.<br/><br/><strong>Props:</strong> Passed INTO a component from its parent.<br/><strong>State:</strong> Data managed BY the component itself.</p>
          </Accordion>

          <Accordion title="Why can't we just use variables instead of state?" icon={<Zap size={18} />} neonColor="orange">
            <p>Because React does not treat arbitrary variable changes as a signal to update the UI. State provides React with the information needed to update the component's rendered output.</p>
          </Accordion>

          <Accordion title="Why useEffect for API calls?" icon={<Globe size={18} />} neonColor="orange">
            <p>Because fetching data is interaction with an external system. Effects are designed for synchronizing a component with external systems such as network resources.</p>
          </Accordion>
          
          <Accordion title="Why can't we call the AI API directly from React?" icon={<Monitor size={18} />} neonColor="orange">
            <p>Because sensitive credentials such as API keys should not be exposed in browser-delivered frontend code. We must route it through our Backend (which we build tomorrow!).</p>
          </Accordion>
        </section>

        {/* Viva Questions */}
        <section className="section">
          <h2 className="section-title">🎤 Interview / Viva Questions</h2>
          <div className="grid-2">
            <Accordion title="Web Fundamentals (Q1-10)" icon={<Globe size={18} />} neonColor="orange">
              <ol className="viva-list">
                <li>What is frontend development?</li><li>What is backend development?</li><li>What is a database?</li>
                <li>What is client-server architecture?</li><li>What is an HTTP request?</li><li>What is an HTTP response?</li>
                <li>What is REST?</li><li>What is JSON?</li><li>What is an API?</li><li>What happens when you enter a URL?</li>
              </ol>
            </Accordion>
            <Accordion title="HTML/CSS (Q11-16)" icon={<Palette size={18} />} neonColor="orange">
              <ol className="viva-list" start={11}>
                <li>What is semantic HTML?</li><li>Difference between div and semantic elements?</li>
                <li>What is the CSS box model?</li><li>Difference between Flexbox and Grid?</li>
                <li>What is responsive design?</li><li>What is a media query?</li>
              </ol>
            </Accordion>
            <Accordion title="JavaScript (Q17-26)" icon={<Braces size={18} />} neonColor="lime">
              <ol className="viva-list" start={17}>
                <li>Difference between let, const, and var?</li><li>What is an object?</li><li>What is an array?</li>
                <li>What is an arrow function?</li><li>What is destructuring?</li><li>What is spread syntax?</li>
                <li>Difference between map() and filter()?</li><li>What is reduce()?</li><li>What is the DOM?</li><li>What is event handling?</li>
              </ol>
            </Accordion>
            <Accordion title="React (Q36-48)" icon={<Component size={18} />} neonColor="cyan">
              <ol className="viva-list" start={36}>
                <li>What is React?</li><li>What is a component?</li><li>What is JSX?</li><li>What are props?</li>
                <li>What is state?</li><li>Difference between props and state?</li><li>What is useState()?</li>
                <li>What is useEffect()?</li><li>Why do React lists need keys?</li><li>What is conditional rendering?</li>
                <li>What is React Router?</li><li>What is Context API?</li><li>What is prop drilling?</li>
              </ol>
            </Accordion>
          </div>
        </section>

        {/* Day 1 Closing */}
        <section className="section">
          <h2 className="section-title">🎯 Day 1 Closing</h2>
          <div className="neo-card" style={{ maxWidth: 500, margin: '0 auto', textAlign: 'center' }}>
            <FlowDiagram items={['HTML + CSS', 'JavaScript', 'DOM', 'JSON/API', 'async/await', 'React', 'Components + State', 'API Integration', '🖥️ CampusConnect UI', '"WHERE DOES THIS DATA COME FROM?"', '➡️ DAY 2']} color="var(--neon-cyan)" />
            <div className="real-world-box" style={{ marginTop: 16 }}>
              <strong>"Today we built what the user sees. Tomorrow we build what the user doesn't see — the server, APIs, database and authentication."</strong>
            </div>
          </div>
        </section>
      </div>


    </div>
  )
}
