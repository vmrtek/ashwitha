import { useState } from 'react';

// ========================================
// FULLY INTERACTIVE CAREFLOW DASHBOARD
// ========================================
export const InteractiveDashboard = () => {
  const [activeNav, setActiveNav] = useState('Dashboard');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const navItems = [
    { icon: '📊', label: 'Dashboard', badge: null },
    { icon: '👥', label: 'Patients', badge: '124' },
    { icon: '🔄', label: 'Handoffs', badge: '8' },
    { icon: '📅', label: 'Schedule', badge: null },
    { icon: '💊', label: 'Medications', badge: '3' },
    { icon: '📋', label: 'Reports', badge: null },
    { icon: '⚙️', label: 'Settings', badge: null },
  ];

  // HIGH CONTRAST COLORS
  const stats = [
    { label: 'Total Patients', value: 124, change: '+12', color: '#818cf8' },
    { label: 'Pending Handoffs', value: 8, change: '+3', color: '#fbbf24' },
    { label: 'Discharges Today', value: 15, change: '+5', color: '#34d399' },
    { label: 'Critical Alerts', value: 3, change: '+1', color: '#f87171' },
  ];

  const patients = [
    { id: 1, name: 'John Doe', room: '412-B', status: 'Stable', statusColor: '#34d399', action: 'Handoff Due', time: '2h ago', vitals: { bp: '120/80', hr: 72, temp: '98.6°F' } },
    { id: 2, name: 'Mary Smith', room: '305-A', status: 'Critical', statusColor: '#f87171', action: 'Check Vitals', time: '15m ago', vitals: { bp: '90/60', hr: 110, temp: '101.2°F' } },
    { id: 3, name: 'Robert Johnson', room: '501-C', status: 'Improving', statusColor: '#fbbf24', action: 'Discharge', time: '1h ago', vitals: { bp: '118/76', hr: 68, temp: '98.4°F' } },
    { id: 4, name: 'Emily Davis', room: '203-D', status: 'Stable', statusColor: '#34d399', action: 'Update Notes', time: '3h ago', vitals: { bp: '122/82', hr: 74, temp: '98.2°F' } },
    { id: 5, name: 'Michael Brown', room: '418-A', status: 'Pending', statusColor: '#818cf8', action: 'Initial Assessment', time: '30m ago', vitals: { bp: '125/85', hr: 78, temp: '98.8°F' } },
  ];

  return (
    <div style={{ 
      background: '#0d1117', 
      borderRadius: '20px', 
      overflow: 'hidden', 
      border: '1px solid rgba(99, 102, 241, 0.3)',
      boxShadow: '0 25px 80px rgba(99, 102, 241, 0.15)'
    }}>
      {/* Browser Chrome */}
      <div style={{ background: '#161b22', padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <span style={{ width: '14px', height: '14px', background: '#ff5f57', borderRadius: '50%', cursor: 'pointer' }}></span>
          <span style={{ width: '14px', height: '14px', background: '#febc2e', borderRadius: '50%', cursor: 'pointer' }}></span>
          <span style={{ width: '14px', height: '14px', background: '#28c840', borderRadius: '50%', cursor: 'pointer' }}></span>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ background: '#21262d', borderRadius: '8px', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: '#10b981' }}>🔒</span>
            <span style={{ color: '#8b949e', fontSize: '0.8125rem' }}>careflow.lifebridge.health/dashboard</span>
          </div>
        </div>
        <span style={{ padding: '0.375rem 0.75rem', background: '#10b981', borderRadius: '6px', fontSize: '0.6875rem', color: 'white', fontWeight: 600 }}>LIVE DEMO</span>
      </div>

      <div style={{ display: 'flex', minHeight: '600px' }}>
        {/* Sidebar */}
        <div style={{ width: '260px', background: '#0d1117', borderRight: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem 0' }}>
          <div style={{ padding: '0 1.5rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '44px', height: '44px', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.5rem' }}>🏥</span>
              </div>
              <div>
                <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.125rem', display: 'block' }}>CareFlow</span>
                <span style={{ color: '#9ca3af', fontSize: '0.6875rem' }}>LifeBridge Health</span>
              </div>
            </div>
          </div>

          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveNav(item.label)}
              style={{
                width: '100%',
                padding: '0.875rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
                background: activeNav === item.label ? 'rgba(129, 140, 248, 0.2)' : 'transparent',
                borderLeft: activeNav === item.label ? '3px solid #818cf8' : '3px solid transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
              <span style={{ color: activeNav === item.label ? '#ffffff' : '#cbd5e1', fontSize: '0.9375rem', flex: 1, textAlign: 'left', fontWeight: activeNav === item.label ? 600 : 400 }}>{item.label}</span>
              {item.badge && (
                <span style={{
                  padding: '0.125rem 0.5rem',
                  background: item.label === 'Medications' ? 'rgba(248, 113, 113, 0.25)' : 'rgba(129, 140, 248, 0.25)',
                  color: item.label === 'Medications' ? '#fca5a5' : '#c7d2fe',
                  borderRadius: '100px',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  fontWeight: 600
                }}>{item.badge}</span>
              )}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: '2rem 2.5rem', background: 'linear-gradient(180deg, #0d1117, #161b22)', overflowY: 'auto' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
            <div>
              <p style={{ color: '#94a3b8', fontSize: '0.9375rem', marginBottom: '0.25rem' }}>Good morning,</p>
              <h1 style={{ color: 'white', fontSize: '1.75rem', fontWeight: 700, margin: 0 }}>Dr. Sarah Wilson</h1>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <button style={{ position: 'relative', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🔔</span>
                <span style={{ position: 'absolute', top: '0', right: '0', width: '20px', height: '20px', background: '#ef4444', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6875rem', color: 'white', fontWeight: 700 }}>3</span>
              </button>
              <div style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.125rem', fontWeight: 700, color: '#6d28d9', cursor: 'pointer' }}>SW</div>
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem', marginBottom: '2.5rem' }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: '1px solid rgba(255,255,255,0.08)',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <p style={{ color: '#94a3b8', fontSize: '0.8125rem', marginBottom: '0.75rem' }}>{stat.label}</p>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                  <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white' }}>{stat.value}</span>
                  <span style={{ fontSize: '0.875rem', color: stat.color, fontWeight: 600 }}>{stat.change}</span>
                </div>
                <div style={{ marginTop: '1rem', height: '5px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${Math.random() * 40 + 50}%`, height: '100%', background: stat.color, borderRadius: '3px', transition: 'width 0.5s' }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Patient List */}
          <div style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ color: 'white', fontSize: '1.125rem', fontWeight: 700, margin: 0 }}>Priority Patients</h3>
              <button
                onClick={() => setShowAddModal(true)}
                style={{
                  padding: '0.625rem 1.25rem',
                  background: '#6366f1',
                  border: 'none',
                  borderRadius: '10px',
                  color: 'white',
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#5558e3'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#6366f1'}
              >
                <span>+</span> Add Patient
              </button>
            </div>

            {patients.map((patient, i) => (
              <div
                key={patient.id}
                onClick={() => setSelectedPatient(selectedPatient?.id === patient.id ? null : patient)}
                style={{
                  padding: '1.25rem 1.5rem',
                  borderBottom: i < patients.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  cursor: 'pointer',
                  background: selectedPatient?.id === patient.id ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => { if (selectedPatient?.id !== patient.id) e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}
                onMouseLeave={(e) => { if (selectedPatient?.id !== patient.id) e.currentTarget.style.background = 'transparent' }}
              >
                <div style={{
                  width: '52px',
                  height: '52px',
                  background: `linear-gradient(135deg, ${patient.statusColor}40, ${patient.statusColor}20)`,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: patient.statusColor,
                  border: `2px solid ${patient.statusColor}40`
                }}>
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
                <button
                  style={{
                    padding: '0.5rem 1rem',
                    background: 'rgba(99, 102, 241, 0.1)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    borderRadius: '8px',
                    color: '#a5b4fc',
                    fontSize: '0.8125rem',
                    cursor: 'pointer',
                    fontWeight: 500,
                    transition: 'all 0.2s'
                  }}
                  onClick={(e) => { e.stopPropagation(); alert(`Action: ${patient.action} for ${patient.name}`); }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)'}
                >
                  {patient.action} →
                </button>
              </div>
            ))}

            {/* Expanded Patient Details */}
            {selectedPatient && (
              <div style={{
                padding: '1.5rem',
                background: 'rgba(99, 102, 241, 0.05)',
                borderTop: '1px solid rgba(99, 102, 241, 0.2)',
                animation: 'fadeIn 0.3s ease'
              }}>
                <h4 style={{ color: 'white', marginBottom: '1rem' }}>Patient Details: {selectedPatient.name}</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1rem' }}>
                    <p style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Blood Pressure</p>
                    <p style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{selectedPatient.vitals.bp}</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1rem' }}>
                    <p style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Heart Rate</p>
                    <p style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{selectedPatient.vitals.hr} <span style={{ fontSize: '0.75rem', color: '#64748b' }}>bpm</span></p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1rem' }}>
                    <p style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Temperature</p>
                    <p style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{selectedPatient.vitals.temp}</p>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1rem' }}>
                    <p style={{ color: '#64748b', fontSize: '0.75rem', marginBottom: '0.25rem' }}>Room</p>
                    <p style={{ color: 'white', fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>{selectedPatient.room}</p>
                  </div>
                </div>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '0.75rem' }}>
                  <button style={{ flex: 1, padding: '0.75rem', background: '#6366f1', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 600, cursor: 'pointer' }}>View Full Record</button>
                  <button style={{ flex: 1, padding: '0.75rem', background: 'transparent', border: '1px solid rgba(99, 102, 241, 0.5)', borderRadius: '8px', color: '#a5b4fc', fontWeight: 600, cursor: 'pointer' }}>Start Handoff</button>
                  <button style={{ flex: 1, padding: '0.75rem', background: 'transparent', border: '1px solid rgba(239, 68, 68, 0.5)', borderRadius: '8px', color: '#fca5a5', fontWeight: 600, cursor: 'pointer' }}>Add Alert</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Patient Modal */}
      {showAddModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }} onClick={() => setShowAddModal(false)}>
          <div style={{
            background: '#161b22',
            borderRadius: '20px',
            padding: '2rem',
            width: '450px',
            border: '1px solid rgba(255,255,255,0.1)'
          }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Add New Patient</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input type="text" placeholder="Patient Name" style={{ padding: '0.875rem 1rem', background: '#21262d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: 'white', fontSize: '0.9375rem' }} />
              <input type="text" placeholder="Room Number" style={{ padding: '0.875rem 1rem', background: '#21262d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: 'white', fontSize: '0.9375rem' }} />
              <select style={{ padding: '0.875rem 1rem', background: '#21262d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', color: 'white', fontSize: '0.9375rem' }}>
                <option>Select Status</option>
                <option>Stable</option>
                <option>Critical</option>
                <option>Improving</option>
                <option>Pending</option>
              </select>
              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
                <button onClick={() => setShowAddModal(false)} style={{ flex: 1, padding: '0.875rem', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px', color: '#94a3b8', fontWeight: 600, cursor: 'pointer' }}>Cancel</button>
                <button onClick={() => { alert('Patient added!'); setShowAddModal(false); }} style={{ flex: 1, padding: '0.875rem', background: '#6366f1', border: 'none', borderRadius: '10px', color: 'white', fontWeight: 600, cursor: 'pointer' }}>Add Patient</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveDashboard;

