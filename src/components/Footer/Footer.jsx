import { Link } from 'react-router-dom';
import './Footer.css';

const footerLinks = [
  { label: 'Products', to: '/products' },
  { label: 'Technology', to: '/technology' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Documents', to: '/documents' },
  { label: 'Contact', to: '/contact' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main container">
        <div className="footer__brand">
          <Link className="footer__logo" to="/">
            <img src="/Logo halftone-white.svg" alt="Agrosapro" />
            <span>Agrosapro</span>
          </Link>
          <p className="footer__tagline">European sapropel solutions</p>
          <p>Authorized European distributor of sapropel-based agricultural preparations.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h2>Navigation</h2>
          {footerLinks.map((link) => (
            <Link to={link.to} key={link.label}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="footer__contact">
          <h2>Contact</h2>
          <a href="mailto:info@agrosapro.eu">info@agrosapro.eu</a>
          <p>EU distribution inquiries welcome</p>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© 2025 Agrosapro. All rights reserved.</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
