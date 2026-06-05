import PageHero from '../../components/PageHero/PageHero.jsx';
import './Solutions.css';

function Solutions() {
  return (
    <main>
      <PageHero
        eyebrow="Applications"
        title="Where Agrosapro Works"
        subtitle="From intensive crop production to revegetation, hydroponics to animal husbandry — sapropel-based preparations deliver consistent results across a wide range of agricultural contexts."
      />
      <section className="page-placeholder">
        <div className="page-placeholder__inner container">
          <h2>Use cases across agricultural systems</h2>
          <p>
            This placeholder will expand into solution-specific content, field applications, and industry scenarios without
            changing the new route structure.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Solutions;