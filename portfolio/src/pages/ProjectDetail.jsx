import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen pt-32 px-6 text-center">
        <h1 className="text-3xl font-bold">Proyecto no encontrado</h1>
        <Link to="/" className="text-blue-400 mt-6 inline-block">
          Volver al inicio
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 px-6 pb-24">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="text-blue-400 hover:underline">
          ← Volver
        </Link>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover rounded-3xl mt-8 border border-slate-800"
        />

        <h1 className="text-4xl md:text-5xl font-bold mt-10">
          {project.title}
        </h1>

        <p className="text-slate-300 text-lg mt-6 leading-relaxed">
          {project.longDescription}
        </p>

        <h2 className="text-2xl font-bold mt-10 text-blue-400">
          Funcionalidades principales
        </h2>

        <ul className="grid md:grid-cols-2 gap-4 mt-6">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="bg-slate-900 border border-slate-800 rounded-xl p-4"
            >
              {feature}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-10 text-blue-400">
          Tecnologías utilizadas
        </h2>

        <div className="flex flex-wrap gap-3 mt-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-10">
          <a
            href={project.github}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl"
          >
            Ver código
          </a>

          <a
            href={project.demo}
            className="border border-slate-600 hover:border-blue-400 px-6 py-3 rounded-xl"
          >
            Ver demo
          </a>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;