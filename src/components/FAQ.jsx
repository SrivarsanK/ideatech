import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Zap, Users } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const accordionRefs = useRef([]);

    const faqItems = [
        {
            question: "What is IDEATECH really about?",
            answer: "IDEATECH is about structured thinking under pressure in 3 hours, taking an idea from problem understanding to solution design and then testing logical execution through debugging.",
            category: "Event Details",
            icon: HelpCircle
        },
        {
            question: "How is IDEATECH different from a traditional hackathon?",
            answer: "Instead of long coding hours, IDEATECH focuses on clarity of thought, pitching ability, and real-time debugging through two well-defined rounds.This is NOT a hackathon.",
            category: "Event Details",
            icon: HelpCircle
        },
        {
            question: "What happens in the Design & Pitching round?",
            answer: "Teams analyze the given problem, design a solution approach, and pitch their reasoning, structure, and feasibility to the judges. AI tools are ALLOWED.",
            category: "Rounds",
            icon: Zap
        },
        {
            question: "What happens in the Debugging with Block and Tackle round?",
            answer: "Teams are given debugging tasks that test logical reasoning, attention to detail, and the ability to find issues without external assistance.",
            category: "Rounds",
            icon: Zap
        },
        {
            question: "Are AI tools allowed during IDEATECH?",
            answer: "AI tools are permitted only during the Design & Pitching round. Any use of AI tools during the debugging round will result in immediate disqualification.",
            category: "Rules",
            icon: HelpCircle
        },
        {
            question: "Are the problem statements theoretical or practical?",
            answer: "Problem statements are based on real-world scenarios and are designed to test practical, implementable thinking.",
            category: "Event Details",
            icon: HelpCircle
        },
        {
            question: "Is performance in both rounds equally important?",
            answer: "Yes. IDEATECH values balanced performance in ideation and debugging rather than excellence in only one area.",
            category: "Rules",
            icon: HelpCircle
        },
        {
            question: "Can beginners participate and compete fairly?",
            answer: "Yes. The event is designed so that beginners with clear thinking and teamwork can compete effectively alongside experienced participants.",
            category: "Participation",
            icon: Users
        },
        {
            question: "What do participants gain from IDEATECH beyond prizes?",
            answer: "Participants gain experience in ideation, pitching, debugging under constraints, and working effectively as a team in a competitive setting.This also acts as a base for your future hackathons.",
            category: "Participation",
            icon: Users
        },
        {
            question: "What should teams prepare before coming to IDEATECH?",
            answer: "Teams should be comfortable with basic coding, logical reasoning, and clearly explaining their thought process.",
            category: "Participation",
            icon: Users
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
        
        // Scroll to the opened accordion smoothly
        setTimeout(() => {
            accordionRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 0);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = openIndex === null ? 0 : Math.min(openIndex + 1, faqItems.length - 1);
                setOpenIndex(nextIndex);
                setTimeout(() => {
                    accordionRefs.current[nextIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 0);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = openIndex === null ? faqItems.length - 1 : Math.max(openIndex - 1, 0);
                setOpenIndex(prevIndex);
                setTimeout(() => {
                    accordionRefs.current[prevIndex]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 0);
            } else if (e.key === 'Enter' && openIndex !== null) {
                e.preventDefault();
                setOpenIndex(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [openIndex, faqItems.length]);

    return (
        <section id="faq" className="py-20 bg-[#0B1414] relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-orbitron font-bold text-white mb-4">
                        Frequently Asked <span className="text-primary">Questions</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Find answers to common questions about IDEATECH
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-4"
                >
                    {faqItems.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                        <motion.div
                            key={index}
                            ref={(el) => accordionRefs.current[index] = el}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className={`border rounded-lg overflow-hidden transition-all duration-300 ${
                                openIndex === index 
                                    ? 'border-primary/80 bg-gradient-to-r from-primary/10 to-cyan-500/10 shadow-lg shadow-primary/20' 
                                    : 'border-white/10 hover:border-primary/50'
                            }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`w-full px-6 py-4 flex items-center justify-between transition-all duration-300 ${
                                    openIndex === index
                                        ? 'bg-gradient-to-r from-[#0F1F22] to-[#0B1414] '
                                        : 'bg-gradient-to-r from-[#0B1414] to-[#0F1F22] hover:from-[#0F1F22] hover:to-[#0B1414]'
                                }`}
                                aria-expanded={openIndex === index}
                            >
                                <div className="flex items-center gap-3 text-left flex-1">
                                    <IconComponent className="w-5 h-5 text-primary flex-shrink-0" />
                                    <div className="flex-1">
                                        <span className={`text-lg font-semibold transition-colors ${
                                            openIndex === index ? 'text-primary' : 'text-white'
                                        }`}>
                                            {item.question}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 flex-shrink-0">
                                    <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary font-medium">
                                        {item.category}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-primary' : 'text-primary'}`} />
                                    </motion.div>
                                </div>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 py-4 bg-[#0F1F22]/50 border-t border-primary/20">
                                    <p className="text-gray-300 text-base leading-relaxed">
                                        {item.answer}
                                    </p>
                                    <div className="mt-3 text-sm text-gray-400">
                                        <span className="text-primary font-semibold">{index + 1}</span> of {faqItems.length}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-400 text-lg">
                        Can't find your answer? <a href="#contact" className="text-primary hover:text-primary/80 transition-colors cursor-pointer font-semibold">Contact us</a> for more information!
                    </p>
                </motion.div>
            </div>

            {/* Subtle background decoration */}
            <div className="absolute top-40 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
};

export default FAQ;
