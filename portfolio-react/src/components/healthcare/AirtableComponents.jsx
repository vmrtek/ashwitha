import { useState } from 'react';
import { AirtableLogo } from '../Icons';

// ========================================
// INTERACTIVE AIRTABLE GRID VIEW
// ========================================
export const AirtableGridView = () => {
  const [activeView, setActiveView] = useState('grid');
  const [filter, setFilter] = useState('');
  
  const features = [
    { id: 'F-001', name: 'Patient Dashboard', status: 'Complete', priority: 'High', sprint: 'S1', owner: 'AR', stories: 12, progress: 100, start: 'Q1 2024', end: 'Q2 2024', dependencies: ['F-002'] },
    { id: 'F-002', name: 'Care Handoff Module', status: 'Complete', priority: 'High', sprint: 'S2', owner: 'MJ', stories: 18, progress: 100, start: 'Q1 2024', end: 'Q3 2024', dependencies: [] },
    { id: 'F-003', name: 'Medication Tracker', status: 'In Progress', priority: 'High', sprint: 'S3', owner: 'AR', stories: 15, progress: 75, start: 'Q2 2024', end: 'Q3 2024', dependencies: ['F-001'] },
    { id: 'F-004', name: 'Discharge Planning', status: 'In Progress', priority: 'Medium', sprint: 'S3', owner: 'JK', stories: 10, progress: 40, start: 'Q3 2024', end: 'Q4 2024', dependencies: ['F-002', 'F-003'] },
    { id: 'F-005', name: 'Vital Signs Monitor', status: 'Planned', priority: 'High', sprint: 'S4', owner: 'AR', stories: 8, progress: 0, start: 'Q3 2024', end: 'Q4 2024', dependencies: ['F-001'] },
    { id: 'F-006', name: 'Nurse Scheduling', status: 'Planned', priority: 'Medium', sprint: 'S5', owner: 'SL', stories: 14, progress: 0, start: 'Q4 2024', end: 'Q1 2025', dependencies: [] },
    { id: 'F-007', name: 'Patient Portal', status: 'Planned', priority: 'Low', sprint: 'S6', owner: 'MJ', stories: 20, progress: 0, start: 'Q1 2025', end: 'Q2 2025', dependencies: ['F-001', 'F-004'] },
    { id: 'F-008', name: 'Lab Results Integration', status: 'Planned', priority: 'High', sprint: 'S4', owner: 'AR', stories: 16, progress: 0, start: 'Q4 2024', end: 'Q1 2025', dependencies: ['F-003'] },
  ];

  // HIGH CONTRAST COLORS for better visibility
  const statusColors = { 'Complete': '#34d399', 'In Progress': '#fbbf24', 'Planned': '#818cf8' };
  const priorityColors = { 'High': '#f87171', 'Medium': '#fbbf24', 'Low': '#34d399' };

  const filteredFeatures = features.filter(f => 
    f.name.toLowerCase().includes(filter.toLowerCase()) || 
    f.status.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ background: '#0d1117', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(24, 191, 255, 0.3)', boxShadow: '0 20px 60px rgba(24, 191, 255, 0.1)' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(90deg, #18bfff, #2563eb)', padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AirtableLogo size={28} />
          <div>
            <span style={{ color: 'white', fontWeight: 700, fontSize: '1.125rem', display: 'block' }}>CareFlow Product Roadmap</span>
            <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem' }}>Healthcare Clinical Workflow Management</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <span style={{ padding: '0.375rem 1rem', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', fontSize: '0.8125rem', color: 'white', fontWeight: 500 }}>{features.length} Features</span>
          <span style={{ padding: '0.375rem 1rem', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', fontSize: '0.8125rem', color: 'white', fontWeight: 500 }}>{features.reduce((a, f) => a + f.stories, 0)} Stories</span>
        </div>
      </div>
      
      {/* Toolbar - HIGH CONTRAST */}
      <div style={{ padding: '0.875rem 1.25rem', background: '#161b22', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <button 
          onClick={() => setActiveView('grid')} 
          style={{ padding: '0.5rem 1rem', background: activeView === 'grid' ? 'rgba(129, 140, 248, 0.2)' : 'transparent', border: activeView === 'grid' ? '1px solid rgba(129, 140, 248, 0.5)' : '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: activeView === 'grid' ? '#c7d2fe' : '#cbd5e1', fontSize: '0.875rem', cursor: 'pointer', transition: 'all 0.2s', fontWeight: activeView === 'grid' ? 600 : 400 }}
        >⊞ Grid View</button>
        <button 
          onClick={() => setActiveView('timeline')} 
          style={{ padding: '0.5rem 1rem', background: activeView === 'timeline' ? 'rgba(129, 140, 248, 0.2)' : 'transparent', border: activeView === 'timeline' ? '1px solid rgba(129, 140, 248, 0.5)' : '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: activeView === 'timeline' ? '#c7d2fe' : '#cbd5e1', fontSize: '0.875rem', cursor: 'pointer', transition: 'all 0.2s', fontWeight: activeView === 'timeline' ? 600 : 400 }}
        >📅 Timeline</button>
        <button 
          onClick={() => setActiveView('kanban')} 
          style={{ padding: '0.5rem 1rem', background: activeView === 'kanban' ? 'rgba(129, 140, 248, 0.2)' : 'transparent', border: activeView === 'kanban' ? '1px solid rgba(129, 140, 248, 0.5)' : '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: activeView === 'kanban' ? '#c7d2fe' : '#cbd5e1', fontSize: '0.875rem', cursor: 'pointer', transition: 'all 0.2s', fontWeight: activeView === 'kanban' ? 600 : 400 }}
        >📋 Kanban</button>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="🔍 Filter features..." 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ padding: '0.5rem 1rem', background: '#21262d', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '8px', color: '#ffffff', fontSize: '0.875rem', width: '200px', outline: 'none' }} 
            aria-label="Filter features"
          />
          <button style={{ padding: '0.5rem 1rem', background: '#818cf8', border: 'none', borderRadius: '8px', color: '#0a0a0f', fontSize: '0.875rem', cursor: 'pointer', fontWeight: 600 }}>+ Add Feature</button>
        </div>
      </div>

      {/* Grid View */}
      {activeView === 'grid' && (
        <div style={{ overflowX: 'auto' }} role="table" aria-label="Product features table">
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '1000px' }}>
            <thead>
              <tr style={{ background: '#161b22' }} role="row">
                {['ID', 'Feature Name', 'Status', 'Priority', 'Sprint', 'Owner', 'Stories', 'Progress', 'Timeline', 'Dependencies'].map((header, i) => (
                  <th key={i} style={{ padding: '1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#cbd5e1', borderBottom: '1px solid rgba(255,255,255,0.1)', textTransform: 'uppercase', letterSpacing: '0.05em' }} scope="col">{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredFeatures.map((f, i) => (
                <tr key={f.id} style={{ background: i % 2 === 0 ? '#0d1117' : '#161b22', transition: 'background 0.2s' }} role="row" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && console.log('Open feature:', f.id)}>
                  <td style={{ padding: '1rem', fontSize: '0.8125rem', color: '#7dd3fc', borderBottom: '1px solid rgba(255,255,255,0.05)', fontFamily: 'monospace' }}>{f.id}</td>
                  <td style={{ padding: '1rem', fontSize: '0.9375rem', color: '#ffffff', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{f.name}</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ padding: '0.375rem 0.75rem', background: `${statusColors[f.status]}20`, color: statusColors[f.status], borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600 }}>{f.status}</span>
                  </td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      <span style={{ width: '10px', height: '10px', background: priorityColors[f.priority], borderRadius: '50%' }} aria-hidden="true"></span>
                      <span style={{ fontSize: '0.8125rem', color: '#c9d1d9' }}>{f.priority}</span>
                    </span>
                  </td>
                  <td style={{ padding: '1rem', fontSize: '0.8125rem', color: '#cbd5e1', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{f.sprint}</td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #818cf8, #a78bfa)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', color: 'white', fontWeight: 700 }} title={`Assigned to ${f.owner}`}>{f.owner}</span>
                  </td>
                  <td style={{ padding: '1rem', fontSize: '0.875rem', color: '#7dd3fc', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ cursor: 'pointer' }}>{f.stories} →</span>
                  </td>
                  <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', minWidth: '150px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ flex: 1, height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }} role="progressbar" aria-valuenow={f.progress} aria-valuemin={0} aria-valuemax={100}>
                        <div style={{ width: `${f.progress}%`, height: '100%', background: statusColors[f.status], borderRadius: '4px', transition: 'width 0.3s' }}></div>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#cbd5e1', minWidth: '35px' }}>{f.progress}%</span>
                    </div>
                  </td>
                  <td style={{ padding: '1rem', fontSize: '0.75rem', color: '#cbd5e1', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{f.start} → {f.end}</td>
                  <td style={{ padding: '1rem', fontSize: '0.75rem', color: '#cbd5e1', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {f.dependencies.length > 0 ? f.dependencies.map(d => (
                      <span key={d} style={{ padding: '0.125rem 0.375rem', background: 'rgba(129, 140, 248, 0.25)', color: '#c7d2fe', borderRadius: '4px', marginRight: '0.25rem', fontSize: '0.6875rem' }}>{d}</span>
                    )) : <span style={{ color: '#9ca3af' }}>—</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Timeline View */}
      {activeView === 'timeline' && <AirtableTimelineView features={features} statusColors={statusColors} />}
      
      {/* Kanban View */}
      {activeView === 'kanban' && <AirtableKanbanView features={features} statusColors={statusColors} priorityColors={priorityColors} />}
    </div>
  );
};

// ========================================
// TIMELINE VIEW
// ========================================
const AirtableTimelineView = ({ features, statusColors }) => {
  const quarters = ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025'];
  
  const getPosition = (quarter) => quarters.indexOf(quarter);
  
  return (
    <div style={{ padding: '2rem', overflowX: 'auto' }}>
      <div style={{ minWidth: '1000px' }}>
        {/* Timeline Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px repeat(6, 1fr)', gap: '0', borderBottom: '2px solid rgba(255,255,255,0.1)', paddingBottom: '1rem', marginBottom: '1rem' }}>
          <div style={{ fontWeight: 600, color: '#8b949e', fontSize: '0.875rem' }}>Feature</div>
          {quarters.map((q, i) => (
            <div key={q} style={{ textAlign: 'center', color: '#8b949e', fontSize: '0.8125rem', fontWeight: 500, borderLeft: i > 0 ? '1px dashed rgba(255,255,255,0.1)' : 'none', paddingLeft: '0.5rem' }}>{q}</div>
          ))}
        </div>
        
        {/* Timeline Rows */}
        {features.map((f, i) => {
          const startPos = getPosition(f.start);
          const endPos = getPosition(f.end);
          const span = endPos - startPos + 1;
          
          return (
            <div key={f.id} style={{ display: 'grid', gridTemplateColumns: '200px repeat(6, 1fr)', gap: '0', alignItems: 'center', padding: '0.75rem 0', borderBottom: '1px solid rgba(255,255,255,0.05)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '8px', height: '8px', background: statusColors[f.status], borderRadius: '50%' }}></span>
                <span style={{ color: '#c9d1d9', fontSize: '0.875rem', fontWeight: 500 }}>{f.name}</span>
              </div>
              <div style={{ gridColumn: `${startPos + 2} / span ${span}`, padding: '0 0.5rem' }}>
                <div style={{ background: `${statusColors[f.status]}30`, border: `2px solid ${statusColors[f.status]}`, borderRadius: '8px', padding: '0.5rem 0.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: statusColors[f.status], fontSize: '0.75rem', fontWeight: 600 }}>{f.status}</span>
                  <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.6875rem' }}>{f.progress}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ========================================
// KANBAN VIEW
// ========================================
const AirtableKanbanView = ({ features, statusColors, priorityColors }) => {
  const columns = [
    { title: 'Backlog', status: 'Planned', color: '#6366f1' },
    { title: 'In Progress', status: 'In Progress', color: '#f59e0b' },
    { title: 'Complete', status: 'Complete', color: '#10b981' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', padding: '1.5rem' }}>
      {columns.map((col) => {
        const items = features.filter(f => f.status === col.status);
        return (
          <div key={col.title} style={{ background: '#161b22', borderRadius: '12px', padding: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: `2px solid ${col.color}` }}>
              <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'white' }}>{col.title}</span>
              <span style={{ fontSize: '0.75rem', color: '#8b949e', background: '#21262d', padding: '0.25rem 0.5rem', borderRadius: '100px' }}>{items.length}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {items.map((item) => (
                <div key={item.id} style={{ background: '#0d1117', borderRadius: '10px', padding: '1rem', border: '1px solid rgba(255,255,255,0.05)', cursor: 'grab', transition: 'transform 0.2s, box-shadow 0.2s' }} tabIndex={0} role="button" aria-label={`${item.name} - ${item.status}`}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ width: '8px', height: '8px', background: priorityColors[item.priority], borderRadius: '50%' }}></span>
                    <span style={{ fontSize: '0.6875rem', color: priorityColors[item.priority], fontWeight: 500 }}>{item.priority}</span>
                    <span style={{ fontSize: '0.625rem', color: '#6b7280', marginLeft: 'auto' }}>{item.id}</span>
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: '#c9d1d9', fontWeight: 600, marginBottom: '0.75rem' }}>{item.name}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6875rem', color: 'white', fontWeight: 700 }}>{item.owner}</span>
                    <span style={{ fontSize: '0.75rem', color: '#58a6ff' }}>{item.stories} stories</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ========================================
// LINKED RECORDS SCHEMA
// ========================================
export const AirtableLinkedRecords = () => (
  <div style={{ background: '#0d1117', borderRadius: '16px', padding: '2rem', border: '1px solid rgba(24, 191, 255, 0.3)' }}>
    <h4 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '1.125rem' }}>Database Schema - Linked Records</h4>
    <svg viewBox="0 0 800 300" style={{ width: '100%', height: 'auto' }}>
      <defs>
        <marker id="arrow2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1"/>
        </marker>
      </defs>
      
      {/* Tables */}
      <rect x="50" y="50" width="140" height="200" rx="12" fill="#18bfff" opacity="0.15" stroke="#18bfff" strokeWidth="2"/>
      <text x="120" y="85" textAnchor="middle" fill="#18bfff" fontSize="14" fontWeight="bold">Features</text>
      <text x="70" y="115" fill="#8b949e" fontSize="10">feature_id</text>
      <text x="70" y="135" fill="#8b949e" fontSize="10">name</text>
      <text x="70" y="155" fill="#8b949e" fontSize="10">status</text>
      <text x="70" y="175" fill="#8b949e" fontSize="10">priority</text>
      <text x="70" y="195" fill="#58a6ff" fontSize="10">→ user_stories</text>
      <text x="70" y="215" fill="#58a6ff" fontSize="10">→ team_member</text>
      <text x="70" y="235" fill="#58a6ff" fontSize="10">→ sprint</text>
      
      <rect x="250" y="50" width="140" height="180" rx="12" fill="#10b981" opacity="0.15" stroke="#10b981" strokeWidth="2"/>
      <text x="320" y="85" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold">User Stories</text>
      <text x="270" y="115" fill="#8b949e" fontSize="10">story_id</text>
      <text x="270" y="135" fill="#8b949e" fontSize="10">title</text>
      <text x="270" y="155" fill="#8b949e" fontSize="10">acceptance</text>
      <text x="270" y="175" fill="#58a6ff" fontSize="10">→ feature_id</text>
      <text x="270" y="195" fill="#58a6ff" fontSize="10">→ requirements</text>
      <text x="270" y="215" fill="#58a6ff" fontSize="10">→ assignee</text>
      
      <rect x="450" y="50" width="140" height="160" rx="12" fill="#f59e0b" opacity="0.15" stroke="#f59e0b" strokeWidth="2"/>
      <text x="520" y="85" textAnchor="middle" fill="#f59e0b" fontSize="14" fontWeight="bold">Requirements</text>
      <text x="470" y="115" fill="#8b949e" fontSize="10">req_id</text>
      <text x="470" y="135" fill="#8b949e" fontSize="10">description</text>
      <text x="470" y="155" fill="#8b949e" fontSize="10">type</text>
      <text x="470" y="175" fill="#58a6ff" fontSize="10">→ user_stories</text>
      <text x="470" y="195" fill="#58a6ff" fontSize="10">→ compliance</text>
      
      <rect x="650" y="50" width="120" height="140" rx="12" fill="#ef4444" opacity="0.15" stroke="#ef4444" strokeWidth="2"/>
      <text x="710" y="85" textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="bold">Team</text>
      <text x="670" y="115" fill="#8b949e" fontSize="10">member_id</text>
      <text x="670" y="135" fill="#8b949e" fontSize="10">name</text>
      <text x="670" y="155" fill="#8b949e" fontSize="10">role</text>
      <text x="670" y="175" fill="#58a6ff" fontSize="10">→ features</text>
      
      {/* Connection Lines */}
      <line x1="190" y1="150" x2="250" y2="150" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow2)"/>
      <line x1="390" y1="150" x2="450" y2="150" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow2)"/>
      <line x1="590" y1="150" x2="650" y2="150" stroke="#6366f1" strokeWidth="2" markerEnd="url(#arrow2)"/>
    </svg>
    
    <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
      {[
        { relation: 'Features ↔ User Stories', type: '1:Many', desc: 'Each feature has multiple user stories' },
        { relation: 'Stories ↔ Requirements', type: 'Many:Many', desc: 'Stories link to business & technical reqs' },
        { relation: 'Features ↔ Team Members', type: 'Many:Many', desc: 'Team ownership and assignments' },
      ].map((r) => (
        <div key={r.relation} style={{ background: '#161b22', borderRadius: '8px', padding: '1rem' }}>
          <p style={{ color: '#c9d1d9', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.25rem' }}>{r.relation}</p>
          <span style={{ padding: '0.125rem 0.5rem', background: 'rgba(99, 102, 241, 0.2)', color: '#a5b4fc', borderRadius: '4px', fontSize: '0.6875rem', marginRight: '0.5rem' }}>{r.type}</span>
          <p style={{ color: '#8b949e', fontSize: '0.75rem', marginTop: '0.5rem' }}>{r.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

