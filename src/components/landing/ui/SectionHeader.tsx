import SectionHeaderTag from "./SectionHeaderTag";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
}

function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-5 max-w-[24rem]">
      <SectionHeaderTag>{tag}</SectionHeaderTag>
      <h1 className="text-4xl font-bold text-center __text-grad __anim-bottom __delay-100">
        {title}
      </h1>
      <p className="text-sm text-center text-[#010D3E] text-pretty __anim-left __delay-300">
        {description}
      </p>
    </header>
  );
}

export default SectionHeader;
