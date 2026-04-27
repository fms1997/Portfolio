const texts = {
  es: {
    title: "Sobre mí",
    intro:
      "Soy desarrollador Full Stack con experiencia en aplicaciones empresariales usando React, Redux Toolkit, TailwindCSS, ASP.NET Core, Entity Framework y SQL Server. Me enfoco en construir sistemas ordenados, escalables y funcionales, aplicando buenas prácticas tanto en frontend como en backend.",
    cards: [
      {
        title: "Frontend",
        desc: "Interfaces modernas, responsive, formularios dinámicos y manejo de estado.",
      },
      {
        title: "Backend",
        desc: "APIs REST, servicios, controladores, DTOs, validaciones y base de datos.",
      },
      {
        title: "Sistemas reales",
        desc: "Facturación electrónica, remitos, permisos, clientes, domicilios y reportes.",
      },
    ],
  },
  en: {
    title: "About me",
    intro:
      "I am a Full Stack developer with experience in business applications using React, Redux Toolkit, TailwindCSS, ASP.NET Core, Entity Framework and SQL Server. I focus on building organized, scalable and functional systems, applying best practices on both frontend and backend.",
    cards: [
      {
        title: "Frontend",
        desc: "Modern responsive interfaces, dynamic forms and state management.",
      },
      {
        title: "Backend",
        desc: "REST APIs, services, controllers, DTOs, validations and databases.",
      },
      {
        title: "Real systems",
        desc: "Electronic invoicing, waybills, permissions, customers, addresses and reports.",
      },
    ],
  },
};

const About = ({ lang }) => {
  const t = texts[lang];

  return (
    <section id="sobre-mi" className="py-24 px-6 bg-slate-900">
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