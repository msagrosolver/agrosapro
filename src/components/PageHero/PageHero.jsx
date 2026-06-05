import { Link } from 'react-router-dom';
import './PageHero.css';

function PageHero({ eyebrow, title, subtitle, breadcrumbs }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" />
      <div className="page-hero-overlay" />
      <div className="page-hero-content">
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
        <h1>{title}</h1>
      </div>
    </section>
  );
}

export default PageHero;