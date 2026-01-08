// Additional Wireframe Visual Components - Mobile, Tablet, and More Screens

export const MobileWireframe = () => (
  <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
    {/* iPhone Frame 1 - Login */}
    <div style={{ width: '220px' }}>
      <div style={{ background: '#1e1e1e', borderRadius: '30px', padding: '8px', boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}>
        <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', height: '450px' }}>
          {/* Status Bar */}
          <div style={{ height: '44px', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600 }}>9:41</span>
            <div style={{ display: 'flex', gap: '4px' }}>
              <div style={{ width: '16px', height: '10px', background: '#1e293b', borderRadius: '2px' }}></div>
            </div>
          </div>
          {/* Content */}
          <div style={{ padding: '24px 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ width: '60px', height: '60px', background: '#6366f1', borderRadius: '16px', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>🏥</div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#1e293b' }}>CareFlow</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Healthcare Platform</div>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ height: '44px', background: '#f1f5f9', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '0 14px', fontSize: '13px', color: '#94a3b8' }}>Email address</div>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ height: '44px', background: '#f1f5f9', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '0 14px', fontSize: '13px', color: '#94a3b8' }}>Password</div>
            </div>
            <div style={{ height: '48px', background: '#6366f1', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: '15px' }}>Sign In</div>
            <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: '#6366f1' }}>Forgot password?</div>
          </div>
          {/* Home Indicator */}
          <div style={{ position: 'absolute', bottom: '8px', left: '50%', transform: 'translateX(-50%)', width: '120px', height: '4px', background: '#1e293b', borderRadius: '2px' }}></div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '12px', color: '#94a3b8' }}>Login Screen</div>
    </div>

    {/* iPhone Frame 2 - Dashboard */}
    <div style={{ width: '220px' }}>
      <div style={{ background: '#1e1e1e', borderRadius: '30px', padding: '8px', boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}>
        <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', height: '450px' }}>
          <div style={{ height: '44px', background: '#6366f1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: 'white' }}>9:41</span>
          </div>
          <div style={{ padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>Good morning,</div>
                <div style={{ fontSize: '18px', fontWeight: 700, color: '#1e293b' }}>Dr. Wilson</div>
              </div>
              <div style={{ width: '40px', height: '40px', background: '#ddd6fe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 600, color: '#6d28d9' }}>SW</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
              {[{ label: 'Patients', value: '24', color: '#6366f1' }, { label: 'Pending', value: '8', color: '#f59e0b' }].map((s, i) => (
                <div key={i} style={{ background: '#f8fafc', padding: '14px', borderRadius: '12px', textAlign: 'center' }}>
                  <div style={{ fontSize: '24px', fontWeight: 700, color: s.color }}>{s.value}</div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '12px', color: '#1e293b' }}>Priority Patients</div>
            {[{ name: 'John Doe', room: '412-B', status: 'Stable' }, { name: 'Mary Smith', room: '305-A', status: 'Critical' }].map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', background: '#f8fafc', borderRadius: '10px', marginBottom: '8px' }}>
                <div style={{ width: '36px', height: '36px', background: '#ddd6fe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 600, color: '#6d28d9' }}>{p.name.split(' ').map(n => n[0]).join('')}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 600 }}>{p.name}</div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>Room {p.room}</div>
                </div>
                <div style={{ padding: '4px 8px', background: p.status === 'Stable' ? '#dcfce7' : '#fee2e2', borderRadius: '6px', fontSize: '10px', color: p.status === 'Stable' ? '#16a34a' : '#dc2626' }}>{p.status}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '12px', color: '#94a3b8' }}>Dashboard</div>
    </div>

    {/* iPhone Frame 3 - Patient Detail */}
    <div style={{ width: '220px' }}>
      <div style={{ background: '#1e1e1e', borderRadius: '30px', padding: '8px', boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}>
        <div style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', height: '450px' }}>
          <div style={{ height: '44px', background: '#6366f1', display: 'flex', alignItems: 'center', padding: '0 16px' }}>
            <span style={{ fontSize: '16px', color: 'white' }}>←</span>
            <span style={{ flex: 1, textAlign: 'center', fontSize: '15px', fontWeight: 600, color: 'white' }}>Patient Details</span>
          </div>
          <div style={{ padding: '20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ width: '70px', height: '70px', background: '#ddd6fe', borderRadius: '50%', margin: '0 auto 12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: 700, color: '#6d28d9' }}>JD</div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#1e293b' }}>John Doe</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>Room 412-B • Bed 2</div>
              <div style={{ display: 'inline-block', padding: '4px 12px', background: '#dcfce7', borderRadius: '100px', fontSize: '11px', color: '#16a34a', marginTop: '8px' }}>Stable</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
              {[{ label: 'Heart Rate', value: '72 bpm' }, { label: 'Blood Pressure', value: '120/80' }, { label: 'Temperature', value: '98.6°F' }, { label: 'O2 Saturation', value: '98%' }].map((v, i) => (
                <div key={i} style={{ background: '#f8fafc', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#1e293b' }}>{v.value}</div>
                  <div style={{ fontSize: '10px', color: '#64748b' }}>{v.label}</div>
                </div>
              ))}
            </div>
            <div style={{ height: '40px', background: '#6366f1', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 600, fontSize: '13px' }}>Start Handoff</div>
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '12px', color: '#94a3b8' }}>Patient Detail</div>
    </div>
  </div>
);

export const TabletWireframe = () => (
  <div style={{ background: '#1e1e1e', borderRadius: '20px', padding: '12px', maxWidth: '700px', margin: '0 auto', boxShadow: '0 25px 50px rgba(0,0,0,0.3)' }}>
    <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden' }}>
      {/* Header */}
      <div style={{ height: '50px', background: '#6366f1', display: 'flex', alignItems: 'center', padding: '0 20px', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ fontSize: '18px' }}>🏥</div>
          <span style={{ color: 'white', fontWeight: 600 }}>CareFlow</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Dashboard</span>
          <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Patients</span>
          <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px' }}>Schedule</span>
          <div style={{ width: '32px', height: '32px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: 'white', fontWeight: 600 }}>SW</div>
        </div>
      </div>
      
      {/* Content */}
      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', minHeight: '400px' }}>
        {/* Sidebar */}
        <div style={{ background: '#f8fafc', padding: '20px', borderRight: '1px solid #e2e8f0' }}>
          <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, marginBottom: '12px' }}>QUICK ACTIONS</div>
          {['New Patient', 'Start Handoff', 'View Schedule', 'Send Alert', 'Reports'].map((item, i) => (
            <div key={i} style={{ padding: '10px 12px', background: i === 0 ? '#6366f1' : 'transparent', color: i === 0 ? 'white' : '#64748b', borderRadius: '8px', fontSize: '13px', marginBottom: '4px', cursor: 'pointer' }}>{item}</div>
          ))}
          <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 600, marginTop: '24px', marginBottom: '12px' }}>DEPARTMENTS</div>
          {['Cardiology', 'Orthopedics', 'ICU', 'ER'].map((dept, i) => (
            <div key={i} style={{ padding: '8px 12px', fontSize: '12px', color: '#64748b' }}>• {dept}</div>
          ))}
        </div>
        
        {/* Main Content */}
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <div style={{ fontSize: '11px', color: '#64748b' }}>Good morning,</div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#1e293b' }}>Dr. Sarah Wilson</div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <div style={{ padding: '8px 16px', background: '#6366f1', color: 'white', borderRadius: '8px', fontSize: '13px', fontWeight: 500 }}>+ Add Patient</div>
            </div>
          </div>
          
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
            {[{ label: 'Total Patients', value: '124', color: '#6366f1' }, { label: 'Pending Handoffs', value: '8', color: '#f59e0b' }, { label: 'Discharges Today', value: '15', color: '#10b981' }, { label: 'Alerts', value: '3', color: '#ef4444' }].map((s, i) => (
              <div key={i} style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '28px', fontWeight: 700, color: s.color }}>{s.value}</div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>{s.label}</div>
              </div>
            ))}
          </div>
          
          {/* Patient List */}
          <div style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Priority Patients</div>
          <div style={{ background: '#f8fafc', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 100px 100px 100px 80px', padding: '12px 16px', background: '#e2e8f0', fontSize: '11px', fontWeight: 600, color: '#64748b' }}>
              <span>Patient</span><span>Room</span><span>Status</span><span>Next Action</span><span></span>
            </div>
            {[{ name: 'John Doe', room: '412-B', status: 'Stable', action: 'Handoff Due' }, { name: 'Mary Smith', room: '305-A', status: 'Critical', action: 'Check Vitals' }, { name: 'Robert Johnson', room: '501-C', status: 'Improving', action: 'Discharge' }].map((p, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 100px 100px 100px 80px', padding: '12px 16px', borderBottom: '1px solid #e2e8f0', alignItems: 'center', fontSize: '13px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '32px', height: '32px', background: '#ddd6fe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 600, color: '#6d28d9' }}>{p.name.split(' ').map(n => n[0]).join('')}</div>
                  <span style={{ fontWeight: 500 }}>{p.name}</span>
                </div>
                <span style={{ color: '#64748b' }}>{p.room}</span>
                <span style={{ padding: '4px 8px', background: p.status === 'Critical' ? '#fee2e2' : p.status === 'Stable' ? '#dcfce7' : '#fef3c7', borderRadius: '6px', fontSize: '11px', color: p.status === 'Critical' ? '#dc2626' : p.status === 'Stable' ? '#16a34a' : '#92400e' }}>{p.status}</span>
                <span style={{ color: '#64748b', fontSize: '12px' }}>{p.action}</span>
                <span style={{ color: '#6366f1', fontSize: '12px', cursor: 'pointer' }}>View →</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const DesignSystemPreview = () => (
  <div style={{ background: '#1a1a2e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(162, 89, 255, 0.2)' }}>
    <div style={{ background: '#a259ff', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
      <span style={{ color: 'white', fontWeight: 600 }}>Design System - Component Library</span>
    </div>
    <div style={{ padding: '2rem' }}>
      {/* Colors */}
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1rem' }}>COLOR PALETTE</h4>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {[{ name: 'Primary', color: '#6366f1' }, { name: 'Success', color: '#10b981' }, { name: 'Warning', color: '#f59e0b' }, { name: 'Danger', color: '#ef4444' }, { name: 'Info', color: '#06b6d4' }].map(c => (
            <div key={c.name} style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', background: c.color, borderRadius: '12px', marginBottom: '0.5rem' }}></div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{c.name}</div>
              <div style={{ fontSize: '0.625rem', color: '#64748b' }}>{c.color}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1rem' }}>TYPOGRAPHY</h4>
        <div style={{ background: '#12121a', padding: '1.5rem', borderRadius: '8px' }}>
          <div style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '0.5rem' }}>Heading 1</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.5rem' }}>Heading 2</div>
          <div style={{ fontSize: '1.125rem', fontWeight: 500, marginBottom: '0.5rem' }}>Heading 3</div>
          <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>Body Text - Regular</div>
          <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Caption - Secondary text</div>
        </div>
      </div>

      {/* Buttons */}
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1rem' }}>BUTTONS</h4>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button style={{ padding: '0.75rem 1.5rem', background: '#6366f1', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 600 }}>Primary</button>
          <button style={{ padding: '0.75rem 1.5rem', background: 'transparent', border: '2px solid #6366f1', borderRadius: '8px', color: '#6366f1', fontWeight: 600 }}>Secondary</button>
          <button style={{ padding: '0.75rem 1.5rem', background: '#10b981', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 600 }}>Success</button>
          <button style={{ padding: '0.75rem 1.5rem', background: '#ef4444', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 600 }}>Danger</button>
          <button style={{ padding: '0.75rem 1.5rem', background: '#1e293b', border: 'none', borderRadius: '8px', color: '#94a3b8', fontWeight: 600 }}>Disabled</button>
        </div>
      </div>

      {/* Form Elements */}
      <div style={{ marginBottom: '2rem' }}>
        <h4 style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1rem' }}>FORM ELEMENTS</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <input type="text" placeholder="Text Input" style={{ padding: '0.75rem', background: '#12121a', border: '1px solid #2d3748', borderRadius: '8px', color: 'white' }} />
          <select style={{ padding: '0.75rem', background: '#12121a', border: '1px solid #2d3748', borderRadius: '8px', color: 'white' }}>
            <option>Select Option</option>
          </select>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <input type="checkbox" id="check" style={{ width: '18px', height: '18px' }} />
            <label htmlFor="check" style={{ fontSize: '0.875rem' }}>Checkbox</label>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div>
        <h4 style={{ fontSize: '0.875rem', color: '#94a3b8', marginBottom: '1rem' }}>CARD COMPONENTS</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          <div style={{ background: '#12121a', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Default Card</div>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Standard card component</div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', padding: '1.25rem', borderRadius: '12px' }}>
            <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'white' }}>Gradient Card</div>
            <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)' }}>Accent card style</div>
          </div>
          <div style={{ background: '#12121a', padding: '1.25rem', borderRadius: '12px', border: '2px solid #6366f1' }}>
            <div style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem' }}>Outlined Card</div>
            <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Border accent card</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ResponsiveShowcase = () => (
  <div style={{ background: '#1a1a2e', borderRadius: '12px', padding: '2rem', border: '1px solid rgba(162, 89, 255, 0.2)' }}>
    <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem', textAlign: 'center' }}>Responsive Design Breakpoints</h3>
    <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'flex-end' }}>
      {/* Mobile */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '60px', height: '100px', background: '#12121a', borderRadius: '8px', border: '2px solid #6366f1', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '40px', height: '70px', background: '#2d3748', borderRadius: '4px' }}></div>
        </div>
        <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>Mobile</div>
        <div style={{ fontSize: '0.625rem', color: '#64748b' }}>320-480px</div>
      </div>
      {/* Tablet */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '100px', height: '130px', background: '#12121a', borderRadius: '8px', border: '2px solid #10b981', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '80px', height: '100px', background: '#2d3748', borderRadius: '4px' }}></div>
        </div>
        <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>Tablet</div>
        <div style={{ fontSize: '0.625rem', color: '#64748b' }}>768-1024px</div>
      </div>
      {/* Desktop */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '160px', height: '100px', background: '#12121a', borderRadius: '8px', border: '2px solid #f59e0b', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '140px', height: '80px', background: '#2d3748', borderRadius: '4px' }}></div>
        </div>
        <div style={{ fontSize: '0.75rem', fontWeight: 600 }}>Desktop</div>
        <div style={{ fontSize: '0.625rem', color: '#64748b' }}>1024px+</div>
      </div>
    </div>
  </div>
);

