import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menus = [
    { id: "home", label: "Home" },
    { id: "stats", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Header height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.div
      className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#ffffff0d]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-[1300px] mx-auto px-4 py-4 sm:py-6 flex justify-between items-center">
        <motion.div
          className="font-raleway text-white text-2xl sm:text-3xl font-semibold cursor-pointer"
          onClick={() => scrollToSection("home")}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          TahirFolio
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          className="hidden lg:flex items-center gap-6 xl:gap-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {menus.map((menu, index) => {
            return (
              <motion.li
                className={`text-white font-medium text-sm xl:text-base cursor-pointer ${index === menus.length - 1 ? "bg-gradient-to-r from-[#c9f31d] to-[#272f06] text-white px-5 xl:px-7 py-2 rounded hover:from-[#b8e226] hover:to-[#2a3f06] transition-all" : "hover:text-[#c9f31d] transition-colors"} `}
                key={menu.id}
                onClick={() => scrollToSection(menu.id)}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {menu.label}
              </motion.li>
            )
          })}
        </motion.ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="lg:hidden bg-[#1a1a2e] border-t border-gray-700"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.ul
            className="flex flex-col px-4 py-4 space-y-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.1
                }
              }
            }}
          >
            {menus.map((menu, index) => {
              return (
                <motion.li
                  className={`text-white font-medium cursor-pointer ${index === menus.length - 1 ? "bg-gradient-to-r from-[#c9f31d] to-[#272f06] text-white px-4 py-2 rounded text-center" : "hover:text-[#c9f31d] transition-colors"} `}
                  key={menu.id}
                  onClick={() => scrollToSection(menu.id)}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  {menu.label}
                </motion.li>
              )
            })}
          </motion.ul>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Header;
