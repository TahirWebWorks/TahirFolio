import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menus = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/contact", label: "Contact Us" },
    { path: "/hire-me", label: "Hire Me" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="max-w-[1300px] mx-auto px-4 py-4 sm:py-6 flex justify-between items-center">
        <div className="font-raleway text-white text-2xl sm:text-3xl font-semibold">TahirFolio</div>
        
        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10">
          {menus.map((menu, index) => {
            return(
            <li className={`text-white font-medium text-sm xl:text-base ${index === menus.length - 1 ? "bg-gradient-to-r from-[#c9f31d] to-[#272f06] text-white px-5 xl:px-7 py-2 rounded hover:from-[#b8e226] hover:to-[#2a3f06] transition-all" : "hover:text-[#c9f31d] transition-colors"} `} key={menu.path}>
              <Link to={menu.path}>{menu.label}</Link>
            </li>
            )
          })}
        </ul>

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
        <div className="lg:hidden bg-[#1a1a2e] border-t border-gray-700">
          <ul className="flex flex-col px-4 py-4 space-y-3">
            {menus.map((menu, index) => {
              return(
              <li className={`text-white font-medium ${index === menus.length - 1 ? "bg-gradient-to-r from-[#c9f31d] to-[#272f06] text-white px-4 py-2 rounded text-center" : "hover:text-[#c9f31d] transition-colors"} `} key={menu.path}>
                <Link 
                  to={menu.path} 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {menu.label}
                </Link>
              </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
