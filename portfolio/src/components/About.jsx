// src/components/About.jsx

const About = () => {
  return (
    <section id="sobre-mi" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Sobre mí
        </h2>

        <p className="text-slate-300 text-lg leading-relaxed max-w-4xl">
          Soy desarrollador Full Stack con experiencia en aplicaciones
          empresariales usando React, Redux Toolkit, TailwindCSS, ASP.NET Core,
          Entity Framework y SQL Server. Me enfoco en construir sistemas
          ordenados, escalables y funcionales, aplicando buenas prácticas tanto
          en frontend como en backend.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
            <h3 className="font-bold text-blue-400 mb-2">Frontend</h3>
            <p className="text-slate-400">
              Interfaces modernas, responsive, formularios dinámicos y manejo de estado.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
            <h3 className="font-bold text-blue-400 mb-2">Backend</h3>
            <p className="text-slate-400">
              APIs REST, servicios, controladores, DTOs, validaciones y base de datos.
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl">
            <h3 className="font-bold text-blue-400 mb-2">Sistemas reales</h3>
            <p className="text-slate-400">
              Facturación electrónica, remitos, permisos, clientes, domicilios y reportes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;