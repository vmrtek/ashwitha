import { Link } from 'react-router-dom';
import { 
  AirtableLogo, 
  FigmaLogo, 
  MiroLogo,
  HealthcareIcon,
  RetailIcon,
  ManufacturingIcon,
  EcommerceIcon,
  BankingIcon,
  WireframeLogo
} from '../components/Icons';

function Projects() {
  const projects = [
    {
      id: 'healthcare',
      industry: 'Healthcare',
      Icon: HealthcareIcon,
      color: '#ef4444',
      gradient: 'linear-gradient(135deg, #0f172a, #1e1b4b, #312e81)',
      title: 'CareFlow: Clinical Workflow Management',
      subtitle: 'End-to-end patient care coordination platform for a 500+ bed hospital network',
      duration: '16 Weeks',
      role: 'Lead Product Designer',
      client: 'LifeBridge Health',
      highlights: [
        '40% reduction in handoff time',
        '94% user adoption rate',
        '2.5 hours saved per nurse/day',
      ],
      tools: ['Airtable', 'Figma', 'Miro'],
    },
    {
      id: 'retail',
      industry: 'Retail',
      Icon: RetailIcon,
      color: '#0891b2',
      gradient: 'linear-gradient(135deg, #0c4a6e, #0891b2, #06b6d4)',
      title: 'OmniStock: Enterprise Inventory Management',
      subtitle: 'Unified inventory and supply chain management for multi-location retail',
      duration: '18 Weeks',
      role: 'Product Designer',
      client: 'RetailMax Corp',
      highlights: [
        '30% reduction in stockouts',
        '25% less overstocking',
        '40% faster data entry',
      ],
      tools: ['Airtable', 'Figma', 'Miro'],
    },
    {
      id: 'manufacturing',
      industry: 'Manufacturing',
      Icon: ManufacturingIcon,
      color: '#f97316',
      gradient: 'linear-gradient(135deg, #7c2d12, #c2410c, #ea580c)',
      title: 'ProdSense: Production Line Monitoring',
      subtitle: 'Real-time production monitoring and predictive maintenance platform',
      duration: '20 Weeks',
      role: 'Product Designer',
      client: 'Precision Manufacturing Inc',
      highlights: [
        '25% less unplanned downtime',
        '12% OEE improvement',
        '50% faster issue detection',
      ],
      tools: ['Airtable', 'Figma', 'Miro'],
    },
    {
      id: 'ecommerce',
      industry: 'E-commerce',
      Icon: EcommerceIcon,
      color: '#a855f7',
      gradient: 'linear-gradient(135deg, #4c1d95, #7c3aed, #a855f7)',
      title: 'CatalogMaster: Product Information Management',
      subtitle: 'Centralized product catalog management with SEO optimization',
      duration: '14 Weeks',
      role: 'Product Designer',
      client: 'ShopWave Inc',
      highlights: [
        '35% faster time-to-market',
        '90% data accuracy improvement',
        '25% SEO traffic increase',
      ],
      tools: ['Airtable', 'Figma', 'Miro'],
    },
    {
      id: 'banking',
      industry: 'Banking',
      Icon: BankingIcon,
      color: '#10b981',
      gradient: 'linear-gradient(135deg, #064e3b, #047857, #10b981)',
      title: 'FinConnect: Customer Onboarding & Loan Portal',
      subtitle: 'Secure digital banking platform for customer onboarding and loan applications',
      duration: '22 Weeks',
      role: 'Lead Product Designer',
      client: 'Metro Bank',
      highlights: [
        '45% faster onboarding',
        '30% higher approval rate',
        '20% more completions',
      ],
      tools: ['Airtable', 'Figma', 'Miro'],
    },
  ];

  return (
    <>
      <header className="page-hero">
        <div className="page-hero-content">
          <span className="page-number">03</span>
          <h1>My Projects</h1>
          <p className="page-subtitle">
            Comprehensive case studies across 5 industries, showcasing real Airtable roadmaps, 
            Figma wireframes, and Miro user research
          </p>
        </div>
      </header>

      {/* Project Grid */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          
          {/* Quick Navigation */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '1rem', 
            marginBottom: '4rem',
            flexWrap: 'wrap'
          }}>
            {projects.map((project) => (
              <Link 
                key={project.id}
                to={`/projects/${project.id}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.25rem',
                  background: `${project.color}15`,
                  border: `1px solid ${project.color}30`,
                  borderRadius: '100px',
                  color: project.color,
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'all 0.2s'
                }}
              >
                <project.Icon size={18} />
                {project.industry}
              </Link>
            ))}
          </div>

          {/* Project Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {projects.map((project, index) => (
              <Link 
                key={project.id}
                to={`/projects/${project.id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{
                  background: project.gradient,
                  borderRadius: '24px',
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: index % 2 === 0 ? '1fr 1.2fr' : '1.2fr 1fr',
                  minHeight: '400px',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                  border: '1px solid rgba(255,255,255,0.1)'
                }}>
                  {/* Content Side */}
                  <div style={{ 
                    padding: '3rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    order: index % 2 === 0 ? 1 : 2
                  }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '0.5rem 1rem',
                      background: 'rgba(255,255,255,0.15)',
                      borderRadius: '100px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'white',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '1.5rem',
                      width: 'fit-content'
                    }}>
                      {project.industry}
                    </span>
                    
                    <h2 style={{ 
                      fontFamily: 'var(--font-serif)', 
                      fontSize: '2rem', 
                      color: 'white',
                      marginBottom: '1rem',
                      lineHeight: 1.2
                    }}>
                      {project.title}
                    </h2>
                    
                    <p style={{ 
                      color: 'rgba(255,255,255,0.8)', 
                      fontSize: '1.125rem',
                      marginBottom: '1.5rem',
                      lineHeight: 1.6
                    }}>
                      {project.subtitle}
                    </p>
                    
                    <div style={{ 
                      display: 'flex', 
                      gap: '1rem', 
                      marginBottom: '1.5rem',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{ 
                        padding: '0.375rem 0.75rem', 
                        background: 'rgba(255,255,255,0.1)', 
                        borderRadius: '6px',
                        fontSize: '0.8125rem',
                        color: 'rgba(255,255,255,0.9)'
                      }}>
                        {project.duration}
                      </span>
                      <span style={{ 
                        padding: '0.375rem 0.75rem', 
                        background: 'rgba(255,255,255,0.1)', 
                        borderRadius: '6px',
                        fontSize: '0.8125rem',
                        color: 'rgba(255,255,255,0.9)'
                      }}>
                        {project.role}
                      </span>
                      <span style={{ 
                        padding: '0.375rem 0.75rem', 
                        background: 'rgba(255,255,255,0.1)', 
                        borderRadius: '6px',
                        fontSize: '0.8125rem',
                        color: 'rgba(255,255,255,0.9)'
                      }}>
                        {project.client}
                      </span>
                    </div>
                    
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.875rem 1.5rem',
                      background: 'rgba(255,255,255,0.2)',
                      borderRadius: '12px',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      width: 'fit-content',
                      backdropFilter: 'blur(10px)'
                    }}>
                      View Case Study →
                    </div>
                  </div>
                  
                  {/* Visual Side */}
                  <div style={{ 
                    background: 'rgba(0,0,0,0.2)',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    order: index % 2 === 0 ? 2 : 1
                  }}>
                    {/* Results Preview */}
                    <div style={{ marginBottom: '2rem' }}>
                      <h4 style={{ 
                        color: 'rgba(255,255,255,0.6)', 
                        fontSize: '0.75rem', 
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1rem'
                      }}>
                        Key Results
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {project.highlights.map((highlight, i) => (
                          <div key={i} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            background: 'rgba(255,255,255,0.1)',
                            borderRadius: '8px'
                          }}>
                            <span style={{ color: '#10b981', fontSize: '1.25rem' }}>✓</span>
                            <span style={{ color: 'white', fontSize: '0.9375rem' }}>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tools Used */}
                    <div>
                      <h4 style={{ 
                        color: 'rgba(255,255,255,0.6)', 
                        fontSize: '0.75rem', 
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '1rem'
                      }}>
                        Tools Used
                      </h4>
                      <div style={{ display: 'flex', gap: '1rem' }}>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.5rem',
                          padding: '0.5rem 1rem',
                          background: 'rgba(255,255,255,0.1)',
                          borderRadius: '8px'
                        }}>
                          <AirtableLogo size={20} />
                          <span style={{ color: 'white', fontSize: '0.8125rem' }}>Airtable</span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.5rem',
                          padding: '0.5rem 1rem',
                          background: 'rgba(255,255,255,0.1)',
                          borderRadius: '8px'
                        }}>
                          <FigmaLogo size={20} />
                          <span style={{ color: 'white', fontSize: '0.8125rem' }}>Figma</span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '0.5rem',
                          padding: '0.5rem 1rem',
                          background: 'rgba(255,255,255,0.1)',
                          borderRadius: '8px'
                        }}>
                          <MiroLogo size={20} />
                          <span style={{ color: 'white', fontSize: '0.8125rem' }}>Miro</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Interested in Working Together?</h2>
        <p>I'm always open to discussing new projects and opportunities</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
          <Link to="/airtable" className="btn-secondary">See Airtable Expertise</Link>
        </div>
      </section>
    </>
  );
}

export default Projects;
