import PageHero from '../../components/PageHero/PageHero.jsx';
import './GrowthRegulators.css';

function GrowthRegulators() {
  return (
    <main>
      <PageHero
        eyebrow="Product line"
        title="Growth Regulators"
        subtitle="Liquid humate concentrates that combine the power of organic sapropel with targeted mineral nutrition. For intensive and extensive farming, greenhouses and hydroponics."
      />
      <section className="page-placeholder">
        <div className="page-placeholder__inner container">
          <h2>Liquid formulations for crop performance</h2>
          <p>
            This placeholder section reserves space for formulation details, crop-specific recommendations, and performance
            data for the Agrosapro growth regulator portfolio.
          </p>
        </div>
      </section>
    </main>
  );
}

export default GrowthRegulators;