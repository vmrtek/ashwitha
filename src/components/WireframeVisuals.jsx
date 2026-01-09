// Wireframe Visual Components - Real Figma-style wireframe mockups

export const WireframeLowFidelity = () => (
  <div style={{ 
    background: '#f8fafc', 
    borderRadius: '12px', 
    overflow: 'hidden',
    border: '2px solid #e2e8f0'
  }}>
    {/* Figma-style header */}
    <div style={{ 
      background: '#1e1e1e', 
      padding: '0.5rem 1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e' }} />
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
      </div>
      <span style={{ color: '#94a3b8', fontSize: '0.6875rem', marginLeft: '1rem' }}>Patient Dashboard - Low Fidelity</span>
    </div>

    <svg viewBox="0 0 400 300" style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* Background */}
      <rect width="400" height="300" fill="#f8fafc"/>
      
      {/* Header skeleton */}
      <rect x="20" y="15" width="80" height="12" rx="2" fill="#cbd5e1"/>
      <rect x="300" y="15" width="80" height="12" rx="2" fill="#cbd5e1"/>
      
      {/* Navigation */}
      <rect x="20" y="40" width="360" height="30" rx="4" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>
      <text x="40" y="60" fontSize="8" fill="#64748b" fontFamily="sans-serif">Navigation Bar</text>
      
      {/* Main content area */}
      <rect x="20" y="80" width="240" height="120" rx="4" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>
      <text x="100" y="145" fontSize="10" fill="#64748b" fontFamily="sans-serif" textAnchor="middle">Patient Info Card</text>
      <line x1="40" y1="100" x2="240" y2="100" stroke="#cbd5e1" strokeWidth="8" strokeLinecap="round"/>
      <line x1="40" y1="120" x2="200" y2="120" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round"/>
      <line x1="40" y1="135" x2="180" y2="135" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round"/>
      <line x1="40" y1="150" x2="160" y2="150" stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round"/>
      <rect x="40" y="165" width="60" height="20" rx="4" fill="#cbd5e1"/>
      <rect x="110" y="165" width="60" height="20" rx="4" fill="#cbd5e1"/>
      
      {/* Sidebar */}
      <rect x="270" y="80" width="110" height="200" rx="4" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>
      <text x="325" y="100" fontSize="8" fill="#64748b" fontFamily="sans-serif" textAnchor="middle">Quick Actions</text>
      <rect x="280" y="110" width="90" height="25" rx="4" fill="#e2e8f0"/>
      <rect x="280" y="145" width="90" height="25" rx="4" fill="#e2e8f0"/>
      <rect x="280" y="180" width="90" height="25" rx="4" fill="#e2e8f0"/>
      <rect x="280" y="215" width="90" height="25" rx="4" fill="#e2e8f0"/>
      <rect x="280" y="250" width="90" height="25" rx="4" fill="#e2e8f0"/>
      
      {/* Status cards */}
      <rect x="20" y="210" width="70" height="70" rx="4" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>
      <text x="55" y="250" fontSize="7" fill="#64748b" fontFamily="sans-serif" textAnchor="middle">Status 1</text>
      
      <rect x="100" y="210" width="70" height="70" rx="4" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>
      <text x="135" y="250" fontSize="7" fill="#64748b" fontFamily="sans-serif" textAnchor="middle">Status 2</text>
      
      <rect x="180" y="210" width="70" height="70" rx="4" fill="none" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>
      <text x="215" y="250" fontSize="7" fill="#64748b" fontFamily="sans-serif" textAnchor="middle">Status 3</text>

      {/* Annotations */}
      <circle cx="385" cy="55" r="10" fill="#ef4444"/>
      <text x="385" y="59" fontSize="8" fill="white" fontFamily="sans-serif" textAnchor="middle">1</text>
      <circle cx="385" cy="140" r="10" fill="#ef4444"/>
      <text x="385" y="144" fontSize="8" fill="white" fontFamily="sans-serif" textAnchor="middle">2</text>
    </svg>
  </div>
);

