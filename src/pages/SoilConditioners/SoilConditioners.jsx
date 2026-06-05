import PageHero from '../../components/PageHero/PageHero.jsx';
import './SoilConditioners.css';

function SoilConditioners() {
  return (
    <main>
      <PageHero
        eyebrow="Product line"
        title="Soil Conditioners"
        subtitle="Granulate preparations based on organic sapropel and lowland peat. Restore soil health, correct pH, and build lasting fertility."
      />
      <section className="page-placeholder">
        <div className="page-placeholder__inner container">
          <h2>Practical soil recovery support</h2>
          <p>
            This page will house the full soil conditioner range, technical specifications, and application guidance. For now,
            it provides a dedicated route and structure for product-specific content.
          </p>
        </div>
      </section>
    </main>
  );
}

export default SoilConditioners;