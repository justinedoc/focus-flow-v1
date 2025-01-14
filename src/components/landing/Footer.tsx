import { footerNavs } from "./constants/FooterNavs";
import { socialNavs } from "./constants/SocialNavs";

function Footer() {
  return (
    <footer className="text-[#BCBCBC] bg-black w-full p-10 grid grid-cols-1 md:grid-cols-4">
      <main className="flex flex-col min-h-[15rem] col-span-1 border">
        <img src="/logo.svg" alt="logo" width={70} />
        <p className="text-white/80 pl-3 font-light">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website.
        </p>

        <div className="flex gap-2 items-center mt-auto pl-3">
          {socialNavs.map((link) => (
            <a key={link.name} href={link.url}>
              {link.icon}
            </a>
          ))}
        </div>
      </main>

      <nav className="border col-span-3">
        <table className="w-full">
          <tbody>
            {footerNavs.map((group, i) => (
              <>
                <tr key={i}>
                  <th className="text-white font-semibold p-2 text-left">
                    {group[0]?.category}
                  </th>
                </tr>
                <tr>
                  <td className="p-2">
                    {group.map((footer) => (
                      <a key={footer.text} href={footer.href} className="block">
                        {footer.text}
                      </a>
                    ))}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </nav>
    </footer>
  );
}

export default Footer;
