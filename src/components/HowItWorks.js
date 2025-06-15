import React from 'react';
import { Package, Truck, Heart, Shield } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Heart,
      title: "Choose Your Charm",
      description: "Browse our curated collection of handcrafted luxury charms, each designed with meticulous attention to detail and artisanal craftsmanship.",
      image: "/images/dyno1.jpg"
    },
    {
      icon: Package,
      title: "Premium Packaging",
      description: "Your charm arrives in our signature kraft packaging, designed to create an unforgettable unboxing experience that reflects our luxury standards.",
      image: "/images/spike1.jpg"
    },
    {
      icon: Truck,
      title: "Swift Delivery",
      description: "Enjoy complimentary express delivery across India with secure packaging and real-time tracking for complete peace of mind.",
      image: "/images/IMG_3026.jpg"
    },
    {
      icon: Shield,
      title: "Lifetime Guarantee",
      description: "Every Aestria charm comes with our lifetime craftsmanship guarantee, ensuring your investment in luxury is protected forever.",
      image: "/images/bluewhale1.jpg"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-pastel-sage/30 px-6 py-2 rounded-full mb-6">
            <span className="font-mono text-xs text-luxury-charcoal tracking-wide uppercase">The Aestria Experience</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl text-luxury-charcoal mb-6">
            How It Works
          </h2>
          <p className="font-mono text-lg text-luxury-graphite max-w-2xl mx-auto leading-relaxed">
            From selection to delivery, every step of your Aestria journey is designed to exceed expectations 
            and create moments of pure luxury.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-8 animate-slide-up ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-luxury-gold to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <step.icon size={24} strokeWidth={1.5} className="text-white" />
                  </div>
                  <div className="w-12 h-px bg-gradient-to-r from-luxury-gold to-transparent"></div>
                  <span className="font-mono text-xs text-luxury-gold tracking-wide uppercase">Step {index + 1}</span>
                </div>
                
                <h3 className="font-serif text-3xl lg:text-4xl text-luxury-charcoal">
                  {step.title}
                </h3>
                
                <p className="font-mono text-lg text-luxury-graphite leading-relaxed">
                  {step.description}
                </p>

                <div className="pt-4">
                  <button className="btn-secondary text-sm">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink/20 to-pastel-lavender/20 rounded-none transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                  <div className="relative bg-white p-8 shadow-2xl rounded-none transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-none"
                    />
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center">
                      <span className="font-mono text-xs font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                {index % 2 === 0 && (
                  <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-pastel-mint/30 rounded-full blur-xl"></div>
                )}
                {index % 2 === 1 && (
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-pastel-peach/30 rounded-full blur-xl"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-24 animate-fade-in">
          <div className="bg-gradient-to-r from-pastel-cream to-pastel-lavender p-12 lg:p-16 rounded-none">
            <h3 className="font-serif text-3xl lg:text-4xl text-luxury-charcoal mb-6">
              Ready to Experience Luxury?
            </h3>
            <p className="font-mono text-lg text-luxury-graphite mb-8 max-w-2xl mx-auto">
              Join thousands of customers who have discovered the perfect blend of elegance and craftsmanship.
            </p>
            <button className="btn-primary">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
