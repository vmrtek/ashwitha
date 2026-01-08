import { Link } from 'react-router-dom';
import { AirtableLogo, FigmaLogo, MiroLogo, WireframeLogo } from '../components/Icons';

function Home() {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <div className="hero-intro">
            <span className="greeting">Hello, I'm</span>
            <h1>Ashwitha Reddy</h1>
            <p className="hero-title">UX Designer</p>
          </div>
          <p className="hero-subtitle">
            5 years of experience crafting visual product roadmaps, wireframes, and 
            requirement visualizations for healthcare and enterprise platforms. I bridge 
            the gap between product requirements and engineering teams through clear, 
            actionable design artifacts.
          </p>
          <div className="hero-cta">
            <Link to="/projects" className="btn-primary">View My Work</Link>
            <Link to="/contact" className="btn-secondary">Get in Touch</Link>
          </div>
          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-value">5+</span>
              <span className="meta-label">Years Experience</span>
            </div>
            <div className="meta-item">
              <span className="meta-value">Healthcare</span>
              <span className="meta-label">Domain Expertise</span>
            </div>
            <div className="meta-item">
              <span className="meta-value">Enterprise</span>
              <span className="meta-label">Internal Apps</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-cards">
            <Link to="/airtable" className="float-card airtable">
              <AirtableLogo size={24} />
              <span>Airtable</span>
            </Link>
            <Link to="/skills" className="float-card figma">
              <FigmaLogo size={24} />
              <span>Figma</span>
            </Link>
            <Link to="/skills" className="float-card miro">
              <MiroLogo size={24} />
              <span>Miro</span>
            </Link>
            <Link to="/wireframes" className="float-card wireframe">
              <WireframeLogo size={24} />
              <span>Wireframing</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Quick Overview Section */}
      <section className="section">
        <h2 className="section-title">What I Do</h2>
        <p className="section-desc">
          I translate complex product requirements into visual design artifacts 
          that engineering teams can act on immediately.
        </p>
        <div className="skills-grid">
          <Link to="/airtable" className="skill-card">
            <span className="skill-icon"><AirtableLogo size={48} /></span>
            <h3>Airtable Visualization</h3>
            <p>Product roadmaps, feature dependencies, timeline views, and kanban boards</p>
          </Link>
          <Link to="/wireframes" className="skill-card">
            <span className="skill-icon"><WireframeLogo size={48} /></span>
            <h3>Wireframing</h3>
            <p>Low to high fidelity wireframes with detailed annotations for engineering</p>
          </Link>
          <Link to="/projects" className="skill-card">
            <span className="skill-icon"><MiroLogo size={48} /></span>
            <h3>User Flow Design</h3>
            <p>Journey mapping, process flows, and cross-functional collaboration</p>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section dark-section">
        <div className="stats-grid">
          <div className="stat-card">
            <span className="stat-num">400+</span>
            <span className="stat-label">Wireframes Created</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">25+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">5</span>
            <span className="stat-label">Industries Covered</span>
          </div>
          <div className="stat-card">
            <span className="stat-num">50+</span>
            <span className="stat-label">Engineering Handoffs</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Work Together?</h2>
        <p>I'm always open to discussing new opportunities</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/contact" className="btn-secondary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}

export default Home;
