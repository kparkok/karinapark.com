import { Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import ProjectPage from "../components/ProjectPage";
import Connect from "../components/Connect";

function Portfolio() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Connect />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <div className="pt-[70px]">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
