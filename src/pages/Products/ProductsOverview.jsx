import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero/PageHero.jsx';
import soilImage from '../../assets/images/hero-soil-conditioners.jpg';
import growthImage from '../../assets/images/hero-growth-regulators.jpg';
import feedImage from '../../assets/images/hero-feed-additives.jpg';
import './ProductsOverview.css';

const cards = [
  {
    title: 'Soil Conditioners',
    eyebrow: 'Granulate preparations',
    description:
      'Correct pH, restore soil structure, activate microbiota and prevent chemical accumulation. For all crop types and soil conditions.',
    image: soilImage,
    to: '/products/soil-conditioners',
  },
  {
    title: 'Growth Regulators',
    eyebrow: 'Liquid concentrates',
    description:
      'Heal root systems, correct mineral deficiencies, improve nutrient assimilation and drive better fruit development and yield.',
    image: growthImage,
    to: '/products/growth-regulators',
  },
  {
    title: 'Feed Additives',
    eyebrow: 'Liquid supplement',
    description:
      'Improve immunity, reduce mortality and enhance feed efficiency for all livestock and poultry. Centuries of empirical use.',
    image: feedImage,
    to: '/products/feed-additives',
  },
];

function ProductsOverview() {
  const [cardsVisible, setCardsVisible] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    const el = cardsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <PageHero
        eyebrow="Product range"
        title="Our Products"
        subtitle="Three focused product families — all built around reproducible humic and fulvic acid technology from pristine Belarusian sapropel."
        breadcrumbs={[{ label: 'Products', to: '/products' }]}
      />

      <section className="products-overview">
        <div className="products-overview__intro">
          <p className="eyebrow">Sapropel-based preparations</p>
          <h2>Three lines, one source</h2>
          <p>
            From soil restoration to crop performance and animal nutrition — each product family
            targets a specific challenge with a precisely calibrated sapropel-based formula.
          </p>
        </div>

        <div className="products-overview__grid" ref={cardsRef}>
          {cards.map((card, i) => (
            <Link
              key={card.title}
              to={card.to}
              className={`product-overview-card product-overview-card--${i + 1} ${cardsVisible ? 'is-visible' : ''}`}
            >
              <div className="product-overview-card__image">
                <img src={card.image} alt={card.title} loading="lazy" />
              </div>
              <div className="product-overview-card__body">
                <p className="product-overview-card__eyebrow">{card.eyebrow}</p>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <span className="product-overview-card__cta">View products →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProductsOverview;
