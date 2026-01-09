import { Link } from 'react-router-dom';
import { AirtableLogo, FigmaLogo, MiroLogo } from '../components/Icons';

// ========================================
// REAL AIRTABLE COMPONENTS
// ========================================

const AirtableProductRoadmap = () => {
  const features = [
    { id: 'F-001', name: 'Patient Dashboard', status: 'Complete', priority: 'High', sprint: 'S1', owner: 'AR', stories: 12, start: 'Q1 2024', end: 'Q2 2024' },
    { id: 'F-002', name: 'Care Handoff Module', status: 'Complete', priority: 'High', sprint: 'S2', owner: 'MJ', stories: 18, start: 'Q1 2024', end: 'Q3 2024' },
    { id: 'F-003', name: 'Medication Tracker', status: 'In Progress', priority: 'High', sprint: 'S3', owner: 'AR', stories: 15, start: 'Q2 2024', end: 'Q3 2024' },
    { id: 'F-004', name: 'Discharge Planning', status: 'In Progress', priority: 'Medium', sprint: 'S3', owner: 'JK', stories: 10, start: 'Q3 2024', end: 'Q4 2024' },
    { id: 'F-005', name: 'Vital Signs Monitor', status: 'Planned', priority: 'High', sprint: 'S4', owner: 'AR', stories: 8, start: 'Q3 2024', end: 'Q4 2024' },
    { id: 'F-006', name: 'Nurse Scheduling', status: 'Planned', priority: 'Medium', sprint: 'S5', owner: 'SL', stories: 14, start: 'Q4 2024', end: 'Q1 2025' },
    { id: 'F-007', name: 'Patient Portal', status: 'Planned', priority: 'Low', sprint: 'S6', owner: 'MJ', stories: 20, start: 'Q1 2025', end: 'Q2 2025' },
  ];

  const statusColors = { 'Complete': '#10b981', 'In Progress': '#f59e0b', 'Planned': '#6366f1' };
  const priorityColors = { 'High': '#ef4444', 'Medium': '#f59e0b', 'Low': '#10b981' };

  return (
    <div style={{ background: '#0d1117', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(24, 191, 255, 0.3)' }}>
      <div style={{ background: 'linear-gradient(90deg, #18bfff, #2563eb)', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AirtableLogo size={24} />
          <span style={{ color: 'white', fontWeight: 600 }}>CareFlow Product Roadmap</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', fontSize: '0.75rem', color: 'white' }}>7 Features</span>
          <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', fontSize: '0.75rem', color: 'white' }}>97 Stories</span>
        </div>
      </div>
      
      {/* Toolbar */}
      <div style={{ padding: '0.75rem 1rem', background: '#161b22', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button style={{ padding: '0.375rem 0.75rem', background: '#21262d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#c9d1d9', fontSize: '0.8125rem', cursor: 'pointer' }}>+ Add Feature</button>
        <button style={{ padding: '0.375rem 0.75rem', background: 'transparent', border: 'none', color: '#8b949e', fontSize: '0.8125rem', cursor: 'pointer' }}>⊞ Grid View</button>
        <button style={{ padding: '0.375rem 0.75rem', background: 'transparent', border: 'none', color: '#8b949e', fontSize: '0.8125rem', cursor: 'pointer' }}>📅 Timeline</button>
        <button style={{ padding: '0.375rem 0.75rem', background: 'transparent', border: 'none', color: '#8b949e', fontSize: '0.8125rem', cursor: 'pointer' }}>📋 Kanban</button>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
          <input type="text" placeholder="🔍 Filter..." style={{ padding: '0.375rem 0.75rem', background: '#21262d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#c9d1d9', fontSize: '0.8125rem', width: '150px' }} />
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#161b22' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>ID</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Feature Name</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Status</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Priority</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Sprint</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Owner</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Stories</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Timeline</th>
            </tr>
          </thead>
          <tbody>
            {features.map((f, i) => (
              <tr key={f.id} style={{ background: i % 2 === 0 ? '#0d1117' : '#161b22' }}>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{f.id}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#c9d1d9', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{f.name}</td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ padding: '0.25rem 0.5rem', background: `${statusColors[f.status]}20`, color: statusColors[f.status], borderRadius: '4px', fontSize: '0.75rem', fontWeight: 500 }}>{f.status}</span>
                </td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span style={{ width: '8px', height: '8px', background: priorityColors[f.priority], borderRadius: '50%' }}></span>
                    <span style={{ fontSize: '0.8125rem', color: '#c9d1d9' }}>{f.priority}</span>
                  </span>
                </td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{f.sprint}</td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6875rem', color: 'white', fontWeight: 600 }}>{f.owner}</span>
                </td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#58a6ff', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>{f.stories} stories →</span>
                </td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.75rem', color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{f.start} → {f.end}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AirtableKanbanBoard = () => {
  const columns = [
    { title: 'Backlog', color: '#6b7280', items: [
      { title: 'Patient Preferences API', priority: 'Medium', assignee: 'JK' },
      { title: 'Accessibility Audit', priority: 'High', assignee: 'AR' },
    ]},
    { title: 'In Design', color: '#8b5cf6', items: [
      { title: 'Medication Alert Modal', priority: 'High', assignee: 'AR' },
      { title: 'Nurse Dashboard Redesign', priority: 'High', assignee: 'MJ' },
      { title: 'Discharge Summary View', priority: 'Medium', assignee: 'AR' },
    ]},
    { title: 'In Review', color: '#f59e0b', items: [
      { title: 'Patient Profile Card', priority: 'High', assignee: 'AR' },
      { title: 'Care Team Widget', priority: 'Medium', assignee: 'JK' },
    ]},
    { title: 'Done', color: '#10b981', items: [
      { title: 'Login Flow', priority: 'High', assignee: 'AR' },
      { title: 'Patient Dashboard v1', priority: 'High', assignee: 'AR' },
      { title: 'Handoff Checklist', priority: 'High', assignee: 'MJ' },
      { title: 'Vital Signs Chart', priority: 'Medium', assignee: 'AR' },
    ]},
  ];

  const priorityColors = { 'High': '#ef4444', 'Medium': '#f59e0b', 'Low': '#10b981' };

  return (
    <div style={{ background: '#0d1117', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(24, 191, 255, 0.3)' }}>
      <div style={{ background: 'linear-gradient(90deg, #18bfff, #2563eb)', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1.25rem' }}>📋</span>
          <span style={{ color: 'white', fontWeight: 600 }}>Sprint 3 - Kanban Board</span>
        </div>
        <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', fontSize: '0.75rem', color: 'white' }}>11 Tasks</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', padding: '1.5rem' }}>
        {columns.map((col) => (
          <div key={col.title}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '12px', height: '12px', background: col.color, borderRadius: '3px' }}></span>
                <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{col.title}</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#8b949e', background: '#21262d', padding: '0.125rem 0.5rem', borderRadius: '100px' }}>{col.items.length}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {col.items.map((item, i) => (
                <div key={i} style={{ background: '#161b22', borderRadius: '8px', padding: '1rem', border: '1px solid rgba(255,255,255,0.05)', cursor: 'grab' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ width: '6px', height: '6px', background: priorityColors[item.priority], borderRadius: '50%' }}></span>
                    <span style={{ fontSize: '0.6875rem', color: priorityColors[item.priority] }}>{item.priority}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#c9d1d9', marginBottom: '0.75rem' }}>{item.title}</p>
                  <span style={{ width: '24px', height: '24px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem', color: 'white', fontWeight: 600 }}>{item.assignee}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ========================================
// REAL FIGMA WIREFRAMES
// ========================================

const FigmaWireframeLowFidelity = () => (
  <div style={{ background: '#1e1e1e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(162, 89, 255, 0.3)' }}>
    <div style={{ background: '#2c2c2c', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #3c3c3c' }}>
      <div style={{ display: 'flex', gap: '0.375rem' }}>
        <span style={{ width: '12px', height: '12px', background: '#ff5f57', borderRadius: '50%' }}></span>
        <span style={{ width: '12px', height: '12px', background: '#febc2e', borderRadius: '50%' }}></span>
        <span style={{ width: '12px', height: '12px', background: '#28c840', borderRadius: '50%' }}></span>
      </div>
      <span style={{ color: '#8b8b8b', fontSize: '0.75rem', marginLeft: '0.5rem' }}>Patient Dashboard - Low Fidelity.fig</span>
    </div>
    <div style={{ padding: '2rem', background: '#f5f5f5' }}>
      <svg viewBox="0 0 800 500" style={{ width: '100%', height: 'auto' }}>
        {/* Header */}
        <rect x="20" y="20" width="760" height="60" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="8,4" rx="4"/>
        <text x="40" y="55" fontSize="14" fill="#666">Header / Navigation</text>
        
        {/* Sidebar */}
        <rect x="20" y="100" width="180" height="380" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="8,4" rx="4"/>
        <text x="40" y="130" fontSize="12" fill="#666">Navigation</text>
        <rect x="35" y="150" width="150" height="24" fill="#ddd" rx="4"/>
        <rect x="35" y="184" width="150" height="24" fill="#ddd" rx="4"/>
        <rect x="35" y="218" width="150" height="24" fill="#ddd" rx="4"/>
        <rect x="35" y="252" width="150" height="24" fill="#ddd" rx="4"/>
        
        {/* Main Content */}
        <rect x="220" y="100" width="560" height="380" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="8,4" rx="4"/>
        
        {/* Stats Cards */}
        <rect x="240" y="120" width="120" height="80" fill="#e0e0e0" rx="8"/>
        <text x="260" y="155" fontSize="10" fill="#666">Total Patients</text>
        <text x="260" y="180" fontSize="24" fill="#333" fontWeight="bold">124</text>
        
        <rect x="380" y="120" width="120" height="80" fill="#e0e0e0" rx="8"/>
        <text x="400" y="155" fontSize="10" fill="#666">Pending Handoffs</text>
        <text x="400" y="180" fontSize="24" fill="#333" fontWeight="bold">8</text>
        
        <rect x="520" y="120" width="120" height="80" fill="#e0e0e0" rx="8"/>
        <text x="540" y="155" fontSize="10" fill="#666">Discharges</text>
        <text x="540" y="180" fontSize="24" fill="#333" fontWeight="bold">15</text>
        
        <rect x="660" y="120" width="100" height="80" fill="#e0e0e0" rx="8"/>
        <text x="680" y="155" fontSize="10" fill="#666">Alerts</text>
        <text x="680" y="180" fontSize="24" fill="#ef4444" fontWeight="bold">3</text>
        
        {/* Patient List */}
        <rect x="240" y="220" width="520" height="240" fill="#f8f8f8" stroke="#ddd" rx="8"/>
        <text x="260" y="250" fontSize="14" fill="#333" fontWeight="bold">Priority Patients</text>
        <line x1="240" y1="265" x2="760" y2="265" stroke="#eee" strokeWidth="1"/>
        
        {/* Patient Rows */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x="250" y={280 + i * 45} width="500" height="40" fill={i % 2 === 0 ? '#fff' : '#fafafa'} rx="4"/>
            <circle cx="275" cy={300 + i * 45} r="16" fill="#ddd"/>
            <rect x="300" y={290 + i * 45} width="120" height="12" fill="#ccc" rx="2"/>
            <rect x="300" y={306 + i * 45} width="80" height="8" fill="#e0e0e0" rx="2"/>
            <rect x="580" y={293 + i * 45} width="60" height="20" fill={['#dcfce7', '#fee2e2', '#fef3c7', '#dcfce7'][i]} rx="10"/>
          </g>
        ))}
        
        {/* Annotations */}
        <circle cx="200" cy="55" r="14" fill="#6366f1"/>
        <text x="200" y="60" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">1</text>
        <circle cx="300" cy="160" r="14" fill="#6366f1"/>
        <text x="300" y="165" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">2</text>
        <circle cx="500" cy="280" r="14" fill="#6366f1"/>
        <text x="500" y="285" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">3</text>
      </svg>
      
      {/* Annotation Legend */}
      <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        {[
          { num: 1, title: 'Global Navigation', desc: 'Persistent header with logo, search, notifications, and user profile' },
          { num: 2, title: 'Quick Stats', desc: 'At-a-glance metrics for daily workflow prioritization' },
          { num: 3, title: 'Patient List', desc: 'Sortable, filterable list with status indicators and quick actions' },
        ].map((a) => (
          <div key={a.num} style={{ display: 'flex', gap: '0.75rem', alignItems: 'start' }}>
            <span style={{ width: '28px', height: '28px', background: '#6366f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.875rem', fontWeight: 600, flexShrink: 0 }}>{a.num}</span>
            <div>
              <strong style={{ fontSize: '0.875rem', color: '#1e293b' }}>{a.title}</strong>
              <p style={{ fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const FigmaWireframeHighFidelity = () => (
  <div style={{ background: '#1e1e1e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(162, 89, 255, 0.3)' }}>
    <div style={{ background: '#2c2c2c', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #3c3c3c' }}>
      <div style={{ display: 'flex', gap: '0.375rem' }}>
        <span style={{ width: '12px', height: '12px', background: '#ff5f57', borderRadius: '50%' }}></span>
        <span style={{ width: '12px', height: '12px', background: '#febc2e', borderRadius: '50%' }}></span>
        <span style={{ width: '12px', height: '12px', background: '#28c840', borderRadius: '50%' }}></span>
      </div>
      <span style={{ color: '#8b8b8b', fontSize: '0.75rem', marginLeft: '0.5rem' }}>Patient Dashboard - High Fidelity.fig</span>
      <FigmaLogo size={16} style={{ marginLeft: 'auto' }} />
    </div>
    <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', padding: '0' }}>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ width: '220px', background: '#0f172a', borderRight: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem 0', minHeight: '500px' }}>
          <div style={{ padding: '0 1.25rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontSize: '1.25rem' }}>🏥</span>
              </div>
              <span style={{ color: 'white', fontWeight: 600, fontSize: '1rem' }}>CareFlow</span>
            </div>
          </div>
          
          {[
            { icon: '📊', label: 'Dashboard', active: true },
            { icon: '👥', label: 'Patients', active: false },
            { icon: '🔄', label: 'Handoffs', active: false },
            { icon: '📅', label: 'Schedule', active: false },
            { icon: '💊', label: 'Medications', active: false },
            { icon: '📋', label: 'Reports', active: false },
            { icon: '⚙️', label: 'Settings', active: false },
          ].map((item) => (
            <div key={item.label} style={{ 
              padding: '0.75rem 1.25rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              background: item.active ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
              borderLeft: item.active ? '3px solid #6366f1' : '3px solid transparent',
              cursor: 'pointer'
            }}>
              <span>{item.icon}</span>
              <span style={{ color: item.active ? 'white' : '#94a3b8', fontSize: '0.875rem' }}>{item.label}</span>
            </div>
          ))}
        </div>
        
        {/* Main Content */}
        <div style={{ flex: 1, padding: '1.5rem 2rem' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <p style={{ color: '#94a3b8', fontSize: '0.875rem' }}>Good morning,</p>
              <h1 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 600 }}>Dr. Sarah Wilson</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ position: 'relative' }}>
                <span style={{ fontSize: '1.25rem' }}>🔔</span>
                <span style={{ position: 'absolute', top: '-4px', right: '-4px', width: '16px', height: '16px', background: '#ef4444', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem', color: 'white' }}>3</span>
              </div>
              <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 600, color: '#6d28d9' }}>SW</div>
            </div>
          </div>
          
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
            {[
              { label: 'Total Patients', value: '124', change: '+12', color: '#6366f1' },
              { label: 'Pending Handoffs', value: '8', change: '+3', color: '#f59e0b' },
              { label: 'Discharges Today', value: '15', change: '+5', color: '#10b981' },
              { label: 'Critical Alerts', value: '3', change: '+1', color: '#ef4444' },
            ].map((stat) => (
              <div key={stat.label} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.5rem' }}>{stat.label}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'white' }}>{stat.value}</span>
                  <span style={{ fontSize: '0.75rem', color: stat.color }}>{stat.change}</span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Patient List */}
          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: 600 }}>Priority Patients</h3>
              <button style={{ padding: '0.375rem 0.75rem', background: '#6366f1', border: 'none', borderRadius: '6px', color: 'white', fontSize: '0.8125rem', cursor: 'pointer' }}>+ Add Patient</button>
            </div>
            {[
              { name: 'John Doe', room: '412-B', status: 'Stable', action: 'Handoff Due' },
              { name: 'Mary Smith', room: '305-A', status: 'Critical', action: 'Check Vitals' },
              { name: 'Robert Johnson', room: '501-C', status: 'Improving', action: 'Discharge' },
            ].map((patient, i) => (
              <div key={i} style={{ padding: '1rem 1.25rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', background: '#ddd6fe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 600, color: '#6d28d9' }}>
                  {patient.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ color: 'white', fontSize: '0.9375rem', fontWeight: 500 }}>{patient.name}</p>
                  <p style={{ color: '#64748b', fontSize: '0.75rem' }}>Room {patient.room}</p>
                </div>
                <span style={{ 
                  padding: '0.25rem 0.75rem', 
                  background: patient.status === 'Critical' ? 'rgba(239,68,68,0.15)' : patient.status === 'Stable' ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)',
                  color: patient.status === 'Critical' ? '#ef4444' : patient.status === 'Stable' ? '#10b981' : '#f59e0b',
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 500
                }}>{patient.status}</span>
                <span style={{ color: '#6366f1', fontSize: '0.8125rem', cursor: 'pointer' }}>{patient.action} →</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ========================================
// MIRO USER RESEARCH
// ========================================

const MiroPersona = () => (
  <div style={{ background: '#fffef5', borderRadius: '12px', overflow: 'hidden', border: '2px solid #ffd02f' }}>
    <div style={{ background: '#ffd02f', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <MiroLogo size={24} />
      <span style={{ color: '#050038', fontWeight: 600 }}>User Persona: Primary User</span>
    </div>
    <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '220px 1fr', gap: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '140px', height: '140px', background: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)' }}>👩‍⚕️</div>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.25rem' }}>Sarah Wilson</h3>
        <p style={{ color: '#6d28d9', fontWeight: 600 }}>Charge Nurse</p>
        <div style={{ marginTop: '1rem', textAlign: 'left', background: '#f8fafc', borderRadius: '8px', padding: '1rem' }}>
          <p style={{ fontSize: '0.8125rem', marginBottom: '0.5rem' }}><strong>Age:</strong> 34</p>
          <p style={{ fontSize: '0.8125rem', marginBottom: '0.5rem' }}><strong>Experience:</strong> 8 years</p>
          <p style={{ fontSize: '0.8125rem', marginBottom: '0.5rem' }}><strong>Location:</strong> Baltimore, MD</p>
          <p style={{ fontSize: '0.8125rem' }}><strong>Shift:</strong> Day (7a-7p)</p>
        </div>
      </div>
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ background: '#dcfce7', borderRadius: '12px', padding: '1.25rem' }}>
            <h4 style={{ color: '#16a34a', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>🎯 Goals</h4>
            <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.8125rem', color: '#1e293b' }}>
              <li>Reduce handoff documentation time</li>
              <li>Ensure patient safety during transitions</li>
              <li>Minimize medication errors</li>
              <li>Improve team communication</li>
            </ul>
          </div>
          <div style={{ background: '#fee2e2', borderRadius: '12px', padding: '1.25rem' }}>
            <h4 style={{ color: '#dc2626', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>😤 Frustrations</h4>
            <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.8125rem', color: '#1e293b' }}>
              <li>Multiple systems for patient data</li>
              <li>Manual data re-entry wastes time</li>
              <li>Critical info gets lost in handoffs</li>
              <li>Outdated paper-based processes</li>
            </ul>
          </div>
        </div>
        <div style={{ background: '#f1f5f9', borderRadius: '12px', padding: '1.25rem', marginBottom: '1rem' }}>
          <h4 style={{ color: '#475569', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>📖 Bio</h4>
          <p style={{ fontSize: '0.875rem', color: '#1e293b', lineHeight: 1.6 }}>
            Sarah is a dedicated charge nurse managing a team of 12 in the cardiac care unit. She coordinates patient care during shift changes and ensures smooth handoffs. She's tech-savvy but frustrated with fragmented systems.
          </p>
        </div>
        <div style={{ background: '#fef3c7', borderRadius: '12px', padding: '1.25rem', borderLeft: '4px solid #f59e0b' }}>
          <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#92400e' }}>
            "I spend more time documenting than actually caring for my patients. There has to be a better way."
          </p>
        </div>
      </div>
    </div>
  </div>
);

const MiroUserFlow = () => (
  <div style={{ background: '#1a1a2e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 208, 47, 0.3)' }}>
    <div style={{ background: '#ffd02f', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <MiroLogo size={24} />
      <span style={{ color: '#050038', fontWeight: 600 }}>User Flow: Care Handoff Process</span>
    </div>
    <div style={{ padding: '2rem', background: 'white' }}>
      <svg viewBox="0 0 900 280" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#475569"/>
          </marker>
        </defs>
        
        {/* Start */}
        <circle cx="60" cy="140" r="30" fill="#10b981"/>
        <text x="60" y="145" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">Start</text>
        
        {/* Step 1 */}
        <rect x="130" y="110" width="120" height="60" rx="8" fill="#6366f1"/>
        <text x="190" y="135" textAnchor="middle" fill="white" fontSize="11" fontWeight="500">Select Patient</text>
        <text x="190" y="150" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9">from list</text>
        <line x1="90" y1="140" x2="125" y2="140" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)"/>
        
        {/* Step 2 */}
        <rect x="290" y="110" width="120" height="60" rx="8" fill="#6366f1"/>
        <text x="350" y="135" textAnchor="middle" fill="white" fontSize="11" fontWeight="500">Review Status</text>
        <text x="350" y="150" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9">vitals & notes</text>
        <line x1="250" y1="140" x2="285" y2="140" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)"/>
        
        {/* Decision */}
        <polygon points="510,140 470,100 430,140 470,180" fill="#f59e0b"/>
        <text x="470" y="135" textAnchor="middle" fill="white" fontSize="10" fontWeight="500">Complete?</text>
        <line x1="410" y1="140" x2="430" y2="140" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)"/>
        
        {/* No path */}
        <text x="470" y="210" textAnchor="middle" fill="#dc2626" fontSize="10" fontWeight="bold">No</text>
        <line x1="470" y1="180" x2="470" y2="230" stroke="#dc2626" strokeWidth="2"/>
        <rect x="410" y="230" width="120" height="40" rx="6" fill="#fee2e2" stroke="#dc2626"/>
        <text x="470" y="255" textAnchor="middle" fill="#dc2626" fontSize="10">Add Missing Info</text>
        <line x1="410" y1="250" x2="350" y2="250" stroke="#dc2626" strokeWidth="2"/>
        <line x1="350" y1="250" x2="350" y2="175" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrow)"/>
        
        {/* Yes path */}
        <text x="530" y="125" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">Yes</text>
        
        {/* Step 3 */}
        <rect x="560" y="110" width="120" height="60" rx="8" fill="#6366f1"/>
        <text x="620" y="135" textAnchor="middle" fill="white" fontSize="11" fontWeight="500">Assign Nurse</text>
        <text x="620" y="150" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9">incoming shift</text>
        <line x1="510" y1="140" x2="555" y2="140" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)"/>
        
        {/* Step 4 */}
        <rect x="720" y="110" width="120" height="60" rx="8" fill="#6366f1"/>
        <text x="780" y="135" textAnchor="middle" fill="white" fontSize="11" fontWeight="500">Confirm</text>
        <text x="780" y="150" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="9">handoff</text>
        <line x1="680" y1="140" x2="715" y2="140" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)"/>
        
        {/* End */}
        <circle cx="880" cy="140" r="25" fill="#10b981"/>
        <text x="880" y="145" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">End</text>
        <line x1="840" y1="140" x2="855" y2="140" stroke="#475569" strokeWidth="2"/>
        
        {/* Swimlane labels */}
        <rect x="10" y="20" width="80" height="25" rx="4" fill="#e0e7ff"/>
        <text x="50" y="37" textAnchor="middle" fill="#4338ca" fontSize="10" fontWeight="600">Outgoing</text>
        <rect x="10" y="50" width="80" height="25" rx="4" fill="#fce7f3"/>
        <text x="50" y="67" textAnchor="middle" fill="#be185d" fontSize="10" fontWeight="600">Incoming</text>
      </svg>
    </div>
  </div>
);

// ========================================
// ACCESSIBILITY SECTION
// ========================================

const AccessibilityAudit = () => (
  <div style={{ background: '#0d1117', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
    <div style={{ background: 'linear-gradient(90deg, #10b981, #059669)', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.5rem' }}>♿</span>
        <span style={{ color: 'white', fontWeight: 600 }}>Accessibility Audit - WCAG 2.1 AA</span>
      </div>
      <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', fontSize: '0.75rem', color: 'white' }}>Score: 98/100</span>
    </div>
    <div style={{ padding: '1.5rem' }}>
      {/* Color Contrast */}
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem' }}>Color Contrast Ratios</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {[
            { name: 'Primary Text', fg: '#ffffff', bg: '#0f172a', ratio: '15.8:1', pass: true },
            { name: 'Secondary Text', fg: '#94a3b8', bg: '#0f172a', ratio: '7.4:1', pass: true },
            { name: 'Success State', fg: '#10b981', bg: '#0f172a', ratio: '5.2:1', pass: true },
            { name: 'Error State', fg: '#ef4444', bg: '#0f172a', ratio: '4.6:1', pass: true },
          ].map((c) => (
            <div key={c.name} style={{ background: '#161b22', borderRadius: '8px', padding: '1rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <div style={{ width: '24px', height: '24px', background: c.fg, borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)' }}></div>
                <div style={{ width: '24px', height: '24px', background: c.bg, borderRadius: '4px', border: '1px solid rgba(255,255,255,0.2)' }}></div>
              </div>
              <p style={{ color: '#c9d1d9', fontSize: '0.8125rem', marginBottom: '0.25rem' }}>{c.name}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ color: '#8b949e', fontSize: '0.75rem' }}>{c.ratio}</span>
                <span style={{ color: '#10b981', fontSize: '0.75rem' }}>✓ Pass</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Keyboard Navigation */}
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem' }}>Keyboard Navigation</h4>
        <div style={{ background: '#161b22', borderRadius: '8px', padding: '1rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {[
            '✓ All interactive elements focusable',
            '✓ Visible focus indicators on all inputs',
            '✓ Logical tab order through forms',
            '✓ Skip-to-content link available',
            '✓ Dropdown menus keyboard accessible',
            '✓ Modal dialogs trap focus correctly',
          ].map((item) => (
            <p key={item} style={{ color: '#10b981', fontSize: '0.875rem' }}>{item}</p>
          ))}
        </div>
      </div>
      
      {/* Screen Reader */}
      <div>
        <h4 style={{ color: 'white', marginBottom: '1rem', fontSize: '1rem' }}>Screen Reader Support</h4>
        <div style={{ background: '#161b22', borderRadius: '8px', padding: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {[
              { label: 'ARIA Labels', status: 'Complete', percent: 100 },
              { label: 'Alt Text', status: 'Complete', percent: 100 },
              { label: 'Landmark Regions', status: 'Complete', percent: 100 },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#c9d1d9', fontSize: '0.8125rem' }}>{item.label}</span>
                  <span style={{ color: '#10b981', fontSize: '0.75rem' }}>{item.status}</span>
                </div>
                <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${item.percent}%`, height: '100%', background: '#10b981', borderRadius: '3px' }}></div>
                </div>
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
    <>
      <header className="page-hero" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)' }}>
        <div className="page-hero-content">
          <span style={{ 
            display: 'inline-block',
            padding: '0.5rem 1rem',
            background: 'rgba(16, 185, 129, 0.2)',
            borderRadius: '100px',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: '#10b981',
            marginBottom: '1rem'
          }}>HEALTHCARE</span>
          <h1>CareFlow: Clinical Workflow Management System</h1>
          <p className="page-subtitle">
            A comprehensive patient management platform designed for healthcare professionals,
            featuring real-time handoffs, medication tracking, and intelligent scheduling.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '8px', fontSize: '0.875rem', color: '#a5b4fc' }}>16 Weeks</span>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '8px', fontSize: '0.875rem', color: '#a5b4fc' }}>Lead Product Designer</span>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(99, 102, 241, 0.2)', borderRadius: '8px', fontSize: '0.875rem', color: '#a5b4fc' }}>LifeBridge Health</span>
          </div>
        </div>
      </header>

      {/* Overview */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', marginBottom: '1.5rem' }}>Project Overview</h2>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                CareFlow is a comprehensive clinical workflow management system designed to streamline 
                patient care coordination, reduce administrative burden, and improve outcomes through 
                better information access and collaboration.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                As the Lead Product Designer, I was responsible for the end-to-end design process, 
                from initial research and roadmap visualization in Airtable to high-fidelity prototypes 
                in Figma and user flow documentation in Miro.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', borderRadius: '16px', padding: '1.5rem', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Tools Used</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <AirtableLogo size={28} />
                  <span>Airtable - Product Roadmap</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <FigmaLogo size={28} />
                  <span>Figma - Wireframes & Design</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MiroLogo size={28} />
                  <span>Miro - User Research</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airtable Section */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <AirtableLogo size={40} />
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>Product Roadmap in Airtable</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Real product backlog with linked records, status tracking, and timeline views</p>
            </div>
          </div>
          <AirtableProductRoadmap />
          
          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Sprint Board - Kanban View</h3>
            <AirtableKanbanBoard />
          </div>
        </div>
      </section>

      {/* Wireframes Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <FigmaLogo size={40} />
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>Wireframes in Figma</h2>
              <p style={{ color: 'var(--text-secondary)' }}>From sketches to production-ready designs</p>
            </div>
          </div>
          
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Low-Fidelity Wireframe</h3>
            <FigmaWireframeLowFidelity />
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>High-Fidelity Mockup</h3>
            <FigmaWireframeHighFidelity />
          </div>
        </div>
      </section>

      {/* User Research Section */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <MiroLogo size={40} />
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>User Research in Miro</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Personas, empathy maps, and user flow documentation</p>
            </div>
          </div>
          
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>User Persona</h3>
            <MiroPersona />
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Care Handoff User Flow</h3>
            <MiroUserFlow />
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '2rem' }}>Accessibility Compliance</h2>
          <AccessibilityAudit />
        </div>
      </section>

      {/* Results */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>Results & Impact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { value: '40%', label: 'Reduction in handoff time', icon: '⏱️' },
              { value: '94%', label: 'User adoption rate', icon: '📈' },
              { value: '2.5hrs', label: 'Saved per nurse/day', icon: '⏰' },
              { value: '18%', label: 'Fewer no-show appointments', icon: '✅' },
            ].map((stat) => (
              <div key={stat.label} style={{ background: 'var(--bg-card)', borderRadius: '16px', padding: '2rem', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>{stat.icon}</span>
                <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: '#6366f1', display: 'block', marginBottom: '0.5rem' }}>{stat.value}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Explore More Projects</h2>
        <p>See how I apply these skills across different industries</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn-primary">View All Projects</Link>
          <Link to="/contact" className="btn-secondary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}

export default HealthcareProject;

