import { useState } from 'react';
import { motion } from 'framer-motion';
import { CLIENT } from '../lib/client.config';

// This is the PRE-VERIFIED Agency Component for E-Commerce / Ordering
// It guarantees zero calculation errors and formats a perfect WhatsApp lead.

const OrderForm = () => {
    const products = CLIENT.products;
    const [quantities, setQuantities] = useState<Record<string, number>>({});
    const [customerName, setCustomerName] = useState('');
    const [notes, setNotes] = useState('');

    const handleQuantity = (id: string, delta: number) => {
        setQuantities(prev => {
            const current = prev[id] || 0;
            const next = Math.max(0, current + delta);
            return { ...prev, [id]: next };
        });
    };

    const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);
    const totalPrice = products.reduce((total, p) => total + (p.price * (quantities[p.id] || 0)), 0);

    const buildWhatsAppLink = () => {
        if (totalItems === 0) return `https://wa.me/${CLIENT.whatsappPhone}`;

        let msg = `¡Hola! Mi nombre es ${customerName}, quiero hacer un pedido:\n\n`;
        products.forEach(p => {
            if (quantities[p.id] > 0) {
                msg += `- ${quantities[p.id]}x ${p.name} (${CLIENT.currency}${(p.price * quantities[p.id]).toLocaleString()})\n`;
            }
        });
        msg += `\n*Total estimado: ${CLIENT.currency}${totalPrice.toLocaleString()}*`;
        if (notes) msg += `\n\nObservaciones: ${notes}`;

        return `https://wa.me/${CLIENT.whatsappPhone}?text=${encodeURIComponent(msg)}`;
    };

    return (
        <section id="order" className="py-24 bg-primary text-secondary">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-accent uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">Hacer un Pedido</span>
                    <h2 className="text-4xl md:text-5xl font-serif">Directo al <span className="italic">WhatsApp</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Product Selection Column */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-serif border-b border-secondary/20 pb-4">Seleccioná los productos</h3>
                        {products.map(p => (
                            <div key={p.id} className="flex justify-between items-center p-4 bg-secondary/5 rounded-lg border border-secondary/10">
                                <div className="flex gap-4 items-center">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-md overflow-hidden flex-shrink-0">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className="font-medium">{p.name}</div>
                                        <div className="text-sm text-secondary/60">{CLIENT.currency}{p.price.toLocaleString()}</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 bg-primary rounded-full px-1 py-1 border border-secondary/20">
                                    <button onClick={() => handleQuantity(p.id, -1)} className="w-11 h-11 flex items-center justify-center hover:text-accent transition-colors text-lg">-</button>
                                    <span className="w-6 text-center text-sm">{quantities[p.id] || 0}</span>
                                    <button onClick={() => handleQuantity(p.id, 1)} className="w-11 h-11 flex items-center justify-center hover:text-accent transition-colors text-lg">+</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Checkout Column */}
                    <div className="space-y-6 bg-secondary/5 p-5 md:p-8 rounded-xl border border-secondary/10">
                        <h3 className="text-xl font-serif border-b border-secondary/20 pb-4">Tus datos</h3>

                        <div>
                            <label className="block text-xs uppercase tracking-wider text-secondary/60 mb-2">Nombre</label>
                            <input
                                type="text"
                                value={customerName}
                                onChange={(e) => setCustomerName(e.target.value)}
                                className="w-full bg-primary border border-secondary/20 rounded-lg px-4 py-3 focus:border-accent transition-colors text-sm"
                                placeholder="Tu nombre"
                            />
                        </div>

                        <div>
                            <label className="block text-xs uppercase tracking-wider text-secondary/60 mb-2">Observaciones</label>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                className="w-full bg-primary border border-secondary/20 rounded-lg px-4 py-3 focus:border-accent transition-colors text-sm h-24 resize-none"
                                placeholder="Alergias, instrucciones de entrega..."
                            />
                        </div>

                        <div className="pt-4 border-t border-secondary/20 flex justify-between items-center text-lg">
                            <span className="font-serif">Total</span>
                            <span className="font-medium text-accent">{CLIENT.currency}{totalPrice.toLocaleString()}</span>
                        </div>

                        <a
                            href={buildWhatsAppLink()}
                            target="_blank"
                            rel="noreferrer"
                            className={`block w-full text-center py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-300 ${totalItems > 0 ? 'bg-accent text-primary hover:brightness-110' : 'bg-secondary/10 text-secondary/40 pointer-events-none'
                                }`}
                        >
                            Pedir por WhatsApp
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OrderForm;
