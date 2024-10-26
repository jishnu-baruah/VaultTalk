'use client'

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const DemoSection = () => {
    return (
        <section id="demo" className="relative py-24">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />

            {/* Content */}
            <div className="relative max-w-6xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-500">
                        Experience VaultTalk
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Take a quick tour to see secure chat, message expiry, and basic audit trail features in action.
                    </p>
                </motion.div>

                {/* Demo Preview */}
                <motion.div
                    className="relative max-w-4xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    {/* Main Preview Box */}
                    <div className="aspect-video rounded-xl bg-gray-800/50 backdrop-blur border border-gray-700/50 p-8 mb-8 flex items-center justify-center">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <div className="w-12 h-12 bg-emerald-500/20 rounded-full animate-pulse" />
                            </div>
                            <h3 className="text-2xl font-semibold text-emerald-400 mb-4">
                                Interactive Demo Coming Soon
                            </h3>
                            <p className="text-gray-400 max-w-md mx-auto">
                                Experience our secure messaging platform with end-to-end encryption
                                and advanced privacy controls.
                            </p>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 group"
                        >
                            <span>Start Demo</span>
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="w-full sm:w-auto border-gray-700 text-gray-300 hover:bg-gray-800 px-8"
                        >
                            Learn More
                        </Button>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                        {['End-to-End Encryption', 'Message Expiry', 'Audit Trails'].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-800/50 backdrop-blur border border-gray-700/50 rounded-lg p-4 text-center"
                            >
                                <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                                    <div className="w-6 h-6 bg-emerald-500/20 rounded-lg" />
                                </div>
                                <h4 className="text-emerald-400 font-medium">{feature}</h4>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DemoSection;