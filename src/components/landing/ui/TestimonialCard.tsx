function TestimonialCard() {
  return (
    <div className="text-[0.8rem] max-w-[15rem] font-light">
      <p>
        Planning and executing events has never been easier. Focusflow helps me
        keep track of all the moving parts.
      </p>
      <div className="flex gap-2">
        <img
          src="#"
          alt="profile image"
          className="rounded-full size-8 bg-black"
          width={20}
          height={20}
        />
        <div className="flex flex-col">
          <span>Talior Kim</span>
          <span>@taliorkimm</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
