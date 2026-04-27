import { useParams } from "react-router-dom";
import { projects } from "../data/projects"; // ajustá la ruta si es distinta

const ProjectDetail = () => {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="p-4">Proyecto no encontrado</div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Imagen */}
      <img
        src={project.image}
        alt={project.title.es}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      {/* Título */}
      <h1 className="text-3xl font-bold mb-2">
        {project.title.es}
      </h1>

      {/* Tipo */}
      <p className="text-gray-500 mb-4">
        {project.type.es}
      </p>

      {/* Descripción larga */}
      <p className="mb-6">
        {project.longDescription.es}
      </p>

      {/* Tecnologías */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Tecnologías</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Funciones</h2>
        <ul className="list-disc list-inside space-y-1">
          {project.features.es.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Links */}
      <div className="flex gap-4">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Ver proyecto
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;