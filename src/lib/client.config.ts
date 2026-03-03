// ============================================================
// CLIENT CONFIG — Fuente única de verdad
// Editar SOLO este archivo para cada nuevo cliente.
// Todos los componentes importan desde aquí.
// ============================================================

export const CLIENT = {

    // --- MARCA ---
    brandName: "Nombre del Cliente",
    tagline: "El tagline del negocio.",

    // --- CONTACTO ---
    // Formato: código de país + número sin espacios ni guiones
    // Ejemplo Argentina: "5492641234567"
    whatsappPhone: "REEMPLAZAR_CON_NUMERO",
    address: "Ciudad, País",
    email: "contacto@negocio.com",
    hours: "Lun-Vie 9:00-18:00",

    // --- NAVEGACIÓN ---
    // El orden importa: debe coincidir con el orden de las secciones en la página
    navLinks: [
        { href: "#about", label: "Nosotros" },
        { href: "#catalog", label: "Catálogo" },
        { href: "#order", label: "Encargar" },
    ],

    // --- PRODUCTOS ---
    // Una sola definición → usada en Catalog.tsx Y en OrderForm.tsx
    // - price: número (sin símbolo de moneda) para cálculos automáticos
    // - image: ruta local relativa a /public (nunca URL externa)
    products: [
        {
            id: "1",
            name: "Producto 1",
            desc: "Descripción breve del producto.",
            price: 1000,
            image: "/images/products/product-1.jpg",
        },
        {
            id: "2",
            name: "Producto 2",
            desc: "Descripción breve del producto.",
            price: 1500,
            image: "/images/products/product-2.jpg",
        },
        {
            id: "3",
            name: "Producto 3",
            desc: "Descripción breve del producto.",
            price: 2000,
            image: "/images/products/product-3.jpg",
        },
    ],

    // --- HERO ---
    heroTagline: "Industria · Ciudad",
    heroCTA: { label: "Ver Catálogo", href: "#catalog" },

    // --- SEO ---
    // Copiar manualmente a index.html antes del deploy
    pageTitle: "Nombre del Cliente | Ciudad",
    metaDescription: "Descripción del negocio. Servicios o productos principales. Ciudad.",

    // --- MONEDA ---
    currency: "$",

} as const;

export type Product = (typeof CLIENT.products)[number];
