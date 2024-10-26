// components/MessageBubble.tsx
'use client'
import { motion } from 'framer-motion'
import { Clock } from 'lucide-react'
import { Message } from '@/types/message'

interface MessageBubbleProps {
    message: Message;
}

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
    return (
        <motion.div
            className={`p-3 rounded-lg ${message.sender === "You" ? "bg-emerald-700 ml-auto" : "bg-gray-700"} max-w-[70%]`}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            <p>{message.text}</p>
            {message.expiry && (
                <span className="text-xs text-gray-400 mt-1 flex items-center">
                    <Clock className="w-3 h-3 mr-1" /> Expires in {message.expiry}
                </span>
            )}
        </motion.div>
    )
}
