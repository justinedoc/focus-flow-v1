import React from "react";

interface SectionHeaderProps {
  children: React.ReactNode;
}

function SectionHeaderTag({ children }: SectionHeaderProps) {
  return (
    <span className="px-3 py-1 font-medium text-sm text-black border-2 border-[#2222221a] rounded-xl shadow-sm w-fit">
      {children}
    </span>
  );
}

export default SectionHeaderTag;
