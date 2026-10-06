import { Routes, Route, Link, NavLink } from "react-router-dom";
import {
  name, college, year, branch, email, github, linkedin,
  aboutText, skills, projects, achievements,
} from "./data";

// ---------- HOME PAGE ----------
function Home() {
  return (
    <div className="hero">
      <p className="hello">Hello, I am</p>
      <h1>{name}</h1>
      <h3>{year} student, {branch}</h3>
      <p className="college">{college}</p>
      <div className="buttons">
        <Link to="/work" className="btn">See my projects</Link>
        <Link to="/contact" className="btn light">Contact me</Link>
      </div>
    </div>
  );
}

// ---------- ABOUT PAGE ----------
function About() {
  return (
    <div>
      <h2>About me</h2>
      <p className="text">{aboutText}</p>

      <div className="box">
        <p><b>Name:</b> {name}</p>
        <p><b>College:</b> {college}</p>
        <p><b>Year:</b> {year}</p>
        <p><b>Branch:</b> {branch}</p>
      </div>

      <h3>Skills</h3>
      <div className="skills">
        {skills.map((s) => (
          <span className="skill" key={s}>{s}</span>
        ))}
      </div>
    </div>
  );
}

// ---------- PROJECTS + ACHIEVEMENTS PAGE ----------
function Work() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="grid">
        {projects.map((p) => (
          <div className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.about}</p>
            <a href={p.link} target="_blank" rel="noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>

      <h2>Achievements</h2>
      <ul className="achievements">
        {achievements.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ul>
    </div>
  );
}

// ---------- CONTACT PAGE ----------
function Contact() {
  return (
    <div>
      <h2>Contact me</h2>
      <p className="text">You can reach me on any of these.</p>

      <div className="box">
        <p><b>Email:</b> {email}</p>
        <p><b>GitHub:</b> <a href={github} target="_blank" rel="noreferrer">{github}</a></p>
        <p><b>LinkedIn:</b> <a href={linkedin} target="_blank" rel="noreferrer">{linkedin}</a></p>
      </div>

      <a href={"mailto:" + email}>
        <button className="btn">Send me an email</button>
      </a>
    </div>
  );
}

// ---------- MAIN APP (menu + pages) ----------
export default function App() {
  return (
    <div>
      <nav>
        <span className="logo">{name}</span>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Projects & Achievements</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>

      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <p className="footer">© {name}</p>
    </div>
  );
}
