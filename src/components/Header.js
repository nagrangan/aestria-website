import React, { useState } from 'react';
import { User, Menu, X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-pastel-cream">
      <div className="container-custom">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link to="/" className="font-serif text-3xl text-luxury-charcoal tracking-wide">
            Aestria
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-12">
            <Link to="/" className="font-mono text-sm text-luxury-charcoal hover:text-luxury-gold transition-colors">
              Home
            </Link>
            <Link to="/collection" className="font-mono text-sm text-luxury-charcoal hover:text-luxury-gold transition-colors">
              Collection
            </Link>
            <Link to="/about" className="font-mono text-sm text-luxury-charcoal hover:text-luxury-gold transition-colors">
              About
            </Link>
            <Link to="/contact" className="font-mono text-sm text-luxury-charcoal hover:text-luxury-gold transition-colors">
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <Link to="/login" className="text-luxury-charcoal hover:text-luxury-gold transition-colors">
              <User size={20} strokeWidth={1.5} />
            </Link>
            <button className="text-luxury-charcoal hover:text-luxury-gold transition-colors">
              <ShoppingBag size={20} strokeWidth={1.5} />
            </button>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-luxury-charcoal"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-pastel-cream">
            <nav className="py-6 space-y-4">
              <Link
                to="/"
                className="block font-mono text-sm text-luxury-charcoal hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/collection"
                className="block font-mono text-sm text-luxury-charcoal hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Collection
              </Link>
              <Link
                to="/about"
                className="block font-mono text-sm text-luxury-charcoal hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block font-mono text-sm text-luxury-charcoal hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
