import { Link } from 'react-router-dom';
import { useState } from 'react';
import revegetationImage from '../../assets/solution-revegetation.jpg';
import hydroponicsImage from '../../assets/solution-hydroponics.jpg';
import urbanGreenImage from '../../assets/solution-urban-green.jpg';
import livestockImage from '../../assets/product-feed-additive.jpg';
import preSowingImage from '../../assets/product-growth-regulator.jpg';
import waterImage from '../../assets/solution-water-remediation.jpg';
import './Solutions.css';

const solutionLinks = {
  Revegetation: '/solutions#revegetation',
  Hydroponics: '/solutions#hydroponics',
  'Professional lawns & urban green': '/solutions#professional-lawn',
  'Animal husbandry': '/solutions#animal-husbandry',
  'Pre-sowing preparation': '/solutions#pre-sowing',
  'Water body remediation': '/solutions#water-bodies',
};

const solutions = [
  {
    title: 'Revegetation',
    description:
      'Restoration of the fertile soil layer at sites of accumulated environmental damage, eroded or chemically polluted land.',
    image: revegetationImage,
  },
  {
    title: 'Hydroponics',
    description: 'Profile solutions to increase healthy seedling counts and yields in controlled-environment systems.',
    image: hydroponicsImage,
  },
  {
    title: 'Professional lawns & urban green',
    description: 'Conditioning and long-term care of sports grounds, urban parks and public green infrastructure.',
    image: urbanGreenImage,
  },
  {
    title: 'Animal husbandry',
    description: 'Immune support, feed efficiency improvement and mortality reduction for livestock operations.',
    image: livestockImage,
  },
  {
    title: 'Pre-sowing preparation',
    description: 'Seed treatment and seedling conditioning to produce healthy, disease-resistant plants from stage one.',
    image: preSowingImage,
  },
  {
    title: 'Water body remediation',
    description: "Restoration of polluted lakes, ponds and agricultural waterways using sapropel's natural binding properties.",
    image: waterImage,
  },
];

function Solutions() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section id="solutions" className="solutions section">
      <div className="container">
        <div className="solutions__header">
          <p className="eyebrow">Applications</p>
          <h2 className="section-heading">Built for agricultural, ecological and urban growing contexts</h2>
          <p className="section-intro">
            The same sapropel foundation can be adapted to fields, controlled environments, livestock operations and
            environmental restoration programs.
          </p>
        </div>

        <div className="solutions__grid">
          {solutions.map((solution, index) => (
            <Link
              to={solutionLinks[solution.title]}
              className="solution-card-link"
              key={solution.title}
              style={{ textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={() => setHoveredCard(solution.title)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <article
                className="solution-card"
                style={{
                  transform: hoveredCard === solution.title ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow:
                    hoveredCard === solution.title ? '0 8px 32px rgba(0,0,0,0.10)' : 'var(--shadow-card)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
              >
                <div className="solution-card__media">
                  <img src={solution.image} alt="" />
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="solution-card__body">
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link
            to="/solutions"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#2D5A1B',
              fontSize: '15px',
              fontWeight: '600',
              textDecoration: 'none',
              padding: '10px 24px',
              border: '1.5px solid rgba(45,90,27,0.3)',
              borderRadius: '999px',
            }}
          >
            See all solutions →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
