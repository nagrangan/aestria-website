'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ReviewsSection from '@/components/ReviewsSection';
import SecondaryCTASection from '@/components/SecondaryCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <ReviewsSection />
      <SecondaryCTASection />
      <Footer />
    </main>
  );
}
