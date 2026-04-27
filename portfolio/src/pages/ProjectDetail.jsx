import brioProyectoImage from "../assets/brioproyecto.png";
import ecommerceImage from "../assets/ecommerce.png";

export const projects = [
  {
    slug: "sistema-brio",
    title: {
      es: "Sistema Brio",
      en: "Brio System",
    },
    type: {
      es: "Proyecto empresarial",
      en: "Company project",
    },
    image: brioProyectoImage,
    url: "https://sistema-brio.azurewebsites.net/",
    github: "",
    description: {
      es: "Sistema web empresarial para gestión logística, recepción de envíos, clientes, domicilios, remitos, facturación electrónica AFIP, usuarios y permisos.",
      en: "Enterprise web system for logistics management, shipment reception, customers, delivery addresses, waybills, AFIP electronic invoicing, users and permissions.",
    },
    longDescription: {
      es: "Sistema desarrollado para Expreso Brio, orientado a centralizar procesos operativos de logística y facturación. Incluye recepción de envíos, gestión de clientes origen y destino, domicilios de entrega, generación de remitos, facturación electrónica integrada con AFIP, administración de usuarios, grupos y permisos.",
      en: "System developed for Expreso Brio, focused on centralizing logistics and invoicing operations. It includes shipment reception, customer management, delivery addresses, waybill generation, AFIP electronic invoicing, user administration, groups and permissions.",
    },
    technologies: [
      "React",
      "Redux Toolkit",
      "TailwindCSS",
      "ASP.NET Core",
      "SQL Server",
      "AFIP Web Services",
      "JWT",
    ],
    features: {
      es: [
        "Recepción y gestión de envíos",
        "Búsqueda de clientes por CUIT/DNI",
        "Gestión de domicilios de entrega",
        "Generación e impresión de remitos",
        "Facturación electrónica con AFIP",
        "Administración de usuarios y permisos",
      ],
      en: [
        "Shipment reception and management",
        "Customer search by tax ID/document",
        "Delivery address management",
        "Waybill generation and printing",
        "Electronic invoicing with AFIP",
        "User and permission management",
      ],
    },
  },
  {
    slug: "ecommerce-fullstack",
    title: {
      es: "Ecommerce Full Stack",
      en: "Full Stack Ecommerce",
    },
    type: {
      es: "Proyecto personal",
      en: "Personal project",
    },
    image: ecommerceImage,
    url: "https://fullstack-ecommerce-green-two.vercel.app/",
    github: "",
    description: {
      es: "Proyecto e-commerce full stack con frontend en Next.js, backend en ASP.NET Core, autenticación JWT, catálogo, carrito, checkout, órdenes y panel admin.",
      en: "Full stack ecommerce project with a Next.js frontend, ASP.NET Core backend, JWT authentication, catalog, cart, checkout, orders and admin panel.",
    },
    longDescription: {
      es: "Aplicación e-commerce desarrollada con arquitectura separada entre frontend, backend y base de datos. Incluye autenticación con JWT, catálogo de productos, categorías, carrito autenticado, checkout con validaciones, órdenes de usuario, endpoints de salud y métricas para monitoreo.",
      en: "Ecommerce application built with a separated frontend, backend and database architecture. It includes JWT authentication, product catalog, categories, authenticated cart, checkout validations, user orders, health endpoints and metrics for monitoring.",
    },
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "JWT",
      "Docker",
      "Prometheus",
      "Grafana",
    ],
    features: {
      es: [
        "Registro y login con JWT",
        "Catálogo de productos y categorías",
        "Carrito de compras autenticado",
        "Checkout con validación de stock",
        "Historial y detalle de órdenes",
        "Métricas y healthcheck",
      ],
      en: [
        "Register and login with JWT",
        "Product and category catalog",
        "Authenticated shopping cart",
        "Checkout with stock validation",
        "Order history and details",
        "Metrics and healthcheck",
      ],
    },
  },
];