import { Link } from 'react-router-dom';
import { AirtableLogo, FigmaLogo, MiroLogo } from '../components/Icons';

// ========================================
// AIRTABLE COMPONENTS - RETAIL
// ========================================

const AirtableInventoryDashboard = () => {
  const products = [
    { sku: 'SKU-001', name: 'Wireless Headphones Pro', category: 'Electronics', stock: 245, reorder: 50, status: 'In Stock', warehouse: 'NYC-01', price: '$149.99' },
    { sku: 'SKU-002', name: 'Smart Watch Series 5', category: 'Electronics', stock: 12, reorder: 30, status: 'Low Stock', warehouse: 'LA-02', price: '$299.99' },
    { sku: 'SKU-003', name: 'Organic Cotton T-Shirt', category: 'Apparel', stock: 0, reorder: 100, status: 'Out of Stock', warehouse: 'CHI-01', price: '$34.99' },
    { sku: 'SKU-004', name: 'Premium Yoga Mat', category: 'Fitness', stock: 89, reorder: 25, status: 'In Stock', warehouse: 'NYC-01', price: '$59.99' },
    { sku: 'SKU-005', name: 'Stainless Water Bottle', category: 'Lifestyle', stock: 156, reorder: 40, status: 'In Stock', warehouse: 'LA-02', price: '$24.99' },
    { sku: 'SKU-006', name: 'Bluetooth Speaker Mini', category: 'Electronics', stock: 28, reorder: 35, status: 'Low Stock', warehouse: 'CHI-01', price: '$79.99' },
  ];

  const statusColors = { 'In Stock': '#10b981', 'Low Stock': '#f59e0b', 'Out of Stock': '#ef4444' };

  return (
    <div style={{ background: '#0d1117', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(24, 191, 255, 0.3)' }}>
      <div style={{ background: 'linear-gradient(90deg, #18bfff, #06b6d4)', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AirtableLogo size={24} />
          <span style={{ color: 'white', fontWeight: 600 }}>OmniStock Inventory Management</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', fontSize: '0.75rem', color: 'white' }}>1,247 Products</span>
          <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(239,68,68,0.3)', borderRadius: '100px', fontSize: '0.75rem', color: '#fca5a5' }}>23 Alerts</span>
        </div>
      </div>
      
      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', padding: '1rem 1.5rem', background: '#161b22', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        {[
          { label: 'Total SKUs', value: '1,247', change: '+45', color: '#10b981' },
          { label: 'Low Stock Items', value: '23', change: '+5', color: '#f59e0b' },
          { label: 'Out of Stock', value: '8', change: '-2', color: '#ef4444' },
          { label: 'Pending Orders', value: '156', change: '+12', color: '#6366f1' },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <p style={{ color: '#8b949e', fontSize: '0.75rem', marginBottom: '0.25rem' }}>{stat.label}</p>
            <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>{stat.value}</span>
            <span style={{ fontSize: '0.75rem', color: stat.color, marginLeft: '0.5rem' }}>{stat.change}</span>
          </div>
        ))}
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#161b22' }}>
              {['SKU', 'Product Name', 'Category', 'Stock', 'Reorder Point', 'Status', 'Warehouse', 'Price'].map((h) => (
                <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p.sku} style={{ background: i % 2 === 0 ? '#0d1117' : '#161b22' }}>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#58a6ff', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{p.sku}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#c9d1d9', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{p.name}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{p.category}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: p.stock <= p.reorder ? '#f59e0b' : '#c9d1d9', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{p.stock}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{p.reorder}</td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ padding: '0.25rem 0.5rem', background: `${statusColors[p.status]}20`, color: statusColors[p.status], borderRadius: '4px', fontSize: '0.75rem', fontWeight: 500 }}>{p.status}</span>
                </td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{p.warehouse}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#10b981', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const AirtableSupplyChainKanban = () => {
  const columns = [
    { title: 'Ordered', color: '#6b7280', items: [
      { title: 'Electronics Shipment #4521', supplier: 'TechCorp Ltd', eta: 'Mar 15' },
      { title: 'Apparel Batch #789', supplier: 'TextileCo', eta: 'Mar 18' },
    ]},
    { title: 'In Transit', color: '#3b82f6', items: [
      { title: 'Fitness Equipment #3344', supplier: 'SportsPro', eta: 'Mar 12' },
      { title: 'Lifestyle Products #5566', supplier: 'HomeGoods', eta: 'Mar 11' },
      { title: 'Electronics Restock #4522', supplier: 'TechCorp Ltd', eta: 'Mar 13' },
    ]},
    { title: 'At Warehouse', color: '#f59e0b', items: [
      { title: 'Seasonal Items #2233', supplier: 'SeasonalCo', eta: 'Today' },
    ]},
    { title: 'Received', color: '#10b981', items: [
      { title: 'Premium Audio #1122', supplier: 'AudioMax', eta: 'Completed' },
      { title: 'Outdoor Gear #8899', supplier: 'OutdoorPro', eta: 'Completed' },
      { title: 'Kitchen Items #7788', supplier: 'KitchenPlus', eta: 'Completed' },
    ]},
  ];

  return (
    <div style={{ background: '#0d1117', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(24, 191, 255, 0.3)' }}>
      <div style={{ background: 'linear-gradient(90deg, #18bfff, #06b6d4)', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.25rem' }}>🚚</span>
        <span style={{ color: 'white', fontWeight: 600 }}>Supply Chain Tracking</span>
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
                  <p style={{ fontSize: '0.875rem', color: '#c9d1d9', marginBottom: '0.5rem', fontWeight: 500 }}>{item.title}</p>
                  <p style={{ fontSize: '0.75rem', color: '#8b949e', marginBottom: '0.25rem' }}>{item.supplier}</p>
                  <span style={{ fontSize: '0.6875rem', color: col.color }}>{item.eta}</span>
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
// FIGMA WIREFRAMES - RETAIL
// ========================================

const FigmaInventoryDashboard = () => (
  <div style={{ background: '#1e1e1e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(162, 89, 255, 0.3)' }}>
    <div style={{ background: '#2c2c2c', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #3c3c3c' }}>
      <div style={{ display: 'flex', gap: '0.375rem' }}>
        <span style={{ width: '12px', height: '12px', background: '#ff5f57', borderRadius: '50%' }}></span>
        <span style={{ width: '12px', height: '12px', background: '#febc2e', borderRadius: '50%' }}></span>
        <span style={{ width: '12px', height: '12px', background: '#28c840', borderRadius: '50%' }}></span>
      </div>
      <span style={{ color: '#8b8b8b', fontSize: '0.75rem', marginLeft: '0.5rem' }}>OmniStock Dashboard - High Fidelity.fig</span>
    </div>
    <div style={{ background: 'linear-gradient(135deg, #0c4a6e, #0e7490)', padding: '0' }}>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ width: '200px', background: '#0c4a6e', borderRight: '1px solid rgba(255,255,255,0.1)', padding: '1.5rem 0', minHeight: '450px' }}>
          <div style={{ padding: '0 1rem', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '32px', height: '32px', background: '#06b6d4', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontSize: '1rem' }}>📦</span>
              </div>
              <span style={{ color: 'white', fontWeight: 600, fontSize: '0.9375rem' }}>OmniStock</span>
            </div>
          </div>
          {[
            { icon: '📊', label: 'Dashboard', active: true },
            { icon: '📦', label: 'Inventory', active: false },
            { icon: '🚚', label: 'Supply Chain', active: false },
            { icon: '🏪', label: 'Warehouses', active: false },
            { icon: '📋', label: 'Orders', active: false },
            { icon: '📈', label: 'Analytics', active: false },
          ].map((item) => (
            <div key={item.label} style={{ 
              padding: '0.625rem 1rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              background: item.active ? 'rgba(6, 182, 212, 0.2)' : 'transparent',
              borderLeft: item.active ? '3px solid #06b6d4' : '3px solid transparent',
            }}>
              <span style={{ fontSize: '0.875rem' }}>{item.icon}</span>
              <span style={{ color: item.active ? 'white' : '#94a3b8', fontSize: '0.8125rem' }}>{item.label}</span>
            </div>
          ))}
        </div>
        
        {/* Main Content */}
        <div style={{ flex: 1, padding: '1.5rem', background: '#164e63' }}>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h1 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 600 }}>Inventory Overview</h1>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button style={{ padding: '0.5rem 1rem', background: '#06b6d4', border: 'none', borderRadius: '6px', color: 'white', fontSize: '0.8125rem' }}>+ Add Product</button>
              <button style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '6px', color: 'white', fontSize: '0.8125rem' }}>Export</button>
            </div>
          </div>
          
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
            {[
              { label: 'Total Products', value: '1,247', icon: '📦', color: '#06b6d4' },
              { label: 'Low Stock Alerts', value: '23', icon: '⚠️', color: '#f59e0b' },
              { label: 'Pending Shipments', value: '45', icon: '🚚', color: '#8b5cf6' },
              { label: 'Revenue Today', value: '$12.4K', icon: '💰', color: '#10b981' },
            ].map((stat) => (
              <div key={stat.label} style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{stat.icon}</span>
                  <span style={{ width: '8px', height: '8px', background: stat.color, borderRadius: '50%' }}></span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.75rem', marginBottom: '0.25rem' }}>{stat.label}</p>
                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'white' }}>{stat.value}</span>
              </div>
            ))}
          </div>
          
          {/* Chart Placeholder */}
          <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '1rem', marginBottom: '1rem' }}>
            <h3 style={{ color: 'white', fontSize: '0.9375rem', marginBottom: '1rem' }}>Stock Levels by Category</h3>
            <div style={{ display: 'flex', alignItems: 'end', gap: '1rem', height: '120px' }}>
              {[
                { label: 'Electronics', value: 85 },
                { label: 'Apparel', value: 62 },
                { label: 'Fitness', value: 78 },
                { label: 'Lifestyle', value: 90 },
                { label: 'Home', value: 45 },
              ].map((bar) => (
                <div key={bar.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '100%', height: `${bar.value}%`, background: 'linear-gradient(180deg, #06b6d4, #0e7490)', borderRadius: '4px 4px 0 0' }}></div>
                  <span style={{ fontSize: '0.625rem', color: '#94a3b8', marginTop: '0.5rem' }}>{bar.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ========================================
// MIRO USER RESEARCH - RETAIL
// ========================================

const MiroRetailPersona = () => (
  <div style={{ background: '#fffef5', borderRadius: '12px', overflow: 'hidden', border: '2px solid #ffd02f' }}>
    <div style={{ background: '#ffd02f', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <MiroLogo size={24} />
      <span style={{ color: '#050038', fontWeight: 600 }}>User Persona: Store Manager</span>
    </div>
    <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #bae6fd, #7dd3fc)', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>👨‍💼</div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.25rem' }}>Michael Chen</h3>
        <p style={{ color: '#0891b2', fontWeight: 600, fontSize: '0.9375rem' }}>Regional Store Manager</p>
        <div style={{ marginTop: '1rem', textAlign: 'left', background: '#f8fafc', borderRadius: '8px', padding: '1rem', fontSize: '0.8125rem' }}>
          <p style={{ marginBottom: '0.5rem' }}><strong>Age:</strong> 42</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Experience:</strong> 15 years</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Stores:</strong> 12 locations</p>
          <p><strong>Region:</strong> Northeast</p>
        </div>
      </div>
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ background: '#dcfce7', borderRadius: '12px', padding: '1.25rem' }}>
            <h4 style={{ color: '#16a34a', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>🎯 Goals</h4>
            <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.8125rem', color: '#1e293b' }}>
              <li>Minimize stockouts during peak seasons</li>
              <li>Optimize inventory across all locations</li>
              <li>Reduce carrying costs by 15%</li>
              <li>Improve order fulfillment speed</li>
            </ul>
          </div>
          <div style={{ background: '#fee2e2', borderRadius: '12px', padding: '1.25rem' }}>
            <h4 style={{ color: '#dc2626', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>😤 Frustrations</h4>
            <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.8125rem', color: '#1e293b' }}>
              <li>No real-time visibility across stores</li>
              <li>Manual stock counting is error-prone</li>
              <li>Supplier communication gaps</li>
              <li>Seasonal demand unpredictability</li>
            </ul>
          </div>
        </div>
        <div style={{ background: '#e0f2fe', borderRadius: '12px', padding: '1.25rem', borderLeft: '4px solid #0891b2' }}>
          <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#0c4a6e' }}>
            "I need to see inventory levels across all my stores in real-time to make smart restocking decisions."
          </p>
        </div>
      </div>
    </div>
  </div>
);

const MiroSupplyChainFlow = () => (
  <div style={{ background: '#1a1a2e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 208, 47, 0.3)' }}>
    <div style={{ background: '#ffd02f', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <MiroLogo size={24} />
      <span style={{ color: '#050038', fontWeight: 600 }}>User Flow: Reorder Process</span>
    </div>
    <div style={{ padding: '2rem', background: 'white' }}>
      <svg viewBox="0 0 900 200" style={{ width: '100%', height: 'auto' }}>
        <defs>
          <marker id="arrow-retail" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#475569"/>
          </marker>
        </defs>
        
        {/* Flow nodes */}
        <circle cx="50" cy="100" r="25" fill="#10b981"/>
        <text x="50" y="105" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Start</text>
        
        <rect x="110" y="75" width="100" height="50" rx="6" fill="#0891b2"/>
        <text x="160" y="100" textAnchor="middle" fill="white" fontSize="10">Stock Alert</text>
        <text x="160" y="112" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">Triggered</text>
        <line x1="75" y1="100" x2="105" y2="100" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow-retail)"/>
        
        <rect x="250" y="75" width="100" height="50" rx="6" fill="#0891b2"/>
        <text x="300" y="100" textAnchor="middle" fill="white" fontSize="10">Review</text>
        <text x="300" y="112" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">Inventory</text>
        <line x1="210" y1="100" x2="245" y2="100" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow-retail)"/>
        
        <polygon points="420,100 380,70 340,100 380,130" fill="#f59e0b"/>
        <text x="380" y="97" textAnchor="middle" fill="white" fontSize="9">Auto</text>
        <text x="380" y="107" textAnchor="middle" fill="white" fontSize="9">Reorder?</text>
        <line x1="350" y1="100" x2="340" y2="100" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow-retail)"/>
        
        <rect x="470" y="75" width="100" height="50" rx="6" fill="#0891b2"/>
        <text x="520" y="100" textAnchor="middle" fill="white" fontSize="10">Create PO</text>
        <line x1="420" y1="100" x2="465" y2="100" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow-retail)"/>
        
        <rect x="610" y="75" width="100" height="50" rx="6" fill="#0891b2"/>
        <text x="660" y="100" textAnchor="middle" fill="white" fontSize="10">Send to</text>
        <text x="660" y="112" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">Supplier</text>
        <line x1="570" y1="100" x2="605" y2="100" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow-retail)"/>
        
        <rect x="750" y="75" width="100" height="50" rx="6" fill="#0891b2"/>
        <text x="800" y="100" textAnchor="middle" fill="white" fontSize="10">Track</text>
        <text x="800" y="112" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontSize="8">Shipment</text>
        <line x1="710" y1="100" x2="745" y2="100" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow-retail)"/>
        
        <circle cx="880" cy="100" r="20" fill="#10b981"/>
        <text x="880" y="104" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">End</text>
        <line x1="850" y1="100" x2="860" y2="100" stroke="#475569" strokeWidth="2"/>
        
        {/* Manual path */}
        <text x="380" y="155" textAnchor="middle" fill="#ef4444" fontSize="9">Manual Review</text>
        <line x1="380" y1="130" x2="380" y2="165" stroke="#ef4444" strokeWidth="2"/>
        <rect x="330" y="165" width="100" height="30" rx="4" fill="#fee2e2" stroke="#ef4444"/>
        <text x="380" y="184" textAnchor="middle" fill="#dc2626" fontSize="9">Manager Approval</text>
      </svg>
    </div>
  </div>
);

// ========================================
// MAIN COMPONENT
// ========================================

function RetailProject() {
  return (
    <>
      <header className="page-hero" style={{ background: 'linear-gradient(135deg, #0c4a6e 0%, #0891b2 50%, #06b6d4 100%)' }}>
        <div className="page-hero-content">
          <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(6, 182, 212, 0.3)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: '#a5f3fc', marginBottom: '1rem' }}>RETAIL</span>
          <h1>OmniStock: Enterprise Inventory Management</h1>
          <p className="page-subtitle">
            Unified inventory and supply chain management platform for multi-location retail operations,
            featuring real-time stock tracking, automated reordering, and demand forecasting.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.875rem' }}>18 Weeks</span>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.875rem' }}>Product Designer</span>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.875rem' }}>RetailMax Corp</span>
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
                OmniStock is an enterprise-grade inventory management system designed for retail chains
                with multiple warehouse locations. The platform provides real-time visibility into stock
                levels, automates reordering workflows, and offers predictive analytics for demand planning.
              </p>
              <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--text-muted)' }}>
                As the Product Designer, I created comprehensive Airtable bases for inventory tracking,
                designed intuitive dashboards in Figma, and mapped complex supply chain workflows in Miro.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', borderRadius: '16px', padding: '1.5rem', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Tools Used</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><AirtableLogo size={28} /><span>Airtable - Inventory Database</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><FigmaLogo size={28} /><span>Figma - Dashboard Design</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><MiroLogo size={28} /><span>Miro - Process Mapping</span></div>
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
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>Inventory Management in Airtable</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Real-time stock tracking with automated alerts and supplier management</p>
            </div>
          </div>
          <AirtableInventoryDashboard />
          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Supply Chain Kanban</h3>
            <AirtableSupplyChainKanban />
          </div>
        </div>
      </section>

      {/* Wireframes Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <FigmaLogo size={40} />
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>Dashboard Design in Figma</h2>
              <p style={{ color: 'var(--text-secondary)' }}>High-fidelity mockups for inventory monitoring and analytics</p>
            </div>
          </div>
          <FigmaInventoryDashboard />
        </div>
      </section>

      {/* User Research Section */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <MiroLogo size={40} />
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>User Research in Miro</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Personas and supply chain workflow mapping</p>
            </div>
          </div>
          <div style={{ marginBottom: '3rem' }}><MiroRetailPersona /></div>
          <MiroSupplyChainFlow />
        </div>
      </section>

      {/* Results */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>Results & Impact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { value: '30%', label: 'Reduction in stockouts', icon: '📦' },
              { value: '25%', label: 'Less overstocking', icon: '📉' },
              { value: '40%', label: 'Faster data entry', icon: '⚡' },
              { value: '15%', label: 'Lower logistics costs', icon: '💰' },
            ].map((stat) => (
              <div key={stat.label} style={{ background: 'var(--bg-card)', borderRadius: '16px', padding: '2rem', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>{stat.icon}</span>
                <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: '#0891b2', display: 'block', marginBottom: '0.5rem' }}>{stat.value}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Explore More Projects</h2>
        <p>See how I apply these skills across different industries</p>
        <div className="cta-buttons">
          <Link to="/projects" className="btn-primary">View All Projects</Link>
          <Link to="/contact" className="btn-secondary">Get in Touch</Link>
        </div>
      </section>
    </>
  );
}

export default RetailProject;

