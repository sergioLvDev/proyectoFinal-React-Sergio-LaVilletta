import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="flex items-center gap-12 text-black text-1xl ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/productos">Productos</NavLink>
      <NavLink to="/categoria/Shoes">Shoes</NavLink>
      <NavLink to="/categoria/Tools">Tools</NavLink>
      <NavLink to="/contacto">Contacto</NavLink>
      <NavLink to="/carrito">
        <CartWidget />
      </NavLink>
    </nav>
  );
}

export default NavBar;
