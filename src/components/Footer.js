import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-luxury-pearl border-t border-pastel-mint/30">
      {/* Main Footer Content */}
      <div className="container-custom py-20">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="font-serif text-4xl text-luxury-charcoal tracking-wide">
              Aestria
            </Link>
            <p className="font-mono text-sm text-luxury-graphite leading-relaxed max-w-md">
              India's premier destination for handcrafted luxury charms. We believe every piece 
              should tell a story, inspire confidence, and celebrate the art of fine craftsmanship.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} strokeWidth={1.5} className="text-luxury-gold" />
                <span className="font-mono text-sm text-luxury-graphite">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} strokeWidth={1.5} className="text-luxury-gold" />
                <span className="font-mono text-sm text-luxury-graphite">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} strokeWidth={1.5} className="text-luxury-gold" />
                <span className="font-mono text-sm text-luxury-graphite">hello@aestria.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-luxury-charcoal">Explore</h3>
            <nav className="space-y-3">
              <Link to="/collection" className="block font-mono text-sm text-luxury-graphite hover:text-luxury-gold transition-colors">
                Our Collection
              </Link>
              <Link to="/about" className="block font-mono text-sm text-luxury-graphite hover:text-luxury-gold transition-colors">
                About Aestria
              </Link>
              <Link to="/craftsmanship" className="block font-mono text-sm text-luxury-graphite hover:text-luxury-gold transition-colors">
                Craftsmanship
              </Link>
              <Link to="/sustainability" className="block font-mono text-sm text-luxury-graphite hover:text-luxury-gold transition-colors">
                Sustainability
              </Link>
              <Link to="/care-guide" className="block font-mono text-sm text-luxury-graphite hover:text-luxury-gold transition-colors">
                Care Guide
              </Link>
            </nav>
          </div>

          {/* Customer Care */}
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-luxury-charcoal">Support</h3>
            <nav className="space-y-3">
              <Link to="/contact" className="block font-mono text-sm text-luxury-graphite hover:text-luxury-gold transition-colors">
                Contact Us
              </Link>
              <Link to="/shipping" className="block font-mono text-sm text-luxury-graphite hover:text-luxury-gold transition-colors">
                Shipping Info
              </Link>
              <Link to="/returns" className="block font-mono text-sm text-luxury-graphite hover:text-luxury-gold transition-colors">
                Returns & Exchanges
              </Link>
              <Link to="/size-guide" className="block font-mono text-sm text-luxury-graphite hover:text-luxury-gold transition-colors">
                Size Guide
              </Link>
              <Link to="/faq" className="block font-mono text-sm text-luxury-graphite hover:text-luxury-gold transition-colors">
                FAQ
              </Link>
            </nav>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-16 border-t border-pastel-mint/30">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-luxury-charcoal">
                Join Our Exclusive Circle
              </h3>
              <p className="font-mono text-sm text-luxury-graphite">
                Be the first to discover new collections, receive styling inspiration, 
                and enjoy member-only benefits.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-pastel-mint focus:border-luxury-gold focus:outline-none font-mono text-sm rounded-none bg-white"
              />
              <button className="btn-primary group whitespace-nowrap">
                Subscribe
                <ArrowRight size={16} strokeWidth={1.5} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-luxury-charcoal">
        <div className="container-custom py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="font-mono text-xs text-white/70">
                © 2025 Aestria. All rights reserved. Handcrafted with love in India.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a 
                href="https://instagram.com/aestria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-luxury-gold transition-colors"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a 
                href="https://facebook.com/aestria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-luxury-gold transition-colors"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a 
                href="https://twitter.com/aestria" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-luxury-gold transition-colors"
              >
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="font-mono text-xs text-white/70 hover:text-luxury-gold transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="font-mono text-xs text-white/70 hover:text-luxury-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
