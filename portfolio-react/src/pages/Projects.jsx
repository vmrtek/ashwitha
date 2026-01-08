import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    {
      id: 'healthcare',
      industry: 'Healthcare',
      icon: '🏥',
      title: 'CareFlow: Clinical Workflow Management System',
      subtitle: 'End-to-end patient care coordination platform for a 500+ bed hospital network',
      overview: 'Designed a comprehensive clinical workflow management system for a 500+ bed hospital network. The platform streamlines patient admissions, care coordination, discharge planning, and cross-departmental communication.',
      challenge: 'Hospital staff struggled with fragmented systems for patient tracking, leading to 45-minute average delays in care handoffs. Nurses spent 2+ hours daily on manual documentation.',
      contributions: [
        'Conducted user research with 25+ clinical staff using Miro for journey mapping',
        'Created 40+ low-fidelity wireframes in Figma exploring different workflow patterns',
        'Built comprehensive Airtable database for product backlog with 150+ features',
        'Configured Airtable Timeline views showing development roadmap across 6 quarters',
        'Created dependency tracking using linked records connecting features to requirements'
      ],
      meta: { duration: '16 Weeks', role: 'Lead UX Designer', scale: '500+ Beds' },
      results: [
        { value: '65%', label: 'Reduction in handoff delays' },
        { value: '2.5hrs', label: 'Daily time saved per nurse' },
        { value: '94%', label: 'User adoption rate' }
      ]
    },
    {
      id: 'retail',
      industry: 'Retail',
      icon: '🛒',
      title: 'RetailSync: Omnichannel Inventory Management',
      subtitle: 'Real-time inventory visibility across 200+ store locations and online channels',
      overview: 'Designed an enterprise inventory management system for a national retail chain with 200+ locations. The platform provides real-time stock visibility, automated reorder triggers, and cross-channel fulfillment optimization.',
      challenge: 'Retail operations faced 15% inventory discrepancy rates, $2M+ annual losses from stockouts, and no unified view of inventory across channels.',
      contributions: [
        'Led discovery workshops with 30+ store managers using Miro for collaborative mapping',
        'Created comprehensive user flow diagrams for 15 inventory management scenarios',
        'Developed 60+ wireframes in Figma from low to high fidelity',
        'Built Airtable product roadmap with 200+ features across 4 release phases',
        'Configured filtered views for different stakeholder groups'
      ],
      meta: { duration: '20 Weeks', role: 'UX Designer', scale: '200+ Stores' },
      results: [
        { value: '85%', label: 'Reduction in stockouts' },
        { value: '$1.8M', label: 'Annual savings' },
        { value: '3%', label: 'Inventory discrepancy' }
      ]
    },
    {
      id: 'manufacturing',
      industry: 'Manufacturing',
      icon: '🏭',
      title: 'FactoryOS: Production Line Monitoring Platform',
      subtitle: 'IoT-integrated manufacturing execution system for smart factory operations',
      overview: 'Designed a comprehensive manufacturing execution system (MES) for an automotive parts manufacturer with 5 production facilities. The platform provides real-time production monitoring and predictive maintenance alerts.',
      challenge: 'Production managers lacked real-time visibility into line performance, leading to 12% unplanned downtime. Quality issues weren\'t detected until end-of-line inspection.',
      contributions: [
        'Conducted contextual inquiry at 3 facilities, documenting workflows in Miro',
        'Created detailed user personas for 6 user types',
        'Developed 80+ wireframes in Figma for control room displays and mobile alerts',
        'Built Airtable product backlog with 180+ features linked to business requirements',
        'Configured Gallery views for feature showcases during stakeholder reviews'
      ],
      meta: { duration: '24 Weeks', role: 'UX Designer', scale: '5 Plants' },
      results: [
        { value: '40%', label: 'Less unplanned downtime' },
        { value: '60%', label: 'Faster issue detection' },
        { value: '3%', label: 'Scrap rate (from 8%)' }
      ]
    },
    {
      id: 'ecommerce',
      industry: 'E-commerce',
      icon: '🛍️',
      title: 'ShopHub: Seller Management Platform',
      subtitle: 'B2B marketplace platform for 10,000+ third-party sellers',
      overview: 'Designed the internal seller management platform for a major e-commerce marketplace. The system handles seller onboarding, product catalog management, order fulfillment tracking, and compliance monitoring.',
      challenge: 'Seller onboarding took 15+ days due to manual verification processes. Support teams handled 2,000+ tickets weekly for basic account issues. 25% seller churn rate annually.',
      contributions: [
        'Mapped complete seller journey in Miro from registration to scaling',
        'Identified 45 pain points through stakeholder interviews',
        'Created 75+ wireframes in Figma for seller portal and admin dashboard',
        'Built comprehensive Airtable product roadmap with cross-team dependencies',
        'Created Airtable automations for stakeholder notifications'
      ],
      meta: { duration: '18 Weeks', role: 'UX Designer', scale: '10,000+ Sellers' },
      results: [
        { value: '3 Days', label: 'Onboarding (from 15)' },
        { value: '60%', label: 'Fewer support tickets' },
        { value: '12%', label: 'Seller churn (from 25%)' }
      ]
    },
    {
      id: 'banking',
      industry: 'Banking',
      icon: '🏦',
      title: 'LoanStream: Commercial Lending Platform',
      subtitle: 'End-to-end loan origination and servicing system for commercial banking',
      overview: 'Designed a comprehensive commercial lending platform for a regional bank handling $2B+ in loan originations annually. The system manages the entire loan lifecycle from application intake to ongoing servicing.',
      challenge: 'Loan processing took 45+ days on average due to manual handoffs. Credit analysts spent 60% of time on data gathering. Compliance documentation was fragmented across 5+ systems.',
      contributions: [
        'Conducted process mapping workshops with credit and compliance teams using Miro',
        'Created detailed user flows for 8 loan product types',
        'Developed 100+ wireframes in Figma covering all loan lifecycle stages',
        'Built Airtable roadmap with regulatory requirements linked to features',
        'Created linked records connecting features to SOX, FDIC, BSA requirements'
      ],
      meta: { duration: '28 Weeks', role: 'Lead UX Designer', scale: '$2B+ Annual' },
      results: [
        { value: '18 Days', label: 'Processing (from 45)' },
        { value: '100%', label: 'Compliance audit pass' },
        { value: '35%', label: 'More loans processed' }
      ]
    }
  ];

  const industryColors = {
    Healthcare: 'var(--accent-danger)',
    Retail: 'var(--accent-success)',
    Manufacturing: 'var(--accent-cyan)',
    'E-commerce': 'var(--accent-secondary)',
    Banking: 'var(--accent-warm)'
  };

  return (
    <>
      <header className="page-hero">
        <div className="page-hero-content">
          <span className="page-number">03</span>
          <h1>Projects</h1>
          <p className="page-subtitle">
            Complex enterprise projects across multiple industries, showcasing expertise 
            in Airtable visualization, wireframing, user flow design, and cross-functional collaboration
          </p>
        </div>
      </header>

      {/* Project Navigation */}
      <div className="project-nav">
        {projects.map((project) => (
          <a 
            key={project.id} 
            href={`#${project.id}`} 
            className="project-nav-item"
          >
            <span>{project.icon}</span>
            <span>{project.industry}</span>
          </a>
        ))}
      </div>

      {/* Project Sections */}
      {projects.map((project, index) => (
        <section 
          key={project.id} 
          id={project.id} 
          className="project-section"
          style={{ background: index % 2 === 1 ? 'var(--bg-secondary)' : 'transparent' }}
        >
          <div className="project-header">
            <div className="project-icon">{project.icon}</div>
            <div>
              <span 
                className={`industry-badge ${project.industry.toLowerCase().replace('-', '')}`}
              >
                {project.industry}
              </span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.5rem' }}>
                {project.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>{project.subtitle}</p>
            </div>
          </div>

          <div className="project-content">
            <div>
              <div className="project-block">
                <h3>Project Overview</h3>
                <p>{project.overview}</p>
              </div>

              <div className="project-block challenge">
                <h3>The Challenge</h3>
                <p>{project.challenge}</p>
              </div>

              <div className="project-block">
                <h3>My Contribution</h3>
                <ul>
                  {project.contributions.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="project-sidebar">
              <div className="sidebar-box">
                <h4>Project Details</h4>
                <div className="meta-row">
                  <span>Duration</span>
                  <span style={{ fontWeight: 500 }}>{project.meta.duration}</span>
                </div>
                <div className="meta-row">
                  <span>Role</span>
                  <span style={{ fontWeight: 500 }}>{project.meta.role}</span>
                </div>
                <div className="meta-row">
                  <span>Scale</span>
                  <span style={{ fontWeight: 500 }}>{project.meta.scale}</span>
                </div>
              </div>

              <div className="sidebar-box">
                <h4>Tools Used</h4>
                <div className="tools-list">
                  <span className="tool-tag airtable">Airtable</span>
                  <span className="tool-tag figma">Figma</span>
                  <span className="tool-tag miro">Miro</span>
                </div>
              </div>

              <div className="sidebar-box">
                <h4>Results</h4>
                {project.results.map((result, i) => (
                  <div key={i} className="result-item">
                    <span className="result-num">{result.value}</span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{result.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="cta-section">
        <h2>Interested in Working Together?</h2>
        <p>I'm always open to discussing new projects and opportunities</p>
        <Link to="/contact" className="btn-primary">Get in Touch</Link>
      </section>
    </>
  );
}

export default Projects;

