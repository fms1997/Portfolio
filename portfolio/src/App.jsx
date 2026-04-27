import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("es");

  return (
    <div className={theme}>
      <Navbar theme={theme} setTheme={setTheme} lang={lang} setLang={setLang} />

      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/proyecto/:slug" element={<ProjectDetail lang={lang} />} />
      </Routes>

      <Footer lang={lang} />
    </div>
  );
}

export default App;