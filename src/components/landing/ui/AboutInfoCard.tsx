import React from "react";
import CallToActionBtn from "./CallToActionBtn";

interface AboutInfoCardProps {
  info: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
  index: number;
}
function AboutInfoCard({ info, index }: AboutInfoCardProps) {
  return (
    <main
      className={`flex flex-col text-base md:text-sm p-2 min-w-[15rem] max-w-[16rem] __anim-top __delay-${
        index * 200
      }`}
    >
      <span>{info.icon}</span>
      <h1 className="text-md font-bold my-2">{info.title}</h1>
      <p className="font-light">{info.description}</p>
      <CallToActionBtn withBtn={false} />
    </main>
  );
}

export default AboutInfoCard;
