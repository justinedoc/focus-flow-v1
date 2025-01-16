import { FaArrowRightLong } from "react-icons/fa6";

interface CallToActionBtnProps {
  withBtn: boolean;
  label?: string;
  handleClick?: () => void;
}
function CallToActionBtn({
  withBtn,
  label,
  handleClick,
}: CallToActionBtnProps) {
  return (
    <div className="flex items-center gap-4 my-3">
      <button
        className={` bg-black px-4 py-2 text-white w-fit rounded-md font-medium text-md transition duration-300 ${
          withBtn ? "block" : "hidden"
        } hover:bg-black/75`}
        onClick={handleClick}
      >
        {label}
      </button>

      <span className="flex gap-2 items-center cursor-pointer group __anim-left __delay-1000">
        <a
          href="#about"
          className="transition duration-300 group-hover:text-black/70"
        >
          Learn More
        </a>
        <FaArrowRightLong className="group-hover:scale-110 transition duration-300 group-hover:translate-x-2" />
      </span>
    </div>
  );
}

export default CallToActionBtn;
