import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import soilImage from '../../assets/product-soil-conditioner.jpg';
import growthImage from '../../assets/product-growth-regulator.jpg';
import feedImage from '../../assets/product-feed-additive.jpg';
import growthIntroFrontImage from '../../assets/images/growth-intro-front.jpg';
import soilIntroBackImage from '../../assets/images/soil-intro-back.jpg';
import './Products.css';

const productLinks = {
  'Agrosapro Biome': '/products/soil-conditioners/biome',
  'Agrosapro pHoenix': '/products/soil-conditioners/phoenix',
  'Agrosapro K': '/products/growth-regulators/k',
  'Agrosapro Complex': '/products/growth-regulators/complex',
  'Agrosapro BioNa': '/products/feed-additives/biona',
};

const tabs = [
  {
    id: 'soil',
    label: 'Soil Conditioners',
    image: soilImage,
    intro:
      'Sapropel is lake and swamp silt formed in freshwater bodies over thousands of years. It is rich in organic matter and can be renewed, unlike coal or oil. Our soil conditioners use a peat-sapropel mixture that neutralizes acidity, corrects friability, improves moisture retention, prevents radionuclide uptake by plants and activates biological soil processes.',
    products: [
      {
        name: 'Agrosapro Biome',
        type: 'Granulate',
        use: 'Base soil improver for agricultural soils',
        benefits: [
          'Corrects pH acquired from overuse of mineral fertilizers',
          'Improves water retention and gradual moisture absorption',
          'Reduces nitrate content in humus',
          'Activates soil biological processes',
        ],
        suitable: 'All crop types, extensive and intensive farming',
      },
      {
        name: 'Agrosapro pHoenix',
        type: 'Granulate',
        image: soilIntroBackImage,
        use: 'Advanced pH correction and soil remediation',
        benefits: [
          'Neutralizes both natural and chemically-induced soil acidity',
          'Corrects soil friability and serves as a microelement buffer',
          'Prevents radionuclide uptake by plants',
          'Improves mechanical soil structure',
        ],
        suitable: 'Degraded soils, post-chemical farming fields',
      },
    ],
  },
  {
    id: 'growth',
    label: 'Growth Regulators',
    image: growthImage,
    intro:
      'Our liquid growth regulators were developed for professional agronomists who need steadily high yields without overfeeding the soil. The liquid line combines humic and fulvic acid extraction from a peat-sapropel mixture with complex mineral fertilization for targeted root healing, nutrient assimilation, mineral correction and fruit development.',
    products: [
      {
        name: 'Agrosapro K',
        type: 'Liquid concentrate',
        use: 'Potassium-humate growth regulator for targeted correction',
        benefits: [
          'Heals and strengthens the root system',
          'Corrects excess salt accumulation in soils',
          'Improves assimilation of moisture and nutrients',
          'Enhances fruit development and weight gain',
        ],
        suitable: 'Intensive crop production, greenhouse and hydroponic systems',
      },
      {
        name: 'Agrosapro Complex',
        type: 'Liquid concentrate',
        image: growthIntroFrontImage,
        use: 'Full-spectrum NPK with humic/fulvic acid framework',
        benefits: [
          'Acts as both fertility accumulator and functional mineral fertilizer',
          'NPK plus trace elements for complete crop nutrition',
          'Reduces the quantitative need for standalone mineral fertilizers',
          'Stimulates development of specific plant organs',
        ],
        suitable: 'Extensive and intensive farming, industrial greenhouses, hydroponics',
      },
    ],
  },
  {
    id: 'feed',
    label: 'Feed Additives',
    image: feedImage,
    intro:
      'Sapropel-based feed additives have centuries of empirical use behind them, and modern science helps explain why. Mineral and biologically active substances in sapropel, including essential amino acids, activate physiological processes in animals and improve complete assimilation of the main diet feed.',
    products: [
      {
        name: 'Agrosapro BioNa',
        type: 'Liquid feed additive',
        use: 'Sapropel supplement for all livestock and poultry',
        benefits: [
          'Improves immunity of young animals',
          'Reduces mortality rates',
          'Enhances absorption and efficiency of the main feed',
          'Bactericidal and antifungal effect from deep bottom sapropel sediments',
          'Completely harmless with no rejection or allergic reactions',
        ],
        suitableAnimals: 'Poultry, cattle, pigs, horses, small livestock, rabbits, fur farm animals',
        application: 'Added to drinking water or solid feed; dosage by animal weight',
      },
    ],
  },
];

