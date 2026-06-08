import PageHero from '../../components/PageHero/PageHero.jsx';
import heroAboutImage from '../../assets/images/hero-about.jpg';
import './About.css';

function About() {
  return (
    <main>
      <PageHero
        eyebrow="About Agrosapro"
        title="In Step with the Demands of the Times"
        subtitle="Authorized European representative of sapropel-based agricultural preparations, bringing the wealth of Belarusian peatlands to European farmers."
        imageSrc={heroAboutImage}
      />
      <section className="about-summary">
        <div className="about-summary__inner container">
          <h2>Company profile and market position</h2>
          <p>
            Agrosapro represents sapropel-based agricultural preparations for European partners, farm operators, and
            distributors looking for practical natural inputs that support soil health, resilient crops, and responsible
            livestock production.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
