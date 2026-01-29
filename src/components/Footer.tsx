import { UtensilsCrossed, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-olive-900 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <UtensilsCrossed className="w-8 h-8 text-bronze-400" />
              <span className="font-serif text-2xl font-bold text-cream-50">
                Il Mio Mosaic
              </span>
            </div>
            <p className="font-sans text-cream-200 mb-4 max-w-md">
              Since 1998, bringing authentic Italian cuisine and warm hospitality to Archway.
              Experience our famous Garden Paradiso and taste the difference that passion
              makes.
            </p>
            <p className="font-sans text-sm text-bronze-300 italic">
              "Good Food, Good Value, Good Service"
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-cream-50 mb-4">Quick Links</h3>
            <ul className="space-y-2 font-sans">
              <li>
                <button
                  onClick={() => scrollToSection('#home')}
                  className="text-cream-200 hover:text-bronze-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="text-cream-200 hover:text-bronze-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#garden')}
                  className="text-cream-200 hover:text-bronze-400 transition-colors"
                >
                  Garden Paradiso
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#gallery')}
                  className="text-cream-200 hover:text-bronze-400 transition-colors"
                >
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold text-cream-50 mb-4">Contact Info</h3>
            <ul className="space-y-2 font-sans text-cream-200">
              <li>24 Junction Road</li>
              <li>London, N19 5RE</li>
              <li>
                <a
                  href="tel:02072723509"
                  className="hover:text-bronze-400 transition-colors"
                >
                  020 7272 3509
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ilmiomosaic.co.uk"
                  className="hover:text-bronze-400 transition-colors"
                >
                  info@ilmiomosaic.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream-700/30 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-sm text-cream-300">
            © {currentYear} Il Mio Mosaic. All rights reserved.
          </p>
          <p className="font-sans text-sm text-cream-300 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-terracotta-400 fill-terracotta-400" /> in
            London
          </p>
        </div>
      </div>
    </footer>
  );
}
