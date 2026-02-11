import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PastEvents from './components/PastEvents';
import Rounds from './components/Rounds';
import About from './components/About';
import Prizes from './components/Prizes';
import Perks from './components/Perks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import EventPosterShowcase from "./components/EventPosterShowcase";
import Loader from './components/Loader';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-background min-h-screen text-white font-sans selection:bg-primary selection:text-black"
        >
          <Navbar />
          <Hero />
          <About />
          <Rounds />
          <EventPosterShowcase />
          <Prizes />
          <Perks />
          <PastEvents />
          <FAQ />
          <Footer />
        </motion.div>
      )}
    </>
  );
}

export default App;
