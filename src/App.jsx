import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Experience from "./components/Experience";
import Competencies from "./components/Competencies";
import Tools from "./components/Tools";
import Education from "./components/Education";
import Connect from "./components/Connect";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className="relative min-h-screen overflow-x-clip"
      style={{ background: "rgb(254, 252, 232)" }}
    >
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Experience />
        <Competencies />
        <Tools />
        <Education />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
