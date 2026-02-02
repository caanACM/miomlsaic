import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function InteractiveMap() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    map.current = L.map(mapContainer.current).setView([51.5647235, -0.135527], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
      maxZoom: 19,
    }).addTo(map.current);

    const customIcon = L.divIcon({
      html: `
        <div class="flex items-center justify-center w-10 h-10 bg-red-600 rounded-full border-2 border-white shadow-lg transform -translate-y-1/2">
          <span class="text-white font-bold text-lg">M</span>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
      className: 'custom-div-icon',
    });

    L.marker([51.5647235, -0.135527], { icon: customIcon })
      .addTo(map.current)
      .bindPopup(
        `<div class="font-sans">
          <h4 class="font-bold text-olive-800">Mosaic Restaurant</h4>
          <p class="text-sm text-olive-600">24 Junction Road</p>
          <p class="text-sm text-olive-600">London, N19 5RE</p>
          <p class="text-sm font-medium text-terracotta-600 mt-2">020 7272 3509</p>
        </div>`
      )
      .openPopup();

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full rounded-lg shadow-lg"
      style={{ height: '450px', minHeight: '400px' }}
    />
  );
}
