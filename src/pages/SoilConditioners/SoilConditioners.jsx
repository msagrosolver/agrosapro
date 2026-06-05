import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero/PageHero.jsx';
import plantyImage from '../../assets/images/planty.jpg';
import './SoilConditioners.css';

const previewCards = [
  {
    to: '/products/soil-conditioners/biome',
    imageAlt: 'Agrosapro Biome',
    name: 'Agrosapro Biome',
  },
  {
    to: '/products/soil-conditioners/phoenix',
    imageAlt: 'Agrosapro pHoenix',
    name: 'Agrosapro pHoenix',
  },
];

function SoilConditioners() {
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
        title="Soil Conditioners"
        subtitle="Granulate preparations based on organic sapropel and lowland peat. Restore soil health, correct pH, and build lasting fertility."
      />

      <section className="soil-intro">
        <div className="soil-intro__inner">
          <div className="soil-intro__copy">
            <h2>The science behind our soil conditioners</h2>
            <div className={`intro-text-body ${textExpanded ? 'expanded' : 'collapsed'}`}>
              <p>
                Sapropel is low-lying lake and swamp silt formed in freshwater bodies. It is extremely rich in organic
                matter of animal and vegetable origin. From year to year, low-lying layers are replenished with new ones —
                unlike coal or oil, sapropel is a renewable resource. We work with this precious raw material as carefully
                and waste-free as possible.
              </p>
              <p>
                For the production of soil improvers we use a peat-sapropel mixture from lowland peat and properly extracted
                sapropel.
              </p>
              <p>
                Sapropel has an exceptional ability to <strong>neutralize</strong> natural acidity or acidity acquired due
                to the irrational use of mineral fertilizers, while lowland peat <strong>corrects soil friability</strong>{' '}
                and <strong>serves as a buffer for microelements</strong>.
              </p>
              <p>
                Our advantage lies in the use of high-tech production methods, which guarantees a{' '}
                <strong>consistently reproducible functional composition</strong> of our soil improvers and the optimal
                content of humic and fulvic acids, the necessary low molecular weight amino acid complexes (lysine, leucine,
                proline, arginine, cysteine), microelements and bioactive compounds.
              </p>
            </div>
            <button className="read-more-toggle" type="button" onClick={() => setTextExpanded((value) => !value)}>
              {textExpanded ? 'Show less ↑' : 'Read more ↓'}
            </button>
          </div>

          <div className="image-stack" aria-label="Soil conditioner imagery">
            <div className="dot-grid" aria-hidden="true" />
            <div className="image-stack__placeholder img-back">Photo: corn seedlings in sunlit soil</div>
            <div className="image-stack__placeholder img-front">Photo: young plants emerging from soil</div>
          </div>
        </div>
      </section>

      <section className="product-range">
        <div className="product-range__inner">
          <div className="product-range__header">
            <h2>Our Soil Conditioner Range</h2>
            <p>Two specialized granulate formulas for different soil conditions and remediation needs.</p>
          </div>

          <div className="product-preview-grid" ref={cardsSectionRef}>
            {previewCards.map((product, index) => (
              <Link
                className={`product-preview-card product-card-base ${
                  cardsVisible ? `product-card-animated ${index === 0 ? 'card-1' : 'card-2'}` : ''
                }`}
                key={product.name}
                to={product.to}
              >
                <div className="card-text-content">
                  <h3>{product.name}</h3>
                </div>
                <img
                  className={`card-image card-image-base ${cardsVisible ? `card-image-animated ${index === 0 ? 'card-1' : 'card-2'}` : ''}`}
                  src={plantyImage}
                  alt={product.imageAlt}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default SoilConditioners;
