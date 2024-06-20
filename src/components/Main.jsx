import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import Carrito from "./Carrito";
import Home from "./Home";
import Contacto from "./Contacto";
import ItemDetailContainer from "./ItemDetailContainer";

function Main() {
  return (
    <main className="p-4 grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </main>
  );
}
export default Main;
