const texts = {
  es: {
    rights: "Todos los derechos reservados.",
  },
  en: {
    rights: "All rights reserved.",
  },
};

const Footer = ({ lang }) => {
  const year = new Date().getFullYear();
  const t = texts[lang];

  return (
    <footer className="border-t border-slate-800 py-6 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center text-sm text-slate-400">
        © {year} Franco Sassi · {t.rights}
      </div>
    </footer>
  );
};

export default Footer;