import React from 'react';
import { motion } from 'framer-motion';

const EventPosterShowcase = () => {
  return (
    <section className="relative py-6 md:py-10 flex justify-center items-center bg-background">

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full flex justify-center px-6"
      >
        <div className="glass-card p-1 md:p-3 rounded-3xl border border-primary/30 shadow-[0_0_60px_rgba(110,193,195,0.25)]">
          <img
            src="/poster.png"
            alt="Ideatech Official Poster"
            className="rounded-2xl w-full max-w-3xl object-contain animate-float"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default EventPosterShowcase;
