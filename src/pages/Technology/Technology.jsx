import PageHero from '../../components/PageHero/PageHero.jsx';
import heroTechnologyImage from '../../assets/images/hero-technology.jpg';
import technologyIntroBackImage from '../../assets/images/technology-intro-back.jpg';
import technologyIntroFrontImage from '../../assets/images/technology-intro-front.jpg';
import './Technology.css';

const compositionStats = [
  {
    value: '≥50%',
    label: 'Humic acids',
    description:
      'Neutralize pathogenic environment, heal soil, bind heavy metals and radionuclides into insoluble complexes',
  },
  {
    value: '≥12%',
    label: 'Fulvic acids',
    description: 'Deliver and facilitate direct assimilation of nutrients into plant cells - penetrate cell membranes',
  },
  {
    value: '30-49%',
    label: 'Organic matter',
    description:
      'Contains amino acids, proteins and lipids necessary for living cell growth - part of a 70+ nutrient bioavailable complex',
  },
  {
    value: '70+',
    label: 'Bioavailable nutrients',
    description:
      'Including polysaccharides, sterols, hormones, fatty acids, carotenoids, vitamins, macro and microelements',
  },
];

const advantageCards = [
  {
    title: 'vs. Mineral fertilizers',
    text: 'In intensive crop production, the priority of high yields dominates, which even in the short term causes damage to the fertile layer, because industrial mineralization leads to lower levels of organic matter in soils. Agrosapro products expand the efficiency of applying mineral fertilizers and reduce the quantitative need for them. The organic microbiota of sapropel improves porosity, water retention and microbial flora - converting soil compounds into nutrients available to crops.',
  },
  {
    title: 'vs. Organic fertilizers',
    text: 'Unlike compost, vermiculite or manure, in a peat-sapropel mixture the degree of decomposition of natural organisms is deeper - such mixtures cannot be a source of pathogens, but on the contrary are characterized by bactericidal properties. Peat and sapropel are stored for more than 2 seasons without special conditions. In combination with compost or manure, Agrosapro mixtures have a neutralizing effect on high bioactivity and prevent the entering of weed seeds.',
  },
  {
    title: 'vs. Other organo-mineral fertilizers',
    text: 'Not all organo-mineral fertilizers contain humic and organic substances in sufficient quantities. To obtain effective humic extracts, it is important to use specific raw materials that guarantee agronomic activity and the minimum effective content. Agrosapro raw materials provide the so-called inherited humin - firmly held in soil aggregates and resistant to biodegradation - essential for lasting soil restoration.',
  },
];

function Technology() {
  return (
    <main>
      <PageHero
        eyebrow="Our technology"
        title="Clever by Nature"
        subtitle="A synergy of natural science and smart production that preserves everything valuable in sapropel - and delivers it in a consistently reproducible form."
        imageSrc={heroTechnologyImage}
        breadcrumbs={[{ label: 'Technology', to: '/technology' }]}
      />

      <section className="tech-foundation">
        <div className="tech-container tech-two-col">
          <div className="tech-copy">
            <h2>The raw material foundation</h2>
            <p>
              The basis of all Agrosapro preparations is a mixture of lowland peat and sapropel. Lowland peat is a
              biologically active environment which, in combination with sapropel, neutralizes and corrects excessive soil
              acidity, is the best natural remedy for depleted and polluted soils, and improves the fertility of any soil.
            </p>
            <p>
              Sapropel and lowland peat are a natural <strong>source of humic and fulvic acids</strong>. These acids have
              proven their high ability to influence soil metabolic processes, releasing physiologically active substances
              and nutrients into the soil substrate, contributing to biocenosis and more intensive development of the soil
              microbiota.
            </p>
            <p>
              Humic substances improve the structure and water-holding capacity of the soil, its buffering capacity,
              preventing the complete decomposition of organic residues into a simple solution of chemical elements.
            </p>
          </div>

          <div className="image-stack" aria-label="Raw material imagery">
            <div className="dot-grid" aria-hidden="true" />
            <img
              className="image-stack__image img-back"
              src={technologyIntroBackImage}
              alt="Pristine Belarusian lake at dawn with mist over peatland"
              loading="lazy"
            />
            <img
              className="image-stack__image img-front"
              src={technologyIntroFrontImage}
              alt="Rich dark sapropel lake sediment held in hands"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="tech-composition">
        <div className="tech-container">
          <div className="tech-composition__header">
            <h2>Guaranteed composition</h2>
            <p>Consistently reproducible functional composition - guaranteed in every batch.</p>
          </div>

          <div className="tech-stats-grid">
            {compositionStats.map((stat) => (
              <article className="tech-stat-card" key={stat.label}>
                <p className="tech-stat-card__value">{stat.value}</p>
                <h3>{stat.label}</h3>
                <p>{stat.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-production">
        <div className="tech-container tech-two-col tech-two-col--reverse">
          <div className="image-stack" aria-label="Production technology imagery">
            <div className="dot-grid" aria-hidden="true" />
            <img
              className="image-stack__image img-back"
              src={technologyIntroFrontImage}
              alt="Close-up of natural sapropel sediment used for agricultural preparations"
              loading="lazy"
            />
            <img
              className="image-stack__image img-front"
              src={technologyIntroBackImage}
              alt="Natural Belarusian lake environment where sapropel forms"
              loading="lazy"
            />
          </div>

          <div className="tech-copy">
            <h2>High-tech extraction, reproducible results</h2>
            <p>
              The general principles for obtaining humic substances, discovered more than 200 years ago, have not changed
              so far. But there are significant differences between humates and humic substances - their efficiency,
              manufacturability, safety and content - depending on the production technology and raw materials from which
              they are obtained.
            </p>
            <p>
              All humic substances are characterized by a changeable and varied chemical composition, even when extracted
              from one site. With the help of high-tech equipment, we apply{' '}
              <strong>deep physical and chemical processing of raw materials</strong>, acting over the molecular structure
              of sapropel by dispersion and extraction methods, in order to isolate easily hydrolysable compounds,
              bioactive complexes and amino acids, and also decompose our raw materials into macro and microelements.
            </p>
            <p>
              Innovative production processes let us achieve the best chelated organic and semi-organic compounds, activate
              or slow down certain bioactive bonds for a prolonged effect in soils or plants, and work with both low
              molecular weight substances and high molecular weight complexes for precise combination with minerals.
            </p>
            <p>
              The result: a <strong>stable, reproducible functional composition</strong> - guaranteed humic and fulvic acid
              content calibrated precisely for each product&apos;s intended purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="tech-advantages">
        <div className="tech-container">
          <div className="tech-advantages__header">
            <h2>Advantages over conventional approaches</h2>
          </div>

          <div className="tech-advantages-grid">
            {advantageCards.map((card) => (
              <article className="tech-advantage-card" key={card.title}>
                <h4>{card.title}</h4>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tech-results">
        <div className="tech-results__inner">
          <h2>Proven in the field</h2>

          <div className="tech-results__stats" aria-label="Field results">
            <article className="tech-results__stat">
              <p className="tech-results__value">18-22%</p>
              <p>average yield increase after year 1 in intensive crop production field trials</p>
            </article>
            <article className="tech-results__stat">
              <p className="tech-results__value">No-Till compatible</p>
              <p>
                single application under crop residues diminishes pathogenicity of the upper layer and restrains lye
                accumulation
              </p>
            </article>
          </div>

          <p className="tech-results__note">
            Results from experimental fields of intensive crop production. Individual results may vary by soil type and
            application conditions.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Technology;
