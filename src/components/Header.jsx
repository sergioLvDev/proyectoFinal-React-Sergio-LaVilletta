import NavBar from "./NavBar.jsx";

function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-12 font-bold bg-cyan-500">
      <a href="#">
        <h1 className="mx-10 font-serif text-3xl text-black">
          Tienda de Calzados
        </h1>
      </a>
      <NavBar />
    </header>
  );
}

export default Header;
