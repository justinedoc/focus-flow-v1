import logoImg from "../../../assets/logo.png";
function Navbar() {
  const navItems = ["About", "Features", "Testimonials"];
  return (
    <nav className="bg-[#EAEEFE] w-full px-10 py-3 flex justify-between">
      <header className="flex gap-1 items-center">
        <img src={logoImg} alt="logo" width={50} height={40} />
        <h1 className="text-lg font-extrabold tracking-tight translate-y-1">
          FocusFlow
        </h1>
      </header>

      <div className="flex gap-10 items-center">
        <ul className="flex">
          {navItems.map((item, index) => (
            <li key={index} className="px-3 py-3 text-sm text-black/80">
              <a href={`#${item.toLocaleLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="flex gap-3 items-center">
          <button className="w-20 px-2 py-[0.4rem] bg-black text-white ring-2 ring-black text-sm rounded-md font-semibold">
            Sign Up
          </button>
          <button className="w-20 px-2 py-[0.4rem] bg-transparent ring-2 ring-black text-sm rounded-md font-semibold">
            Log In
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
