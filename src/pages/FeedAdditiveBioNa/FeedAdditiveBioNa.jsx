import { useState } from 'react';
import PageHero from '../../components/PageHero/PageHero.jsx';
import './FeedAdditiveBioNa.css';

const tabs = ['Composition', 'Description', 'Benefits', 'Application'];

const suitableFor = ['Poultry', 'Cattle', 'Pigs', 'Horses', 'Small livestock', 'Rabbits', 'Fur animals'];

function CompositionTab() {
  return (
    <div className="composition-info-box">
      Detailed composition data available on request. The preparation is based on deep bottom sapropel and lowland peat
      with naturally occurring humic and fulvic acids, essential amino acids, polysaccharides, carotenoids, vitamins and
      minerals. No synthetic additives.
    </div>
  );
}

function DescriptionTab() {
  return (
    <div className="detail-copy">
      <p>
        Agrosapro BioNa is designed to feed poultry, cattle, pigs, horses, medium and small livestock, rabbits, and also
        for fur animals in fur farms. The dosage depends on the weight of the bird or animal. The liquid formula of the
        product can be added both to drinking water and solid feed - the composition is completely harmless to animals and
        humans, does not cause rejection or allergies.
      </p>
      <p>
        The preparation is based on deep bottom sediments - sapropel and lowland peat - which have{' '}
        <strong>bactericidal and antifungal effect</strong>. Agrosapro BioNa improves the immunity of young animals, cuts
        down mortality, and betters the absorption of the main feed.
      </p>
      <p>
        Agrosapro BioNa is a <strong>universal liquid supplement</strong> suitable for all farm animals and poultry,
        including pets. Unlike antibiotics and chemical disinfectants, it works with the animal's natural physiology -
        activating physiological processes via essential amino acids and improving complete assimilation of the main diet.
      </p>
    </div>
  );
}

function BenefitsTab() {
  return (
    <ul className="detail-benefits">
      <li>improves immunity of young animals</li>
      <li>
        <strong>reduces mortality rates</strong> at livestock and poultry operations
      </li>
      <li>enhances absorption and efficiency of the main feed</li>
      <li>
        <strong>bactericidal and antifungal effect</strong> from deep sapropel sediments
      </li>
      <li>activates physiological processes via essential amino acids</li>
      <li>completely harmless - causes no rejection or allergic reactions in any animal species</li>
      <li>no synthetic additives</li>
      <li>can be combined with standard feed without special preparation</li>
    </ul>
  );
}

function ApplicationTab() {
  return (
    <>
      <div className="application-section">
        <div className="application-card">
          <div className="app-card-header">
            <span className="app-product-name">Agrosapro BioNa - Drinking water</span>
          </div>
          <div className="app-card-body">
            <div className="app-method-item">
              <span className="app-method-label">Method</span>
              <span className="app-method-text">
                Add directly to drinking water. Dosage is determined by animal body weight.
              </span>
            </div>
            <div className="app-method-item">
              <span className="app-method-label">Dosage</span>
              <span className="app-method-text">Contact us for the full species-specific dosing table.</span>
            </div>
          </div>
        </div>

        <div className="application-divider">
          <span>Alternative application</span>
        </div>

        <div className="application-card">
          <div className="app-card-header">
            <span className="app-product-name">Agrosapro BioNa - Solid feed</span>
          </div>
          <div className="app-card-body">
            <div className="app-method-item">
              <span className="app-method-label">Method</span>
              <span className="app-method-text">Mix directly into solid feed. Dosage is determined by animal body weight.</span>
            </div>
            <div className="app-method-item">
              <span className="app-method-label">Note</span>
              <span className="app-method-text">
                The liquid formula mixes evenly with all standard feed types. No special preparation required.
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="detail-packaging">
        <h4>Packaging &amp; Shelf Life</h4>
        <p>
          Liquid form: Eurotubes 1000 L (L 1200 × W 1000 × H 1170 mm) · Canisters 10 L · Bottles 1 L · Shelf life: 5
          years without special storage conditions
        </p>
      </section>
    </>
  );
}

function TabContent({ activeTab }) {
  if (activeTab === 'Description') return <DescriptionTab />;
  if (activeTab === 'Benefits') return <BenefitsTab />;
  if (activeTab === 'Application') return <ApplicationTab />;
  return <CompositionTab />;
}

function FeedAdditiveBioNa() {
  const [activeTab, setActiveTab] = useState('Composition');

  return (
    <main>
      <PageHero
        eyebrow="Feed Additive"
        title="Agrosapro BioNa"
        subtitle="Universal liquid sapropel supplement for all farm animals and poultry. Bactericidal, antifungal, completely harmless."
        breadcrumbs={[
          { label: 'Products', to: '/' },
          { label: 'Feed Additives', to: '/products/feed-additives' },
          { label: 'Agrosapro BioNa', to: '/products/feed-additives/biona' },
        ]}
      />

      <section className="soil-detail product-detail-content">
        <div className="soil-detail__inner">
          <div className="suitable-for-row" aria-label="Suitable animals">
            <p className="suitable-for-label">Suitable for:</p>
            <div className="suitable-for-badges">
              {suitableFor.map((item) => (
                <span className="suitable-for-badge" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="detail-tabs" role="tablist" aria-label="Agrosapro BioNa details">
            {tabs.map((tab) => (
              <button
                className={`detail-tabs__button${activeTab === tab ? ' detail-tabs__button--active' : ''}`}
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="tab-content tab-section" role="tabpanel">
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default FeedAdditiveBioNa;
