import Hero from "../components/Hero";
import About from "../components/About";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = ({ lang }) => {
  return (
    <main>
      <Hero lang={lang} />
      <About lang={lang} />
      <Technologies lang={lang} />
      <Projects lang={lang} />
      <Contact lang={lang} />
    </main>
  );
};

export default Home;