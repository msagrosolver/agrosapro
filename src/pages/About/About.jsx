import PageHero from '../../components/PageHero/PageHero.jsx';
import heroAboutImage from '../../assets/images/hero-about.jpg';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <main>
      <PageHero
        eyebrow="About Agrosapro"
        title="In Step with the Demands of the Times"
        subtitle="Authorized European representative of sapropel-based agricultural preparations, bringing the wealth of Belarusian peatlands to European farmers."
        imageSrc={heroAboutImage}
        breadcrumbs={[{ label: 'About', to: '/about' }]}
      />

      <section className="about-mission">
        <div className="about-mission__inner">
          <div className="about-mission__copy">
            <h2>Our mission</h2>
            <p>
              All countries worldwide increasingly include food safety in their daily policy. Extensive and intensive
              industrial agriculture is the key to building a reliable and long-lasting supply for the food industry.
              Strategies and programs in each country seek stable production with minimal soil depletion.
            </p>
            <p>
              This is where sapropel-based preparations come in - with a solid combination of unique raw materials
              (peat-sapropel mixture), scientific basis, agricultural experience, and proven results in each product.
            </p>
            <p>
              European peatlands are a unique biome, and the centuries-old silty deposits of peat swamps - sapropel
              itself - are a real storehouse of micronutrients for both plant growth and animal feed. Sapropel and peat
              are the main sources of humic and fulvic acids, proven to be effective accumulators of fertility.
            </p>
            <p>Our mission is to share the wealth of this land with European agriculture.</p>
          </div>

          <div className="about-mission__media" aria-label="European farmland and fertile soil placeholder">
            <span>Photo: European farmland / fertile soil</span>
          </div>
        </div>
      </section>

      <section className="about-principles">
        <div className="about-principles__inner">
          <h2>Philosophy, vision and values</h2>
          <div className="about-principles__grid">
            <article className="about-principles__card">
              <h4>Philosophy</h4>
              <p>
                Recent trends in both industrial crop production and private horticulture indicate a reorientation
                towards a healthy lifestyle that originates in healthy food. Healthy food is increasingly demanding on
                the conditions of its origin. Healthy animals and birds, as well as healthy cereals, vegetables, fruits
                and berries, must be nourished by the energy of wildlife and the juices of a healthy, fertile land. Our
                operating principles are based on a combination of breakthrough knowledge, lessons from experience,
                maintaining soil fertility and strict observance of fertilizer regulations.
              </p>
            </article>

            <article className="about-principles__card">
              <h4>Vision</h4>
              <p>
                We believe there is no problem of land depletion and lack of fertility that cannot be solved. We work
                toward a future where everyone has access to abundant and fruitful crops, the earth nourishes its
                inhabitants, and everyone enjoys the benefits of their lands.
              </p>
            </article>

            <article className="about-principles__card">
              <h4>Values</h4>
              <p>
                All our activities sit at the intersection of traditional intensive and organic agriculture. We reject
                the predatory use of agricultural land and choose to care for the land. We are close to the principles
                of organic and ecological crop production. Our highly effective methods are based on systematic deep
                research, long-term field trials and excellent knowledge of crop production - from industrial to
                individual.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="about-europe">
        <div className="about-europe__inner">
          <h2>Agrosapro in Europe</h2>
          <p>
            Agrosapro is the authorized European representative for sapropel-based agricultural preparations produced in
            Belarus - one of the world&apos;s most environmentally pristine peatland regions. We facilitate the supply,
            distribution and technical support of the full product range for European markets.
          </p>
          <p>
            We work with distributors, farm operators, agricultural consultants and research institutions across Europe.
            Our team provides product selection guidance, application recommendations and ongoing agronomic support.
          </p>
          <Link className="about-europe__cta" to="/contact">
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;
