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
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center gap-4">
          <Link to="/" className="text-lg sm:text-xl font-bold text-blue-400 whitespace-nowrap">
            Franco Sassi
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
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

            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300 mt-3 sm:mt-4">
          <a href="/#sobre-mi" className="hover:text-blue-400">{t.about}</a>
          <a href="/#tecnologias" className="hover:text-blue-400">{t.technologies}</a>
          <a href="/#proyectos" className="hover:text-blue-400">{t.projects}</a>
          <a href="/#contacto" className="hover:text-blue-400">{t.contact}</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;