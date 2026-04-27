// // src/App.jsx

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Technologies from "./components/Technologies";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Technologies />
//         <Projects />
//         <Contact />
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default App;



import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={theme}>
      <Navbar theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyecto/:slug" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;