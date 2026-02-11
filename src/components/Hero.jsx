import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Sparkles, ChevronRight, Calendar, MapPin } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { ShootingStars } from "@/components/ui/shooting-stars";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 pb-32 sm:pb-40 overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 w-full h-full bg-background">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
                <ShootingStars
                    starColor="#9E00FF"
                    trailColor="#2EB9DF"
                    minSpeed={15}
                    maxSpeed={35}
                    minDelay={1000}
                    maxDelay={3000}
                />
                <ShootingStars
                    starColor="#FF0099"
                    trailColor="#FFB800"
                    minSpeed={10}
                    maxSpeed={25}
                    minDelay={2000}
                    maxDelay={4000}
                />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">

                {/* Logos */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center items-center mb-12 w-full"
                >
                    <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center">
                        <img
                            src="/event.png"
                            alt="IdeaTech Logo"
                            className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                        />
                    </div>
                </motion.div>

                {/* Presented By Section */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="flex flex-col items-center gap-6 -mt-16 sm:-mt-24 md:-mt-32 relative z-10"
                >
                    <p className="text-primary font-orbitron font-bold text-xs md:text-sm tracking-[0.2em] uppercase drop-shadow-[0_0_10px_rgba(110,193,195,0.3)] bg-background/50 backdrop-blur-sm px-4 py-1 rounded-full border border-primary/10">
                        Presented By
                    </p>
                    <img
                        src="/teal_white.png"
                        alt="Sponsor Logo"
                        className="h-24 sm:h-32 md:h-40 lg:h-48 w-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_25px_rgba(110,193,195,0.4)]"
                    />
                </motion.div>

                {/* Main Title - Removed as Logo serves as title now, or keep smaller */}
                {/* <motion.h1 ... > IDEATECH ... </motion.h1> */}

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
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
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex flex-row justify-center gap-2 sm:gap-4 mb-10 text-xs sm:text-sm md:text-base font-mono text-cyan-200/80"
                >
                    <span className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5" /> Rs.200 / Team
                    </span>
                    <span className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
                        <MapPin className="w-4 h-4 sm:w-5 sm:h-5" /> Offline @ MLCP Mac Lab
                    </span>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
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


        </section >
    );
};

export default Hero;
