import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const texts = {
  es: {
    about: "Sobre mí",
    technologies: "Tecnologías",
    projects: "Proyectos",
    contact: "Contacto",
    esLabel: "Cambiar a español",
    enLabel: "Cambiar a inglés",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  en: {
    about: "About me",
    technologies: "Technologies",
    projects: "Projects",
    contact: "Contact",
    esLabel: "Switch to Spanish",
    enLabel: "Switch to English",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
};

const navItems = [
  { key: "about", href: "/#sobre-mi" },
  { key: "technologies", href: "/#tecnologias" },
  { key: "projects", href: "/#proyectos" },
  { key: "contact", href: "/#contacto" },
];

const Navbar = ({ theme, setTheme, lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = texts[lang];

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/85 backdrop-blur border-b border-slate-800 z-50">
      <nav className="relative max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            to="/"
            className="text-lg sm:text-xl font-bold text-blue-400 whitespace-nowrap shrink-0"
            onClick={closeMenu}
          >
            Franco Sassi
          </Link>

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setLang("es")}
              className={`h-9 w-9 grid place-items-center rounded-md text-xl transition ${
                lang === "es"
                  ? "bg-slate-800 text-white"
                  : "text-white/70 hover:text-white hover:bg-slate-800/70"
              }`}
              aria-label={t.esLabel}
              title={t.esLabel}
            >
              🇪🇸
            </button>

            <button
              type="button"
              onClick={() => setLang("en")}
              className={`h-9 w-9 grid place-items-center rounded-md text-xl transition ${
                lang === "en"
                  ? "bg-slate-800 text-white"
                  : "text-white/70 hover:text-white hover:bg-slate-800/70"
              }`}
              aria-label={t.enLabel}
              title={t.enLabel}
            >
              🇬🇧
            </button>

            <ThemeToggle theme={theme} setTheme={setTheme} />

            <button
              type="button"
              className="sm:hidden h-9 w-9 grid place-items-center rounded-md border border-slate-700 text-slate-200 hover:border-blue-400 hover:text-blue-400 transition"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label={isMenuOpen ? t.closeMenu : t.openMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-links"
            >
              <span className="sr-only">{isMenuOpen ? t.closeMenu : t.openMenu}</span>
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-5 text-sm text-slate-300 mt-4">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className="hover:text-blue-400 transition-colors">
              {t[item.key]}
            </a>
          ))}
        </div>

        {isMenuOpen && (
          <div
            id="mobile-nav-links"
            className="sm:hidden absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-xl border border-slate-700 bg-slate-900/95 shadow-lg p-3"
          >
            <div className="flex flex-col gap-3 text-sm text-slate-200">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-md px-2 py-1.5 hover:bg-slate-800 hover:text-blue-300 transition-colors"
                >
                  {t[item.key]}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;