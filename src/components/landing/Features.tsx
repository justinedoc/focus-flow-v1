import { featuresInfo } from "./constants/FeaturesInfo";
import FeaturesCard from "./ui/FeaturesCard";
import SectionHeader from "./ui/SectionHeader";

function Features() {
  return (
    <section
      id="#features"
      className="__section-padding flex flex-col items-center"
    >
      <SectionHeader
        title="Streamlined for easy management"
        description="Enjoy customizable lists and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly."
        tag="Everything you need"
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 my-8 gap-9">
        {featuresInfo.map((feature, i) => (
          <FeaturesCard key={i} feature={feature} />
        ))}
      </div>
    </section>
  );
}

export default Features;
