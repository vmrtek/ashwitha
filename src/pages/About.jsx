import { Link } from 'react-router-dom';
import { AirtableLogo, FigmaLogo, MiroLogo, WireframeLogo } from '../components/Icons';

function About() {
  const skills = [
    { name: 'Airtable', level: 95, icon: <AirtableLogo size={20} /> },
    { name: 'Figma', level: 90, icon: <FigmaLogo size={20} /> },
    { name: 'Miro', level: 88, icon: <MiroLogo size={20} /> },
    { name: 'Wireframing', level: 95, icon: <WireframeLogo size={20} /> },
  ];

  const timeline = [
    {
      year: '2024 - Present',
      role: 'Product Designer',
      company: 'LifeBridge Health',
      location: 'Baltimore, MD',
      description: 'Leading product design for clinical workflow applications, creating Airtable-based roadmaps and comprehensive wireframes for healthcare systems.',
      highlights: ['150+ wireframes delivered', 'Airtable roadmap visualization', 'Cross-functional collaboration']
    },
    {
      year: '2019 - 2023',
      role: 'Product Designer',
      company: 'Montefiore Health System',
      location: 'New York, NY',
      description: 'Designed enterprise healthcare applications focusing on patient management, EHR integrations, and clinical decision support systems.',
      highlights: ['250+ wireframes created', 'User research & testing', 'Design system development']
    },
  ];

  const achievements = [
    { number: '5+', label: 'Years Experience', icon: '📅' },
    { number: '400+', label: 'Wireframes Delivered', icon: '🎨' },
    { number: '50+', label: 'Product Features Shipped', icon: '🚀' },
    { number: '5', label: 'Industries Served', icon: '🏢' },
  ];

  const certifications = [
    { name: 'Google UX Design Certificate', year: '2023', issuer: 'Google' },
    { name: 'Airtable Product Pro', year: '2024', issuer: 'Airtable' },
    { name: 'Figma Professional', year: '2022', issuer: 'Figma' },
  ];

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

      {/* Hero Profile Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '4rem', alignItems: 'start' }}>
            {/* Profile Card */}
            <div style={{ position: 'sticky', top: '6rem' }}>
              <div style={{ 
                background: 'linear-gradient(145deg, #1a1a2e, #16213e)',
                borderRadius: '24px',
                padding: '2.5rem',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
              }}>
                <div style={{ 
                  width: '120px', 
                  height: '120px', 
                  background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 1.5rem',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: 'white',
                  boxShadow: '0 10px 40px rgba(99, 102, 241, 0.4)'
                }}>AR</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-serif)' }}>Ashwitha Reddy</h3>
                <p style={{ 
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: '1rem',
                  fontWeight: 600,
                  marginBottom: '1rem'
                }}>Product Designer</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>📍 United States</p>
                
                {/* Social Links */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
                    width: '40px', height: '40px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1', transition: 'all 0.2s'
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="mailto:ashwitha@email.com" style={{
                    width: '40px', height: '40px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '10px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6366f1', transition: 'all 0.2s'
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </a>
                </div>

                <Link to="/contact" style={{
                  display: 'block',
                  padding: '0.875rem 1.5rem',
                  background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                  borderRadius: '12px',
                  color: 'white',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}>
                  Get in Touch →
                </Link>
              </div>

              {/* Skills */}
              <div style={{ 
                background: 'var(--bg-card)',
                borderRadius: '16px',
                padding: '1.5rem',
                marginTop: '1.5rem',
                border: '1px solid var(--border-subtle)'
              }}>
                <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                  Core Skills
                </h4>
                {skills.map((skill) => (
                  <div key={skill.name} style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                        {skill.icon} {skill.name}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)' }}>{skill.level}%</span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ 
                        width: `${skill.level}%`, 
                        height: '100%', 
                        background: 'linear-gradient(90deg, #6366f1, #a855f7)',
                        borderRadius: '3px',
                        transition: 'width 1s ease-out'
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div>
              {/* Introduction */}
              <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '2.5rem', 
                  marginBottom: '1.5rem',
                  background: 'linear-gradient(135deg, #fff, #94a3b8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Bridging Product Vision & Engineering Reality
                </h2>
                <p style={{ fontSize: '1.25rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  I'm a Product Designer with <strong style={{ color: 'white' }}>5+ years of experience</strong> specializing 
                  in translating complex product requirements into clear, visual design artifacts that engineering 
                  teams can act on immediately.
                </p>
                <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                  With hands-on experience at <strong style={{ color: '#6366f1' }}>LifeBridge Health</strong> and{' '}
                  <strong style={{ color: '#6366f1' }}>Montefiore Health System</strong>, I've developed deep expertise in 
                  healthcare systems, clinical workflows, and enterprise applications. My strength lies in using 
                  <strong style={{ color: '#FCB400' }}> Airtable as a visualization tool</strong> to represent product roadmaps, 
                  feature dependencies, and workflow relationships.
                </p>
              </div>

              {/* Achievement Stats */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(4, 1fr)', 
                gap: '1.5rem',
                marginBottom: '4rem'
              }}>
                {achievements.map((item) => (
                  <div key={item.label} style={{
                    background: 'linear-gradient(145deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.05))',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    textAlign: 'center',
                    border: '1px solid rgba(99, 102, 241, 0.2)'
                  }}>
                    <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>{item.icon}</span>
                    <span style={{ 
                      fontSize: '2rem', 
                      fontWeight: 700, 
                      fontFamily: 'var(--font-serif)',
                      background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'block',
                      marginBottom: '0.25rem'
                    }}>{item.number}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Design Philosophy */}
              <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '1.5rem' }}>
                  My Design Philosophy
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                  {[
                    { icon: '🎯', title: 'Clarity Over Complexity', desc: 'Every wireframe I create answers one question: "Can an engineer build this without asking questions?"' },
                    { icon: '🔗', title: 'Connected Systems', desc: 'Features don\'t exist in isolation. I use linked records and dependency mapping to show how changes ripple through the product.' },
                    { icon: '👥', title: 'Stakeholder-Specific Views', desc: 'Engineers need detail. Executives need summaries. I create tailored views from the same source of truth.' },
                  ].map((item) => (
                    <div key={item.title} style={{
                      background: 'var(--bg-card)',
                      borderRadius: '16px',
                      padding: '1.5rem',
                      border: '1px solid var(--border-subtle)',
                      transition: 'transform 0.2s, border-color 0.2s'
                    }}>
                      <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '1rem' }}>{item.icon}</span>
                      <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', fontWeight: 600 }}>{item.title}</h3>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Timeline */}
              <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '1.5rem' }}>
                  Professional Journey
                </h2>
                <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                  {/* Timeline Line */}
                  <div style={{
                    position: 'absolute',
                    left: '6px',
                    top: '8px',
                    bottom: '8px',
                    width: '2px',
                    background: 'linear-gradient(180deg, #6366f1, #a855f7)'
                  }} />
                  
                  {timeline.map((item, index) => (
                    <div key={index} style={{ position: 'relative', marginBottom: '2rem' }}>
                      {/* Timeline Dot */}
                      <div style={{
                        position: 'absolute',
                        left: '-2rem',
                        top: '8px',
                        width: '14px',
                        height: '14px',
                        background: index === 0 ? '#6366f1' : 'var(--bg-card)',
                        border: `3px solid ${index === 0 ? '#6366f1' : '#a855f7'}`,
                        borderRadius: '50%',
                        zIndex: 1
                      }} />
                      
                      <div style={{
                        background: 'var(--bg-card)',
                        borderRadius: '16px',
                        padding: '1.5rem',
                        border: '1px solid var(--border-subtle)'
                      }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                          <div>
                            <h3 style={{ fontSize: '1.125rem', marginBottom: '0.25rem' }}>{item.role}</h3>
                            <p style={{ color: '#6366f1', fontWeight: 500 }}>{item.company}</p>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <span style={{ 
                              display: 'inline-block',
                              padding: '0.25rem 0.75rem',
                              background: index === 0 ? 'rgba(16, 185, 129, 0.1)' : 'rgba(99, 102, 241, 0.1)',
                              color: index === 0 ? '#10b981' : '#6366f1',
                              borderRadius: '100px',
                              fontSize: '0.75rem',
                              fontWeight: 600
                            }}>{index === 0 ? 'Current' : item.year}</span>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{item.location}</p>
                          </div>
                        </div>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1rem', lineHeight: 1.6 }}>
                          {item.description}
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                          {item.highlights.map((h) => (
                            <span key={h} style={{
                              padding: '0.25rem 0.75rem',
                              background: 'rgba(99, 102, 241, 0.1)',
                              borderRadius: '100px',
                              fontSize: '0.6875rem',
                              color: 'var(--text-secondary)'
                            }}>{h}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div style={{ marginBottom: '4rem' }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '1.5rem' }}>
                  Certifications
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                  {certifications.map((cert) => (
                    <div key={cert.name} style={{
                      background: 'var(--bg-card)',
                      borderRadius: '12px',
                      padding: '1.25rem',
                      border: '1px solid var(--border-subtle)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.1))',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.5rem'
                      }}>🏆</div>
                      <div>
                        <h4 style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>{cert.name}</h4>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{cert.issuer} · {cert.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* What I Bring */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.05))',
                borderRadius: '20px',
                padding: '2rem',
                border: '1px solid rgba(99, 102, 241, 0.2)'
              }}>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                  What I Bring to Your Team
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  {[
                    '✓ Deep healthcare domain expertise',
                    '✓ Airtable visualization mastery',
                    '✓ Rapid wireframing capabilities',
                    '✓ Cross-functional collaboration',
                    '✓ User-centered design approach',
                    '✓ Engineering-ready deliverables',
                    '✓ Stakeholder communication skills',
                    '✓ Design system thinking'
                  ].map((item) => (
                    <div key={item} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '0.75rem',
                      padding: '0.75rem',
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: '8px'
                    }}>
                      <span style={{ fontSize: '0.9375rem' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Let's Work Together</h2>
        <p>Ready to bring clarity to your product development process?</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn-primary">View My Work</Link>
          <Link to="/contact" className="btn-secondary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}

export default About;
