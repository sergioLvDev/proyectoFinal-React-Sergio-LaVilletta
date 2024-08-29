import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="flex items-center justify-center gap-5 p-2 text-black max-[530px]:flex-col relative">
      <NavLink to="/" className="itemhover">
        Inicio
      </NavLink>
      <NavLink to="/productos" className="itemhover">
        Productos
      </NavLink>
      <div className="relative">
        <div className="itemhover"> Categorías</div>
        <ul className="absolute z-10 hover:block bg-cyan-500">
          <li>
            <NavLink to="/categoria/Remeras" className="itemhover">
              Remeras
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/Camperas" className="itemhover">
              Camperas
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/Pantalones" className="itemhover">
              Pantalones
            </NavLink>
          </li>
          <li>
            <NavLink to="/categoria/Zapatillas" className=" itemhover">
              Zapatillas
            </NavLink>
          </li>
        </ul>
      </div>
      <NavLink to="/carrito" className="itemhover">
        <CartWidget />
      </NavLink>
    </nav>
  );
}

export default NavBar;
