import PageHero from '../../components/PageHero/PageHero.jsx';
import './FeedAdditives.css';

function FeedAdditives() {
  return (
    <main>
      <PageHero
        eyebrow="Product line"
        title="Feed Additives"
        subtitle="Liquid sapropel supplement for all livestock and poultry. Centuries of empirical use, backed by modern science."
      />
      <section className="page-placeholder">
        <div className="page-placeholder__inner container">
          <h2>Animal nutrition with sapropel support</h2>
          <p>
            This route is ready for feed additive documentation, composition data, and livestock application use cases while
            keeping the page meaningful during the build-out phase.
          </p>
        </div>
      </section>
    </main>
  );
}

export default FeedAdditives;