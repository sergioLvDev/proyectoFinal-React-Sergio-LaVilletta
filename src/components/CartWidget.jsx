import { useContext } from "react";
import { CartContex } from "./CartContex";

function CartWidget() {
  const { cantidadEnCarrito } = useContext(CartContex);

  return (
    <div className="flex flex-row items-center justify-around gap-4 mx-3 ">
      <img
        src="/imagenCarrito.png"
        alt="Imagen de un carrito"
        className="w-10"
      />
      <p>{cantidadEnCarrito()}</p>
    </div>
  );
}

export default CartWidget;
