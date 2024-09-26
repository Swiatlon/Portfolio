import { Navbar } from "./components/shared/navbar/Navbar";
import About from "./components/views/about/About";
import Contact from "./components/views/contact/Contact";
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
        <Contact />
      </main>
    </div>
  );
}
