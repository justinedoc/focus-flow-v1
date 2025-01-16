import { useEffect } from "react";
import About from "./About";
import Banner from "./Banner";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Navbar from "./ui/Navbar";
import ScrollReveal from "scrollreveal";
import { animations } from "./animations";

function Pages() {
  useEffect(() => {
    const sr = ScrollReveal?.({
      distance: "15px",
      duration: 1000,
      delay: 100,
      reset: false,
    });
    animations(sr);
  }, []);

  return (
    <main className="xl:flex xl:justify-center xl:items-center xl:flex-col">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Pricing />
      <Testimonials />
      <Banner />
      <Footer />
    </main>
  );
}

export default Pages;
