// components/Footer.tsx
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <span className="text-2xl font-bold text-emerald-500">VaultTalk</span>
                </div>
                <nav className="flex space-x-4">
                    <Link href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</Link>
                </nav>
            </div>
        </footer>
    )
}