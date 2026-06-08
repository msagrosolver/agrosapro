import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import GoogleTranslate from '../GoogleTranslate/GoogleTranslate.jsx';
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
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const { pathname } = useLocation();
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 60;
      setIsScrolled(scrolled);
      setIsAtTop(window.scrollY === 0);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', isOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isOpen]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setIsProductsOpen(false);
  };

  const isTransparent = pathname === '/' && isAtTop && !isOpen;

  return (
    <header
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isTransparent ? 'navbar--transparent' : ''}`}
      ref={navbarRef}
    >
      <div className="navbar__inner container">
        <Link className="navbar__brand" to="/" onClick={closeMenu}>
          <img src="/Logo halftone.svg" alt="Agrosapro" />
          <span>Agrosapro</span>
        </Link>

        <nav className={`navbar__nav ${isOpen ? 'navbar__nav--open' : ''}`} aria-label="Primary navigation">
          <div
            className={`nav-item-dropdown ${isProductsOpen ? 'is-open' : ''}`}
            onMouseEnter={() => setIsProductsOpen(true)}
            onMouseLeave={() => setIsProductsOpen(false)}
          >
            <button
              className="dropdown-trigger"
              type="button"
              aria-expanded={isProductsOpen}
              onClick={() => setIsProductsOpen((value) => !value)}
            >
              Products
            </button>
            <div className="dropdown-menu">
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

        <div className="navbar__actions">
          <GoogleTranslate />

          <Link className="navbar__cta navbar__cta--desktop" to="/contact" onClick={closeMenu}>
            Request a quote
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
        </div>
      </div>
    </header>
  );
}

export default Navbar;
