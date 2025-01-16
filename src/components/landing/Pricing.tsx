import React from "react";
import { pricingInfo } from "./constants/PricingInfo";
import SectionHeader from "./ui/SectionHeader";
import { GiCheckMark } from "react-icons/gi";

function Pricing() {
  return (
    <section className="__section-padding flex flex-col items-center">
      <SectionHeader
        title="A more effective way to track progress"
        description="Make every task a meaningful step toward success "
        tag="Boost your productivity"
      />

      <div className="flex flex-wrap gap-8 mt-7 justify-center md:items-end">
        {pricingInfo.map((pricingInfo) => (
          <main
            key={pricingInfo.plan}
            className="flex flex-col gap-5 p-8 min-w-[20rem] md:min-w-[18rem] rounded-2xl border shadow-md text-sm transition duration-500 hover:-translate-y-4 cursor-pointer"
            style={{
              backgroundColor: pricingInfo.inBlack ? "black" : "white",
              color: !pricingInfo.inBlack ? "black" : "white",
            }}
          >
            <div className="flex justify-between items-center">
              <span className="capitalize font-semibold text-[#6F6C90] mb-2">
                {pricingInfo.plan}
              </span>
              {pricingInfo.tag && (
                <span className="py-[0.4rem] px-3 border-2 border-black/30 text-xs rounded-xl font-bold bg-text-gradient bg-clip-text text-transparent">
                  {pricingInfo.tag}
                </span>
              )}
            </div>

            <h1 className="my-3">
              <span className="text-[3rem] font-semibold">{`$${pricingInfo.price}`}</span>
              <span className="text-md font-medium text-[#6F6C90]">{`/${pricingInfo.duration}`}</span>
            </h1>

            <Button inBlack={pricingInfo.inBlack}>Sign up now!</Button>

            <div className="mt-3">
              <FeaturesList features={pricingInfo.features} />
            </div>
          </main>
        ))}
      </div>
    </section>
  );
}

function Button({
  children,
  inBlack,
}: {
  children: React.ReactNode;
  inBlack: boolean;
}) {
  const bgColor = !inBlack ? "black" : "white";
  const textColor = inBlack ? "black" : "white";
  return (
    <button
      className="w-full px-4 py-2 rounded-lg"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}

function FeaturesList({ features }: { features: string[] }) {
  return (
    <ul className="space-y-5">
      {features.map((feature) => (
        <div
          key={feature}
          className="flex gap-3 items-center text-sm font-light"
        >
          <GiCheckMark />
          <span>{feature}</span>
        </div>
      ))}
    </ul>
  );
}

export default Pricing;
