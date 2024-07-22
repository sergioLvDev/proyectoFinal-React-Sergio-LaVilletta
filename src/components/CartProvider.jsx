import { createContext } from "react";
import { useState } from "react";

export const miContexto = createContext();
const Provider = miContexto.Provider;

const carritoInicial = [];

function CartProvider({ children }) {
  const [carritoCant, setCarritoCant] = useState(carritoInicial);
  const agregarAlCarrito = (itemsDe, cantidad) => {
    const itemAgregado = { ...itemsDe, quantity: cantidad };

    const nuevoCarrito = [...carritoCant];

    const estaEnCarrito = nuevoCarrito.find((el) => el.id === itemAgregado.id);

    if (estaEnCarrito) {
      estaEnCarrito.quantity += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }

    setCarritoCant(nuevoCarrito);
  };

  const cantidadEnCarrito = () => {
    return carritoCant.reduce((acc, el) => acc + el.quantity, 0);
  };
  const precioTotal = () => {
    return carritoCant.reduce((acc, el) => acc + el.quantity * el.price, 0);
  };
  const vaciarCarrito = () => {
    setCarritoCant([]);
  };

  return (
    <Provider
      value={{
        carritoCant,
        setCarritoCant,
        agregarAlCarrito,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito,
      }}
    >
      {children}
    </Provider>
  );
}
export default CartProvider;
