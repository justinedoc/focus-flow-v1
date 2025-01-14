import { footerNavs } from "./constants/FooterNavs";
import { socialNavs } from "./constants/SocialNavs";

function Footer() {
  return (
    <footer className="text-[#BCBCBC] bg-black w-full p-5 gap-10 md:gap-0 md:p-12 grid grid-cols-1 md:grid-cols-4">
      <main className="flex flex-col min-h-[15rem] col-span-1">
        <img src="/logo.svg" alt="logo" width={70} />
        <p className="pl-3 font-light my-3">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website.
        </p>

        <div className="flex gap-5 items-center mt-auto pl-3">
          {socialNavs.map((link) => (
            <a key={link.name} href={link.url} className="text-[#808080]">
              {link.icon}
            </a>
          ))}
        </div>
      </main>

      <nav className="col-span-3 font-light text-[#7B7B7B] text-lg">
        <table className="w-full flex flex-shrink-0 flex-wrap md:flex-row md:justify-end gap-5 md:gap-12 justify-between">
          {footerNavs.map((group, i) => (
            <tbody>
              <tr key={i}>
                <th className="text-white font-semibold text-left pb-5">
                  {group[0]?.category}
                </th>
              </tr>
              <tr>
                <td className="flex flex-col gap-5">
                  {group.map((footer) => (
                    <a key={footer.text} href={footer.href}>
                      {footer.text}
                    </a>
                  ))}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </nav>
    </footer>
  );
}

export default Footer;
