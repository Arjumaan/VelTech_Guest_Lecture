import { motion } from 'framer-motion'
import { FileCode, Server, Monitor, Sparkles, Key, Box, LayoutTemplate } from 'lucide-react'
import Accordion from '../components/Accordion'
import CodeBlock from '../components/CodeBlock'
import './Day.css'

export default function ProjectCode() {
  return (
    <div className="day-page">
      <header className="day-hero" style={{ borderBottom: '3px solid var(--neon-lime)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="tag tag-lime">Resources</span>
            <h1 className="day-hero-title">Campus Connect <span className="neon-lime">Source Code</span></h1>
            <p className="day-hero-sub">The complete full-stack codebase organized by day for easy copy-pasting</p>
          </motion.div>
        </div>
      </header>

      <div className="container day-content">
        
        {/* GETTING STARTED */}
        <section className="section">
          <h2 className="section-title" style={{ color: '#fff' }}><Box className="neon-pink" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} /> Getting Started</h2>
          <p className="section-subtitle">Download the Starter Kit and run the servers.</p>
          
          <div className="card" style={{ marginBottom: 30, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ color: '#fff', marginBottom: 10 }}>1. Download the Starter Kit</h3>
            <p style={{ color: 'var(--text-muted)' }}>Before you begin coding, make sure to download or clone the MERN Starter Kit from our official repository.</p>
            <a href="https://github.com/Arjumaan/MERN_Starter" target="_blank" rel="noreferrer" className="nav-btn nav-source" style={{ display: 'inline-flex', marginTop: 15, width: 'fit-content' }}>
               <Sparkles size={16} /> Get MERN_Starter Repository
            </a>
          </div>

          <div className="card" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3 style={{ color: '#fff', marginBottom: 15 }}>2. Essential Run Commands</h3>
            
            <h4 style={{ color: 'var(--neon-cyan)', marginTop: 20, marginBottom: 10 }}>🖥️ Frontend (React / Vite)</h4>
            <CodeBlock lang="bash">{`cd frontend
npm install
npm run dev`}</CodeBlock>

            <h4 style={{ color: 'var(--neon-orange)', marginTop: 25, marginBottom: 10 }}>⚙️ Backend & Database (Node + MongoDB)</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: 10, color: 'var(--text-muted)' }}>Note: Make sure you have created your MongoDB cluster and added your connection string to the <code>.env</code> file.</p>
            <CodeBlock lang="bash">{`cd backend
npm install
npm run dev`}</CodeBlock>

            <h4 style={{ color: 'var(--neon-purple)', marginTop: 25, marginBottom: 10 }}>✨ AI Integration (Gemini API)</h4>
            <p style={{ fontSize: '0.9rem', marginBottom: 10, color: 'var(--text-muted)' }}>Get your free API key from Google AI Studio and add it as <code>GEMINI_API_KEY</code> in your backend <code>.env</code> file before starting the backend server.</p>
          </div>
        </section>
        {/* DAY 1 - FRONTEND */}
        <section className="section">
          <h2 className="section-title"><Monitor className="neon-cyan" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} /> Day 1 — React Frontend</h2>
          <p className="section-subtitle">The user interface, routing, and basic React components.</p>

          <Accordion title="frontend/package.json" icon={<Box size={18} />} neonColor="cyan">
            <CodeBlock lang="json">{`{
  "name": "campus-connect-frontend",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.0",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "vite": "^5.1.4"
  }
}`}</CodeBlock>
          </Accordion>

          <Accordion title="frontend/src/main.jsx" icon={<FileCode size={18} />} neonColor="cyan">
            <CodeBlock lang="javascript">{`import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`}</CodeBlock>
          </Accordion>

          <Accordion title="frontend/src/index.css" icon={<FileCode size={18} />} neonColor="cyan">
            <CodeBlock lang="css">{`:root {
  --primary: #646cff;
  --bg: #f8fafc;
  --text: #0f172a;
}
body {
  font-family: Arial, sans-serif;
  background: var(--bg);
  color: var(--text);
  margin: 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
.card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  margin-bottom: 20px;
}
.btn {
  background: var(--primary);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}
.form-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 10px;
}
nav {
  display: flex;
  gap: 15px;
  background: white;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}`}</CodeBlock>
          </Accordion>

          <Accordion title="frontend/src/App.jsx" icon={<FileCode size={18} />} neonColor="cyan" defaultOpen={true}>
            <CodeBlock lang="javascript">{`import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;`}</CodeBlock>
          </Accordion>

          <Accordion title="frontend/src/components/Navbar.jsx" icon={<LayoutTemplate size={18} />} neonColor="cyan">
            <CodeBlock lang="javascript">{`import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <h2>CampusConnect</h2>
      <div style={{ marginLeft: 'auto' }}>
        <Link to="/">Home</Link>
        <Link to="/events" style={{ marginLeft: 15 }}>Events</Link>
        <Link to="/login" style={{ marginLeft: 15 }}>Login</Link>
      </div>
    </nav>
  );
}`}</CodeBlock>
          </Accordion>

          <Accordion title="frontend/src/pages/Events.jsx" icon={<FileCode size={18} />} neonColor="cyan">
            <CodeBlock lang="javascript">{`import { useState, useEffect } from 'react';
import EventCard from '../components/EventCard';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // We will replace this with real API fetch on Day 2
    setEvents([
      { id: 1, title: "AI Workshop", category: "Technology", date: "Oct 10" },
      { id: 2, title: "MERN Hackathon", category: "Development", date: "Oct 15" }
    ]);
  }, []);

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Upcoming Events</h1>
      <input 
        type="text" 
        className="form-input"
        placeholder="Search events..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}`}</CodeBlock>
          </Accordion>

          <Accordion title="frontend/src/components/EventCard.jsx" icon={<FileCode size={18} />} neonColor="cyan">
            <CodeBlock lang="javascript">{`export default function EventCard({ event }) {
  return (
    <div className="card">
      <h2>{event.title}</h2>
      <p><strong>Category:</strong> {event.category}</p>
      <p><strong>Date:</strong> {event.date}</p>
      <button className="btn">Register</button>
    </div>
  );
}`}</CodeBlock>
          </Accordion>

          <Accordion title="frontend/src/pages/Login.jsx" icon={<Key size={18} />} neonColor="cyan">
            <CodeBlock lang="javascript">{`import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", { email, password });
    // Will connect to backend on Day 2
  };

  return (
    <div className="card" style={{ maxWidth: 400, margin: '40px auto' }}>
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          className="form-input"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required 
        />
        <input 
          type="password" 
          className="form-input"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required 
        />
        <button type="submit" className="btn" style={{ width: '100%' }}>Login</button>
      </form>
    </div>
  );
}`}</CodeBlock>
          </Accordion>
        </section>

        {/* DAY 2 - BACKEND */}
        <section className="section">
          <h2 className="section-title"><Server className="neon-orange" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} /> Day 2 — Node/Express Backend</h2>
          <p className="section-subtitle">The REST API, MongoDB connection, Authentication and Routing.</p>

          <Accordion title="backend/package.json" icon={<Box size={18} />} neonColor="orange">
            <CodeBlock lang="json">{`{
  "name": "campus-connect-backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.19.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.3.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}`}</CodeBlock>
          </Accordion>

          <Accordion title="backend/server.js" icon={<FileCode size={18} />} neonColor="orange" defaultOpen={true}>
            <CodeBlock lang="javascript">{`require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Route imports
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

// Routes
app.use('/api/events', eventRoutes);
app.use('/api/users', userRoutes);

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}</CodeBlock>
          </Accordion>

          <Accordion title="backend/.env" icon={<FileCode size={18} />} neonColor="orange">
            <CodeBlock lang="text">{`PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/campusconnect
JWT_SECRET=supersecretkey123
GEMINI_API_KEY=your_google_ai_key`}</CodeBlock>
          </Accordion>

          <Accordion title="backend/middleware/errorMiddleware.js" icon={<FileCode size={18} />} neonColor="orange">
            <CodeBlock lang="javascript">{`const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};

