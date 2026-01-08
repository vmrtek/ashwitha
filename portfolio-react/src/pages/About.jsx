import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <header className="page-hero">
        <div className="page-hero-content">
          <span className="page-number">01</span>
          <h1>About Me</h1>
          <p className="page-subtitle">
            5 years of experience translating complex product requirements into 
            clear, visual design artifacts
          </p>
        </div>
      </header>

      <section className="section">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
          <div>
            <p style={{ fontSize: '1.375rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              I'm a UX Designer specializing in translating complex product requirements 
              into clear, visual design artifacts that engineering teams can act on immediately.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              With hands-on experience at <strong>LifeBridge Health</strong> and{' '}
              <strong>Montefiore Health System</strong>, I've developed expertise in 
              healthcare systems, clinical workflows, and enterprise applications. I work 
              closely with product managers to review feature requests and roadmap initiatives, 
              creating low- to mid-fidelity wireframes that help teams visualize how internal 
              applications should function.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
              My strength lies in using <strong>Airtable as a visualization tool</strong> to 
              represent product roadmaps, feature dependencies, and workflow relationships. 
              I configure Airtable views using linked records, grouping, and filters to clearly 
              show how features relate across systems, releases, and timelines.
            </p>

            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginTop: '4rem', marginBottom: '1.5rem' }}>
              My Design Philosophy
            </h2>
            <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              <div className="card">
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>🎯</span>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Clarity Over Complexity</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Every wireframe I create answers one question: "Can an engineer build 
                  this without asking questions?"
                </p>
              </div>
              <div className="card">
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>🔗</span>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Connected Systems</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Features don't exist in isolation. I use linked records and dependency 
                  mapping to show how changes ripple through the product.
                </p>
              </div>
              <div className="card">
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>👥</span>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem' }}>Stakeholder-Specific Views</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Engineers need detail. Executives need summaries. I create tailored 
                  views from the same source of truth.
                </p>
              </div>
            </div>
          </div>

          <div style={{ position: 'sticky', top: '6rem', alignSelf: 'start' }}>
            <div className="card" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'var(--gradient-primary)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: 600,
                color: 'white'
              }}>AR</div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>Ashwitha Reddy</h3>
              <p style={{ color: 'var(--accent-primary)', fontSize: '0.875rem', marginBottom: '1rem' }}>UX Designer</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>📍 United States</p>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Experience
              </h4>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                  <span style={{ width: '8px', height: '8px', background: 'var(--accent-success)', borderRadius: '50%' }}></span>
                  <strong style={{ fontSize: '0.875rem' }}>LifeBridge Health</strong>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', paddingLeft: '1.25rem' }}>UX Designer · Jun 2025 – Present</p>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                  <span style={{ width: '8px', height: '8px', background: 'var(--text-muted)', borderRadius: '50%' }}></span>
                  <strong style={{ fontSize: '0.875rem' }}>Montefiore Health System</strong>
                </div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', paddingLeft: '1.25rem' }}>UX Designer · Sep 2019 – Dec 2023</p>
              </div>
            </div>

            <div className="card" style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Quick Facts
              </h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Years Experience</span>
                <span style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>5+</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Wireframes Created</span>
                <span style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>400+</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Industries</span>
                <span style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>5</span>
              </div>
            </div>

            <Link to="/contact" className="btn-primary" style={{ display: 'block', textAlign: 'center' }}>
              Get in Touch →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

