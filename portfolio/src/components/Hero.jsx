import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import cvSpanish from "../assets/cv-franco-sassi.pdf";
import cvEnglish from "../assets/CV-FrancoSassiEnglish.pdf";

const texts = {
  es: {
    role: "Desarrollador Full Stack",
    greeting: "Hola, soy",
    summary:
      "Desarrollo soluciones full stack modernas: sistemas empresariales, apps móviles, e-commerce, dashboards y asistentes con IA. Trabajo con React, Next.js, React Native, Angular, ASP.NET Core, Spring Boot, SQL Server y PostgreSQL para crear productos escalables, claros y orientados a procesos reales.",
    viewProjects: "Ver proyectos",
    downloadCv: "Descargar CV",
  },
  en: {
    role: "Full Stack Developer",
    greeting: "Hi, I'm",
    summary:
      "I build modern full-stack solutions: business systems, mobile apps, ecommerce platforms, dashboards and AI assistants. I work with React, Next.js, React Native, Angular, ASP.NET Core, Spring Boot, SQL Server and PostgreSQL to create scalable, clear products focused on real workflows.",
    viewProjects: "View projects",
    downloadCv: "Download CV",
  },
};

const cvFiles = {
  es: { file: cvSpanish, downloadName: "CV-FrancoSassi.pdf" },
  en: { file: cvEnglish, downloadName: "CV-FrancoSassiEnglish.pdf" },
};

const highlightedStack = ["React", "Next.js", "React Native", "ASP.NET Core", "Spring Boot"];

const Hero = ({ lang = "es", theme }) => {
  const currentLang = texts[lang] ? lang : "es";
  const t = texts[currentLang];
  const selectedCv = cvFiles[currentLang];
  const isLight = theme === "light";

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <p className={isLight ? "mb-4 font-medium text-blue-700" : "mb-4 font-medium text-blue-400"}>
            {t.role}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {t.greeting} <span className={isLight ? "text-black" : "text-blue-400"}>Franco Sassi</span>
          </h1>

          <p
            className={
              isLight
                ? "mt-6 text-lg leading-relaxed text-black"
                : "mt-6 text-lg leading-relaxed text-slate-300"
            }
          >
            {t.summary}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#proyectos"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-medium transition"
            >
              {t.viewProjects}
            </a>

            <a
              href={selectedCv.file}
              download={selectedCv.downloadName}
              className={`px-6 py-3 rounded-xl font-medium transition ${
                isLight
                  ? "border border-slate-500 hover:border-blue-400"
                  : "border border-slate-600 hover:border-blue-400"
              }`}
            >
              {t.downloadCv}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl text-center text-slate-100"
        >
          <img
            src={profile}
            alt="Franco Sassi"
            className="w-44 h-44 mx-auto rounded-full object-cover border-4 border-blue-400"
          />

          <h2 className="text-2xl font-bold mt-6">Franco Sassi</h2>
          <p className="text-slate-400 mt-2">{highlightedStack.join(" · ")}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;