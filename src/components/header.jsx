import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const menus = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/case-studies", label: "Case Studies" },
    { path: "/contact", label: "Contac Us" },
  ];
  return (
    <div>
      <div className="flex justify-between items-center p-4">
        <div className="font-raleway text-white text-3xl font-semibold">TahirFolio</div>
        <ul className="flex">
          {menus.map((menu) => {
            return(
            <li className="text-white mx-3" key={menu.path}>
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
