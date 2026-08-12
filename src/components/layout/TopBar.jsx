import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    icon: FaFacebookF,
    link: "https://www.facebook.com/faopsperinatal",
  },
  {
    icon: FaXTwitter,
    link: "https://twitter.com/faopsperinatal",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/faopsperinatal",
  },
  {
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/company/faopsperinatal?_l=en_US",
  },
  {
    icon: FaYoutube,
    link: "https://www.youtube.com/@faopsperinatal",
  },
];

const TopBar = () => {
  return (
    <div className="hidden lg:block top-0 z-[60] bg-[#344474] backdrop-blur-xl border-b border-white/10 shadow-md">
      <div className="max-w-[1400px] mx-auto h-11 px-8 flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-8 text-[13px] font-medium text-[#ECF5FC]">

          <a
            href="tel:+919822096280"
            className="flex items-center gap-2 transition-all duration-300 hover:text-[#ECF5FC]"
          >
            <FaPhoneAlt
              size={12}
              className="text-[#ECF5FC]"
            />
            <span>(+91) 98220 96280</span>
          </a>

          <a
            href="mailto:info@faopsperinatal.org"
            className="flex items-center gap-2 transition-all duration-300 hover:text-[#ECF5FC]"
          >
            <FaEnvelope
              size={12}
              className="text-[#ECF5FC]"
            />
            <span>info@faopsperinatal.org</span>
          </a>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {socialLinks.map(({ icon: Icon, link }, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full flex items-center justify-center
              bg-white/10
              border border-[#ECF5FC]
              backdrop-blur-lg
              text-[#ECF5FC]
              transition-all duration-300
              hover:bg-[#344474]
              hover:text-[#fff]
              hover:scale-110
              hover:shadow-lg"
            >
              <Icon size={14} />
            </a>
          ))}

        </div>

      </div>
    </div>
  );
};

export default TopBar;