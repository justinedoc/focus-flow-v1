import { footerNavs } from "./constants/FooterNavs";
import { socialNavs } from "./constants/SocialNavs";

function Footer() {
  return (
    <footer className="text-[#BCBCBC] bg-black w-full p-5 gap-10 md:gap-0 md:p-12 grid grid-cols-1 md:grid-cols-4">
      <main className="flex flex-col md:min-h-[15rem] col-span-1">
        <img src="/logo.svg" alt="logo" loading="lazy" width={70} className="-translate-x-3" />
        <p className="font-light mb-5 md:my-3">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website.
        </p>

        <div className="flex gap-5 items-center mt-auto">
          {socialNavs.map((link) => (
            <a key={link.name} href={link.url} className="text-[#808080]">
              {link.icon}
            </a>
          ))}
        </div>
      </main>

      <nav className="col-span-3 font-light text-[#7B7B7B] text-lg">
        <main className="w-full flex flex-col md:flex-row flex-shrink-0 md:justify-end gap-5 md:gap-16 justify-between items-start">
          {footerNavs.map((group, i) => (
            <table key={i}>
              <tbody>
                <tr>
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
            </table>
          ))}
        </main>
      </nav>
    </footer>
  );
}

export default Footer;
