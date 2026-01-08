// Miro Visual Components - Real Miro-style user flow diagrams and journey maps

export const MiroUserFlow = ({ title = "Patient Admission Flow" }) => (
  <div style={{ 
    background: '#ffd02f', 
    borderRadius: '12px', 
    overflow: 'hidden',
    border: '2px solid #e6bb00'
  }}>
    {/* Miro header */}
    <div style={{ 
      background: '#1a1a2e', 
      padding: '0.75rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }}>
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#FFD02F"/>
        <path d="M33.5 8H29L34 18L24.5 8H20L25 20L15.5 8H11L16.5 22L7 8H3V40H7.5L17 24L7.5 40H12L21.5 24L12 40H16.5L26 24L16.5 40H21L30.5 22L21 40H25.5L35 20L25.5 40H30L39.5 18L30 40H34.5L44 8H39.5" fill="#050038"/>
      </svg>
      <span style={{ color: 'white', fontWeight: 600 }}>{title}</span>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: '0.5rem' }}>
        <span style={{ background: 'rgba(255,255,255,0.1)', padding: '0.25rem 0.75rem', borderRadius: '100px', fontSize: '0.75rem', color: 'white' }}>
          12 Steps
        </span>
      </div>
    </div>

    <svg viewBox="0 0 800 300" style={{ width: '100%', height: 'auto', display: 'block', background: '#fffef5' }}>
      {/* Grid pattern */}
      <defs>
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e6e6e6" strokeWidth="0.5"/>
        </pattern>
      </defs>
      <rect width="800" height="300" fill="url(#grid)"/>

      {/* Start node */}
      <circle cx="50" cy="150" r="25" fill="#10b981" stroke="#059669" strokeWidth="2"/>
      <text x="50" y="155" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold">START</text>

      {/* Flow nodes */}
      {/* Step 1 */}
      <rect x="100" y="125" width="100" height="50" rx="8" fill="#ffffff" stroke="#64748b" strokeWidth="2"/>
      <text x="150" y="145" textAnchor="middle" fontSize="9" fill="#1e293b" fontWeight="600">Patient Arrives</text>
      <text x="150" y="160" textAnchor="middle" fontSize="7" fill="#64748b">ER / Scheduled</text>
      <line x1="75" y1="150" x2="100" y2="150" stroke="#64748b" strokeWidth="2" markerEnd="url(#arrow)"/>

      {/* Step 2 */}
      <rect x="220" y="125" width="100" height="50" rx="8" fill="#ffffff" stroke="#64748b" strokeWidth="2"/>
      <text x="270" y="145" textAnchor="middle" fontSize="9" fill="#1e293b" fontWeight="600">Check-In</text>
      <text x="270" y="160" textAnchor="middle" fontSize="7" fill="#64748b">Verify Insurance</text>
      <line x1="200" y1="150" x2="220" y2="150" stroke="#64748b" strokeWidth="2"/>
      <polygon points="215,145 220,150 215,155" fill="#64748b"/>

      {/* Decision node */}
      <polygon points="370,150 400,120 430,150 400,180" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
      <text x="400" y="148" textAnchor="middle" fontSize="8" fill="#92400e" fontWeight="600">Emergency?</text>
      <text x="400" y="160" textAnchor="middle" fontSize="7" fill="#92400e">Yes/No</text>
      <line x1="320" y1="150" x2="370" y2="150" stroke="#64748b" strokeWidth="2"/>

      {/* Emergency path */}
      <rect x="380" y="40" width="90" height="45" rx="8" fill="#fee2e2" stroke="#ef4444" strokeWidth="2"/>
      <text x="425" y="60" textAnchor="middle" fontSize="9" fill="#dc2626" fontWeight="600">ER Triage</text>
      <text x="425" y="72" textAnchor="middle" fontSize="7" fill="#dc2626">Priority: STAT</text>
      <line x1="400" y1="120" x2="400" y2="95" stroke="#ef4444" strokeWidth="2"/>
      <polygon points="395,95 400,85 405,95" fill="#ef4444"/>
      <text x="410" y="108" fontSize="7" fill="#ef4444">Yes</text>

      {/* Regular path */}
      <rect x="480" y="125" width="100" height="50" rx="8" fill="#ffffff" stroke="#64748b" strokeWidth="2"/>
      <text x="530" y="145" textAnchor="middle" fontSize="9" fill="#1e293b" fontWeight="600">Waiting Room</text>
      <text x="530" y="160" textAnchor="middle" fontSize="7" fill="#64748b">Queue: 15 min avg</text>
      <line x1="430" y1="150" x2="480" y2="150" stroke="#64748b" strokeWidth="2"/>
      <text x="450" y="143" fontSize="7" fill="#64748b">No</text>

      {/* Step 4 */}
      <rect x="600" y="125" width="100" height="50" rx="8" fill="#ffffff" stroke="#64748b" strokeWidth="2"/>
      <text x="650" y="145" textAnchor="middle" fontSize="9" fill="#1e293b" fontWeight="600">Assessment</text>
      <text x="650" y="160" textAnchor="middle" fontSize="7" fill="#64748b">Vitals + History</text>
      <line x1="580" y1="150" x2="600" y2="150" stroke="#64748b" strokeWidth="2"/>

      {/* Step 5 - Bed Assignment */}
      <rect x="600" y="210" width="100" height="50" rx="8" fill="#ddd6fe" stroke="#8b5cf6" strokeWidth="2"/>
      <text x="650" y="230" textAnchor="middle" fontSize="9" fill="#6d28d9" fontWeight="600">Bed Assignment</text>
      <text x="650" y="245" textAnchor="middle" fontSize="7" fill="#6d28d9">Room + Bed #</text>
      <line x1="650" y1="175" x2="650" y2="210" stroke="#64748b" strokeWidth="2"/>

      {/* Merge from ER */}
      <line x1="470" y1="62" x2="530" y2="62" stroke="#ef4444" strokeWidth="2"/>
      <line x1="530" y1="62" x2="530" y2="125" stroke="#ef4444" strokeWidth="2"/>

      {/* End node */}
      <circle cx="750" cy="235" r="25" fill="#6366f1" stroke="#4f46e5" strokeWidth="2"/>
      <text x="750" y="233" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">PATIENT</text>
      <text x="750" y="243" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">ADMITTED</text>
      <line x1="700" y1="235" x2="725" y2="235" stroke="#64748b" strokeWidth="2"/>

      {/* Swimlane labels */}
      <rect x="10" y="10" width="80" height="25" rx="4" fill="#10b981"/>
      <text x="50" y="27" textAnchor="middle" fontSize="9" fill="white" fontWeight="600">Front Desk</text>
      
      <rect x="250" y="10" width="80" height="25" rx="4" fill="#f59e0b"/>
      <text x="290" y="27" textAnchor="middle" fontSize="9" fill="white" fontWeight="600">Triage</text>
      
      <rect x="500" y="10" width="80" height="25" rx="4" fill="#8b5cf6"/>
      <text x="540" y="27" textAnchor="middle" fontSize="9" fill="white" fontWeight="600">Clinical</text>

      {/* Legend */}
      <rect x="10" y="260" width="200" height="30" rx="4" fill="rgba(0,0,0,0.05)"/>
      <circle cx="30" cy="275" r="6" fill="#10b981"/>
      <text x="45" y="278" fontSize="8" fill="#64748b">Start/End</text>
      <rect x="80" y="269" width="12" height="12" rx="2" fill="#ffffff" stroke="#64748b"/>
      <text x="100" y="278" fontSize="8" fill="#64748b">Process</text>
      <polygon points="145,275 155,269 165,275 155,281" fill="#fef3c7" stroke="#f59e0b"/>
      <text x="175" y="278" fontSize="8" fill="#64748b">Decision</text>
    </svg>
  </div>
);