export const WireframeMidFidelity = () => (
  <div style={{ 
    background: '#ffffff', 
    borderRadius: '12px', 
    overflow: 'hidden',
    border: '1px solid #e2e8f0',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
  }}>
    {/* Figma-style header */}
    <div style={{ 
      background: '#2c2c2c', 
      padding: '0.5rem 1rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    }}>
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f57' }} />
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#febc2e' }} />
        <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#28c840' }} />
      </div>
      <span style={{ color: '#a1a1aa', fontSize: '0.6875rem', marginLeft: '1rem' }}>Care Handoff Flow - Mid Fidelity</span>
    </div>

    <svg viewBox="0 0 400 320" style={{ width: '100%', height: 'auto', display: 'block' }}>
      {/* Background */}
      <rect width="400" height="320" fill="#ffffff"/>
      
      {/* Header */}
      <rect x="0" y="0" width="400" height="50" fill="#f1f5f9"/>
      <rect x="15" y="15" width="30" height="20" rx="4" fill="#6366f1"/>
      <text x="30" y="28" fontSize="8" fill="white" fontFamily="sans-serif" textAnchor="middle">←</text>
      <text x="200" y="30" fontSize="11" fill="#1e293b" fontFamily="sans-serif" textAnchor="middle" fontWeight="600">Care Handoff</text>
      <circle cx="370" cy="25" r="15" fill="#e2e8f0"/>
      <text x="370" y="29" fontSize="8" fill="#64748b" fontFamily="sans-serif" textAnchor="middle">AR</text>
      
      {/* Patient card */}
      <rect x="15" y="60" width="370" height="80" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1"/>
      <circle cx="55" cy="100" r="25" fill="#ddd6fe"/>
      <text x="55" y="105" fontSize="14" fill="#7c3aed" fontFamily="sans-serif" textAnchor="middle">JD</text>
      <text x="95" y="85" fontSize="12" fill="#1e293b" fontFamily="sans-serif" fontWeight="600">John Doe</text>
      <text x="95" y="100" fontSize="9" fill="#64748b" fontFamily="sans-serif">Patient ID: P-2024-0892</text>
      <text x="95" y="115" fontSize="9" fill="#64748b" fontFamily="sans-serif">Room: 412-B | Bed: 2</text>
      <rect x="95" y="122" width="60" height="16" rx="8" fill="#dcfce7"/>
      <text x="125" y="133" fontSize="8" fill="#16a34a" fontFamily="sans-serif" textAnchor="middle">Stable</text>
      <rect x="300" y="85" width="70" height="28" rx="6" fill="#6366f1"/>
      <text x="335" y="103" fontSize="9" fill="white" fontFamily="sans-serif" textAnchor="middle">View Chart</text>
      
      {/* Handoff details */}
      <text x="15" y="165" fontSize="10" fill="#64748b" fontFamily="sans-serif" fontWeight="600">HANDOFF DETAILS</text>
      
      <rect x="15" y="175" width="370" height="60" rx="8" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1"/>
      <text x="30" y="195" fontSize="9" fill="#64748b" fontFamily="sans-serif">From:</text>
      <text x="70" y="195" fontSize="9" fill="#1e293b" fontFamily="sans-serif" fontWeight="500">Dr. Sarah Wilson (Day Shift)</text>
      <text x="30" y="215" fontSize="9" fill="#64748b" fontFamily="sans-serif">To:</text>
      <text x="70" y="215" fontSize="9" fill="#1e293b" fontFamily="sans-serif" fontWeight="500">Dr. Michael Chen (Night Shift)</text>
      
      {/* Notes */}
      <text x="15" y="255" fontSize="10" fill="#64748b" fontFamily="sans-serif" fontWeight="600">HANDOFF NOTES</text>
      <rect x="15" y="265" width="370" height="40" rx="8" fill="#fffbeb" stroke="#fbbf24" strokeWidth="1"/>
      <text x="30" y="285" fontSize="9" fill="#92400e" fontFamily="sans-serif">⚠️ Monitor vitals every 2 hours. Pain medication due at 10 PM.</text>
      
      {/* Action button */}
      <rect x="15" y="315" width="370" height="0" rx="8" fill="#10b981"/>
    </svg>
  </div>
);

export const WireframeHighFidelity = () => (
  <div style={{ 
    background: '#0f172a', 
    borderRadius: '12px', 
    overflow: 'hidden',
    border: '1px solid rgba(99, 102, 241, 0.3)',
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
  }}>
    {/* App header */}
    <div style={{ 
      background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', 
      padding: '1rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{ 
          width: '32px', 
          height: '32px', 
          background: 'rgba(255,255,255,0.2)', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ fontSize: '1rem' }}>🏥</span>
        </div>
        <span style={{ color: 'white', fontWeight: 600 }}>CareFlow</span>
      </div>
      <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.75rem' }}>High-Fidelity Mockup</span>
    </div>

    <svg viewBox="0 0 400 350" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e293b"/>
          <stop offset="100%" stopColor="#0f172a"/>
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366f1"/>
          <stop offset="100%" stopColor="#8b5cf6"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      {/* Background */}
      <rect width="400" height="350" fill="#0f172a"/>
      
      {/* Stats cards */}
      <rect x="15" y="15" width="88" height="70" rx="12" fill="url(#cardGradient)" filter="url(#shadow)"/>
      <text x="30" y="40" fontSize="8" fill="#94a3b8" fontFamily="sans-serif">Total Patients</text>
      <text x="30" y="62" fontSize="20" fill="white" fontFamily="sans-serif" fontWeight="bold">124</text>
      <text x="30" y="75" fontSize="8" fill="#10b981" fontFamily="sans-serif">↑ 12%</text>
      
      <rect x="113" y="15" width="88" height="70" rx="12" fill="url(#cardGradient)" filter="url(#shadow)"/>
      <text x="128" y="40" fontSize="8" fill="#94a3b8" fontFamily="sans-serif">Pending Handoffs</text>
      <text x="128" y="62" fontSize="20" fill="#f59e0b" fontFamily="sans-serif" fontWeight="bold">8</text>
      <text x="128" y="75" fontSize="8" fill="#ef4444" fontFamily="sans-serif">Urgent</text>
      
      <rect x="211" y="15" width="88" height="70" rx="12" fill="url(#cardGradient)" filter="url(#shadow)"/>
      <text x="226" y="40" fontSize="8" fill="#94a3b8" fontFamily="sans-serif">Discharges Today</text>
      <text x="226" y="62" fontSize="20" fill="#10b981" fontFamily="sans-serif" fontWeight="bold">15</text>
      <text x="226" y="75" fontSize="8" fill="#94a3b8" fontFamily="sans-serif">On track</text>
      
      <rect x="309" y="15" width="76" height="70" rx="12" fill="url(#cardGradient)" filter="url(#shadow)"/>
      <text x="324" y="40" fontSize="8" fill="#94a3b8" fontFamily="sans-serif">Alerts</text>
      <text x="324" y="62" fontSize="20" fill="#ef4444" fontFamily="sans-serif" fontWeight="bold">3</text>
      <circle cx="365" cy="55" r="8" fill="#ef4444" fillOpacity="0.2"/>
      <circle cx="365" cy="55" r="4" fill="#ef4444"/>
      
      {/* Patient list */}
      <text x="15" y="110" fontSize="10" fill="#94a3b8" fontFamily="sans-serif" fontWeight="600">PRIORITY PATIENTS</text>
      
      {/* Patient cards */}
      <rect x="15" y="120" width="370" height="65" rx="10" fill="url(#cardGradient)" filter="url(#shadow)"/>
      <circle cx="50" cy="152" r="20" fill="#ddd6fe"/>
      <text x="50" y="157" fontSize="12" fill="#7c3aed" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">JD</text>
      <text x="80" y="142" fontSize="11" fill="white" fontFamily="sans-serif" fontWeight="600">John Doe</text>
      <text x="80" y="157" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Room 412-B • Cardiac</text>
      <rect x="80" y="162" width="50" height="14" rx="7" fill="#fef3c7"/>
      <text x="105" y="172" fontSize="7" fill="#92400e" fontFamily="sans-serif" textAnchor="middle">Handoff Due</text>
      <rect x="290" y="140" width="80" height="28" rx="8" fill="url(#accentGradient)"/>
      <text x="330" y="158" fontSize="9" fill="white" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">Start Handoff</text>
      
      <rect x="15" y="195" width="370" height="65" rx="10" fill="url(#cardGradient)" filter="url(#shadow)"/>
      <circle cx="50" cy="227" r="20" fill="#bbf7d0"/>
      <text x="50" y="232" fontSize="12" fill="#16a34a" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">MS</text>
      <text x="80" y="217" fontSize="11" fill="white" fontFamily="sans-serif" fontWeight="600">Mary Smith</text>
      <text x="80" y="232" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Room 305-A • Orthopedic</text>
      <rect x="80" y="237" width="60" height="14" rx="7" fill="#dcfce7"/>
      <text x="110" y="247" fontSize="7" fill="#16a34a" fontFamily="sans-serif" textAnchor="middle">Ready to D/C</text>
      <rect x="290" y="215" width="80" height="28" rx="8" fill="#1e293b" stroke="#6366f1" strokeWidth="1"/>
      <text x="330" y="233" fontSize="9" fill="#6366f1" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">View Details</text>
      
      <rect x="15" y="270" width="370" height="65" rx="10" fill="url(#cardGradient)" filter="url(#shadow)"/>
      <circle cx="50" cy="302" r="20" fill="#fecaca"/>
      <text x="50" y="307" fontSize="12" fill="#dc2626" fontFamily="sans-serif" textAnchor="middle" fontWeight="bold">RJ</text>
      <text x="80" y="292" fontSize="11" fill="white" fontFamily="sans-serif" fontWeight="600">Robert Johnson</text>
      <text x="80" y="307" fontSize="9" fill="#94a3b8" fontFamily="sans-serif">Room 501-C • ICU</text>
      <rect x="80" y="312" width="40" height="14" rx="7" fill="#fee2e2"/>
      <text x="100" y="322" fontSize="7" fill="#dc2626" fontFamily="sans-serif" textAnchor="middle">Critical</text>
      <rect x="290" y="290" width="80" height="28" rx="8" fill="#ef4444"/>
      <text x="330" y="308" fontSize="9" fill="white" fontFamily="sans-serif" textAnchor="middle" fontWeight="500">⚠️ Urgent</text>
    </svg>
  </div>
);

export const WireframeAnnotated = () => (
  <div style={{ 
    background: '#ffffff', 
    borderRadius: '12px', 
    overflow: 'hidden',
    border: '1px solid #e2e8f0'
  }}>
    <div style={{ 
      background: '#a259ff', 
      padding: '0.75rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }}>
      <svg width="20" height="20" viewBox="0 0 38 57" fill="white">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z"/>
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"/>
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z"/>
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z"/>
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z"/>
      </svg>
      <span style={{ color: 'white', fontWeight: 600 }}>Figma Annotated Wireframe</span>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 200px', background: '#fafafa' }}>
      {/* Wireframe */}
      <div style={{ padding: '1.5rem', borderRight: '1px solid #e2e8f0' }}>
        <svg viewBox="0 0 300 250" style={{ width: '100%', height: 'auto' }}>
          <rect width="300" height="250" fill="#ffffff" stroke="#e2e8f0"/>
          
          {/* Header */}
          <rect x="10" y="10" width="280" height="35" fill="#f1f5f9" rx="4"/>
          <rect x="20" y="18" width="60" height="18" fill="#6366f1" rx="4"/>
          <rect x="230" y="20" width="50" height="14" fill="#e2e8f0" rx="2"/>
          
          {/* Form */}
          <rect x="10" y="55" width="280" height="185" fill="#ffffff" stroke="#e2e8f0" rx="4"/>
          <text x="20" y="75" fontSize="10" fill="#1e293b" fontWeight="600">Patient Information</text>
          
          {/* Form fields with annotations */}
          <rect x="20" y="85" width="120" height="30" fill="#f8fafc" stroke="#e2e8f0" rx="4"/>
          <text x="30" y="104" fontSize="8" fill="#64748b">First Name</text>
          <circle cx="150" cy="100" r="8" fill="#ef4444"/>
          <text x="150" y="104" fontSize="7" fill="white" textAnchor="middle">1</text>
          
          <rect x="160" y="85" width="120" height="30" fill="#f8fafc" stroke="#e2e8f0" rx="4"/>
          <text x="170" y="104" fontSize="8" fill="#64748b">Last Name</text>
          
          <rect x="20" y="125" width="260" height="30" fill="#f8fafc" stroke="#e2e8f0" rx="4"/>
          <text x="30" y="144" fontSize="8" fill="#64748b">Email Address</text>
          <circle cx="290" cy="140" r="8" fill="#ef4444"/>
          <text x="290" y="144" fontSize="7" fill="white" textAnchor="middle">2</text>
          
          <rect x="20" y="165" width="260" height="30" fill="#f8fafc" stroke="#e2e8f0" rx="4"/>
          <text x="30" y="184" fontSize="8" fill="#64748b">Select Department</text>
          <polygon points="265,180 270,175 275,180" fill="#64748b"/>
          <circle cx="290" cy="180" r="8" fill="#ef4444"/>
          <text x="290" y="184" fontSize="7" fill="white" textAnchor="middle">3</text>
          
          {/* Submit button */}
          <rect x="20" y="205" width="260" height="30" fill="#6366f1" rx="6"/>
          <text x="150" y="224" fontSize="10" fill="white" textAnchor="middle" fontWeight="500">Submit</text>
          <circle cx="290" cy="220" r="8" fill="#ef4444"/>
          <text x="290" y="224" fontSize="7" fill="white" textAnchor="middle">4</text>
        </svg>
      </div>
      
      {/* Annotations panel */}
      <div style={{ padding: '1rem', fontSize: '0.75rem' }}>
        <h4 style={{ fontSize: '0.8125rem', marginBottom: '1rem', color: '#1e293b' }}>Annotations</h4>
        
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#ef4444', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem' }}>1</span>
            <strong style={{ color: '#1e293b' }}>Required Field</strong>
          </div>
          <p style={{ color: '#64748b', marginLeft: '1.5rem', lineHeight: 1.4 }}>Show asterisk, red border on error</p>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#ef4444', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem' }}>2</span>
            <strong style={{ color: '#1e293b' }}>Email Validation</strong>
          </div>
          <p style={{ color: '#64748b', marginLeft: '1.5rem', lineHeight: 1.4 }}>Real-time format check</p>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#ef4444', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem' }}>3</span>
            <strong style={{ color: '#1e293b' }}>Dropdown</strong>
          </div>
          <p style={{ color: '#64748b', marginLeft: '1.5rem', lineHeight: 1.4 }}>8 dept options, searchable</p>
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#ef4444', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.625rem' }}>4</span>
            <strong style={{ color: '#1e293b' }}>Submit Button</strong>
          </div>
          <p style={{ color: '#64748b', marginLeft: '1.5rem', lineHeight: 1.4 }}>Disabled until valid, loading state</p>
        </div>
      </div>
    </div>
  </div>
);

