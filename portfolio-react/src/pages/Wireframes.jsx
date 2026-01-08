import { Link } from 'react-router-dom';
import { WireframeLogo, FigmaLogo, MiroLogo } from '../components/Icons';

function Wireframes() {
  const fidelityLevels = [
    {
      title: 'Low-Fidelity',
      time: '30 min - 2 hours',
      icon: '✏️',
      description: 'Quick concept exploration focusing on layout, information hierarchy, and user flow without visual design distractions.',
      features: ['Rapid ideation', 'Layout exploration', 'Stakeholder alignment', 'Early feedback loops']
    },
    {
      title: 'Mid-Fidelity',
      time: '2 - 4 hours',
      icon: '📝',
      description: 'Refined structure with component definitions, spacing systems, and interaction patterns for engineering review.',
      features: ['Component structure', 'Spacing & alignment', 'Interaction states', 'Content hierarchy']
    },
    {
      title: 'High-Fidelity',
      time: '4 - 8 hours',
      icon: '🎨',
      description: 'Complete visual designs with interactions, animations, and realistic content for usability testing and final handoff.',
      features: ['Visual design system', 'Interactive prototypes', 'Usability testing', 'Developer handoff']
    }
  ];

  const deliverables = [
    {
      Icon: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
      title: 'Screen Layouts',
      description: 'Complete screen definitions with all UI elements, content areas, and navigation patterns clearly specified.',
      items: ['Desktop layouts', 'Mobile layouts', 'Tablet adaptations', 'Responsive breakpoints']
    },
    {
      Icon: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
      title: 'Interaction States',
      description: 'All UI states documented: default, hover, active, disabled, loading, empty, error, and success states.',
      items: ['Button states', 'Form validations', 'Loading indicators', 'Error handling']
    },
    {
      Icon: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
      title: 'Functional Documentation',
      description: 'Detailed specifications for each screen with behavior notes, business rules, and edge case handling.',
      items: ['Behavior specifications', 'Business rules', 'Data requirements', 'API considerations']
    },
    {
      Icon: () => <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
      title: 'Engineering Handoff',
      description: 'Complete packages ready for development with all assets, specs, and documentation organized.',
      items: ['Organized file structure', 'Component specs', 'Design tokens', 'Implementation notes']
    }
  ];

  const stats = [
    { value: '400+', label: 'Wireframes Created' },
    { value: '25+', label: 'Projects Delivered' },
    { value: '50+', label: 'Engineering Handoffs' },
    { value: '5', label: 'Industries Covered' }
  ];

  const wireframeSkills = {
    'Fidelity Levels': ['Low-Fidelity Sketching', 'Mid-Fidelity Wireframes', 'High-Fidelity Mockups'],
    'Design': ['Screen Layout Design', 'Interaction Design', 'Responsive Design', 'Mobile-First'],
    'Documentation': ['State Documentation', 'Annotation Systems', 'Functional Specs', 'Developer Handoff']
  };

  return (
    <>
      <header className="tool-page-hero wireframe">
        <div className="page-hero-content">
          <span className="tool-badge wireframe">
            <WireframeLogo size={20} />
            <span>Expert Level</span>
          </span>
          <h1>Wireframes</h1>
          <p className="tool-tagline">
            The bridge between product requirements and engineering implementation
          </p>
        </div>
      </header>

      {/* My Approach */}
      <section className="section">
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1.5rem' }}>
            My Wireframing Approach
          </h2>
          <p style={{ fontSize: '1.375rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Wireframing isn't just about drawing boxes—it's about translating complex 
            product requirements into visual specifications that engineering teams can build from.
          </p>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            I focus on clarity, completeness, and actionability. Every wireframe I create 
            answers the question: "Can an engineer build this without asking questions?" 
            My deliverables include not just the screens, but also the states, edge cases, 
            and documentation needed for complete implementation.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px' }}>
              <FigmaLogo size={24} />
              <span>Figma</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.5rem', background: 'var(--bg-secondary)', borderRadius: '12px' }}>
              <MiroLogo size={24} />
              <span>Miro</span>
            </div>
          </div>
        </div>
      </section>

      {/* Fidelity Progression */}
      <section className="section dark-section">
        <h2 className="section-title">Fidelity Progression</h2>
        <p className="section-desc">From initial concept to production-ready specifications</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {fidelityLevels.map((level) => (
            <div key={level.title} className="card" style={{ overflow: 'hidden', padding: 0 }}>
              <div style={{ 
                height: '200px', 
                background: 'var(--bg-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem'
              }}>
                {level.icon}
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.125rem' }}>{level.title}</h3>
                  <span style={{ 
                    padding: '0.25rem 0.75rem',
                    background: 'rgba(99, 102, 241, 0.1)',
                    borderRadius: '100px',
                    fontSize: '0.75rem',
                    color: 'var(--accent-primary)'
                  }}>{level.time}</span>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginBottom: '1rem' }}>
                  {level.description}
                </p>
                <ul style={{ listStyle: 'none' }}>
                  {level.features.map((feature) => (
                    <li 
                      key={feature} 
                      style={{ 
                        fontSize: '0.8125rem', 
                        color: 'var(--text-muted)', 
                        padding: '0.25rem 0',
                        paddingLeft: '1rem',
                        position: 'relative'
                      }}
                    >
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent-success)', fontSize: '0.75rem' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What I Deliver */}
      <section className="section">
        <h2 className="section-title">What I Deliver</h2>
        <p className="section-desc">Complete design packages ready for engineering implementation</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {deliverables.map((item) => (
            <div key={item.title} className="card">
              <div style={{ 
                height: '100px', 
                background: 'var(--bg-card)', 
                borderRadius: '10px', 
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)'
              }}>
                <item.Icon />
              </div>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                {item.description}
              </p>
              <ul style={{ listStyle: 'none' }}>
                {item.items.map((listItem) => (
                  <li key={listItem} style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', padding: '0.25rem 0' }}>
                    • {listItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="section dark-section">
        <h2 className="section-title">By the Numbers</h2>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <span className="stat-num">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Summary */}
      <section className="section">
        <h2 className="section-title">Wireframing Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {Object.entries(wireframeSkills).map(([category, skills]) => (
            <div key={category} className="card">
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                {category}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {skills.map((skill) => (
                  <span 
                    key={skill} 
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '100px',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>See These Skills in Action</h2>
        <p>Explore my projects to see complete case studies with wireframes</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/airtable" className="btn-secondary">See Airtable Work</Link>
        </div>
      </section>
    </>
  );
}

export default Wireframes;
