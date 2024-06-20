import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";

function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-6 font-bold bg-cyan-500">
      <NavLink to="/">
        <h1 className="mx-10 font-serif text-2xl text-black">
          Tienda E-Comerce
        </h1>
      </NavLink>
      <NavBar />
    </header>
  );
}

export default Header;
