import { Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Collections', href: '#' },
    { name: 'Charms', href: '#' },
    { name: 'Bracelets', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-stone-600 hover:text-stone-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={1.5} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            )}
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-instrument-serif text-2xl lg:text-3xl text-stone-800">
              Aestria
            </h1>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-600 hover:text-stone-800 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-md text-stone-600 hover:text-stone-800 transition-colors">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="p-2 rounded-md text-stone-600 hover:text-stone-800 transition-colors">
              <User className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button className="p-2 rounded-md text-stone-600 hover:text-stone-800 transition-colors relative">
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 text-white text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-stone-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-2 py-3 text-stone-600 hover:text-stone-800 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
