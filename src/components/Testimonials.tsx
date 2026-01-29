import { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    text: 'The Garden Paradiso is absolutely magical! It feels like dining in a secret Italian courtyard. The food is exceptional and the atmosphere is unbeatable.',
    rating: 5,
    location: 'Highgate',
  },
  {
    name: 'James Thompson',
    text: 'A true hidden gem in Archway. The exposed brick walls and warm lighting create such a cozy atmosphere. Best pizza in North London, hands down!',
    rating: 5,
    location: 'Crouch End',
  },
  {
    name: 'Maria Rodriguez',
    text: "Signor Zucchero has created something special here. It's like being transported to Italy. The pasta is homemade and absolutely divine.",
    rating: 5,
    location: 'Islington',
  },
  {
    name: 'David Chen',
    text: 'An escape from the hustle and bustle of city life. The garden is beautiful, the service is warm, and every dish is prepared with love.',
    rating: 5,
    location: 'Camden',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-olive-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-cream-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-terracotta-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-bronze-300 font-sans font-semibold text-sm uppercase tracking-wider">
            What Our Guests Say
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-50 mt-2 mb-4">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-bronze-400 mx-auto"></div>
        </div>

        <div className="relative min-h-[300px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ${
                index === currentIndex
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-4 pointer-events-none'
              }`}
            >
              <div className="bg-cream-50 rounded-2xl p-8 md:p-12 shadow-2xl relative">
                <Quote className="w-16 h-16 text-terracotta-200 absolute top-6 left-6 opacity-50" />
                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-bronze-500 text-bronze-500"
                      />
                    ))}
                  </div>
                  <p className="font-serif text-xl md:text-2xl text-olive-800 text-center mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="text-center">
                    <p className="font-sans font-bold text-olive-800">
                      {testimonial.name}
                    </p>
                    <p className="font-sans text-sm text-olive-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-bronze-400 w-8'
                  : 'bg-cream-300 hover:bg-cream-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
