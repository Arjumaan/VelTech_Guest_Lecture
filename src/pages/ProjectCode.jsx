import { motion } from 'framer-motion'
import { FileCode, Server, Monitor, Sparkles } from 'lucide-react'
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
            <p className="day-hero-sub">Complete code snippets organized by day for easy copy-pasting</p>
          </motion.div>
        </div>
      </header>

      <div className="container day-content">
        
        {/* DAY 1 - FRONTEND */}
        <section className="section">
          <h2 className="section-title"><Monitor className="neon-cyan" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} /> Day 1 — React Frontend</h2>
          <p className="section-subtitle">The user interface and basic React components.</p>

          <Accordion title="frontend/src/main.jsx" icon={<FileCode size={18} />} neonColor="cyan" defaultOpen={true}>
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
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-bottom: 10px;
}`}</CodeBlock>
          </Accordion>

          <Accordion title="frontend/src/App.jsx" icon={<FileCode size={18} />} neonColor="cyan">
            <CodeBlock lang="javascript">{`import { useState, useEffect } from 'react';
import EventCard from './components/EventCard';

function App() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // We will replace this with real API fetch on Day 2
    setEvents([
      { id: 1, title: "AI Workshop", category: "Technology" },
      { id: 2, title: "MERN Hackathon", category: "Development" }
    ]);
  }, []);

  const filteredEvents = events.filter(event => 
    event.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Campus Connect</h1>
      <input 
        type="text" 
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
}

export default App;`}</CodeBlock>
          </Accordion>

          <Accordion title="frontend/src/components/EventCard.jsx" icon={<FileCode size={18} />} neonColor="cyan">
            <CodeBlock lang="javascript">{`function EventCard({ event }) {
  return (
    <div className="card">
      <h2>{event.title}</h2>
      <p>{event.category}</p>
      <button className="btn">Register</button>
    </div>
  );
}

export default EventCard;`}</CodeBlock>
          </Accordion>
        </section>

        {/* DAY 2 - BACKEND */}
        <section className="section">
          <h2 className="section-title"><Server className="neon-orange" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} /> Day 2 — Node/Express Backend</h2>
          <p className="section-subtitle">The REST API, MongoDB connection, and routing.</p>

          <Accordion title="backend/server.js" icon={<FileCode size={18} />} neonColor="orange" defaultOpen={true}>
            <CodeBlock lang="javascript">{`require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const eventRoutes = require('./routes/eventRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Routes
app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}</CodeBlock>
          </Accordion>

          <Accordion title="backend/.env" icon={<FileCode size={18} />} neonColor="orange">
            <CodeBlock lang="text">{`PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/campusconnect
JWT_SECRET=supersecretkey123`}</CodeBlock>
          </Accordion>

          <Accordion title="backend/models/Event.js" icon={<FileCode size={18} />} neonColor="orange">
            <CodeBlock lang="javascript">{`const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);`}</CodeBlock>
          </Accordion>

          <Accordion title="backend/routes/eventRoutes.js" icon={<FileCode size={18} />} neonColor="orange">
            <CodeBlock lang="javascript">{`const express = require('express');
const router = express.Router();
const { getEvents, createEvent } = require('../controllers/eventController');

router.get('/', getEvents);
router.post('/', createEvent);

module.exports = router;`}</CodeBlock>
          </Accordion>

          <Accordion title="backend/controllers/eventController.js" icon={<FileCode size={18} />} neonColor="orange">
            <CodeBlock lang="javascript">{`const Event = require('../models/Event');

exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.createEvent = async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: "Bad Request" });
  }
};`}</CodeBlock>
          </Accordion>
        </section>

        {/* DAY 3 - AI INTEGRATION */}
        <section className="section">
          <h2 className="section-title"><Sparkles className="neon-purple" style={{ display: 'inline', verticalAlign: 'middle', marginRight: 8 }} /> Day 3 — AI Integration</h2>
          <p className="section-subtitle">Adding Generative AI features to our full-stack app.</p>

          <Accordion title="backend/routes/aiRoutes.js" icon={<FileCode size={18} />} neonColor="purple" defaultOpen={true}>
            <CodeBlock lang="javascript">{`const express = require('express');
const router = express.Router();
const { generateDescription } = require('../controllers/aiController');

router.post('/generate-description', generateDescription);

module.exports = router;`}</CodeBlock>
          </Accordion>

          <Accordion title="backend/controllers/aiController.js" icon={<FileCode size={18} />} neonColor="purple">
            <CodeBlock lang="javascript">{`const { GoogleGenerativeAI } = require('@google/genai');

// Initialize Gemini API
const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.generateDescription = async (req, res) => {
  try {
    const { title, category } = req.body;
    
    const prompt = \`Write a catchy, 2-sentence event description for a college event titled "\${title}" in the \${category} category.\`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    res.json({ description: response.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "AI Generation Failed" });
  }
};`}</CodeBlock>
          </Accordion>

          <Accordion title="frontend/src/components/AIAssistant.jsx" icon={<FileCode size={18} />} neonColor="purple">
            <CodeBlock lang="javascript">{`import { useState } from 'react';

function AIAssistant({ title, category }) {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/ai/generate-description", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    <div className="card" style={{ border: '2px solid #a855f7' }}>
      <h3>✨ AI Assistant</h3>
      <button onClick={handleGenerate} disabled={loading} className="btn">
        {loading ? "Generating..." : "Generate Description"}
      </button>
      {description && <p style={{ marginTop: 15, fontStyle: 'italic' }}>{description}</p>}
    </div>
  );
}

export default AIAssistant;`}</CodeBlock>
          </Accordion>
        </section>

      </div>
      <footer className="app-footer">
        <p>Project Code — Campus Connect • VelTech Guest Lecture © 2026</p>
      </footer>
    </div>
  )
}
