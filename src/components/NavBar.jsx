import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className=" flex items-center justify-center gap-5 p-2  text-black max-[450px]:flex-col ">
      <NavLink to="/" className={"itemhover"}>
        Home
      </NavLink>
      <NavLink to="/productos" className={"itemhover"}>
        Productos
      </NavLink>
      <NavLink to="/categoria/Remeras" className={"itemhover"}>
        Remeras
      </NavLink>
      <NavLink to="/categoria/Zapatillas" className={"itemhover"}>
        Zapatillas
      </NavLink>
      <NavLink to="/carrito" className={"itemhover"}>
        <CartWidget />
      </NavLink>
    </nav>
  );
}

export default NavBar;
