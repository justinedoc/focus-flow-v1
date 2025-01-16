interface FeaturesCardProp {
  feature: Record<string, string>;
  index: number;
}

function FeaturesCard({ feature, index }: FeaturesCardProp) {
  const { image, title, description } = feature;
  return (
    <main
      className={`flex flex-col justify-center items-center max-w-[20rem] p-5 rounded-lg shadow-md border border-[#F1F1F1] cursor-pointer transition duration-500 hover:scale-105 __anim-bottom __delay-${
        index * 200
      }`}
    >
      <img loading="lazy" src={image} alt="feature image" className="w-40" />
      <h1 className="text-lg font-semibold __text-grad">{title}</h1>
      <p className="text-center font-light text-[#010D3E] text-sm my-3">
        {description}
      </p>
    </main>
  );
}

export default FeaturesCard;
