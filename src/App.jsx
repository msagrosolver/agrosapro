import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import Stats from './components/Stats/Stats.jsx';
import Products from './components/Products/Products.jsx';
import Solutions from './components/Solutions/Solutions.jsx';
import Technology from './components/Technology/Technology.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Products />
        <Solutions />
        <Technology />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
