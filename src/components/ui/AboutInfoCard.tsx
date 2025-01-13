import React from "react";
import CallToActionBtn from "./CallToActionBtn";

interface AboutInfoCardProps {
  info: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
}
function AboutInfoCard({ info }: AboutInfoCardProps) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      <span>{info.icon}</span>
      <h1>{info.title}</h1>
      <p>{info.description}</p>
      <CallToActionBtn withBtn={false} />
    </main>
  );
}

export default AboutInfoCard;
