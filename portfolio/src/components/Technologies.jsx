// src/components/Technologies.jsx

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

const Technologies = () => {
  return (
    <section id="tecnologias" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Tecnologías
        </h2>

        <div className="flex flex-wrap gap-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-slate-900 border border-slate-700 px-5 py-3 rounded-xl text-slate-300 hover:border-blue-400 hover:text-blue-400 transition"
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