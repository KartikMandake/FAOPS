import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function DesktopDropdown({ item }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const rightSideMenus = ["Membership", "Others"];

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Parent Menu */}
      <button
        className={`flex items-center gap-1 font-semibold text-[15px] transition-all duration-300
        ${
          open
            ? "text-[#344474]"
            : "text-slate-700 hover:text-[#344474]"
        }`}
      >
        {item.title}

        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className={`absolute top-full mt-5 z-[9999]
            ${
              item.title === "Membership"
                ? "w-[900px]"
                : "w-72"
            }
            rounded-2xl
            bg-white/95
            backdrop-blur-xl
            border border-slate-200
            shadow-2xl
            overflow-hidden
            ${
  item.title === "Membership"
    ? "-right-40"
    : rightSideMenus.includes(item.title)
    ? "right-0"
    : "left-0"
}`}
          >
            {/* ================= MEMBERSHIP ================= */}

            {item.title === "Membership" ? (
              <div className="grid grid-cols-4">

                {item.children.map((region, index) => (
                  <div
                    key={index}
                    className={`p-5 ${
                      index !== item.children.length - 1
                        ? "border-r border-slate-200"
                        : ""
                    }`}
                  >
                    {/* Region Heading */}

                    <h3 className="text-sm font-bold uppercase tracking-wide text-[#344474]">
                      {region.title}
                    </h3>

                    <div className="w-12 h-1 rounded-full bg-[#] mt-2 mb-4"></div>

                    {/* Countries */}

                    <div className="space-y-1">

                      {region.children.map((country) => (

                        <Link
                          key={country.path}
                          to={country.path}
                          className={`block px-2 py-2 rounded-md text-sm transition-all duration-300

                          ${
                            location.pathname === country.path
                              ? "bg-[#344474]/10 text-[#344474] font-semibold"
                              : "text-slate-700 hover:bg-[#344474]/5 hover:text-[#344474]"
                          }`}
                        >
                          {country.title}
                        </Link>

                      ))}

                    </div>
                  </div>
                ))}

              </div>
            ) : (
              <>
                {/* ================= NORMAL MENUS ================= */}

                {item.children.map((child) => (

                  <Link
                    key={child.path}
                    to={child.path}
                    className={`flex items-center px-6 py-4 border-l-4 border-transparent
                    transition-all duration-300

                    ${
                      location.pathname === child.path
                        ? "bg-[#344474]/10 text-[#344474] border-[#1E3A5F] font-semibold"
                        : "text-slate-700 hover:bg-[#344474]/5 hover:text-[#344474] hover:border-[#1E3A5F]"
                    }`}
                  >
                    {child.title}
                  </Link>

                ))}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}