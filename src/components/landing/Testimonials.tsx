import SectionHeader from "./ui/SectionHeader";

function Testimonials() {
  return (
    <section
      id="#features"
      className="__section-padding flex flex-col items-center"
    >
      <SectionHeader tag="Testimonials" title="What our users say" />

      <div className="grid grid-cols-1 lg:grid-cols-2 my-8 gap-9"></div>
    </section>
  );
}

export default Testimonials;
