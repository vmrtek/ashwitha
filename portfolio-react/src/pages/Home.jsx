import { Link } from 'react-router-dom';
import { AirtableLogo, FigmaLogo, MiroLogo } from '../components/Icons';
import { AirtableTimeline, AirtableKanban } from '../components/AirtableVisuals';
import { WireframeHighFidelity } from '../components/WireframeVisuals';
import { MiroUserFlow } from '../components/MiroVisuals';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Product Designer • 5 Years Experience</span>
          <h1 className="hero-title">
            <span className="hero-name">Ashwitha Reddy</span>
            <span className="hero-tagline">Crafting Visual Product Roadmaps & Wireframes</span>
          </h1>
          <p className="hero-description">
            I bridge the gap between product requirements and engineering by creating 
            visual design artifacts that teams can act on immediately. Specialized in 
            healthcare and enterprise platforms.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">View My Work</Link>
            <Link to="/contact" className="btn-secondary">Get in Touch</Link>
          </div>
        </div>

        {/* Floating Tool Cards */}
        <div className="hero-tools">
          <Link to="/airtable" className="tool-card tool-airtable">
            <AirtableLogo size={32} />
            <span>Airtable</span>
            <small>Roadmaps & Visualization</small>
          </Link>
          <Link to="/wireframes" className="tool-card tool-figma">
            <FigmaLogo size={32} />
            <span>Figma</span>
            <small>Wireframes & Prototypes</small>
          </Link>
          <Link to="/wireframes" className="tool-card tool-miro">
            <MiroLogo size={32} />
            <span>Miro</span>
            <small>User Flows & Research</small>
          </Link>
        </div>
      </section>

      {/* Airtable Preview Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <AirtableLogo size={28} />
                <span style={{ 
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(24, 191, 255, 0.1)',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#18bfff'
                }}>AIRTABLE VISUALIZATION</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>
                Product Roadmap Timeline
              </h2>
            </div>
            <Link to="/airtable" className="btn-secondary" style={{ fontSize: '0.875rem' }}>
              View All Airtable Work →
            </Link>
          </div>
          <AirtableTimeline />
        </div>
      </section>

      {/* Kanban Preview */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <AirtableLogo size={28} />
                <span style={{ 
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(24, 191, 255, 0.1)',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#18bfff'
                }}>AIRTABLE KANBAN</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>
                Sprint Board Management
              </h2>
            </div>
          </div>
          <AirtableKanban />
        </div>
      </section>

      {/* Wireframe Preview */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <FigmaLogo size={28} />
                <span style={{ 
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(162, 89, 255, 0.1)',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#a259ff'
                }}>FIGMA WIREFRAMES</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '1rem' }}>
                High-Fidelity Mockups
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Production-ready designs with complete component libraries, 
                interaction specifications, and engineering handoff documentation.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                {['500+ wireframes delivered', 'Low to high fidelity', 'Detailed annotations', 'Responsive designs'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: '#a259ff' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link to="/wireframes" className="btn-primary">
                View All Wireframes →
              </Link>
            </div>
            <WireframeHighFidelity />
          </div>
        </div>
      </section>

      {/* Miro Preview */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <MiroLogo size={28} />
                <span style={{ 
                  padding: '0.25rem 0.75rem',
                  background: 'rgba(255, 208, 47, 0.2)',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#ffd02f'
                }}>MIRO USER FLOWS</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>
                User Flow Diagrams
              </h2>
            </div>
            <Link to="/wireframes" className="btn-secondary" style={{ fontSize: '0.875rem' }}>
              View All User Flows →
            </Link>
          </div>
          <MiroUserFlow title="Patient Admission Flow" />
        </div>
      </section>

      {/* Projects Preview */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.5rem' }}>
              Featured Projects
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Complex enterprise solutions across 5 industries
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem' }}>
            {[
              { name: 'Healthcare', color: '#ef4444', icon: '🏥', desc: 'Patient Management' },
              { name: 'Retail', color: '#10b981', icon: '🛒', desc: 'Inventory System' },
              { name: 'Manufacturing', color: '#06b6d4', icon: '🏭', desc: 'Production Monitoring' },
              { name: 'E-commerce', color: '#8b5cf6', icon: '🛍️', desc: 'Seller Platform' },
              { name: 'Banking', color: '#f59e0b', icon: '🏦', desc: 'Loan Origination' },
            ].map((project) => (
              <Link 
                key={project.name} 
                to={`/projects#${project.name.toLowerCase().replace('-', '')}`}
                style={{ 
                  background: 'var(--bg-card)',
                  padding: '1.5rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)',
                  textAlign: 'center',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.2s ease'
                }}
              >
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>{project.icon}</span>
                <span style={{ 
                  display: 'inline-block',
                  padding: '0.25rem 0.5rem',
                  background: `${project.color}15`,
                  borderRadius: '4px',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  color: project.color,
                  marginBottom: '0.5rem'
                }}>{project.name}</span>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.desc}</p>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/projects" className="btn-primary">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.5rem' }}>
              What I Do
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Translating complex product requirements into visual design artifacts
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <Link to="/airtable" style={{ 
              background: 'linear-gradient(135deg, rgba(24, 191, 255, 0.1) 0%, rgba(24, 191, 255, 0.02) 100%)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(24, 191, 255, 0.2)',
              textDecoration: 'none',
              color: 'inherit'
            }}>
              <AirtableLogo size={40} />
              <h3 style={{ fontSize: '1.25rem', margin: '1rem 0 0.5rem' }}>Airtable Visualization</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                Product roadmaps, feature dependencies, timeline views, and kanban boards
              </p>
            </Link>
            <Link to="/wireframes" style={{ 
              background: 'linear-gradient(135deg, rgba(162, 89, 255, 0.1) 0%, rgba(162, 89, 255, 0.02) 100%)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(162, 89, 255, 0.2)',
              textDecoration: 'none',
              color: 'inherit'
            }}>
              <FigmaLogo size={40} />
              <h3 style={{ fontSize: '1.25rem', margin: '1rem 0 0.5rem' }}>Wireframing</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                Low to high fidelity wireframes with detailed annotations for engineering
              </p>
            </Link>
            <Link to="/wireframes" style={{ 
              background: 'linear-gradient(135deg, rgba(255, 208, 47, 0.1) 0%, rgba(255, 208, 47, 0.02) 100%)',
              padding: '2rem',
              borderRadius: '16px',
              border: '1px solid rgba(255, 208, 47, 0.2)',
              textDecoration: 'none',
              color: 'inherit'
            }}>
              <MiroLogo size={40} />
              <h3 style={{ fontSize: '1.25rem', margin: '1rem 0 0.5rem' }}>User Flow Design</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                Journey mapping, process flows, and cross-functional collaboration
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
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
