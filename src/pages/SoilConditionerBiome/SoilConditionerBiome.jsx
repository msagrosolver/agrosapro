import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHero from '../../components/PageHero/PageHero.jsx';
import plantyImage from '../../assets/images/planty.jpg';
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

const applicationMethod =
  'Incorporation to a depth of 12–16 cm and abundant watering. With zero soil treatment (No-Till system), application on top of the soils together with mulch, without mixing and abundant watering.';

function CompositionTab() {
  return (
    <div className="detail-table-scroll">
      <table className="detail-table">
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
    <div className="detail-application">
      <div className="detail-table-scroll">
        <table className="detail-table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Application rate of soil improver</th>
              <th>Method of application</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Agrosapro Biome</td>
              <td>5–20 t/ha (0.5–2 kg/1 m²)</td>
              <td>{applicationMethod}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="detail-application__label">Application together with the basic liquid solution Agrosapro K</p>

      <div className="detail-table-scroll">
        <table className="detail-table detail-table--wide">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Application rate of soil improver</th>
              <th>Application rate of Agrosapro K into irrigation water</th>
              <th>Method of application</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Agrosapro Biome + Agrosapro K</td>
              <td>5–20 t/ha (0.5–2 kg/1 m²)</td>
              <td>6 l/ha (0.6 ml/1 m²)</td>
              <td>{applicationMethod}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <aside className="detail-packaging">
        <h4>Packaging &amp; Shelf Life</h4>
        <p>Solid form: Big bags 700–800 kg · Bags 50 kg · Bags 25 kg · Shelf life: 5 years without special storage conditions</p>
      </aside>
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
  const navigate = useNavigate();

  return (
    <main>
      <div style={{ position: 'relative' }}>
        <PageHero
          eyebrow="Soil Conditioner"
          title="Agrosapro Biome"
          subtitle="Base soil improver for all agricultural soils based on organic sapropel and lowland peat."
        />

        <button className="back-button" type="button" onClick={() => navigate(-1)} aria-label="Go back">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 4L6 9L11 14" stroke="#2D5A1B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <section className="soil-detail">
        <div className="soil-detail__inner">
          <img className="soil-detail__image" src={plantyImage} alt="Agrosapro Biome" />

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

          <div role="tabpanel">
            <TabContent activeTab={activeTab} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default SoilConditionerBiome;
