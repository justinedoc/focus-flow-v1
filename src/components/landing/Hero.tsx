import CallToActionBtn from "./ui/CallToActionBtn";
import heroOverlay1 from "../../assets/hero-overlay1.png";
function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between bg-heroBg relative __section-padding h-fit bg-no-repeat bg-cover bg-bottom overflow-hidden">
      <main>
        <h1 className="text-[4rem] __text-grad font-bold leading-tight my-5">
          Pathway to <br /> productivity
        </h1>
        <p className="max-w-[20rem] text-[#010D3E]">
          Make every task a meaningful step toward success with tools to keep
          you organized, motivated, and on track.
        </p>

        <CallToActionBtn label="Signup for free" withBtn />
      </main>

      <aside>
        <img src={heroOverlay1} loading="lazy" alt="hero image" className="w-[33rem]" />
      </aside>
    </section>
  );
}

export default Hero;
