import './Footer.css';

const footerLinks = [
  { label: 'Products', href: '#products' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Technology', href: '#technology' },
  { label: 'Contact', href: '#contact' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main container">
        <div className="footer__brand">
          <a className="footer__logo" href="#top">
            <img src="/logo.png" alt="Agrosapro" />
            <span>Agrosapro</span>
          </a>
          <p className="footer__tagline">European sapropel solutions</p>
          <p>Authorized European distributor of sapropel-based agricultural preparations.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h2>Navigation</h2>
          {footerLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__contact">
          <h2>Contact</h2>
          <a href="mailto:info@agrosapro.eu">info@agrosapro.eu</a>
          <p>EU distribution inquiries welcome</p>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>(c) 2025 Agrosapro. All rights reserved.</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
