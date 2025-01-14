interface FeaturesCardProp {
  feature: Record<string, string>;
}

function FeaturesCard({ feature }: FeaturesCardProp) {
  const { image, title, description } = feature;
  return (
    <main className="flex flex-col justify-center items-center max-w-[20rem] sm:max-w-[100%] p-5 rounded-lg shadow-md border border-[#F1F1F1]">
      <img loading="lazy" src={image} alt="feature image" className="w-40" />
      <h1 className="text-lg font-semibold __text-grad">{title}</h1>
      <p className="text-center font-light text-[#010D3E] text-sm my-3">
        {description}
      </p>
    </main>
  );
}

export default FeaturesCard;
