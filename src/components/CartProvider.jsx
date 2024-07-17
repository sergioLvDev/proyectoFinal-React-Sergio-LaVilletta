import { createContext, useEffect } from "react";
import { useState } from "react";

export const miContexto = createContext(); // es el contexto y a la vez un objeto
const Provider = miContexto.Provider; // utilizo la propiedad Provider del objeto miContexto como un componente

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

function CartProvider({ children }) {
  const [carritoCant, setCarritoCant] = useState(carritoInicial);
  const agregarAlCarrito = (itemsDe, cantidad) => {
    const itemAgregado = { ...itemsDe, quantity: cantidad };

    const nuevoCarrito = [...carritoCant];

    console.log(nuevoCarrito);

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
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carritoCant));
  }, [carritoCant]);

  return (
    <Provider
      value={{
        carritoCant,
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
