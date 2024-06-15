import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="flex items-center gap-12 text-2xl text-black ">
      <a href="#">Home</a>
      <a href="#">Contenido</a>
      <a href="#">Contactos</a>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
