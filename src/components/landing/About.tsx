import SectionHeader from "./ui/SectionHeader";
import platformImg from "../../assets/platformImg.png";
import AboutInfoCard from "./ui/AboutInfoCard";
import { aboutInfo } from "./constants/AboutInfo";

function About() {
  return (
    <section id="#about" className="__section-padding bg-aboutBg bg-center">
      <main className="flex flex-col items-center">
        <SectionHeader
          title="A more effective way to track progress"
          description="FocusFlow keeps you on track, inspires your journey, and celebrates your wins"
          tag="Boost your productivity"
        />
        <img
          loading="lazy"
          src={platformImg}
          alt="dashboard image"
          className="w-full"
        />
      </main>

      <article className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-10 place-items-center">
        {aboutInfo.map((info) => (
          <AboutInfoCard key={info.title} info={info} />
        ))}
      </article>
    </section>
  );
}

export default About;
