import { useState } from 'react';
import PageHero from '../../components/PageHero/PageHero.jsx';
import heroKImage from '../../assets/images/hero-k.jpg';
import './GrowthRegulatorK.css';

const tabs = ['Composition', 'Description', 'Benefits', 'Application'];

const compositionRows = [
  ['Mass fraction of dry matter, %', '≥9'],
  ['Mass fraction of organic matter nat. humidity, %', '≥7.0'],
  ['Mass fraction of mechanical impurities, %', '≤3.5'],
  ['Mass fraction of humic acids, g/l', '≥35.0'],
  ['Mass fraction of fulvic acids, g/l', '≥41.0'],
  ['Total nitrogen (N), g/l', '≥1.5'],
  ['Total phosphorus (P), g/l', '≥0.1'],
  ['Total potassium (K), g/l', '≥10'],
  ['pH', '7.0 – 8.6'],
  ['Density, kg/m³', '1020–1070'],
];

function CompositionTab() {
  return (
    <div className="detail-table-scroll">
      <table className="detail-table composition-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {compositionRows.map(([parameter, value]) => (
            <tr key={parameter}>
              <td>{parameter}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DescriptionTab() {
  return (
    <div className="detail-copy">
      <p>
        Agrosapro K is a liquid composition of organic origin with micronutrients. The formulation is characterized by high
        content of acidic functional groups of peat and sapropel, which activates exchange cationic reactions, improves the
        carbon-nitrogen ratio (C:N), corrects the electrical conductivity of soils and levels the soil balance. It is the
        combination of hydroxy aromatic compounds of peat, primarily phenols, and polyunsaturated aliphatic acids of
        sapropel that gives a highly effective result of the formulation.
      </p>
      <p>
        Agrosapro K is a liquid formula high in humic and fulvic acids, indicated for{' '}
        <strong>seed dressing, seedling or sapling treatment</strong>. Its use is allowed in organic crop production, both
        in pre-sowing preparation and for phytosanitary purposes on germinated and adult plants.
      </p>
      <p>
        The composition increases the viability of seeds,{' '}
        <strong>inhibits pathogens, improves stress resistance to temperature extremes, precipitation, and drought</strong>.
        Agrosapro K reduces the cost of plant protection products and mineral fertilizers.
      </p>
      <p>
        Agrosapro K fights <strong>aphids, spider mites and fungal diseases</strong> when applied to affected plants.
      </p>
    </div>
  );
}

function BenefitsTab() {
  return (
    <ul className="detail-benefits">
      <li>heals and strengthens the root system</li>
      <li>corrects excess salt accumulation in soils</li>
      <li>improves assimilation of moisture and nutrients</li>
      <li>enhances fruit development and weight gain</li>
      <li>
        <strong>inhibits pathogens</strong> and improves stress resistance to temperature extremes, precipitation and drought
      </li>
      <li>increases the viability of seeds when used for seed dressing</li>
      <li>
        <strong>reduces the need for chemical plant protection products</strong> and mineral fertilizers
      </li>
      <li>permitted in organic farming</li>
      <li>fights aphids, spider mites and fungal diseases</li>
    </ul>
  );
}

function ApplicationTab() {
  return (
    <>
      <div className="application-section">
        <div className="application-card">
          <div className="app-card-header">
            <span className="app-product-name">Agrosapro K - Field application</span>
            <span className="app-dose">
              6 l/ha <small>(0.6 ml/1 m²)</small>
            </span>
          </div>
          <div className="app-card-body">
            <div className="app-method-item">
              <span className="app-method-label">Into irrigation water</span>
              <span className="app-method-text">Add to irrigation water at 6 l/ha. Apply during active growing season.</span>
            </div>
            <div className="app-method-item">
              <span className="app-method-label">Foliar spray</span>
              <span className="app-method-text">Apply directly to foliage as needed for phytosanitary purposes.</span>
            </div>
          </div>
        </div>

        <div className="application-divider">
          <span>Seed dressing application</span>
        </div>

        <div className="application-card">
          <div className="app-card-header">
            <span className="app-product-name">Agrosapro K - Seed dressing</span>
          </div>
          <div className="app-card-body">
            <div className="app-method-item">
              <span className="app-method-label">Pre-sowing</span>
              <span className="app-method-text">
                Treat seeds before sowing to increase viability, inhibit pathogens and improve stress resistance.
              </span>
            </div>
            <div className="app-method-item">
              <span className="app-method-label">Seedlings</span>
              <span className="app-method-text">
                Treat germinated seedlings and young saplings to maintain plant immunity during growth and biomass gain.
              </span>
            </div>
          </div>
        </div>

        <div className="application-divider">
          <span>Hydroponics application</span>
        </div>

        <div className="application-card">
          <div className="app-card-header">
            <span className="app-product-name">Agrosapro K - Hydroponics</span>
          </div>
          <div className="app-card-body">
            <div className="app-method-item">
              <span className="app-method-label">Pest control</span>
              <span className="app-method-text">
                Apply as needed when plants are attacked by aphids, spider mites or fungal diseases.
              </span>
            </div>
            <div className="app-method-item">
              <span className="app-method-label">Note</span>
              <span className="app-method-text">
                Monitor root and non-root systems systematically. Correct dosage is key to successful results.
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

function GrowthRegulatorK() {
  const [activeTab, setActiveTab] = useState('Composition');

  return (
    <main>
      <PageHero
        eyebrow="Growth Regulator"
        title="Agrosapro K"
        subtitle="Liquid potassium-humate formulation with high content of humic and fulvic acids. For soil correction, seed dressing and phytosanitary applications."
        imageSrc={heroKImage}
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: 'Growth Regulators', to: '/products/growth-regulators' },
          { label: 'Agrosapro K', to: '/products/growth-regulators/k' },
        ]}
      />

      <section className="soil-detail product-detail-content">
        <div className="soil-detail__inner">
          <div className="detail-tabs" role="tablist" aria-label="Agrosapro K details">
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

export default GrowthRegulatorK;
