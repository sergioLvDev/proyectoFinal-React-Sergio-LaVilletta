import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import Carrito from "./Carrito";
import Home from "./Home";
import ItemDetailContainer from "./ItemDetailContainer";
import CheckOut from "./CheckOut";

function Main() {
  return (
    <main className="p-4 grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
    </main>
  );
}
export default Main;
