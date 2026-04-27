import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Contacto desde portfolio - ${form.nombre}`;
    const body = `Nombre: ${form.nombre}%0AEmail: ${form.email}%0A%0AMensaje:%0A${form.mensaje}`;

    window.location.href = `mailto:tuemail@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Contacto
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-5"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            required
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Tu email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-400"
          />

          <textarea
            name="mensaje"
            placeholder="Mensaje"
            rows="5"
            value={form.mensaje}
            onChange={handleChange}
            required
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-400"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-medium transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;