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
      {withBtn && (
        <button
          className="bg-black px-4 py-2 text-white w-fit rounded-md"
          onClick={handleClick}
        >
          {label}
        </button>
      )}
      <span className="flex gap-2 items-center">
        <a href="#about">Learn More</a>
        <FaArrowRightLong />
      </span>
    </div>
  );
}

export default CallToActionBtn;
