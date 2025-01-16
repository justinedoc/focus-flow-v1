import heroOverlay1 from "../../assets/hero-overlay1.png";
import { FaArrowRightLong } from "react-icons/fa6";
function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center gap-10 md:gap-0 justify-between bg-heroBg relative __section-padding min-h-screen bg-no-repeat bg-cover bg-bottom overflow-hidden">
      <main>
        <h1 className="text-[3.5rem] md:text-[4rem] __text-grad font-bold leading-tight my-7 __anim-bottom __delay-100">
          Pathway to <br /> productivity
        </h1>
        <p className="w-full md:max-w-[20rem] text-[#010D3E] text-lg mb-7 __anim-left __delay-400">
          Make every task a meaningful step toward success with tools to keep
          you organized, motivated, and on track.
        </p>

        <div className="flex items-center gap-4 my-3">
          <div className="__anim-bottom __delay-700">
            <button
              className={` bg-black px-4 py-2 text-white w-fit rounded-md font-medium text-md transition duration-300 hover:bg-black/75`}
            >
              Signup for free
            </button>
          </div>

          <span className="flex gap-2 items-center cursor-pointer group __anim-left __delay-1000">
            <a
              href="#about"
              className="transition duration-300 group-hover:text-black/70"
            >
              Learn More
            </a>
            <FaArrowRightLong className="group-hover:scale-110 transition duration-300 group-hover:translate-x-2" />
          </span>
        </div>
      </main>

      <aside>
        <img
          src={heroOverlay1}
          alt="hero image"
          className="w-[33rem] __anim-right __delay-600"
        />
      </aside>
    </section>
  );
}

export default Hero;
