import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import Footer from './components/Footer/Footer.jsx';
import AboutPage from './pages/About/About.jsx';
import ContactPage from './pages/Contact/Contact.jsx';
import FeedAdditiveBioNa from './pages/FeedAdditiveBioNa/FeedAdditiveBioNa.jsx';
import FeedAdditivesPage from './pages/FeedAdditives/FeedAdditives.jsx';
import GrowthRegulatorComplex from './pages/GrowthRegulatorComplex/GrowthRegulatorComplex.jsx';
import GrowthRegulatorK from './pages/GrowthRegulatorK/GrowthRegulatorK.jsx';
import GrowthRegulatorsPage from './pages/GrowthRegulators/GrowthRegulators.jsx';
import HomePage from './pages/Home/Home.jsx';
import SolutionsPage from './pages/Solutions/Solutions.jsx';
import SoilConditionerBiome from './pages/SoilConditionerBiome/SoilConditionerBiome.jsx';
import SoilConditionerPhoenix from './pages/SoilConditionerPhoenix/SoilConditionerPhoenix.jsx';
import SoilConditionersPage from './pages/SoilConditioners/SoilConditioners.jsx';
import TechnologyPage from './pages/Technology/Technology.jsx';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/soil-conditioners" element={<SoilConditionersPage />} />
        <Route path="/products/soil-conditioners/biome" element={<SoilConditionerBiome />} />
        <Route path="/products/soil-conditioners/phoenix" element={<SoilConditionerPhoenix />} />
        <Route path="/products/growth-regulators" element={<GrowthRegulatorsPage />} />
        <Route path="/products/growth-regulators/k" element={<GrowthRegulatorK />} />
        <Route path="/products/growth-regulators/complex" element={<GrowthRegulatorComplex />} />
        <Route path="/products/feed-additives" element={<FeedAdditivesPage />} />
        <Route path="/products/feed-additives/biona" element={<FeedAdditiveBioNa />} />
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
