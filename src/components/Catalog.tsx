import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const products = [
    { id: 1, name: "The Standard MVP", desc: "Landing, Form, Footer", price: "$499" },
    { id: 2, name: "Advanced Business", desc: "Multi-page, CRM Sync", price: "$1,299" },
    { id: 3, name: "Full E-Commerce", desc: "Carts, Payments, Inventory", price: "$3,499" }
];

const Catalog = () => {
    return (
        <section id="catalog" className="py-24 md:py-32 bg-secondary text-primary">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">The Catalog</span>
                        <h2 className="text-4xl md:text-5xl font-serif">Signature <span className="italic">Services</span></h2>
                    </motion.div>

                    <motion.button
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center gap-2 text-sm uppercase tracking-wider font-medium hover:text-accent transition-colors"
                    >
                        View Full List <ArrowRight size={16} />
                    </motion.button>
                </div>

                {/* Masonry-style Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {products.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="w-full aspect-[4/5] bg-muted/20 mb-6 rounded-lg overflow-hidden relative">
                                {/* Abstract Placeholder background */}
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/0 transition-colors duration-500" />
                                <div className="absolute inset-0 flex items-center justify-center text-primary/30 font-serif italic text-xl">
                                    [Product Image]
                                </div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-serif mb-1">{item.name}</h3>
                                    <p className="text-sm text-muted">{item.desc}</p>
                                </div>
                                <span className="text-accent font-medium">{item.price}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Catalog;
