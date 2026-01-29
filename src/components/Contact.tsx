import { MapPin, Phone, Clock, Instagram, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-terracotta-600 font-sans font-semibold text-sm uppercase tracking-wider">
            Visit Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-olive-800 mt-2 mb-4">
            Find Your Way to Paradiso
          </h2>
          <div className="w-24 h-1 bg-bronze-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-terracotta-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-terracotta-600" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-olive-800 mb-2">
                    Address
                  </h3>
                  <p className="font-sans text-olive-600">24 Junction Road</p>
                  <p className="font-sans text-olive-600">London, N19 5RE</p>
                  <a
                    href="https://maps.google.com/?q=24+Junction+Road,+London,+N19+5RE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terracotta-600 hover:text-terracotta-700 font-sans font-medium text-sm mt-2 inline-block"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-olive-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-olive-600" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-olive-800 mb-2">Phone</h3>
                  <a
                    href="tel:02072723509"
                    className="font-sans text-lg text-olive-600 hover:text-terracotta-600 transition-colors"
                  >
                    020 7272 3509
                  </a>
                  <p className="font-sans text-sm text-olive-500 mt-1">
                    Call for reservations
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-bronze-100 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-bronze-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-olive-800 mb-3">
                    Opening Hours
                  </h3>
                  <div className="space-y-2 font-sans text-olive-600">
                    <div className="flex justify-between">
                      <span>Monday</span>
                      <span className="text-terracotta-600 font-medium">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tuesday - Saturday</span>
                      <span className="font-medium">12:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">12:00 - 21:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-terracotta-600 to-terracotta-700 p-6 rounded-lg shadow-md text-center">
              <h3 className="font-serif text-2xl font-bold text-cream-50 mb-3">
                Follow Us
              </h3>
              <div className="flex justify-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cream-50/20 hover:bg-cream-50/30 p-3 rounded-full transition-colors"
                >
                  <Instagram className="w-6 h-6 text-cream-50" />
                </a>
                <a
                  href="mailto:info@ilmiomosaic.co.uk"
                  className="bg-cream-50/20 hover:bg-cream-50/30 p-3 rounded-full transition-colors"
                >
                  <Mail className="w-6 h-6 text-cream-50" />
                </a>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/place/24+Junction+Road,+London+N19+5RE"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              width: '100%',
              height: '100%',
              minHeight: '400px',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=51.564720,-0.137707&zoom=16&size=800x400&scale=2&markers=color:red%7C51.564720,-0.137707"
              alt="Map to Il Mio Mosaic"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
