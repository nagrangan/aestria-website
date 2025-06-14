import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    review: "The craftsmanship is absolutely exquisite. The charm arrived in the most beautiful packaging I've ever seen. It's clear that every detail has been thoughtfully considered.",
    product: "Golden Lotus Charm"
  },
  {
    name: "Ananya Gupta",
    location: "Delhi",
    rating: 5,
    review: "I've never experienced such luxury in online shopping. The quality exceeds all expectations, and the personal touch in packaging made it feel like a gift from a dear friend.",
    product: "Moonstone Pendant"
  },
  {
    name: "Kavya Patel",
    location: "Bangalore",
    rating: 5,
    review: "Aestria has redefined what I expect from jewelry. The attention to detail, the premium materials, and the unboxing experience – everything is simply perfect.",
    product: "Rose Gold Bracelet Charm"
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-stone-300'}`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
};

export default function ReviewsSection() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 text-sm text-stone-600 border border-stone-200 shadow-sm">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" strokeWidth={1.5} />
            <span className="font-space-mono">Customer Stories</span>
          </div>
          
          <h2 className="font-instrument-serif text-4xl lg:text-5xl text-stone-800 mb-6">
            Loved by
            <span className="block text-amber-600">Connoisseurs</span>
          </h2>
          
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Hear from our customers who have experienced 
            the Aestria difference and discovered what true luxury feels like.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-stone-200 relative group hover:shadow-xl transition-shadow duration-300">
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-amber-600" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Rating */}
              <div className="mb-6 pt-4">
                <StarRating rating={review.rating} />
              </div>
              
              {/* Review text */}
              <blockquote className="text-stone-700 leading-relaxed mb-6 text-lg">
                "{review.review}"
              </blockquote>
              
              {/* Product */}
              <div className="text-sm text-amber-600 font-space-mono mb-4 bg-amber-50 px-3 py-1 rounded-full inline-block">
                {review.product}
              </div>
              
              {/* Reviewer info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-stone-200 to-stone-300 rounded-full flex items-center justify-center">
                  <span className="text-stone-600 font-semibold text-sm">
                    {review.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-stone-800">{review.name}</div>
                  <div className="text-sm text-stone-500">{review.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof stats */}
        <div className="mt-20 bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-stone-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-instrument-serif text-3xl lg:text-4xl text-stone-800 mb-2">5,000+</div>
              <div className="text-stone-600 text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="font-instrument-serif text-3xl lg:text-4xl text-stone-800 mb-2">4.9</div>
              <div className="text-stone-600 text-sm">Average Rating</div>
            </div>
            <div>
              <div className="font-instrument-serif text-3xl lg:text-4xl text-stone-800 mb-2">98%</div>
              <div className="text-stone-600 text-sm">Would Recommend</div>
            </div>
            <div>
              <div className="font-instrument-serif text-3xl lg:text-4xl text-stone-800 mb-2">50+</div>
              <div className="text-stone-600 text-sm">Unique Designs</div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-stone-600 mb-6">Join thousands of satisfied customers</p>
          <button className="bg-stone-800 text-white px-8 py-4 rounded-full hover:bg-stone-700 transition-colors duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Read More Reviews
          </button>
        </div>
      </div>
    </section>
  );
}
