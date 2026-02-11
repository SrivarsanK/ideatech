import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                // Faster increment to reach 100% in ~1.25s (approx 12 steps of 100ms)
                const next = Math.min(prev + (Math.random() * 20 + 5), 100);
                if (next === 100) {
                    clearInterval(timer);
                    setTimeout(onLoadingComplete, 200); // Minimal delay
                }
                return next;
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            {/* Centered Event Logo with Breathing Animation */}
            <motion.div
                className="relative w-64 md:w-96 aspect-video flex items-center justify-center mb-12"
                animate={{
                    scale: [0.95, 1.05, 0.95],
                    filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <img
                    src="/event.png"
                    alt="Loading..."
                    className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(110,193,195,0.3)]"
                />
            </motion.div>

            {/* Loading Bar Container */}
            <div className="w-64 md:w-80 h-1 bg-gray-800/50 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                {/* Progress Fill */}
                <motion.div
                    className="h-full bg-primary shadow-[0_0_15px_rgba(110,193,195,0.8)]"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                />
            </div>

            {/* Percentage Text (Optional, keeps it techy) */}
            <motion.p
                className="mt-4 font-mono text-sm text-primary/70 tracking-widest"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                INITIALIZING... {Math.round(progress)}%
            </motion.p>
        </motion.div>
    );
};

export default Loader;
