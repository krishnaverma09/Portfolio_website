import React, { useState, useEffect } from "react";
import "./App.css";
import { FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { SiCodechef, SiGithub, SiLeetcode, SiCodeforces } from "@icons-pack/react-simple-icons";
import profilePic from "./profile.png";

function App() {
  const [theme, setTheme] = useState("dark");
  const [mobileMenu, setMobileMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "a6f82cc9-404d-455c-b155-0793399d0881");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("✅ Message sent successfully!");
      event.target.reset();
    } else {
      setResult("❌ Something went wrong. Please try again.");
    }
  };



  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <div className={`App`}>
      {/* --- Navbar --- */}
      <nav className={`navbar ${theme} ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <h1 className="logo"><span className="logo-mark">K</span>V</h1>
          <ul className={`nav-menu ${mobileMenu ? "active" : ""}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-icons">
            <button onClick={toggleTheme} className="theme-toggle">
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <button className="mobile-toggle" onClick={toggleMobileMenu}>
              {mobileMenu ? <FaTimes size={25} /> : <FaBars size={25} />}
            </button>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-image">
            <img src={profilePic} alt="Krishna Verma" />
          </div>
          <div className="hero-content">
            <h2>Hello, I'm</h2>
            <h1>Krishna Verma</h1>
            <h3>Computer Science Engineer</h3>

            <div className="hero-buttons">
              <a href="/resume.pdf" className="btn primary" download>Download Resume</a>
              <a href="#contact" className="btn secondary">Contact Info</a>
            </div>

            <div className="social-links">
            <a
              href="https://www.linkedin.com/in/krishna-verma-60b686308/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={28} color="#0077B5" />
            </a>
            <a
              href="https://github.com/krishnaverma09"
              target="_blank"
              rel="noreferrer"
            >
              <SiGithub size={28} color={theme === "light" ? "#000" : "#fff"} />
            </a>
            <a
              href="https://leetcode.com/Krishnaverma_09"
              target="_blank"
              rel="noreferrer"
            >
              <SiLeetcode size={28} color="#FFA116" />
            </a>
            <a
              href="https://www.codechef.com/users/krishnaverma09"
              target="_blank"
              rel="noreferrer"
            >
              <SiCodechef size={28} color="#B68F75" />
            </a>
            <a
              href="https://codeforces.com/profile/Krishna.verma_09"
              target="_blank"
              rel="noreferrer"
            >
              <SiCodeforces size={28} color="#1F8ACB" />
            </a>
          </div>
          </div>
        </div>
      </section>

      {/* --- About Section --- */}
<section id="about" className="section fade-in">
  <p className="section-subtitle">Get to know more</p>
  <h2 className="section-title">About Me</h2>

  <div className="section-card">
  <div className="about-container no-image text-left-layout">
    {/* Left Side - Description */}
    <div className="about-text">
      <h3>My Journey</h3>
      <p>
        I started as a curious learner, exploring coding and web development. Over time, 
        I’ve grown into a full-stack developer driven by a deep-seated passion for problem-solving. 
        My journey from a curious learner to an engineer is built on a strong foundation in 
        Data Structures and Algorithms (DSA), allowing me to build not just functional, 
        but efficient and scalable applications. I am proficient across the entire stack, 
        from backend technologies like Node.js, Python and MongoDB to modern frontend frameworks like 
        React and Next.js
      </p>
      <p>
        My current focus is expanding into AI/ML. I am actively learning to build AI that 
        reasons over private data and implement advanced semantic search, bridging the gap 
        between data and intelligent application design.
        I’m driven by curiosity, creativity, and the desire to build things that make 
        a difference.
      </p>
    </div>

    {/* Right Side - Info Cards */}
    <div className="about-cards grid-layout">
      <div className="about-card">
        <i className="fa-solid fa-code about-icon"></i>
        <h3>Clean Code</h3>
        <p>Writing maintainable, readable, and scalable backend & frontend code.</p>
      </div>

      <div className="about-card">
        <i className="fa-solid fa-lightbulb about-icon"></i>
        <h3>Problem Solver</h3>
        <p>Strong analytical mindset for tackling DSA and real-world logic challenges.</p>
      </div>

      <div className="about-card">
        <i className="fa-solid fa-robot about-icon"></i>
        <h3>AI/ML Enthusiast</h3>
        <p>Exploring AI tools, RAG systems, and intelligent, data-driven applications.</p>
      </div>

      <div className="about-card">
        <i className="fa-solid fa-bullseye about-icon"></i>
        <h3>Results Driven</h3>
        <p>Focused on delivering high-quality, functional, and efficient applications.</p>
      </div>

      <div className="about-card">
        <i className="fa-solid fa-diagram-project about-icon"></i>
        <h3>7+</h3>
        <p>Projects Built</p>
      </div>

      <div className="about-card">
        <i className="fa-solid fa-microchip about-icon"></i>
        <h3>5+</h3>
        <p>Technologies Mastered</p>
      </div>
    </div>
  </div>
  </div>
</section>


      {/* --- Skills Section --- */}
<section id="skills" className="section fade-in">
  <p className="section-subtitle">Explore My</p>
  <h2 className="section-title">Skills</h2>
  <div className="section-card">
  <div className="skills-container">
    {/* --- Skill Category 1 --- */}
    <div className="skills-category">
      <h3>Frontend Development</h3>
      <div className="skills-list">
        <div className="skill-item"><i className="fa-solid fa-check"></i> HTML5 <span>Experienced</span></div>
        <div className="skill-item"><i className="fa-solid fa-check"></i> CSS3 <span>Experienced</span></div>
        <div className="skill-item"><i className="fa-solid fa-check"></i> JavaScript <span>Intermediate</span></div>
        <div className="skill-item"><i className="fa-solid fa-check"></i> React.js <span>Intermediate</span></div>
        <div className="skill-item"><i className="fa-solid fa-check"></i> Tailwind CSS <span>Beginner</span></div>
      </div>
    </div>

    {/* --- Skill Category 2 --- */}
    <div className="skills-category">
      <h3>Backend Development</h3>
      <div className="skills-list">
        <div className="skill-item"><i className="fa-solid fa-check"></i> Node.js <span>Intermediate</span></div>
        <div className="skill-item"><i className="fa-solid fa-check"></i> Express.js <span>Intermediate</span></div>
        <div className="skill-item"><i className="fa-solid fa-check"></i> Python <span>Experienced</span></div>
        <div className="skill-item"><i className="fa-solid fa-check"></i> MySQL <span>Intermediate</span></div>
        <div className="skill-item"><i className="fa-solid fa-check"></i> MongoDB <span>Beginner</span></div>
      </div>
    </div>

    {/* --- Skill Category 3 --- */}
    <div className="skills-category">
      <h3>AI / ML & Tools</h3>
      <div className="skills-list">
        <div className="skill-item"><i className="fa-solid fa-check"></i> Pandas <span>Intermediate</span></div>
        <div className="skill-item"><i className="fa-solid fa-check"></i> Jupyter Notebooks <span>Beginner</span></div>
        <div className="skill-item"><i className="fa-solid fa-check"></i> Figma <span>Intermediate</span></div>
        <div className="skill-item"><i className="fa-solid fa-check"></i> Git & GitHub <span>Experienced</span></div>
        <div className="skill-item"><i className="fa-solid fa-check"></i> Docker <span>Beginner</span></div>
      </div>
    </div>
  </div>
  </div>
</section>


      {/* --- Projects Section --- */}
      <section id="projects" className="section fade-in">
        <p className="section-subtitle">Have a Look to my</p>
        <h2 className="section-title">Projects</h2>
        <div className="section-card">
        <div className="projects-grid">
          <div className="project-card">
            <img src="https://via.placeholder.com/400x250" alt="Project 1" className="project-image" />
            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p>A responsive portfolio website built with React and CSS showcasing my skills and work.</p>
              <div className="project-buttons">
                <a href="https://github.com/krishnaverma09" target="_blank" rel="noreferrer" className="btn secondary">
                  GitHub
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="btn primary">
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src="https://via.placeholder.com/400x250" alt="Project 2" className="project-image" />
            <div className="project-content">
              <h3>Blog Platform</h3>
              <p>Full-stack blog platform using Node.js, Express, and MySQL for content creation and sharing.</p>
              <div className="project-buttons">
                <a href="https://github.com/krishnaverma09" target="_blank" rel="noreferrer" className="btn secondary">
                  GitHub
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="btn primary">
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img src="https://via.placeholder.com/400x250" alt="Project 3" className="project-image" />
            <div className="project-content">
              <h3>Task Manager App</h3>
              <p>A clean and minimal task management app to track daily productivity efficiently.</p>
              <div className="project-buttons">
                <a href="https://github.com/krishnaverma09" target="_blank" rel="noreferrer" className="btn secondary">
                  GitHub
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="btn primary">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>


      {/* --- Contact Section --- */}
<section id="contact" className="section fade-in">
  <p className="section-subtitle">Don't Forget to</p>
  <h2 className="section-title">Contact Me</h2>

  <div className="contact-wrapper">
    <div className="contact-card-container">
      <div className="contact-container">
        {/* Left: Contact Form */}
        <div className="contact-form">
          <h3>Send Me a Message</h3>
          <p>Fill out the form below and I’ll get back to you as soon as possible.</p>
          <form onSubmit={onSubmit}>
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" placeholder="Your full name" required />

          <label htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" placeholder="your.email@example.com" required />

          <label htmlFor="subject">Subject *</label>
          <input type="text" id="subject" name="subject" placeholder="What's this about?" required />

          <label htmlFor="message">Message *</label>
          <textarea id="message" name="message" rows="5" placeholder="Tell me about your project..." required></textarea>

          <button type="submit" className="contact-btn">
            Send Message <i className="fa-solid fa-paper-plane"></i>
          </button>

          {/* ✅ This line displays success/error message */}
          {result && <p className="form-result">{result}</p>}
        </form>

          
        </div>

        {/* Right: Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to reach out through any of these channels.</p>

          <div className="contact-card">
            <i className="fa-solid fa-envelope contact-icon"></i>
            <div>
              <h4>Email</h4>
              <p>krishna.verma2024@nst.rishihood.edu.in</p>
            </div>
          </div>

          <div className="contact-card">
            <i className="fa-solid fa-location-dot contact-icon"></i>
            <div>
              <h4>Location</h4>
              <p>New Delhi, India</p>
            </div>
          </div>

          <h3 className="follow-heading">Follow Me</h3>
          <p>Connect with me on social and professional networks.</p>

          <div className="social-links">
            <a href="https://github.com/krishnaverma09" target="_blank" rel="noopener noreferrer" className="social-btn">
              <i className="fab fa-github"></i> GitHub
            </a>
            <a href="https://www.linkedin.com/in/krishna-verma-60b686308/" target="_blank" rel="noopener noreferrer" className="social-btn">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




      {/* --- Footer Section --- */}
      <footer className="footer fade-in">
        <div className="footer-container">
          <h3 className="footer-title">Krishna Verma</h3>

          <ul className="footer-nav">
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className="footer-socials">
            <a href="https://github.com/krishnaverma09" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/krishna-verma-60b686308/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:krishna.verma2024@nst.rishihood.edu.in"><i className="fa-solid fa-envelope"></i></a>
          </div>
          <p className="footer-copy">© {new Date().getFullYear()} Krishna Verma. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
