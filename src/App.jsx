import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import AboutPage from './pages/About/About.jsx';
import ContactPage from './pages/Contact/Contact.jsx';
import FeedAdditivesPage from './pages/FeedAdditives/FeedAdditives.jsx';
import GrowthRegulatorsPage from './pages/GrowthRegulators/GrowthRegulators.jsx';
import HomePage from './pages/Home/Home.jsx';
import SolutionsPage from './pages/Solutions/Solutions.jsx';
import SoilConditionersPage from './pages/SoilConditioners/SoilConditioners.jsx';
import TechnologyPage from './pages/Technology/Technology.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/soil-conditioners" element={<SoilConditionersPage />} />
        <Route path="/products/growth-regulators" element={<GrowthRegulatorsPage />} />
        <Route path="/products/feed-additives" element={<FeedAdditivesPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
