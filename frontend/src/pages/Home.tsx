import React from 'react';
import { HeroCarousel } from '../components/HeroCarousel';
import Section from '../components/ui/Section';
import Navbar from '../components/Navbar';
import { ServicesSection } from '../components/ServicesSection';
import OurFeatures from '../components/OurFeatures';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Eng from '../content/Eng';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="min-h-screen w-full flex  overflow-hidden">
        <Navbar />

        <div className="flex-1 min-h-0">
          <HeroCarousel slides={Eng.headers.home} />
        </div>
      </div>

      {/* Services Preview */}
      <Section className="relative z-10">
        <ServicesSection data={Eng.home.services} />
      </Section>

      {/* Stats/Highlights */}
      <Section className="bg-gradient-to-b from-transparent to-zyron-blue/5">
        <OurFeatures data={Eng.home.features} />
      </Section>
      <Section className="bg-gradient-to-b from-transparent to-zyron-blue/5">
        <AboutSection data={Eng.home.about} />
      </Section>
      <Section className="bg-gradient-to-b from-transparent to-zyron-blue/5">
        <ContactSection data={Eng.Common.contactInfo} />
      </Section>
    </>
  );
};

export default Home;