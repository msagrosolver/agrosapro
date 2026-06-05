import PageHero from '../../components/PageHero/PageHero.jsx';
import './About.css';

function About() {
  return (
    <main>
      <PageHero
        eyebrow="About Agrosapro"
        title="In Step with the Demands of the Times"
        subtitle="Authorized European representative of sapropel-based agricultural preparations, bringing the wealth of Belarusian peatlands to European farmers."
      />
      <section className="page-placeholder">
        <div className="page-placeholder__inner container">
          <h2>Company profile and market position</h2>
          <p>
            This page is reserved for company background, regional representation details, and the broader Agrosapro story
            for partners and distributors.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;