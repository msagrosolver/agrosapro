import { useState } from 'react';
import { Link } from 'react-router-dom';
import technologyImage from '../../assets/technology-sapropel.jpg';
import './Technology.css';

const composition = [
  {
    value: '>=50%',
    label: 'Humic acids',
    text: 'Neutralize pathogenic environment, heal soil, bind heavy metals and radionuclides.',
  },
  {
    value: '>=12%',
    label: 'Fulvic acids',
    text: 'Deliver and facilitate nutrient assimilation directly into plant cells.',
  },
  {
    value: '30-49%',
    label: 'Organic matter',
    text: 'Contains amino acids, proteins and lipids necessary for living cell growth.',
  },
  {
    value: 'NPK+',
    label: 'Mineral elements',
    text: 'Macro, meso and micronutrients absorbed without residue.',
  },
];

const comparisons = [
  {
    title: 'Compared with mineral fertilizers',
    text: 'Agrosapro products expand mineral fertilizer efficiency while reducing the quantity needed. Sapropel microbiota improves soil porosity, water retention and microbial flora, converting soil compounds into crop-available nutrients.',
  },
  {
    title: 'Compared with compost or manure',
    text: 'Sapropel has undergone deeper natural decomposition, making it free of pathogens and characterized by bactericidal properties. It stores for two or more seasons without special conditions and helps prevent weed seed entry.',
  },
  {
    title: 'Compared with organo-mineral products',
    text: 'Agrosapro targets agronomically active humic and fulvic acid concentrations from raw materials that provide inherited humin, held in soil aggregates and resistant to biodegradation for long-term restoration.',
  },
];

function Technology() {
  const [textExpanded, setTextExpanded] = useState(false);
  const [openComparison, setOpenComparison] = useState(null);

  return (
    <section id="technology" className="technology section section--cream">
      <div className="container">
        <div className="technology__layout">
          <div className="technology__copy">
            <p className="eyebrow">Technology</p>
            <h2 className="section-heading">The science behind sapropel</h2>
            <div className={`technology__copy-body ${textExpanded ? 'is-expanded' : 'is-collapsed'}`}>
              <p>
                The basis of all Agrosapro preparations is a mixture of lowland peat and sapropel, deep bottom sediments
                from pristine freshwater lakes. These are a natural source of humic and fulvic acids, which influence soil
                metabolic processes by releasing active substances and nutrients, contributing to biocenosis and driving
                more intensive development of soil microbiota.
              </p>
              <p>
                The general principles of humic substance extraction have been known for over 200 years. What distinguishes
                Agrosapro products is production technology and raw material quality. Deep physical and chemical processing
                through dispersion and extraction isolates bioactive complexes, amino acids, macroelements and
                microelements.
              </p>
              <p>
                The result is a stable, reproducible composition, not variable like classic organic fertilizers, delivering
                consistent agronomic performance across seasons and geographies.
              </p>
            </div>
            <button
              className="technology__read-more"
              onClick={() => setTextExpanded((v) => !v)}
              type="button"
            >
              {textExpanded ? 'Show less ↑' : 'Read more ↓'}
            </button>
            <Link
              to="/technology"
              className="button button--outline"
              style={{ marginTop: '24px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              Learn more about our technology →
            </Link>
          </div>

          <aside className="technology__visual" aria-label="Sapropel composition">
            <div className="technology__media">
              <img src={technologyImage} alt="" />
            </div>
            <div className="technology__composition">
              {composition.map((item) => (
                <article className="composition-card" key={item.label}>
                  <strong>{item.value}</strong>
                  <h3>{item.label}</h3>
                </article>
              ))}
            </div>
          </aside>
        </div>

        <div className="technology__comparisons" aria-label="Agrosapro advantages">
          {comparisons.map((item) => (
            <article
              key={item.title}
              className={`comparison-card comparison-card--accordion ${openComparison === item.title ? 'is-open' : ''}`}
            >
              <button
                className="comparison-card__trigger"
                onClick={() => setOpenComparison(openComparison === item.title ? null : item.title)}
                type="button"
              >
                <span>{item.title}</span>
                <svg
                  className="comparison-card__chevron"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="comparison-card__body">
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technology;
