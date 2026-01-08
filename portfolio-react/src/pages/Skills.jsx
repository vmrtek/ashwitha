import { Link } from 'react-router-dom';

function Skills() {
  const tools = [
    {
      name: 'Airtable',
      level: 'Expert',
      icon: '📊',
      description: 'Product roadmaps, feature dependencies, workflow visualization, linked records, filtered views, timeline & kanban boards',
      link: '/airtable',
      color: '#18bfff'
    },
    {
      name: 'Figma',
      level: 'Advanced',
      icon: '🎨',
      description: 'UI design, prototyping, design systems, component libraries, wireframing at all fidelity levels',
      link: '/wireframes',
      color: '#a259ff'
    },
    {
      name: 'Miro',
      level: 'Advanced',
      icon: '🗺️',
      description: 'User flow mapping, brainstorming, collaborative workshops, journey mapping, affinity diagrams',
      color: '#ffd02f'
    }
  ];

  const skillCategories = [
    {
      title: 'Wireframing',
      skills: ['Low-Fidelity Wireframing', 'Mid-Fidelity Wireframing', 'High-Fidelity Mockups', 'Screen Layout Design', 'Responsive Design', 'Mobile-First Design']
    },
    {
      title: 'Visualization',
      skills: ['Product Roadmaps', 'Feature Dependencies', 'User Flow Design', 'Information Architecture', 'Data Visualization', 'Journey Mapping']
    },
    {
      title: 'Documentation',
      skills: ['Design Annotations', 'Functional Specs', 'Edge Case Documentation', 'Developer Handoff', 'Component Documentation', 'Interaction Specs']
    },
    {
      title: 'Collaboration',
      skills: ['Product Manager Collaboration', 'Engineering Collaboration', 'Design Walkthroughs', 'Sprint Reviews', 'Requirement Reviews', 'Stakeholder Presentations']
    }
  ];

  const domains = [
    { icon: '🏥', name: 'Healthcare', desc: 'Clinical workflows, hospital operations' },
    { icon: '🛒', name: 'Retail', desc: 'Inventory management, POS systems' },
    { icon: '🏭', name: 'Manufacturing', desc: 'Production monitoring, IoT dashboards' },
    { icon: '🏦', name: 'Banking', desc: 'Loan origination, compliance tracking' },
  ];

  return (
    <>
      <header className="page-hero" style={{ background: 'var(--bg-secondary)' }}>
        <div className="page-hero-content">
          <span className="page-number">02</span>
          <h1>Skills & Tools</h1>
          <p className="page-subtitle">
            The complete toolkit I use to translate product requirements into actionable design artifacts
          </p>
        </div>
      </header>

      {/* Primary Tools */}
      <section className="section">
        <h2 className="section-title">Primary Tools</h2>
        <p className="section-desc">The tools I use daily to create product roadmaps, wireframes, and design artifacts</p>
        
        <div className="cards-grid">
          {tools.map((tool) => (
            <div 
              key={tool.name} 
              className="card" 
              style={{ borderColor: `${tool.color}30` }}
            >
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '1rem' }}>{tool.icon}</span>
              <span style={{ 
                display: 'inline-block',
                padding: '0.25rem 0.75rem',
                background: `${tool.color}15`,
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: tool.color,
                marginBottom: '0.75rem'
              }}>{tool.level}</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{tool.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                {tool.description}
              </p>
              {tool.link && (
                <Link to={tool.link} style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', fontWeight: 500 }}>
                  Learn More →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Design Skills */}
      <section className="section dark-section">
        <h2 className="section-title">Design Skills</h2>
        <p className="section-desc">Core competencies developed over 5 years of enterprise UX design</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
          {skillCategories.map((category) => (
            <div key={category.title} className="card">
              <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>{category.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {category.skills.map((skill, i) => (
                  <span 
                    key={skill} 
                    style={{
                      padding: '0.5rem 1rem',
                      background: i < 2 ? 'rgba(99, 102, 241, 0.1)' : 'var(--bg-secondary)',
                      border: `1px solid ${i < 2 ? 'rgba(99, 102, 241, 0.2)' : 'var(--border-subtle)'}`,
                      borderRadius: '100px',
                      fontSize: '0.8125rem',
                      color: i < 2 ? 'var(--accent-primary)' : 'var(--text-secondary)'
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

      {/* Domain Expertise */}
      <section className="section">
        <h2 className="section-title">Domain Expertise</h2>
        <p className="section-desc">Industries where I've applied my design skills</p>
        
        <div className="card" style={{ borderLeft: '4px solid var(--accent-danger)', padding: '3rem', marginBottom: '2rem' }}>
          <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>🏥</span>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Healthcare Systems</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
            Clinical workflows, hospital operations, patient management, administrative reporting, 
            internal healthcare applications. Deep understanding of healthcare-specific platform 
            limitations and usability requirements.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <span style={{ padding: '0.375rem 0.75rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '100px', fontSize: '0.75rem', color: 'var(--accent-danger)' }}>
              LifeBridge Health
            </span>
            <span style={{ padding: '0.375rem 0.75rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '100px', fontSize: '0.75rem', color: 'var(--accent-danger)' }}>
              Montefiore Health System
            </span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {domains.map((domain) => (
            <div key={domain.name} className="card">
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.75rem' }}>{domain.icon}</span>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{domain.name}</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{domain.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>See These Skills in Action</h2>
        <p>Explore my projects to see complete case studies</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/airtable" className="btn-secondary">Airtable Expertise</Link>
        </div>
      </section>
    </>
  );
}

export default Skills;

