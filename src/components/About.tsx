import { Heart, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <span className="text-terracotta-600 font-sans font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-olive-800 mt-2 mb-4">
                A Hidden Gem in Archway
              </h2>
              <div className="w-24 h-1 bg-bronze-500"></div>
            </div>

            <p className="font-sans text-lg text-olive-700 leading-relaxed">
              Since 1998, <span className="font-semibold">Signor Zucchero</span> has been
              welcoming guests to Il Mio Mosaic, creating an authentic Italian dining
              experience in the heart of Archway.
            </p>

            <p className="font-sans text-lg text-olive-700 leading-relaxed">
              Our restaurant is more than just a place to eat—it's a warm embrace of Italian
              hospitality. Every dish is crafted with passion, every wine carefully selected,
              and every guest treated like family.
            </p>

            <p className="font-sans text-lg text-olive-700 leading-relaxed">
              What makes us truly special is our commitment to creating an intimate,
              welcoming atmosphere where you can escape the hustle and bustle of city life.
              From our cozy indoor seating to our famous Garden Paradiso, every corner of Il
              Mio Mosaic tells a story.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Heart className="w-10 h-10 text-terracotta-600 mx-auto mb-2" />
                <p className="font-serif text-2xl font-bold text-olive-800">25+</p>
                <p className="font-sans text-sm text-olive-600">Years of Passion</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Award className="w-10 h-10 text-terracotta-600 mx-auto mb-2" />
                <p className="font-serif text-2xl font-bold text-olive-800">100%</p>
                <p className="font-sans text-sm text-olive-600">Authentic Italian</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <Users className="w-10 h-10 text-terracotta-600 mx-auto mb-2" />
                <p className="font-serif text-2xl font-bold text-olive-800">1000s</p>
                <p className="font-sans text-sm text-olive-600">Happy Guests</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Italian restaurant interior"
                className="w-full h-[600px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-terracotta-600 text-cream-50 p-6 rounded-lg shadow-xl max-w-xs">
              <p className="font-serif text-xl italic">
                "Where every meal feels like coming home"
              </p>
              <p className="font-sans text-sm mt-2 text-cream-200">- Signor Zucchero</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