module.exports = { errorHandler };`}</CodeBlock>
          </Accordion>

          <Accordion title="backend/models/Event.js" icon={<FileCode size={18} />} neonColor="orange">
            <CodeBlock lang="javascript">{`const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  venue: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);`}</CodeBlock>
          </Accordion>

          <Accordion title="backend/models/User.js" icon={<FileCode size={18} />} neonColor="orange">
            <CodeBlock lang="javascript">{`const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' }
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', userSchema);`}</CodeBlock>
          </Accordion>

          <Accordion title="backend/middleware/authMiddleware.js" icon={<Key size={18} />} neonColor="orange">
            <CodeBlock lang="javascript">{`const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;
  
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
  
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
};

module.exports = { protect };`}</CodeBlock>
          </Accordion>

          <Accordion title="backend/routes/eventRoutes.js" icon={<FileCode size={18} />} neonColor="orange">
            <CodeBlock lang="javascript">{`const express = require('express');
const router = express.Router();
const { getEvents, createEvent } = require('../controllers/eventController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', getEvents);
// Only logged-in users can create events
router.post('/', protect, createEvent);

module.exports = router;`}</CodeBlock>
          </Accordion>

          <Accordion title="backend/controllers/eventController.js" icon={<FileCode size={18} />} neonColor="orange">
            <CodeBlock lang="javascript">{`const Event = require('../models/Event');

exports.getEvents = async (req, res, next) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (error) {
    next(error);
  }
};

exports.createEvent = async (req, res, next) => {
  try {
    const newEvent = await Event.create(req.body);
    res.status(201).json(newEvent);
  } catch (error) {
    next(error);
  }
};`}</CodeBlock>
          </Accordion>
        </section>

        {/* DAY 3 - AI INTEGRATION */}
        <section className="section">
          <h2 className="section-title"><Sparkles className="neon-purple" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} /> Day 3 — AI Integration & Context</h2>
          <p className="section-subtitle">Adding Generative AI features and connecting the Frontend to the Backend.</p>

          <Accordion title="backend/routes/aiRoutes.js" icon={<FileCode size={18} />} neonColor="purple" defaultOpen={true}>
            <CodeBlock lang="javascript">{`const express = require('express');
const router = express.Router();
const { generateDescription } = require('../controllers/aiController');
const { protect } = require('../middleware/authMiddleware');

// Add to server.js: app.use('/api/ai', require('./routes/aiRoutes'));
router.post('/generate-description', protect, generateDescription);

module.exports = router;`}</CodeBlock>
          </Accordion>

          <Accordion title="backend/controllers/aiController.js" icon={<FileCode size={18} />} neonColor="purple">
            <CodeBlock lang="javascript">{`const { GoogleGenerativeAI } = require('@google/genai');

// Initialize Gemini API
const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.generateDescription = async (req, res, next) => {
  try {
    const { title, category } = req.body;
    
    const prompt = \`Write a catchy, 2-sentence event description for a college event titled "\${title}" in the \${category} category. Keep it exciting!\`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    res.json({ description: response.text });
  } catch (error) {
    res.status(500);
    next(new Error("AI Generation Failed"));
  }
};`}</CodeBlock>
          </Accordion>

          <Accordion title="frontend/src/context/AuthContext.jsx" icon={<FileCode size={18} />} neonColor="purple">
            <CodeBlock lang="javascript">{`import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
    localStorage.setItem('token', jwtToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};`}</CodeBlock>
          </Accordion>

          <Accordion title="frontend/src/components/AIAssistant.jsx" icon={<Sparkles size={18} />} neonColor="purple">
            <CodeBlock lang="javascript">{`import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function AIAssistant({ title, category }) {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);

  const handleGenerate = async () => {
    if (!token) return alert("Please login first!");
    
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/ai/generate-description", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": \`Bearer \${token}\`
        },
        body: JSON.stringify({ title, category })
      });
      const data = await response.json();
      setDescription(data.description);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card" style={{ border: '2px solid var(--neon-purple)' }}>
      <h3>✨ AI Description Generator</h3>
      <button onClick={handleGenerate} disabled={loading} className="btn">
        {loading ? "Generating..." : "Generate AI Description"}
      </button>
      {description && <p style={{ marginTop: 15, fontStyle: 'italic' }}>{description}</p>}
    </div>
  );
}

export default AIAssistant;`}</CodeBlock>
          </Accordion>
        </section>

      </div>

    </div>
  )
}
