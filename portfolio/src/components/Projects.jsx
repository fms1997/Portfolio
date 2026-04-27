import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="proyectos" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Proyectos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <motion.article
              key={project.slug}
              whileHover={{ y: -8 }}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-blue-400 transition flex flex-col"
            >
              {/* 🔥 Placeholder elegante en lugar de imagen */}
              <div className="h-44 w-full bg-slate-800 rounded-xl flex flex-col items-center justify-center text-center px-4">
                <p className="text-blue-400 font-semibold">
                  {project.title}
                </p>
                <p className="text-xs text-slate-400 mt-2">
                  Vista previa no disponible
                </p>
              </div>

              <div className="flex flex-col flex-1 mt-6">
                <h3 className="text-xl font-bold text-blue-400">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-4">
                  {project.description}
                </p>

                {/* 🔥 Features (esto reemplaza la imagen y vende mejor) */}
                {project.features && (
                  <ul className="mt-4 text-sm text-slate-400 space-y-1">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                )}

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-slate-800 text-slate-300 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-6">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-blue-400 hover:underline"
                    >
                      Código
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-blue-400 hover:underline"
                    >
                      Demo
                    </a>
                  )}
                </div>

                {/* Link a detalle */}
                <Link
                  to={`/proyecto/${project.slug}`}
                  className="mt-4 text-blue-400 hover:underline text-sm"
                >
                  Ver detalle →
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