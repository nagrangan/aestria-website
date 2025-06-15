import React from 'react';
import { ArrowRight, Gift, Sparkles } from 'lucide-react';

const SecondCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-luxury-charcoal to-luxury-graphite relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-16 h-16 border border-white rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-40 h-40 border border-white rounded-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-luxury-gold/20 px-4 py-2 rounded-full">
              <Gift size={16} strokeWidth={1.5} className="text-luxury-gold" />
              <span className="font-mono text-xs text-luxury-gold tracking-wide uppercase">Limited Time Offer</span>
            </div>

            <h2 className="font-serif text-4xl lg:text-6xl text-white leading-tight">
              Discover Your 
              <span className="block text-luxury-gold">Perfect Charm</span>
            </h2>

            <p className="font-mono text-lg text-white/80 leading-relaxed">
              Join our exclusive community and be the first to discover new collections, 
              receive styling tips, and enjoy member-only benefits designed for true connoisseurs of luxury.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span className="font-mono text-sm text-white/90">Free express delivery on all orders</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span className="font-mono text-sm text-white/90">Exclusive access to limited collections</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span className="font-mono text-sm text-white/90">Personal styling consultation included</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span className="font-mono text-sm text-white/90">Lifetime craftsmanship guarantee</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-luxury-gold hover:bg-yellow-600 text-luxury-charcoal font-mono font-bold py-4 px-8 rounded-none transition-all duration-300 transform hover:scale-105 shadow-lg group">
                Shop Collection Now
                <ArrowRight size={20} strokeWidth={1.5} className="ml-2 inline group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-luxury-charcoal font-mono font-bold py-4 px-8 rounded-none transition-all duration-300">
                Book Consultation
              </button>
            </div>
          </div>

          {/* Right Side - Featured Products */}
          <div className="relative animate-slide-up">
            <div className="grid grid-cols-2 gap-6">
              {/* Featured Product 1 */}
              <div className="bg-pastel-mint/40 backdrop-blur-sm p-6 shadow-2xl rounded-none transform hover:-translate-y-2 transition-transform duration-300">
                <img
                  src="/kappybara1.jpg"
                  alt="Featured Charm"
                  className="w-full h-40 object-cover rounded-none mb-4"
                />
                <h3 className="font-serif text-lg text-luxury-charcoal mb-2">Enchanted Collection</h3>
                <p className="font-mono text-xs text-luxury-graphite mb-3">Premium Handcrafted Charm</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-luxury-gold">₹2,999</span>
                  <Sparkles size={16} strokeWidth={1.5} className="text-luxury-gold" />
                </div>
              </div>

              {/* Featured Product 2 */}
              <div className="bg-pastel-sky/40 backdrop-blur-sm p-6 shadow-2xl rounded-none transform hover:-translate-y-2 transition-transform duration-300 mt-8">
                <img
                  src="/chicki1.jpg"
                  alt="Featured Charm"
                  className="w-full h-40 object-cover rounded-none mb-4"
                />
                <h3 className="font-serif text-lg text-luxury-charcoal mb-2">Mystic Series</h3>
                <p className="font-mono text-xs text-luxury-graphite mb-3">Limited Edition Design</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-luxury-gold">₹3,499</span>
                  <Sparkles size={16} strokeWidth={1.5} className="text-luxury-gold" />
                </div>
              </div>

              {/* Featured Product 3 */}
              <div className="bg-pastel-sage/40 backdrop-blur-sm p-6 shadow-2xl rounded-none transform hover:-translate-y-2 transition-transform duration-300 -mt-4">
                <img
                  src="/dyno1.jpg"
                  alt="Featured Charm"
                  className="w-full h-40 object-cover rounded-none mb-4"
                />
                <h3 className="font-serif text-lg text-luxury-charcoal mb-2">Royal Heritage</h3>
                <p className="font-mono text-xs text-luxury-graphite mb-3">Artisan Masterpiece</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-luxury-gold">₹4,299</span>
                  <Sparkles size={16} strokeWidth={1.5} className="text-luxury-gold" />
                </div>
              </div>

              {/* Featured Product 4 */}
              <div className="bg-pastel-mint/40 backdrop-blur-sm p-6 shadow-2xl rounded-none transform hover:-translate-y-2 transition-transform duration-300 mt-4">
                <img
                  src="/spike1.jpg"
                  alt="Featured Charm"
                  className="w-full h-40 object-cover rounded-none mb-4"
                />
                <h3 className="font-serif text-lg text-luxury-charcoal mb-2">Celestial Dreams</h3>
                <p className="font-mono text-xs text-luxury-graphite mb-3">Signature Collection</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-luxury-gold">₹3,799</span>
                  <Sparkles size={16} strokeWidth={1.5} className="text-luxury-gold" />
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-luxury-gold text-luxury-charcoal px-4 py-2 rounded-full shadow-lg animate-pulse">
              <span className="font-mono text-xs font-bold">BESTSELLERS</span>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-24 text-center">            <div className="bg-pastel-sky/20 backdrop-blur-sm border border-pastel-mint/30 rounded-none p-8 lg:p-12 max-w-2xl mx-auto">
            <h3 className="font-serif text-2xl lg:text-3xl text-white mb-4">
              Stay Updated with Luxury
            </h3>
            <p className="font-mono text-sm text-white/80 mb-6">
              Subscribe to receive exclusive offers, styling tips, and early access to new collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/90 border border-white/30 focus:border-luxury-gold focus:outline-none font-mono text-sm rounded-none"
              />
              <button className="bg-luxury-gold hover:bg-yellow-600 text-luxury-charcoal font-mono font-bold py-3 px-6 rounded-none transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondCTA;
