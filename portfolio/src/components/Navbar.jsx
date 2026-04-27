import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const texts = {
  es: {
    about: "Sobre mí",
    technologies: "Tecnologías",
    projects: "Proyectos",
    contact: "Contacto",
    esLabel: "Español",
    enLabel: "Inglés",
  },
  en: {
    about: "About me",
    technologies: "Technologies",
    projects: "Projects",
    contact: "Contact",
    esLabel: "Spanish",
    enLabel: "English",
  },
};

const Navbar = ({ theme, setTheme, lang, setLang }) => {
  const t = texts[lang];

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur border-b border-slate-800 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-400">
          Franco Sassi
        </Link>

        <div className="hidden md:flex gap-6 text-sm text-slate-300 items-center">
          <a href="/#sobre-mi" className="hover:text-blue-400">{t.about}</a>
          <a href="/#tecnologias" className="hover:text-blue-400">{t.technologies}</a>
          <a href="/#proyectos" className="hover:text-blue-400">{t.projects}</a>
          <a href="/#contacto" className="hover:text-blue-400">{t.contact}</a>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`text-lg transition ${lang === "es" ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
              aria-label={t.esLabel}
              title={t.esLabel}
            >
              🇪🇸
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`text-lg transition ${lang === "en" ? "opacity-100" : "opacity-50 hover:opacity-80"}`}
              aria-label={t.enLabel}
              title={t.enLabel}
            >
              🇬🇧
            </button>
          </div>

          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;