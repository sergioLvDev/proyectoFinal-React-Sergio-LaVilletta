import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import Carrito from "./Carrito";

function Main() {
  return (
    <main className="p-4 grow">
      {/*     <ItemListContainer soyUnAtributo="Bienvenidos a la página n1 de ventas de Calzados" /> */}
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/contacto" element={<p>Contacto</p>} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </main>
  );
}
export default Main;
