import { motion } from 'framer-motion'
import { Server, Database, Shield, Lock, Key, Globe, Layers, FileCode, Braces, Search, ListOrdered, AlertTriangle, GitBranch, ArrowRight } from 'lucide-react'
import Accordion from '../components/Accordion'
import CodeBlock from '../components/CodeBlock'
import FlowDiagram from '../components/FlowDiagram'
import './Day.css'

export default function Day2() {
  return (
    <div className="day-page">
      <header className="day-hero" style={{ borderBottom: '3px solid var(--neon-pink)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="tag tag-pink">Day 2</span>
            <h1 className="day-hero-title">Backend, Database & <span className="neon-pink">Security</span></h1>
            <p className="day-hero-sub">"From Frontend to a Real Full-Stack Application"</p>
          </motion.div>
        </div>
      </header>

      <div className="container day-content">
        {/* Story */}
        <section className="section">
          <h2 className="section-title">📖 The Story of Day 2</h2>
          <div className="neo-card" style={{ maxWidth: 500, margin: '0 auto' }}>
            <FlowDiagram items={['"Where does the data come from?"', 'Node.js', 'Express', 'REST API', 'MongoDB', 'Mongoose', 'Authentication', 'Authorization', 'Security', 'FULL-STACK APPLICATION']} color="var(--neon-pink)" />
          </div>
        </section>

        {/* Node.js */}
        <section className="section">
          <h2 className="section-title">🟢 Part I — Node.js & NPM</h2>
          
          <Accordion title="1. What is Node.js?" icon={<Server size={18} />} neonColor="pink" defaultOpen={true}>
            <p style={{ marginBottom: 12 }}>Browsers (like Chrome) use engines (like V8) to run JavaScript. <strong>Node.js</strong> takes that engine out of the browser so you can run JavaScript on a server. This means we use the <strong>same language</strong> for both frontend and backend!</p>
            <CodeBlock lang="javascript">{`// server.js
console.log("CampusConnect backend is starting...");

// Run this in your terminal:
// node server.js`}</CodeBlock>
          </Accordion>

          <Accordion title="2. Starting a Backend Project (NPM from scratch)" icon={<Layers size={18} />} neonColor="pink">
            <p style={{ marginBottom: 12 }}>To build a backend, we need external libraries (like <code>express</code> for routing and <code>mongoose</code> for database connection). We manage these using <strong>NPM</strong>.</p>
            <CodeBlock lang="bash">{`# 1. Create a new empty folder
mkdir backend
cd backend

# 2. Initialize a new Node project (creates package.json)
npm init -y

# 3. Install required packages
npm install express mongoose cors dotenv`}</CodeBlock>
            
            <div className="grid-2" style={{ marginTop: 16 }}>
              <div>
                <h4 style={{ marginBottom: 8, color: 'var(--neon-cyan)' }}>What just happened?</h4>
                <ul style={{ paddingLeft: 20, fontSize: '0.85rem' }}>
                  <li><strong>package.json</strong> was created. It keeps track of exactly which versions of <code>express</code> and <code>mongoose</code> your project depends on.</li>
                  <li><strong>package-lock.json</strong> locks those versions to ensure your code works identically on any computer.</li>
                  <li><strong>node_modules/</strong> was created to store all the downloaded code.</li>
                </ul>
              </div>
              <div className="real-world-box"><strong>⚠️ CRITICAL:</strong> Never upload <code>node_modules/</code> to GitHub or share it. You only share the <code>package.json</code> file, and other developers run <code>npm install</code> to download the modules themselves!</div>
            </div>
          </Accordion>
        </section>

        {/* Express */}
        <section className="section">
          <h2 className="section-title">🚂 Part II — Express.js & REST APIs</h2>
          <Accordion title="First Express Server" icon={<Server size={18} />} neonColor="cyan" defaultOpen={true}>
            <CodeBlock lang="javascript">{`const express = require("express");
const app = express();

app.use(express.json()); // Parse JSON bodies

app.get("/", (req, res) => {
  res.send("CampusConnect API");
});

app.get("/api/events", (req, res) => {
  res.status(200).json([
    { id: 1, title: "AI Workshop", category: "AI" },
    { id: 2, title: "MERN Hackathon", category: "Development" }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});`}</CodeBlock>
          </Accordion>

          <Accordion title="REST API Design" icon={<Layers size={18} />} neonColor="cyan">
            <table className="neo-table"><thead><tr><th>Method</th><th>Endpoint</th><th>Action</th></tr></thead><tbody>
              <tr><td><span className="tag tag-lime">GET</span></td><td>/api/events</td><td>Get all events</td></tr>
              <tr><td><span className="tag tag-lime">GET</span></td><td>/api/events/:id</td><td>Get one event</td></tr>
              <tr><td><span className="tag tag-cyan">POST</span></td><td>/api/events</td><td>Create event</td></tr>
              <tr><td><span className="tag tag-orange">PUT</span></td><td>/api/events/:id</td><td>Update event</td></tr>
              <tr><td><span className="tag tag-pink">DELETE</span></td><td>/api/events/:id</td><td>Delete event</td></tr>
            </tbody></table>
          </Accordion>

          <Accordion title="Routes, Middleware & Controllers" icon={<GitBranch size={18} />} neonColor="cyan">
            <FlowDiagram items={['Request', 'Middleware (logger, auth)', 'Route', 'Controller', 'Database', 'Response']} color="var(--neon-cyan)" />
            <h4>Custom Middleware</h4>
            <CodeBlock lang="javascript">{`const logger = (req, res, next) => {
  console.log(req.method, req.url);
  next(); // Pass control to next handler
};
app.use(logger);`}</CodeBlock>
            <h4 style={{ marginTop: 16 }}>Request Data Cheat Sheet</h4>
            <table className="neo-table"><thead><tr><th>Data</th><th>Example</th><th>Express</th></tr></thead><tbody>
              <tr><td>Params</td><td>/events/101</td><td>req.params.id</td></tr>
              <tr><td>Query</td><td>?page=2</td><td>req.query.page</td></tr>
              <tr><td>Body</td><td>JSON data</td><td>req.body</td></tr>
              <tr><td>Headers</td><td>Authorization</td><td>req.headers</td></tr>
            </tbody></table>
          </Accordion>
        </section>

        {/* MongoDB */}
        <section className="section">
          <h2 className="section-title">🍃 Part III — MongoDB & Mongoose</h2>
          <Accordion title="MongoDB Documents & CRUD" icon={<Database size={18} />} neonColor="lime" defaultOpen={true}>
            <CodeBlock lang="json">{`{
  "_id": "abc123",
  "title": "AI Workshop",
  "category": "AI",
  "venue": "Seminar Hall",
  "date": "2026-09-15"
}`}</CodeBlock>
            <table className="neo-table" style={{ marginTop: 16 }}><thead><tr><th>Operation</th><th>HTTP</th><th>MongoDB</th></tr></thead><tbody>
              <tr><td>Create</td><td>POST</td><td>insertOne()</td></tr>
              <tr><td>Read</td><td>GET</td><td>find() / findOne()</td></tr>
              <tr><td>Update</td><td>PUT/PATCH</td><td>updateOne()</td></tr>
              <tr><td>Delete</td><td>DELETE</td><td>deleteOne()</td></tr>
            </tbody></table>
          </Accordion>

          <Accordion title="Mongoose Schema & Model" icon={<FileCode size={18} />} neonColor="lime">
            <CodeBlock lang="javascript">{`const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title:    { type: String, required: true, trim: true },
  category: { type: String, required: true },
  venue:    { type: String },
  date:     { type: Date, required: true }
});

const Event = mongoose.model("Event", eventSchema);

// CRUD Operations
const event = await Event.create(req.body);          // Create
const events = await Event.find();                    // Read all
const one = await Event.findById(req.params.id);      // Read one
const updated = await Event.findByIdAndUpdate(id, body, { new: true }); // Update
await Event.findByIdAndDelete(id);                    // Delete`}</CodeBlock>
          </Accordion>

          <Accordion title="Search, Filter & Pagination" icon={<Search size={18} />} neonColor="lime">
            <CodeBlock lang="javascript">{`// GET /api/events?search=AI&category=Workshop&page=2&limit=10
const { search, category } = req.query;
const filter = {};

if (search) filter.title = { $regex: search, $options: "i" };
if (category) filter.category = category;

const page = Number(req.query.page) || 1;
const limit = Number(req.query.limit) || 10;
const skip = (page - 1) * limit;

const events = await Event.find(filter).skip(skip).limit(limit);
const total = await Event.countDocuments(filter);

res.json({
  data: events,
  pagination: { page, limit, total, totalPages: Math.ceil(total / limit) }
});`}</CodeBlock>
          </Accordion>
        </section>

        {/* Authentication */}
        <section className="section">
          <h2 className="section-title">🔐 Part IV — Authentication & Authorization</h2>
          <Accordion title="Password Hashing (bcrypt)" icon={<Lock size={18} />} neonColor="purple" defaultOpen={true}>
            <div className="real-world-box" style={{ marginBottom: 16, borderLeftColor: 'var(--neon-pink)' }}>
              <strong>⚠️ NEVER store passwords as plain text!</strong> A database breach would expose all user credentials.
            </div>
            <CodeBlock lang="javascript">{`const bcrypt = require("bcryptjs");

// Registration — Hash password
const hashedPassword = await bcrypt.hash(password, 12);

// Login — Compare password
const isMatch = await bcrypt.compare(password, user.password);`}</CodeBlock>
          </Accordion>

          <Accordion title="JWT (JSON Web Token)" icon={<Key size={18} />} neonColor="purple">
            <FlowDiagram items={['Login successful', 'Server creates JWT', 'Client stores token', 'Client sends token with requests', 'Server verifies token', 'Protected resource accessed']} color="var(--neon-purple)" />
            <CodeBlock lang="javascript">{`const jwt = require("jsonwebtoken");

// Generate token
const token = jwt.sign(
  { userId: user._id },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);

// Verify middleware
const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer "))
    return res.status(401).json({ message: "Authentication required" });
  
  const token = authHeader.split(" ")[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};

// Protected route
router.get("/profile", protect, getProfile);`}</CodeBlock>
          </Accordion>

          <Accordion title="Role-Based Access Control (RBAC)" icon={<Shield size={18} />} neonColor="purple">
            <CodeBlock lang="javascript">{`// User schema
role: {
  type: String,
  enum: ["student", "organizer", "admin"],
  default: "student"
}

// Authorization middleware
const authorize = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role))
    return res.status(403).json({ message: "Access denied" });
  next();
};

// Usage: Only admins can delete
router.delete("/events/:id", protect, authorize("admin"), deleteEvent);`}</CodeBlock>
            <div className="real-world-box"><strong>Auth vs Authz:</strong> Authentication = "Who are you?" | Authorization = "What can you do?"</div>
          </Accordion>
        </section>

        {/* Security */}
        <section className="section">
          <h2 className="section-title">🛡️ Part V — API Security</h2>
          <Accordion title="CORS & Environment Variables" icon={<Globe size={18} />} neonColor="orange">
            <CodeBlock lang="javascript">{`// CORS — Allow frontend to call backend
const cors = require("cors");
app.use(cors({ origin: "http://localhost:5173" }));

// Environment variables — .env file
MONGO_URI=mongodb+srv://...
JWT_SECRET=your-secret-key
PORT=5000

// Load with dotenv
require("dotenv").config();
console.log(process.env.MONGO_URI);`}</CodeBlock>
            <div className="real-world-box"><strong>⚠️ .gitignore:</strong> Always add <code>node_modules/</code> and <code>.env</code>. If a secret is committed, consider it compromised!</div>
          </Accordion>

          <Accordion title="10 Security Principles" icon={<AlertTriangle size={18} />} neonColor="orange">
            <ol className="viva-list">
              <li>Never trust client input</li><li>Never store plaintext passwords</li><li>Never expose secrets in code</li>
              <li>Authenticate protected resources</li><li>Authorize actions by role</li><li>Validate all input on backend</li>
              <li>Rate limit API requests</li><li>Use HTTPS in production</li><li>Return safe error messages</li>
              <li>Keep dependencies updated</li>
            </ol>
          </Accordion>
        </section>

        {/* Full-Stack Integration */}
        <section className="section">
          <h2 className="section-title">🔗 Part VI — React ↔ Backend Integration</h2>
          <Accordion title="Connect React to Express API" icon={<ArrowRight size={18} />} neonColor="cyan" defaultOpen={true}>
            <p style={{ marginBottom: 12 }}>The major Day 2 demo: Replace hardcoded data with real database!</p>
            <CodeBlock lang="jsx">{`// React: Load events from backend
useEffect(() => {
  async function loadEvents() {
    const response = await fetch("http://localhost:5000/api/events");
    const data = await response.json();
    setEvents(data);
  }
  loadEvents();
}, []);

// React: Create event via API
async function createEvent(eventData) {
  await fetch("http://localhost:5000/api/events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData)
  });
}`}</CodeBlock>
            <FlowDiagram items={['React Form', 'POST /api/events', 'Express Route', 'Controller', 'Mongoose → MongoDB', 'JSON Response', 'React State → UI']} color="var(--neon-cyan)" />
          </Accordion>
        </section>

        {/* Backend Architecture */}
        <section className="section">
          <h2 className="section-title">📁 Backend Project Structure</h2>
          <div className="neo-card">
            <CodeBlock lang="text">{`server/
├── config/
│   └── db.js
├── controllers/
│   ├── authController.js
│   ├── eventController.js
│   └── userController.js
├── middleware/
│   ├── authMiddleware.js
│   ├── errorMiddleware.js
│   └── roleMiddleware.js
├── models/
│   ├── User.js
│   ├── Event.js
│   └── Registration.js
├── routes/
│   ├── authRoutes.js
│   ├── eventRoutes.js
│   └── userRoutes.js
├── .env
├── .gitignore
├── server.js
└── package.json`}</CodeBlock>
          </div>
        </section>

        {/* Viva */}
        <section className="section">
          <h2 className="section-title">🎤 Interview / Viva Questions</h2>
          <div className="grid-2">
            <Accordion title="Node.js & Express (Q1-17)" icon={<Server size={18} />} neonColor="pink">
              <ol className="viva-list">
                <li>What is Node.js?</li><li>Is Node.js a language?</li><li>What is NPM?</li><li>What is package.json?</li>
                <li>What is Express?</li><li>What is a route?</li><li>What is middleware?</li><li>What does next() do?</li>
                <li>What is req.params vs req.query vs req.body?</li><li>What is REST?</li><li>GET vs POST?</li><li>PUT vs PATCH?</li>
                <li>What does 201 mean?</li><li>Difference between 401 and 403?</li>
              </ol>
            </Accordion>
            <Accordion title="MongoDB & Security (Q25-48)" icon={<Shield size={18} />} neonColor="purple">
              <ol className="viva-list" start={25}>
                <li>What is MongoDB?</li><li>What is NoSQL?</li><li>What is Mongoose?</li><li>What is a schema?</li>
                <li>Authentication vs authorization?</li><li>Why hash passwords?</li><li>What is JWT?</li><li>Is JWT encrypted?</li>
                <li>Why use .env?</li><li>What is CORS?</li><li>Why validate backend input?</li>
              </ol>
            </Accordion>
          </div>
        </section>

        {/* Closing */}
        <section className="section">
          <div className="neo-card" style={{ maxWidth: 500, margin: '0 auto', textAlign: 'center' }}>
            <h2 className="section-title" style={{ fontSize: '1.4rem' }}>🎯 Day 2 Closing</h2>
            <FlowDiagram items={['React (Day 1)', 'HTTP Request', 'Express API', 'Mongoose', 'MongoDB', 'JSON Response', 'React UI', '"What is still missing? INTELLIGENCE."', '➡️ DAY 3: AI Integration']} color="var(--neon-pink)" />
          </div>
        </section>
      </div>

      <footer className="app-footer">
        <p>Day 2 — Backend, Database & Security • VelTech Guest Lecture © 2026</p>
      </footer>
    </div>
  )
}
