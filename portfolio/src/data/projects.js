import brioProyectoImage from "../assets/brioproyecto.png";
import ecommerceImage from "../assets/ecommerce.png";
import localMindAiImage from "../assets/localmindAiImage.jpg";
export const projects = [
    {
    slug: "localmind-ai",
    title: {
      es: "LocalMind AI",
      en: "LocalMind AI",
    },
    type: {
      es: "Proyecto personal",
      en: "Personal project",
    },
    image: localMindAiImage,
    url: "https://drive.google.com/file/d/1Hzu3hVtuKHlRn3VCvtyejhj7dYWb76hi/view",
    github: "",
    description: {
      es: "Asistente de IA local full stack con RAG, carga de documentos, autenticación, herramientas, métricas y despliegue local con Docker.",
      en: "Full stack local AI assistant with RAG, document upload, authentication, tools, metrics and Docker-based local deployment.",
    },
    longDescription: {
      es: "LocalMind AI es un MVP full stack de un asistente de inteligencia artificial local diseñado para consultar documentos personales o técnicos. La aplicación permite registrar e iniciar sesión con autenticación JWT, subir documentos PDF, TXT o Markdown, procesarlos mediante extracción de texto, chunking y embeddings, y realizar preguntas con un flujo RAG que genera respuestas contextuales con fuentes. También incluye chat de IA local mediante Ollama, herramientas simples como calculadora, resumen de texto, extracción de tareas y generación de planes de estudio, historial de conversaciones y un dashboard de métricas para monitorear latencia, uso aproximado de tokens, uso de RAG/herramientas, chunks procesados y errores. El entorno local se ejecuta de forma reproducible con Docker Compose, incluyendo frontend, backend y servicios de IA local.",
      en: "LocalMind AI is a full stack MVP of a local artificial intelligence assistant designed to query personal or technical documents. The application allows users to register and log in with JWT authentication, upload PDF, TXT or Markdown documents, process them through text extraction, chunking and embeddings, and ask questions using a RAG workflow to generate contextual answers with sources. It also includes local AI chat through Ollama, simple tools such as calculator, text summarization, task extraction and study plan generation, conversation history and a metrics dashboard to monitor latency, approximate token usage, RAG/tool usage, processed chunks and errors. The local environment runs reproducibly with Docker Compose, including frontend, backend and local AI services.",
    },
    technologies: [
      "React",
      "Vite",
      "TailwindCSS",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQLite",
      "JWT",
      "RAG",
      "Ollama",
      "Docker Compose",
    ],
    features: {
      es: [
        "Registro e inicio de sesión con JWT",
        "Carga y procesamiento de documentos PDF, TXT y Markdown",
        "Flujo RAG con embeddings, respuestas contextuales y fuentes",
        "Chat de IA local integrado con Ollama",
        "Herramientas para calculadora, resúmenes, tareas y planes de estudio",
        "Historial de conversaciones y dashboard de métricas",
      ],
      en: [
        "Register and login with JWT",
        "PDF, TXT and Markdown document upload and processing",
        "RAG workflow with embeddings, contextual answers and sources",
        "Local AI chat integrated with Ollama",
        "Tools for calculator, summaries, tasks and study plans",
        "Conversation history and metrics dashboard",
      ],
    },
  },
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