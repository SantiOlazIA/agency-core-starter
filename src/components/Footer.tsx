
const Footer = () => {
    return (
        <footer className="bg-secondary text-primary py-12 border-t border-primary/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                <div className="col-span-1 md:col-span-2 space-y-4">
                    <div className="font-serif text-2xl tracking-wider text-primary">
                        AGENCY <span className="text-accent italic">STUDIO</span>
                    </div>
                    <p className="text-sm text-muted max-w-sm leading-relaxed">
                        Elevating digital experiences with premium aesthetics and bulletproof engineering.
                        Crafted with precision for brands that demand excellence.
                    </p>
                </div>

                <div>
                    <h4 className="uppercase tracking-widest text-xs font-semibold mb-4 text-primary bg-primary/5 inline-block px-2 py-1 rounded">Links</h4>
                    <ul className="space-y-2 text-sm text-muted">
                        <li><a href="#about" className="hover:text-accent transition-colors">Philosophy</a></li>
                        <li><a href="#catalog" className="hover:text-accent transition-colors">Catalog</a></li>
                        <li><a href="#order" className="hover:text-accent transition-colors">Order Now</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="uppercase tracking-widest text-xs font-semibold mb-4 text-primary bg-primary/5 inline-block px-2 py-1 rounded">Contact</h4>
                    <ul className="space-y-2 text-sm text-muted">
                        <li>contact@agencystudio.local</li>
                        <li>+1 (555) 123-4567</li>
                        <li>Los Angeles, CA</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-primary/10 text-xs text-muted flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} Agency Studio. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
