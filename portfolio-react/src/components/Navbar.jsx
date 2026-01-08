import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  const navItems = [
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/airtable', label: 'Airtable' },
    { path: '/wireframes', label: 'Wireframes' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="logo">Ashwitha Reddy</Link>
        <div className="nav-links">
          {navItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path}
              className={({ isActive }) => isActive ? 'active' : ''}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

