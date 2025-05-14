import {
  AppleIcon,
  Facebook,
  Instagram,
  Linkedin,
  Play,
  Youtube,
} from "lucide-react";
import Image1 from "../../../assets/heart.png";

const Footer = () => {
  return (
    <div className="bg-[#005E6A] text-white py-10 mt-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Part 1 - Brand & Contact */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img className="h-10 w-10" src={Image1} alt="Osudpotro logo" />
            <h1 className="text-2xl font-bold">Osudpotro</h1>
          </div>
          <p className="text-base mb-1">09610-001122</p>
          <p className="text-base mb-4">support@osudpotro.com</p>

          <div className="flex gap-2 mb-4">
            <button className="bg-white text-black px-3 py-1 rounded flex items-center gap-1 text-sm">
              <Play size={16} />
              Google Play
            </button>
            <button className="bg-white text-black px-3 py-1 rounded flex items-center gap-1 text-sm">
              <AppleIcon size={16} />
              App Store
            </button>
          </div>

          <div className="flex gap-4 text-white text-lg">
            <a href="/" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="/" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="/" aria-label="YouTube">
              <Youtube />
            </a>
            <a href="/" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
        </div>

        {/* Part 2 - Info Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Company</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Terms and Conditions</a>
            </li>
            <li>
              <a href="/">Refund and Return Policy</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Disclaimer</a>
            </li>
          </ul>
        </div>

        {/* Part 3 - Resources */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Resources</h2>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/">Buy Medicines Online</a>
            </li>
            <li>
              <a href="/">Top 10 Pharmaceutical</a>
            </li>
            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <a href="/">Blogs</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>
        </div>
        {/* Part 4 - Resources */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Orline Drug License: DC-22813
          </h2>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/">DBID License:384191730</a>
            </li>
            <li>
              <a href="/">
                Trode Licerso <br />
                TRAD/DNCC/048628/2022
              </a>
            </li>
            <li>
              <a href="/">Model Pharmacy License: DC-21000</a>
            </li>
          </ul>
          <div>
            <div className="mt-3">
              <div className="flex items-center justify-evenly border border-b-zinc-300 rounded-md overflow-hidden w-full max-w-md mx-auto bg-white">
                <input
                  type="text"
                  placeholder="Find Your Medicine..."
                  className="flex-1 min-w-0 text-sm p-2 outline-none bg-[#17a595]"
                />

                {/* Search Button */}
                <button className="bg-white  cursor-pointer text-black px-2 sm:px-4 py-2 text-xs sm:text-sm whitespace-nowrap shrink-0">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} Osudpotro. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
