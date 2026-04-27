import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = ({ lang, theme }) => {
  return (
    <main>
      <Hero lang={lang} theme={theme} />
      <About lang={lang} />
      <Technologies lang={lang} theme={theme} />
      <Projects lang={lang} />
      <Contact lang={lang} theme={theme} />
    </main>
  );
};

export default Home;