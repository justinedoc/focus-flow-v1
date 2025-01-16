import CallToActionBtn from "./ui/CallToActionBtn";
import heroOverlay1 from "../../assets/hero-overlay1.png";
function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-10 md:gap-0 justify-between bg-heroBg relative __section-padding min-h-screen bg-no-repeat bg-cover bg-bottom overflow-hidden">
      <main>
        <h1 className="text-[3.5rem] md:text-[4rem] __text-grad font-bold leading-tight my-7">
          Pathway to <br /> productivity
        </h1>
        <p className="w-full md:max-w-[20rem] text-[#010D3E] text-lg mb-7">
          Make every task a meaningful step toward success with tools to keep
          you organized, motivated, and on track.
        </p>

        <CallToActionBtn label="Signup for free" withBtn />
      </main>

      <aside>
        <img
          src={heroOverlay1}
          loading="lazy"
          alt="hero image"
          className="w-[33rem]"
        />
      </aside>
    </section>
  );
}

export default Hero;
