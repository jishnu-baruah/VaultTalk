// app/demo/page.tsx
'use client'
import { useState } from 'react'
import { Lock, Eye, Shield } from "lucide-react"
import { Message } from '@/types/message'
import { Feature } from '@/types/feature'
import { MessageBubble } from '@/components/MessageBubble'
import { MessageInput } from '@/components/MessageInput'
import { FeatureDialog } from '@/components/FeatureDialog'

export default function VaultTalkDemo() {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: "Welcome to VaultTalk!", sender: "System", expiry: null },
    ])
    const [newMessage, setNewMessage] = useState("")
    const [expiryTime, setExpiryTime] = useState("1h")

    const features: Feature[] = [
        {
            icon: Lock,
            title: "End-to-End Encryption",
            description: "All messages are encrypted and can only be read by the intended recipients."
        },
        {
            icon: Eye,
            title: "Controlled Disclosure",
            description: "Share specific messages with third parties for a limited time or with view-only access."
        },
        {
            icon: Shield,
            title: "Audit Log",
            description: "View a timestamped log of message verifications without revealing content."
        }
    ]

    const sendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, {
                id: Date.now(),
                text: newMessage,
                sender: "You",
                expiry: expiryTime
            }])
            setNewMessage("")
        }
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 p-4">
            <h1 className="text-3xl font-bold text-emerald-500 mb-6">VaultTalk Demo</h1>

            <div className="flex-grow flex flex-col space-y-4 mb-4 overflow-y-auto">
                {messages.map((message) => (
                    <MessageBubble key={message.id} message={message} />
                ))}
            </div>

            <MessageInput
                newMessage={newMessage}
                setNewMessage={setNewMessage}
                expiryTime={expiryTime}
                setExpiryTime={setExpiryTime}
                onSend={sendMessage}
            />

            <div className="mt-6 flex justify-between">
                {features.map((feature, index) => (
                    <FeatureDialog key={index} {...feature} />
                ))}
            </div>
        </div>
    )
}