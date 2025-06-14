import { ArrowRight, Gift, Sparkles, Heart } from 'lucide-react';
import Image from 'next/image';

export default function SecondaryCTASection() {
  return (
    <section className="py-24 lg:py-32 bg-stone-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <div className="w-full h-full opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zM0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 text-sm border border-white/20">
              <Gift className="w-4 h-4" strokeWidth={1.5} />
              <span className="font-space-mono">Limited Collection</span>
            </div>
            
            <h2 className="font-instrument-serif text-4xl lg:text-5xl mb-6 leading-tight">
              Don't Miss Out on
              <span className="block text-amber-400">Exclusive Pieces</span>
            </h2>
            
            <p className="text-xl text-stone-300 mb-8 leading-relaxed">
              Our artisans create only limited quantities of each design. 
              Once they're gone, they're gone forever. Secure your piece 
              of handcrafted luxury today.
            </p>
            
            {/* Features list */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
                <span className="text-stone-200">Limited edition designs</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
                <span className="text-stone-200">Handcrafted with love</span>
              </div>
              <div className="flex items-center gap-3">
                <Gift className="w-5 h-5 text-amber-400" strokeWidth={1.5} />
                <span className="text-stone-200">Perfect for special occasions</span>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-amber-500 text-stone-900 px-8 py-4 rounded-full hover:bg-amber-400 transition-all duration-300 flex items-center justify-center gap-2 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span>Claim Your Piece</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </button>
              
              <button className="group border-2 border-white/30 text-white px-8 py-4 rounded-full hover:border-white/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-lg font-medium">
                <span>View Collection</span>
              </button>
            </div>
            
            {/* Urgency indicator */}
            <div className="mt-8 text-sm text-stone-400">
              <span className="inline-flex items-center gap-2">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                Only 3 pieces left in the current collection
              </span>
            </div>
          </div>
          
          {/* Right column - Visual */}
          <div className="relative">
            {/* Main collection showcase image */}
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden">
              <Image
                src="/collection-showcase.png"
                alt="Aestria limited edition collection - exclusive luxury charms"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold transform rotate-12 shadow-lg">
              Limited!
            </div>
            
            {/* Bottom floating element */}
            <div className="absolute -bottom-6 -left-6 bg-white text-stone-800 p-4 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Gift className="w-5 h-5 text-amber-600" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-sm font-semibold">Free Shipping</div>
                  <div className="text-xs text-stone-500">On all orders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-20 pt-12 border-t border-white/20">
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-stone-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Lifetime Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
