// Additional Miro Visual Components - Personas, Empathy Maps, Competitive Analysis

export const MiroPersona = () => (
  <div style={{ background: '#fffef5', borderRadius: '12px', overflow: 'hidden', border: '2px solid #ffd02f' }}>
    <div style={{ background: '#ffd02f', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <span style={{ color: '#050038', fontWeight: 600 }}>User Persona - Primary User</span>
    </div>
    <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '250px 1fr', gap: '2rem' }}>
      {/* Left - Photo & Demographics */}
      <div>
        <div style={{ width: '180px', height: '180px', background: 'linear-gradient(135deg, #ddd6fe, #c4b5fd)', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', boxShadow: '0 8px 32px rgba(139, 92, 246, 0.3)' }}>
          👩‍⚕️
        </div>
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b' }}>Sarah Wilson</div>
          <div style={{ fontSize: '1rem', color: '#6d28d9' }}>Charge Nurse</div>
        </div>
        <div style={{ background: '#f8fafc', borderRadius: '12px', padding: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', fontSize: '0.875rem' }}>
            <div><span style={{ color: '#64748b' }}>Age:</span> <strong>34</strong></div>
            <div><span style={{ color: '#64748b' }}>Experience:</span> <strong>8 years</strong></div>
            <div><span style={{ color: '#64748b' }}>Location:</span> <strong>Baltimore, MD</strong></div>
            <div><span style={{ color: '#64748b' }}>Shift:</span> <strong>Day (7a-7p)</strong></div>
          </div>
        </div>
      </div>
      
      {/* Right - Details */}
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {/* Goals */}
          <div style={{ background: '#dcfce7', borderRadius: '12px', padding: '1.25rem' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#16a34a', marginBottom: '0.75rem' }}>🎯 Goals</div>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.875rem', color: '#1e293b' }}>
              <li style={{ marginBottom: '0.5rem' }}>Reduce time spent on handoff documentation</li>
              <li style={{ marginBottom: '0.5rem' }}>Ensure patient safety during transitions</li>
              <li style={{ marginBottom: '0.5rem' }}>Minimize medication errors</li>
              <li>Improve team communication</li>
            </ul>
          </div>
          
          {/* Frustrations */}
          <div style={{ background: '#fee2e2', borderRadius: '12px', padding: '1.25rem' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#dc2626', marginBottom: '0.75rem' }}>😤 Frustrations</div>
            <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.875rem', color: '#1e293b' }}>
              <li style={{ marginBottom: '0.5rem' }}>Multiple systems for patient data</li>
              <li style={{ marginBottom: '0.5rem' }}>Manual data re-entry wastes time</li>
              <li style={{ marginBottom: '0.5rem' }}>Critical info gets lost in handoffs</li>
              <li>Outdated paper-based processes</li>
            </ul>
          </div>
          
          {/* Bio */}
          <div style={{ background: '#f1f5f9', borderRadius: '12px', padding: '1.25rem', gridColumn: 'span 2' }}>
            <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#475569', marginBottom: '0.75rem' }}>📖 Bio</div>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#1e293b', lineHeight: 1.6 }}>
              Sarah is a dedicated charge nurse who manages a team of 12 nurses in the cardiac care unit. 
              She's responsible for coordinating patient care during shift changes and ensuring smooth handoffs. 
              She's tech-savvy but frustrated with the current fragmented systems that slow down her workflow.
            </p>
          </div>
          
          {/* Quote */}
          <div style={{ background: '#fef3c7', borderRadius: '12px', padding: '1.25rem', gridColumn: 'span 2', borderLeft: '4px solid #f59e0b' }}>
            <div style={{ fontSize: '1.125rem', fontStyle: 'italic', color: '#92400e' }}>
              "I spend more time documenting than actually caring for my patients. There has to be a better way."
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const MiroEmpathyMap = () => (
  <div style={{ background: '#1a1a2e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 208, 47, 0.3)' }}>
    <div style={{ background: '#ffd02f', padding: '0.75rem 1.5rem' }}>
      <span style={{ color: '#050038', fontWeight: 600 }}>Empathy Map - Charge Nurse</span>
    </div>
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
        {/* Says */}
        <div style={{ background: '#12121a', borderRadius: '12px', padding: '1.5rem', border: '2px solid #10b981' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>💬</span>
            <span style={{ fontWeight: 600, color: '#10b981' }}>SAYS</span>
          </div>
          {['"I need patient info NOW, not in 5 minutes"', '"The system crashed again during handoff"', '"I wish everything was in one place"'].map((q, i) => (
            <div key={i} style={{ background: '#a7f3d0', padding: '0.75rem', borderRadius: '6px', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#1e293b', fontStyle: 'italic' }}>{q}</div>
          ))}
        </div>
        
        {/* Thinks */}
        <div style={{ background: '#12121a', borderRadius: '12px', padding: '1.5rem', border: '2px solid #8b5cf6' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>🧠</span>
            <span style={{ fontWeight: 600, color: '#8b5cf6' }}>THINKS</span>
          </div>
          {['What if I miss something critical?', 'This process is inefficient', 'My team deserves better tools'].map((t, i) => (
            <div key={i} style={{ background: '#ddd6fe', padding: '0.75rem', borderRadius: '6px', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#1e293b' }}>{t}</div>
          ))}
        </div>
        
        {/* Does */}
        <div style={{ background: '#12121a', borderRadius: '12px', padding: '1.5rem', border: '2px solid #f59e0b' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>✋</span>
            <span style={{ fontWeight: 600, color: '#f59e0b' }}>DOES</span>
          </div>
          {['Takes paper notes as backup', 'Calls colleagues to verify info', 'Double-checks everything manually', 'Works through lunch breaks'].map((d, i) => (
            <div key={i} style={{ background: '#fef3c7', padding: '0.75rem', borderRadius: '6px', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#1e293b' }}>{d}</div>
          ))}
        </div>
        
        {/* Feels */}
        <div style={{ background: '#12121a', borderRadius: '12px', padding: '1.5rem', border: '2px solid #ef4444' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '1.5rem' }}>❤️</span>
            <span style={{ fontWeight: 600, color: '#ef4444' }}>FEELS</span>
          </div>
          {['Frustrated with technology', 'Anxious about patient safety', 'Overwhelmed during busy shifts', 'Hopeful for improvement'].map((f, i) => (
            <div key={i} style={{ background: '#fecaca', padding: '0.75rem', borderRadius: '6px', marginBottom: '0.5rem', fontSize: '0.875rem', color: '#1e293b' }}>{f}</div>
          ))}
        </div>
      </div>
      
      {/* Pain & Gain */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
        <div style={{ background: '#12121a', borderRadius: '12px', padding: '1.5rem', border: '2px solid #dc2626' }}>
          <div style={{ fontWeight: 600, color: '#dc2626', marginBottom: '0.75rem' }}>😖 PAINS</div>
          <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>Time wasted on manual processes • Fear of errors • System downtime • Information silos</div>
        </div>
        <div style={{ background: '#12121a', borderRadius: '12px', padding: '1.5rem', border: '2px solid #10b981' }}>
          <div style={{ fontWeight: 600, color: '#10b981', marginBottom: '0.75rem' }}>🎁 GAINS</div>
          <div style={{ fontSize: '0.875rem', color: '#94a3b8' }}>More time for patients • Confidence in handoffs • Single source of truth • Team efficiency</div>
        </div>
      </div>
    </div>
  </div>
);

export const MiroCompetitiveAnalysis = () => (
  <div style={{ background: '#fffef5', borderRadius: '12px', overflow: 'hidden', border: '2px solid #ffd02f' }}>
    <div style={{ background: '#ffd02f', padding: '0.75rem 1.5rem' }}>
      <span style={{ color: '#050038', fontWeight: 600 }}>Competitive Analysis Matrix</span>
    </div>
    <div style={{ padding: '1.5rem', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
        <thead>
          <tr style={{ background: '#f1f5f9' }}>
            <th style={{ padding: '1rem', textAlign: 'left', fontSize: '0.875rem', fontWeight: 600, color: '#1e293b', borderBottom: '2px solid #e2e8f0' }}>Feature</th>
            <th style={{ padding: '1rem', textAlign: 'center', fontSize: '0.875rem', fontWeight: 600, color: '#1e293b', borderBottom: '2px solid #e2e8f0' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🏥</span>
                <span>CareFlow (Ours)</span>
              </div>
            </th>
            <th style={{ padding: '1rem', textAlign: 'center', fontSize: '0.875rem', fontWeight: 600, color: '#1e293b', borderBottom: '2px solid #e2e8f0' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🔵</span>
                <span>Epic</span>
              </div>
            </th>
            <th style={{ padding: '1rem', textAlign: 'center', fontSize: '0.875rem', fontWeight: 600, color: '#1e293b', borderBottom: '2px solid #e2e8f0' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🟢</span>
                <span>Cerner</span>
              </div>
            </th>
            <th style={{ padding: '1rem', textAlign: 'center', fontSize: '0.875rem', fontWeight: 600, color: '#1e293b', borderBottom: '2px solid #e2e8f0' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}>
                <span style={{ fontSize: '1.5rem' }}>🟠</span>
                <span>Meditech</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            { feature: 'Real-time Handoffs', ours: '✅', epic: '⚠️', cerner: '⚠️', meditech: '❌' },
            { feature: 'Mobile App', ours: '✅', epic: '✅', cerner: '⚠️', meditech: '❌' },
            { feature: 'Push Notifications', ours: '✅', epic: '⚠️', cerner: '❌', meditech: '❌' },
            { feature: 'Integration APIs', ours: '✅', epic: '✅', cerner: '✅', meditech: '⚠️' },
            { feature: 'Custom Workflows', ours: '✅', epic: '⚠️', cerner: '⚠️', meditech: '❌' },
            { feature: 'Offline Mode', ours: '✅', epic: '❌', cerner: '❌', meditech: '❌' },
            { feature: 'Voice Commands', ours: '✅', epic: '❌', cerner: '❌', meditech: '❌' },
            { feature: 'Ease of Use', ours: '✅', epic: '⚠️', cerner: '⚠️', meditech: '⚠️' },
          ].map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? 'white' : '#f8fafc' }}>
              <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#1e293b', borderBottom: '1px solid #e2e8f0', fontWeight: 500 }}>{row.feature}</td>
              <td style={{ padding: '0.75rem 1rem', textAlign: 'center', fontSize: '1.25rem', borderBottom: '1px solid #e2e8f0', background: 'rgba(16, 185, 129, 0.05)' }}>{row.ours}</td>
              <td style={{ padding: '0.75rem 1rem', textAlign: 'center', fontSize: '1.25rem', borderBottom: '1px solid #e2e8f0' }}>{row.epic}</td>
              <td style={{ padding: '0.75rem 1rem', textAlign: 'center', fontSize: '1.25rem', borderBottom: '1px solid #e2e8f0' }}>{row.cerner}</td>
              <td style={{ padding: '0.75rem 1rem', textAlign: 'center', fontSize: '1.25rem', borderBottom: '1px solid #e2e8f0' }}>{row.meditech}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#64748b' }}>
          <span>✅</span> Full Support
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#64748b' }}>
          <span>⚠️</span> Partial/Limited
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#64748b' }}>
          <span>❌</span> Not Supported
        </div>
      </div>
    </div>
  </div>
);

export const MiroSitemap = () => (
  <div style={{ background: '#1a1a2e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 208, 47, 0.3)' }}>
    <div style={{ background: '#ffd02f', padding: '0.75rem 1.5rem' }}>
      <span style={{ color: '#050038', fontWeight: 600 }}>Information Architecture - Site Map</span>
    </div>
    <svg viewBox="0 0 800 350" style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#64748b"/>
        </marker>
      </defs>
      
      {/* Home */}
      <rect x="350" y="20" width="100" height="40" rx="8" fill="#6366f1"/>
      <text x="400" y="45" textAnchor="middle" fontSize="12" fill="white" fontWeight="600">Home</text>
      
      {/* Level 1 */}
      <line x1="400" y1="60" x2="400" y2="80" stroke="#64748b" strokeWidth="2"/>
      <line x1="100" y1="80" x2="700" y2="80" stroke="#64748b" strokeWidth="2"/>
      
      {['Dashboard', 'Patients', 'Schedule', 'Reports', 'Settings'].map((item, i) => {
        const x = 100 + i * 150;
        return (
          <g key={item}>
            <line x1={x} y1="80" x2={x} y2="100" stroke="#64748b" strokeWidth="2"/>
            <rect x={x - 50} y="100" width="100" height="35" rx="6" fill="#10b981"/>
            <text x={x} y="122" textAnchor="middle" fontSize="11" fill="white" fontWeight="500">{item}</text>
          </g>
        );
      })}
      
      {/* Level 2 - Dashboard */}
      <line x1="100" y1="135" x2="100" y2="155" stroke="#64748b" strokeWidth="1.5"/>
      <line x1="40" y1="155" x2="160" y2="155" stroke="#64748b" strokeWidth="1.5"/>
      {['Overview', 'Alerts'].map((item, i) => {
        const x = 40 + i * 120;
        return (
          <g key={item}>
            <line x1={x} y1="155" x2={x} y2="170" stroke="#64748b" strokeWidth="1.5"/>
            <rect x={x - 40} y="170" width="80" height="28" rx="4" fill="#1e293b" stroke="#64748b"/>
            <text x={x} y="188" textAnchor="middle" fontSize="10" fill="#94a3b8">{item}</text>
          </g>
        );
      })}
      
      {/* Level 2 - Patients */}
      <line x1="250" y1="135" x2="250" y2="155" stroke="#64748b" strokeWidth="1.5"/>
      <line x1="180" y1="155" x2="320" y2="155" stroke="#64748b" strokeWidth="1.5"/>
      {['List', 'Detail', 'Handoff'].map((item, i) => {
        const x = 180 + i * 70;
        return (
          <g key={item}>
            <line x1={x} y1="155" x2={x} y2="170" stroke="#64748b" strokeWidth="1.5"/>
            <rect x={x - 30} y="170" width="60" height="28" rx="4" fill="#1e293b" stroke="#64748b"/>
            <text x={x} y="188" textAnchor="middle" fontSize="10" fill="#94a3b8">{item}</text>
          </g>
        );
      })}
      
      {/* Level 3 - Patient Detail */}
      <line x1="250" y1="198" x2="250" y2="218" stroke="#64748b" strokeWidth="1"/>
      <line x1="200" y1="218" x2="300" y2="218" stroke="#64748b" strokeWidth="1"/>
      {['Vitals', 'Notes', 'Meds'].map((item, i) => {
        const x = 200 + i * 50;
        return (
          <g key={item}>
            <line x1={x} y1="218" x2={x} y2="230" stroke="#64748b" strokeWidth="1"/>
            <rect x={x - 22} y="230" width="44" height="22" rx="3" fill="#2d3748"/>
            <text x={x} y="244" textAnchor="middle" fontSize="9" fill="#64748b">{item}</text>
          </g>
        );
      })}
      
      {/* Level 2 - Schedule */}
      <line x1="400" y1="135" x2="400" y2="155" stroke="#64748b" strokeWidth="1.5"/>
      <line x1="350" y1="155" x2="450" y2="155" stroke="#64748b" strokeWidth="1.5"/>
      {['Calendar', 'Shifts'].map((item, i) => {
        const x = 350 + i * 100;
        return (
          <g key={item}>
            <line x1={x} y1="155" x2={x} y2="170" stroke="#64748b" strokeWidth="1.5"/>
            <rect x={x - 35} y="170" width="70" height="28" rx="4" fill="#1e293b" stroke="#64748b"/>
            <text x={x} y="188" textAnchor="middle" fontSize="10" fill="#94a3b8">{item}</text>
          </g>
        );
      })}
      
      {/* Legend */}
      <rect x="580" y="280" width="200" height="60" rx="8" fill="#12121a"/>
      <text x="600" y="300" fontSize="10" fill="#94a3b8" fontWeight="600">LEGEND</text>
      <rect x="600" y="310" width="12" height="12" rx="2" fill="#6366f1"/>
      <text x="620" y="320" fontSize="9" fill="#64748b">Root</text>
      <rect x="670" y="310" width="12" height="12" rx="2" fill="#10b981"/>
      <text x="690" y="320" fontSize="9" fill="#64748b">L1 Nav</text>
      <rect x="740" y="310" width="12" height="12" rx="2" fill="#1e293b" stroke="#64748b"/>
      <text x="760" y="320" fontSize="9" fill="#64748b">Pages</text>
    </svg>
  </div>
);

export const MiroUserStoryMap = () => (
  <div style={{ background: '#fffef5', borderRadius: '12px', overflow: 'hidden', border: '2px solid #ffd02f' }}>
    <div style={{ background: '#ffd02f', padding: '0.75rem 1.5rem' }}>
      <span style={{ color: '#050038', fontWeight: 600 }}>User Story Map - Care Handoff Epic</span>
    </div>
    <div style={{ padding: '1.5rem', overflowX: 'auto' }}>
      <div style={{ display: 'flex', gap: '0.5rem', minWidth: '800px' }}>
        {/* Activities */}
        {[
          { activity: 'Prepare Handoff', tasks: ['Review patient list', 'Check alerts', 'Gather notes'], stories: [['As a nurse, I want to see my patients', 'Filter by status'], ['View critical alerts', 'Acknowledge alerts'], ['Access shift notes', 'Voice-to-text notes']] },
          { activity: 'Conduct Handoff', tasks: ['Share patient info', 'Discuss concerns', 'Transfer ownership'], stories: [['View patient summary', 'See recent vitals'], ['Add handoff notes', 'Flag concerns'], ['Confirm receipt', 'Digital signature']] },
          { activity: 'Complete Handoff', tasks: ['Verify receipt', 'Update status', 'Notify team'], stories: [['Receive confirmation', 'View handoff history'], ['Mark as complete', 'Auto-update EHR'], ['Send Slack alert', 'Email summary']] },
        ].map((act, ai) => (
          <div key={ai} style={{ flex: 1 }}>
            {/* Activity */}
            <div style={{ background: '#6366f1', padding: '0.75rem', borderRadius: '8px', marginBottom: '0.5rem', textAlign: 'center' }}>
              <span style={{ fontWeight: 600, color: 'white', fontSize: '0.875rem' }}>{act.activity}</span>
            </div>
            {/* Tasks */}
            <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '0.5rem' }}>
              {act.tasks.map((task, ti) => (
                <div key={ti} style={{ flex: 1, background: '#10b981', padding: '0.5rem', borderRadius: '6px', textAlign: 'center' }}>
                  <span style={{ fontSize: '0.6875rem', color: 'white' }}>{task}</span>
                </div>
              ))}
            </div>
            {/* Stories by priority */}
            <div style={{ display: 'flex', gap: '0.25rem' }}>
              {act.stories.map((storyCol, si) => (
                <div key={si} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {storyCol.map((story, sti) => (
                    <div key={sti} style={{ 
                      background: sti === 0 ? '#fef08a' : '#fed7aa',
                      padding: '0.5rem',
                      borderRadius: '4px',
                      fontSize: '0.625rem',
                      color: '#1e293b',
                      boxShadow: '1px 1px 3px rgba(0,0,0,0.1)'
                    }}>
                      {story}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Priority Labels */}
      <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '16px', height: '16px', background: '#fef08a', borderRadius: '2px' }}></div>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>MVP (Release 1)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '16px', height: '16px', background: '#fed7aa', borderRadius: '2px' }}></div>
          <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Release 2</span>
        </div>
      </div>
    </div>
  </div>
);

