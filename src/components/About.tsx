import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-primary text-secondary">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">

                {/* Left Side: Typography */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <span className="text-accent uppercase tracking-[0.2em] text-xs font-semibold">Our Philosophy</span>
                    <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                        Crafting the <br /><span className="italic">Perfect Artifact</span>
                    </h2>
                    <p className="text-secondary/70 font-light leading-relaxed max-w-md">
                        We don't just build websites. We architect conversion engines disguised as digital art.
                        Every pixel is intentionally placed to scream premium, establishing instant trust the moment a user lands.
                    </p>
                    <p className="text-secondary/70 font-light leading-relaxed max-w-md">
                        Our strict zero-bug policy ensures that form never sacrifices function.
                        Speed, aesthetics, and bulletproof functionality.
                    </p>
                </motion.div>

                {/* Right Side: Image Placeholder Grid */}
                <div className="grid grid-cols-2 gap-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full aspect-[4/5] bg-secondary/10 rounded-xl flex items-center justify-center text-sm text-secondary/30"
                    >
                        [AI Placeholder 1]
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="w-full aspect-[3/4] bg-secondary/5 rounded-xl flex items-center justify-center text-sm text-secondary/30 mt-4 md:mt-8"
                    >
                        [AI Placeholder 2]
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default About;
