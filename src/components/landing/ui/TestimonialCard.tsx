interface TestimonialCardProps {
  data: {
    image: string;
    name: string;
    content: string;
    username: string;
  };
}

function TestimonialCard({ data }: TestimonialCardProps) {
  return (
    <div className="text-[0.8rem] w-[20rem] lg:max-w-[16rem] flex flex-col justify-between gap-3 p-6 shadow-lg rounded-lg font-light">
      <p>{data.content}</p>
      <div className="flex gap-2 items-center">
        <img
          src={data.image}
          alt="profile image"
          className="rounded-full size-8"
          width={20}
          height={20}
        />
        <div className="flex flex-col">
          <h3 className="font-medium">{data.name}</h3>
          <h4>{data.username}</h4>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
