// components/FeatureCard.tsx
'use client'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { fadeIn } from '@/lib/animations'

interface FeatureCardProps {
    Icon: LucideIcon;
    title: string;
    description: string;
}

export const FeatureCard = ({ Icon, title, description }: FeatureCardProps) => {
    return (
        <motion.div
            className="bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            variants={fadeIn}
        >
            <Icon className="w-12 h-12 text-emerald-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-emerald-400">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </motion.div>
    )
}
