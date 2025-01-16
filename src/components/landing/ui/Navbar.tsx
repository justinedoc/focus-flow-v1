import { FaXmark } from "react-icons/fa6";
import logoImg from "../../../assets/logo.png";
import useScreenSize from "../hooks/useScreenSize";
import { useEffect, useRef, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { navItems } from "../constants/NavItems";

function Navbar() {
  const { isSmallScreened } = useScreenSize();

  if (isSmallScreened) return <MobileNavbar />;

  return (
    <nav className="bg-[#EAEEFE] w-full px-10 py-3 flex justify-between sticky top-0 left-0 z-50">
      <header className="flex gap-1 items-center">
        <img src={logoImg} alt="logo" width={50} height={40} />
        <h1 className="text-lg font-extrabold tracking-tight translate-y-1">
          FocusFlow
        </h1>
      </header>

      <div className="flex gap-10 items-center">
        <ul className="flex">
          {navItems.map(({ name, link }, index) => (
            <li
              key={index}
              className="px-3 py-3 text-sm text-black/80 transition duration-300 hover:text-black"
            >
              <a href={`#${link}`}>{name}</a>
            </li>
          ))}
        </ul>

        <AuthBtns />
      </div>
    </nav>
  );
}

function MobileNavbar() {
  const [showNavBar, setShowNavbar] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function toggleNav(e: MouseEvent) {
      const target = e.target as Element;
      if (!navRef?.current?.contains(e.target as Node) || target.closest("a")) {
        setShowNavbar(false);
      }
    }

    document.addEventListener("click", toggleNav, true);

    return () => {
      document.removeEventListener("click", toggleNav, true);
    };
  }, [setShowNavbar]);
  return (
    <nav
      ref={navRef}
      className="bg-[#EAEEFE] w-full px-2 py-3 flex justify-between items-center sticky top-0 left-0 z-20 border"
    >
      <header className="flex gap-1 items-center">
        <img src={logoImg} alt="logo" width={50} height={40} />
        <h1 className="text-lg font-extrabold tracking-tight translate-y-1">
          FocusFlow
        </h1>
      </header>

      <RiMenu3Fill size={24} onClick={() => setShowNavbar(true)} />

      <aside
        className={`fixed top-0 -right-96 bg-[#EAEEFE] shadow-md rounded-l-lg min-h-66 transition duration-300 p-10 ${
          showNavBar ? "-translate-x-96" : ""
        }`}
      >
        <div className="flex gap-6 items-center flex-col min-w-44 py-5 relative">
          <ul className="flex flex-col justify-start w-full">
            {navItems.map(({ name, link }, index) => (
              <li key={index} className="px-3 py-3 text-base text-black/80">
                <a href={`#${link}`}>{name}</a>
              </li>
            ))}
          </ul>

          <AuthBtns />
          <FaXmark
            size={24}
            className="absolute -top-5 -right-5"
            onClick={() => setShowNavbar(false)}
          />
        </div>
      </aside>
    </nav>
  );
}

function AuthBtns() {
  return (
    <div className="flex gap-3 items-center flex-col md:flex-row w-full">
      <button className="md:w-20 w-full px-2 py-[0.4rem] bg-black text-white ring-2 ring-black text-sm rounded-md font-semibold transition duration-300 hover:bg-black/80">
        Sign Up
      </button>
      <button className="md:w-20 w-full px-2 py-[0.4rem] bg-transparent ring-2 ring-black text-sm rounded-md font-semibold transition duration-300 hover:ring-black/60">
        Log In
      </button>
    </div>
  );
}

export default Navbar;
