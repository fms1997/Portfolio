import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const texts = {
  es: {
    title: "Proyectos",
    previewUnavailable: "Vista previa no disponible",
    code: "Código",
    demo: "Demo",
    detail: "Ver detalle →",
  },
  en: {
    title: "Projects",
    previewUnavailable: "Preview not available",
    code: "Code",
    demo: "Demo",
    detail: "View details →",
  },
};

const Projects = ({ lang }) => {
  const t = texts[lang];

  return (
    <section id="proyectos" className="py-24 px-4 sm:px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">{t.title}</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.article
              key={project.slug}
              whileHover={{ y: -8 }}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-6 hover:border-blue-400 transition flex flex-col"
            >
              <div className="h-44 sm:h-48 w-full bg-slate-800 rounded-xl overflow-hidden flex items-center justify-center text-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title[lang]}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="px-4">
                    <p className="text-blue-400 font-semibold">{project.title[lang]}</p>
                    <p className="text-xs text-slate-400 mt-2">{t.previewUnavailable}</p>
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-1 mt-6">
                <h3 className="text-xl font-bold text-blue-400">{project.title[lang]}</h3>

                <p className="text-slate-400 mt-4 text-sm sm:text-base">{project.description[lang]}</p>

                {project.features && (
                  <ul className="mt-4 text-sm text-slate-400 space-y-1">
                    {project.features[lang].slice(0, 3).map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-x-4 gap-y-2 mt-6">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-sm text-blue-400 hover:underline">
                      {t.code}
                    </a>
                  )}

                  {(project.demo || project.url) && (
                    <a href={project.demo || project.url} target="_blank" rel="noreferrer" className="text-sm text-blue-400 hover:underline">
                      {t.demo}
                    </a>
                  )}
                </div>

                <Link to={`/proyecto/${project.slug}`} className="mt-4 text-blue-400 hover:underline text-sm">
                  {t.detail}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;