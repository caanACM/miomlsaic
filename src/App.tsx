import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import GardenParadiso from './components/GardenParadiso';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';

function App() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const openReservationModal = () => setIsReservationModalOpen(true);
  const closeReservationModal = () => setIsReservationModalOpen(false);

  return (
    <div className="min-h-screen bg-cream-50">
      <Navigation onReservationClick={openReservationModal} />
      <Hero onReservationClick={openReservationModal} />
      <About />
      <GardenParadiso onReservationClick={openReservationModal} />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <ReservationModal isOpen={isReservationModalOpen} onClose={closeReservationModal} />
    </div>
  );
}

export default App;
