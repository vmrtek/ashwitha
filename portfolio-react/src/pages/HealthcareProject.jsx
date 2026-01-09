import { Link } from 'react-router-dom';
import { AirtableLogo, FigmaLogo, MiroLogo } from '../components/Icons';
import { AirtableGridView, AirtableLinkedRecords } from '../components/healthcare/AirtableComponents';
import { FigmaLowFidelity, FigmaHighFidelity, FigmaMobileView, FigmaComponentLibrary } from '../components/healthcare/FigmaComponents';
import { MiroPersona, MiroJourneyMap, MiroUserFlow, MiroEmpathyMap } from '../components/healthcare/MiroComponents';

// ========================================
// ACCESSIBILITY SECTION
// ========================================
const AccessibilityAudit = () => (
  <div style={{ background: '#0d1117', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(16, 185, 129, 0.3)', boxShadow: '0 20px 60px rgba(16, 185, 129, 0.1)' }}>
    <div style={{ background: 'linear-gradient(90deg, #10b981, #059669)', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.75rem' }}>♿</span>
        <div>
          <span style={{ color: 'white', fontWeight: 700, fontSize: '1.125rem', display: 'block' }}>Accessibility Audit</span>
          <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem' }}>WCAG 2.1 Level AA Compliance</span>
        </div>
      </div>
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', fontSize: '0.875rem', color: 'white', fontWeight: 600 }}>Score: 98/100</span>
        <span style={{ fontSize: '2rem' }}>✅</span>
      </div>
    </div>
    <div style={{ padding: '2rem' }}>
      {/* Color Contrast */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h4 style={{ color: 'white', marginBottom: '1.25rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>🎨</span> Color Contrast Ratios
        </h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {[
            { name: 'Primary Text', fg: '#ffffff', bg: '#0f172a', ratio: '15.8:1', required: '4.5:1' },
            { name: 'Secondary Text', fg: '#94a3b8', bg: '#0f172a', ratio: '7.4:1', required: '4.5:1' },
            { name: 'Success State', fg: '#10b981', bg: '#0f172a', ratio: '5.2:1', required: '4.5:1' },
            { name: 'Error State', fg: '#ef4444', bg: '#0f172a', ratio: '4.6:1', required: '4.5:1' },
          ].map((c) => (
            <div key={c.name} style={{ background: '#161b22', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                <div style={{ width: '32px', height: '32px', background: c.fg, borderRadius: '6px', border: '2px solid rgba(255,255,255,0.2)' }} aria-label={`Foreground color: ${c.fg}`}></div>
                <div style={{ width: '32px', height: '32px', background: c.bg, borderRadius: '6px', border: '2px solid rgba(255,255,255,0.2)' }} aria-label={`Background color: ${c.bg}`}></div>
              </div>
              <p style={{ color: '#c9d1d9', fontSize: '0.9375rem', marginBottom: '0.5rem', fontWeight: 600 }}>{c.name}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#10b981', fontSize: '0.9375rem', fontWeight: 700 }}>{c.ratio}</span>
                <span style={{ padding: '0.25rem 0.5rem', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '4px', color: '#10b981', fontSize: '0.6875rem' }}>✓ Passes {c.required}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Keyboard Navigation */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h4 style={{ color: 'white', marginBottom: '1.25rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>⌨️</span> Keyboard Navigation
        </h4>
        <div style={{ background: '#161b22', borderRadius: '12px', padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {[
            { check: 'All interactive elements focusable', status: true },
            { check: 'Visible focus indicators (3px outline)', status: true },
            { check: 'Logical tab order through forms', status: true },
            { check: 'Skip-to-content link on every page', status: true },
            { check: 'Dropdown menus fully keyboard accessible', status: true },
            { check: 'Modal dialogs trap focus correctly', status: true },
            { check: 'Escape key closes modals/dropdowns', status: true },
            { check: 'Arrow keys navigate within components', status: true },
          ].map((item) => (
            <div key={item.check} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ color: '#10b981', fontSize: '1.125rem' }}>✓</span>
              <span style={{ color: '#c9d1d9', fontSize: '0.9375rem' }}>{item.check}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Screen Reader Support */}
      <div>
        <h4 style={{ color: 'white', marginBottom: '1.25rem', fontSize: '1.125rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>👁️</span> Screen Reader Support
        </h4>
        <div style={{ background: '#161b22', borderRadius: '12px', padding: '1.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { label: 'ARIA Labels', status: 'Complete', percent: 100 },
              { label: 'Alt Text on Images', status: 'Complete', percent: 100 },
              { label: 'Landmark Regions', status: 'Complete', percent: 100 },
              { label: 'Live Regions', status: 'Complete', percent: 100 },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ color: '#c9d1d9', fontSize: '0.9375rem', fontWeight: 500 }}>{item.label}</span>
                </div>
                <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }} role="progressbar" aria-valuenow={item.percent} aria-valuemin="0" aria-valuemax="100" aria-label={`${item.label}: ${item.percent}%`}>
                  <div style={{ width: `${item.percent}%`, height: '100%', background: '#10b981', borderRadius: '4px' }}></div>
                </div>
                <span style={{ color: '#10b981', fontSize: '0.75rem', marginTop: '0.5rem', display: 'block' }}>{item.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ========================================
// MAIN COMPONENT
// ========================================
function HealthcareProject() {
  return (
    <main>
      {/* Hero Section */}
      <header className="page-hero" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)', minHeight: '500px', display: 'flex', alignItems: 'center' }}>
        <div className="page-hero-content" style={{ maxWidth: '1200px', margin: '0 auto', padding: '4rem 2rem' }}>
          <span style={{ 
            display: 'inline-block',
            padding: '0.625rem 1.25rem',
            background: 'rgba(239, 68, 68, 0.2)',
            borderRadius: '100px',
            fontSize: '0.8125rem',
            fontWeight: 700,
            color: '#fca5a5',
            marginBottom: '1.5rem',
            letterSpacing: '0.05em'
          }}>HEALTHCARE • CASE STUDY</span>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '3.5rem', lineHeight: 1.1, marginBottom: '1.5rem' }}>CareFlow: Clinical Workflow Management System</h1>
          <p className="page-subtitle" style={{ fontSize: '1.25rem', maxWidth: '800px', opacity: 0.85, lineHeight: 1.7 }}>
            A comprehensive patient management platform designed for healthcare professionals,
            featuring real-time handoffs, medication tracking, and intelligent scheduling.
            Serving 500+ bed hospital network with 94% user adoption.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            <span style={{ padding: '0.625rem 1.25rem', background: 'rgba(99, 102, 241, 0.25)', borderRadius: '8px', fontSize: '0.9375rem', color: '#c7d2fe', fontWeight: 500, border: '1px solid rgba(99, 102, 241, 0.3)' }}>📅 16 Weeks</span>
            <span style={{ padding: '0.625rem 1.25rem', background: 'rgba(99, 102, 241, 0.25)', borderRadius: '8px', fontSize: '0.9375rem', color: '#c7d2fe', fontWeight: 500, border: '1px solid rgba(99, 102, 241, 0.3)' }}>👤 Lead Product Designer</span>
            <span style={{ padding: '0.625rem 1.25rem', background: 'rgba(99, 102, 241, 0.25)', borderRadius: '8px', fontSize: '0.9375rem', color: '#c7d2fe', fontWeight: 500, border: '1px solid rgba(99, 102, 241, 0.3)' }}>🏥 LifeBridge Health</span>
          </div>
        </div>
      </header>

      {/* Overview Section */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }} aria-labelledby="overview-heading">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
            <div>
              <h2 id="overview-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', marginBottom: '1.5rem' }}>Project Overview</h2>
              <p style={{ fontSize: '1.1875rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                CareFlow is a comprehensive clinical workflow management system designed to streamline 
                patient care coordination, reduce administrative burden, and improve outcomes through 
                better information access and collaboration.
              </p>
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                As the Lead Product Designer, I was responsible for the end-to-end design process, 
                from initial research and roadmap visualization in <strong>Airtable</strong> to high-fidelity prototypes 
                in <strong>Figma</strong> and user flow documentation in <strong>Miro</strong>.
              </p>
              
              {/* Problem Statement */}
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', borderLeft: '4px solid #ef4444', borderRadius: '0 12px 12px 0', padding: '1.5rem' }}>
                <h3 style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '1.125rem' }}>The Problem</h3>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
                  <li>Nurses spent 2+ hours daily on manual documentation</li>
                  <li>45-minute average delays in care handoffs</li>
                  <li>5 fragmented systems with no unified patient view</li>
                  <li>30% readmission rate due to paper-based discharge planning</li>
                </ul>
              </div>
            </div>
            
            {/* Tools Sidebar */}
            <div style={{ background: 'var(--bg-card)', borderRadius: '20px', padding: '2rem', border: '1px solid var(--border-subtle)', height: 'fit-content' }}>
              <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Tools & Technologies</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(24, 191, 255, 0.1)', borderRadius: '12px' }}>
                  <AirtableLogo size={36} />
                  <div>
                    <span style={{ fontWeight: 600, display: 'block' }}>Airtable</span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Product Roadmap & Database</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(162, 89, 255, 0.1)', borderRadius: '12px' }}>
                  <FigmaLogo size={36} />
                  <div>
                    <span style={{ fontWeight: 600, display: 'block' }}>Figma</span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Wireframes & Design System</span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'rgba(251, 191, 36, 0.1)', borderRadius: '12px' }}>
                  <MiroLogo size={36} />
                  <div>
                    <span style={{ fontWeight: 600, display: 'block' }}>Miro</span>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>User Research & Flows</span>
                  </div>
                </div>
              </div>
              
              {/* Key Metrics */}
              <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
                <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Key Deliverables</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  {[
                    { num: '150+', label: 'Wireframes' },
                    { num: '8', label: 'User Flows' },
                    { num: '97', label: 'User Stories' },
                    { num: '4', label: 'Prototypes' },
                  ].map((m) => (
                    <div key={m.label} style={{ textAlign: 'center' }}>
                      <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#6366f1', display: 'block' }}>{m.num}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airtable Section */}
      <section style={{ padding: '5rem 0' }} aria-labelledby="airtable-heading">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <AirtableLogo size={48} />
            <div>
              <h2 id="airtable-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', margin: 0 }}>Product Roadmap in Airtable</h2>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Interactive product backlog with Grid, Timeline, and Kanban views</p>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', maxWidth: '800px', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            I designed a comprehensive Airtable system to manage the entire product lifecycle. Click the view tabs below to explore the roadmap, 
            timeline visualization, and sprint kanban board. This system tracked 8 major features, 97 user stories, and 6 quarterly releases.
          </p>
          <AirtableGridView />
          
          <div style={{ marginTop: '4rem' }}>
            <h3 style={{ fontSize: '1.375rem', marginBottom: '1.5rem' }}>Database Architecture - Linked Records</h3>
            <AirtableLinkedRecords />
          </div>
        </div>
      </section>

      {/* Figma Section */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }} aria-labelledby="figma-heading">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <FigmaLogo size={48} />
            <div>
              <h2 id="figma-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', margin: 0 }}>Wireframes & Design in Figma</h2>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>From low-fidelity sketches to production-ready designs</p>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', maxWidth: '800px', marginBottom: '3rem', lineHeight: 1.7 }}>
            I created 150+ wireframes spanning low, mid, and high fidelity. Each wireframe includes detailed annotations 
            for engineering handoff, including interaction specifications, error states, and accessibility requirements.
          </p>
          
          {/* Low Fidelity */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ padding: '0.375rem 0.75rem', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '6px', fontSize: '0.75rem', color: '#a5b4fc' }}>PHASE 1</span>
              Low-Fidelity Wireframes
            </h3>
            <FigmaLowFidelity />
          </div>
          
          {/* High Fidelity */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ padding: '0.375rem 0.75rem', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '6px', fontSize: '0.75rem', color: '#6ee7b7' }}>PHASE 3</span>
              High-Fidelity Mockups
            </h3>
            <FigmaHighFidelity />
          </div>
          
          {/* Responsive Designs */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ padding: '0.375rem 0.75rem', background: 'rgba(245, 158, 11, 0.2)', borderRadius: '6px', fontSize: '0.75rem', color: '#fcd34d' }}>RESPONSIVE</span>
              Mobile, Tablet & Desktop
            </h3>
            <FigmaMobileView />
          </div>
          
          {/* Component Library */}
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ padding: '0.375rem 0.75rem', background: 'rgba(162, 89, 255, 0.2)', borderRadius: '6px', fontSize: '0.75rem', color: '#c4b5fd' }}>SYSTEM</span>
              Design System Components
            </h3>
            <FigmaComponentLibrary />
          </div>
        </div>
      </section>

      {/* Miro Section */}
      <section style={{ padding: '5rem 0' }} aria-labelledby="miro-heading">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
            <MiroLogo size={48} />
            <div>
              <h2 id="miro-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', margin: 0 }}>User Research in Miro</h2>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Personas, empathy maps, journey mapping, and user flows</p>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', maxWidth: '800px', marginBottom: '3rem', lineHeight: 1.7 }}>
            I conducted 25+ stakeholder interviews and synthesized findings using Miro. The research artifacts below 
            guided design decisions and helped align the team around user needs.
          </p>
          
          {/* Persona */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>User Persona: Charge Nurse</h3>
            <MiroPersona />
          </div>
          
          {/* Empathy Map */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Empathy Map</h3>
            <MiroEmpathyMap />
          </div>
          
          {/* Journey Map */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>User Journey Map: Shift Handoff</h3>
            <MiroJourneyMap />
          </div>
          
          {/* User Flow */}
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>User Flow: Care Handoff Process</h3>
            <MiroUserFlow />
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section style={{ padding: '5rem 0', background: 'var(--bg-secondary)' }} aria-labelledby="a11y-heading">
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 id="a11y-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1rem' }}>Accessibility Compliance</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '800px', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Healthcare applications must be accessible to all users. I ensured WCAG 2.1 Level AA compliance 
            throughout the design, including color contrast, keyboard navigation, and screen reader support.
          </p>
          <AccessibilityAudit />
        </div>
      </section>

      {/* Results Section */}
      <section style={{ padding: '5rem 0' }} aria-labelledby="results-heading">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 id="results-heading" style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', marginBottom: '1rem', textAlign: 'center' }}>Results & Impact</h2>
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
            The CareFlow platform launched successfully and delivered measurable improvements across key metrics.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { value: '40%', label: 'Reduction in handoff time', icon: '⏱️', color: '#6366f1' },
              { value: '94%', label: 'User adoption rate', icon: '📈', color: '#10b981' },
              { value: '2.5hrs', label: 'Saved per nurse/day', icon: '⏰', color: '#f59e0b' },
              { value: '18%', label: 'Fewer no-show appointments', icon: '✅', color: '#ef4444' },
            ].map((stat) => (
              <div key={stat.label} style={{ background: 'var(--bg-card)', borderRadius: '20px', padding: '2.5rem 2rem', textAlign: 'center', border: '1px solid var(--border-subtle)', transition: 'transform 0.2s' }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '0.75rem' }}>{stat.icon}</span>
                <span style={{ fontSize: '3rem', fontWeight: 800, fontFamily: 'var(--font-serif)', color: stat.color, display: 'block', marginBottom: '0.75rem' }}>{stat.value}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem' }}>{stat.label}</span>
              </div>
            ))}
          </div>
          
          {/* Testimonial */}
          <div style={{ marginTop: '4rem', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))', borderRadius: '20px', padding: '3rem', textAlign: 'center', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
            <p style={{ fontSize: '1.375rem', fontStyle: 'italic', color: 'var(--text-primary)', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto 1.5rem' }}>
              "CareFlow has transformed how we manage patient handoffs. The unified dashboard saves me hours each day, 
              and I finally feel confident that critical information isn't slipping through the cracks."
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem' }}>👩‍⚕️</div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontWeight: 700, margin: 0 }}>Sarah Wilson, RN</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>Charge Nurse, Cardiac Care Unit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" aria-labelledby="cta-heading">
        <h2 id="cta-heading">Explore More Projects</h2>
        <p>See how I apply these skills across different industries</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn-primary">View All Projects</Link>
          <Link to="/contact" className="btn-secondary">Get in Touch</Link>
        </div>
      </section>
    </main>
  );
}

export default HealthcareProject;
