import { Link } from 'react-router-dom';
import { FigmaLogo } from '../components/Icons';
import { 
  WireframeLowFidelity, 
  WireframeMidFidelity, 
  WireframeHighFidelity,
  WireframeAnnotated 
} from '../components/WireframeVisuals';
import { MiroUserFlow, MiroJourneyMap, MiroAffinityDiagram } from '../components/MiroVisuals';

function Wireframes() {
  return (
    <>
      <header className="page-hero">
        <div className="page-hero-content">
          <span className="page-number">05</span>
          <h1>Wireframing Expertise</h1>
          <p className="page-subtitle">
            Translating complex product requirements into clear, actionable visual designs 
            through meticulous wireframing at every fidelity level
          </p>
        </div>
      </header>

      {/* Intro Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
            <FigmaLogo size={80} />
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.5rem' }}>
                From Concept to Blueprint
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px' }}>
                Wireframing is a cornerstone of my design process. I deliver wireframes that are 
                comprehensive blueprints for engineering teams, complete with annotations, user flows, 
                and interactive prototypes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Low Fidelity Wireframe */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ 
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'rgba(162, 89, 255, 0.1)',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#a259ff',
                marginBottom: '1rem'
              }}>LOW FIDELITY</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '1rem' }}>
                Rapid Concept Exploration
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Quick sketches and basic layouts to explore initial concepts and validate core functionality. 
                Focus on structure and content placement without visual polish.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Content hierarchy', 'Layout structure', 'Navigation patterns', 'Core user flows'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: '#a259ff' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <WireframeLowFidelity />
          </div>
        </div>
      </section>

      {/* Mid Fidelity Wireframe */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <WireframeMidFidelity />
            <div>
              <span style={{ 
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'rgba(162, 89, 255, 0.1)',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#a259ff',
                marginBottom: '1rem'
              }}>MID FIDELITY</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '1rem' }}>
                Detailed UI Components
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                More detailed representations with specific UI elements, text content, and basic interactions. 
                Used for user testing and refining flows before visual design.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Real content', 'Form layouts', 'Button states', 'User feedback'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: '#a259ff' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* High Fidelity Wireframe */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
            <div>
              <span style={{ 
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'rgba(162, 89, 255, 0.1)',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#a259ff',
                marginBottom: '1rem'
              }}>HIGH FIDELITY</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '1rem' }}>
                Production-Ready Mockups
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Near-final visual design incorporating branding, detailed components, and advanced interactions. 
                Ready for developer handoff with complete design specifications.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {['Full branding', 'Color & typography', 'Micro-interactions', 'Responsive specs'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                    <span style={{ color: '#a259ff' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <WireframeHighFidelity />
          </div>
        </div>
      </section>

      {/* Annotated Wireframe */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(162, 89, 255, 0.1)',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#a259ff',
              marginBottom: '1rem'
            }}>ENGINEERING HANDOFF</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Annotated Specifications
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Detailed annotations for engineering teams with interaction states, validation rules, and accessibility requirements
            </p>
          </div>
          <WireframeAnnotated />
        </div>
      </section>

      {/* Miro User Flows */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(255, 208, 47, 0.2)',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#ffd02f',
              marginBottom: '1rem'
            }}>MIRO USER FLOWS</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              User Flow Diagrams
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Visual process flows showing user journeys, decision points, and system interactions
            </p>
          </div>
          <MiroUserFlow title="Patient Admission Flow" />
        </div>
      </section>

      {/* Journey Map */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(255, 208, 47, 0.2)',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#ffd02f',
              marginBottom: '1rem'
            }}>MIRO JOURNEY MAPPING</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Patient Journey Map
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              End-to-end experience mapping with touchpoints, emotions, and opportunities
            </p>
          </div>
          <MiroJourneyMap />
        </div>
      </section>

      {/* Affinity Diagram */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(255, 208, 47, 0.2)',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#ffd02f',
              marginBottom: '1rem'
            }}>MIRO RESEARCH</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Research Affinity Diagram
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Synthesizing user interview insights into actionable design opportunities
            </p>
          </div>
          <MiroAffinityDiagram />
        </div>
      </section>

      {/* Deliverables */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>
            Key Deliverables
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { title: 'Wireframes', count: '500+', desc: 'Across all fidelity levels' },
              { title: 'User Flows', count: '50+', desc: 'Complete journey diagrams' },
              { title: 'Prototypes', count: '30+', desc: 'Interactive Figma demos' },
              { title: 'Design Systems', count: '10+', desc: 'Component libraries' },
            ].map((item) => (
              <div key={item.title} style={{ 
                background: 'var(--bg-card)',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid var(--border-subtle)',
                textAlign: 'center'
              }}>
                <span style={{ 
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2.5rem',
                  color: '#a259ff',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>{item.count}</span>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>See Wireframing in My Projects</h2>
        <p>Explore complete case studies with full wireframe documentation</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/airtable" className="btn-secondary">See Airtable Work</Link>
        </div>
      </section>
    </>
  );
}

export default Wireframes;
