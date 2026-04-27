import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import cv from "../assets/cv-franco-sassi.pdf";

const texts = {
  es: {
    role: "Desarrollador Full Stack",
    greeting: "Hola, soy",
    summary:
      "Desarrollo sistemas web modernos con React, ASP.NET Core y SQL Server. Me especializo en soluciones empresariales, facturación electrónica, logística, APIs REST y automatización de procesos.",
    viewProjects: "Ver proyectos",
    downloadCv: "Descargar CV",
  },
  en: {
    role: "Full Stack Developer",
    greeting: "Hi, I'm",
    summary:
      "I build modern web systems with React, ASP.NET Core and SQL Server. I specialize in business solutions, electronic invoicing, logistics, REST APIs and process automation.",
    viewProjects: "View projects",
    downloadCv: "Download CV",
  },
};

const Hero = ({ lang, theme }) => {
  const t = texts[lang];
  const isLight = theme === "light";

  return (
    <section id="inicio" className="min-h-screen flex items-center pt-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <p className={isLight ? "mb-4 font-medium text-blue-700" : "mb-4 font-medium text-blue-400"}>
            {t.role}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {t.greeting}{" "}
            <span className={isLight ? "text-black" : "text-blue-400"}>Franco Sassi</span>
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
              href={cv}
              download
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
          <p className="text-slate-400 mt-2">React · ASP.NET Core · SQL Server</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;