import Hero from "./components/Hero";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <section className="xl:max-w-[80rem]">
      <main className="xl:flex xl:justify-center xl:items-center xl:flex-col">
        <Navbar />
        <Hero />
      </main>
    </section>
  );
}

export default App;
