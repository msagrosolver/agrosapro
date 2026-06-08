import { Link } from 'react-router-dom';
import PageHero from '../../components/PageHero/PageHero.jsx';
import heroSolutionsImage from '../../assets/images/hero-solutions.jpg';
import solutionsHydroponicsImage from '../../assets/images/solutions-hydroponics.jpg';
import solutionsLawnImage from '../../assets/images/solutions-lawn.jpg';
import solutionsLivestockImage from '../../assets/images/solutions-livestock.jpg';
import solutionsPresowingImage from '../../assets/images/solutions-presowing.jpg';
import solutionsRevegetationImage from '../../assets/images/solutions-revegetation.jpg';
import solutionsWaterImage from '../../assets/images/solutions-water.jpg';
import './Solutions.css';

function Solutions() {
  return (
    <main>
      <PageHero
        eyebrow="Applications"
        title="Where Agrosapro Works"
        subtitle="From intensive crop production to revegetation, hydroponics to animal husbandry - sapropel-based preparations deliver across a wide range of agricultural contexts."
        imageSrc={heroSolutionsImage}
        breadcrumbs={[{ label: 'Solutions', to: '/solutions' }]}
      />

      <section id="revegetation" className="solution-block solution-block--odd">
        <div className="solution-block__inner">
          <img
            className="solution-block__image"
            src={solutionsRevegetationImage}
            alt="Degraded industrial land with new green plants beginning to grow"
            loading="lazy"
          />
          <div className="solution-block__copy">
            <p className="solution-eyebrow">Environmental rehabilitation</p>
            <h3>Revegetation</h3>
            <p>
              City landfills, abandoned wastelands after industrial construction, quarry dumps, sludge storages, fuel
              spills and warehouses of expired pesticides - all these are objects of accumulated environmental damage. The
              more neglected the site, the harder it becomes to rely on natural self-purification.
            </p>
            <p>
              Rehabilitation consists in stimulating the ecosystem&apos;s own resources to restore the original functions of
              microbiota self-regulation. Agrosapro peat-sapropel mixtures have been tested on several sites of accumulated
              damage both in pure form and with complementary reagents and binders - including bitumen, phosphogypsum,
              zeolite and lime - when stabilization and reduction of pollutant activity is required.
            </p>
            <p>
              The peat-sapropel mixture is rich in humic and fulvic acids and{' '}
              <strong>binds radionuclides, heavy metals and excess mineral fertilizers into insoluble and low-mobile complexes</strong>, restoring the redox potential of soils.
            </p>
            <div className="solution-products">
              <p>Recommended products:</p>
              <div className="solution-badges">
                <span>Agrosapro Biome</span>
                <span>Agrosapro pHoenix</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pre-sowing" className="solution-block solution-block--even">
        <div className="solution-block__inner solution-block__inner--reverse">
          <img
            className="solution-block__image"
            src={solutionsPresowingImage}
            alt="Seeds germinating in rich soil in warm golden light"
            loading="lazy"
          />
          <div className="solution-block__copy">
            <p className="solution-eyebrow">Crop production</p>
            <h3>Pre-sowing preparation</h3>
            <p>
              In any type of crop production, pre-sowing preparation includes measures to reduce stress load on seeds,
              start germination and stimulate even seedlings. The more intensive the farm, the more expensive unhealthy
              seedlings and poor harvests become.
            </p>
            <p>
              In certain crops - such as all leafy annual crops consumed without cooking - the introduction of chemical
              plant protection products is strictly prohibited. In organic farming, chemicals cannot be used on any crop.
            </p>
            <p>
              Agrosapro K is a liquid formula high in humic and fulvic acids, indicated for{' '}
              <strong>seed dressing, seedling or sapling treatment</strong>. Its use is permitted in organic crop
              production. The composition increases the viability of seeds, <strong>inhibits pathogens, improves stress resistance</strong> to temperature extremes, precipitation and drought, and reduces the need for chemical
              plant protection products.
            </p>
            <div className="solution-products">
              <p>Recommended products:</p>
              <div className="solution-badges">
                <span>Agrosapro K</span>
                <span>Agrosapro Complex</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="professional-lawn" className="solution-block solution-block--odd">
        <div className="solution-block__inner">
          <img
            className="solution-block__image"
            src={solutionsLawnImage}
            alt="Perfectly maintained green sports lawn with morning dew"
            loading="lazy"
          />
          <div className="solution-block__copy">
            <p className="solution-eyebrow">Urban green infrastructure</p>
            <h3>Professional lawns &amp; urban green</h3>
            <p>
              Professional lawns - golf courses, football and sports lawns, residential green areas, parterre lawns in
              parks and gardens - require care with the least energy and human cost: minimum watering and dense green grass
              throughout the growing season.
            </p>
            <p>
              Agrosapro Biome broad spectrum soil conditioner is used to replenish and preserve the fertile soil layer. It
              contains a mixture of sapropel deposits and lowland peat, has a general healing effect, gains the friability
              of humus and <strong>does not contain weeds or bioactive pathogenic environment</strong>, characteristic of
              other organic fertilizers such as manure, bird dung, compost or vermiculite.
            </p>
            <p>
              Agrosapro pHoenix is specifically indicated for{' '}
              <strong>reviving saline, exhausted and disturbed soils, neglected flower beds and lawns</strong>. The
              composition promotes the formation of water-insoluble compounds with metals, nitrates and radionuclides,
              neutralizing their action in the fertile layer.
            </p>
            <div className="solution-products">
              <p>Recommended products:</p>
              <div className="solution-badges">
                <span>Agrosapro Biome</span>
                <span>Agrosapro pHoenix</span>
                <span>Agrosapro K</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="water-bodies" className="solution-block solution-block--even">
        <div className="solution-block__inner solution-block__inner--reverse">
          <img
            className="solution-block__image"
            src={solutionsWaterImage}
            alt="Clean agricultural pond with clear water and natural surroundings"
            loading="lazy"
          />
          <div className="solution-block__copy">
            <p className="solution-eyebrow">Environmental remediation</p>
            <h3>Polluted water bodies</h3>
            <p>
              City sewage, industrial effluents, oil spills and polluted groundwater under sites of accumulated harm are
              real environmental challenges characteristic of any industrialized country.
            </p>
            <p>
              <strong>Elimination of environmental damage is unthinkable without the sanitation of water bodies.</strong>{' '}
              The installation of permeable reaction barriers (PRB) refers to physical and chemical methods for treating
              groundwater, subsurface polluted flows and spills of hazardous substances. Blocking filtration barriers
              localize, isolate and counteract pollutants.
            </p>
            <p>
              PRB from peat-sapropel mixtures <strong>effectively neutralizes compounds of heavy metals and radionuclides</strong>, is radiation and chemically stable, and allows combination with defoamers, iron-containing granules
              and other functional reagents. Rain and melt waters, as well as atmospheric transfer of gas and dust
              emissions into aquifers, require systematic monitoring of traces of migration of highly toxic compounds.
            </p>
            <div className="solution-products">
              <p>Recommended products:</p>
              <div className="solution-badges">
                <span>Agrosapro Biome</span>
                <span>Agrosapro pHoenix</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="animal-husbandry" className="solution-block solution-block--odd">
        <div className="solution-block__inner">
          <img
            className="solution-block__image"
            src={solutionsLivestockImage}
            alt="Healthy cattle and sheep grazing in an open green pasture"
            loading="lazy"
          />
          <div className="solution-block__copy">
            <p className="solution-eyebrow">Livestock &amp; poultry</p>
            <h3>Animal husbandry</h3>
            <p>
              Modern requirements for animal husbandry are focused on animal well-being, which directly determines the
              productive longevity, quality and quantity of products obtained. High density of poultry and livestock is a
              significant stressor - animals get sick more often, intestinal microflora is more sensitive, and weight gain,
              bone strength and skin health all suffer.
            </p>
            <p>
              Agrosapro BioNa is designed to feed poultry, cattle, pigs, horses, medium and small livestock, rabbits, and
              fur animals in fur farms. The liquid formula can be added to both drinking water and solid feed - the
              composition is completely harmless to animals and humans, does not cause rejection or allergies.
            </p>
            <p>
              The preparation is based on deep bottom sediments - sapropel and lowland peat - which have{' '}
              <strong>bactericidal and antifungal effect</strong>. Agrosapro BioNa improves the immunity of young animals,
              cuts down mortality and betters the absorption of the main feed.
            </p>
            <div className="solution-products">
              <p>Recommended products:</p>
              <div className="solution-badges">
                <span>Agrosapro BioNa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hydroponics" className="solution-block solution-block--even">
        <div className="solution-block__inner solution-block__inner--reverse">
          <img
            className="solution-block__image"
            src={solutionsHydroponicsImage}
            alt="Modern hydroponic growing system with lush green lettuce and herbs"
            loading="lazy"
          />
          <div className="solution-block__copy">
            <p className="solution-eyebrow">Controlled environment growing</p>
            <h3>Hydroponics</h3>
            <p>
              The hydroponic growing method uses nutrient solutions and substrates instead of soil. Agrosapro advocates
              responsible and rational use of minerals - our peat-sapropel mixtures and the humates, humic and fulvic acids
              obtained from them are the most valuable asset we can offer to this science-intensive technology.
            </p>
            <p>
              In hydroponics and aeroponics, crops with a short growing cycle are most popular - leafy lettuces, spinach,
              herbs, radishes, tomatoes, peppers and decorative flowers. Seeds are germinated using sapropel soil improvers.
              Seedlings can be treated with liquid potassium humate Agrosapro K even after transferring to the nutrient
              solution.
            </p>
            <p>
              Agrosapro growth regulators effectively nourish plants with natural organic matter, chelates of highly
              soluble nutrients in combination with humic and fulvic acids. <strong>Key tip:</strong> maintain pH 4.9-6.5
              in the nutrient solution and monitor root systems systematically - correct dosage is the key to successful
              results.
            </p>
            <div className="solution-products">
              <p>Recommended products:</p>
              <div className="solution-badges">
                <span>Agrosapro K</span>
                <span>Agrosapro Complex</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions-cta">
        <div className="solutions-cta__inner">
          <h2>Need a tailored solution?</h2>
          <p>
            Whether you are dealing with degraded land, a hydroponics project or a livestock operation - we are ready to
            help you find the right Agrosapro preparation for your specific conditions.
          </p>
          <Link className="solutions-cta__button" to="/contact">
            Contact us
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Solutions;
