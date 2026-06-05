import { Link } from 'react-router-dom';
import './PageHero.css';

function PageHero({ eyebrow, title, subtitle, breadcrumbs }) {
  return (
    <section className="page-hero">
      <div className="page-hero__overlay" />
      <div className="page-hero__content container">
        {breadcrumbs && (
          <nav className="page-hero-breadcrumbs">
            {breadcrumbs.map((crumb, index) => (
              <span key={index}>
                {index < breadcrumbs.length - 1 ? (
                  <>
                    <Link to={crumb.to} className="breadcrumb-link">
                      {crumb.label}
                    </Link>
                    <span className="breadcrumb-separator"> / </span>
                  </>
                ) : (
                  <span className="breadcrumb-current">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <p className="page-hero__eyebrow">{eyebrow}</p>
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__subtitle">{subtitle}</p>
      </div>
    </section>
  );
}

export default PageHero;