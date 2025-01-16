import SectionHeader from "./ui/SectionHeader";

function Pricing() {
  return (
    <section className="__section-padding">
      <SectionHeader
        title="A more effective way to track progress"
        description="Make every task a meaningful step toward success "
        tag="Boost your productivity"
      />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-9"></div>
    </section>
  );
}

export default Pricing;
