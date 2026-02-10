import React from 'react';
import { Phone, Mail, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="bg-black py-12 border-t border-white/10 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row w-full justify-between gap-12 text-center md:text-left">

                    {/* Brand & Socials */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-orbitron font-bold text-white">
                            IDEA<span className="text-primary">TECH</span>
                        </h2>
                        <p className="text-gray-400 max-w-sm mx-auto md:mx-0">
                            Igniting innovation, one line of code at a time. Join us for a journey of learning and competition.
                        </p>
                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="https://www.instagram.com/dscsrmrmp/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/dsc-srm-ramapuram/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://github.com/dsc-srmrmp" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 hover:bg-primary/20 hover:text-primary transition-colors">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Faculty Coordinators */}
                    <div className="glass-card p-6 rounded-xl border border-white/10 bg-white/5">
                        <h3 className="text-xl font-bold text-white mb-6 font-orbitron">Faculty Coordinators</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-start gap-4 p-3 rounded-lg bg-black/20 hover:bg-black/40 transition-colors">
                                <div className="p-2 bg-primary/10 rounded-full text-primary flex items-center justify-center shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div className="text-left">
                                    <p className="text-white font-medium">Dr. S. Sridevi</p>
                                    <a href="https://wa.me/919842483178" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-primary transition-colors">+91 98424 83178</a>
                                </div>
                            </div>

                            <div className="flex items-center justify-start gap-4 p-3 rounded-lg bg-black/20 hover:bg-black/40 transition-colors">
                                <div className="p-2 bg-primary/10 rounded-full text-primary flex items-center justify-center shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div className="text-left">
                                    <p className="text-white font-medium">Mrs. T. Archana</p>
                                    <a href="https://wa.me/919791036055" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-primary transition-colors">+91 97910 36055</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coordinators */}
                    <div className="glass-card p-6 rounded-xl border border-white/10 bg-white/5">
                        <h3 className="text-xl font-bold text-white mb-6 font-orbitron">Student Coordinators</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-start gap-4 p-3 rounded-lg bg-black/20 hover:bg-black/40 transition-colors">
                                <div className="p-2 bg-primary/10 rounded-full text-primary flex items-center justify-center shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div className="text-left">
                                    <p className="text-white font-medium">Srivarsan K</p>
                                    <a href="https://wa.me/919474624190" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-primary transition-colors">+91 94746 24190</a>
                                </div>
                            </div>

                            <div className="flex items-center justify-start gap-4 p-3 rounded-lg bg-black/20 hover:bg-black/40 transition-colors">
                                <div className="p-2 bg-primary/10 rounded-full text-primary flex items-center justify-center shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div className="text-left">
                                    <p className="text-white font-medium">Khushal Mittal</p>
                                    <a href="https://wa.me/919950764003" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-primary transition-colors">+91 99507 64003</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} IdeaTech. All rights reserved. Designed with <span className="text-red-500">❤</span> by DSC.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
