import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/main.css";
import "./styles/landing.css";
import { getIcon } from "./utils/icons";

function render() {
  const root = document.getElementById("root");
  if (!root) return;

  root.innerHTML = `
    <main class="landing-container">
      <header class="landing-hero">
        <h1 class="landing-hero-title gradient-text">Who be I?</h1>
        <p class="landing-hero-subtitle">Java Fullstack & Vibecoding Enthusiast</p>
      </header>

      <section class="landing-card card">
        <div class="landing-bio">
          <p>
            By day, I’m a <strong>Java Fullstack Developer</strong> who teams up with DevOps to orchestrate containerized microservices in <strong>Dockerized Kubernetes (K8s)</strong> environments. ☕️🐳☸️
          </p>
          <p>
            But by night? That's when the real chaos begins. Welcome to my digital forest, where I trade enterprise architecture for pure <strong>Vibecoding 🎶💻</strong>—building fast, breaking things, and letting the creative juices flow.
          </p>
        </div>

        <h3 class="landing-sections-title">Tech Stack & Tools</h3>
        <div class="skills-grid">
          <div class="skill-card">
            <h4 class="skill-card-title">
              ${getIcon("Cpu", 18)} Enterprise Backend
            </h4>
            <ul class="skill-list">
              <li class="skill-item">Java (Core, EE, SE)</li>
              <li class="skill-item">Spring Boot & Microservices</li>
              <li class="skill-item">RESTful & gRPC APIs</li>
              <li class="skill-item">SQL & ORMs (Hibernate)</li>
            </ul>
          </div>

          <div class="skill-card">
            <h4 class="skill-card-title">
              ${getIcon("Sparkles", 18)} Creative Space
            </h4>
            <ul class="skill-list">
              <li class="skill-item">ReactJS & Vanilla JS</li>
              <li class="skill-item">Node.js Ecosystem</li>
              <li class="skill-item">WebGPU & Transformers.js</li>
              <li class="skill-item">Local SLMs (Qwen & Llama)</li>
            </ul>
          </div>

          <div class="skill-card">
            <h4 class="skill-card-title">
              ${getIcon("Compass", 18)} Avocations & Hobbies
            </h4>
            <ul class="skill-list">
              <li class="skill-item">FPV Drone Video Capture</li>
              <li class="skill-item">Hardware & Linux Tweak</li>
              <li class="skill-item">Retro & Modern Console Gaming</li>
              <li class="skill-item">Web Audio Synthesizers</li>
            </ul>
          </div>
        </div>
      </section>

      <div style="text-align: center; margin-top: 2rem;">
        <a href="https://oniblog.com" class="btn btn-ghost">
          ${getIcon("BookOpen", 18)} Visit OniBlog (Digital Garden)
        </a>
      </div>

      <footer class="landing-footer">
        <p>© ${new Date().getFullYear()} Kodama Landing. Powered by Vite + Vanilla JS.</p>
      </footer>
    </main>
  `;
}

render();
