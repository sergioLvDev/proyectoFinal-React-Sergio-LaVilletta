import NavBar from "./NavBar.jsx";

function Header() {
  return (
    <header className="bg-cyan-500 flex flex-row justify-between items-center px-5 font-bold  p-6">
      <h1 className="text-black text-3xl font-serif mx-10">Titulo</h1>
      <NavBar />
    </header>
  );
}

export default Header;
