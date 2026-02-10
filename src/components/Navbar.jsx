import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // User detection function for screen layout
    useEffect(() => {
        const checkLayout = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Initial check
        checkLayout();

        // Listener
        window.addEventListener('resize', checkLayout);
        return () => window.removeEventListener('resize', checkLayout);
    }, []);

    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine visibility based on scroll direction
            if (!isOpen && currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Hide when scrolling down
            } else {
                setIsVisible(true); // Show when scrolling up
            }

            setScrolled(currentScrollY > 20);
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    const navLinks = [
        { title: 'Home', href: '#' },
        { title: 'About', href: '#about' },
        { title: 'Rounds', href: '#rounds' },
        { title: 'Prizes', href: '#prizes' },
        { title: 'Legacy', href: '#past-events' },
        { title: 'Contact', href: '#contact' },
    ];

    return (
        <div className={`fixed top-0 left-0 w-full z-50 flex flex-col items-center pt-4 px-4 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className={`
                    w-full max-w-7xl rounded-2xl transition-all duration-300 relative
                    ${scrolled || isOpen ? 'bg-[#0B1414]/80 backdrop-blur-xl border border-primary/30' : 'bg-transparent border border-transparent'}
                    ${!scrolled && !isOpen && 'bg-white/5 backdrop-blur-sm border-white/5'} 
                `}
                style={{
                    boxShadow: scrolled || isOpen ? '0 0 20px rgba(110, 193, 195, 0.2), inset 0 0 1px rgba(255, 255, 255, 0.1)' : 'none'
                }}
            >
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20 relative">
                        {/* LEFT: DSC Logo */}
                        <div className="flex-shrink-0 cursor-pointer flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
                            <img src="/dsc-logo.svg" alt="DSC" className="h-10 md:h-14 w-auto object-contain" />
                        </div>

                        {/* CENTER: Navigation Links (Desktop) */}
                        <div className="hidden md:flex flex-1 justify-center">
                            <div className="flex items-baseline space-x-1 lg:space-x-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.title}
                                        href={link.href}
                                        className="text-gray-300 hover:text-white hover:bg-white/10 transition-all px-3 py-2 rounded-lg text-sm font-medium relative group"
                                    >
                                        {link.title}
                                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-1/2"></span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* CENTER: SRM Logo (Mobile) - Absolute Centered */}
                        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
                            <img src="/srm-logo.svg" alt="SRM" className="h-10 w-auto object-contain" />
                        </div>

                        {/* RIGHT: SRM Logo (Desktop) & Menu Button (Mobile) */}
                        <div className="flex items-center gap-4">
                            {/* SRM Logo - Desktop */}
                            <div className="hidden md:block">
                                <img src="/srm-logo.svg" alt="SRM" className="h-12 w-auto object-contain" />
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="text-gray-400 hover:text-white focus:outline-none transition-colors"
                                >
                                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu - Separate Floating Dock */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="md:hidden w-full max-w-7xl mt-2 rounded-2xl overflow-hidden bg-[#0B1414]/80 backdrop-blur-xl border border-primary/30"
                        style={{
                            boxShadow: '0 0 25px rgba(110, 193, 195, 0.25), inset 0 0 1px rgba(255, 255, 255, 0.15)'
                        }}
                    >
                        <div className="flex flex-col px-4 py-3 gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center w-full px-3 py-2.5 rounded-lg text-gray-300 hover:text-primary hover:bg-white/5 transition-all font-medium"
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;
