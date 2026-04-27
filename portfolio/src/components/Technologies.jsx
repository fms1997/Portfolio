const technologies = [
  "React",
  "JavaScript",
  "TailwindCSS",
  "Redux Toolkit",
  "React Router",
  "React Hook Form",
  "ASP.NET Core",
  "C#",
  "Entity Framework",
  "SQL Server",
  "APIs REST",
  "JWT",
  "Swagger",
  "Git",
  "GitHub",
  "AFIP Web Services",
];

const titles = {
  es: "Tecnologías",
  en: "Technologies",
};

const Technologies = ({ lang, theme }) => {
  const isLight = theme === "light";
  return (
    <section id="tecnologias" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{titles[lang]}</h2>

        <div className="flex flex-wrap gap-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className={`bg-slate-900 border border-slate-700 px-5 py-3 rounded-xl hover:border-blue-400 hover:text-blue-400 transition ${
                isLight ? "text-slate-200" : "text-slate-300"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;