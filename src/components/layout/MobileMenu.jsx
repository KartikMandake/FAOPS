import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { navLinks } from "../../data/navLinks";

/** True when this node or any descendant links to `pathname`. */
function containsPath(node, pathname) {
  if (node.path && node.path === pathname) return true;

  return (node.children || []).some((child) => containsPath(child, pathname));
}

/** Which top-level group / nested group holds the current route. */
function findActiveBranch(pathname) {
  for (const item of navLinks) {
    if (!item.children) continue;

    for (const child of item.children) {
      if (!containsPath(child, pathname)) continue;

      return {
        group: item.title,
        subGroup: child.children?.length ? `${item.title}::${child.title}` : null,
      };
    }
  }

  return { group: null, subGroup: null };
}

export default function MobileMenu({ open, setOpen }) {
  const location = useLocation();

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  /* Open the branch that matches the current route each time the drawer opens. */
  useEffect(() => {
    if (!open) return;

    const { group, subGroup } = findActiveBranch(location.pathname);

    setActiveDropdown(group);
    setActiveSubDropdown(subGroup);
  }, [open, location.pathname]);

  const toggleDropdown = (title) => {
    setActiveDropdown((current) => (current === title ? null : title));
    setActiveSubDropdown(null);
  };

  const toggleSubDropdown = (key) => {
    setActiveSubDropdown((current) => (current === key ? null : key));
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35 }}
            className="fixed top-0 right-0 h-screen w-80 bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">

              <div>
                <h2 className="text-2xl font-bold text-sky-700">
                  FAOPS
                </h2>

                <p className="text-xs text-slate-500">
                  Orthopaedic Association
                </p>
              </div>

              <button onClick={closeMenu} aria-label="Close menu">
                <X size={28} />
              </button>

            </div>

            {/* Menu */}
            <div className="flex-1 overflow-y-auto">

              {navLinks.map((item) => (

                <div
                  key={item.title}
                  className="border-b border-slate-100"
                >

                  {item.children ? (

                    <>
                      <button
                        onClick={() => toggleDropdown(item.title)}
                        aria-expanded={activeDropdown === item.title}
                        className="w-full flex justify-between items-center px-6 py-4 text-left"
                      >
                        <span className="font-medium">
                          {item.title}
                        </span>

                        <ChevronDown
                          size={20}
                          className={`shrink-0 duration-300 ${
                            activeDropdown === item.title
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>

                        {activeDropdown === item.title && (

                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden bg-slate-50"
                          >

                            {item.children.map((child) => {

                              const subKey = `${item.title}::${child.title}`;

                              /* ---- Region with countries (sub-sub level) ---- */

                              if (child.children?.length) {

                                const subOpen = activeSubDropdown === subKey;

                                return (
                                  <div
                                    key={subKey}
                                    className="border-b border-slate-200/70 last:border-b-0"
                                  >
                                    <button
                                      onClick={() => toggleSubDropdown(subKey)}
                                      aria-expanded={subOpen}
                                      className={`w-full flex justify-between items-center gap-2 pl-10 pr-6 py-3 text-left text-sm font-semibold transition-colors
                                      ${
                                        subOpen
                                          ? "text-[#344474]"
                                          : "text-slate-700"
                                      }`}
                                    >
                                      <span>{child.title}</span>

                                      <ChevronDown
                                        size={16}
                                        className={`shrink-0 duration-300 ${
                                          subOpen ? "rotate-180" : ""
                                        }`}
                                      />
                                    </button>

                                    <AnimatePresence initial={false}>

                                      {subOpen && (

                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.22 }}
                                          className="overflow-hidden bg-white"
                                        >

                                          {child.children.map((leaf) => (

                                            <Link
                                              key={leaf.path || leaf.title}
                                              to={leaf.path}
                                              onClick={closeMenu}
                                              className={`block pl-14 pr-6 py-2.5 text-sm border-l-2 transition-colors

                                              ${
                                                location.pathname === leaf.path
                                                  ? "text-[#344474] font-semibold border-[#344474] bg-[#344474]/5"
                                                  : "text-slate-600 border-transparent hover:text-[#344474]"
                                              }`}
                                            >
                                              {leaf.title}
                                            </Link>

                                          ))}

                                        </motion.div>

                                      )}

                                    </AnimatePresence>

                                  </div>
                                );
                              }

                              /* ---- Plain link ---- */

                              return (
                                <Link
                                  key={child.path || child.title}
                                  to={child.path}
                                  onClick={closeMenu}
                                  className={`block px-10 py-3 text-sm

                                  ${
                                    location.pathname === child.path
                                      ? "text-sky-600 font-semibold"
                                      : "text-slate-600"
                                  }`}
                                >
                                  {child.title}
                                </Link>
                              );
                            })}

                          </motion.div>

                        )}

                      </AnimatePresence>

                    </>

                  ) : (

                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className={`block px-6 py-4 font-medium

                      ${
                        location.pathname === item.path
                          ? "text-sky-600"
                          : "text-slate-700"
                      }`}
                    >
                      {item.title}
                    </Link>

                  )}

                </div>

              ))}

            </div>

            {/* Bottom Button */}

            <div className="p-6 border-t">

              {/* <Link
                to="/membership"
                onClick={closeMenu}
                className="block w-full text-center bg-sky-600 text-white py-3 rounded-full font-semibold hover:bg-sky-700 duration-300"
              >
                Become Member
              </Link> */}

            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
