import Hero from '../../components/Hero/Hero.jsx';
import Stats from '../../components/Stats/Stats.jsx';
import Products from '../../components/Products/Products.jsx';
import Solutions from '../../components/Solutions/Solutions.jsx';
import Technology from '../../components/Technology/Technology.jsx';
import Contact from '../../components/Contact/Contact.jsx';

function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Products />
      <Solutions />
      <Technology />
      <Contact />
    </main>
  );
}

export default Home;