export const MiroJourneyMap = () => (
  <div style={{ 
    background: '#1a1a2e', 
    borderRadius: '12px', 
    overflow: 'hidden',
    border: '1px solid rgba(255, 208, 47, 0.3)'
  }}>
    {/* Header */}
    <div style={{ 
      background: '#ffd02f', 
      padding: '0.75rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }}>
      <svg width="24" height="24" viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="8" fill="#FFD02F"/>
        <path d="M33.5 8H29L34 18L24.5 8H20L25 20L15.5 8H11L16.5 22L7 8H3V40H7.5L17 24L7.5 40H12L21.5 24L12 40H16.5L26 24L16.5 40H21L30.5 22L21 40H25.5L35 20L25.5 40H30L39.5 18L30 40H34.5L44 8H39.5" fill="#050038"/>
      </svg>
      <span style={{ color: '#050038', fontWeight: 600 }}>Patient Journey Map - Discharge Process</span>
    </div>

    <div style={{ padding: '1.5rem', overflowX: 'auto' }}>
      {/* Phases */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
        {['Preparation', 'Documentation', 'Education', 'Checkout', 'Follow-up'].map((phase, i) => (
          <div key={phase} style={{ 
            background: `hsl(${i * 60}, 70%, 50%)`,
            padding: '0.75rem',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <span style={{ color: 'white', fontWeight: 600, fontSize: '0.875rem' }}>{phase}</span>
          </div>
        ))}
      </div>

      {/* Journey stages */}
      <div style={{ display: 'grid', gridTemplateColumns: '120px repeat(5, 1fr)', gap: '0.5rem' }}>
        {/* Row labels */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ height: '60px', display: 'flex', alignItems: 'center', padding: '0 0.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>ACTIONS</span>
          </div>
          <div style={{ height: '60px', display: 'flex', alignItems: 'center', padding: '0 0.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>TOUCHPOINTS</span>
          </div>
          <div style={{ height: '60px', display: 'flex', alignItems: 'center', padding: '0 0.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>EMOTIONS</span>
          </div>
          <div style={{ height: '60px', display: 'flex', alignItems: 'center', padding: '0 0.5rem' }}>
            <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>PAIN POINTS</span>
          </div>
        </div>

        {/* Stage 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ height: '60px', background: '#12121a', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', color: '#e2e8f0' }}>Review discharge orders</span>
          </div>
          <div style={{ height: '60px', background: '#12121a', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', color: '#e2e8f0' }}>🖥️ EHR System</span>
          </div>
          <div style={{ height: '60px', background: '#12121a', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.5rem' }}>😐</span>
          </div>
          <div style={{ height: '60px', background: '#fee2e2', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', color: '#dc2626' }}>Multiple system logins</span>
          </div>
        </div>

        {/* Stage 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ height: '60px', background: '#12121a', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', color: '#e2e8f0' }}>Complete paperwork</span>
          </div>
          <div style={{ height: '60px', background: '#12121a', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', color: '#e2e8f0' }}>📋 Paper Forms</span>
          </div>
          <div style={{ height: '60px', background: '#12121a', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.5rem' }}>😟</span>
          </div>
          <div style={{ height: '60px', background: '#fee2e2', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', color: '#dc2626' }}>Duplicate data entry</span>
          </div>
        </div>

        {/* Stage 3 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ height: '60px', background: '#12121a', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', color: '#e2e8f0' }}>Patient education</span>
          </div>
          <div style={{ height: '60px', background: '#12121a', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', color: '#e2e8f0' }}>👤 Face-to-face</span>
          </div>
          <div style={{ height: '60px', background: '#12121a', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.5rem' }}>🙂</span>
          </div>
          <div style={{ height: '60px', background: '#fef3c7', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', color: '#92400e' }}>Time pressure</span>
          </div>
        </div>

        {/* Stage 4 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ height: '60px', background: '#12121a', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', color: '#e2e8f0' }}>Process checkout</span>
          </div>
          <div style={{ height: '60px', background: '#12121a', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', color: '#e2e8f0' }}>💳 Billing System</span>
          </div>
          <div style={{ height: '60px', background: '#12121a', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.5rem' }}>😊</span>
          </div>
          <div style={{ height: '60px', background: '#dcfce7', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', color: '#16a34a' }}>Smooth process</span>
          </div>
        </div>

        {/* Stage 5 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div style={{ height: '60px', background: '#12121a', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', color: '#e2e8f0' }}>Schedule follow-up</span>
          </div>
          <div style={{ height: '60px', background: '#12121a', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', color: '#e2e8f0' }}>📱 App + Call</span>
          </div>
          <div style={{ height: '60px', background: '#12121a', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '1.5rem' }}>😄</span>
          </div>
          <div style={{ height: '60px', background: '#dcfce7', borderRadius: '6px', padding: '0.5rem', display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '0.6875rem', color: '#16a34a' }}>Clear next steps</span>
          </div>
        </div>
      </div>

      {/* Emotion line */}
      <svg viewBox="0 0 600 60" style={{ width: '100%', marginTop: '1rem', marginLeft: '120px' }}>
        <path 
          d="M 0,40 Q 60,45 120,50 T 240,35 T 360,25 T 480,15 T 600,10" 
          fill="none" 
          stroke="#10b981" 
          strokeWidth="3"
          strokeLinecap="round"
        />
        <text x="0" y="55" fontSize="8" fill="#94a3b8">Low</text>
        <text x="560" y="10" fontSize="8" fill="#10b981">High</text>
      </svg>
    </div>
  </div>
);

export const MiroAffinityDiagram = () => (
  <div style={{ 
    background: '#fffef5', 
    borderRadius: '12px', 
    overflow: 'hidden',
    border: '2px solid #ffd02f'
  }}>
    {/* Header */}
    <div style={{ 
      background: '#ffd02f', 
      padding: '0.75rem 1.5rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    }}>
      <span style={{ color: '#050038', fontWeight: 600 }}>Research Affinity Diagram - User Interview Insights</span>
    </div>

    <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
      {/* Category 1 */}
      <div>
        <div style={{ background: '#fecaca', padding: '0.75rem', borderRadius: '8px 8px 0 0', textAlign: 'center' }}>
          <span style={{ fontWeight: 600, color: '#dc2626', fontSize: '0.875rem' }}>Pain Points</span>
        </div>
        <div style={{ background: '#fff5f5', padding: '0.75rem', borderRadius: '0 0 8px 8px', minHeight: '200px' }}>
          {['System too slow', 'Too many clicks', 'Data re-entry', 'No mobile access', 'Confusing navigation'].map((note, i) => (
            <div key={i} style={{ 
              background: '#fef08a', 
              padding: '0.5rem', 
              marginBottom: '0.5rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              boxShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              transform: `rotate(${(i % 3 - 1) * 2}deg)`
            }}>
              {note}
            </div>
          ))}
        </div>
      </div>

      {/* Category 2 */}
      <div>
        <div style={{ background: '#bbf7d0', padding: '0.75rem', borderRadius: '8px 8px 0 0', textAlign: 'center' }}>
          <span style={{ fontWeight: 600, color: '#16a34a', fontSize: '0.875rem' }}>Needs</span>
        </div>
        <div style={{ background: '#f0fdf4', padding: '0.75rem', borderRadius: '0 0 8px 8px', minHeight: '200px' }}>
          {['Quick patient lookup', 'Real-time updates', 'Mobile alerts', 'Simple handoff'].map((note, i) => (
            <div key={i} style={{ 
              background: '#a7f3d0', 
              padding: '0.5rem', 
              marginBottom: '0.5rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              boxShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              transform: `rotate(${(i % 3 - 1) * 2}deg)`
            }}>
              {note}
            </div>
          ))}
        </div>
      </div>

      {/* Category 3 */}
      <div>
        <div style={{ background: '#ddd6fe', padding: '0.75rem', borderRadius: '8px 8px 0 0', textAlign: 'center' }}>
          <span style={{ fontWeight: 600, color: '#7c3aed', fontSize: '0.875rem' }}>Behaviors</span>
        </div>
        <div style={{ background: '#f5f3ff', padding: '0.75rem', borderRadius: '0 0 8px 8px', minHeight: '200px' }}>
          {['Use workarounds', 'Paper backup', 'Call colleagues', 'Skip documentation'].map((note, i) => (
            <div key={i} style={{ 
              background: '#c4b5fd', 
              padding: '0.5rem', 
              marginBottom: '0.5rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              boxShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              transform: `rotate(${(i % 3 - 1) * 2}deg)`
            }}>
              {note}
            </div>
          ))}
        </div>
      </div>

      {/* Category 4 */}
      <div>
        <div style={{ background: '#fed7aa', padding: '0.75rem', borderRadius: '8px 8px 0 0', textAlign: 'center' }}>
          <span style={{ fontWeight: 600, color: '#ea580c', fontSize: '0.875rem' }}>Opportunities</span>
        </div>
        <div style={{ background: '#fff7ed', padding: '0.75rem', borderRadius: '0 0 8px 8px', minHeight: '200px' }}>
          {['Dashboard view', 'Push notifications', 'Voice commands', 'Auto-fill forms'].map((note, i) => (
            <div key={i} style={{ 
              background: '#fdba74', 
              padding: '0.5rem', 
              marginBottom: '0.5rem',
              borderRadius: '4px',
              fontSize: '0.75rem',
              boxShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              transform: `rotate(${(i % 3 - 1) * 2}deg)`
            }}>
              {note}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

