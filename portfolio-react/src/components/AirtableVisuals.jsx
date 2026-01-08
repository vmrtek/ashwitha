// Airtable Visual Components - Real Airtable-style visualizations

export const AirtableTimeline = ({ data }) => {
  const quarters = ['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024', 'Q1 2025', 'Q2 2025'];
  const features = data || [
    { name: 'Patient Dashboard', team: 'Frontend', start: 0, duration: 2, status: 'complete', priority: 'high' },
    { name: 'Care Handoff Module', team: 'Backend', start: 1, duration: 3, status: 'complete', priority: 'high' },
    { name: 'Discharge Planning', team: 'Frontend', start: 2, duration: 2, status: 'in-progress', priority: 'medium' },
    { name: 'Notification System', team: 'Backend', start: 3, duration: 2, status: 'in-progress', priority: 'high' },
    { name: 'Mobile App', team: 'Mobile', start: 4, duration: 2, status: 'planned', priority: 'medium' },
    { name: 'Analytics Dashboard', team: 'Data', start: 4, duration: 2, status: 'planned', priority: 'low' },
    { name: 'API Integration', team: 'Backend', start: 1, duration: 4, status: 'complete', priority: 'high' },
    { name: 'User Management', team: 'Frontend', start: 3, duration: 2, status: 'in-progress', priority: 'medium' },
  ];

  const statusColors = {
    'complete': '#10b981',
    'in-progress': '#f59e0b',
    'planned': '#6366f1'
  };

  const priorityIcons = {
    'high': '🔴',
    'medium': '🟡',
    'low': '🟢'
  };

  return (
    <div style={{ 
      background: '#1a1a2e', 
      borderRadius: '12px', 
      overflow: 'hidden',
      border: '1px solid rgba(24, 191, 255, 0.2)'
    }}>
      {/* Airtable Header */}
      <div style={{ 
        background: '#18bfff', 
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="white" strokeWidth="2"/>
          <line x1="3" y1="9" x2="21" y2="9" stroke="white" strokeWidth="2"/>
          <line x1="9" y1="3" x2="9" y2="21" stroke="white" strokeWidth="2"/>
        </svg>
        <span style={{ color: 'white', fontWeight: 600 }}>Product Roadmap - Timeline View</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.75rem', color: 'white' }}>
            8 Features
          </span>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.75rem', color: 'white' }}>
            6 Quarters
          </span>
        </div>
      </div>

      {/* Timeline Header */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '200px repeat(6, 1fr)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        background: '#12121a'
      }}>
        <div style={{ padding: '0.75rem 1rem', fontWeight: 600, fontSize: '0.75rem', color: '#94a3b8' }}>
          Feature Name
        </div>
        {quarters.map(q => (
          <div key={q} style={{ 
            padding: '0.75rem 0.5rem', 
            textAlign: 'center', 
            fontSize: '0.75rem', 
            color: '#94a3b8',
            borderLeft: '1px solid rgba(255,255,255,0.05)'
          }}>
            {q}
          </div>
        ))}
      </div>

      {/* Timeline Rows */}
      {features.map((feature, idx) => (
        <div 
          key={idx}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '200px repeat(6, 1fr)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            alignItems: 'center',
            background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)'
          }}
        >
          <div style={{ 
            padding: '0.75rem 1rem', 
            fontSize: '0.8125rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span>{priorityIcons[feature.priority]}</span>
            <span>{feature.name}</span>
          </div>
          <div style={{ 
            gridColumn: `${feature.start + 2} / span ${feature.duration}`,
            padding: '0.5rem',
          }}>
            <div style={{
              background: statusColors[feature.status],
              borderRadius: '4px',
              padding: '0.375rem 0.75rem',
              fontSize: '0.6875rem',
              color: 'white',
              fontWeight: 500,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>{feature.team}</span>
              <span style={{ opacity: 0.8 }}>{feature.status}</span>
            </div>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div style={{ 
        padding: '1rem 1.5rem', 
        display: 'flex', 
        gap: '1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        background: '#12121a'
      }}>
        {Object.entries(statusColors).map(([status, color]) => (
          <div key={status} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '12px', height: '12px', borderRadius: '2px', background: color }} />
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'capitalize' }}>{status.replace('-', ' ')}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AirtableKanban = ({ data }) => {
  const columns = [
    { 
      name: 'Backlog', 
      color: '#64748b',
      items: [
        { title: 'Push Notifications', priority: 'medium', assignee: 'AR' },
        { title: 'Dark Mode Support', priority: 'low', assignee: 'JK' },
      ]
    },
    { 
      name: 'In Progress', 
      color: '#f59e0b',
      items: [
        { title: 'Patient Dashboard v2', priority: 'high', assignee: 'AR' },
        { title: 'Care Handoff Flow', priority: 'high', assignee: 'MJ' },
        { title: 'Discharge Checklist', priority: 'medium', assignee: 'AR' },
      ]
    },
    { 
      name: 'Review', 
      color: '#8b5cf6',
      items: [
        { title: 'Nurse Station UI', priority: 'high', assignee: 'JK' },
        { title: 'Alert System', priority: 'medium', assignee: 'AR' },
      ]
    },
    { 
      name: 'Done', 
      color: '#10b981',
      items: [
        { title: 'Login Flow', priority: 'high', assignee: 'AR' },
        { title: 'User Onboarding', priority: 'medium', assignee: 'MJ' },
        { title: 'Settings Page', priority: 'low', assignee: 'JK' },
        { title: 'Profile Management', priority: 'low', assignee: 'AR' },
      ]
    },
  ];

  const priorityColors = {
    'high': '#ef4444',
    'medium': '#f59e0b',
    'low': '#10b981'
  };

  return (
    <div style={{ 
      background: '#1a1a2e', 
      borderRadius: '12px', 
      overflow: 'hidden',
      border: '1px solid rgba(24, 191, 255, 0.2)'
    }}>
      {/* Header */}
      <div style={{ 
        background: '#18bfff', 
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="3" y="3" width="5" height="18" rx="1"/>
          <rect x="10" y="3" width="5" height="12" rx="1"/>
          <rect x="17" y="3" width="5" height="8" rx="1"/>
        </svg>
        <span style={{ color: 'white', fontWeight: 600 }}>Sprint Board - Kanban View</span>
      </div>

      {/* Kanban Board */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        padding: '1.5rem'
      }}>
        {columns.map((column) => (
          <div key={column.name}>
            {/* Column Header */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              marginBottom: '1rem',
              paddingBottom: '0.75rem',
              borderBottom: `2px solid ${column.color}`
            }}>
              <span style={{ 
                width: '8px', 
                height: '8px', 
                borderRadius: '50%', 
                background: column.color 
              }} />
              <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>{column.name}</span>
              <span style={{ 
                marginLeft: 'auto',
                background: 'rgba(255,255,255,0.1)',
                padding: '0.125rem 0.5rem',
                borderRadius: '100px',
                fontSize: '0.75rem',
                color: '#94a3b8'
              }}>{column.items.length}</span>
            </div>

            {/* Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {column.items.map((item, idx) => (
                <div 
                  key={idx}
                  style={{
                    background: '#12121a',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px',
                    padding: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <div style={{ 
                      width: '6px', 
                      height: '6px', 
                      borderRadius: '50%', 
                      background: priorityColors[item.priority] 
                    }} />
                    <span style={{ fontSize: '0.6875rem', color: '#94a3b8', textTransform: 'uppercase' }}>
                      {item.priority}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>{item.title}</p>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.625rem',
                      fontWeight: 600,
                      color: 'white'
                    }}>{item.assignee}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AirtableTable = ({ data }) => {
  const records = data || [
    { id: 'FTR-001', feature: 'Patient Dashboard', status: 'Complete', priority: 'High', team: 'Frontend', stories: 12, sprint: 'S1' },
    { id: 'FTR-002', feature: 'Care Handoff Module', status: 'Complete', priority: 'High', team: 'Backend', stories: 8, sprint: 'S2' },
    { id: 'FTR-003', feature: 'Discharge Planning', status: 'In Progress', priority: 'High', team: 'Frontend', stories: 15, sprint: 'S3' },
    { id: 'FTR-004', feature: 'Notification System', status: 'In Progress', priority: 'Medium', team: 'Backend', stories: 6, sprint: 'S3' },
    { id: 'FTR-005', feature: 'Mobile Alerts', status: 'Planned', priority: 'Medium', team: 'Mobile', stories: 10, sprint: 'S4' },
    { id: 'FTR-006', feature: 'Analytics Dashboard', status: 'Planned', priority: 'Low', team: 'Data', stories: 8, sprint: 'S5' },
  ];

  const statusColors = {
    'Complete': '#10b981',
    'In Progress': '#f59e0b',
    'Planned': '#6366f1'
  };

  const priorityColors = {
    'High': '#ef4444',
    'Medium': '#f59e0b',
    'Low': '#10b981'
  };

  return (
    <div style={{ 
      background: '#1a1a2e', 
      borderRadius: '12px', 
      overflow: 'hidden',
      border: '1px solid rgba(24, 191, 255, 0.2)'
    }}>
      {/* Header */}
      <div style={{ 
        background: '#18bfff', 
        padding: '1rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="3" y1="15" x2="21" y2="15"/>
          <line x1="9" y1="3" x2="9" y2="21"/>
        </svg>
        <span style={{ color: 'white', fontWeight: 600 }}>Features Table - Grid View</span>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
          <span style={{ background: 'rgba(255,255,255,0.2)', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.75rem', color: 'white' }}>
            {records.length} Records
          </span>
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#12121a' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>ID</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>Feature</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>Status</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>Priority</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>Team</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>Stories</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>Sprint</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, idx) => (
              <tr 
                key={record.id}
                style={{ 
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  background: idx % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)'
                }}
              >
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#18bfff' }}>{record.id}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem' }}>{record.feature}</td>
                <td style={{ padding: '0.75rem 1rem' }}>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '100px',
                    fontSize: '0.6875rem',
                    background: `${statusColors[record.status]}20`,
                    color: statusColors[record.status]
                  }}>{record.status}</span>
                </td>
                <td style={{ padding: '0.75rem 1rem' }}>
                  <span style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: '100px',
                    fontSize: '0.6875rem',
                    background: `${priorityColors[record.priority]}20`,
                    color: priorityColors[record.priority]
                  }}>{record.priority}</span>
                </td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#94a3b8' }}>{record.team}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem' }}>
                  <span style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    🔗 {record.stories}
                  </span>
                </td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#94a3b8' }}>{record.sprint}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const AirtableLinkedRecords = () => {
  return (
    <div style={{ 
      background: '#1a1a2e', 
      borderRadius: '12px', 
      padding: '2rem',
      border: '1px solid rgba(24, 191, 255, 0.2)'
    }}>
      <h4 style={{ color: '#18bfff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#18bfff" strokeWidth="2">
          <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
        </svg>
        Linked Records Schema
      </h4>
      
      <svg viewBox="0 0 600 200" style={{ width: '100%', height: 'auto' }}>
        {/* Features Table */}
        <rect x="10" y="60" width="120" height="80" rx="8" fill="#18bfff" fillOpacity="0.1" stroke="#18bfff" strokeWidth="2"/>
        <text x="70" y="90" textAnchor="middle" fill="#18bfff" fontSize="12" fontWeight="600">Features</text>
        <text x="70" y="110" textAnchor="middle" fill="#94a3b8" fontSize="10">150+ records</text>
        <text x="70" y="125" textAnchor="middle" fill="#64748b" fontSize="9">Primary Key: FTR-ID</text>

        {/* User Stories Table */}
        <rect x="180" y="20" width="120" height="70" rx="8" fill="#a259ff" fillOpacity="0.1" stroke="#a259ff" strokeWidth="2"/>
        <text x="240" y="45" textAnchor="middle" fill="#a259ff" fontSize="12" fontWeight="600">User Stories</text>
        <text x="240" y="65" textAnchor="middle" fill="#94a3b8" fontSize="10">320+ records</text>
        <text x="240" y="80" textAnchor="middle" fill="#64748b" fontSize="9">Linked: Features</text>

        {/* Requirements Table */}
        <rect x="180" y="110" width="120" height="70" rx="8" fill="#ffd02f" fillOpacity="0.1" stroke="#ffd02f" strokeWidth="2"/>
        <text x="240" y="135" textAnchor="middle" fill="#ffd02f" fontSize="12" fontWeight="600">Requirements</text>
        <text x="240" y="155" textAnchor="middle" fill="#94a3b8" fontSize="10">200+ records</text>
        <text x="240" y="170" textAnchor="middle" fill="#64748b" fontSize="9">Linked: Stories</text>

        {/* Sprints Table */}
        <rect x="350" y="40" width="110" height="60" rx="8" fill="#10b981" fillOpacity="0.1" stroke="#10b981" strokeWidth="2"/>
        <text x="405" y="62" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="600">Sprints</text>
        <text x="405" y="82" textAnchor="middle" fill="#94a3b8" fontSize="10">24 records</text>

        {/* Releases Table */}
        <rect x="350" y="120" width="110" height="60" rx="8" fill="#ef4444" fillOpacity="0.1" stroke="#ef4444" strokeWidth="2"/>
        <text x="405" y="142" textAnchor="middle" fill="#ef4444" fontSize="12" fontWeight="600">Releases</text>
        <text x="405" y="162" textAnchor="middle" fill="#94a3b8" fontSize="10">6 records</text>

        {/* Team Members */}
        <rect x="500" y="70" width="90" height="60" rx="8" fill="#6366f1" fillOpacity="0.1" stroke="#6366f1" strokeWidth="2"/>
        <text x="545" y="92" textAnchor="middle" fill="#6366f1" fontSize="12" fontWeight="600">Team</text>
        <text x="545" y="112" textAnchor="middle" fill="#94a3b8" fontSize="10">12 members</text>

        {/* Connection Lines */}
        <line x1="130" y1="85" x2="180" y2="55" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4"/>
        <line x1="130" y1="115" x2="180" y2="145" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4"/>
        <line x1="300" y1="55" x2="350" y2="70" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4"/>
        <line x1="300" y1="145" x2="350" y2="150" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4"/>
        <line x1="460" y1="70" x2="500" y2="90" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4"/>
        <line x1="460" y1="150" x2="500" y2="110" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="4"/>

        {/* Relationship Labels */}
        <text x="155" y="60" fill="#94a3b8" fontSize="8">1:many</text>
        <text x="155" y="140" fill="#94a3b8" fontSize="8">many:many</text>
      </svg>
    </div>
  );
};

