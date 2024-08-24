import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";

import { Store } from "lucide-react";

function Header() {
  return (
    <header className="flex  items-center justify-between h-[8vh] px-5 py-2 font-bold bg-cyan-500 max-[680px]:flex-col">
      <NavLink to="/">
        <h1 className="flex items-center justify-center gap-3 m-3 font-serif text-2xl text-center text-black hover:transition-all hover:scale-110">
          <Store />
          e-Comerce
        </h1>
      </NavLink>

      <NavBar />
    </header>
  );
}

export default Header;
