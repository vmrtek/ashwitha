import { MiroLogo } from '../Icons';

// ========================================
// USER PERSONA
// ========================================
export const MiroPersona = () => (
  <div style={{ background: 'linear-gradient(135deg, #fffbeb, #fef3c7)', borderRadius: '16px', overflow: 'hidden', border: '2px solid #fbbf24', boxShadow: '0 10px 40px rgba(251, 191, 36, 0.2)' }}>
    <div style={{ background: 'linear-gradient(90deg, #fbbf24, #f59e0b)', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <MiroLogo size={28} />
      <span style={{ color: '#1e293b', fontWeight: 700, fontSize: '1.125rem' }}>User Persona: Primary User</span>
    </div>
    <div style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '260px 1fr', gap: '2.5rem' }}>
      {/* Left Column - Profile */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '160px', height: '160px', background: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', boxShadow: '0 12px 40px rgba(139, 92, 246, 0.3)' }} role="img" aria-label="Sarah Wilson avatar">👩‍⚕️</div>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1e293b', marginBottom: '0.25rem' }}>Sarah Wilson</h3>
        <p style={{ color: '#7c3aed', fontWeight: 700, fontSize: '1rem', marginBottom: '1.5rem' }}>Charge Nurse, CCU</p>
        
        <div style={{ background: 'white', borderRadius: '12px', padding: '1.25rem', textAlign: 'left', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <div style={{ marginBottom: '0.875rem' }}>
            <span style={{ color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Age</span>
            <p style={{ color: '#1e293b', fontWeight: 600, margin: 0 }}>34 years old</p>
          </div>
          <div style={{ marginBottom: '0.875rem' }}>
            <span style={{ color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Experience</span>
            <p style={{ color: '#1e293b', fontWeight: 600, margin: 0 }}>8 years in nursing</p>
          </div>
          <div style={{ marginBottom: '0.875rem' }}>
            <span style={{ color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Location</span>
            <p style={{ color: '#1e293b', fontWeight: 600, margin: 0 }}>Baltimore, MD</p>
          </div>
          <div>
            <span style={{ color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Shift</span>
            <p style={{ color: '#1e293b', fontWeight: 600, margin: 0 }}>Day Shift (7am - 7pm)</p>
          </div>
        </div>
        
        {/* Tech Comfort */}
        <div style={{ marginTop: '1.5rem', background: 'white', borderRadius: '12px', padding: '1.25rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <span style={{ color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '0.75rem' }}>Tech Comfort</span>
          <div style={{ display: 'flex', gap: '0.25rem' }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} style={{ flex: 1, height: '8px', background: i <= 4 ? '#7c3aed' : '#e5e7eb', borderRadius: '4px' }}></div>
            ))}
          </div>
          <span style={{ fontSize: '0.75rem', color: '#7c3aed', fontWeight: 600, marginTop: '0.5rem', display: 'block' }}>4/5 - Tech Savvy</span>
        </div>
      </div>
      
      {/* Right Column - Details */}
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
          {/* Goals */}
          <div style={{ background: '#dcfce7', borderRadius: '16px', padding: '1.5rem', border: '2px solid #86efac' }}>
            <h4 style={{ color: '#16a34a', marginBottom: '1rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🎯</span> Goals
            </h4>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#1e293b', lineHeight: 1.8, fontSize: '0.9375rem' }}>
              <li>Reduce documentation time during handoffs</li>
              <li>Ensure critical info isn't lost in transitions</li>
              <li>Minimize medication errors</li>
              <li>Improve team communication efficiency</li>
              <li>Spend more time on direct patient care</li>
            </ul>
          </div>
          
          {/* Frustrations */}
          <div style={{ background: '#fee2e2', borderRadius: '16px', padding: '1.5rem', border: '2px solid #fca5a5' }}>
            <h4 style={{ color: '#dc2626', marginBottom: '1rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>😤</span> Frustrations
            </h4>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', color: '#1e293b', lineHeight: 1.8, fontSize: '0.9375rem' }}>
              <li>5 different systems for patient data</li>
              <li>Manual data re-entry wastes 2+ hours/day</li>
              <li>Critical alerts buried in noise</li>
              <li>Paper-based discharge processes</li>
              <li>No real-time view of patient status</li>
            </ul>
          </div>
        </div>
        
        {/* Bio */}
        <div style={{ background: 'white', borderRadius: '16px', padding: '1.5rem', marginBottom: '1.5rem', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          <h4 style={{ color: '#475569', marginBottom: '0.75rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>📖</span> Bio
          </h4>
          <p style={{ fontSize: '1rem', color: '#1e293b', lineHeight: 1.8, margin: 0 }}>
            Sarah is a dedicated charge nurse managing a team of 12 nurses in the cardiac care unit at LifeBridge Health. With 8 years of experience, she coordinates complex patient care during shift changes and ensures smooth handoffs between teams. She's tech-savvy and frustrated with the fragmented systems that force her to spend more time on documentation than patient care. She's eager to adopt new tools that can streamline workflows.
          </p>
        </div>
        
        {/* Quote */}
        <div style={{ background: 'linear-gradient(135deg, #fef3c7, #fde68a)', borderRadius: '16px', padding: '1.5rem', borderLeft: '5px solid #f59e0b' }}>
          <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#92400e', lineHeight: 1.6, margin: 0 }}>
            "I spend more time documenting than actually caring for my patients. There has to be a better way to manage handoffs without losing critical information."
          </p>
        </div>
        
        {/* Key Behaviors */}
        <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
          {[
            { icon: '📱', label: 'Prefers mobile access during rounds' },
            { icon: '⚡', label: 'Needs quick data entry methods' },
            { icon: '🔔', label: 'Relies heavily on notifications' },
          ].map((b) => (
            <div key={b.label} style={{ background: 'white', borderRadius: '12px', padding: '1rem', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>{b.icon}</span>
              <p style={{ fontSize: '0.8125rem', color: '#475569', margin: 0 }}>{b.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ========================================
// USER JOURNEY MAP
// ========================================
export const MiroJourneyMap = () => (
  <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', border: '2px solid #fbbf24', boxShadow: '0 10px 40px rgba(251, 191, 36, 0.15)' }}>
    <div style={{ background: 'linear-gradient(90deg, #fbbf24, #f59e0b)', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <MiroLogo size={28} />
      <span style={{ color: '#1e293b', fontWeight: 700, fontSize: '1.125rem' }}>User Journey Map: Shift Handoff</span>
    </div>
    <div style={{ padding: '2rem', overflowX: 'auto' }}>
      <div style={{ minWidth: '1000px' }}>
        {/* Phase Headers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
          {['Preparation', 'Patient Review', 'Information Transfer', 'Confirmation', 'Follow-up'].map((phase, i) => (
            <div key={phase} style={{ background: '#6366f1', borderRadius: '8px', padding: '0.75rem 1rem', textAlign: 'center' }}>
              <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.6875rem' }}>Phase {i + 1}</span>
              <p style={{ color: 'white', fontWeight: 700, fontSize: '0.9375rem', margin: 0 }}>{phase}</p>
            </div>
          ))}
        </div>
        
        {/* Actions Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '100px repeat(5, 1fr)', gap: '1rem', alignItems: 'start', marginBottom: '1rem' }}>
          <div style={{ fontWeight: 700, color: '#475569', fontSize: '0.8125rem', paddingTop: '0.5rem' }}>Actions</div>
          {[
            'Reviews patient list, checks pending tasks',
            'Opens each patient record, reviews vitals and notes',
            'Verbally communicates key info to incoming nurse',
            'Both nurses verify critical items are understood',
            'Documents handoff completion, addresses questions'
          ].map((action, i) => (
            <div key={i} style={{ background: '#f8fafc', borderRadius: '8px', padding: '1rem', fontSize: '0.875rem', color: '#475569', lineHeight: 1.5 }}>{action}</div>
          ))}
        </div>
        
        {/* Emotions Row */}
        <div style={{ display: 'grid', gridTemplateColumns: '100px repeat(5, 1fr)', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
          <div style={{ fontWeight: 700, color: '#475569', fontSize: '0.8125rem' }}>Emotions</div>
          {['😊', '😐', '😰', '😓', '😌'].map((emoji, i) => (
            <div key={i} style={{ textAlign: 'center', fontSize: '2rem' }}>{emoji}</div>
          ))}
        </div>
        
        {/* Emotion Curve */}
        <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div></div>
          <svg viewBox="0 0 800 80" style={{ width: '100%', height: '80px' }}>
            <defs>
              <linearGradient id="emotionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10b981"/>
                <stop offset="30%" stopColor="#f59e0b"/>
                <stop offset="50%" stopColor="#ef4444"/>
                <stop offset="70%" stopColor="#ef4444"/>
                <stop offset="100%" stopColor="#10b981"/>
              </linearGradient>
            </defs>
            <path d="M 0 30 Q 100 20, 200 35 T 400 55 T 500 60 T 700 40 T 800 25" stroke="url(#emotionGrad)" strokeWidth="4" fill="none"/>
            {[0, 160, 320, 480, 640, 800].map((x, i) => (
              <circle key={i} cx={x === 800 ? 795 : x} cy={[30, 35, 55, 60, 40, 25][i]} r="8" fill={['#10b981', '#f59e0b', '#ef4444', '#ef4444', '#f59e0b', '#10b981'][i]}/>
            ))}
          </svg>
        </div>
        
        {/* Pain Points */}
        <div style={{ display: 'grid', gridTemplateColumns: '100px repeat(5, 1fr)', gap: '1rem', alignItems: 'start', marginBottom: '1rem' }}>
          <div style={{ fontWeight: 700, color: '#dc2626', fontSize: '0.8125rem', paddingTop: '0.5rem' }}>Pain Points</div>
          {[
            'Scattered info across systems',
            'Slow to load patient records',
            'Risk of missing critical details',
            'No structured checklist',
            'Manual documentation required'
          ].map((pain, i) => (
            <div key={i} style={{ background: '#fee2e2', borderRadius: '8px', padding: '0.75rem', fontSize: '0.8125rem', color: '#991b1b', borderLeft: '3px solid #ef4444' }}>{pain}</div>
          ))}
        </div>
        
        {/* Opportunities */}
        <div style={{ display: 'grid', gridTemplateColumns: '100px repeat(5, 1fr)', gap: '1rem', alignItems: 'start' }}>
          <div style={{ fontWeight: 700, color: '#16a34a', fontSize: '0.8125rem', paddingTop: '0.5rem' }}>Opportunities</div>
          {[
            'Unified dashboard view',
            'Pre-loaded patient summaries',
            'Smart handoff templates',
            'Digital confirmation flow',
            'Auto-generated documentation'
          ].map((opp, i) => (
            <div key={i} style={{ background: '#dcfce7', borderRadius: '8px', padding: '0.75rem', fontSize: '0.8125rem', color: '#166534', borderLeft: '3px solid #10b981' }}>{opp}</div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

// ========================================
// USER FLOW DIAGRAM
// ========================================
export const MiroUserFlow = () => (
  <div style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', border: '2px solid #fbbf24' }}>
    <div style={{ background: 'linear-gradient(90deg, #fbbf24, #f59e0b)', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <MiroLogo size={28} />
      <span style={{ color: '#1e293b', fontWeight: 700, fontSize: '1.125rem' }}>User Flow: Care Handoff Process</span>
    </div>
    <div style={{ padding: '2rem' }}>
      <svg viewBox="0 0 1000 320" style={{ width: '100%', height: 'auto' }} role="img" aria-label="User flow diagram for care handoff process">
        <title>Care Handoff User Flow</title>
        <defs>
          <marker id="arrowFlow" markerWidth="12" markerHeight="8" refX="10" refY="4" orient="auto">
            <polygon points="0 0, 12 4, 0 8" fill="#6366f1"/>
          </marker>
        </defs>
        
        {/* Start */}
        <circle cx="70" cy="160" r="35" fill="#10b981"/>
        <text x="70" y="165" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">Start</text>
        
        {/* Step 1 */}
        <rect x="150" y="120" width="140" height="80" rx="10" fill="#6366f1"/>
        <text x="220" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Select Patient</text>
        <text x="220" y="175" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10">from priority list</text>
        <line x1="105" y1="160" x2="145" y2="160" stroke="#6366f1" strokeWidth="3" markerEnd="url(#arrowFlow)"/>
        
        {/* Step 2 */}
        <rect x="340" y="120" width="140" height="80" rx="10" fill="#6366f1"/>
        <text x="410" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Review Status</text>
        <text x="410" y="175" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10">vitals, meds, notes</text>
        <line x1="290" y1="160" x2="335" y2="160" stroke="#6366f1" strokeWidth="3" markerEnd="url(#arrowFlow)"/>
        
        {/* Decision Diamond */}
        <polygon points="570,160 530,120 490,160 530,200" fill="#f59e0b"/>
        <text x="530" y="155" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Info</text>
        <text x="530" y="170" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">Complete?</text>
        <line x1="480" y1="160" x2="490" y2="160" stroke="#6366f1" strokeWidth="3"/>
        
        {/* No path */}
        <text x="530" y="230" textAnchor="middle" fill="#dc2626" fontSize="11" fontWeight="bold">No</text>
        <line x1="530" y1="200" x2="530" y2="260" stroke="#dc2626" strokeWidth="2"/>
        <rect x="460" y="260" width="140" height="50" rx="8" fill="#fee2e2" stroke="#dc2626" strokeWidth="2"/>
        <text x="530" y="290" textAnchor="middle" fill="#dc2626" fontSize="11">Add Missing Info</text>
        <line x1="460" y1="285" x2="410" y2="285" stroke="#dc2626" strokeWidth="2"/>
        <line x1="410" y1="285" x2="410" y2="205" stroke="#dc2626" strokeWidth="2" markerEnd="url(#arrowFlow)"/>
        
        {/* Yes path */}
        <text x="600" y="145" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">Yes</text>
        
        {/* Step 3 */}
        <rect x="620" y="120" width="140" height="80" rx="10" fill="#6366f1"/>
        <text x="690" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Assign Nurse</text>
        <text x="690" y="175" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10">incoming shift</text>
        <line x1="570" y1="160" x2="615" y2="160" stroke="#10b981" strokeWidth="3" markerEnd="url(#arrowFlow)"/>
        
        {/* Step 4 */}
        <rect x="810" y="120" width="140" height="80" rx="10" fill="#6366f1"/>
        <text x="880" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="600">Confirm</text>
        <text x="880" y="175" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="10">digital signature</text>
        <line x1="760" y1="160" x2="805" y2="160" stroke="#6366f1" strokeWidth="3" markerEnd="url(#arrowFlow)"/>
        
        {/* End */}
        <circle cx="990" cy="160" r="30" fill="#10b981"/>
        <text x="990" y="165" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">Done</text>
        <line x1="950" y1="160" x2="958" y2="160" stroke="#10b981" strokeWidth="3"/>
        
        {/* Swimlane Labels */}
        <rect x="20" y="30" width="100" height="28" rx="5" fill="#e0e7ff"/>
        <text x="70" y="49" textAnchor="middle" fill="#4338ca" fontSize="11" fontWeight="600">Outgoing Nurse</text>
        <rect x="20" y="62" width="100" height="28" rx="5" fill="#fce7f3"/>
        <text x="70" y="81" textAnchor="middle" fill="#be185d" fontSize="11" fontWeight="600">Incoming Nurse</text>
      </svg>
    </div>
  </div>
);

// ========================================
// EMPATHY MAP
// ========================================
export const MiroEmpathyMap = () => (
  <div style={{ background: 'linear-gradient(135deg, #fffbeb, #fef3c7)', borderRadius: '16px', overflow: 'hidden', border: '2px solid #fbbf24' }}>
    <div style={{ background: 'linear-gradient(90deg, #fbbf24, #f59e0b)', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <MiroLogo size={28} />
      <span style={{ color: '#1e293b', fontWeight: 700, fontSize: '1.125rem' }}>Empathy Map: Charge Nurse</span>
    </div>
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
        {/* Says */}
        <div style={{ background: '#dbeafe', borderRadius: '16px', padding: '1.5rem', border: '2px solid #93c5fd' }}>
          <h4 style={{ color: '#1d4ed8', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.25rem' }}>💬</span> Says
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              '"I need all patient info in one place"',
              '"These systems don\'t talk to each other"',
              '"I can\'t afford to miss anything"',
              '"Documentation takes too long"'
            ].map((quote, i) => (
              <div key={i} style={{ background: '#fef3c7', borderRadius: '8px', padding: '0.75rem', fontSize: '0.875rem', fontStyle: 'italic', transform: `rotate(${[-1, 1, -0.5, 0.5][i]}deg)`, boxShadow: '2px 2px 8px rgba(0,0,0,0.1)' }}>{quote}</div>
            ))}
          </div>
        </div>
        
        {/* Thinks */}
        <div style={{ background: '#f3e8ff', borderRadius: '16px', padding: '1.5rem', border: '2px solid #d8b4fe' }}>
          <h4 style={{ color: '#7c3aed', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.25rem' }}>💭</span> Thinks
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Am I missing something critical?',
              'How can I be more efficient?',
              'I hope the night shift gets all the info',
              'Why is this so complicated?'
            ].map((thought, i) => (
              <div key={i} style={{ background: '#fef3c7', borderRadius: '8px', padding: '0.75rem', fontSize: '0.875rem', transform: `rotate(${[0.5, -1, 0.5, -0.5][i]}deg)`, boxShadow: '2px 2px 8px rgba(0,0,0,0.1)' }}>{thought}</div>
            ))}
          </div>
        </div>
        
        {/* Does */}
        <div style={{ background: '#dcfce7', borderRadius: '16px', padding: '1.5rem', border: '2px solid #86efac' }}>
          <h4 style={{ color: '#16a34a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.25rem' }}>🏃</span> Does
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Checks multiple systems for patient info',
              'Writes notes on paper as backup',
              'Asks colleagues for clarification',
              'Stays late to complete documentation'
            ].map((action, i) => (
              <div key={i} style={{ background: '#fef3c7', borderRadius: '8px', padding: '0.75rem', fontSize: '0.875rem', transform: `rotate(${[-0.5, 1, -1, 0.5][i]}deg)`, boxShadow: '2px 2px 8px rgba(0,0,0,0.1)' }}>{action}</div>
            ))}
          </div>
        </div>
        
        {/* Feels */}
        <div style={{ background: '#fee2e2', borderRadius: '16px', padding: '1.5rem', border: '2px solid #fca5a5' }}>
          <h4 style={{ color: '#dc2626', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '1.25rem' }}>❤️</span> Feels
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              'Stressed during handoffs',
              'Frustrated with outdated systems',
              'Anxious about patient safety',
              'Exhausted from repetitive tasks'
            ].map((feeling, i) => (
              <div key={i} style={{ background: '#fef3c7', borderRadius: '8px', padding: '0.75rem', fontSize: '0.875rem', transform: `rotate(${[1, -0.5, 0.5, -1][i]}deg)`, boxShadow: '2px 2px 8px rgba(0,0,0,0.1)' }}>{feeling}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

