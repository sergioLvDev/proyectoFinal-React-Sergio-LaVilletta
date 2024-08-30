import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

function NavBar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="flex items-center justify-center gap-5 p-2 text-black max-[530px]:flex-col relative">
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
        <div className="flex items-center cursor-pointer itemhover">
          Categorías
          <ChevronDown className="inline-flex ml-1" />
        </div>
        {dropdown && (
          <ul className=" z-10 w-32 bg-cyan-500 shadow-lg rounded-b-lg min-[530px]:absolute">
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
