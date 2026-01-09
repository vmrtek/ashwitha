import { Link } from 'react-router-dom';
import { AirtableLogo, FigmaLogo, MiroLogo } from '../components/Icons';

// ========================================
// AIRTABLE COMPONENTS - BANKING
// ========================================

const AirtableLoanApplications = () => {
  const applications = [
    { id: 'LN-2024-001', applicant: 'John Mitchell', type: 'Personal Loan', amount: '$25,000', status: 'Approved', score: 780, stage: 'Disbursement', officer: 'MK' },
    { id: 'LN-2024-002', applicant: 'Sarah Williams', type: 'Home Mortgage', amount: '$450,000', status: 'Under Review', score: 720, stage: 'Documentation', officer: 'JL' },
    { id: 'LN-2024-003', applicant: 'David Chen', type: 'Auto Loan', amount: '$35,000', status: 'Pending', score: 695, stage: 'Credit Check', officer: 'MK' },
    { id: 'LN-2024-004', applicant: 'Lisa Anderson', type: 'Business Loan', amount: '$150,000', status: 'Approved', score: 810, stage: 'Disbursement', officer: 'RB' },
    { id: 'LN-2024-005', applicant: 'Robert Taylor', type: 'Personal Loan', amount: '$15,000', status: 'Rejected', score: 580, stage: 'Closed', officer: 'JL' },
    { id: 'LN-2024-006', applicant: 'Jennifer Brown', type: 'Home Equity', amount: '$75,000', status: 'Under Review', score: 745, stage: 'Appraisal', officer: 'RB' },
  ];

  const statusColors = { 'Approved': '#10b981', 'Under Review': '#f59e0b', 'Pending': '#6366f1', 'Rejected': '#ef4444' };
  const scoreColors = (score) => score >= 750 ? '#10b981' : score >= 670 ? '#f59e0b' : '#ef4444';

  return (
    <div style={{ background: '#0d1117', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
      <div style={{ background: 'linear-gradient(90deg, #047857, #10b981)', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AirtableLogo size={24} />
          <span style={{ color: 'white', fontWeight: 600 }}>FinConnect - Loan Applications</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', fontSize: '0.75rem', color: 'white' }}>1,247 Applications</span>
          <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', fontSize: '0.75rem', color: 'white' }}>$12.4M Active</span>
        </div>
      </div>
      
      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', padding: '1rem 1.5rem', background: '#161b22', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        {[
          { label: 'New Applications', value: '45', change: '+12%' },
          { label: 'Under Review', value: '128', change: '' },
          { label: 'Approval Rate', value: '67%', change: '+3%' },
          { label: 'Avg Processing', value: '3.2 days', change: '-0.5' },
          { label: 'This Month', value: '$2.1M', change: '+18%' },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <p style={{ color: '#8b949e', fontSize: '0.75rem', marginBottom: '0.25rem' }}>{stat.label}</p>
            <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>{stat.value}</span>
            {stat.change && <span style={{ fontSize: '0.75rem', color: '#10b981', marginLeft: '0.5rem' }}>{stat.change}</span>}
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#161b22' }}>
              {['Application ID', 'Applicant', 'Loan Type', 'Amount', 'Status', 'Credit Score', 'Stage', 'Officer'].map((h) => (
                <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {applications.map((a, i) => (
              <tr key={a.id} style={{ background: i % 2 === 0 ? '#0d1117' : '#161b22' }}>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#10b981', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{a.id}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#c9d1d9', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{a.applicant}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{a.type}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: 'white', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{a.amount}</td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ padding: '0.25rem 0.5rem', background: `${statusColors[a.status]}20`, color: statusColors[a.status], borderRadius: '4px', fontSize: '0.75rem', fontWeight: 500 }}>{a.status}</span>
                </td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ color: scoreColors(a.score), fontWeight: 600 }}>{a.score}</span>
                </td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{a.stage}</td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ width: '28px', height: '28px', background: 'linear-gradient(135deg, #047857, #10b981)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6875rem', color: 'white', fontWeight: 600 }}>{a.officer}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AirtableApprovalWorkflow = () => {
  const columns = [
    { title: 'Document Collection', color: '#6b7280', items: [
      { title: 'Sarah Williams - Income Verification', priority: 'High', docs: '3/5' },
      { title: 'David Chen - Employment Letter', priority: 'Medium', docs: '4/6' },
    ]},
    { title: 'Credit Review', color: '#6366f1', items: [
      { title: 'Jennifer Brown - Score Analysis', priority: 'High', docs: '5/5' },
      { title: 'New Application #007', priority: 'Low', docs: '6/6' },
    ]},
    { title: 'Underwriting', color: '#f59e0b', items: [
      { title: 'Lisa Anderson - Final Review', priority: 'Critical', docs: '8/8' },
    ]},
    { title: 'Approved', color: '#10b981', items: [
      { title: 'John Mitchell - Ready for Disbursement', priority: 'High', docs: '7/7' },
      { title: 'Application #998 - Completed', priority: 'Low', docs: '6/6' },
      { title: 'Application #997 - Completed', priority: 'Medium', docs: '8/8' },
    ]},
  ];

  const priorityColors = { 'Critical': '#ef4444', 'High': '#f97316', 'Medium': '#f59e0b', 'Low': '#10b981' };

  return (
    <div style={{ background: '#0d1117', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(16, 185, 129, 0.3)' }}>
      <div style={{ background: 'linear-gradient(90deg, #047857, #10b981)', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.25rem' }}>📋</span>
        <span style={{ color: 'white', fontWeight: 600 }}>Loan Approval Workflow</span>
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
                <div key={i} style={{ background: '#161b22', borderRadius: '8px', padding: '1rem', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ padding: '0.125rem 0.5rem', background: `${priorityColors[item.priority]}20`, color: priorityColors[item.priority], borderRadius: '4px', fontSize: '0.625rem', fontWeight: 600 }}>{item.priority}</span>
                    <span style={{ fontSize: '0.625rem', color: '#8b949e' }}>📄 {item.docs}</span>
                  </div>
                  <p style={{ fontSize: '0.8125rem', color: '#c9d1d9' }}>{item.title}</p>
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
// FIGMA WIREFRAMES - BANKING
// ========================================

const FigmaOnboardingFlow = () => (
  <div style={{ background: '#1e1e1e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(162, 89, 255, 0.3)' }}>
    <div style={{ background: '#2c2c2c', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #3c3c3c' }}>
      <div style={{ display: 'flex', gap: '0.375rem' }}>
        <span style={{ width: '12px', height: '12px', background: '#ff5f57', borderRadius: '50%' }}></span>
        <span style={{ width: '12px', height: '12px', background: '#febc2e', borderRadius: '50%' }}></span>
        <span style={{ width: '12px', height: '12px', background: '#28c840', borderRadius: '50%' }}></span>
      </div>
      <span style={{ color: '#8b8b8b', fontSize: '0.75rem', marginLeft: '0.5rem' }}>FinConnect - Customer Onboarding.fig</span>
    </div>
    <div style={{ background: 'linear-gradient(135deg, #064e3b, #047857)', padding: '0' }}>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ width: '200px', background: '#064e3b', borderRight: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem 0', minHeight: '450px' }}>
          <div style={{ padding: '0 1rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '32px', height: '32px', background: '#10b981', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontSize: '1rem' }}>🏦</span>
              </div>
              <span style={{ color: 'white', fontWeight: 600, fontSize: '0.9375rem' }}>FinConnect</span>
            </div>
          </div>
          {[
            { icon: '📊', label: 'Dashboard', active: false },
            { icon: '📝', label: 'Applications', active: true },
            { icon: '👥', label: 'Customers', active: false },
            { icon: '📄', label: 'Documents', active: false },
            { icon: '✅', label: 'Approvals', active: false },
            { icon: '📈', label: 'Reports', active: false },
          ].map((item) => (
            <div key={item.label} style={{ 
              padding: '0.625rem 1rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              background: item.active ? 'rgba(16, 185, 129, 0.2)' : 'transparent',
              borderLeft: item.active ? '3px solid #10b981' : '3px solid transparent',
            }}>
              <span style={{ fontSize: '0.875rem' }}>{item.icon}</span>
              <span style={{ color: item.active ? 'white' : '#94a3b8', fontSize: '0.8125rem' }}>{item.label}</span>
            </div>
          ))}
        </div>
        
        {/* Main Content - Application Form */}
        <div style={{ flex: 1, padding: '1.5rem', background: '#047857' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h1 style={{ color: 'white', fontSize: '1.125rem', fontWeight: 600 }}>New Loan Application</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: '#a7f3d0', fontSize: '0.8125rem' }}>Step 2 of 5</span>
              <div style={{ width: '120px', height: '6px', background: 'rgba(255,255,255,0.2)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: '40%', height: '100%', background: '#10b981', borderRadius: '3px' }}></div>
              </div>
            </div>
          </div>
          
          {/* Steps */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
            {['Personal Info', 'Employment', 'Financial', 'Documents', 'Review'].map((step, i) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{ 
                  width: '28px', 
                  height: '28px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: i < 2 ? '#10b981' : 'rgba(255,255,255,0.2)',
                  color: 'white'
                }}>
                  {i < 1 ? '✓' : i + 1}
                </div>
                <span style={{ color: i <= 1 ? 'white' : '#94a3b8', fontSize: '0.75rem' }}>{step}</span>
              </div>
            ))}
          </div>
          
          {/* Form */}
          <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '16px', padding: '1.5rem' }}>
            <h2 style={{ color: 'white', fontSize: '1rem', marginBottom: '1rem' }}>Employment Details</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ color: '#a7f3d0', fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem' }}>Employer Name</label>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.75rem', color: 'white', fontSize: '0.875rem' }}>Acme Corporation</div>
              </div>
              <div>
                <label style={{ color: '#a7f3d0', fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem' }}>Job Title</label>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.75rem', color: 'white', fontSize: '0.875rem' }}>Senior Manager</div>
              </div>
              <div>
                <label style={{ color: '#a7f3d0', fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem' }}>Annual Income</label>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.75rem', color: '#10b981', fontSize: '0.875rem', fontWeight: 600 }}>$95,000</div>
              </div>
              <div>
                <label style={{ color: '#a7f3d0', fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem' }}>Years Employed</label>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '0.75rem', color: 'white', fontSize: '0.875rem' }}>5 years</div>
              </div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
              <button style={{ padding: '0.625rem 1.25rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '8px', color: 'white', fontSize: '0.875rem' }}>← Previous</button>
              <button style={{ padding: '0.625rem 1.25rem', background: '#10b981', border: 'none', borderRadius: '8px', color: 'white', fontSize: '0.875rem', fontWeight: 600 }}>Continue →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ========================================
// MIRO USER RESEARCH - BANKING
// ========================================

const MiroBankingPersona = () => (
  <div style={{ background: '#fffef5', borderRadius: '12px', overflow: 'hidden', border: '2px solid #ffd02f' }}>
    <div style={{ background: '#ffd02f', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <MiroLogo size={24} />
      <span style={{ color: '#050038', fontWeight: 600 }}>User Persona: Loan Officer</span>
    </div>
    <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #a7f3d0, #6ee7b7)', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>👨‍💼</div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.25rem' }}>Marcus Johnson</h3>
        <p style={{ color: '#047857', fontWeight: 600, fontSize: '0.9375rem' }}>Senior Loan Officer</p>
        <div style={{ marginTop: '1rem', textAlign: 'left', background: '#f8fafc', borderRadius: '8px', padding: '1rem', fontSize: '0.8125rem' }}>
          <p style={{ marginBottom: '0.5rem' }}><strong>Age:</strong> 38</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Experience:</strong> 12 years</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Cases/Month:</strong> 45+</p>
          <p><strong>Specialization:</strong> Mortgages</p>
        </div>
      </div>
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ background: '#dcfce7', borderRadius: '12px', padding: '1.25rem' }}>
            <h4 style={{ color: '#16a34a', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>🎯 Goals</h4>
            <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.8125rem', color: '#1e293b' }}>
              <li>Process applications faster</li>
              <li>Reduce document back-and-forth</li>
              <li>Maintain compliance standards</li>
              <li>Improve customer satisfaction</li>
            </ul>
          </div>
          <div style={{ background: '#fee2e2', borderRadius: '12px', padding: '1.25rem' }}>
            <h4 style={{ color: '#dc2626', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>😤 Frustrations</h4>
            <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.8125rem', color: '#1e293b' }}>
              <li>Manual data entry from paper forms</li>
              <li>Chasing customers for documents</li>
              <li>Multiple systems for different tasks</li>
              <li>Compliance audits are time-consuming</li>
            </ul>
          </div>
        </div>
        <div style={{ background: '#d1fae5', borderRadius: '12px', padding: '1.25rem', borderLeft: '4px solid #047857' }}>
          <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#064e3b' }}>
            "I want to spend more time helping customers and less time on administrative tasks."
          </p>
        </div>
      </div>
    </div>
  </div>
);

const MiroLoanJourney = () => (
  <div style={{ background: '#1a1a2e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 208, 47, 0.3)' }}>
    <div style={{ background: '#ffd02f', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <MiroLogo size={24} />
      <span style={{ color: '#050038', fontWeight: 600 }}>Customer Journey: Loan Application</span>
    </div>
    <div style={{ padding: '2rem', background: 'white' }}>
      <svg viewBox="0 0 900 220" style={{ width: '100%', height: 'auto' }}>
        {/* Journey stages */}
        {[
          { x: 50, label: 'Awareness', emotion: 'curious', icon: '🔍' },
          { x: 200, label: 'Application', emotion: 'hopeful', icon: '📝' },
          { x: 350, label: 'Document Upload', emotion: 'anxious', icon: '📄' },
          { x: 500, label: 'Review Wait', emotion: 'stressed', icon: '⏳' },
          { x: 650, label: 'Decision', emotion: 'anticipation', icon: '✅' },
          { x: 800, label: 'Disbursement', emotion: 'happy', icon: '🎉' },
        ].map((stage, i) => (
          <g key={stage.label}>
            <rect x={stage.x - 45} y="20" width="90" height="50" rx="8" fill="#047857"/>
            <text x={stage.x} y="40" textAnchor="middle" fill="white" fontSize="10" fontWeight="500">{stage.label}</text>
            <text x={stage.x} y="55" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="16">{stage.icon}</text>
            
            {/* Emotion line */}
            <circle cx={stage.x} cy={[100, 90, 130, 140, 110, 80][i]} r="8" fill="#10b981"/>
            
            {/* Touchpoint */}
            <rect x={stage.x - 40} y="160" width="80" height="40" rx="6" fill="#f0fdf4" stroke="#10b981"/>
            <text x={stage.x} y="175" textAnchor="middle" fill="#047857" fontSize="8">{['Website', 'Form', 'Portal', 'Email', 'Call', 'App'][i]}</text>
            <text x={stage.x} y="188" textAnchor="middle" fill="#6b7280" fontSize="7">{['Research', 'Submit', 'Upload', 'Updates', 'Notify', 'Confirm'][i]}</text>
          </g>
        ))}
        
        {/* Emotion line connecting dots */}
        <path d="M50,100 Q125,85 200,90 T350,130 T500,140 T650,110 T800,80" fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="5,5"/>
        
        {/* Labels */}
        <text x="20" y="100" fontSize="9" fill="#6b7280">Emotion</text>
        <text x="20" y="180" fontSize="9" fill="#6b7280">Touchpoint</text>
      </svg>
    </div>
  </div>
);

// ========================================
// MAIN COMPONENT
// ========================================

function BankingProject() {
  return (
    <>
      <header className="page-hero" style={{ background: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)' }}>
        <div className="page-hero-content">
          <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(16, 185, 129, 0.3)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: '#a7f3d0', marginBottom: '1rem' }}>BANKING</span>
          <h1>FinConnect: Customer Onboarding & Loan Portal</h1>
          <p className="page-subtitle">
            Secure digital banking platform for customer onboarding and loan applications,
            featuring automated document verification, real-time status tracking, and compliance management.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.875rem' }}>22 Weeks</span>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.875rem' }}>Lead Product Designer</span>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.875rem' }}>Metro Bank</span>
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
                FinConnect is a comprehensive digital banking platform that transforms the customer
                onboarding and loan application experience. The system streamlines document collection,
                automates verification processes, and provides real-time visibility for both customers and loan officers.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', borderRadius: '16px', padding: '1.5rem', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Tools Used</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><AirtableLogo size={28} /><span>Airtable - Application Tracking</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><FigmaLogo size={28} /><span>Figma - Portal Design</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><MiroLogo size={28} /><span>Miro - Journey Mapping</span></div>
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
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>Loan Management in Airtable</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Application tracking with approval workflows and document management</p>
            </div>
          </div>
          <AirtableLoanApplications />
          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Approval Workflow Kanban</h3>
            <AirtableApprovalWorkflow />
          </div>
        </div>
      </section>

      {/* Wireframes Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <FigmaLogo size={40} />
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>Onboarding Flow Design in Figma</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Multi-step application forms with progress tracking</p>
            </div>
          </div>
          <FigmaOnboardingFlow />
        </div>
      </section>

      {/* User Research Section */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <MiroLogo size={40} />
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>User Research in Miro</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Personas and customer journey mapping</p>
            </div>
          </div>
          <div style={{ marginBottom: '3rem' }}><MiroBankingPersona /></div>
          <MiroLoanJourney />
        </div>
      </section>

      {/* Results */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>Results & Impact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { value: '45%', label: 'Faster onboarding', icon: '⚡' },
              { value: '30%', label: 'Higher approval rate', icon: '✅' },
              { value: '20%', label: 'More completions', icon: '📈' },
              { value: '25%', label: 'Faster review process', icon: '⏱️' },
            ].map((stat) => (
              <div key={stat.label} style={{ background: 'var(--bg-card)', borderRadius: '16px', padding: '2rem', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>{stat.icon}</span>
                <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: '#10b981', display: 'block', marginBottom: '0.5rem' }}>{stat.value}</span>
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

export default BankingProject;

