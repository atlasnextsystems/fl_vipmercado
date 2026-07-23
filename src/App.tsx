import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Videos from './components/Videos';
import Sectors from './components/Sectors';
import Facilities from './components/Facilities';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Preloader from './components/Preloader';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds simulated loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-bg flex flex-col font-body text-neutral-ink">
      <Preloader isLoading={isLoading} />
      <Header />
      <main className="flex-1">
        <Hero />
        <Videos />
        <Sectors />
        <Facilities />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
