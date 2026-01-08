import { Link } from 'react-router-dom';

function Contact() {
  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'ashwithareddyk27@gmail.com',
      href: 'mailto:ashwithareddyk27@gmail.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+1 (678) 603-8174',
      href: 'tel:+16786038174'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'linkedin.com/in/reddyashwitha',
      href: 'https://linkedin.com/in/reddyashwitha',
      external: true
    }
  ];

  const quickLinks = [
    { icon: '📁', title: 'View My Projects', desc: '5 industry case studies', link: '/projects' },
    { icon: '📊', title: 'Airtable Expertise', desc: 'Roadmap visualization skills', link: '/airtable' },
    { icon: '📐', title: 'Wireframing Work', desc: '400+ wireframes created', link: '/wireframes' },
    { icon: '👤', title: 'About Me', desc: '5 years of experience', link: '/about' }
  ];

  const highlights = [
    { icon: '📊', title: 'Airtable Expert', desc: 'Product roadmaps, linked records, timeline views, kanban boards' },
    { icon: '📐', title: 'Strong Wireframing', desc: '400+ wireframes, low to high fidelity, engineering handoff' },
    { icon: '🏥', title: 'Healthcare Domain', desc: 'Clinical workflows, hospital operations, compliance' },
    { icon: '🤝', title: 'Cross-Functional', desc: 'Product, engineering, and stakeholder collaboration' }
  ];

  return (
    <>
      <header className="page-hero" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99, 102, 241, 0.15), transparent), var(--bg-primary)' }}>
        <div className="page-hero-content">
          <span className="page-number">06</span>
          <h1>Let's Connect</h1>
          <p className="page-subtitle">
            I'm always interested in discussing new opportunities, especially roles 
            involving Airtable visualization, wireframing, and product design for enterprise applications.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="contact-grid">
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem' }}>
              Get in Touch
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '2rem', lineHeight: 1.7 }}>
              Whether you have a project in mind, want to discuss my experience, 
              or just want to say hello—I'd love to hear from you.
            </p>

            <div className="contact-methods">
              {contactMethods.map((method) => (
                <a 
                  key={method.label} 
                  href={method.href}
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  className="contact-card"
                >
                  <span className="contact-icon">{method.icon}</span>
                  <div>
                    <span className="contact-label">{method.label}</span>
                    <span className="contact-value">{method.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="availability-box">
              <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Current Availability
              </h3>
              <div className="availability-status">
                <span className="status-dot"></span>
                <span>Available for new opportunities</span>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                I'm currently open to full-time positions, contract work, and consulting 
                opportunities. Remote work preferred, but open to hybrid arrangements in the US.
              </p>
            </div>
          </div>

          <div>
            <div className="card" style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Quick Links
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {quickLinks.map((item) => (
                  <Link 
                    key={item.title} 
                    to={item.link}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      background: 'var(--bg-card)',
                      borderRadius: '10px',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                    <div>
                      <h4 style={{ fontSize: '0.875rem', marginBottom: '0.125rem' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                What I'm Looking For
              </h3>
              <ul style={{ listStyle: 'none' }}>
                <li style={{ position: 'relative', paddingLeft: '1.25rem', paddingBottom: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>→</span>
                  Roles focused on <strong>wireframing</strong> and <strong>requirement visualization</strong>
                </li>
                <li style={{ position: 'relative', paddingLeft: '1.25rem', paddingBottom: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>→</span>
                  Teams using <strong>Airtable</strong> for product roadmaps
                </li>
                <li style={{ position: 'relative', paddingLeft: '1.25rem', paddingBottom: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>→</span>
                  Enterprise or healthcare product design
                </li>
                <li style={{ position: 'relative', paddingLeft: '1.25rem', paddingBottom: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>→</span>
                  Collaborative environments with product & engineering
                </li>
                <li style={{ position: 'relative', paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--accent-primary)' }}>→</span>
                  Remote-friendly positions
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What I Bring */}
      <section className="section dark-section">
        <h2 className="section-title">What I Bring</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {highlights.map((item) => (
            <div key={item.title} className="card" style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{item.icon}</span>
              <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}>
        <h2>Ready to Start a Conversation?</h2>
        <p>Send me an email and I'll get back to you within 24 hours</p>
        <a href="mailto:ashwithareddyk27@gmail.com" className="btn-primary" style={{ fontSize: '1.125rem', padding: '1.25rem 2.5rem' }}>
          Email Me →
        </a>
      </section>
    </>
  );
}

export default Contact;

