import { useState } from 'react';
import PageHero from '../../components/PageHero/PageHero.jsx';
import './SoilConditionerBiome.css';

const tabs = ['Composition', 'Description', 'Benefits', 'Application'];

const compositionRows = [
  ['Mass fraction of dry matter, %', '≥80.0'],
  ['Humic complex, g/kg', '≥220.0'],
  ['Mass fraction of humic acids, g/kg', '≥30'],
  ['Mass fraction of fulvic acids, g/kg', '≥180.0'],
  ['Total nitrogen (N), g/kg', '≥3.3'],
  ['Total phosphorus (P), g/kg', '≥1.8'],
  ['Total potassium (K), g/kg', '≥3.5'],
  ['Calcium CaO, g/kg', '≥2.5'],
  ['Magnesium MgO, g/kg', '≥0.4'],
  ['Iron (Fe), g/kg', '≥5.0'],
  ['Sulfur (S), g/kg', '≥1.0'],
  ['pH', '5.1 – 5.8'],
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
        In intensive farming, there is a gradual accumulation of nitrites, chlorides, carbonates and sulfates in the upper
        layers of the soil as a result of excessive mineralization.{' '}
        <strong>Excessive salt content in the soil disables huge arable areas</strong>, since at medium and high atmospheric
        temperatures the topsoil overheats, which provokes constant capillary evaporation of moisture from groundwater,{' '}
        <strong>
          and mineral fertilizers are no longer absorbed by plants and settle in the soil, salting it even more
        </strong>
        .
      </p>
      <p>
        Agrosapro Biome soil improver is based on ecological sapropel and lowland peat. Humic substances form stable
        water-insoluble compounds with metal ions contained in the soil and molecules of inorganic compounds that pollute the
        environment. The <strong>soil improver Agrosapro Biome restores the neutral pH of the soil</strong>, removes excess
        nitrates and ammonium salts.
      </p>
      <p>
        Agrosapro Biome is suitable for all crop types — cereals, vegetables, fruit crops, industrial crops — in both
        extensive and intensive farming.
      </p>
    </div>
  );
}

function BenefitsTab() {
  return (
    <ul className="detail-benefits">
      <li>increases the level of humus in the soil</li>
      <li>
        <strong>increases soil moisture retention</strong> and doses gradual water absorption
      </li>
      <li>
        contributes to the <strong>temperature self-regulation</strong> of the soil cover with a large difference in daily
        temperatures
      </li>
      <li>
        activates soil beneficial microorganisms and <strong>eliminates painful microflora</strong> (fungal mycelium,
        pathogenic bacteria)
      </li>
      <li>
        <strong>reduces the mobility of nitrogen fertilizers</strong> and converts phosphorus into a more mobile form, easily
        absorbed by plants
      </li>
      <li>in a short time restores the fertile soil layer</li>
      <li>
        <strong>zero toxic waste</strong>
      </li>
    </ul>
  );
}

function ApplicationTab() {
  return (
    <div className="application-section">
      <div className="application-card">
        <div className="app-card-header">
          <span className="app-product-name">Agrosapro Biome</span>
          <span className="app-dose">
            5–20 t/ha <small>(0.5–2 kg/1 m²)</small>
          </span>
        </div>
        <div className="app-card-body">
          <div className="app-method-item">
            <span className="app-method-label">Standard</span>
            <span className="app-method-text">Incorporation to a depth of 12–16 cm and abundant watering.</span>
          </div>
          <div className="app-method-item">
            <span className="app-method-label">No-Till</span>
            <span className="app-method-text">
              Application on top of the soil together with mulch, without mixing and abundant watering.
            </span>
          </div>
        </div>
      </div>

      <div className="application-divider">
        <span>Combined application with Agrosapro K</span>
      </div>

      <div className="application-card application-card--combined">
        <div className="app-card-header">
          <span className="app-product-name">Agrosapro Biome + Agrosapro K</span>
        </div>
        <div className="app-card-body">
          <div className="app-method-item">
            <span className="app-method-label">Soil dose</span>
            <span className="app-method-text">5–20 t/ha (0.5–2 kg/1 m²)</span>
          </div>
          <div className="app-method-item">
            <span className="app-method-label">K solution</span>
            <span className="app-method-text">6 l/ha (0.6 ml/1 m²) into irrigation water</span>
          </div>
          <div className="app-method-item">
            <span className="app-method-label">Standard</span>
            <span className="app-method-text">Incorporation to a depth of 12–16 cm and abundant watering.</span>
          </div>
          <div className="app-method-item">
            <span className="app-method-label">No-Till</span>
            <span className="app-method-text">
              Application on top of the soil together with mulch, without mixing and abundant watering.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function TabContent({ activeTab }) {
  if (activeTab === 'Description') return <DescriptionTab />;
  if (activeTab === 'Benefits') return <BenefitsTab />;
  if (activeTab === 'Application') return <ApplicationTab />;
  return <CompositionTab />;
}

function SoilConditionerBiome() {
  const [activeTab, setActiveTab] = useState('Composition');

  return (
    <main>
      <PageHero
        eyebrow="Soil Conditioner"
        title="Agrosapro Biome"
        subtitle="Base soil improver for all agricultural soils based on organic sapropel and lowland peat."
        breadcrumbs={[
          { label: 'Products', to: '/products' },
          { label: 'Soil Conditioners', to: '/products/soil-conditioners' },
          { label: 'Agrosapro Biome', to: '/products/soil-conditioners/biome' },
        ]}
      />

      <section className="soil-detail product-detail-content">
        <div className="soil-detail__inner">
          <div className="detail-tabs" role="tablist" aria-label="Agrosapro Biome details">
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

export default SoilConditionerBiome;
