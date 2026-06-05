import revegetationImage from '../../assets/solution-revegetation.jpg';
import hydroponicsImage from '../../assets/solution-hydroponics.jpg';
import urbanGreenImage from '../../assets/solution-urban-green.jpg';
import livestockImage from '../../assets/product-feed-additive.jpg';
import preSowingImage from '../../assets/product-growth-regulator.jpg';
import waterImage from '../../assets/solution-water-remediation.jpg';
import './Solutions.css';

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
            <article className="solution-card" key={solution.title}>
              <div className="solution-card__media">
                <img src={solution.image} alt="" />
                <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="solution-card__body">
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
