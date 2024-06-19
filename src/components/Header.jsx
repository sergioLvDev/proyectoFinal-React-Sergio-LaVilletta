import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";

function Header() {
  return (
    <header className="flex items-center justify-between w-full px-5 py-12 font-bold bg-cyan-500">
      <NavLink to="/">
        <h1 className="mx-10 font-serif text-3xl text-black">
          Tienda E-Comerce
        </h1>
      </NavLink>
      <NavBar />
    </header>
  );
}

export default Header;
