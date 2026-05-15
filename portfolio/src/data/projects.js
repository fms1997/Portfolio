import brioProyectoImage from "../assets/brioproyecto.png";
import ecommerceImage from "../assets/ecommerce.png";
import localMindAiImage from "../assets/localmindAiImage.jpg";
import marketWatchImage from "../assets/marketwatch.jpg";
import taskFlowImage from "../assets/taskflowimage.jpg";
 export const projects = [
  {
    slug: "marketwatch-mvp",
    title: {
      es: "MarketWatch MVP",
      en: "MarketWatch MVP",
    },
    type: {
      es: "Proyecto personal · MVP móvil",
      en: "Personal project · Mobile MVP",
    },
    image: marketWatchImage,
    url: "https://drive.google.com/file/d/1OcUDkys-mIDXsLKNPYsFRaKCyvKsNQhp/view",
        github: "https://github.com/Franco97sassi/MarketWatchMvp.git",
        description: {
      es: "App móvil para buscar acciones, consultar cotizaciones en tiempo real, analizar datos diarios, revisar precios históricos recientes y gestionar símbolos favoritos.",
      en: "Mobile app to search stocks, view real-time quotes, analyze daily market data, check recent historical prices and manage favorite symbols.",
    },
    longDescription: {
      es: "MarketWatch MVP es una aplicación móvil full stack construida para consultar información del mercado financiero. Permite buscar acciones, ver detalles de cotización en tiempo real, analizar datos diarios del mercado, revisar precios históricos recientes y administrar símbolos favoritos. El frontend fue desarrollado con React Native, Expo y TypeScript, mientras que el backend utiliza FastAPI y se integra con Alpha Vantage para obtener datos financieros. El proyecto me ayudó a practicar desarrollo móvil full stack, diseño de APIs REST, integración con APIs externas, manejo de estado, manejo de errores, caching y visualización de datos. Actualmente es un MVP; los próximos pasos incluyen almacenamiento persistente, autenticación, seguimiento de portafolios y despliegue.",
      en: "MarketWatch MVP is a full stack mobile application built to query financial market information. It allows users to search for stocks, view real-time quote details, analyze daily market data, check recent historical prices and manage favorite symbols. The frontend was built with React Native, Expo and TypeScript, while the backend uses FastAPI and integrates with Alpha Vantage to retrieve financial data. This project helped me practice full-stack mobile development, REST API design, external API integration, state management, error handling, caching and data visualization. It is currently an MVP; next steps include persistent storage, authentication, portfolio tracking and deployment.",
    },
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "FastAPI",
      "Alpha Vantage",
      "REST API",
      "Caching",
      "Data Visualization",
    ],
    features: {
      es: [
        "Búsqueda de acciones por símbolo",
        "Detalles de cotización en tiempo real",
        "Análisis de datos diarios del mercado",
        "Consulta de precios históricos recientes",
        "Gestión de símbolos favoritos",
        "Integración backend con Alpha Vantage",
      ],
      en: [
        "Stock search by symbol",
        "Real-time quote details",
        "Daily market data analysis",
        "Recent historical price lookup",
        "Favorite symbol management",
        "Backend integration with Alpha Vantage",
      ],
    },
  },
  {
    slug: "taskflow-mvp",
    title: {
      es: "TaskFlow MVP",
      en: "TaskFlow MVP",
    },
    type: {
      es: "Proyecto personal · Aplicación full stack",
      en: "Personal project · Full stack application",
    },
    image: taskFlowImage,
    url: "https://drive.google.com/file/d/1zPQV_NK-2Dsdu_0LJvb-XOWL4xchSPT_/view",
        github: "https://github.com/Franco97sassi/ProyectoTaskFlow.git",
        description: {
      es: "Aplicación full stack para gestionar proyectos y tareas con autenticación JWT, rutas protegidas, dashboard de métricas y filtros avanzados.",
      en: "Full stack application for managing projects and tasks with JWT authentication, protected routes, metrics dashboard and advanced filters.",
    },
    longDescription: {
      es: "TaskFlow MVP es una aplicación full stack para la gestión de proyectos y tareas, diseñada para ir más allá de un CRUD simple y acercarse a un flujo de trabajo real. El backend está construido con Java, Spring Boot, Spring Data JPA, Spring Security, JWT y PostgreSQL, con Docker Compose para ejecutar la base de datos localmente. La API incluye registro de usuarios, autenticación, endpoints protegidos y operaciones CRUD para usuarios, proyectos y tareas. En el frontend utilicé Angular con rutas protegidas, HTTP Client, formularios reactivos y un interceptor JWT para enviar automáticamente el token de autenticación. Desde la UI, los usuarios pueden iniciar sesión, ver un dashboard, crear y editar tareas, asignarlas a usuarios y proyectos, y filtrarlas por estado, prioridad, usuario asignado y rango de fecha de vencimiento. El dashboard muestra métricas como tareas totales, pendientes, en progreso, completadas, de alta prioridad, vencidas y porcentaje de finalización.",
      en: "TaskFlow MVP is a full stack application for managing projects and tasks, designed to go beyond a simple CRUD and get closer to a real-world workflow. The backend is built with Java, Spring Boot, Spring Data JPA, Spring Security, JWT and PostgreSQL, with Docker Compose to run the database locally. The API includes user registration, authentication, protected endpoints and CRUD operations for users, projects and tasks. On the frontend I used Angular with protected routes, HTTP Client, reactive forms and a JWT interceptor to automatically send the authentication token. From the UI, users can log in, view a dashboard, create and edit tasks, assign them to users and projects, and filter them by status, priority, assigned user and due date range. The dashboard displays metrics such as total tasks, pending tasks, tasks in progress, completed tasks, high-priority tasks, overdue tasks and completion percentage.",
    },
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Spring Security",
      "JWT",
      "PostgreSQL",
      "Docker Compose",
      "Angular",
      "Reactive Forms",
      "HTTP Client",
    ],
    features: {
      es: [
        "Registro, login y endpoints protegidos con JWT",
        "CRUD de usuarios, proyectos y tareas",
        "Rutas protegidas e interceptor JWT en Angular",
        "Creación, edición y asignación de tareas",
        "Filtros por estado, prioridad, usuario asignado y vencimiento",
        "Dashboard con métricas de avance y prioridad",
      ],
      en: [
        "Registration, login and JWT-protected endpoints",
        "CRUD for users, projects and tasks",
        "Protected routes and JWT interceptor in Angular",
        "Task creation, editing and assignment",
        "Filters by status, priority, assigned user and due date",
        "Dashboard with progress and priority metrics",
      ],
    },
  },
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
    github: "https://github.com/Franco97sassi/MVP-IA-Empresarial.git",
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
    github: "https://github.com/Franco97sassi/FullStackEcommerce.git",
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