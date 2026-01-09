import { Link } from 'react-router-dom';
import { AirtableLogo, FigmaLogo, MiroLogo } from '../components/Icons';

// ========================================
// AIRTABLE COMPONENTS - ECOMMERCE
// ========================================

const AirtableProductCatalog = () => {
  const products = [
    { sku: 'PRD-001', name: 'Leather Crossbody Bag', category: 'Bags', status: 'Published', price: '$189.00', variants: 4, images: 8, seo: 95 },
    { sku: 'PRD-002', name: 'Minimalist Watch Gold', category: 'Watches', status: 'Published', price: '$249.00', variants: 2, images: 6, seo: 88 },
    { sku: 'PRD-003', name: 'Organic Cotton Hoodie', category: 'Apparel', status: 'Draft', price: '$79.00', variants: 6, images: 4, seo: 45 },
    { sku: 'PRD-004', name: 'Wireless Earbuds Pro', category: 'Electronics', status: 'Published', price: '$159.00', variants: 3, images: 10, seo: 92 },
    { sku: 'PRD-005', name: 'Handmade Ceramic Mug', category: 'Home', status: 'Review', price: '$34.00', variants: 8, images: 5, seo: 78 },
    { sku: 'PRD-006', name: 'Vintage Sunglasses', category: 'Accessories', status: 'Published', price: '$129.00', variants: 5, images: 7, seo: 85 },
  ];

  const statusColors = { 'Published': '#10b981', 'Draft': '#6b7280', 'Review': '#f59e0b' };

  return (
    <div style={{ background: '#0d1117', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
      <div style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7)', padding: '1rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AirtableLogo size={24} />
          <span style={{ color: 'white', fontWeight: 600 }}>CatalogMaster - Product Database</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(255,255,255,0.2)', borderRadius: '100px', fontSize: '0.75rem', color: 'white' }}>2,847 Products</span>
          <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(16,185,129,0.3)', borderRadius: '100px', fontSize: '0.75rem', color: '#86efac' }}>2,456 Published</span>
        </div>
      </div>
      
      {/* Toolbar */}
      <div style={{ padding: '0.75rem 1rem', background: '#161b22', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <button style={{ padding: '0.375rem 0.75rem', background: '#7c3aed', border: 'none', borderRadius: '6px', color: 'white', fontSize: '0.8125rem', cursor: 'pointer' }}>+ Add Product</button>
        <button style={{ padding: '0.375rem 0.75rem', background: '#21262d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#c9d1d9', fontSize: '0.8125rem', cursor: 'pointer' }}>Bulk Edit</button>
        <button style={{ padding: '0.375rem 0.75rem', background: '#21262d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#c9d1d9', fontSize: '0.8125rem', cursor: 'pointer' }}>Import CSV</button>
        <div style={{ marginLeft: 'auto' }}>
          <input type="text" placeholder="🔍 Search products..." style={{ padding: '0.375rem 0.75rem', background: '#21262d', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px', color: '#c9d1d9', fontSize: '0.8125rem', width: '200px' }} />
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#161b22' }}>
              {['SKU', 'Product Name', 'Category', 'Status', 'Price', 'Variants', 'Images', 'SEO Score'].map((h) => (
                <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: 600, color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p.sku} style={{ background: i % 2 === 0 ? '#0d1117' : '#161b22' }}>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#a855f7', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{p.sku}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#c9d1d9', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{p.name}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{p.category}</td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ padding: '0.25rem 0.5rem', background: `${statusColors[p.status]}20`, color: statusColors[p.status], borderRadius: '4px', fontSize: '0.75rem', fontWeight: 500 }}>{p.status}</span>
                </td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#10b981', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{p.price}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#58a6ff', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>{p.variants} options</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8125rem', color: '#8b949e', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>📷 {p.images}</td>
                <td style={{ padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '50px', height: '6px', background: '#21262d', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: `${p.seo}%`, height: '100%', background: p.seo >= 80 ? '#10b981' : p.seo >= 60 ? '#f59e0b' : '#ef4444', borderRadius: '3px' }}></div>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: p.seo >= 80 ? '#10b981' : p.seo >= 60 ? '#f59e0b' : '#ef4444' }}>{p.seo}</span>
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

const AirtableContentWorkflow = () => {
  const columns = [
    { title: 'Ideas', color: '#6b7280', items: [
      { title: 'Summer Collection Launch', type: 'Campaign' },
      { title: 'Influencer Partnership', type: 'Marketing' },
    ]},
    { title: 'Writing', color: '#a855f7', items: [
      { title: 'Product Descriptions x20', type: 'Content' },
      { title: 'Category Landing Pages', type: 'SEO' },
      { title: 'Email Newsletter March', type: 'Email' },
    ]},
    { title: 'Review', color: '#f59e0b', items: [
      { title: 'Homepage Hero Banner', type: 'Design' },
      { title: 'Size Guide Update', type: 'Content' },
    ]},
    { title: 'Published', color: '#10b981', items: [
      { title: 'Spring Sale Announcement', type: 'Campaign' },
      { title: 'New Arrivals Email', type: 'Email' },
      { title: 'Return Policy Update', type: 'Legal' },
    ]},
  ];

  return (
    <div style={{ background: '#0d1117', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
      <div style={{ background: 'linear-gradient(90deg, #7c3aed, #a855f7)', padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <span style={{ fontSize: '1.25rem' }}>✍️</span>
        <span style={{ color: 'white', fontWeight: 600 }}>Content Workflow</span>
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
                  <span style={{ padding: '0.125rem 0.5rem', background: 'rgba(168,85,247,0.2)', color: '#a855f7', borderRadius: '4px', fontSize: '0.625rem', fontWeight: 600 }}>{item.type}</span>
                  <p style={{ fontSize: '0.875rem', color: '#c9d1d9', marginTop: '0.5rem' }}>{item.title}</p>
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
// FIGMA WIREFRAMES - ECOMMERCE
// ========================================

const FigmaProductEditor = () => (
  <div style={{ background: '#1e1e1e', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(162, 89, 255, 0.3)' }}>
    <div style={{ background: '#2c2c2c', padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #3c3c3c' }}>
      <div style={{ display: 'flex', gap: '0.375rem' }}>
        <span style={{ width: '12px', height: '12px', background: '#ff5f57', borderRadius: '50%' }}></span>
        <span style={{ width: '12px', height: '12px', background: '#febc2e', borderRadius: '50%' }}></span>
        <span style={{ width: '12px', height: '12px', background: '#28c840', borderRadius: '50%' }}></span>
      </div>
      <span style={{ color: '#8b8b8b', fontSize: '0.75rem', marginLeft: '0.5rem' }}>CatalogMaster - Product Editor.fig</span>
    </div>
    <div style={{ background: 'linear-gradient(135deg, #1e1b4b, #312e81)', padding: '0' }}>
      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        <div style={{ width: '200px', background: '#1e1b4b', borderRight: '1px solid rgba(255,255,255,0.1)', padding: '1rem 0', minHeight: '450px' }}>
          <div style={{ padding: '0 1rem', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '32px', height: '32px', background: '#a855f7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontSize: '1rem' }}>🛍️</span>
              </div>
              <span style={{ color: 'white', fontWeight: 600, fontSize: '0.9375rem' }}>CatalogMaster</span>
            </div>
          </div>
          {[
            { icon: '📦', label: 'Products', active: true },
            { icon: '📂', label: 'Categories', active: false },
            { icon: '🏷️', label: 'Attributes', active: false },
            { icon: '📸', label: 'Media Library', active: false },
            { icon: '🔍', label: 'SEO', active: false },
          ].map((item) => (
            <div key={item.label} style={{ 
              padding: '0.625rem 1rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              background: item.active ? 'rgba(168, 85, 247, 0.2)' : 'transparent',
              borderLeft: item.active ? '3px solid #a855f7' : '3px solid transparent',
            }}>
              <span style={{ fontSize: '0.875rem' }}>{item.icon}</span>
              <span style={{ color: item.active ? 'white' : '#94a3b8', fontSize: '0.8125rem' }}>{item.label}</span>
            </div>
          ))}
        </div>
        
        {/* Main Content - Product Editor */}
        <div style={{ flex: 1, padding: '1.5rem', background: '#312e81' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <button style={{ padding: '0.375rem 0.75rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '6px', color: 'white', fontSize: '0.8125rem' }}>← Back</button>
              <h1 style={{ color: 'white', fontSize: '1.125rem', fontWeight: 600 }}>Edit Product</h1>
            </div>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              <button style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '6px', color: 'white', fontSize: '0.8125rem' }}>Preview</button>
              <button style={{ padding: '0.5rem 1rem', background: '#a855f7', border: 'none', borderRadius: '6px', color: 'white', fontSize: '0.8125rem' }}>Save & Publish</button>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
            {/* Left Column */}
            <div>
              <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '1.25rem', marginBottom: '1rem' }}>
                <label style={{ color: '#94a3b8', fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem' }}>Product Name</label>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '6px', padding: '0.75rem', color: 'white', fontSize: '0.9375rem' }}>Leather Crossbody Bag</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '1.25rem', marginBottom: '1rem' }}>
                <label style={{ color: '#94a3b8', fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem' }}>Description</label>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '6px', padding: '0.75rem', color: '#94a3b8', fontSize: '0.8125rem', minHeight: '80px' }}>Premium leather crossbody bag with adjustable strap...</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '1.25rem' }}>
                <label style={{ color: '#94a3b8', fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem' }}>Product Images</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
                  {[1, 2, 3, 4].map((n) => (
                    <div key={n} style={{ aspectRatio: '1', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: '1.5rem', opacity: 0.5 }}>📷</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div>
              <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '1.25rem', marginBottom: '1rem' }}>
                <label style={{ color: '#94a3b8', fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem' }}>Price</label>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '6px', padding: '0.75rem', color: '#10b981', fontSize: '1.25rem', fontWeight: 600 }}>$189.00</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '1.25rem', marginBottom: '1rem' }}>
                <label style={{ color: '#94a3b8', fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem' }}>Category</label>
                <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '6px', padding: '0.75rem', color: 'white', fontSize: '0.875rem' }}>Bags</div>
              </div>
              <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '1.25rem' }}>
                <label style={{ color: '#94a3b8', fontSize: '0.75rem', display: 'block', marginBottom: '0.5rem' }}>SEO Score</label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ flex: 1, height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '95%', height: '100%', background: '#10b981', borderRadius: '4px' }}></div>
                  </div>
                  <span style={{ color: '#10b981', fontWeight: 600 }}>95</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ========================================
// MIRO USER RESEARCH - ECOMMERCE
// ========================================

const MiroEcommercePersona = () => (
  <div style={{ background: '#fffef5', borderRadius: '12px', overflow: 'hidden', border: '2px solid #ffd02f' }}>
    <div style={{ background: '#ffd02f', padding: '0.75rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <MiroLogo size={24} />
      <span style={{ color: '#050038', fontWeight: 600 }}>User Persona: Content Manager</span>
    </div>
    <div style={{ padding: '2rem', display: 'grid', gridTemplateColumns: '200px 1fr', gap: '2rem' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: '120px', height: '120px', background: 'linear-gradient(135deg, #e9d5ff, #c4b5fd)', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>👩‍💻</div>
        <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1e293b', marginBottom: '0.25rem' }}>Emily Zhang</h3>
        <p style={{ color: '#7c3aed', fontWeight: 600, fontSize: '0.9375rem' }}>E-commerce Content Manager</p>
        <div style={{ marginTop: '1rem', textAlign: 'left', background: '#f8fafc', borderRadius: '8px', padding: '1rem', fontSize: '0.8125rem' }}>
          <p style={{ marginBottom: '0.5rem' }}><strong>Age:</strong> 29</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Experience:</strong> 5 years</p>
          <p style={{ marginBottom: '0.5rem' }}><strong>Products:</strong> 2,800+</p>
          <p><strong>Team:</strong> 4 writers</p>
        </div>
      </div>
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{ background: '#dcfce7', borderRadius: '12px', padding: '1.25rem' }}>
            <h4 style={{ color: '#16a34a', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>🎯 Goals</h4>
            <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.8125rem', color: '#1e293b' }}>
              <li>Reduce time-to-market for new products</li>
              <li>Improve product data accuracy to 99%</li>
              <li>Boost organic traffic through SEO</li>
              <li>Streamline content approval workflow</li>
            </ul>
          </div>
          <div style={{ background: '#fee2e2', borderRadius: '12px', padding: '1.25rem' }}>
            <h4 style={{ color: '#dc2626', marginBottom: '0.75rem', fontSize: '0.9375rem' }}>😤 Frustrations</h4>
            <ul style={{ margin: 0, paddingLeft: '1rem', fontSize: '0.8125rem', color: '#1e293b' }}>
              <li>Manual data entry is slow and error-prone</li>
              <li>No bulk editing capabilities</li>
              <li>Images scattered across multiple drives</li>
              <li>Inconsistent product descriptions</li>
            </ul>
          </div>
        </div>
        <div style={{ background: '#f3e8ff', borderRadius: '12px', padding: '1.25rem', borderLeft: '4px solid #7c3aed' }}>
          <p style={{ fontSize: '1rem', fontStyle: 'italic', color: '#581c87' }}>
            "I need a single source of truth for all product data that my entire team can access and update."
          </p>
        </div>
      </div>
    </div>
  </div>
);

// ========================================
// MAIN COMPONENT
// ========================================

function EcommerceProject() {
  return (
    <>
      <header className="page-hero" style={{ background: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 50%, #a855f7 100%)' }}>
        <div className="page-hero-content">
          <span style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(168, 85, 247, 0.3)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, color: '#e9d5ff', marginBottom: '1rem' }}>E-COMMERCE</span>
          <h1>CatalogMaster: Product Information Management</h1>
          <p className="page-subtitle">
            Centralized product catalog management system for e-commerce retailers,
            featuring bulk editing, SEO optimization, and content workflow management.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.875rem' }}>14 Weeks</span>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.875rem' }}>Product Designer</span>
            <span style={{ padding: '0.5rem 1rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '0.875rem' }}>ShopWave Inc</span>
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
                CatalogMaster is an enterprise Product Information Management (PIM) system designed for
                e-commerce retailers managing large product catalogs. The platform centralizes product data,
                streamlines content creation, and ensures consistency across all sales channels.
              </p>
            </div>
            <div style={{ background: 'var(--bg-card)', borderRadius: '16px', padding: '1.5rem', border: '1px solid var(--border-subtle)' }}>
              <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Tools Used</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><AirtableLogo size={28} /><span>Airtable - Product Database</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><FigmaLogo size={28} /><span>Figma - Editor Interface</span></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><MiroLogo size={28} /><span>Miro - User Research</span></div>
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
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>Product Catalog in Airtable</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Centralized product database with SEO tracking and content workflow</p>
            </div>
          </div>
          <AirtableProductCatalog />
          <div style={{ marginTop: '3rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Content Workflow Kanban</h3>
            <AirtableContentWorkflow />
          </div>
        </div>
      </section>

      {/* Wireframes Section */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <FigmaLogo size={40} />
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>Product Editor Design in Figma</h2>
              <p style={{ color: 'var(--text-secondary)' }}>High-fidelity mockups for content creation and management</p>
            </div>
          </div>
          <FigmaProductEditor />
        </div>
      </section>

      {/* User Research Section */}
      <section style={{ padding: '4rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <MiroLogo size={40} />
            <div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem' }}>User Research in Miro</h2>
              <p style={{ color: 'var(--text-secondary)' }}>Personas and content workflow analysis</p>
            </div>
          </div>
          <MiroEcommercePersona />
        </div>
      </section>

      {/* Results */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>Results & Impact</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { value: '35%', label: 'Faster time-to-market', icon: '⚡' },
              { value: '90%', label: 'Data accuracy improvement', icon: '✅' },
              { value: '50%', label: 'Less manual effort', icon: '⏱️' },
              { value: '25%', label: 'SEO traffic increase', icon: '📈' },
            ].map((stat) => (
              <div key={stat.label} style={{ background: 'var(--bg-card)', borderRadius: '16px', padding: '2rem', textAlign: 'center', border: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '0.5rem' }}>{stat.icon}</span>
                <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-serif)', color: '#a855f7', display: 'block', marginBottom: '0.5rem' }}>{stat.value}</span>
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

export default EcommerceProject;

