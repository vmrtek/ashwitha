// Additional Airtable Visual Components

export const AirtableGallery = () => {
  const features = [
    { title: 'Patient Dashboard', status: 'Complete', image: '📊', priority: 'High', assignee: 'AR', sprint: 'S1' },
    { title: 'Care Handoff', status: 'Complete', image: '🔄', priority: 'High', assignee: 'MJ', sprint: 'S2' },
    { title: 'Discharge Flow', status: 'In Progress', image: '🚪', priority: 'High', assignee: 'AR', sprint: 'S3' },
    { title: 'Notification Hub', status: 'In Progress', image: '🔔', priority: 'Medium', assignee: 'JK', sprint: 'S3' },
    { title: 'Mobile Alerts', status: 'Planned', image: '📱', priority: 'Medium', assignee: 'AR', sprint: 'S4' },
    { title: 'Analytics Panel', status: 'Planned', image: '📈', priority: 'Low', assignee: 'MJ', sprint: 'S5' },
  ];

  const statusColors = { 'Complete': '#10b981', 'In Progress': '#f59e0b', 'Planned': '#6366f1' };

  return (
    <div style={{ background: '#1a1a2e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(24, 191, 255, 0.2)' }}>
      <div style={{ background: '#18bfff', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
          <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
        </svg>
        <span style={{ color: 'white', fontWeight: 600 }}>Feature Gallery - Card View</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', padding: '1.5rem' }}>
        {features.map((f, i) => (
          <div key={i} style={{ background: '#12121a', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ height: '100px', background: 'linear-gradient(135deg, #1e293b, #0f172a)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
              {f.image}
            </div>
            <div style={{ padding: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{f.title}</span>
                <span style={{ padding: '0.25rem 0.5rem', background: `${statusColors[f.status]}20`, color: statusColors[f.status], borderRadius: '4px', fontSize: '0.6875rem' }}>{f.status}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.75rem', color: '#94a3b8' }}>
                <span>🎯 {f.priority}</span><span>👤 {f.assignee}</span><span>🏃 {f.sprint}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AirtableCalendar = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const events = [
    { day: 2, title: 'Sprint Review', color: '#6366f1' },
    { day: 5, title: 'Design Handoff', color: '#10b981' },
    { day: 9, title: 'User Testing', color: '#f59e0b' },
    { day: 12, title: 'Stakeholder Demo', color: '#ef4444' },
    { day: 16, title: 'Sprint Planning', color: '#6366f1' },
    { day: 19, title: 'Release v2.1', color: '#10b981' },
    { day: 23, title: 'Retrospective', color: '#8b5cf6' },
  ];

  return (
    <div style={{ background: '#1a1a2e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(24, 191, 255, 0.2)' }}>
      <div style={{ background: '#18bfff', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span style={{ color: 'white', fontWeight: 600 }}>Release Calendar - January 2025</span>
      </div>
      <div style={{ padding: '1rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '2px' }}>
          {days.map(d => <div key={d} style={{ padding: '0.5rem', textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>{d}</div>)}
          {Array.from({ length: 35 }, (_, i) => {
            const day = i - 2;
            const event = events.find(e => e.day === day);
            return (
              <div key={i} style={{ 
                padding: '0.5rem', 
                minHeight: '60px', 
                background: day > 0 && day <= 31 ? '#12121a' : 'transparent',
                borderRadius: '4px',
                border: day > 0 && day <= 31 ? '1px solid rgba(255,255,255,0.05)' : 'none'
              }}>
                {day > 0 && day <= 31 && (
                  <>
                    <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{day}</span>
                    {event && <div style={{ marginTop: '0.25rem', padding: '0.25rem', background: event.color, borderRadius: '4px', fontSize: '0.625rem', color: 'white' }}>{event.title}</div>}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const AirtableForm = () => (
  <div style={{ background: '#1a1a2e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(24, 191, 255, 0.2)' }}>
    <div style={{ background: '#18bfff', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/>
      </svg>
      <span style={{ color: 'white', fontWeight: 600 }}>Feature Request Form</span>
    </div>
    <div style={{ padding: '2rem', maxWidth: '500px' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Feature Name *</label>
        <input type="text" placeholder="Enter feature name" style={{ width: '100%', padding: '0.75rem', background: '#12121a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '0.9375rem' }} />
      </div>
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Priority *</label>
        <select style={{ width: '100%', padding: '0.75rem', background: '#12121a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '0.9375rem' }}>
          <option>High</option><option>Medium</option><option>Low</option>
        </select>
      </div>
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Description</label>
        <textarea placeholder="Describe the feature..." rows={4} style={{ width: '100%', padding: '0.75rem', background: '#12121a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'white', fontSize: '0.9375rem', resize: 'vertical' }} />
      </div>
      <div style={{ marginBottom: '1.5rem' }}>
        <label style={{ display: 'block', fontSize: '0.875rem', color: '#94a3b8', marginBottom: '0.5rem' }}>Requested By</label>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {['AR', 'MJ', 'JK', 'SL'].map(u => (
            <div key={u} style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600, color: 'white', cursor: 'pointer' }}>{u}</div>
          ))}
        </div>
      </div>
      <button style={{ width: '100%', padding: '0.875rem', background: '#18bfff', border: 'none', borderRadius: '8px', color: 'white', fontWeight: 600, fontSize: '0.9375rem', cursor: 'pointer' }}>Submit Feature Request</button>
    </div>
  </div>
);

export const AirtableAutomation = () => (
  <div style={{ background: '#1a1a2e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(24, 191, 255, 0.2)' }}>
    <div style={{ background: '#18bfff', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/>
      </svg>
      <span style={{ color: 'white', fontWeight: 600 }}>Automation Workflows</span>
    </div>
    <div style={{ padding: '1.5rem' }}>
      {[
        { trigger: 'When Status changes to "Complete"', action: 'Send Slack notification to #releases', runs: 47 },
        { trigger: 'When Priority is "High" and no assignee', action: 'Auto-assign to sprint lead', runs: 23 },
        { trigger: 'Every Monday at 9 AM', action: 'Generate weekly progress report', runs: 12 },
        { trigger: 'When new record created', action: 'Add to sprint backlog', runs: 89 },
      ].map((auto, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#12121a', borderRadius: '8px', marginBottom: '0.75rem' }}>
          <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #f59e0b, #ef4444)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.8125rem', color: '#94a3b8', marginBottom: '0.25rem' }}>{auto.trigger}</div>
            <div style={{ fontSize: '0.9375rem', color: 'white' }}>{auto.action}</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#10b981' }}>{auto.runs}</div>
            <div style={{ fontSize: '0.6875rem', color: '#64748b' }}>runs</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const AirtableDashboard = () => (
  <div style={{ background: '#1a1a2e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(24, 191, 255, 0.2)' }}>
    <div style={{ background: '#18bfff', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
      </svg>
      <span style={{ color: 'white', fontWeight: 600 }}>Product Dashboard - Interface Designer</span>
    </div>
    <div style={{ padding: '1.5rem' }}>
      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
        {[
          { label: 'Total Features', value: '156', change: '+12', color: '#10b981' },
          { label: 'In Progress', value: '24', change: '+3', color: '#f59e0b' },
          { label: 'Completed', value: '89', change: '+8', color: '#6366f1' },
          { label: 'Velocity', value: '34pts', change: '+5', color: '#8b5cf6' },
        ].map((stat, i) => (
          <div key={i} style={{ background: '#12121a', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '0.75rem', color: '#64748b', marginBottom: '0.5rem' }}>{stat.label}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'white' }}>{stat.value}</span>
              <span style={{ fontSize: '0.75rem', color: stat.color }}>{stat.change}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Chart */}
      <div style={{ background: '#12121a', padding: '1.25rem', borderRadius: '8px', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>Sprint Burndown</div>
        <svg viewBox="0 0 400 120" style={{ width: '100%' }}>
          <line x1="40" y1="100" x2="380" y2="100" stroke="#2d2d3d" strokeWidth="1"/>
          <line x1="40" y1="10" x2="40" y2="100" stroke="#2d2d3d" strokeWidth="1"/>
          <path d="M40,20 L100,25 L160,35 L220,50 L280,60 L340,85 L380,100" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="4"/>
          <path d="M40,20 L100,30 L160,45 L220,55 L280,70 L340,90" fill="none" stroke="#10b981" strokeWidth="2"/>
          <circle cx="340" cy="90" r="4" fill="#10b981"/>
          <text x="40" y="115" fontSize="8" fill="#64748b">Day 1</text>
          <text x="340" y="115" fontSize="8" fill="#64748b">Day 10</text>
        </svg>
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#94a3b8' }}>
            <div style={{ width: '12px', height: '2px', background: '#6366f1' }}></div>Ideal
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#94a3b8' }}>
            <div style={{ width: '12px', height: '2px', background: '#10b981' }}></div>Actual
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{ background: '#12121a', padding: '1.25rem', borderRadius: '8px' }}>
        <div style={{ fontSize: '0.875rem', fontWeight: 600, marginBottom: '1rem' }}>Recent Activity</div>
        {[
          { user: 'AR', action: 'moved "Patient Dashboard" to Complete', time: '2m ago' },
          { user: 'MJ', action: 'added comment on "Care Handoff"', time: '15m ago' },
          { user: 'JK', action: 'created new feature "Mobile Alerts"', time: '1h ago' },
        ].map((act, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 0', borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem', fontWeight: 600, color: 'white' }}>{act.user}</div>
            <div style={{ flex: 1, fontSize: '0.8125rem', color: '#e2e8f0' }}>{act.action}</div>
            <div style={{ fontSize: '0.6875rem', color: '#64748b' }}>{act.time}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

