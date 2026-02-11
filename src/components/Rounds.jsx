import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Code, Globe, Wallet, Shield, Rocket, HeartPulse, CheckCircle2 } from 'lucide-react';

const Rounds = () => {
    const tracks = [
        { icon: <Globe size={18} className="text-green-400" />, title: 'Sustainability' },
        { icon: <Wallet size={18} className="text-yellow-400" />, title: 'Fintech' },
        { icon: <Shield size={18} className="text-blue-400" />, title: 'Defence' },
        { icon: <Rocket size={18} className="text-orange-400" />, title: 'Spacetech' },
        { icon: <HeartPulse size={18} className="text-red-400" />, title: 'Healthcare' },
    ];

    const debuggingLevels = [
        { level: 'Easy', time: '2 Mins', questions: '2 Qs', color: 'text-green-400 border-green-500/30' },
        { level: 'Medium', time: '5 Mins', questions: '2 Qs', color: 'text-yellow-400 border-yellow-500/30' },
        { level: 'Hard', time: '8-10 Mins', questions: '1 Q', color: 'text-red-500 border-red-500/30' },
    ];

    const round1Details = [
        "Choose problem statements or bring your own.",
        "Analyze the problem and design an innovative solution.",
        "Short pitch explaining design approach and logic.",
        "Criteria: Innovation, Clarity, Feasibility."
    ];

    const round2Details = [
        "Shortlisted teams enter the debugging arena.",
        "Fix faulty or incomplete code under time pressure.",
        "Includes 'Block and Tackle' ice-breaker activity.",
        "Test of speed, logic, and teamwork."
    ];

    return (
        <section id="rounds" className="pt-20 pb-8 bg-[#0B1414] relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-x-1/2"></div>
            <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px] translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
                        Event <span className="text-primary">Structure</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Two rounds of intense innovation and execution.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Round 1 Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-[#111] p-1 border border-white/10 rounded-xl overflow-hidden group hover:border-primary/50 transition-colors duration-300"
                    >
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary rounded-tl-xl"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary rounded-br-xl"></div>

                        <div className="bg-[#0B1414]/90 p-8 h-full rounded-lg relative z-10">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <div className="inline-block px-3 py-1 mb-2 border border-primary/30 rounded text-xs font-mono text-primary uppercase tracking-wider bg-primary/5">
                                        Round 01
                                    </div>
                                    <h3 className="text-3xl font-orbitron font-bold text-white">MARK'S IDEA</h3>
                                </div>
                                <Lightbulb size={40} className="text-primary opacity-80" />
                            </div>

                            {/* Divider Line */}
                            <div className="w-full h-px bg-gradient-to-r from-primary/50 to-transparent mb-8"></div>

                            {/* Details - Always Visible */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-3">Domains</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {tracks.map((track, i) => (
                                            <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded border border-white/5 text-sm text-gray-300">
                                                {track.icon}
                                                <span>{track.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-3">Process</h4>
                                    <ul className="space-y-2">
                                        {round1Details.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                                <CheckCircle2 size={14} className="text-primary mt-1 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Round 2 Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-[#111] p-1 border border-white/10 rounded-xl overflow-hidden group hover:border-cyan-400/50 transition-colors duration-300"
                    >
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-400 rounded-tl-xl"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-cyan-400 rounded-br-xl"></div>

                        <div className="bg-[#0B1414]/90 p-8 h-full rounded-lg relative z-10">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <div className="inline-block px-3 py-1 mb-2 border border-cyan-400/30 rounded text-xs font-mono text-cyan-400 uppercase tracking-wider bg-cyan-400/5">
                                        Round 02
                                    </div>
                                    <h3 className="text-3xl font-orbitron font-bold text-white">BUG SLAYER</h3>
                                </div>
                                <Code size={40} className="text-cyan-400 opacity-80" />
                            </div>

                            {/* Divider Line */}
                            <div className="w-full h-px bg-gradient-to-r from-cyan-400/50 to-transparent mb-8"></div>

                            {/* Details */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-3">Levels</h4>
                                    <div className="grid grid-cols-1 gap-2">
                                        {debuggingLevels.map((lvl, i) => (
                                            <div key={i} className={`flex items-center justify-between px-3 py-2 bg-white/5 rounded border ${lvl.color} text-sm`}>
                                                <span className="font-bold">{lvl.level}</span>
                                                <div className="text-gray-400 text-xs flex gap-2">
                                                    <span>{lvl.time}</span>
                                                    <span>|</span>
                                                    <span>{lvl.questions}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-gray-400 text-sm font-mono uppercase tracking-wide mb-3">Structure</h4>
                                    <ul className="space-y-2">
                                        {round2Details.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                                                <CheckCircle2 size={14} className="text-cyan-400 mt-1 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Rounds;

