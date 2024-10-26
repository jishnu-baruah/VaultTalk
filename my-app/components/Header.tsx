import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, Menu, X, ChevronDown, ExternalLink } from 'lucide-react';

interface MenuItemProps {
    href: string;
    children: React.ReactNode;
    external?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ href, children, external = false }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative group"
    >
        <Link
            href={href}
            className="flex items-center space-x-2 text-gray-300 hover:text-emerald-400 transition-colors"
            target={external ? "_blank" : "_self"}
        >
            <span>{children}</span>
            {external && <ExternalLink className="w-4 h-4" />}
        </Link>
        <motion.div
            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300"
        />
    </motion.div>
);

interface DropdownMenuProps {
    isOpen: boolean;
    items: { href: string; label: string }[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ isOpen, items }) => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full right-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-xl"
            >
                {items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-emerald-400 first:rounded-t-lg last:rounded-b-lg"
                    >
                        {item.label}
                    </Link>
                ))}
            </motion.div>
        )}
    </AnimatePresence>
);

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const headerVariants = {
        hidden: { y: -100 },
        visible: {
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    const securityBadgeVariants = {
        initial: { scale: 0.8, opacity: 0 },
        animate: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 0.2
            }
        }
    };

    return (
        <motion.header
            variants={headerVariants}
            initial="hidden"
            animate="visible"
            className={`w-full py-4 px-6 fixed top-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <motion.div
                    className="flex items-center space-x-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Shield className="w-8 h-8 text-emerald-500" />
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-500">
                        VaultTalk
                    </span>

                    <motion.div
                        variants={securityBadgeVariants}
                        initial="initial"
                        animate="animate"
                        className="ml-4 hidden md:flex items-center space-x-1 bg-emerald-500/10 px-3 py-1 rounded-full"
                    >
                        <Lock className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-medium text-emerald-400">Secure & Encrypted</span>
                    </motion.div>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <MenuItem href="#features">Features</MenuItem>
                    <MenuItem href="#security">Security</MenuItem>

                    <div className="relative">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsProductsOpen(!isProductsOpen)}
                            className="flex items-center space-x-1 text-gray-300 hover:text-emerald-400"
                        >
                            <span>Products</span>
                            <ChevronDown className="w-4 h-4" />
                        </motion.button>
                        <DropdownMenu
                            isOpen={isProductsOpen}
                            items={[
                                { href: "#vault", label: "VaultTalk Secure" },
                                { href: "#enterprise", label: "Enterprise Solutions" },
                                { href: "#api", label: "API Access" }
                            ]}
                        />
                    </div>

                    <MenuItem href="#docs" external>Documentation</MenuItem>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"
                    >
                        Launch App
                    </motion.button>
                </nav>

                {/* Mobile Menu Button */}
                <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="md:hidden text-gray-300"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg"
                    >
                        <div className="p-4 space-y-4">
                            <Link href="#features" className="block text-gray-300 hover:text-emerald-400">Features</Link>
                            <Link href="#security" className="block text-gray-300 hover:text-emerald-400">Security</Link>
                            <Link href="#vault" className="block text-gray-300 hover:text-emerald-400">VaultTalk Secure</Link>
                            <Link href="#enterprise" className="block text-gray-300 hover:text-emerald-400">Enterprise Solutions</Link>
                            <Link href="#api" className="block text-gray-300 hover:text-emerald-400">API Access</Link>
                            <Link href="#docs" className="block text-gray-300 hover:text-emerald-400">Documentation</Link>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
