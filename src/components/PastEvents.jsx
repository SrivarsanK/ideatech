import React from 'react';
import { motion } from 'framer-motion';
import { CardStack } from './ui/card-stack';

const PastEvents = () => {
    const events = [
        {
            id: 1,
            title: 'Hackcelerate',
            description: 'A 24-hour hackathon that sparked valid industry solutions, bringing focused problem-solving and practical ideas together within a tight timeframe.',
            image: '/ChatGPT Image Feb 10, 2026, 07_08_26 PM.png',
        },
        {
            id: 2,
            title: 'Techno Rally',
            description: 'The ultimate tech scavenger hunt across campus, blending challenges, exploration, and hands-on learning into a high-energy experience.',
            image: '/technorally.png',
        },
    ];

    const [config, setConfig] = React.useState({
        cardWidth: 500,
        cardHeight: 350,
        spreadDeg: 35,
        depthPx: 100,
        overlap: 0.4,
        activeScale: 1.05,
        activeLiftPx: 20
    });

    React.useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                // Mobile configuration
                setConfig({
                    cardWidth: Math.min(width - 64, 340), // More padding, max width limit
                    cardHeight: 260,       // Compact height
                    spreadDeg: 10,         // Very tight spread
                    depthPx: 40,           // Minimal depth
                    overlap: 0.15,         // Minimal overlap
                    activeScale: 1.02,     // Subtle scale
                    activeLiftPx: 10       // Subtle lift
                });
            } else {
                // Desktop configuration
                setConfig({
                    cardWidth: 500,
                    cardHeight: 350,
                    spreadDeg: 35,
                    depthPx: 100,
                    overlap: 0.4,
                    activeScale: 1.05,
                    activeLiftPx: 20
                });
            }
        };
        handleResize(); // Init
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="past-events" className="py-10 bg-background relative scroll-mt-28 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-0"
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400 mb-4 drop-shadow-[0_0_10px_rgba(110,193,195,0.3)]">
                        Previous Events
                    </h2>
                    <div className="h-1 w-24 bg-primary mx-auto rounded-full"></div>
                </motion.div>

                <div className="w-full max-w-5xl mx-auto flex justify-center -mt-2">
                    <CardStack
                        items={events.map(event => ({
                            id: event.id,
                            title: event.title,
                            description: event.description,
                            imageSrc: event.image,
                        }))}
                        cardWidth={config.cardWidth}
                        cardHeight={config.cardHeight}
                        activeScale={config.activeScale}
                        inactiveScale={0.9}
                        overlap={config.overlap}
                        spreadDeg={config.spreadDeg}
                        activeLiftPx={config.activeLiftPx}
                        depthPx={config.depthPx}
                        tiltXDeg={8}
                        springStiffness={220}
                        springDamping={22}
                        showDots={true}
                        autoAdvance={true}
                        intervalMs={3500}
                    />
                </div>
            </div>
        </section>
    );
};

export default PastEvents;
