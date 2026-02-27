import { motion } from 'framer-motion';

const Navbar = () => {
    return (
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
                <a href="#about" className="hover:text-accent transition-colors">Philosophy</a>
                <a href="#catalog" className="hover:text-accent transition-colors">Catalog</a>
                <a href="#order" className="hover:text-accent transition-colors">Order</a>
            </nav>

            {/* Minimalist Mobile Menu Placeholder */}
            <button className="md:hidden text-primary hover:text-accent transition-colors">
                Menu
            </button>
        </motion.header>
    );
};

export default Navbar;
