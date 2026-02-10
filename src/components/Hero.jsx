import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, ChevronRight, Calendar, MapPin } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 w-full h-full bg-background">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">

                {/* Logos */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12"
                >
                    <div className="glass-card p-4 rounded-2xl hover:scale-105 transition-transform duration-300 border border-primary/30 shadow-[0_0_15px_rgba(110,193,195,0.1)]">
                        <img src="/dsc.png" alt="DSC Logo" className="h-20 md:h-24 w-auto object-contain" />
                    </div>

                    <div className="text-center space-y-1 px-4">
                        {/* <p className="text-gray-400 font-mono text-xs md:text-sm tracking-widest uppercase mb-1">(Developer Student Club SRMIST RMP)</p> */}
                        <p className="text-primary font-orbitron font-bold text-lg tracking-widest">PRESENTS</p>
                    </div>

                    <div className="glass-card p-4 rounded-2xl hover:scale-105 transition-transform duration-300 border border-primary/30 shadow-[0_0_15px_rgba(110,193,195,0.1)]">
                        <img src="/event.png" alt="IdeaTech Logo" className="h-20 md:h-24 w-auto object-contain" />
                    </div>
                </motion.div>

                {/* Main Title - Removed as Logo serves as title now, or keep smaller */}
                {/* <motion.h1 ... > IDEATECH ... </motion.h1> */}

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed mt-4"
                >
                    Innovate. Debug. Conquer. Join the ultimate tech showdown where ideas meet execution.
                </motion.p>

                {/* Countdown Timer */}
                <CountdownTimer />

                {/* Info Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base font-mono text-cyan-200/80"
                >
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                        <Calendar size={16} /> Rs.200 / Team
                    </span>
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                        <MapPin size={16} /> Offline @ MLCP Mac Lab
                    </span>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <a
                        href="https://www.texus.io/event/2526"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-background font-bold text-lg rounded-full overflow-hidden transition-all hover:bg-cyan-400 shadow-[0_0_20px_rgba(110,193,195,0.4)] hover:shadow-[0_0_30px_rgba(110,193,195,0.6)]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Register Now <Rocket className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                </motion.div>

            </div>


        </section>
    );
};

export default Hero;