function ProductCard({ product, image, wide }) {
  return (
    <article className={`product-card ${wide ? 'product-card--wide' : ''}`}>
      <div className="product-card__media">
        <img src={image} alt="" />
      </div>
      <div className="product-card__body">
        <p className="product-card__type">{product.type}</p>
        <h3>{product.name}</h3>
        <p className="product-card__use">{product.use}</p>

        {product.suitableAnimals && (
          <p className="product-card__meta">
            <strong>Suitable animals:</strong> {product.suitableAnimals}
          </p>
        )}

        <h4>Key benefits</h4>
        <ul>
          {product.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>

        {product.suitable && (
          <p className="product-card__meta">
            <strong>Suitable for:</strong> {product.suitable}
          </p>
        )}

        {product.application && (
          <p className="product-card__meta">
            <strong>Application:</strong> {product.application}
          </p>
        )}

        <Link className="product-card__link" to={productLinks[product.name] || '#'}>
          View product details →
        </Link>
      </div>
    </article>
  );
}

function Products() {
  const [activeTab, setActiveTab] = useState('soil');
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeContent = useMemo(() => tabs.find((tab) => tab.id === activeTab), [activeTab]);
  const allMobileProducts = tabs.flatMap((tab) =>
    tab.products.map((product) => ({
      ...product,
      categoryLabel: tab.label,
      categoryId: tab.id,
      image: product.image || tab.image,
      to: productLinks[product.name] || '#',
    }))
  );

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const width = scrollRef.current.offsetWidth;
    const index = Math.round(scrollLeft / (width - 32));
    setActiveIndex(index);
  };

  return (
    <section id="products" className="products section section--cream">
      <div className="container">
        <div className="products__header">
          <p className="eyebrow">Product range</p>
          <h2 className="section-heading">Sapropel-based preparations for the full production cycle</h2>
          <p className="section-intro">
            Three focused product families cover soil restoration, crop performance and animal nutrition, all built
            around reproducible humic and fulvic acid technology.
          </p>
        </div>

        <div className="products__tabs products__tabs--desktop" role="tablist" aria-label="Product categories">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              className={activeTab === tab.id ? 'products__tab products__tab--active' : 'products__tab'}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          id={`panel-${activeContent.id}`}
          className="products__panel products__panel--desktop"
          role="tabpanel"
          aria-labelledby={`tab-${activeContent.id}`}
        >
          <div className="products__panel-intro">
            <p>{activeContent.intro}</p>
          </div>

          <div className={`products__grid ${activeContent.id === 'feed' ? 'products__grid--single' : ''}`}>
            {activeContent.products.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                image={product.image || activeContent.image}
                wide={activeContent.id === 'feed'}
              />
            ))}
          </div>

          <div className="products__panel-footer">
            <Link
              className="products__view-all"
              to={
                activeContent.id === 'soil'
                  ? '/products/soil-conditioners'
                  : activeContent.id === 'growth'
                    ? '/products/growth-regulators'
                    : '/products/feed-additives'
              }
            >
              View full {activeContent.label} range →
            </Link>
          </div>
        </div>

        <div className="products__mobile">
          <div className="products__mobile-category">
            <span key={allMobileProducts[activeIndex]?.categoryLabel}>
              {allMobileProducts[activeIndex]?.categoryLabel}
            </span>
          </div>

          <div className="products__swipe-track" ref={scrollRef} onScroll={handleScroll}>
            {allMobileProducts.map((product) => (
              <div className="products__swipe-card" key={product.name}>
                <div className="products__swipe-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="products__swipe-body">
                  <p className="products__swipe-type">{product.type}</p>
                  <h4 className="products__swipe-name">{product.name}</h4>
                  <p className="products__swipe-desc">{product.use}</p>
                  <Link className="products__swipe-btn" to={product.to}>
                    View details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="products__dots" aria-hidden="true">
            {allMobileProducts.map((product, i) => (
              <button
                key={product.name}
                type="button"
                className={`products__dot ${activeIndex === i ? 'products__dot--active' : ''}`}
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({
                      left: i * (scrollRef.current.offsetWidth - 32),
                      behavior: 'smooth',
                    });
                    setActiveIndex(i);
                  }
                }}
                aria-label={product.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
