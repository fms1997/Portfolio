import { useState } from "react";

const texts = {
  es: {
    title: "Contacto",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "Tu email",
    messagePlaceholder: "Mensaje",
    button: "Enviar mensaje",
    subjectPrefix: "Contacto desde portfolio",
    nameLabel: "Nombre",
    messageLabel: "Mensaje",
  },
  en: {
    title: "Contact",
    namePlaceholder: "Your name",
    emailPlaceholder: "Your email",
    messagePlaceholder: "Message",
    button: "Send message",
    subjectPrefix: "Portfolio contact",
    nameLabel: "Name",
    messageLabel: "Message",
  },
};

const Contact = ({ lang, theme }) => {
  const t = texts[lang];
  const isLight = theme === "light";
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `${t.subjectPrefix} - ${form.name}`;
    const body = `${t.nameLabel}: ${form.name}%0AEmail: ${form.email}%0A%0A${t.messageLabel}:%0A${form.message}`;

    window.location.href = `mailto:tuemail@email.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{t.title}</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-5 text-slate-100"
        >
          <input
            type="text"
            name="name"
            placeholder={t.namePlaceholder}
            value={form.name}
            onChange={handleChange}
            required
            className={`w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-400 ${
              isLight ? "text-slate-100 placeholder:text-slate-400" : "text-white placeholder:text-slate-500"
            }`}
          />

          <input
            type="email"
            name="email"
            placeholder={t.emailPlaceholder}
            value={form.email}
            onChange={handleChange}
            required
            className={`w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-400 ${
              isLight ? "text-slate-100 placeholder:text-slate-400" : "text-white placeholder:text-slate-500"
            }`}
          />

          <textarea
            name="message"
            placeholder={t.messagePlaceholder}
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className={`w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-400 ${
              isLight ? "text-slate-100 placeholder:text-slate-400" : "text-white placeholder:text-slate-500"
            }`}
          />

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-medium transition text-white"
          >
            {t.button}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;