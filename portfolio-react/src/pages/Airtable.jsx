import { Link } from 'react-router-dom';
import { 
  AirtableLogo, 
  TimelineIcon, 
  KanbanIcon, 
  LinkIcon, 
  FormulaIcon,
  HealthcareIcon,
  BankingIcon
} from '../components/Icons';

function Airtable() {
  const capabilities = [
    {
      title: 'Timeline Views',
      Icon: TimelineIcon,
      description: 'Quarterly and annual roadmaps with drag-and-drop scheduling. Color-coded by team, priority, and status for instant visual comprehension.',
      features: ['Gantt-style project timelines', 'Milestone tracking', 'Resource allocation views', 'Release planning calendars']
    },
    {
      title: 'Kanban Boards',
      Icon: KanbanIcon,
      description: 'Sprint-based workflow management with customizable columns. Each card displays key metrics and links to detailed specifications.',
      features: ['Status-based grouping', 'Quick status updates', 'WIP limits', 'Swimlane organization']
    },
    {
      title: 'Linked Records',
      Icon: LinkIcon,
      description: 'Complex relationships between features, teams, people, and dependencies. One change propagates across all connected views.',
      features: ['Feature → Team mapping', 'Dependency chains', 'Owner assignments', 'Cross-project linking']
    },
    {
      title: 'Formulas & Rollups',
      Icon: FormulaIcon,
      description: 'Automated calculations for progress tracking, priority scoring, and capacity planning without manual updates.',
      features: ['Progress percentages', 'Automatic status indicators', 'Team capacity rollups', 'Priority scoring']
    }
  ];

  const airtableSkills = {
    Views: ['Timeline View', 'Kanban View', 'Gallery View', 'Grid View', 'Calendar View'],
    Fields: ['Linked Records', 'Rollup Fields', 'Formula Fields', 'Lookup Fields', 'Attachments'],
    Features: ['Filtered Views', 'Grouped Views', 'Automations', 'Interface Designer', 'Forms']
  };

  return (
    <>
      <header className="tool-page-hero airtable">
        <div className="page-hero-content">
          <span className="tool-badge airtable">
            <AirtableLogo size={20} />
            <span>Expert Level</span>
          </span>
          <h1>Airtable</h1>
          <p className="tool-tagline">
            Building dynamic product roadmaps and visualization systems 
            that keep entire organizations aligned
          </p>
        </div>
      </header>

      {/* How I Use Airtable */}
      <section className="section">
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1.5rem' }}>
            How I Use Airtable
          </h2>
          <p style={{ fontSize: '1.375rem', color: 'var(--text-primary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Airtable is my primary tool for creating visual product roadmaps that 
            engineering teams can actually use. I go beyond basic spreadsheets to 
            build interconnected databases that show feature dependencies, team 
            assignments, timeline relationships, and progress tracking—all in real-time.
          </p>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Unlike static documents that become outdated immediately, my Airtable 
            systems are living roadmaps. When priorities shift, dependencies are 
            updated, or timelines change, everyone sees the current state instantly. 
            Different stakeholders get tailored views from the same source of truth.
          </p>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="section dark-section">
        <h2 className="section-title">Core Capabilities</h2>
        <p className="section-desc">
          The Airtable features I use to create powerful product visualization systems
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {capabilities.map((cap, index) => (
            <div 
              key={cap.title} 
              className="card" 
              style={{ 
                display: 'grid', 
                gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
                direction: index % 2 === 1 ? 'rtl' : 'ltr'
              }}
            >
              <div style={{ 
                height: '250px', 
                background: 'var(--bg-secondary)', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                direction: 'ltr'
              }}>
                <cap.Icon size={80} style={{ color: '#18bfff', opacity: 0.8 }} />
              </div>
              <div style={{ direction: 'ltr' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{cap.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
                  {cap.description}
                </p>
                <ul style={{ listStyle: 'none' }}>
                  {cap.features.map((feature) => (
                    <li 
                      key={feature} 
                      style={{ 
                        position: 'relative', 
                        paddingLeft: '1.25rem', 
                        paddingBottom: '0.5rem',
                        color: 'var(--text-muted)',
                        fontSize: '0.9375rem'
                      }}
                    >
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent-success)' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real Examples */}
      <section className="section" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)', maxWidth: 'none', paddingLeft: '2rem', paddingRight: '2rem' }}>
        <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto' }}>
          <h2 className="section-title">Real Examples from My Work</h2>
          <p className="section-desc">Actual Airtable implementations from my projects</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div style={{ height: '250px', background: 'var(--bg-card)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <HealthcareIcon size={64} style={{ color: 'var(--accent-danger)' }} />
                <AirtableLogo size={64} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Healthcare Product Roadmap</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  150+ features organized across 8 clinical modules with linked records 
                  connecting requirements, user stories, and acceptance criteria. 
                  Timeline view shows 6-quarter development plan.
                </p>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>150+</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Features</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>8</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Modules</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>6</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Quarters</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Banking Compliance Tracker</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  Regulatory requirements (SOX, FDIC, BSA) linked directly to product 
                  features. Filtered views for Business, IT, Compliance, and Executive stakeholders.
                </p>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>35</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Linked Records</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>4</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Stakeholder Views</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <span style={{ display: 'block', fontSize: '1.75rem', fontWeight: 700, color: 'var(--accent-primary)' }}>100%</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Audit Pass</span>
                  </div>
                </div>
              </div>
              <div style={{ height: '250px', background: 'var(--bg-card)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <BankingIcon size={64} style={{ color: 'var(--accent-warm)' }} />
                <AirtableLogo size={64} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="section dark-section">
        <h2 className="section-title">Airtable Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {Object.entries(airtableSkills).map(([category, skills]) => (
            <div key={category} className="card">
              <h4 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#18bfff', marginBottom: '1rem' }}>
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
        <h2>See More of My Work</h2>
        <p>Explore my projects to see how I apply Airtable in real-world scenarios</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/wireframes" className="btn-secondary">See Wireframes</Link>
        </div>
      </section>
    </>
  );
}

export default Airtable;
