import { Leaf, Sun, Wind, Sparkles } from 'lucide-react';

interface GardenParadisoProps {
  onReservationClick: () => void;
}

export default function GardenParadiso({ onReservationClick }: GardenParadisoProps) {
  return (
    <section id="garden" className="py-20 bg-olive-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-olive-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cream-300/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-terracotta-600 font-sans font-semibold text-sm uppercase tracking-wider">
            Our Pride & Joy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-olive-800 mt-2 mb-4">
            Garden Paradiso
          </h2>
          <div className="w-24 h-1 bg-bronze-500 mx-auto mb-6"></div>
          <p className="font-sans text-xl text-olive-700 max-w-3xl mx-auto leading-relaxed">
            An oasis of tranquility in the heart of London. Our tropical garden paradise
            offers an unforgettable al-fresco dining experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative rounded-lg overflow-hidden shadow-2xl group h-[400px]">
            <img
              src="https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Tropical garden dining"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-olive-900/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-cream-50">
              <h3 className="font-serif text-2xl font-bold mb-2">Palm Trees & Bamboo</h3>
              <p className="font-sans text-sm text-cream-200">
                Surrounded by lush tropical greenery
              </p>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden shadow-2xl group h-[400px]">
            <img
              src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Outdoor dining atmosphere"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-olive-900/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-cream-50">
              <h3 className="font-serif text-2xl font-bold mb-2">Al Fresco Dining</h3>
              <p className="font-sans text-sm text-cream-200">
                Perfect for warm summer evenings
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="bg-olive-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Leaf className="w-7 h-7 text-olive-600" />
            </div>
            <h3 className="font-serif text-xl font-bold text-olive-800 mb-2">
              Tropical Oasis
            </h3>
            <p className="font-sans text-olive-600">
              Escape to our lush garden surrounded by palm trees, bamboo, and tropical
              plants
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="bg-bronze-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Sun className="w-7 h-7 text-bronze-600" />
            </div>
            <h3 className="font-serif text-xl font-bold text-olive-800 mb-2">
              Perfect Weather
            </h3>
            <p className="font-sans text-olive-600">
              Enjoy your meal under the sun or stars in our beautifully lit garden space
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="bg-terracotta-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Wind className="w-7 h-7 text-terracotta-600" />
            </div>
            <h3 className="font-serif text-xl font-bold text-olive-800 mb-2">
              Fresh Air
            </h3>
            <p className="font-sans text-olive-600">
              Breathe in the fresh air while savoring authentic Italian flavors
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="bg-cream-200 w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 text-bronze-700" />
            </div>
            <h3 className="font-serif text-xl font-bold text-olive-800 mb-2">
              Magical Ambiance
            </h3>
            <p className="font-sans text-olive-600">
              An enchanting atmosphere that transports you straight to the Italian coast
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-terracotta-600 to-terracotta-700 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-cream-50 mb-4">
            Experience the Garden
          </h3>
          <p className="font-sans text-lg text-cream-100 mb-6 max-w-2xl mx-auto">
            Book your table in the Garden Paradiso and discover why our guests call it "an
            escape from the hustle and bustle of city life"
          </p>
          <button
            onClick={onReservationClick}
            className="inline-block bg-cream-50 hover:bg-white text-terracotta-700 font-sans font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Reserve Your Garden Table
          </button>
        </div>
      </div>
    </section>
  );
}
