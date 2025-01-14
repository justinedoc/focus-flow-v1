import {
  FaLinkedin,
  FaPinterest,
  FaSquareInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export const socialNavs = [
  {
    icon: <FaXTwitter size={24} />,
    name: "Twitter",
    url: "#",
  },
  {
    icon: <FaSquareInstagram size={24} />,
    name: "Instagram",
    url: "#",
  },
  {
    icon: <FaPinterest size={24} />,
    name: "Pinterest",
    url: "#",
  },
  {
    icon: <FaLinkedin size={24} />,
    name: "LinkedIn",
    url: "#",
  },
  {
    icon: <FaYoutube size={24} />,
    name: "YouTube",
    url: "#",
  },
] as const;
