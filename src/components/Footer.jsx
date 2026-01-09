import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="logo">Ashwitha Reddy</span>
          <p>Product Designer · Airtable · Wireframing · Product Visualization</p>
        </div>
        <div className="footer-nav">
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/airtable">Airtable</Link>
          <Link to="/wireframes">Wireframes</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

