import { Link } from 'react-router-dom';
import { 
  AirtableLogo, 
  FigmaLogo, 
  MiroLogo,
  HealthcareIcon,
  RetailIcon,
  ManufacturingIcon,
  EcommerceIcon,
  BankingIcon,
  TimelineIcon,
  KanbanIcon,
  LinkIcon,
  WireframeLogo
} from '../components/Icons';

function Projects() {
  const projects = [
    {
      id: 'healthcare',
      industry: 'Healthcare',
      Icon: HealthcareIcon,
      color: '#ef4444',
      title: 'CareFlow: Clinical Workflow Management System',
      subtitle: 'End-to-end patient care coordination platform for a 500+ bed hospital network',
      duration: '16 Weeks',
      role: 'Lead Product Designer',
      team: '2 Product Designers, 1 Product Manager, 8 Engineers',
      overview: 'Designed a comprehensive clinical workflow management system for LifeBridge Health\'s 500+ bed hospital network. The platform streamlines patient admissions, care coordination, discharge planning, and cross-departmental communication, replacing 5 legacy systems.',
      challenge: {
        title: 'The Challenge',
        problems: [
          'Hospital staff struggled with 5 fragmented systems for patient tracking',
          '45-minute average delays in care handoffs between departments',
          'Nurses spent 2+ hours daily on manual documentation and data entry',
          'No unified view of patient journey across departments',
          'Paper-based discharge planning causing 30% readmission rate'
        ]
      },
      discovery: {
        title: 'Discovery & Research',
        activities: [
          { tool: 'Miro', activity: 'Conducted 25+ stakeholder interviews mapped on affinity diagrams' },
          { tool: 'Miro', activity: 'Created current-state journey maps for 6 clinical workflows' },
          { tool: 'Miro', activity: 'Facilitated 4 collaborative workshops with nurses, doctors, and admin staff' },
          { tool: 'Figma', activity: 'Documented 8 user personas with detailed pain points and goals' },
          { tool: 'Airtable', activity: 'Built research repository linking insights to design decisions' }
        ]
      },
      airtable: {
        title: 'Airtable Product Roadmap',
        description: 'Built a comprehensive Airtable system to manage the entire product lifecycle, from feature ideation to release tracking.',
        tables: [
          { name: 'Features', records: '150+', description: 'All product features with status, priority, and ownership' },
          { name: 'User Stories', records: '320+', description: 'Linked to features with acceptance criteria' },
          { name: 'Requirements', records: '200+', description: 'Business and technical requirements' },
          { name: 'Sprints', records: '24', description: 'Sprint planning with capacity tracking' },
          { name: 'Releases', records: '6', description: 'Quarterly releases with feature rollups' }
        ],
        views: [
          { type: 'Timeline', icon: TimelineIcon, description: '6-quarter development roadmap with dependencies' },
          { type: 'Kanban', icon: KanbanIcon, description: 'Sprint boards for each development team' },
          { type: 'Gallery', description: 'Feature showcase for stakeholder reviews' },
          { type: 'Calendar', description: 'Release calendar with milestones' }
        ],
        linkedRecords: [
          'Features → User Stories (1:many)',
          'User Stories → Requirements (many:many)',
          'Features → Releases (many:1)',
          'Features → Team Members (many:many)',
          'Requirements → Compliance Rules (many:many)'
        ]
      },
      wireframes: {
        title: 'Wireframing & Design',
        phases: [
          {
            fidelity: 'Low-Fidelity',
            tool: 'Figma',
            count: 40,
            description: 'Rapid concept exploration for core workflows',
            deliverables: ['Patient dashboard concepts', 'Handoff notification flows', 'Discharge planning screens']
          },
          {
            fidelity: 'Mid-Fidelity',
            tool: 'Figma',
            count: 65,
            description: 'Refined wireframes with component definitions',
            deliverables: ['Complete patient journey screens', 'Nurse station displays', 'Mobile alert interfaces']
          },
          {
            fidelity: 'High-Fidelity',
            tool: 'Figma',
            count: 45,
            description: 'Production-ready designs with design system',
            deliverables: ['Final UI with branding', 'Interactive prototypes', 'Developer handoff specs']
          }
        ],
        annotations: [
          'Interaction states (hover, active, disabled, loading)',
          'Error handling and edge cases',
          'Accessibility requirements (WCAG 2.1 AA)',
          'Responsive breakpoints (desktop, tablet, mobile)'
        ]
      },
      userFlows: {
        title: 'User Flow Design',
        tool: 'Miro',
        flows: [
          { name: 'Patient Admission', steps: 12, description: 'From ER arrival to bed assignment' },
          { name: 'Care Handoff', steps: 8, description: 'Shift change and department transfers' },
          { name: 'Discharge Planning', steps: 15, description: 'From discharge order to patient exit' },
          { name: 'Emergency Escalation', steps: 6, description: 'Critical patient status alerts' }
        ]
      },
      handoff: {
        title: 'Engineering Handoff',
        deliverables: [
          { type: 'Design Specs', description: 'Figma files with auto-layout, spacing tokens, and component variants' },
          { type: 'Interaction Documentation', description: 'Detailed behavior specs for all UI states and transitions' },
          { type: 'API Requirements', description: 'Data requirements mapped to UI components in Airtable' },
          { type: 'Accessibility Checklist', description: 'WCAG 2.1 AA compliance requirements per screen' }
        ]
      },
      results: [
        { value: '65%', label: 'Reduction in handoff delays', detail: 'From 45 min to 16 min average' },
        { value: '2.5hrs', label: 'Daily time saved per nurse', detail: 'Eliminated manual data entry' },
        { value: '94%', label: 'User adoption rate', detail: 'Within first 3 months' },
        { value: '18%', label: 'Reduced readmissions', detail: 'From 30% to 12%' }
      ],
      techStack: ['Airtable', 'Figma', 'Miro', 'FigJam', 'Loom', 'Slack']
    },
    {
      id: 'retail',
      industry: 'Retail',
      Icon: RetailIcon,
      color: '#10b981',
      title: 'RetailSync: Omnichannel Inventory Management',
      subtitle: 'Real-time inventory visibility across 200+ store locations and online channels',
      duration: '20 Weeks',
      role: 'Product Designer',
      team: '3 Product Designers, 2 Product Managers, 12 Engineers',
      overview: 'Designed an enterprise inventory management system for a national retail chain with 200+ locations. The platform provides real-time stock visibility, automated reorder triggers, and cross-channel fulfillment optimization.',
      challenge: {
        title: 'The Challenge',
        problems: [
          '15% inventory discrepancy rate between physical and system counts',
          '$2M+ annual losses from stockouts and overstock situations',
          'No unified view of inventory across stores, warehouses, and online',
          'Manual transfer requests taking 3+ days to process',
          'Store managers spending 4 hours weekly on inventory reconciliation'
        ]
      },
      discovery: {
        title: 'Discovery & Research',
        activities: [
          { tool: 'Miro', activity: 'Conducted on-site visits to 8 stores across 4 regions' },
          { tool: 'Miro', activity: 'Mapped current inventory workflows with 30+ store managers' },
          { tool: 'Miro', activity: 'Created service blueprints for 15 inventory scenarios' },
          { tool: 'Figma', activity: 'Developed 5 detailed user personas (store manager, buyer, warehouse)' },
          { tool: 'Airtable', activity: 'Tracked 200+ user pain points linked to feature opportunities' }
        ]
      },
      airtable: {
        title: 'Airtable Product Roadmap',
        description: 'Managed complex multi-team product development with cross-dependencies and phased releases.',
        tables: [
          { name: 'Features', records: '200+', description: 'Categorized by module and release phase' },
          { name: 'Epics', records: '35', description: 'High-level feature groupings' },
          { name: 'User Stories', records: '450+', description: 'Detailed requirements with acceptance criteria' },
          { name: 'Integrations', records: '12', description: 'Third-party system connections' },
          { name: 'Stakeholders', records: '25', description: 'Cross-functional team tracking' }
        ],
        views: [
          { type: 'Timeline', icon: TimelineIcon, description: '4-phase release roadmap over 12 months' },
          { type: 'Kanban', icon: KanbanIcon, description: 'Team-specific boards with WIP limits' },
          { type: 'Grid', description: 'Filtered views for each stakeholder group' },
          { type: 'Gallery', description: 'Visual feature cards for executive reviews' }
        ],
        linkedRecords: [
          'Epics → Features (1:many)',
          'Features → User Stories (1:many)',
          'Features → Integrations (many:many)',
          'User Stories → Team Members (many:many)',
          'Features → Release Phase (many:1)'
        ]
      },
      wireframes: {
        title: 'Wireframing & Design',
        phases: [
          {
            fidelity: 'Low-Fidelity',
            tool: 'Figma',
            count: 60,
            description: 'Concept exploration for inventory views',
            deliverables: ['Dashboard concepts', 'Stock level visualizations', 'Transfer request flows']
          },
          {
            fidelity: 'Mid-Fidelity',
            tool: 'Figma',
            count: 85,
            description: 'Detailed wireframes with data tables',
            deliverables: ['Inventory grids', 'Search and filter interfaces', 'Bulk action screens']
          },
          {
            fidelity: 'High-Fidelity',
            tool: 'Figma',
            count: 70,
            description: 'Final designs with retail brand guidelines',
            deliverables: ['Complete design system', 'Mobile scanning interface', 'Reporting dashboards']
          }
        ],
        annotations: [
          'Data loading states for large inventory lists',
          'Offline mode behavior for store floor scanning',
          'Real-time update indicators',
          'Permission levels for different user roles'
        ]
      },
      userFlows: {
        title: 'User Flow Design',
        tool: 'Miro',
        flows: [
          { name: 'Cycle Count', steps: 14, description: 'Physical inventory verification process' },
          { name: 'Stock Transfer', steps: 10, description: 'Inter-store inventory movement' },
          { name: 'Reorder Automation', steps: 8, description: 'Low stock alert to PO creation' },
          { name: 'Receiving', steps: 12, description: 'Warehouse receipt to shelf placement' }
        ]
      },
      handoff: {
        title: 'Engineering Handoff',
        deliverables: [
          { type: 'Component Library', description: '45+ reusable components in Figma with variants' },
          { type: 'Data Schemas', description: 'Inventory data models documented in Airtable' },
          { type: 'API Mapping', description: 'UI fields mapped to backend endpoints' },
          { type: 'Testing Scenarios', description: '60+ edge cases documented for QA' }
        ]
      },
      results: [
        { value: '85%', label: 'Reduction in stockouts', detail: 'Automated reorder triggers' },
        { value: '$1.8M', label: 'Annual savings', detail: 'Reduced overstock and shrinkage' },
        { value: '3%', label: 'Inventory discrepancy', detail: 'Down from 15%' },
        { value: '90%', label: 'Faster transfers', detail: 'From 3 days to 4 hours' }
      ],
      techStack: ['Airtable', 'Figma', 'Miro', 'Notion', 'Jira', 'Confluence']
    },
    {
      id: 'manufacturing',
      industry: 'Manufacturing',
      Icon: ManufacturingIcon,
      color: '#06b6d4',
      title: 'FactoryOS: Production Line Monitoring Platform',
      subtitle: 'IoT-integrated manufacturing execution system for smart factory operations',
      duration: '24 Weeks',
      role: 'Product Designer',
      team: '2 Product Designers, 1 UX Researcher, 10 Engineers',
      overview: 'Designed a comprehensive manufacturing execution system (MES) for an automotive parts manufacturer with 5 production facilities. The platform provides real-time production monitoring, predictive maintenance alerts, and quality control tracking.',
      challenge: {
        title: 'The Challenge',
        problems: [
          '12% unplanned downtime due to lack of predictive maintenance',
          'Quality issues detected only at end-of-line inspection',
          'No real-time visibility into production line performance',
          'Paper-based shift reports causing 2-day data lag',
          'Operators walking 2+ miles daily to check machine status'
        ]
      },
      discovery: {
        title: 'Discovery & Research',
        activities: [
          { tool: 'Miro', activity: 'Conducted contextual inquiry at 3 production facilities' },
          { tool: 'Miro', activity: 'Shadowed 15 operators across 3 shifts to understand workflows' },
          { tool: 'Miro', activity: 'Created detailed process maps for 8 production lines' },
          { tool: 'Figma', activity: 'Developed 6 user personas (operator, supervisor, quality, maintenance)' },
          { tool: 'Airtable', activity: 'Catalogued 180+ sensor data points and their UI requirements' }
        ]
      },
      airtable: {
        title: 'Airtable Product Roadmap',
        description: 'Managed IoT-integrated product development with hardware and software dependencies.',
        tables: [
          { name: 'Features', records: '180+', description: 'Software features linked to hardware requirements' },
          { name: 'Sensors', records: '45', description: 'IoT sensor specifications and data schemas' },
          { name: 'Alerts', records: '60', description: 'Alert types, thresholds, and notification rules' },
          { name: 'Dashboards', records: '12', description: 'Dashboard layouts for different user roles' },
          { name: 'Integrations', records: '8', description: 'ERP, SCADA, and MES integrations' }
        ],
        views: [
          { type: 'Timeline', icon: TimelineIcon, description: 'Hardware + software parallel development tracks' },
          { type: 'Kanban', icon: KanbanIcon, description: 'Feature development by facility rollout' },
          { type: 'Gallery', description: 'Visual dashboard mockup gallery' },
          { type: 'Grid', description: 'Sensor-to-UI mapping matrix' }
        ],
        linkedRecords: [
          'Features → Sensors (many:many)',
          'Sensors → Alerts (1:many)',
          'Dashboards → Features (many:many)',
          'Features → Facilities (many:many)',
          'Alerts → User Roles (many:many)'
        ]
      },
      wireframes: {
        title: 'Wireframing & Design',
        phases: [
          {
            fidelity: 'Low-Fidelity',
            tool: 'Figma',
            count: 45,
            description: 'Control room display concepts',
            deliverables: ['Large-screen layouts', 'Alert notification concepts', 'Mobile supervisor views']
          },
          {
            fidelity: 'Mid-Fidelity',
            tool: 'Figma',
            count: 80,
            description: 'Data visualization wireframes',
            deliverables: ['Real-time charts', 'OEE dashboards', 'Maintenance schedules']
          },
          {
            fidelity: 'High-Fidelity',
            tool: 'Figma',
            count: 65,
            description: 'Industrial-grade UI with dark mode',
            deliverables: ['Control room 4K displays', 'Tablet interfaces', 'Wearable alerts']
          }
        ],
        annotations: [
          'Color-coded alert severity levels (ANSI standards)',
          'Glanceable data for 10-foot viewing distance',
          'Touch-friendly controls for gloved operators',
          'Night shift dark mode specifications'
        ]
      },
      userFlows: {
        title: 'User Flow Design',
        tool: 'Miro',
        flows: [
          { name: 'Alert Response', steps: 8, description: 'From sensor trigger to issue resolution' },
          { name: 'Shift Handoff', steps: 6, description: 'Digital shift report and acknowledgment' },
          { name: 'Quality Inspection', steps: 10, description: 'In-line quality check workflow' },
          { name: 'Maintenance Request', steps: 9, description: 'Predictive alert to work order' }
        ]
      },
      handoff: {
        title: 'Engineering Handoff',
        deliverables: [
          { type: 'Design System', description: 'Industrial UI kit with ANSI-compliant colors' },
          { type: 'Data Visualization Specs', description: 'Chart types and refresh rates for each metric' },
          { type: 'Sensor Mapping', description: 'UI elements linked to IoT data streams' },
          { type: 'Alert Logic', description: 'Threshold rules and escalation paths' }
        ]
      },
      results: [
        { value: '40%', label: 'Less unplanned downtime', detail: 'Predictive maintenance alerts' },
        { value: '60%', label: 'Faster issue detection', detail: 'Real-time quality monitoring' },
        { value: '3%', label: 'Scrap rate', detail: 'Down from 8%' },
        { value: '0', label: 'Miles walked', detail: 'Mobile status on tablets' }
      ],
      techStack: ['Airtable', 'Figma', 'Miro', 'Lucidchart', 'Azure DevOps', 'Power BI']
    },
    {
      id: 'ecommerce',
      industry: 'E-commerce',
      Icon: EcommerceIcon,
      color: '#8b5cf6',
      title: 'ShopHub: Seller Management Platform',
      subtitle: 'B2B marketplace platform for 10,000+ third-party sellers',
      duration: '18 Weeks',
      role: 'Product Designer',
      team: '4 Product Designers, 2 Product Managers, 15 Engineers',
      overview: 'Designed the internal seller management platform for a major e-commerce marketplace. The system handles seller onboarding, product catalog management, order fulfillment tracking, and compliance monitoring for 10,000+ third-party sellers.',
      challenge: {
        title: 'The Challenge',
        problems: [
          'Seller onboarding taking 15+ days due to manual verification',
          'Support teams handling 2,000+ tickets weekly for basic account issues',
          '25% annual seller churn rate due to poor platform experience',
          'No self-service tools for catalog management',
          'Compliance violations going undetected for weeks'
        ]
      },
      discovery: {
        title: 'Discovery & Research',
        activities: [
          { tool: 'Miro', activity: 'Mapped complete seller journey from registration to first sale' },
          { tool: 'Miro', activity: 'Analyzed 500+ support tickets to identify pain point patterns' },
          { tool: 'Miro', activity: 'Conducted 20 seller interviews across different business sizes' },
          { tool: 'Figma', activity: 'Created 4 seller personas (new, growing, established, enterprise)' },
          { tool: 'Airtable', activity: 'Prioritized 45 pain points with impact and effort scoring' }
        ]
      },
      airtable: {
        title: 'Airtable Product Roadmap',
        description: 'Coordinated cross-team development with seller-facing and internal admin features.',
        tables: [
          { name: 'Features', records: '175+', description: 'Seller portal and admin dashboard features' },
          { name: 'Onboarding Steps', records: '28', description: 'Verification workflow with status tracking' },
          { name: 'Compliance Rules', records: '45', description: 'Automated compliance check definitions' },
          { name: 'Integrations', records: '15', description: 'Payment, shipping, and tax integrations' },
          { name: 'Automations', records: '20', description: 'Workflow automations and notifications' }
        ],
        views: [
          { type: 'Timeline', icon: TimelineIcon, description: 'Parallel seller and admin feature tracks' },
          { type: 'Kanban', icon: KanbanIcon, description: 'Sprint boards with cross-team dependencies' },
          { type: 'Form', description: 'Feature request intake from seller feedback' },
          { type: 'Calendar', description: 'Release schedule with seller communication' }
        ],
        linkedRecords: [
          'Features → Integrations (many:many)',
          'Onboarding Steps → Compliance Rules (many:many)',
          'Features → Automations (1:many)',
          'Features → Support Tickets (many:many)',
          'Compliance Rules → Seller Tiers (many:many)'
        ]
      },
      wireframes: {
        title: 'Wireframing & Design',
        phases: [
          {
            fidelity: 'Low-Fidelity',
            tool: 'Figma',
            count: 50,
            description: 'Seller onboarding flow concepts',
            deliverables: ['Registration wizard', 'Document upload flows', 'Verification status']
          },
          {
            fidelity: 'Mid-Fidelity',
            tool: 'Figma',
            count: 75,
            description: 'Complete seller portal wireframes',
            deliverables: ['Dashboard layouts', 'Catalog manager', 'Order management']
          },
          {
            fidelity: 'High-Fidelity',
            tool: 'Figma',
            count: 60,
            description: 'Branded designs with component library',
            deliverables: ['Full design system', 'Admin dashboard', 'Mobile app screens']
          }
        ],
        annotations: [
          'Progressive disclosure for complex forms',
          'Inline validation with real-time feedback',
          'Bulk action patterns for catalog management',
          'Notification preferences and channels'
        ]
      },
      userFlows: {
        title: 'User Flow Design',
        tool: 'Miro',
        flows: [
          { name: 'Seller Onboarding', steps: 18, description: 'Registration to first product listing' },
          { name: 'Catalog Upload', steps: 10, description: 'Bulk product import with validation' },
          { name: 'Order Fulfillment', steps: 8, description: 'Order receipt to shipment confirmation' },
          { name: 'Dispute Resolution', steps: 12, description: 'Customer complaint to resolution' }
        ]
      },
      handoff: {
        title: 'Engineering Handoff',
        deliverables: [
          { type: 'Component Library', description: '60+ components with Storybook documentation' },
          { type: 'Form Validation', description: 'Field-level validation rules and error messages' },
          { type: 'API Contracts', description: 'Request/response schemas for all endpoints' },
          { type: 'Automation Specs', description: 'Trigger conditions and action definitions' }
        ]
      },
      results: [
        { value: '3 Days', label: 'Onboarding time', detail: 'Down from 15 days' },
        { value: '60%', label: 'Fewer support tickets', detail: 'Self-service features' },
        { value: '12%', label: 'Seller churn', detail: 'Down from 25%' },
        { value: '40%', label: 'Faster catalog updates', detail: 'Bulk management tools' }
      ],
      techStack: ['Airtable', 'Figma', 'Miro', 'Amplitude', 'Linear', 'Notion']
    },
    {
      id: 'banking',
      industry: 'Banking',
      Icon: BankingIcon,
      color: '#f59e0b',
      title: 'LoanStream: Commercial Lending Platform',
      subtitle: 'End-to-end loan origination and servicing system for commercial banking',
      duration: '28 Weeks',
      role: 'Lead Product Designer',
      team: '3 Product Designers, 1 UX Researcher, 2 Product Managers, 18 Engineers',
      overview: 'Designed a comprehensive commercial lending platform for a regional bank handling $2B+ in loan originations annually. The system manages the entire loan lifecycle from application intake through ongoing servicing, with full regulatory compliance.',
      challenge: {
        title: 'The Challenge',
        problems: [
          'Loan processing taking 45+ days on average due to manual handoffs',
          'Credit analysts spending 60% of time on data gathering, not analysis',
          'Compliance documentation fragmented across 5+ legacy systems',
          'No visibility into application pipeline for management',
          'Failed regulatory audits due to missing documentation'
        ]
      },
      discovery: {
        title: 'Discovery & Research',
        activities: [
          { tool: 'Miro', activity: 'Mapped end-to-end loan lifecycle across all departments' },
          { tool: 'Miro', activity: 'Conducted 35 interviews with loan officers, analysts, and compliance' },
          { tool: 'Miro', activity: 'Created service blueprint showing all system touchpoints' },
          { tool: 'Figma', activity: 'Developed 7 user personas across loan origination and servicing' },
          { tool: 'Airtable', activity: 'Documented 120+ regulatory requirements linked to features' }
        ]
      },
      airtable: {
        title: 'Airtable Product Roadmap',
        description: 'Managed heavily regulated product development with compliance traceability.',
        tables: [
          { name: 'Features', records: '220+', description: 'All features with compliance mapping' },
          { name: 'Regulations', records: '45', description: 'SOX, FDIC, BSA, OCC requirements' },
          { name: 'Loan Products', records: '8', description: 'Different loan types and workflows' },
          { name: 'Integrations', records: '18', description: 'Core banking, credit bureaus, document mgmt' },
          { name: 'Audit Trail', records: '500+', description: 'Decision documentation for compliance' }
        ],
        views: [
          { type: 'Timeline', icon: TimelineIcon, description: 'Phased rollout with compliance milestones' },
          { type: 'Kanban', icon: KanbanIcon, description: 'Development boards by loan product' },
          { type: 'Grid', description: 'Compliance matrix linking features to regulations' },
          { type: 'Gantt', description: 'Resource allocation across teams' }
        ],
        linkedRecords: [
          'Features → Regulations (many:many)',
          'Features → Loan Products (many:many)',
          'Loan Products → Integrations (many:many)',
          'Features → Audit Trail (1:many)',
          'Regulations → Audit Trail (1:many)'
        ]
      },
      wireframes: {
        title: 'Wireframing & Design',
        phases: [
          {
            fidelity: 'Low-Fidelity',
            tool: 'Figma',
            count: 55,
            description: 'Loan workflow concepts',
            deliverables: ['Application wizard', 'Document checklist', 'Approval workflows']
          },
          {
            fidelity: 'Mid-Fidelity',
            tool: 'Figma',
            count: 100,
            description: 'Complete loan lifecycle screens',
            deliverables: ['Origination forms', 'Credit analysis tools', 'Servicing dashboard']
          },
          {
            fidelity: 'High-Fidelity',
            tool: 'Figma',
            count: 80,
            description: 'Enterprise banking design system',
            deliverables: ['Full component library', 'Accessibility compliance', 'Print-ready reports']
          }
        ],
        annotations: [
          'Field-level audit logging requirements',
          'Role-based access control indicators',
          'Document versioning and approval states',
          '508 accessibility compliance for all forms'
        ]
      },
      userFlows: {
        title: 'User Flow Design',
        tool: 'Miro',
        flows: [
          { name: 'Loan Application', steps: 22, description: 'From inquiry to credit decision' },
          { name: 'Credit Analysis', steps: 15, description: 'Data gathering to risk assessment' },
          { name: 'Document Collection', steps: 12, description: 'Request to verified receipt' },
          { name: 'Loan Servicing', steps: 18, description: 'Payment processing to payoff' }
        ]
      },
      handoff: {
        title: 'Engineering Handoff',
        deliverables: [
          { type: 'Enterprise Design System', description: '100+ components with banking patterns' },
          { type: 'Compliance Documentation', description: 'Feature-to-regulation traceability matrix' },
          { type: 'Integration Specs', description: 'Core banking and credit bureau API mappings' },
          { type: 'Audit Requirements', description: 'Logging and retention specifications' }
        ]
      },
      results: [
        { value: '18 Days', label: 'Loan processing', detail: 'Down from 45 days' },
        { value: '100%', label: 'Audit pass rate', detail: 'Zero compliance findings' },
        { value: '35%', label: 'More loans processed', detail: 'Same team size' },
        { value: '70%', label: 'Less analyst data gathering', detail: 'Automated data collection' }
      ],
      techStack: ['Airtable', 'Figma', 'Miro', 'Lucidchart', 'Jira', 'SharePoint']
    }
  ];

  const projectIcons = [
    { Icon: HealthcareIcon, id: 'healthcare', label: 'Healthcare', color: '#ef4444' },
    { Icon: RetailIcon, id: 'retail', label: 'Retail', color: '#10b981' },
    { Icon: ManufacturingIcon, id: 'manufacturing', label: 'Manufacturing', color: '#06b6d4' },
    { Icon: EcommerceIcon, id: 'ecommerce', label: 'E-commerce', color: '#8b5cf6' },
    { Icon: BankingIcon, id: 'banking', label: 'Banking', color: '#f59e0b' },
  ];

  return (
    <>
      <header className="page-hero">
        <div className="page-hero-content">
          <span className="page-number">03</span>
          <h1>Projects</h1>
          <p className="page-subtitle">
            Complex enterprise projects across multiple industries, showcasing complete 
            end-to-end UX process with Airtable, Figma, Miro, and wireframing expertise
          </p>
        </div>
      </header>

      {/* Project Navigation */}
      <div className="project-nav">
        {projectIcons.map((item) => (
          <a 
            key={item.id} 
            href={`#${item.id}`} 
            className="project-nav-item"
          >
            <item.Icon size={18} style={{ color: item.color }} />
            <span>{item.label}</span>
          </a>
        ))}
      </div>

      {/* Project Sections */}
      {projects.map((project, index) => (
        <section 
          key={project.id} 
          id={project.id} 
          style={{ 
            background: index % 2 === 1 ? 'var(--bg-secondary)' : 'transparent',
            padding: '4rem 0'
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            {/* Project Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: `${project.color}15`, 
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <project.Icon size={36} style={{ color: project.color }} />
              </div>
              <div style={{ flex: 1 }}>
                <span style={{ 
                  display: 'inline-block',
                  padding: '0.375rem 1rem',
                  background: `${project.color}15`,
                  borderRadius: '100px',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: project.color,
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem'
                }}>{project.industry}</span>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.25rem', marginBottom: '0.5rem' }}>
                  {project.title}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: '1rem' }}>{project.subtitle}</p>
                <Link 
                  to={`/projects/${project.id}`} 
                  style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.625rem 1.25rem',
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
                    color: 'white',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                >
                  🔬 View Interactive Case Study →
                </Link>
              </div>
            </div>

            {/* Project Meta */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: '1rem', 
              marginBottom: '3rem',
              background: 'var(--bg-card)',
              padding: '1.5rem',
              borderRadius: '12px',
              border: '1px solid var(--border-subtle)'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Duration</span>
                <p style={{ fontWeight: 600 }}>{project.duration}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Role</span>
                <p style={{ fontWeight: 600 }}>{project.role}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Team</span>
                <p style={{ fontWeight: 600, fontSize: '0.875rem' }}>{project.team}</p>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Tech Stack</span>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: '0.25rem' }}>
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} style={{ 
                      padding: '0.25rem 0.5rem', 
                      background: 'var(--bg-secondary)', 
                      borderRadius: '4px',
                      fontSize: '0.75rem'
                    }}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Overview & Challenge */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Overview</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{project.overview}</p>
              </div>
              <div style={{ 
                background: 'rgba(239, 68, 68, 0.05)', 
                borderLeft: '4px solid var(--accent-danger)',
                padding: '1.5rem',
                borderRadius: '0 12px 12px 0'
              }}>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '1rem', color: 'var(--accent-danger)' }}>
                  {project.challenge.title}
                </h3>
                <ul style={{ listStyle: 'none' }}>
                  {project.challenge.problems.map((problem, i) => (
                    <li key={i} style={{ 
                      fontSize: '0.875rem', 
                      color: 'var(--text-secondary)',
                      paddingBottom: '0.5rem',
                      paddingLeft: '1rem',
                      position: 'relative'
                    }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--accent-danger)' }}>•</span>
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Discovery */}
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <MiroLogo size={28} />
                <h3 style={{ fontSize: '1.25rem' }}>{project.discovery.title}</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem' }}>
                {project.discovery.activities.map((activity, i) => (
                  <div key={i} style={{ 
                    background: 'var(--bg-card)', 
                    padding: '1rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <span style={{ 
                      display: 'inline-block',
                      padding: '0.25rem 0.5rem',
                      background: activity.tool === 'Miro' ? 'rgba(255, 208, 47, 0.1)' : 
                                 activity.tool === 'Figma' ? 'rgba(162, 89, 255, 0.1)' : 
                                 'rgba(24, 191, 255, 0.1)',
                      borderRadius: '4px',
                      fontSize: '0.625rem',
                      fontWeight: 600,
                      color: activity.tool === 'Miro' ? '#ffd02f' : 
                             activity.tool === 'Figma' ? '#a259ff' : '#18bfff',
                      marginBottom: '0.5rem'
                    }}>{activity.tool}</span>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {activity.activity}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Airtable Section */}
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(24, 191, 255, 0.05) 0%, rgba(24, 191, 255, 0.02) 100%)',
              border: '1px solid rgba(24, 191, 255, 0.2)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '3rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                <AirtableLogo size={32} />
                <h3 style={{ fontSize: '1.25rem' }}>{project.airtable.title}</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{project.airtable.description}</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem' }}>
                {/* Tables */}
                <div>
                  <h4 style={{ fontSize: '0.875rem', color: '#18bfff', marginBottom: '1rem' }}>Database Tables</h4>
                  {project.airtable.tables.map((table, i) => (
                    <div key={i} style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid var(--border-subtle)'
                    }}>
                      <span style={{ fontSize: '0.875rem' }}>{table.name}</span>
                      <span style={{ fontSize: '0.75rem', color: '#18bfff' }}>{table.records}</span>
                    </div>
                  ))}
                </div>

                {/* Views */}
                <div>
                  <h4 style={{ fontSize: '0.875rem', color: '#18bfff', marginBottom: '1rem' }}>Views Configured</h4>
                  {project.airtable.views.map((view, i) => (
                    <div key={i} style={{ 
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid var(--border-subtle)'
                    }}>
                      {view.icon && <view.icon size={16} style={{ color: '#18bfff' }} />}
                      <div>
                        <span style={{ fontSize: '0.875rem', display: 'block' }}>{view.type}</span>
                        <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)' }}>{view.description}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Linked Records */}
                <div>
                  <h4 style={{ fontSize: '0.875rem', color: '#18bfff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <LinkIcon size={14} /> Linked Records
                  </h4>
                  {project.airtable.linkedRecords.map((record, i) => (
                    <div key={i} style={{ 
                      padding: '0.5rem 0',
                      borderBottom: '1px solid var(--border-subtle)',
                      fontSize: '0.8125rem',
                      color: 'var(--text-secondary)'
                    }}>
                      {record}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Wireframes Section */}
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(162, 89, 255, 0.05) 0%, rgba(162, 89, 255, 0.02) 100%)',
              border: '1px solid rgba(162, 89, 255, 0.2)',
              borderRadius: '16px',
              padding: '2rem',
              marginBottom: '3rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <FigmaLogo size={32} />
                <h3 style={{ fontSize: '1.25rem' }}>{project.wireframes.title}</h3>
                <span style={{ 
                  marginLeft: 'auto',
                  padding: '0.5rem 1rem',
                  background: 'rgba(162, 89, 255, 0.1)',
                  borderRadius: '100px',
                  fontSize: '0.875rem',
                  color: '#a259ff',
                  fontWeight: 600
                }}>
                  {project.wireframes.phases.reduce((acc, p) => acc + p.count, 0)}+ Wireframes
                </span>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
                {project.wireframes.phases.map((phase, i) => (
                  <div key={i} style={{ 
                    background: 'var(--bg-card)',
                    padding: '1.5rem',
                    borderRadius: '12px',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '1rem', fontWeight: 600 }}>{phase.fidelity}</span>
                      <span style={{ 
                        padding: '0.25rem 0.75rem',
                        background: '#a259ff',
                        borderRadius: '100px',
                        fontSize: '0.75rem',
                        color: 'white',
                        fontWeight: 600
                      }}>{phase.count}</span>
                    </div>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                      {phase.description}
                    </p>
                    <ul style={{ listStyle: 'none' }}>
                      {phase.deliverables.map((d, j) => (
                        <li key={j} style={{ 
                          fontSize: '0.75rem', 
                          color: 'var(--text-muted)',
                          paddingLeft: '1rem',
                          paddingBottom: '0.25rem',
                          position: 'relative'
                        }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--accent-success)' }}>✓</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div>
                <h4 style={{ fontSize: '0.875rem', color: '#a259ff', marginBottom: '0.75rem' }}>Design Annotations Included</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {project.wireframes.annotations.map((ann, i) => (
                    <span key={i} style={{ 
                      padding: '0.5rem 1rem',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '100px',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)'
                    }}>{ann}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* User Flows */}
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <MiroLogo size={28} />
                <h3 style={{ fontSize: '1.25rem' }}>{project.userFlows.title}</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                {project.userFlows.flows.map((flow, i) => (
                  <div key={i} style={{ 
                    background: 'var(--bg-card)',
                    padding: '1.25rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{flow.name}</span>
                      <span style={{ 
                        padding: '0.25rem 0.5rem',
                        background: 'rgba(255, 208, 47, 0.1)',
                        borderRadius: '4px',
                        fontSize: '0.6875rem',
                        color: '#ffd02f'
                      }}>{flow.steps} steps</span>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{flow.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Handoff */}
            <div style={{ marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <WireframeLogo size={28} />
                <h3 style={{ fontSize: '1.25rem' }}>{project.handoff.title}</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                {project.handoff.deliverables.map((del, i) => (
                  <div key={i} style={{ 
                    background: 'var(--bg-card)',
                    padding: '1.25rem',
                    borderRadius: '10px',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    <span style={{ fontWeight: 600, fontSize: '0.875rem', display: 'block', marginBottom: '0.5rem' }}>
                      {del.type}
                    </span>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{del.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Results */}
            <div style={{ 
              background: `linear-gradient(135deg, ${project.color}10 0%, transparent 100%)`,
              borderRadius: '16px',
              padding: '2rem',
              border: `1px solid ${project.color}30`
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', textAlign: 'center' }}>Results & Impact</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
                {project.results.map((result, i) => (
                  <div key={i} style={{ textAlign: 'center' }}>
                    <span style={{ 
                      display: 'block',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2.5rem',
                      color: project.color,
                      marginBottom: '0.25rem'
                    }}>{result.value}</span>
                    <span style={{ display: 'block', fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.25rem' }}>
                      {result.label}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{result.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="cta-section">
        <h2>Interested in Working Together?</h2>
        <p>I'm always open to discussing new projects and opportunities</p>
        <div className="cta-buttons">
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
          <Link to="/airtable" className="btn-secondary">See Airtable Expertise</Link>
        </div>
      </section>
    </>
  );
}

export default Projects;
