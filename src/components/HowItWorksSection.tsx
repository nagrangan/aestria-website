import { Package, Sparkles, Heart, Gift } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    icon: Sparkles,
    title: "Discover",
    description: "Browse our curated collection of handcrafted charms, each piece thoughtfully designed for the discerning individual."
  },
  {
    icon: Heart,
    title: "Choose",
    description: "Select the perfect charm that resonates with your style and story. Every piece is crafted with premium materials."
  },
  {
    icon: Package,
    title: "Craft",
    description: "Your chosen charm is meticulously handcrafted by our skilled artisans using traditional techniques and premium materials."
  },
  {
    icon: Gift,
    title: "Deliver",
    description: "Receive your exquisite charm in our signature luxury kraft packaging, designed to create an unforgettable unboxing experience."
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 lg:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 mb-6 text-sm text-stone-600 border border-stone-200 shadow-sm">
            <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
            <span className="font-space-mono">The Aestria Experience</span>
          </div>
          
          <h2 className="font-instrument-serif text-4xl lg:text-5xl text-stone-800 mb-6">
            Crafted with
            <span className="block text-amber-600">Intention</span>
          </h2>
          
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            From conception to your doorstep, every step in our process is designed 
            to deliver not just a product, but an experience that celebrates artistry and luxury.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                {/* Step number and icon */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto bg-white rounded-full shadow-lg border border-stone-200 flex items-center justify-center group-hover:shadow-xl transition-shadow duration-300">
                    <IconComponent className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-stone-800 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  
                  {/* Connecting line (hidden on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-stone-300 to-transparent"></div>
                  )}
                </div>
                
                {/* Content */}
                <h3 className="font-instrument-serif text-2xl text-stone-800 mb-4">
                  {step.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom section with what you get */}
        <div className="mt-24 bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-stone-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-instrument-serif text-3xl text-stone-800 mb-6">
                What You Get
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">Premium Materials</h4>
                    <p className="text-stone-600 text-sm">High-quality metals and gemstones sourced ethically</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">Handcrafted Excellence</h4>
                    <p className="text-stone-600 text-sm">Each piece individually crafted by skilled artisans</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">Luxury Packaging</h4>
                    <p className="text-stone-600 text-sm">Beautiful kraft packaging designed for gifting</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-1">Lifetime Warranty</h4>
                    <p className="text-stone-600 text-sm">Complete peace of mind with our craftsmanship guarantee</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Luxury packaging image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/luxury-packaging.png"
                  alt="Aestria luxury kraft packaging - beautiful unboxing experience"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
