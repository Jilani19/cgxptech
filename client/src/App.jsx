import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import MainLayout from './layouts/MainLayout';
import IndustryLayout from './layouts/IndustryLayout';

// Pages
import Home from './pages/Home';
import IndustriesOverview from './pages/IndustriesOverview';
import Products from './pages/Products';
import Services from './pages/Services';
import DataSources from './pages/DataSources';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Core Routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          
          {/* Industries Routes */}
          <Route path="industries" element={<IndustriesOverview />} />
          <Route path="industries/:slug" element={<IndustryLayout />} />
          
          {/* Services Routes */}
          <Route path="services" element={<Services />} />
          <Route path="services/:serviceSlug" element={<Services />} />
          
          {/* Data Sources Route */}
          <Route path="data-sources" element={<DataSources />} />
          <Route path="data-sources/:sourceSlug" element={<DataSources />} />

          {/* Catch-all Redirect */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
