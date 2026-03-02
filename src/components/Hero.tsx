import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] w-full flex items-center justify-center bg-secondary px-6 overflow-hidden">
            {/* Absolute Header Safety margin: using pt-32 to guarantee the Navbar never collides with Hero content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto pt-32 flex flex-col items-center">

                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-accent text-sm tracking-[0.3em] uppercase mb-6"
                >
                    Elevating Digital Experiences
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif text-primary mb-8 leading-tight"
                >
                    We Build <br /><span className="italic text-primary/80">Premium</span> Products
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-lg text-muted max-w-xl mx-auto mb-12 font-light leading-relaxed"
                >
                    The master template designed to instantly scaffold high-converting, visually perfect
                    landing pages for clients. No CSS glitches, no absolute position collisions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    {/* Using SAFE CSS strictly (opacity/brightness instead of origin-left scale-h-0) */}
                    <button className="bg-primary text-secondary px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:brightness-110 transition-all duration-300">
                        View Catalog
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
