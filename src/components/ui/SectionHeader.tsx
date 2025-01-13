import SectionHeaderTag from "./SectionHeaderTag";

interface SectionHeaderProps {
  tag: string;
  title: string;
  description: string;
}

function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  return (
    <header className="flex flex-col items-center gap-5 max-w-[25rem]">
      <SectionHeaderTag>{tag}</SectionHeaderTag>
      <h1 className="text-4xl font-bold text-center __text-grad">{title}</h1>
      <p className="text-sm text-center text-[#010D3E]">{description}</p>
    </header>
  );
}

export default SectionHeader;
