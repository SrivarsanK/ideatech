import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PastEvents from './components/PastEvents';
import Rounds from './components/Rounds';
import About from './components/About';
import Prizes from './components/Prizes';
import Perks from './components/Perks';
import Footer from './components/Footer';
import EventPosterShowcase from "./components/EventPosterShowcase";


function App() {
  return (
    <div className="bg-background min-h-screen text-white font-sans selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <About />
      <Rounds />
      <EventPosterShowcase />
      <Prizes />
      <Perks />
      <PastEvents />
      <Footer />
    </div>
  );
}

export default App;
