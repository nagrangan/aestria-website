import React from 'react';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import Reviews from '../components/Reviews';
import SecondCTA from '../components/SecondCTA';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <Reviews />
      <SecondCTA />
      <Footer />
    </div>
  );
};

export default Homepage;
