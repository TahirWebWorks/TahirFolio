import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const menus = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/contact", label: "Contac Us" },
    { path: "/hire-me", label: "Hire Me" },
  ];
  return (
    <div>
      <div className="flex justify-between items-center py-8">
        <div className="font-raleway text-white text-3xl font-semibold">TahirFolio</div>
        <ul className="flex items-center">
          {menus.map((menu, index) => {
            return(
            <li className={`text-white mx-3 font-medium ${index === menus.length - 1 ? "bg-gradient-to-r from-[#c9f31d] to-[#272f06] text-white px-7 py-2 rounded" : ""} `} key={menu.path}>
              <Link to={menu.path}>{menu.label}</Link>
            </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;
