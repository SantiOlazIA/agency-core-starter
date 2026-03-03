import { CLIENT } from '../lib/client.config';

const Footer = () => {
    return (
        <footer className="bg-secondary text-primary py-12 border-t border-primary/10">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                <div className="col-span-1 md:col-span-2 space-y-4">
                    <div className="font-serif text-2xl tracking-wider text-primary">
                        {CLIENT.brandName}
                    </div>
                    <p className="text-sm text-muted max-w-sm leading-relaxed">
                        {CLIENT.tagline}
                    </p>
                </div>

                <div>
                    <h4 className="uppercase tracking-widest text-xs font-semibold mb-4 text-primary bg-primary/5 inline-block px-2 py-1 rounded">Links</h4>
                    <ul className="space-y-2 text-sm text-muted">
                        {CLIENT.navLinks.map(link => (
                            <li key={link.href}>
                                <a href={link.href} className="hover:text-accent transition-colors">{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="uppercase tracking-widest text-xs font-semibold mb-4 text-primary bg-primary/5 inline-block px-2 py-1 rounded">Contacto</h4>
                    <ul className="space-y-2 text-sm text-muted">
                        <li>{CLIENT.email}</li>
                        <li>{CLIENT.address}</li>
                        <li>{CLIENT.hours}</li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-primary/10 text-xs text-muted flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} {CLIENT.brandName}. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
