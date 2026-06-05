import './Stats.css';

const stats = [
  { number: '18-22%', label: 'Average yield increase in year 1' },
  { number: '>=50%', label: 'Humic acid content' },
  { number: '>=12%', label: 'Fulvic acid content' },
  { number: '0', label: 'Toxic waste produced' },
];

function Stats() {
  return (
    <section id="about" className="stats" aria-label="Agrosapro proof points">
      <div className="stats__grid container">
        {stats.map((stat) => (
          <article className="stats__item" key={stat.label}>
            <strong>{stat.number}</strong>
            <span>{stat.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Stats;
