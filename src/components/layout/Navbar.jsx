import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu } from "lucide-react";
import { motion } from "framer-motion";
import { navLinks } from "../../data/navLinks";
import DesktopDropdown from "./DesktopDropdown";
import MobileMenu from "./MobileMenu";
// import logo from "../../assets/images/logo.png";

export default function Navbar1() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: .5 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/80 backdrop-blur-2xl shadow-xl border-b border-white/20"
            : "bg-white"
        }`}
      >
        <div className="max-w-[1450px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="h-16 md:h-20 lg:h-24 flex items-center justify-between">
            {/* LOGO */}

            <Link
              to="/"
              className="flex items-center gap-3 shrink-0"
            >
              <img
                src="/logo.png"
                alt="FAOPS Logo"
                className="h-10 sm:h-12 md:h-16 max-w-[68vw] sm:max-w-none object-contain transition-transform duration-300 hover:scale-105"
              />
            </Link>

            {/* Desktop Menu */}

            <div className="hidden lg:flex items-center gap-8">

              {navLinks.map((item) =>

                item.children ? (

                  <DesktopDropdown
                    key={item.title}
                    item={item}
                  />

                ) : (

                  <Link
                    key={item.title}
                    to={item.path}
                    className={`relative font-medium transition-all duration-300

                    ${
                      location.pathname === item.path
                        ? "text-sky-600"
                        : "text-slate-700 hover:text-sky-600"
                    }

                    after:absolute
                    after:left-0
                    after:-bottom-2
                    after:h-[2px]
                    after:w-0
                    after:bg-sky-600
                    hover:after:w-full
                    after:duration-300`}
                  >
                    {item.title}
                  </Link>

                )

              )}

            </div>

            {/* Mobile Button */}

            <button
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={28} />
            </button>

          </div>

        </div>

      </motion.nav>

      <MobileMenu
        open={mobileOpen}
        setOpen={setMobileOpen}
      />

    </>
  );
}