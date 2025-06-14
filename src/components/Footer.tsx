import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const footerSections = {
  shop: {
    title: "Shop",
    links: [
      { name: "New Arrivals", href: "#" },
      { name: "Charms", href: "#" },
      { name: "Bracelets", href: "#" },
      { name: "Necklaces", href: "#" },
      { name: "Gift Sets", href: "#" },
      { name: "Limited Edition", href: "#" }
    ]
  },
  about: {
    title: "About",
    links: [
      { name: "Our Story", href: "#" },
      { name: "Craftsmanship", href: "#" },
      { name: "Materials", href: "#" },
      { name: "Sustainability", href: "#" },
      { name: "Reviews", href: "#" }
    ]
  },
  support: {
    title: "Support",
    links: [
      { name: "Contact Us", href: "#" },
      { name: "Size Guide", href: "#" },
      { name: "Care Instructions", href: "#" },
      { name: "Shipping & Returns", href: "#" },
      { name: "Warranty", href: "#" },
      { name: "FAQ", href: "#" }
    ]
  }
};

export default function Footer() {
  return (
    <footer className="bg-stone-50 text-stone-700">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="font-instrument-serif text-3xl text-stone-800 mb-4">Aestria</h3>
              <p className="text-stone-600 leading-relaxed max-w-md">
                Handcrafted luxury charms and jewelry that tell your story. 
                Each piece is thoughtfully designed and meticulously crafted 
                for the discerning individual who appreciates true artistry.
              </p>
            </div>
            
            {/* Contact info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-amber-600" strokeWidth={1.5} />
                <span>hello@aestria.in</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-amber-600" strokeWidth={1.5} />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-amber-600" strokeWidth={1.5} />
                <span>Mumbai, India</span>
              </div>
            </div>
            
            {/* Social links */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-stone-200 hover:border-amber-300 hover:bg-amber-50 transition-colors">
                <Instagram className="w-5 h-5 text-stone-600" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-stone-200 hover:border-amber-300 hover:bg-amber-50 transition-colors">
                <Facebook className="w-5 h-5 text-stone-600" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-stone-200 hover:border-amber-300 hover:bg-amber-50 transition-colors">
                <Twitter className="w-5 h-5 text-stone-600" strokeWidth={1.5} />
              </a>
            </div>
          </div>
          
          {/* Links columns */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3">
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key}>
                <h4 className="font-semibold text-stone-800 mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="text-sm text-stone-600 hover:text-amber-600 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Newsletter section */}
      <div className="border-t border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h4 className="font-instrument-serif text-2xl text-stone-800 mb-2">
              Stay Connected
            </h4>
            <p className="text-stone-600">
              Be the first to know about new collections and exclusive offers
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-stone-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="bg-stone-800 text-white px-6 py-3 rounded-full hover:bg-stone-700 transition-colors font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-stone-500 mt-2 text-center">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-stone-200 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-600">
            <div className="flex items-center gap-2">
              <span>© 2025 Aestria. Made with</span>
              <Heart className="w-4 h-4 fill-red-500 text-red-500" strokeWidth={1.5} />
              <span>in India</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-amber-600 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-600 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-600 transition-colors">Shipping Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
