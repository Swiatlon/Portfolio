import { Navbar } from "./components/shared/navbar/navbar";
import About from "./components/views/about/About";
import Header from "./components/views/header/Header";

export default function Home() {
  return (
    <div className="max-w-full mx-auto">
      <Navbar />
      <main>
        <Header />
        <About />
      </main>
    </div>
  );
}
