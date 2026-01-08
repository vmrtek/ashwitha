import { Link } from 'react-router-dom';
import { AirtableLogo } from '../components/Icons';
import { 
  AirtableTimeline, 
  AirtableKanban, 
  AirtableTable,
  AirtableLinkedRecords 
} from '../components/AirtableVisuals';
import {
  AirtableGallery,
  AirtableCalendar,
  AirtableForm,
  AirtableAutomation,
  AirtableDashboard
} from '../components/MoreAirtableVisuals';

function Airtable() {
  return (
    <>
      <header className="page-hero">
        <div className="page-hero-content">
          <span className="page-number">04</span>
          <h1>Airtable Expertise</h1>
          <p className="page-subtitle">
            Building dynamic product roadmaps, timeline views, kanban boards, and 
            linked record systems that engineering teams actually use
          </p>
        </div>
      </header>

      {/* Intro Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
            <AirtableLogo size={80} />
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '0.5rem' }}>
                Beyond Spreadsheets
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', maxWidth: '600px' }}>
                I architect Airtable bases that serve as the single source of truth for product development, 
                creating interconnected tables, intuitive views, and automations that enhance team collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline View Demo */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(24, 191, 255, 0.1)',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#18bfff',
              marginBottom: '1rem'
            }}>LIVE VISUALIZATION</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Timeline View - Product Roadmap
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              6-quarter development roadmap with feature dependencies, team assignments, and status tracking
            </p>
          </div>
          <AirtableTimeline />
        </div>
      </section>

      {/* Kanban View Demo */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(24, 191, 255, 0.1)',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#18bfff',
              marginBottom: '1rem'
            }}>LIVE VISUALIZATION</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Kanban View - Sprint Board
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Visual task management with drag-and-drop cards, priority indicators, and team assignments
            </p>
          </div>
          <AirtableKanban />
        </div>
      </section>

      {/* Grid View Demo */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(24, 191, 255, 0.1)',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#18bfff',
              marginBottom: '1rem'
            }}>LIVE VISUALIZATION</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Grid View - Features Table
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Relational database with linked records, rollups, and filtered views for stakeholder reporting
            </p>
          </div>
          <AirtableTable />
        </div>
      </section>

      {/* Linked Records Schema */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(24, 191, 255, 0.1)',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#18bfff',
              marginBottom: '1rem'
            }}>DATABASE ARCHITECTURE</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Linked Records Schema
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Relational database design connecting features, user stories, requirements, and team members
            </p>
          </div>
          <AirtableLinkedRecords />
        </div>
      </section>

      {/* Gallery View */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(24, 191, 255, 0.1)',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#18bfff',
              marginBottom: '1rem'
            }}>LIVE VISUALIZATION</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Gallery View - Feature Cards
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Visual card layout for stakeholder presentations and feature showcases
            </p>
          </div>
          <AirtableGallery />
        </div>
      </section>

      {/* Calendar View */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(24, 191, 255, 0.1)',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#18bfff',
              marginBottom: '1rem'
            }}>LIVE VISUALIZATION</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Calendar View - Release Schedule
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Monthly view of sprints, reviews, and release milestones
            </p>
          </div>
          <AirtableCalendar />
        </div>
      </section>

      {/* Form View */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
            <div>
              <span style={{ 
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'rgba(24, 191, 255, 0.1)',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#18bfff',
                marginBottom: '1rem'
              }}>FORM VIEW</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                Feature Request Form
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Self-service forms for stakeholders to submit feature requests directly into the product backlog
              </p>
              <AirtableForm />
            </div>
            <div>
              <span style={{ 
                display: 'inline-block',
                padding: '0.5rem 1rem',
                background: 'rgba(245, 158, 11, 0.1)',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#f59e0b',
                marginBottom: '1rem'
              }}>AUTOMATIONS</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
                Workflow Automations
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                Automated triggers for notifications, status updates, and data synchronization
              </p>
              <AirtableAutomation />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '2rem' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '0.5rem 1rem',
              background: 'rgba(24, 191, 255, 0.1)',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#18bfff',
              marginBottom: '1rem'
            }}>INTERFACE DESIGNER</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '0.5rem' }}>
              Product Dashboard
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Custom interface with real-time metrics, charts, and activity feed
            </p>
          </div>
          <AirtableDashboard />
        </div>
      </section>

      {/* Core Capabilities */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>
            Core Airtable Capabilities
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { title: 'Timeline Views', desc: 'Gantt-style roadmaps with dependencies and milestones', icon: '📅' },
              { title: 'Kanban Boards', desc: 'Visual sprint planning with WIP limits and swimlanes', icon: '📋' },
              { title: 'Linked Records', desc: 'Relational data models with rollups and lookups', icon: '🔗' },
              { title: 'Automations', desc: 'Workflow triggers for notifications and data sync', icon: '⚡' },
              { title: 'Filtered Views', desc: 'Role-based views for different stakeholders', icon: '👁️' },
              { title: 'API Integration', desc: 'Connect with Jira, Slack, GitHub, and more', icon: '🔌' },
            ].map((item) => (
              <div key={item.title} style={{ 
                background: 'var(--bg-card)',
                padding: '1.5rem',
                borderRadius: '12px',
                border: '1px solid var(--border-subtle)'
              }}>
                <span style={{ fontSize: '2rem', marginBottom: '1rem', display: 'block' }}>{item.icon}</span>
                <h3 style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Skills */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>
            Advanced Airtable Skills
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '1rem',
            background: 'var(--bg-card)',
            padding: '2rem',
            borderRadius: '12px',
            border: '1px solid var(--border-subtle)'
          }}>
            {[
              'Formula Fields & Rollups',
              'Interface Designer',
              'Scripting & Extensions',
              'API & Webhooks',
              'Conditional Views',
              'Custom Blocks',
              'Data Import/Export',
              'Sync & Permissions'
            ].map((skill) => (
              <div key={skill} style={{ 
                padding: '1rem',
                background: 'rgba(24, 191, 255, 0.05)',
                borderRadius: '8px',
                textAlign: 'center',
                fontSize: '0.875rem',
                fontWeight: 500
              }}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>See Airtable in My Projects</h2>
        <p>Explore how I use Airtable to manage complex product development</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/wireframes" className="btn-secondary">See Wireframes</Link>
        </div>
      </section>
    </>
  );
}

export default Airtable;
