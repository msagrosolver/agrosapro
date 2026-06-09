import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero-field.jpg';
import './Hero.css';

const trustBadges = ['EU distribution ready', 'Zero toxic waste', '18-22% average yield increase'];

function Hero() {
  return (
    <section id="top" className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero__overlay" />
      <div className="hero__content container">
        <div className="hero__copy">
          <p className="eyebrow hero__eyebrow">European sapropel solutions</p>
          <h1>Nature's most complete answer to modern soil challenges</h1>
          <p className="hero__subheadline">
            Agrosapro brings Belarusian sapropel-based soil conditioners, plant growth regulators and livestock
            feed additives to European farmers. Scientifically proven. Zero toxic waste. Aligned with the European
            Green Deal.
          </p>
          <div className="hero__actions" aria-label="Primary actions">
            <Link className="button button--primary" to="/products">
              Explore our products
            </Link>
            <Link className="button button--outline" to="/technology">
              Learn about the technology
            </Link>
          </div>
          <ul className="hero__badges" aria-label="Agrosapro trust points">
            {trustBadges.map((badge) => (
              <li key={badge}>{badge}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hero;
