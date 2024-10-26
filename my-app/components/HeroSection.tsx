import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Shield, Lock, Key, UserCheck, MessageSquare, Clock } from 'lucide-react';

// Define the props for the FeatureCard component
interface FeatureCardProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    delay: number;
}

// FeatureCard component
const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-center p-2.5 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-emerald-500/50 transition-colors"
    >
        <div className="p-1.5 bg-emerald-500/10 rounded-lg">
            <Icon className="w-4 h-4 text-emerald-400" />
        </div>
        <p className="text-xs text-gray-300 ml-3">{title}</p>
    </motion.div>
);

// ParticleEffect component
const ParticleEffect: React.FC = () => {
    const [windowDimensions, setWindowDimensions] = useState<{ width: number; height: number } | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Get dimensions only when window is defined
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
    }, []);

    const particles = Array.from({ length: 30 });

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-0.5 h-0.5 bg-emerald-500/10 rounded-full"
                    initial={{
                        x: windowDimensions ? Math.random() * windowDimensions.width : 0,
                        y: windowDimensions ? Math.random() * windowDimensions.height : 0,
                    }}
                    animate={{
                        x: windowDimensions ? Math.random() * windowDimensions.width : 0,
                        y: windowDimensions ? Math.random() * windowDimensions.height : 0,
                    }}
                    transition={{
                        duration: Math.random() * 10 + 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};


// Define the main HeroSection component
const HeroSection: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [showScroll, setShowScroll] = useState<boolean>(true);
    const targetCount = 10000;

    useEffect(() => {
        const duration = 2000;
        const frameRate = 60;
        const steps = duration / (1000 / frameRate);
        const increment = targetCount / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= targetCount) {
                setCount(targetCount);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, 1000 / frameRate);

        const handleScroll = () => {
            const heroSection = document.querySelector('#hero-section');
            if (heroSection) {
                const heroBottom = heroSection.getBoundingClientRect().bottom;
                setShowScroll(heroBottom > 0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section id="hero-section" className="relative min-h-screen overflow-hidden">
            <ParticleEffect />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900 pointer-events-none" />

            <div className="relative max-w-5xl mx-auto px-4 pt-24 lg:pt-28 z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                    {/* Left Column - Main Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:pr-6"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="w-12 h-12 relative mb-4"
                        >
                            <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-pulse" />
                            <Shield className="w-full h-full text-emerald-500 relative z-10" />
                        </motion.div>

                        <h1 className="text-2xl md:text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                            VaultTalk
                        </h1>

                        <p className="text-lg md:text-xl font-semibold text-gray-200 mb-3">
                            Where Privacy and Control<br />Meet Security
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-base text-gray-300 mb-6 pr-4"
                        >
                            Experience seamless communication with military-grade encryption
                            and complete control over your data.
                        </motion.div>

                        <motion.div
                            className="flex items-center gap-2 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Lock className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-xs font-medium text-emerald-400">
                                {count.toLocaleString()}+ Encrypted Conversations
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Feature Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-2xl" />
                        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div className="space-y-3">
                                <FeatureCard icon={Key} title="End-to-End Encryption" delay={0.6} />
                                <FeatureCard icon={UserCheck} title="Verified Users" delay={0.7} />
                                <FeatureCard icon={MessageSquare} title="Secure Messages" delay={0.8} />
                            </div>
                            <div className="space-y-3 md:mt-8">
                                <FeatureCard icon={Clock} title="Auto-Destruct" delay={0.9} />
                                <FeatureCard icon={Shield} title="Zero Knowledge" delay={1.0} />
                                <FeatureCard icon={Lock} title="Access Control" delay={1.1} />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Moved scroll indicator outside the grid */}
            <AnimatePresence>
                {showScroll && (
                    <motion.div
                        className="fixed bottom-12 left-8 z-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            animate={{ y: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="text-gray-400 text-xs flex items-center"
                        >
                            <span>Scroll to explore</span>
                            <motion.div
                                animate={{ x: [0, 8, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="ml-2"
                            >
                                →
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default HeroSection;
