import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="flex flex-row justify-around items-center text-black gap-4 text-2xl ">
      <a href="#">Home</a>
      <a href="#">Contenido</a>
      <a href="#">Contactos</a>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
