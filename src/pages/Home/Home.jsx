import Hero from '../../components/Hero/Hero.jsx';
import Stats from '../../components/Stats/Stats.jsx';
import Products from '../../components/Products/Products.jsx';
import Solutions from '../../components/Solutions/Solutions.jsx';
import Technology from '../../components/Technology/Technology.jsx';

function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Products />
      <Solutions />
      <Technology />
    </main>
  );
}

export default Home;