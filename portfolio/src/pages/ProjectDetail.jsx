import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const texts = {
  es: {
    notFound: "Proyecto no encontrado",
    backHome: "Volver al inicio",
    back: "← Volver",
    features: "Funcionalidades principales",
    technologies: "Tecnologías utilizadas",
    viewCode: "Ver código",
    viewDemo: "Ver demo",
  },
  en: {
    notFound: "Project not found",
    backHome: "Back to home",
    back: "← Back",
    features: "Main features",
    technologies: "Technologies used",
    viewCode: "View code",
    viewDemo: "View demo",
  },
};

const ProjectDetail = ({ lang }) => {
  const { slug } = useParams();
  const t = texts[lang];

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen pt-32 px-6 text-center">
        <h1 className="text-3xl font-bold">{t.notFound}</h1>
        <Link to="/" className="text-blue-400 mt-6 inline-block">
          {t.backHome}
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 px-6 pb-24">
      <div className="max-w-5xl mx-auto">
        <Link to="/" className="text-blue-400 hover:underline">
          {t.back}
        </Link>

        {project.image && (
          <img
            src={project.image}
            alt={project.title[lang]}
            className="w-full h-80 object-cover rounded-3xl mt-8 border border-slate-800"
          />
        )}

        <h1 className="text-4xl md:text-5xl font-bold mt-10">{project.title[lang]}</h1>

        <p className="text-slate-300 text-lg mt-6 leading-relaxed">{project.longDescription[lang]}</p>

        <h2 className="text-2xl font-bold mt-10 text-blue-400">{t.features}</h2>

        <ul className="grid md:grid-cols-2 gap-4 mt-6">
          {project.features[lang].map((feature) => (
            <li key={feature} className="bg-slate-900 border border-slate-800 rounded-xl p-4">
              {feature}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-10 text-blue-400">{t.technologies}</h2>

        <div className="flex flex-wrap gap-3 mt-6">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-xl">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-10">
          <a href={project.github} className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl">
            {t.viewCode}
          </a>

          <a href={project.demo || project.url} className="border border-slate-600 hover:border-blue-400 px-6 py-3 rounded-xl">
            {t.viewDemo}
          </a>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;