import SectionHeader from "./ui/SectionHeader";
import platformImg from "../../assets/platformImg.png";
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

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center mb-10">
        {aboutInfo.map((info) => (
          <AboutInfoCard key={info.title} info={info} />
        ))}
      </div>
    </section>
  );
}

export default About;
