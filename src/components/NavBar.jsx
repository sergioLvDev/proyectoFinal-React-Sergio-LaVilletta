import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function NavBar({ clicked }) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav
      className={`relative flex-col gap-2 text-black menuNav sm:flex sm:flex-row transition-all duration-500 ease-linear ${
        clicked ? "h-[0vh] opacity-0 overflow-hidden " : "h-[36vh] opacity-100"
      }`}
    >
      <NavLink to="/" className="itemhover">
        Inicio
      </NavLink>
      <NavLink to="/productos" className="itemhover">
        Productos
      </NavLink>
      <div
        className="relative"
        onMouseEnter={() => setDropdown(true)}
        onMouseLeave={() => setDropdown(false)}
      >
        <div className="flex items-center cursor-pointer w-[134px] itemhover">
          Categorías
          <ChevronDown className="inline-flex ml-1" />
        </div>
        {dropdown && (
          <ul className="z-10 w-32 rounded-b-lg shadow-lg bg-cyan-500 sm:absolute">
            <li className="block">
              <NavLink
                to="/categoria/Remeras"
                className="block p-2 itemhover hover:bg-cyan-600"
              >
                Remeras
              </NavLink>
            </li>
            <li className="block">
              <NavLink
                to="/categoria/Camperas"
                className="block p-2 itemhover hover:bg-cyan-600"
              >
                Camperas
              </NavLink>
            </li>
            <li className="block">
              <NavLink
                to="/categoria/Pantalones"
                className="block p-2 itemhover hover:bg-cyan-600"
              >
                Pantalones
              </NavLink>
            </li>
            <li className="block">
              <NavLink
                to="/categoria/Zapatillas"
                className="block p-2 itemhover hover:bg-cyan-600"
              >
                Zapatillas
              </NavLink>
            </li>
          </ul>
        )}
      </div>
      <NavLink to="/checkout" className="block itemhover hover:bg-cyan-600">
        Contacto
      </NavLink>
      <NavLink to="/carrito" className="itemhover">
        <CartWidget />
      </NavLink>
    </nav>
  );
}

export default NavBar;
