import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar = ({ theme, setTheme }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur border-b border-slate-800 z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-400">
          Franco Sassi
        </Link>

        <div className="hidden md:flex gap-6 text-sm text-slate-300 items-center">
          <a href="/#sobre-mi" className="hover:text-blue-400">Sobre mí</a>
          <a href="/#tecnologias" className="hover:text-blue-400">Tecnologías</a>
          <a href="/#proyectos" className="hover:text-blue-400">Proyectos</a>
          <a href="/#contacto" className="hover:text-blue-400">Contacto</a>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;