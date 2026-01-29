import { useState } from 'react';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Wood-Fired Pizza',
    description: 'Authentic Italian pizza with fresh ingredients',
  },
  {
    url: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Fresh Pasta',
    description: 'Handmade pasta dishes',
  },
  {
    url: 'https://images.pexels.com/photos/5490965/pexels-photo-5490965.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Exposed Brick Interior',
    description: 'Rustic charm with exposed brickwork',
  },
  {
    url: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Cozy Atmosphere',
    description: 'Warm lighting and wooden accents',
  },
  {
    url: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Italian Wine Selection',
    description: 'Carefully curated wine collection',
  },
  {
    url: 'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Antipasti Platter',
    description: 'Traditional Italian starters',
  },
];

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-cream-100 to-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-terracotta-600 font-sans font-semibold text-sm uppercase tracking-wider">
            Visual Journey
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-olive-800 mt-2 mb-4">
            Decor & Culinary Highlights
          </h2>
          <div className="w-24 h-1 bg-bronze-500 mx-auto mb-6"></div>
          <p className="font-sans text-lg text-olive-700 max-w-3xl mx-auto">
            From our rustic exposed brickwork and wooden columns to granite and oak flooring,
            every detail creates an authentic Italian atmosphere
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer aspect-square"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                  <h3 className="font-serif text-2xl font-bold text-cream-50 mb-2">
                    {image.title}
                  </h3>
                  <p className="font-sans text-sm text-cream-200">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="text-center p-6">
            <div className="font-serif text-3xl font-bold text-terracotta-600 mb-2">
              Exposed Brick
            </div>
            <p className="font-sans text-olive-600">Authentic rustic walls</p>
          </div>
          <div className="text-center p-6">
            <div className="font-serif text-3xl font-bold text-terracotta-600 mb-2">
              Oak Flooring
            </div>
            <p className="font-sans text-olive-600">Warm natural materials</p>
          </div>
          <div className="text-center p-6">
            <div className="font-serif text-3xl font-bold text-terracotta-600 mb-2">
              Scenic Murals
            </div>
            <p className="font-sans text-olive-600">Italian countryside views</p>
          </div>
          <div className="text-center p-6">
            <div className="font-serif text-3xl font-bold text-terracotta-600 mb-2">
              Soft Lighting
            </div>
            <p className="font-sans text-olive-600">Intimate atmosphere</p>
          </div>
        </div>
      </div>
    </section>
  );
}
