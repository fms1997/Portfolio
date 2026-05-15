const texts = {
  es: {
    title: "Sobre mí",
    intro:
      "Soy desarrollador Full Stack con experiencia creando sistemas empresariales, plataformas e-commerce, aplicaciones móviles, dashboards, APIs REST y asistentes con IA. Trabajo con React, Next.js, React Native, Angular, TailwindCSS, ASP.NET Core, Spring Boot, Entity Framework, PostgreSQL y SQL Server. Me enfoco en construir productos ordenados, escalables y funcionales, aplicando buenas prácticas de arquitectura, seguridad, integración con APIs externas, autenticación, manejo de estado, métricas y automatización de procesos.",
    cards: [
      {
        title: "Frontend",
        desc: "Interfaces modernas y responsive con React, Next.js, Angular y TailwindCSS; formularios dinámicos, rutas protegidas, dashboards, filtros avanzados y manejo de estado.",
      },
      {
        title: "Backend",
        desc: "APIs REST con ASP.NET Core y Spring Boot, servicios, controladores, DTOs, validaciones, autenticación JWT, integración con bases de datos y APIs externas.",
      },
      {
        title: "Sistemas reales",
        desc: "Soluciones aplicadas a logística, facturación electrónica, remitos, permisos, clientes, domicilios, e-commerce, gestión de tareas, datos financieros y asistentes RAG con IA local.",
      },
    ],
  },
  en: {
    title: "About me",
    intro:
      "I am a Full Stack developer with experience building business systems, ecommerce platforms, mobile applications, dashboards, REST APIs and AI assistants. I work with React, Next.js, React Native, Angular, TailwindCSS, ASP.NET Core, Spring Boot, Entity Framework, PostgreSQL and SQL Server. I focus on building organized, scalable and functional products while applying best practices in architecture, security, external API integrations, authentication, state management, metrics and process automation.",
    cards: [
      {
        title: "Frontend",
        desc: "Modern responsive interfaces with React, Next.js, Angular and TailwindCSS; dynamic forms, protected routes, dashboards, advanced filters and state management.",
      },
      {
        title: "Backend",
        desc: "REST APIs with ASP.NET Core and Spring Boot, services, controllers, DTOs, validations, JWT authentication, database integration and external APIs.",
      },
      {
        title: "Real systems",
        desc: "Solutions applied to logistics, electronic invoicing, waybills, permissions, customers, addresses, ecommerce, task management, financial data and local AI RAG assistants.",
      },
    ],
  },
};

const About = ({ lang = "es" }) => {
  const currentLang = texts[lang] ? lang : "es";
  const t = texts[currentLang];

  return (
    <section id="sobre-mi" className="py-24 px-6 bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.title}</h2>

        <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">{t.intro}</p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {t.cards.map((card) => (
            <div key={card.title} className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
              <h3 className="font-bold text-blue-400 mb-2">{card.title}</h3>
              <p className="text-slate-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;