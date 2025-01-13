import SectionHeader from "./ui/SectionHeader";
import platformImg from "../assets/platformImg.png";
import AboutInfoCard from "./ui/AboutInfoCard";
import { aboutInfo } from "./constants/AboutInfo";

function About() {
  return (
    <section id="#about" className="__section-padding bg-aboutBg bg-bottom">
      <main className="flex flex-col items-center">
        <SectionHeader
          title="A more effective way to track progress"
          description="FocusFlow keeps you on track, inspires your journey, and celebrates your wins"
          tag="Boost your productivity"
        />
        <img src={platformImg} alt="dashboard image" className="w-full" />
      </main>

      {aboutInfo.map((info) => (
        <AboutInfoCard info={info} />
      ))}
    </section>
  );
}

export default About;
