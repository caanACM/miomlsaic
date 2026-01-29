import { ArrowRight, Calendar } from 'lucide-react';

interface HeroProps {
  onReservationClick: () => void;
}

export default function Hero({ onReservationClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-cream-50 mb-6 leading-tight">
            Il Mio Mosaic
          </h1>
          <div className="w-32 h-1 bg-bronze-500 mx-auto mb-6"></div>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-bronze-300 italic mb-4">
            Authentic Italian Restaurant & Pizzeria
          </p>
          <p className="font-sans text-lg sm:text-xl text-cream-100 max-w-2xl mx-auto mb-8">
            Good Food, Good Value, Good Service
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() =>
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="group bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 px-8 py-4 rounded-lg font-sans font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Discover Our Story
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onReservationClick}
            className="group bg-cream-50/10 backdrop-blur-sm hover:bg-cream-50/20 text-cream-50 border-2 border-cream-50/50 hover:border-cream-50 px-8 py-4 rounded-lg font-sans font-semibold text-lg transition-all duration-300 flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            Make a Reservation
          </button>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-cream-100">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-bronze-400 rounded-full"></div>
            <span className="font-sans text-sm">Since 1998</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-bronze-400 rounded-full"></div>
            <span className="font-sans text-sm">Archway's Hidden Gem</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-bronze-400 rounded-full"></div>
            <span className="font-sans text-sm">Famous Garden Paradiso</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() =>
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="text-cream-50/70 hover:text-cream-50 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </button>
      </div>
    </section>
  );
}
