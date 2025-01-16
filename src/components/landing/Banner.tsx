import CallToActionBtn from "./ui/CallToActionBtn";
import BannerImg1 from "../../assets/bannerImg_1.png";
import BannerImg2 from "../../assets/bannerImg_2.png";

function Banner() {
  return (
    <section className="__section-padding bg-gradient-to-b from-transparent via-[#D2DCFF]/50 to-[#D2DCFF] w-full flex flex-col items-center justify-center py-5 md:py-10 min-h-[50vh] relative overflow-hidden">
      <main className="flex flex-col items-center gap-5 max-w-[30rem]">
        <h1 className="text-4xl font-bold text-center __text-grad __anim-bottom __delay-300">
          Sign up for free today
        </h1>
        <p className="text-sm text-center text-[#010D3E] text-pretty __anim-top __delay-300">
          Celebrate the joy of accomplishment with an app designed to track your
          progress and motivate your efforts.
        </p>

        <CallToActionBtn label="Signup for free" withBtn />
      </main>

      <img
        src={BannerImg1}
        alt="Star Image"
        loading="lazy"
        className="absolute size-[18rem] hidden md:block md:-left-10 xl:left-12 top-0"
      />
      <img
        src={BannerImg2}
        alt="Spring Image"
        loading="lazy"
        className="absolute size-[18rem] hidden md:block md:-right-10 xl:right-12 top-0"
      />
    </section>
  );
}

export default Banner;
