import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="flex items-center gap-12 text-2xl text-black ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/productos">Productos</NavLink>
      <NavLink to="/categoria/furniture">Muebles</NavLink>
      <NavLink to="/categoria/fragances">Perfumes</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
      <NavLink to="/carrito">
        <CartWidget />
      </NavLink>
    </nav>
  );
}

export default NavBar;
