import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
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
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth - 40;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

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

        <div className="solutions__grid solutions__grid--desktop">
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
                  <img src={solution.image} alt="" loading="lazy" />
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

        <div className="solutions__mobile">
          <div className="solutions__swipe-track" ref={scrollRef} onScroll={handleScroll}>
            {solutions.map((solution, index) => (
              <Link
                key={solution.title}
                to={solutionLinks[solution.title]}
                className="solutions__swipe-card"
              >
                <div className="solutions__swipe-image">
                  <img src={solution.image} alt={solution.title} loading="lazy" />
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="solutions__swipe-body">
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <span className="solutions__swipe-btn">View →</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="solutions__dots">
            {solutions.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`solutions__dot ${activeIndex === i ? 'solutions__dot--active' : ''}`}
                onClick={() => {
                  if (scrollRef.current) {
                    const cardWidth = scrollRef.current.offsetWidth - 40;
                    scrollRef.current.scrollTo({
                      left: i * cardWidth,
                      behavior: 'smooth',
                    });
                    setActiveIndex(i);
                  }
                }}
                aria-label={solutions[i].title}
              />
            ))}
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <Link to="/solutions" className="solutions__view-all">
            See all solutions →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
