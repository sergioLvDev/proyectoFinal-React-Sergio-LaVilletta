import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import { Store } from "lucide-react";
import { useState } from "react";

function Header() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <header className="flex flex-col items-center justify-between min-[774px]:h-[8vh] px-2 font-bold bg-cyan-500 md:flex-row">
      <div className="flex items-center justify-between w-full sm:justify-center md:justify-between">
        <NavLink to="/">
          <h1 className="flex items-center justify-center gap-3 m-3 font-serif text-2xl text-center text-black hover:transition-all hover:scale-110">
            <Store />
            e-Comerce
          </h1>
        </NavLink>
        <div className="menuBtn" onClick={handleClick}>
          <div className={clicked ? "" : "hover:transform rotate-45"}></div>
          <div className={clicked ? "" : "opacity-0"}></div>
          <div className={clicked ? "" : "hover:transform -rotate-45"}></div>
        </div>
      </div>
      <div>
        <NavBar clicked={clicked} />
      </div>
    </header>
  );
}

export default Header;
