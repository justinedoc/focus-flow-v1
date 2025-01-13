import About from "./About";
import Features from "./Features";
import Hero from "./Hero";
import Navbar from "./ui/Navbar";

function Pages() {
  return (
    <main className="xl:flex xl:justify-center xl:items-center xl:flex-col">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
}

export default Pages;
