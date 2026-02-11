import React from 'react';
import { motion } from 'framer-motion';
import { CardStack } from './ui/card-stack';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import galleryManifest from "@/data/event-gallery-manifest.json";

const PastEvents = () => {
    const events = [
        {
            id: 1,
            title: 'Hackcelerate',
            description: 'A 24-hour hackathon that sparked valid industry solutions, bringing focused problem-solving and practical ideas together within a tight timeframe.',
            image: '/Hackcelerate/20260130_103351.jpg',
            gallery: galleryManifest.hackcelerate || [],
        },
        {
            id: 2,
            title: 'Techno Rally',
            description: 'The ultimate tech scavenger hunt across campus, blending challenges, exploration, and hands-on learning into a high-energy experience.',
            image: '/TechnoRally/IMG_4681.jpg',
            gallery: galleryManifest.technoRally || [],
        },
        {
            id: 3,
            title: 'DevSummit',
            description: 'A premier developer conference uniting tech enthusiasts, industry leaders, and innovators for insightful keynotes, workshops, and networking.',
            image: '/DevSummit/IMG_2588.JPG',
            gallery: galleryManifest.devSummit || [],
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

    const [selectedEvent, setSelectedEvent] = React.useState(null);
    const [isGalleryOpen, setIsGalleryOpen] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);

    const handleCardClick = (item) => {
        const event = events.find(e => e.id === item.id);
        if (event && event.gallery) {
            setSelectedEvent(event);
            setIsGalleryOpen(true);
        }
    };

    React.useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMobile(width < 640);
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
                        onCardClick={handleCardClick}
                    />
                </div>
            </div>

            <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
                <DialogContent className="max-w-4xl max-h-[90vh] bg-black/90 border-primary/20 text-white flex flex-col p-6">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-orbitron text-primary">{selectedEvent?.title} Gallery</DialogTitle>
                        <DialogDescription className="text-gray-400">
                            Highlights from {selectedEvent?.title}
                        </DialogDescription>
                    </DialogHeader>

                    {isMobile ? (
                        <ScrollArea className="h-[60vh] w-full rounded-md border border-white/10 p-4">
                            <div className="flex flex-col gap-4">
                                {selectedEvent?.gallery?.map((src, index) => (
                                    <div key={index} className="rounded-xl overflow-hidden bg-black/50 border border-white/10">
                                        <img
                                            src={src}
                                            alt={`Gallery image ${index + 1}`}
                                            className="w-full h-auto object-cover"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    ) : (
                        <div className="flex items-center justify-center p-4">
                            <Carousel className="w-full max-w-3xl">
                                <CarouselContent>
                                    {selectedEvent?.gallery?.map((src, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                <div className="flex aspect-video items-center justify-center p-2 rounded-xl overflow-hidden bg-black/50 border border-white/10">
                                                    <img
                                                        src={src}
                                                        alt={`Gallery image ${index + 1}`}
                                                        className="w-full h-full object-contain"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="bg-primary/20 hover:bg-primary/40 border-primary/50 text-white" />
                                <CarouselNext className="bg-primary/20 hover:bg-primary/40 border-primary/50 text-white" />
                            </Carousel>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default PastEvents;
