import Footer from "./components/shared/footer/footer";
import { Navbar } from "./components/shared/navbar/Navbar";
import About from "./components/views/about/About";
import Contact from "./components/views/contact/Contact";
import Experience from "./components/views/experience/Experience";
import Header from "./components/views/header/Header";
import { Projects } from "./components/views/projects/Projects";

export default function Home() {
  return (
    <div className="max-w-full mx-auto">
      <Navbar />
      <main>
        <Header />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
