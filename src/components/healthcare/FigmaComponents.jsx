import { useState } from 'react';
import { FigmaLogo } from '../Icons';

// ========================================
// FIGMA LOW-FIDELITY WIREFRAME
// ========================================
export const FigmaLowFidelity = () => (
  <div style={{ background: '#1e1e1e', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(162, 89, 255, 0.3)' }}>
    <div style={{ background: '#2c2c2c', padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #3c3c3c' }}>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <span style={{ width: '14px', height: '14px', background: '#ff5f57', borderRadius: '50%' }}></span>
        <span style={{ width: '14px', height: '14px', background: '#febc2e', borderRadius: '50%' }}></span>
        <span style={{ width: '14px', height: '14px', background: '#28c840', borderRadius: '50%' }}></span>
      </div>
      <span style={{ color: '#8b8b8b', fontSize: '0.8125rem', marginLeft: '0.5rem' }}>Patient_Dashboard_LowFi.fig</span>
      <FigmaLogo size={20} style={{ marginLeft: 'auto' }} />
    </div>
    <div style={{ padding: '2rem', background: '#f8f9fa' }}>
      <svg viewBox="0 0 900 550" style={{ width: '100%', height: 'auto' }} role="img" aria-label="Low fidelity wireframe of patient dashboard">
        <title>Low Fidelity Wireframe - Patient Dashboard</title>
        
        {/* Background Grid */}
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e0e0e0" strokeWidth="0.5"/>
        </pattern>
        <rect width="900" height="550" fill="url(#grid)"/>
        
        {/* Header */}
        <rect x="20" y="20" width="860" height="60" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="8,4" rx="4"/>
        <text x="50" y="55" fontSize="14" fill="#666" fontFamily="sans-serif">Header / Navigation Bar</text>
        <rect x="750" y="35" width="110" height="30" fill="#ddd" rx="15"/>
        <text x="780" y="55" fontSize="11" fill="#888">User Profile</text>
        
        {/* Sidebar */}
        <rect x="20" y="100" width="180" height="430" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="8,4" rx="4"/>
        <text x="40" y="130" fontSize="12" fill="#666" fontWeight="bold">Navigation</text>
        {['Dashboard', 'Patients', 'Handoffs', 'Schedule', 'Medications', 'Reports', 'Settings'].map((item, i) => (
          <g key={item}>
            <rect x="35" y={150 + i * 38} width="150" height="28" fill={i === 0 ? '#bbb' : '#e5e5e5'} rx="4"/>
            <text x="55" y={168 + i * 38} fontSize="11" fill={i === 0 ? '#333' : '#666'}>{item}</text>
          </g>
        ))}
        
        {/* Main Content Area */}
        <rect x="220" y="100" width="660" height="430" fill="none" stroke="#999" strokeWidth="2" strokeDasharray="8,4" rx="4"/>
        
        {/* Stats Cards */}
        <text x="240" y="125" fontSize="12" fill="#666" fontWeight="bold">Quick Stats</text>
        {[
          { label: 'Total Patients', value: '124' },
          { label: 'Pending Handoffs', value: '8' },
          { label: 'Discharges Today', value: '15' },
          { label: 'Alerts', value: '3' }
        ].map((stat, i) => (
          <g key={stat.label}>
            <rect x={240 + i * 155} y="140" width="140" height="80" fill="#e8e8e8" rx="8"/>
            <text x={260 + i * 155} y="175" fontSize="10" fill="#888">{stat.label}</text>
            <text x={260 + i * 155} y="205" fontSize="24" fill="#333" fontWeight="bold">{stat.value}</text>
          </g>
        ))}
        
        {/* Patient List Section */}
        <rect x="240" y="240" width="620" height="270" fill="#f0f0f0" stroke="#ccc" rx="8"/>
        <text x="260" y="270" fontSize="14" fill="#333" fontWeight="bold">Priority Patients</text>
        <line x1="240" y1="285" x2="860" y2="285" stroke="#ddd" strokeWidth="1"/>
        
        {/* Table Headers */}
        <text x="270" y="305" fontSize="10" fill="#888" fontWeight="bold">PATIENT</text>
        <text x="420" y="305" fontSize="10" fill="#888" fontWeight="bold">ROOM</text>
        <text x="520" y="305" fontSize="10" fill="#888" fontWeight="bold">STATUS</text>
        <text x="640" y="305" fontSize="10" fill="#888" fontWeight="bold">ACTION</text>
        <text x="760" y="305" fontSize="10" fill="#888" fontWeight="bold">PRIORITY</text>
        
        {/* Patient Rows */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i}>
            <rect x="250" y={320 + i * 38} width="600" height="34" fill={i % 2 === 0 ? '#fff' : '#f8f8f8'} rx="4"/>
            <circle cx="280" cy={337 + i * 38} r="14" fill="#ddd"/>
            <rect x="305" y={328 + i * 38} width="100" height="10" fill="#ccc" rx="2"/>
            <rect x="305" y={342 + i * 38} width="60" height="7" fill="#e0e0e0" rx="2"/>
            <text x="430" y={342 + i * 38} fontSize="11" fill="#666">{['412-B', '305-A', '501-C', '203-D', '418-A'][i]}</text>
            <rect x="520" y={328 + i * 38} width="70" height="20" fill={['#dcfce7', '#fee2e2', '#fef3c7', '#dcfce7', '#e0f2fe'][i]} rx="10"/>
            <text x="535" y={342 + i * 38} fontSize="9" fill="#666">{['Stable', 'Critical', 'Improving', 'Stable', 'Pending'][i]}</text>
            <rect x="640" y={328 + i * 38} width="80" height="20" fill="#e0e7ff" rx="4"/>
            <text x="652" y={342 + i * 38} fontSize="9" fill="#4f46e5">{['Handoff', 'Check Vitals', 'Discharge', 'Update', 'Review'][i]}</text>
            <rect x="760" y={330 + i * 38} width="8" height="16" fill={['#10b981', '#ef4444', '#f59e0b', '#10b981', '#6366f1'][i]} rx="2"/>
          </g>
        ))}
        
        {/* Annotations */}
        <circle cx="200" cy="50" r="16" fill="#6366f1"/>
        <text x="200" y="55" fontSize="13" fill="white" textAnchor="middle" fontWeight="bold">1</text>
        <circle cx="350" cy="180" r="16" fill="#6366f1"/>
        <text x="350" y="185" fontSize="13" fill="white" textAnchor="middle" fontWeight="bold">2</text>
        <circle cx="550" cy="390" r="16" fill="#6366f1"/>
        <text x="550" y="395" fontSize="13" fill="white" textAnchor="middle" fontWeight="bold">3</text>
      </svg>
      
      {/* Annotation Legend */}
      <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} role="list" aria-label="Design annotations">
        {[
          { num: 1, title: 'Global Navigation', desc: 'Persistent header with search, notifications, and user profile. Maintains context across all pages.' },
          { num: 2, title: 'Quick Stats Dashboard', desc: 'At-a-glance KPIs for daily workflow prioritization. Real-time updates every 30 seconds.' },
          { num: 3, title: 'Priority Patient List', desc: 'Sortable, filterable list with color-coded status. Click to expand patient details.' },
        ].map((a) => (
          <div key={a.num} style={{ display: 'flex', gap: '1rem', alignItems: 'start' }} role="listitem">
            <span style={{ width: '32px', height: '32px', background: '#6366f1', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1rem', fontWeight: 700, flexShrink: 0 }}>{a.num}</span>
            <div>
              <strong style={{ fontSize: '0.9375rem', color: '#1e293b', display: 'block', marginBottom: '0.25rem' }}>{a.title}</strong>
              <p style={{ fontSize: '0.8125rem', color: '#64748b', lineHeight: 1.5, margin: 0 }}>{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ========================================
// FIGMA HIGH-FIDELITY MOCKUP
// ========================================
export const FigmaHighFidelity = () => (
  <div style={{ background: '#1e1e1e', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(162, 89, 255, 0.3)', boxShadow: '0 20px 60px rgba(162, 89, 255, 0.15)' }}>
    <div style={{ background: '#2c2c2c', padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #3c3c3c' }}>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <span style={{ width: '14px', height: '14px', background: '#ff5f57', borderRadius: '50%' }}></span>
        <span style={{ width: '14px', height: '14px', background: '#febc2e', borderRadius: '50%' }}></span>
        <span style={{ width: '14px', height: '14px', background: '#28c840', borderRadius: '50%' }}></span>
      </div>
      <span style={{ color: '#8b8b8b', fontSize: '0.8125rem', marginLeft: '0.5rem' }}>CareFlow_Dashboard_HighFi.fig</span>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
        <span style={{ padding: '0.25rem 0.5rem', background: '#10b981', borderRadius: '4px', fontSize: '0.6875rem', color: 'white' }}>Production Ready</span>
        <FigmaLogo size={20} />
      </div>
    </div>
    
    {/* Actual High-Fidelity UI */}
    <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', display: 'flex', minHeight: '550px' }}>
      {/* Sidebar */}
      <div style={{ width: '240px', background: '#0f172a', borderRight: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem 0' }}>
        <div style={{ padding: '0 1.5rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'white', fontSize: '1.5rem' }}>🏥</span>
            </div>
            <div>
              <span style={{ color: 'white', fontWeight: 700, fontSize: '1.125rem', display: 'block' }}>CareFlow</span>
              <span style={{ color: '#64748b', fontSize: '0.6875rem' }}>LifeBridge Health</span>
            </div>
          </div>
        </div>
        
        {[
          { icon: '📊', label: 'Dashboard', active: true, badge: null },
          { icon: '👥', label: 'Patients', active: false, badge: '124' },
          { icon: '🔄', label: 'Handoffs', active: false, badge: '8' },
          { icon: '📅', label: 'Schedule', active: false, badge: null },
          { icon: '💊', label: 'Medications', active: false, badge: '3' },
          { icon: '📋', label: 'Reports', active: false, badge: null },
          { icon: '⚙️', label: 'Settings', active: false, badge: null },
        ].map((item) => (
          <div key={item.label} style={{ 
            padding: '0.875rem 1.5rem', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.875rem',
            background: item.active ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
            borderLeft: item.active ? '3px solid #6366f1' : '3px solid transparent',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }} tabIndex={0} role="button" aria-current={item.active ? 'page' : undefined}>
            <span style={{ fontSize: '1.125rem' }}>{item.icon}</span>
            <span style={{ color: item.active ? 'white' : '#94a3b8', fontSize: '0.9375rem', flex: 1 }}>{item.label}</span>
            {item.badge && (
              <span style={{ padding: '0.125rem 0.5rem', background: item.label === 'Medications' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(99, 102, 241, 0.2)', color: item.label === 'Medications' ? '#ef4444' : '#a5b4fc', borderRadius: '100px', fontSize: '0.6875rem', fontWeight: 600 }}>{item.badge}</span>
            )}
          </div>
        ))}
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1, padding: '2rem 2.5rem', overflowY: 'auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
          <div>
            <p style={{ color: '#94a3b8', fontSize: '0.9375rem', marginBottom: '0.25rem' }}>Good morning,</p>
            <h1 style={{ color: 'white', fontSize: '1.75rem', fontWeight: 700, margin: 0 }}>Dr. Sarah Wilson</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <div style={{ position: 'relative', cursor: 'pointer' }} tabIndex={0} role="button" aria-label="Notifications, 3 unread">
              <span style={{ fontSize: '1.5rem' }}>🔔</span>
              <span style={{ position: 'absolute', top: '-6px', right: '-6px', width: '20px', height: '20px', background: '#ef4444', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6875rem', color: 'white', fontWeight: 700 }}>3</span>
            </div>
            <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 700, color: '#6d28d9', cursor: 'pointer' }} tabIndex={0} role="button" aria-label="User profile">SW</div>
          </div>
        </div>
        
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {[
            { label: 'Total Patients', value: '124', change: '+12', trend: 'up', color: '#6366f1' },
            { label: 'Pending Handoffs', value: '8', change: '+3', trend: 'up', color: '#f59e0b' },
            { label: 'Discharges Today', value: '15', change: '+5', trend: 'up', color: '#10b981' },
            { label: 'Critical Alerts', value: '3', change: '+1', trend: 'up', color: '#ef4444' },
          ].map((stat) => (
            <div key={stat.label} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.08)', transition: 'transform 0.2s' }}>
              <p style={{ color: '#94a3b8', fontSize: '0.8125rem', marginBottom: '0.75rem' }}>{stat.label}</p>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                <span style={{ fontSize: '2.25rem', fontWeight: 800, color: 'white' }}>{stat.value}</span>
                <span style={{ fontSize: '0.8125rem', color: stat.color, fontWeight: 600 }}>{stat.change}</span>
              </div>
              <div style={{ marginTop: '1rem', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '70%', height: '100%', background: stat.color, borderRadius: '2px' }}></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Patient List */}
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ color: 'white', fontSize: '1.125rem', fontWeight: 700, margin: 0 }}>Priority Patients</h3>
            <button style={{ padding: '0.5rem 1rem', background: '#6366f1', border: 'none', borderRadius: '8px', color: 'white', fontSize: '0.875rem', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>+</span> Add Patient
            </button>
          </div>
          {[
            { name: 'John Doe', room: '412-B', status: 'Stable', statusColor: '#10b981', action: 'Handoff Due', time: '2h ago' },
            { name: 'Mary Smith', room: '305-A', status: 'Critical', statusColor: '#ef4444', action: 'Check Vitals', time: '15m ago' },
            { name: 'Robert Johnson', room: '501-C', status: 'Improving', statusColor: '#f59e0b', action: 'Discharge', time: '1h ago' },
            { name: 'Emily Davis', room: '203-D', status: 'Stable', statusColor: '#10b981', action: 'Update Notes', time: '3h ago' },
          ].map((patient, i) => (
            <div key={i} style={{ padding: '1.25rem 1.5rem', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none', display: 'flex', alignItems: 'center', gap: '1.25rem', transition: 'background 0.2s', cursor: 'pointer' }} tabIndex={0} role="button" aria-label={`View ${patient.name}'s details`}>
              <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 700, color: '#6d28d9' }}>
                {patient.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ color: 'white', fontSize: '1rem', fontWeight: 600, marginBottom: '0.25rem' }}>{patient.name}</p>
                <p style={{ color: '#64748b', fontSize: '0.8125rem', margin: 0 }}>Room {patient.room} • {patient.time}</p>
              </div>
              <span style={{ 
                padding: '0.375rem 1rem', 
                background: `${patient.statusColor}20`,
                color: patient.statusColor,
                borderRadius: '100px',
                fontSize: '0.8125rem',
                fontWeight: 600
              }}>{patient.status}</span>
              <span style={{ color: '#6366f1', fontSize: '0.9375rem', cursor: 'pointer', fontWeight: 500 }}>{patient.action} →</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ========================================
// FIGMA MOBILE RESPONSIVE
// ========================================
export const FigmaMobileView = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
    {/* Mobile */}
    <div style={{ background: '#1e1e1e', borderRadius: '32px', padding: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
      <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', borderRadius: '24px', overflow: 'hidden', height: '580px' }}>
        {/* Status Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem 1.25rem', color: 'white', fontSize: '0.75rem' }}>
          <span>9:41</span>
          <div style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
            <span>📶</span>
            <span>🔋</span>
          </div>
        </div>
        
        {/* Header */}
        <div style={{ padding: '0.75rem 1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: 'white', fontSize: '1.25rem' }}>☰</span>
          <span style={{ color: 'white', fontWeight: 700 }}>CareFlow</span>
          <div style={{ width: '32px', height: '32px', background: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)', borderRadius: '50%' }}></div>
        </div>
        
        {/* Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', padding: '1rem' }}>
          {[
            { label: 'Patients', value: '124', color: '#6366f1' },
            { label: 'Handoffs', value: '8', color: '#f59e0b' },
            { label: 'Discharges', value: '15', color: '#10b981' },
            { label: 'Alerts', value: '3', color: '#ef4444' },
          ].map((s) => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1rem', textAlign: 'center' }}>
              <p style={{ color: '#94a3b8', fontSize: '0.6875rem', marginBottom: '0.25rem' }}>{s.label}</p>
              <p style={{ color: 'white', fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>{s.value}</p>
            </div>
          ))}
        </div>
        
        {/* Patient Cards */}
        <div style={{ padding: '0 1rem' }}>
          <p style={{ color: 'white', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.75rem' }}>Priority</p>
          {[
            { name: 'John Doe', room: '412-B', status: 'Stable', color: '#10b981' },
            { name: 'Mary Smith', room: '305-A', status: 'Critical', color: '#ef4444' },
          ].map((p) => (
            <div key={p.name} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '0.875rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '36px', height: '36px', background: '#ddd6fe', borderRadius: '50%' }}></div>
              <div style={{ flex: 1 }}>
                <p style={{ color: 'white', fontSize: '0.875rem', fontWeight: 500, margin: 0 }}>{p.name}</p>
                <p style={{ color: '#64748b', fontSize: '0.6875rem', margin: 0 }}>Room {p.room}</p>
              </div>
              <span style={{ padding: '0.25rem 0.5rem', background: `${p.color}20`, color: p.color, borderRadius: '100px', fontSize: '0.625rem' }}>{p.status}</span>
            </div>
          ))}
        </div>
        
        {/* Bottom Nav */}
        <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', background: '#0f172a', borderRadius: '16px', padding: '0.75rem', display: 'flex', justifyContent: 'space-around' }}>
          {['🏠', '👥', '🔄', '📋', '⚙️'].map((icon, i) => (
            <span key={i} style={{ fontSize: '1.25rem', opacity: i === 0 ? 1 : 0.5 }}>{icon}</span>
          ))}
        </div>
      </div>
      <p style={{ textAlign: 'center', color: '#8b8b8b', fontSize: '0.75rem', marginTop: '0.75rem' }}>Mobile (375px)</p>
    </div>
    
    {/* Tablet */}
    <div style={{ background: '#1e1e1e', borderRadius: '24px', padding: '10px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
      <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', borderRadius: '16px', overflow: 'hidden', height: '400px' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          {/* Mini Sidebar */}
          <div style={{ width: '60px', background: '#0f172a', padding: '1rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '32px', height: '32px', background: '#6366f1', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🏥</div>
            {['📊', '👥', '🔄', '📅'].map((icon, i) => (
              <span key={i} style={{ fontSize: '1.125rem', opacity: i === 0 ? 1 : 0.5 }}>{icon}</span>
            ))}
          </div>
          
          {/* Content */}
          <div style={{ flex: 1, padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div>
                <p style={{ color: '#94a3b8', fontSize: '0.6875rem' }}>Welcome</p>
                <p style={{ color: 'white', fontWeight: 600, fontSize: '1rem' }}>Dr. Wilson</p>
              </div>
              <div style={{ width: '32px', height: '32px', background: '#ddd6fe', borderRadius: '50%' }}></div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem', marginBottom: '1rem' }}>
              {['124', '8', '15', '3'].map((v, i) => (
                <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', padding: '0.5rem', textAlign: 'center' }}>
                  <p style={{ color: 'white', fontSize: '1.125rem', fontWeight: 700, margin: 0 }}>{v}</p>
                </div>
              ))}
            </div>
            
            <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '8px', padding: '0.75rem' }}>
              <p style={{ color: 'white', fontSize: '0.8125rem', fontWeight: 600, marginBottom: '0.5rem' }}>Patients</p>
              {[1, 2, 3].map((i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                  <div style={{ width: '24px', height: '24px', background: '#ddd6fe', borderRadius: '50%' }}></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ width: '80px', height: '8px', background: '#ccc', borderRadius: '4px' }}></div>
                  </div>
                  <div style={{ width: '50px', height: '16px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '8px' }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p style={{ textAlign: 'center', color: '#8b8b8b', fontSize: '0.75rem', marginTop: '0.75rem' }}>Tablet (768px)</p>
    </div>
    
    {/* Desktop Preview */}
    <div style={{ background: '#1e1e1e', borderRadius: '12px', padding: '6px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}>
      <div style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)', borderRadius: '8px', overflow: 'hidden', height: '360px', display: 'flex' }}>
        <div style={{ width: '50px', background: '#0f172a', padding: '0.75rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '24px', height: '24px', background: '#6366f1', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem' }}>🏥</div>
          {['📊', '👥', '🔄', '📅', '💊'].map((icon, i) => (
            <span key={i} style={{ fontSize: '0.875rem', opacity: i === 0 ? 1 : 0.5 }}>{icon}</span>
          ))}
        </div>
        <div style={{ flex: 1, padding: '0.75rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
            <p style={{ color: 'white', fontWeight: 600, fontSize: '0.8125rem' }}>Dashboard</p>
            <div style={{ width: '20px', height: '20px', background: '#ddd6fe', borderRadius: '50%' }}></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.375rem', marginBottom: '0.75rem' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '6px', padding: '0.5rem' }}>
                <div style={{ width: '16px', height: '4px', background: '#8b949e', borderRadius: '2px', marginBottom: '0.25rem' }}></div>
                <div style={{ width: '24px', height: '10px', background: 'white', borderRadius: '2px' }}></div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '6px', flex: 1, padding: '0.5rem' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ display: 'flex', gap: '0.375rem', padding: '0.375rem 0', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                <div style={{ width: '16px', height: '16px', background: '#ddd6fe', borderRadius: '50%' }}></div>
                <div style={{ flex: 1, height: '8px', background: '#ccc', borderRadius: '4px', marginTop: '4px' }}></div>
                <div style={{ width: '30px', height: '12px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '6px' }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p style={{ textAlign: 'center', color: '#8b8b8b', fontSize: '0.75rem', marginTop: '0.75rem' }}>Desktop (1440px)</p>
    </div>
  </div>
);

// ========================================
// COMPONENT LIBRARY
// ========================================
export const FigmaComponentLibrary = () => {
  const [activeTab, setActiveTab] = useState('buttons');
  
  return (
    <div style={{ background: '#1e1e1e', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(162, 89, 255, 0.3)' }}>
      <div style={{ background: '#2c2c2c', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid #3c3c3c' }}>
        <FigmaLogo size={24} />
        <span style={{ color: 'white', fontWeight: 600 }}>Design System - Component Library</span>
      </div>
      
      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid #3c3c3c', padding: '0 1rem' }}>
        {['buttons', 'inputs', 'cards', 'badges'].map((tab) => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{ 
              padding: '1rem 1.5rem', 
              background: 'transparent', 
              border: 'none', 
              color: activeTab === tab ? '#a259ff' : '#8b8b8b',
              borderBottom: activeTab === tab ? '2px solid #a259ff' : '2px solid transparent',
              cursor: 'pointer',
              textTransform: 'capitalize',
              fontWeight: 500,
              fontSize: '0.9375rem'
            }}
          >{tab}</button>
        ))}
      </div>
      
      <div style={{ padding: '2rem', background: '#fafafa' }}>
        {activeTab === 'buttons' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Primary</p>
              <button style={{ padding: '0.75rem 1.5rem', background: '#6366f1', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 600, cursor: 'pointer', width: '100%' }}>Primary Button</button>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Secondary</p>
              <button style={{ padding: '0.75rem 1.5rem', background: 'transparent', border: '2px solid #6366f1', borderRadius: '8px', color: '#6366f1', fontWeight: 600, cursor: 'pointer', width: '100%' }}>Secondary</button>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Danger</p>
              <button style={{ padding: '0.75rem 1.5rem', background: '#ef4444', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 600, cursor: 'pointer', width: '100%' }}>Delete</button>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Disabled</p>
              <button style={{ padding: '0.75rem 1.5rem', background: '#e5e5e5', border: 'none', borderRadius: '8px', color: '#999', fontWeight: 600, cursor: 'not-allowed', width: '100%' }} disabled>Disabled</button>
            </div>
          </div>
        )}
        
        {activeTab === 'inputs' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Text Input</p>
              <input type="text" placeholder="Enter patient name" style={{ padding: '0.75rem 1rem', border: '1px solid #ddd', borderRadius: '8px', width: '100%', fontSize: '0.9375rem' }} />
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.75rem', textTransform: 'uppercase', fontWeight: 600 }}>Search Input</p>
              <input type="text" placeholder="🔍 Search patients..." style={{ padding: '0.75rem 1rem', border: '1px solid #ddd', borderRadius: '8px', width: '100%', fontSize: '0.9375rem', background: '#f8f9fa' }} />
            </div>
          </div>
        )}
        
        {activeTab === 'cards' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
              <p style={{ fontSize: '0.75rem', color: '#666', marginBottom: '0.5rem' }}>Total Patients</p>
              <p style={{ fontSize: '2rem', fontWeight: 700, color: '#1e293b', margin: 0 }}>124</p>
            </div>
            <div style={{ background: 'white', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '48px', height: '48px', background: '#ddd6fe', borderRadius: '50%' }}></div>
              <div>
                <p style={{ fontWeight: 600, color: '#1e293b', margin: 0 }}>John Doe</p>
                <p style={{ fontSize: '0.8125rem', color: '#64748b', margin: 0 }}>Room 412-B</p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'badges' && (
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <span style={{ padding: '0.375rem 0.75rem', background: '#dcfce7', color: '#16a34a', borderRadius: '100px', fontSize: '0.8125rem', fontWeight: 600 }}>Stable</span>
            <span style={{ padding: '0.375rem 0.75rem', background: '#fee2e2', color: '#dc2626', borderRadius: '100px', fontSize: '0.8125rem', fontWeight: 600 }}>Critical</span>
            <span style={{ padding: '0.375rem 0.75rem', background: '#fef3c7', color: '#d97706', borderRadius: '100px', fontSize: '0.8125rem', fontWeight: 600 }}>Improving</span>
            <span style={{ padding: '0.375rem 0.75rem', background: '#e0e7ff', color: '#4f46e5', borderRadius: '100px', fontSize: '0.8125rem', fontWeight: 600 }}>Pending</span>
          </div>
        )}
      </div>
    </div>
  );
};

