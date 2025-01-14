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
        <table>
          <tbody>
            {footerNavs.map((footer, i) => (
              <tr>
                <th>{footer[i].category}</th>
                
              </tr>
            ))}
            <tr>
              <th className="text-white font-bold text-sm">Product</th>
              <td>
                <a href="#features">Features</a>
                <a href="#features">Integrations</a>
                <a href="#features">Updates</a>
                <a href="#pricing">Pricing</a>
                <a href="#faq">FAQ</a>
              </td>
            </tr>
            <tr>
              <th className="text-white font-bold text-sm">Company</th>
              <td>
                <a href="#features">About</a>
                <a href="#features">Blog</a>
                <a href="#features">Careers</a>
                <a href="#pricing">Manifesto</a>
                <a href="#pricing">Press</a>
                <a href="#faq">Contact</a>
              </td>
            </tr>

            <tr>
              <th className="text-white font-bold text-sm">Resources</th>
              <td>
                <a href="#features">Examples</a>
                <a href="#features">Community</a>
                <a href="#features">Guides</a>
                <a href="#pricing">Docs</a>
              </td>
            </tr>

            <tr>
              <th className="text-white font-bold text-sm">Legal</th>
              <td>
                <a href="#pricing">Privacy</a>
                <a href="#features">Terms</a>
                <a href="#pricing">Security</a>
              </td>
            </tr>
          </tbody>
        </table>
      </nav>
    </footer>
  );
}

export default Footer;
