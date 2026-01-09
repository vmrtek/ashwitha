import { Link } from 'react-router-dom';
import { AirtableLogo, FigmaLogo, MiroLogo } from '../components/Icons';

// ========================================
// AIRTABLE COMPONENTS - MANUFACTURING
// ========================================

const AirtableProductionDashboard = () => {
  const machines = [
    { id: 'M-001', name: 'CNC Mill Alpha', line: 'Line A', status: 'Running', oee: 94, output: 1245, target: 1300, shift: 'Day' },
    { id: 'M-002', name: 'Laser Cutter Beta', line: 'Line A', status: 'Running', oee: 89, output: 892, target: 900, shift: 'Day' },
    { id: 'M-003', name: 'Assembly Robot R1', line: 'Line B', status: 'Maintenance', oee: 0, output: 0, target: 500, shift: 'Night' },
    { id: 'M-004', name: 'Press Gamma', line: 'Line B', status: 'Running', oee: 78, output: 2100, target: 2500, shift: 'Day' },
    { id: 'M-005', name: 'Welding Station W1', line: 'Line C', status: 'Idle', oee: 0, output: 0, target: 400, shift: 'Day' },
    { id: 'M-006', name: 'Quality Scanner Q1', line: 'Line C', status: 'Running', oee: 99, output: 3400, target: 3400, shift: 'Day' },
  ];

  const statusColors = { 'Running': '#10b981', 'Maintenance': '#f59e0b', 'Idle': '#6b7280', 'Error': '#ef4444' };

  return (
    <div style={{ background: '#0d1117', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(249, 115, 22, 0.3)' }}>
      <div style={{ background: 'linear-gradient(90deg, #ea580c, #f97316)', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AirtableLogo size={24} />
          <span style={{ color: 'white', fontWeight: 600 }}>ProdSense - Machine Monitoring</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', fontSize: '0.75rem', color: 'white' }}>6 Machines</span>
          <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(16,185,129,0.3)', borderRadius: '100px', fontSize: '0.75rem', color: '#86efac' }}>OEE: 87%</span>
        </div>
      </div>
      
      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', padding: '1rem 1.5rem', background: '#161b22', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        {[
          { label: 'Active Machines', value: '4/6', color: '#10b981' },
          { label: 'Avg OEE', value: '87%', color: '#f97316' },
          { label: 'Units Today', value: '7,637', color: '#6366f1' },
          { label: 'Defect Rate', value: '0.8%', color: '#10b981' },
          { label: 'Downtime', value: '2.4hrs', color: '#f59e0b' },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <p style={{ color: '#8b949e', fontSize: '0.75rem', marginBottom: '0.25rem' }}>{stat.label}</p>
            <span style={{ fontSize: '1.5rem', fontWeight: 700, color: stat.color }}>{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#161b22' }}>
              {['Machine ID', 'Name', 'Line', 'Status', 'OEE %', 'Output', 'Target', 'Progress'].map((h) => (
                <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {machines.map((m, i) => (
              <tr key={m.id} style={{ background: i % 2 === 0 ? '#0d1117' : '#161b22' }}>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#f97316', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{m.id}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#c9d1d9', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{m.name}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{m.line}</td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ width: '8px', height: '8px', background: statusColors[m.status], borderRadius: '50%', animation: m.status === 'Running' ? 'pulse 2s infinite' : 'none' }}></span>
                    <span style={{ fontSize: '0.8125rem', color: statusColors[m.status] }}>{m.status}</span>
                  </span>
                </td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: m.oee >= 85 ? '#10b981' : m.oee >= 70 ? '#f59e0b' : '#ef4444', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{m.oee}%</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#c9d1d9', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{m.output.toLocaleString()}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{m.target.toLocaleString()}</td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ width: '100px', height: '8px', background: '#21262d', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${Math.min((m.output / m.target) * 100, 100)}%`, height: '100%', background: m.output >= m.target ? '#10b981' : '#f97316', borderRadius: '4px' }}></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AirtableMaintenanceKanban = () => {
  const columns = [
    { title: 'Scheduled', color: '#6b7280', items: [
      { title: 'CNC Mill - Calibration', priority: 'Medium', due: 'Mar 20' },
      { title: 'Conveyor Belt Check', priority: 'Low', due: 'Mar 25' },
    ]},
    { title: 'In Progress', color: '#f97316', items: [
      { title: 'Assembly Robot - Motor Replace', priority: 'Critical', due: 'Today' },
      { title: 'Press Gamma - Hydraulics', priority: 'High', due: 'Mar 12' },
    ]},
    { title: 'Awaiting Parts', color: '#8b5cf6', items: [
      { title: 'Laser Cutter - Lens Kit', priority: 'High', due: 'Mar 15' },
    ]},
    { title: 'Completed', color: '#10b981', items: [
      { title: 'Quality Scanner - Software Update', priority: 'Medium', due: 'Done' },
      { title: 'Welding Station - Electrode Swap', priority: 'Low', due: 'Done' },
    ]},
  ];

  const priorityColors = { 'Critical': '#ef4444', 'High': '#f97316', 'Medium': '#f59e0b', 'Low': '#10b981' };

  return (
    <div style={{ background: '#0d1117', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(249, 115, 22, 0.3)' }}>
      <div style={{ background: 'linear-gradient(90deg, #ea580c, #f97316)', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.25rem' }}>🔧</span>
        <span style={{ color: 'white', fontWeight: 600 }}>Maintenance Schedule</span>
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
                <div key={i} style={{ background: '#161b22', borderRadius: '8px', padding: '1rem', border: `2px solid ${priorityColors[item.priority]}30` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <span style={{ padding: '0.125rem 0.5rem', background: `${priorityColors[item.priority]}20`, color: priorityColors[item.priority], borderRadius: '4px', fontSize: '0.625rem', fontWeight: 600 }}>{item.priority}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#c9d1d9', marginBottom: '0.5rem' }}>{item.title}</p>
                  <span style={{ fontSize: '0.6875rem', color: '#8b949e' }}>📅 {item.due}</span>
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
// FIGMA WIREFRAMES - MANUFACTURING
// ========================================

const FigmaProductionMonitor = () => (
  <div style={{ background: '#1e1e1e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(162, 89, 255, 0.3)' }}>
    <div style={{ background: '#2c2c2c', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #3c3c3c' }}>
      <div style={{ display: 'flex', gap: '0.375rem' }}>
        <span style={{ width: '12px', height: '12px', background: '#ff5f57', borderRadius: '50%' }}></span>
        <span style={{ width: '12px', height: '12px', background: '#febc2e', borderRadius: '50%' }}></span>
        <span style={{ width: '12px', height: '12px', background: '#28c840', borderRadius: '50%' }}></span>
      </div>
      <span style={{ color: '#8b8b8b', fontSize: '0.75rem', marginLeft: '0.5rem' }}>ProdSense Control Panel - High Fidelity.fig</span>
    </div>
    <div style={{ background: '#1a1a2e', padding: '0' }}>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ width: '180px', background: '#0f0f1a', borderRight: '1px solid rgba(255,255,255,0.1)', padding: '1rem 0', minHeight: '400px' }}>
          <div style={{ padding: '0 1rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '28px', height: '28px', background: '#f97316', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontSize: '0.875rem' }}>⚙️</span>
              </div>
              <span style={{ color: 'white', fontWeight: 600, fontSize: '0.875rem' }}>ProdSense</span>
            </div>
          </div>
          {[
            { icon: '📊', label: 'Overview', active: true },
            { icon: '🏭', label: 'Machines', active: false },
            { icon: '🔧', label: 'Maintenance', active: false },
            { icon: '📈', label: 'Analytics', active: false },
            { icon: '⚠️', label: 'Alerts', active: false },
          ].map((item) => (
            <div key={item.label} style={{ 
              padding: '0.5rem 1rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              background: item.active ? 'rgba(249, 115, 22, 0.15)' : 'transparent',
              borderLeft: item.active ? '3px solid #f97316' : '3px solid transparent',
            }}>
              <span style={{ fontSize: '0.75rem' }}>{item.icon}</span>
              <span style={{ color: item.active ? 'white' : '#64748b', fontSize: '0.75rem' }}>{item.label}</span>
            </div>
          ))}
        </div>
        
        {/* Main Content */}
        <div style={{ flex: 1, padding: '1.5rem' }}>
          <h1 style={{ color: 'white', fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Production Overview</h1>
          
          {/* Machine Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { name: 'CNC Mill Alpha', status: 'Running', oee: 94, color: '#10b981' },
              { name: 'Laser Cutter Beta', status: 'Running', oee: 89, color: '#10b981' },
              { name: 'Assembly Robot R1', status: 'Maintenance', oee: 0, color: '#f59e0b' },
            ].map((machine) => (
              <div key={machine.name} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1rem', border: `1px solid ${machine.color}30` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.75rem' }}>
                  <span style={{ color: 'white', fontSize: '0.875rem', fontWeight: 500 }}>{machine.name}</span>
                  <span style={{ width: '8px', height: '8px', background: machine.color, borderRadius: '50%' }}></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 700, color: machine.color }}>{machine.oee}%</span>
                  <span style={{ fontSize: '0.6875rem', color: '#64748b' }}>OEE</span>
                </div>
                <span style={{ fontSize: '0.6875rem', color: machine.color }}>{machine.status}</span>
              </div>
            ))}
          </div>
          
          {/* Chart */}
          <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '12px', padding: '1rem' }}>
            <h3 style={{ color: 'white', fontSize: '0.875rem', marginBottom: '1rem' }}>Production Output - Today</h3>
            <div style={{ display: 'flex', alignItems: 'end', gap: '0.5rem', height: '100px' }}>
              {[65, 78, 82, 75, 90, 85, 92, 88, 94, 91, 87, 89].map((val, i) => (
                <div key={i} style={{ flex: 1, height: `${val}%`, background: `linear-gradient(180deg, #f97316, #ea580c)`, borderRadius: '3px 3px 0 0' }}></div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
              {['6am', '8am', '10am', '12pm', '2pm', '4pm'].map((t) => (
                <span key={t} style={{ fontSize: '0.625rem', color: '#64748b' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ========================================
// MIRO USER RESEARCH - MANUFACTURING
// ========================================

const MiroManufacturingPersona = () => (
  <div style={{ background: '#fffef5', borderRadius: '12px', overflow: 'hidden', border: '2px solid #ffd02f' }}>
    <div style={{ background: '#ffd02f', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <MiroLogo size={24} />
      <span style={{ color: '#050038', fontWeight: 600 }}>User Persona: Plant Supervisor</span>
    </div>
    <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #fed7aa, #fdba74)', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>👷</div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.25rem' }}>James Rodriguez</h3>
        <p style={{ color: '#ea580c', fontWeight: 600, fontSize: '0.9375rem' }}>Production Supervisor</p>
        <div style={{ marginTop: '1rem', textAlign: 'left', background: '#f8fafc', borderRadius: '8px', padding: '1rem', fontSize: '0.8125rem' }}>
          <p style={{ marginBottom: '0.5rem' }}><strong>Age:</strong> 48</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Experience:</strong> 22 years</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Shift:</strong> Day (6am-2pm)</p>
          <p><strong>Team:</strong> 35 operators</p>
        </div>
      </div>
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ background: '#dcfce7', borderRadius: '12px', padding: '1.25rem' }}>
            <h4 style={{ color: '#16a34a', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>🎯 Goals</h4>
            <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.8125rem', color: '#1e293b' }}>
              <li>Maximize OEE above 85%</li>
              <li>Reduce unplanned downtime</li>
              <li>Meet daily production targets</li>
              <li>Ensure worker safety</li>
            </ul>
          </div>
          <div style={{ background: '#fee2e2', borderRadius: '12px', padding: '1.25rem' }}>
            <h4 style={{ color: '#dc2626', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>😤 Frustrations</h4>
            <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.8125rem', color: '#1e293b' }}>
              <li>No real-time machine visibility</li>
              <li>Paper-based maintenance logs</li>
              <li>Reactive vs predictive approach</li>
              <li>Multiple disconnected systems</li>
            </ul>
          </div>
        </div>
        <div style={{ background: '#ffedd5', borderRadius: '12px', padding: '1.25rem', borderLeft: '4px solid #ea580c' }}>
          <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#9a3412' }}>
            "I need to know the moment something goes wrong, not after we've already lost production time."
          </p>
        </div>
      </div>
    </div>
  </div>
);

// ========================================
// MAIN COMPONENT
// ========================================

function ManufacturingProject() {
  return (
    <>
      <header className="page-hero" style={{ background: 'linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #ea580c 100%)' }}>
        <div className="page-hero-content">
          <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(249, 115, 22, 0.3)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: '#fed7aa', marginBottom: '1rem' }}>MANUFACTURING</span>
          <h1>ProdSense: Production Line Monitoring System</h1>
          <p className="page-subtitle">
            Real-time production monitoring and predictive maintenance platform for manufacturing operations,
            featuring OEE tracking, machine status alerts, and maintenance scheduling.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.875rem' }}>20 Weeks</span>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.875rem' }}>Product Designer</span>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.875rem' }}>Precision Manufacturing Inc</span>
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
                ProdSense is a comprehensive production monitoring system designed for discrete manufacturing facilities.
                The platform provides real-time visibility into machine performance, enables predictive maintenance,
                and helps supervisors optimize production schedules to maximize Overall Equipment Effectiveness (OEE).
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', borderRadius: '16px', padding: '1.5rem', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Tools Used</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><AirtableLogo size={28} /><span>Airtable - Machine Database</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><FigmaLogo size={28} /><span>Figma - Control Panel Design</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><MiroLogo size={28} /><span>Miro - Process Analysis</span></div>
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
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>Machine Monitoring in Airtable</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Real-time production tracking with OEE calculations and status monitoring</p>
            </div>
          </div>
          <AirtableProductionDashboard />
          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Maintenance Kanban</h3>
            <AirtableMaintenanceKanban />
          </div>
        </div>
      </section>

      {/* Wireframes Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <FigmaLogo size={40} />
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>Control Panel Design in Figma</h2>
              <p style={{ color: 'var(--text-secondary)' }}>High-fidelity mockups for production floor monitoring</p>
            </div>
          </div>
          <FigmaProductionMonitor />
        </div>
      </section>

      {/* User Research Section */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <MiroLogo size={40} />
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>User Research in Miro</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Personas and production workflow analysis</p>
            </div>
          </div>
          <MiroManufacturingPersona />
        </div>
      </section>

      {/* Results */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>Results & Impact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { value: '25%', label: 'Less unplanned downtime', icon: '⏱️' },
              { value: '12%', label: 'OEE improvement', icon: '📈' },
              { value: '50%', label: 'Faster issue detection', icon: '⚡' },
              { value: '20%', label: 'Maintenance cost reduction', icon: '💰' },
            ].map((stat) => (
              <div key={stat.label} style={{ background: 'var(--bg-card)', borderRadius: '16px', padding: '2rem', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>{stat.icon}</span>
                <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: '#f97316', display: 'block', marginBottom: '0.5rem' }}>{stat.value}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Explore More Projects</h2>
        <div className="cta-buttons">
          <Link to="/projects" className="btn-primary">View All Projects</Link>
          <Link to="/contact" className="btn-secondary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}

export default ManufacturingProject;

