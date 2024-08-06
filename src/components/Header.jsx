import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import { AlignJustify } from "lucide-react";

function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-4 font-bold bg-cyan-500">
      <NavLink to="/">
        <h1 className="flex mx-10 font-serif text-2xl text-center text-black">
          Tienda Comercial
        </h1>
      </NavLink>

      <AlignJustify className="abrir-menu" />

      <NavBar />
    </header>
  );
}

export default Header;
