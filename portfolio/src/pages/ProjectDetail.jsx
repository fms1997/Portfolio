import { useParams } from "react-router-dom";
import { projects } from "../data/projects";

const texts = {
  es: {
    notFound: "Proyecto no encontrado",
    technologies: "Tecnologías",
    features: "Funciones",
    viewProject: "Ver proyecto",
    github: "GitHub",
  },
  en: {
    notFound: "Project not found",
    technologies: "Technologies",
    features: "Features",
    viewProject: "View project",
    github: "GitHub",
  },
};

const ProjectDetail = ({ lang = "es" }) => {
  const { slug } = useParams();
  const currentLang = texts[lang] ? lang : "es";
  const t = texts[currentLang];

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-4">{t.notFound}</div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <img
        src={project.image}
        alt={project.title[currentLang]}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-2">
        {project.title[currentLang]}
      </h1>

      <p className="text-gray-500 mb-4">
        {project.type[currentLang]}
      </p>

      <p className="mb-6">
        {project.longDescription[currentLang]}
      </p>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t.technologies}</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm text-slate-900"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">{t.features}</h2>
        <ul className="list-disc list-inside space-y-1">
          {project.features[currentLang].map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            {t.viewProject}
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            {t.github}
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;