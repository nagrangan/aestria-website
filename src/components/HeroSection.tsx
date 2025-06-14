import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4c5b9' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 mb-8 text-sm text-amber-800 border border-amber-200">
              <Sparkles className="w-4 h-4" strokeWidth={1.5} />
              <span className="font-space-mono">Handcrafted Excellence</span>
            </div>
            
            <h1 className="font-instrument-serif text-5xl sm:text-6xl lg:text-7xl text-stone-800 mb-6 leading-[0.9]">
              Exquisite
              <span className="block text-amber-600">Charms</span>
              <span className="block">for the</span>
              <span className="block italic">Refined</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-stone-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Discover our curated collection of premium handcrafted charms, each piece 
              meticulously designed and delivered in luxurious kraft packaging. Experience 
              the perfect blend of artistry and elegance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-stone-800 text-white px-8 py-4 rounded-full hover:bg-stone-700 transition-all duration-300 flex items-center justify-center gap-2 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>Shop Collection</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </button>
              
              <button className="group border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-full hover:border-stone-400 hover:bg-stone-50 transition-all duration-300 flex items-center justify-center gap-2 text-lg font-medium">
                <span>View Craftsmanship</span>
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center lg:justify-start gap-8 mt-12 text-sm text-stone-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Premium Materials</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Handcrafted Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Luxury Packaging</span>
              </div>
            </div>
          </div>
          
          {/* Right column - Hero image */}
          <div className="relative">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              {/* Placeholder for main product image */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center">
                <div className="text-center text-stone-600">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/60 rounded-full flex items-center justify-center">
                    <Sparkles className="w-12 h-12" strokeWidth={1.5} />
                  </div>
                  <p className="text-sm font-space-mono">Hero Product Image</p>
                  <p className="text-xs mt-1 opacity-70">Replace with actual charm photography</p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center border border-stone-200">
              <div className="text-center">
                <div className="text-xs text-stone-500 font-space-mono">Premium</div>
                <div className="text-sm font-semibold text-stone-700">Quality</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-32 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-stone-200">
              <div className="text-center">
                <div className="text-xs text-stone-500 font-space-mono">Luxury</div>
                <div className="text-sm font-semibold text-stone-700">Packaging</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-stone-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-stone-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
