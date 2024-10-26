import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Eye, Shield, Clock, ArrowRight, Check, Key, Users } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Feature {
    icon: typeof Lock;
    title: string;
    description: string;
    details: string[];
    benefits: string[];
}

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <motion.div
                    className="relative group bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 cursor-pointer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative z-10">
                        <motion.div
                            className="w-14 h-14 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4"
                            animate={{ rotate: isHovered ? 360 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <feature.icon className="w-7 h-7 text-emerald-400" />
                        </motion.div>

                        <h3 className="text-xl font-semibold mb-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                            {feature.title}
                        </h3>

                        <p className="text-gray-300 text-sm leading-relaxed mb-4">
                            {feature.description}
                        </p>

                        <motion.div
                            className="flex items-center text-emerald-400/70 text-sm"
                            animate={{ x: isHovered ? 5 : 0 }}
                        >
                            Learn more
                            <ArrowRight className="w-4 h-4 ml-1" />
                        </motion.div>
                    </div>
                </motion.div>
            </DialogTrigger>

            <DialogContent className="bg-gray-800/95 backdrop-blur-sm text-white border-gray-700 max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="flex items-center text-2xl">
                        <feature.icon className="w-6 h-6 text-emerald-400 mr-2" />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-500">
                            {feature.title}
                        </span>
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                    <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                    </p>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-emerald-400">Key Features</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {feature.details.map((detail, i) => (
                                <li key={i} className="flex items-start">
                                    <Check className="w-5 h-5 text-emerald-400 mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-emerald-400">Benefits</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {feature.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start">
                                    <div className="w-6 h-6 bg-emerald-500/10 rounded flex items-center justify-center mr-2 flex-shrink-0">
                                        <Check className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <span className="text-gray-300 text-sm">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export const FeaturesSection = () => {
    const features: Feature[] = [
        {
            icon: Lock,
            title: "End-to-End Encryption",
            description: "Your messages are fully encrypted, ensuring only intended recipients can read them.",
            details: [
                "Military-grade AES-256 encryption",
                "Zero-knowledge architecture",
                "Decentralized key management",
                "Perfect forward secrecy"
            ],
            benefits: [
                "Complete message privacy",
                "Protection against data breaches",
                "Compliance with privacy regulations",
                "Secure cross-border communication"
            ]
        },
        {
            icon: Eye,
            title: "Controlled Disclosure",
            description: "Share messages selectively with temporary access for third parties.",
            details: [
                "Granular access controls",
                "Time-based permissions",
                "Revocable access rights",
                "Audit trail of access"
            ],
            benefits: [
                "Flexible information sharing",
                "Maintain control over sensitive data",
                "Regulatory compliance",
                "Reduced risk of data leaks"
            ]
        },
        {
            icon: Shield,
            title: "Immutable Integrity",
            description: "Blockchain-backed audit trails verify message integrity without revealing content.",
            details: [
                "Blockchain verification",
                "Tamper-proof records",
                "Digital signatures",
                "Cryptographic proofs"
            ],
            benefits: [
                "Verifiable communication",
                "Legal compliance",
                "Dispute resolution",
                "Trust establishment"
            ]
        },
        {
            icon: Clock,
            title: "Ephemeral Messaging",
            description: "Set expiry times for sensitive messages, leaving no trace behind.",
            details: [
                "Customizable message lifetimes",
                "Automatic deletion",
                "Secure data wiping",
                "Recovery prevention"
            ],
            benefits: [
                "Enhanced privacy",
                "Reduced storage overhead",
                "GDPR compliance",
                "Information lifecycle management"
            ]
        }
    ];

    return (
        <section id="features" className="relative py-24 px-4 bg-gray-900">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#10B98133_0%,_transparent_25%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#10B98133_0%,_transparent_25%)]" />

            <div className="relative max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-500">
                        Enterprise-Grade Security Features
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Experience uncompromising security with our comprehensive suite of protection features,
                        designed for modern communication needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;