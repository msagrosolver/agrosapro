import PageHero from '../../components/PageHero/PageHero.jsx';
import './Technology.css';

function Technology() {
  return (
    <main>
      <PageHero
        eyebrow="Our technology"
        title="Clever by Nature"
        subtitle="A synergy of natural science and smart production methods that preserves everything valuable in sapropel — and delivers it in a consistently reproducible form."
      />
      <section className="page-placeholder">
        <div className="page-placeholder__inner container">
          <h2>Process and production overview</h2>
          <p>
            This page is prepared for a deeper look at extraction, stabilization, and manufacturing processes behind the
            Agrosapro product family.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Technology;