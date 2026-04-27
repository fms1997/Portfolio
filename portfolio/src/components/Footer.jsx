// src/components/Footer.jsx

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-6 text-center text-slate-500">
      <p>
        © {new Date().getFullYear()} Franco Sassi. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;