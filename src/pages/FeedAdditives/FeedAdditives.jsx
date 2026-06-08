import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero/PageHero.jsx';
import heroFeedImage from '../../assets/images/hero-feed-additives.jpg';
import heroBioNaImage from '../../assets/images/hero-biona.jpg';
import feedIntroBackImage from '../../assets/images/feed-intro-back.jpg';
import feedIntroFrontImage from '../../assets/images/feed-intro-front.jpg';
import './FeedAdditives.css';

const previewCards = [
  {
    to: '/products/feed-additives/biona',
    imageAlt: 'Agrosapro BioNa',
    name: 'Agrosapro BioNa',
    image: heroBioNaImage,
  },
];

function FeedAdditives() {
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
        title="Feed Additives"
        subtitle="Liquid sapropel supplement for all livestock and poultry. Centuries of empirical use, backed by modern science."
        imageSrc={heroFeedImage}
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: 'Feed Additives', to: '/products/feed-additives' },
        ]}
      />

      <section className="feed-intro">
        <div className="feed-intro__inner">
          <div className="feed-intro__copy">
            <h2>Ancient wisdom, modern science</h2>
            <div className={`intro-text-body ${textExpanded ? 'expanded' : 'collapsed'}`}>
              <p>
                Since olden times, inhabitants of lakeside settlements have used silt as feed for livestock and poultry.
                Sapropel dressings have been tested for ages. Young animals of livestock enterprises, fur farms and poultry
                houses receiving sapropel top dressing show high resistance to diseases.
              </p>
              <p>
                Mineral and biologically active substances, including essential amino acids, activate physiological
                processes in animals and help the complete assimilation of the main diet fodder.
              </p>
              <p>
                Modern requirements for animal husbandry are more and more focused on the well-being of animals and
                poultry, which determines the <strong>productive longevity, quality and quantity of the products obtained</strong>. High density of poultry and livestock is a significant stressor - animals get sick more often,
                intestinal microflora is more sensitive, weight gain reduces, bones weaken, and skin diseases, food
                injuries and fungal infections expand.
              </p>
              <p>
                Agrosapro BioNa is the natural answer: based on deep bottom sediments - sapropel and lowland peat - with
                proven <strong>bactericidal and antifungal effect</strong>, completely harmless to animals and humans.
              </p>
            </div>
            <button className="read-more-toggle" type="button" onClick={() => setTextExpanded((value) => !value)}>
              {textExpanded ? 'Show less ↑' : 'Read more ↓'}
            </button>
          </div>

          <div className="image-stack" aria-label="Feed additive imagery">
            <div className="dot-grid" aria-hidden="true" />
            <img
              className="image-stack__image img-back"
              src={feedIntroBackImage}
              alt="Young healthy piglets and poultry in a clean farm environment"
              loading="lazy"
            />
            <img
              className="image-stack__image img-front"
              src={feedIntroFrontImage}
              alt="Close-up of young healthy farm animals in warm natural light"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="product-range feed-product-range">
        <div className="product-range__inner">
          <div className="product-range__header">
            <h2>Our Feed Additive Range</h2>
            <p>One universal liquid formula - proven for all livestock, poultry and fur farm animals.</p>
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

export default FeedAdditives;
