import React from 'react';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "The quality is absolutely exceptional. The charm arrived in the most beautiful packaging I've ever seen. It's clear that Aestria pays attention to every single detail.",
      image: "/images/kappybara1.jpg",
      verified: true
    },
    {
      name: "Arjun Patel",
      location: "Bangalore",
      rating: 5,
      text: "Bought this as a gift for my wife and she was completely blown away. The craftsmanship is outstanding and the presentation is luxury at its finest.",
      image: "/images/chicki1.jpg",
      verified: true
    },
    {
      name: "Meera Gupta",
      location: "Delhi",
      rating: 5,
      text: "I've collected luxury items for years, but nothing compares to the elegance and sophistication of Aestria charms. Absolutely worth every rupee.",
      image: "/images/dyno1.jpg",
      verified: true
    },
    {
      name: "Rahul Krishnan",
      location: "Chennai",
      rating: 5,
      text: "The unboxing experience alone is worth it. The kraft packaging feels so premium and sustainable. The charm itself exceeded all my expectations.",
      image: "/images/spike1.jpg",
      verified: true
    },
    {
      name: "Ananya Roy",
      location: "Kolkata",
      rating: 5,
      text: "Fast delivery, impeccable quality, and customer service that truly cares. Aestria has set a new standard for luxury e-commerce in India.",
      image: "/images/bluewhale1.jpg",
      verified: true
    },
    {
      name: "Vikram Singh",
      location: "Pune",
      rating: 5,
      text: "These charms are conversation starters. Everyone asks where I got mine from. The attention to detail in both product and packaging is remarkable.",
      image: "/images/IMG_3026.jpg",
      verified: true
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-pastel-cream to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-pastel-butter/50 px-6 py-2 rounded-full mb-6">
            <Star size={16} strokeWidth={1.5} className="text-luxury-gold fill-current" />
            <span className="font-mono text-xs text-luxury-charcoal tracking-wide uppercase">Customer Love</span>
          </div>
          <h2 className="font-serif text-4xl lg:text-6xl text-luxury-charcoal mb-6">
            What Our Customers Say
          </h2>
          <p className="font-mono text-lg text-luxury-graphite max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our community of luxury enthusiasts 
            has to say about their Aestria experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 shadow-xl border border-pastel-mint/30 rounded-none hover:shadow-2xl transition-shadow duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote size={32} strokeWidth={1.5} className="text-luxury-gold opacity-50" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    strokeWidth={1.5} 
                    className="text-luxury-gold fill-current" 
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="font-mono text-sm text-luxury-graphite leading-relaxed mb-6">
                "{review.text}"
              </p>

              {/* Product Image */}
              <div className="mb-6 overflow-hidden rounded-none">
                <img
                  src={review.image}
                  alt="Customer product"
                  className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Customer Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-sm font-bold text-luxury-charcoal">
                    {review.name}
                  </div>
                  <div className="font-mono text-xs text-luxury-graphite">
                    {review.location}
                  </div>
                </div>
                {review.verified && (
                  <div className="bg-pastel-sage/30 px-2 py-1 rounded-full">
                    <span className="font-mono text-xs text-luxury-charcoal">✓ Verified</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white/90 backdrop-blur-sm p-12 lg:p-16 shadow-2xl border border-pastel-mint/30 rounded-none">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="font-serif text-4xl lg:text-5xl text-luxury-gold">4.9</div>
              <div className="font-mono text-xs text-luxury-graphite uppercase tracking-wide">Average Rating</div>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} strokeWidth={1.5} className="text-luxury-gold fill-current" />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-serif text-4xl lg:text-5xl text-luxury-gold">2.5k+</div>
              <div className="font-mono text-xs text-luxury-graphite uppercase tracking-wide">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="font-serif text-4xl lg:text-5xl text-luxury-gold">98%</div>
              <div className="font-mono text-xs text-luxury-graphite uppercase tracking-wide">Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="font-serif text-4xl lg:text-5xl text-luxury-gold">24h</div>
              <div className="font-mono text-xs text-luxury-graphite uppercase tracking-wide">Avg. Delivery</div>
            </div>
          </div>
        </div>

        {/* Testimonial Highlight */}
        <div className="mt-16 text-center animate-fade-in">
          <blockquote className="font-serif text-2xl lg:text-3xl text-luxury-charcoal italic max-w-4xl mx-auto leading-relaxed">
            "Aestria doesn't just sell charms – they create experiences. 
            Every interaction feels personal, every product feels special."
          </blockquote>
          <div className="mt-6">
            <div className="font-mono text-sm text-luxury-gold">— Featured in Vogue India</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
