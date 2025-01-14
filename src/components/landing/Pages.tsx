import About from "./About";
import Banner from "./Banner";
import Features from "./Features";
import Footer from "./Footer";
import Hero from "./Hero";
import Testimonials from "./Testimonials";
import Navbar from "./ui/Navbar";

function Pages() {
  return (
    <main className="xl:flex xl:justify-center xl:items-center xl:flex-col">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Testimonials />
      <Banner />
      <Footer />
    </main>
  );
}

export default Pages;
