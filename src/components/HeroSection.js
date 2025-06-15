import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pastel-mint via-pastel-sky to-pastel-lavender">
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-30">
        <div className="w-32 h-32 rounded-full bg-pastel-mint animate-float"></div>
      </div>
      <div className="absolute top-40 right-20 opacity-20">
        <div className="w-24 h-24 rounded-full bg-pastel-peach animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      <div className="absolute bottom-32 left-1/4 opacity-25">
        <div className="w-16 h-16 rounded-full bg-pastel-sky animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container-custom pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-pastel-butter/50 px-4 py-2 rounded-full">
                <Sparkles size={16} strokeWidth={1.5} className="text-luxury-gold" />
                <span className="font-mono text-xs text-luxury-charcoal tracking-wide">HANDCRAFTED LUXURY</span>
              </div>
              
              <h1 className="font-serif text-5xl lg:text-7xl text-luxury-charcoal leading-tight">
                Exquisite Charms
                <span className="block text-luxury-gold">Beyond Compare</span>
              </h1>
              
              <p className="font-mono text-lg text-luxury-graphite leading-relaxed max-w-lg">
                Discover our collection of meticulously crafted luxury charms, delivered in premium kraft packaging. 
                Each piece tells a story of elegance and sophistication.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary group">
                Explore Collection
                <ArrowRight size={20} strokeWidth={1.5} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary">
                Watch Our Story
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="font-serif text-3xl text-luxury-gold">500+</div>
                <div className="font-mono text-xs text-luxury-graphite uppercase tracking-wide">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl text-luxury-gold">100%</div>
                <div className="font-mono text-xs text-luxury-graphite uppercase tracking-wide">Handcrafted</div>
              </div>
              <div className="text-center">
                <div className="font-serif text-3xl text-luxury-gold">5★</div>
                <div className="font-mono text-xs text-luxury-graphite uppercase tracking-wide">Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Right Side - Product Showcase */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              {/* Main Product Image */}
              <div className="relative bg-pastel-sky/30 backdrop-blur-sm rounded-none shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/kappybara1.jpg"
                  alt="Luxury Charm"
                  className="w-full h-80 object-cover rounded-none"
                />
                <div className="absolute -top-4 -right-4 bg-luxury-gold text-white px-3 py-1 font-mono text-xs">
                  NEW
                </div>
              </div>

              {/* Secondary Product Images */}
              <div className="absolute -top-8 -left-8 bg-pastel-mint/40 backdrop-blur-sm rounded-none shadow-xl p-4 transform -rotate-6 opacity-80">
                <img
                  src="/chicki1.jpg"
                  alt="Charm Collection"
                  className="w-24 h-24 object-cover rounded-none"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-pastel-sage/40 backdrop-blur-sm rounded-none shadow-xl p-4 transform rotate-12 opacity-80">
                <img
                  src="/bluewhale1.jpg"
                  alt="Premium Charm"
                  className="w-20 h-20 object-cover rounded-none"
                />
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-pastel-pink/20 to-pastel-lavender/20 rounded-full transform scale-150 -z-10"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-luxury-charcoal rounded-full flex justify-center">
            <div className="w-1 h-3 bg-luxury-charcoal rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
