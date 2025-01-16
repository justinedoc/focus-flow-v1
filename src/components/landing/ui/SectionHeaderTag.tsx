import React from "react";

interface SectionHeaderProps {
  children: React.ReactNode;
}

function SectionHeaderTag({ children }: SectionHeaderProps) {
  return (
    <h3 className="px-3 py-1 font-medium text-sm text-black border-2 border-[#2222221a] rounded-lg w-fit __anim-top __delay-500">
      {children}
    </h3>
  );
}

export default SectionHeaderTag;
