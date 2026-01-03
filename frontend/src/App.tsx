import React from 'react';
import { Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Footer from './components/Footer';
import SocialIcons from "./components/SocialIcons";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import WhyZyron from './pages/WhyZyron';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Eng from './content/Eng';
import Community from './pages/Community';
import Resources from './pages/Resources';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './pages/NotFound';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/*" element={<Services />} />
        <Route path="/why-zyron" element={<WhyZyron />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen text-white font-sans selection:bg-zyron-cyan selection:text-black">
        <main className="flex-grow">
          <ScrollToTop />
          <AnimatedRoutes />
          <SocialIcons />
        </main>
        <Footer data={Eng.Common.footer} />
      </div>
    </BrowserRouter>
  );
};

export default App;