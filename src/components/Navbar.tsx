import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { href: '#about', label: 'Philosophy' },
        { href: '#catalog', label: 'Catalog' },
        { href: '#order', label: 'Order' },
    ];

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                className="absolute top-0 w-full z-50 px-6 py-8 flex justify-between items-center max-w-7xl mx-auto left-0 right-0"
            >
                {/* Brand logo space - DO NOT bunch text too close */}
                <div className="font-serif text-2xl tracking-wider text-primary">
                    AGENCY <span className="text-accent italic">STUDIO</span>
                </div>

                <nav className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-primary/70">
                    {links.map(link => (
                        <a key={link.href} href={link.href} className="hover:text-accent transition-colors">{link.label}</a>
                    ))}
                </nav>

                <button
                    onClick={() => setIsOpen(true)}
                    className="md:hidden text-primary hover:text-accent transition-colors p-2"
                    aria-label="Open menu"
                >
                    <Menu size={24} />
                </button>
            </motion.header>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-[60] bg-primary/80 backdrop-blur-sm md:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                            className="fixed top-0 right-0 z-[70] h-full w-3/4 max-w-xs bg-secondary flex flex-col px-8 py-10 md:hidden"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="self-end text-primary hover:text-accent transition-colors mb-12 p-2"
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>

                            <nav className="flex flex-col gap-8">
                                {links.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.08 }}
                                        className="text-2xl font-serif text-primary hover:text-accent transition-colors"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </nav>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
