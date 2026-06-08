import { useState } from 'react';
import PageHero from '../../components/PageHero/PageHero.jsx';
import './GrowthRegulatorComplex.css';

const tabs = ['Composition', 'Description', 'Benefits', 'Application'];

const compositionRows = [
  ['Mass fraction of dry matter, %', '≥6'],
  ['Mass fraction of organic matter nat. humidity, %', '≥4.5'],
  ['Mass fraction of mechanical impurities, %', '≤1.0'],
  ['Mass fraction of humic acids, g/l', '≥20.0'],
  ['Mass fraction of fulvic acids, g/l', '≥60.0'],
  ['Free amino acids, g/l', '≥28.0'],
  ['Total nitrogen (N), g/l', '≥25.0'],
  ['Total phosphorus (P), g/l', '≥17.0'],
  ['Total potassium (K), g/l', '≥25.0'],
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
        Agrosapro Complex is a liquid top dressing for systemic care of crops and plantations, recommended for application
        in critical phenological phases, which vary both from the geographical zone of plants cultivation, and from seasonal
        exogenous and endogenous factors.
      </p>
      <p>
        The formulation acts simultaneously as a <strong>fertility accumulator and functional mineral fertilizer</strong>.
        Full NPK combined with humic and fulvic acids and free amino acids ensures complete nutrition while reducing the
        quantitative need for standalone mineral fertilizers.
      </p>
      <p>
        Agrosapro Complex stimulates the development of specific plant organs - root, flower, fruit - and suppresses fungal
        diseases, providing phytopathogen resistance. Compatible with hydroponics and controlled-environment growing.
      </p>
    </div>
  );
}

function BenefitsTab() {
  return (
    <ul className="detail-benefits">
      <li>acts simultaneously as a fertility accumulator and functional mineral fertilizer</li>
      <li>
        <strong>full NPK + free amino acids</strong> absorbed without residue
      </li>
      <li>reduces the quantitative need for standalone mineral fertilizers</li>
      <li>stimulates development of specific plant organs (root, flower, fruit)</li>
      <li>compatible with hydroponics and controlled-environment growing</li>
      <li>
        <strong>suppresses fungal diseases</strong> and provides phytopathogen resistance
      </li>
      <li>contains ≥60 g/l fulvic acids - highest in the Agrosapro range</li>
    </ul>
  );
}

function ApplicationTab() {
  return (
    <>
      <div className="application-section">
        <div className="application-card">
          <div className="app-card-header">
            <span className="app-product-name">Agrosapro Complex - Standard application</span>
          </div>
          <div className="app-card-body">
            <div className="app-method-item">
              <span className="app-method-label">Growing phase</span>
              <span className="app-method-text">5 ml per 1 litre of water - apply weekly.</span>
            </div>
            <div className="app-method-item">
              <span className="app-method-label">Fruiting phase</span>
              <span className="app-method-text">7 ml per 1 litre of water - apply weekly during fruiting.</span>
            </div>
          </div>
        </div>

        <div className="application-divider">
          <span>Important hydroponics notes</span>
        </div>

        <div className="application-card application-card--combined">
          <div className="app-card-header">
            <span className="app-product-name">Hydroponics compatibility</span>
          </div>
          <div className="app-card-body">
            <div className="app-method-item">
              <span className="app-method-label">pH range</span>
              <span className="app-method-text">
                Maintain pH 4.9-6.5. The formulation contains calcium (Ca) which can raise pH above 7.5 and reduce nutrient
                bioavailability.
              </span>
            </div>
            <div className="app-method-item">
              <span className="app-method-label">Avoid mixing</span>
              <span className="app-method-text">Do not mix with other mineral fertilizers containing calcium (Ca).</span>
            </div>
            <div className="app-method-item">
              <span className="app-method-label">Antagonists</span>
              <span className="app-method-text">
                Check interaction with Mg, Fe and Na. Refrain from co-application with B, Cu, Zn and Mn.
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

function GrowthRegulatorComplex() {
  const [activeTab, setActiveTab] = useState('Composition');

  return (
    <main>
      <PageHero
        eyebrow="Growth Regulator"
        title="Agrosapro Complex"
        subtitle="Full-spectrum liquid NPK top dressing with humic and fulvic acids and free amino acids. For systemic crop care in critical phenological phases."
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: 'Growth Regulators', to: '/products/growth-regulators' },
          { label: 'Agrosapro Complex', to: '/products/growth-regulators/complex' },
        ]}
      />

      <section className="soil-detail product-detail-content">
        <div className="soil-detail__inner">
          <div className="detail-tabs" role="tablist" aria-label="Agrosapro Complex details">
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

export default GrowthRegulatorComplex;
