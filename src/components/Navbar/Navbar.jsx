import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Technology', to: '/technology' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const productLinks = [
  { label: 'Soil Conditioners', to: '/products/soil-conditioners' },
  { label: 'Growth Regulators', to: '/products/growth-regulators' },
  { label: 'Feed Additives', to: '/products/feed-additives' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link className="navbar__brand" to="/" onClick={closeMenu}>
          <img src="/logo.png" alt="Agrosapro" />
          <span>Agrosapro</span>
        </Link>

        <button
          className="navbar__toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`} aria-label="Primary navigation">
          <div className="navbar__dropdown">
            <button className="navbar__dropdown-toggle" type="button">
              Products
            </button>
            <div className="navbar__dropdown-menu">
              {productLinks.map((link) => (
                <NavLink key={link.label} to={link.to} onClick={closeMenu}>
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
          {navLinks.map((link) => (
            <NavLink key={link.label} to={link.to} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
          <Link className="navbar__cta navbar__cta--mobile" to="/contact" onClick={closeMenu}>
            Request a quote
          </Link>
        </nav>

        <Link className="navbar__cta navbar__cta--desktop" to="/contact" onClick={closeMenu}>
          Request a quote
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
