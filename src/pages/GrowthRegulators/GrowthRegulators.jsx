import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero/PageHero.jsx';
import heroGrowthImage from '../../assets/images/hero-growth-regulators.jpg';
import heroKImage from '../../assets/images/hero-k.jpg';
import heroComplexImage from '../../assets/images/hero-complex.jpg';
import growthIntroBackImage from '../../assets/images/growth-intro-back.jpg';
import growthIntroFrontImage from '../../assets/images/growth-intro-front.jpg';
import './GrowthRegulators.css';

const previewCards = [
  {
    to: '/products/growth-regulators/k',
    imageAlt: 'Agrosapro K',
    name: 'Agrosapro K',
    image: heroKImage,
  },
  {
    to: '/products/growth-regulators/complex',
    imageAlt: 'Agrosapro Complex',
    name: 'Agrosapro Complex',
    image: heroComplexImage,
  },
];

function GrowthRegulators() {
  const cardsSectionRef = useRef(null);
  const [cardsVisible, setCardsVisible] = useState(false);
  const [textExpanded, setTextExpanded] = useState(false);

  useEffect(() => {
    const target = cardsSectionRef.current;
    if (!target) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <PageHero
        eyebrow="Product line"
        title="Growth Regulators"
        subtitle="Liquid humate concentrates that combine the power of organic sapropel with targeted mineral nutrition."
        imageSrc={heroGrowthImage}
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: 'Growth Regulators', to: '/products/growth-regulators' },
        ]}
      />

      <section className="growth-intro">
        <div className="growth-intro__inner">
          <div className="growth-intro__copy">
            <h2>Precise action, reproducible results</h2>
            <div className={`intro-text-body ${textExpanded ? 'expanded' : 'collapsed'}`}>
              <p>
                The advantage of our line of liquid formulations is that we study the fractional composition of the
                extracted peat-sapropel mixture and bring the optimal complex of humic and fulvic acids into the finished
                product, and supplement it, depending on the task, with essential amino acids, phytohormones, meso and
                microelements.
              </p>
              <p>
                High-molecular complexes of humic substances bind ecotoxins and do not allow harmful substances into the
                root system of plants, and low-molecular complexes contribute to the absorption of missing nutrients by cell
                membranes. We combine the functional acid groups of the peat-sapropel mixture with micro and macro elements
                to correct vitamin deficiencies or to stimulate the growth of certain organs and parts of a particular crop.
              </p>
              <p>
                Our solutions have a precise effect: they <strong>heal the root system</strong>, improve the assimilation of
                moisture and nutrients, and affect the development of the fruit and weight gain,{' '}
                <strong>correct excess salts in soils</strong> or lack of certain elements.
              </p>
            </div>
            <button className="read-more-toggle" type="button" onClick={() => setTextExpanded((value) => !value)}>
              {textExpanded ? 'Show less ↑' : 'Read more ↓'}
            </button>
          </div>

          <div className="image-stack" aria-label="Growth regulator imagery">
            <div className="dot-grid" aria-hidden="true" />
            <img
              className="image-stack__image img-back"
              src={growthIntroBackImage}
              alt="Greenhouse crop rows with drip irrigation in warm daylight"
              loading="lazy"
            />
            <img
              className="image-stack__image img-front"
              src={growthIntroFrontImage}
              alt="Healthy young plant root system in rich soil"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 32" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 0 Q720 32 1440 0 L1440 2 Q720 34 0 2 Z" fill="rgba(0,0,0,0.08)" />
        </svg>
      </div>

      <section className="product-range growth-product-range">
        <div className="product-range__inner">
          <div className="product-range__header">
            <h2>Our Growth Regulator Range</h2>
            <p>Two liquid concentrate formulas - targeted potassium-humate correction and full-spectrum NPK feeding.</p>
          </div>

          <div className="product-preview-grid" ref={cardsSectionRef}>
            {previewCards.map((product, index) => (
              <Link
                className={`product-preview-card ${cardsVisible ? 'product-card-visible' : 'product-card-hidden'}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
                key={product.name}
                to={product.to}
              >
                <img
                  className="card-image"
                  src={product.image}
                  alt={product.imageAlt}
                  loading="lazy"
                />
                <div className="card-overlay">
                  <h3>{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default GrowthRegulators;
