import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TARGET_DATE = new Date('2026-03-28T09:00:00').getTime();

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const now = Date.now();
        const difference = TARGET_DATE - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeUnits = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
    ];

    const padValue = (val) => String(val).padStart(2, '0');

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-3xl mx-auto my-8"
            id="countdown-timer"
        >
            {/* Label */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center text-lg md:text-2xl font-orbitron font-bold tracking-[0.2em] uppercase text-primary mb-6 drop-shadow-[0_0_10px_rgba(110,193,195,0.3)]"
            >
                EVENT STARTS IN
            </motion.p>

            {/* Timer Display */}
            <div className="flex items-center justify-center gap-1.5 sm:gap-3 md:gap-4">
                {timeUnits.map((unit, index) => (
                    <React.Fragment key={unit.label}>
                        {/* Time Unit Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            className="relative group"
                        >
                            {/* Glow effect behind card */}
                            <div className="absolute -inset-1 bg-gradient-to-b from-primary/20 to-cyan-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative flex flex-col items-center">
                                {/* Number Container */}
                                <div className="countdown-card relative w-14 h-16 sm:w-20 sm:h-24 md:w-24 md:h-28 flex items-center justify-center rounded-xl border border-primary/20 bg-white/[0.03] backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(110,193,195,0.15)]">
                                    {/* Subtle inner gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.05] to-transparent" />

                                    {/* Center divider line */}
                                    <div className="absolute w-full h-px bg-primary/10 top-1/2 -translate-y-px" />

                                    {/* Number */}
                                    <span className="relative font-orbitron font-bold text-xl sm:text-3xl md:text-4xl text-primary drop-shadow-[0_0_8px_rgba(110,193,195,0.4)]">
                                        {padValue(unit.value)}
                                    </span>
                                </div>

                                {/* Label */}
                                <span className="mt-2 text-[9px] sm:text-xs md:text-sm font-mono tracking-widest uppercase text-gray-400/80">
                                    {unit.label}
                                </span>
                            </div>
                        </motion.div>

                        {/* Separator */}
                        {index < timeUnits.length - 1 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="flex flex-col gap-1 sm:gap-1.5 pb-4 sm:pb-5"
                            >
                                <span className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-primary/60 shadow-[0_0_6px_rgba(110,193,195,0.5)] animate-pulse" />
                                <span className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-primary/60 shadow-[0_0_6px_rgba(110,193,195,0.5)] animate-pulse delay-75" />
                            </motion.div>
                        )}
                    </React.Fragment>
                ))}
            </div>

            {/* Limited Slots Warning */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 text-center"
            >
                <span className="inline-block px-4 py-1.5 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 text-xs sm:text-sm font-mono tracking-widest uppercase animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                    ⚠ Limited Slots Only
                </span>
            </motion.div>

            {/* Subtle progress bar */}
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="mt-6 mx-auto max-w-sm"
            >
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </motion.div>
        </motion.div>
    );
};

export default CountdownTimer;
