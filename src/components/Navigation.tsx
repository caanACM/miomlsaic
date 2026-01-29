import { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

interface NavigationProps {
  onReservationClick: () => void;
}

export default function Navigation({ onReservationClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Garden Paradiso', href: '#garden' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50/95 backdrop-blur-sm shadow-lg'
          : 'bg-gradient-to-b from-black/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center space-x-2 group"
          >
            <UtensilsCrossed
              className={`w-8 h-8 transition-colors ${
                isScrolled ? 'text-terracotta-600' : 'text-cream-50'
              }`}
            />
            <span
              className={`text-2xl font-serif font-bold transition-colors ${
                isScrolled ? 'text-olive-800' : 'text-cream-50'
              }`}
            >
              Il Mio Mosaic
            </span>
          </button>

          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`font-sans font-medium transition-colors hover:text-terracotta-500 ${
                  isScrolled ? 'text-olive-700' : 'text-cream-50'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={onReservationClick}
              className={`px-4 py-2 rounded-lg font-sans font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-terracotta-600 text-cream-50 hover:bg-terracotta-700'
                  : 'bg-cream-50/20 text-cream-50 hover:bg-cream-50/30 border border-cream-50/50'
              }`}
            >
              Reserve
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-olive-700' : 'text-cream-50'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-cream-50 border-t border-cream-200">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left font-sans font-medium text-olive-700 hover:text-terracotta-500 transition-colors py-2"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => {
                onReservationClick();
                setIsMobileMenuOpen(false);
              }}
              className="w-full mt-4 bg-terracotta-600 hover:bg-terracotta-700 text-cream-50 font-sans font-semibold py-3 rounded-lg transition-all duration-300"
            >
              Make a Reservation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
